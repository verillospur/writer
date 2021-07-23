// 
//  _check-files.js
//  ~/
// 
//  created:    2021-07-12
// 
//  run each .js file through a V8 compiler and 
//  report any errors
//
'use strict';

const _run = exec_path => {

    const logger = require('./log');
    logger.log("Serious psychological disturbances...");  
    const lg = msg => { console.log(`..> ${msg}`) };
    lg(`Executing checks on: ${exec_path}`);
  
    const vm = require('vm');
    const fs = require('fs');
    const path = require('path');
    const framework = require('./framework');
  
    const dir_excludes = ['node_modules', '.git', 'db'];//, '_'];
    const file_includes = ['.js'];
  
    const files_processed = [];
    const files_verified = [];
    const file_errors = [];
    const dir_errors = [];
  
    const process_file = file_path => {
      if (!file_includes.find(v => path.basename(file_path).endsWith(v))) {
        lg(`Skipping file: ${path.basename(file_path)}`);
      }
      else {
        lg(`Processing file: ${path.basename(file_path)} (${path.dirname(file_path)})`);
  
        files_processed.push(file_path);
  
        try {
          const script_content = framework.filesystem.readFile(file_path);
          // the following line throws-up if errors are found in script_content
          const script_bot = new vm.Script(script_content, file_path);
          files_verified.push(file_path);
        } catch (err) {
          file_errors.push(
            {
              path: file_path,
              err: err,
              error: err,
            }
          );
        }
      }
    };
  
    const process_dir = dir_path => {
      return new Promise((resolve, reject) => {
        lg(`Processing dir: ${path.basename(dir_path)}`);
        if (dir_excludes.includes(path.basename(dir_path))) {
          lg(' -- EXCLUDED --. Dir not processed.');
          return resolve(dir_path);
        }
        else {
          fs.promises.readdir(dir_path, { withFileTypes: true })
            .then(files => {
  
              lg(` - ${files.length} entries`);
  
              const dirs_execs = [];
  
              files.forEach(
                e => {
                  if (e.isDirectory()) {
                    // process dir
                    // process_dir(path.join(dir_path, e.name))
                    //   .then(() => {
                    //     return resolve(dir_path);
                    //   });
                    dirs_execs.push(process_dir(path.join(dir_path, e.name)));
                  }
                  else {
                    // process file
                    process_file(path.join(dir_path, e.name));
                    // return resolve(dir_path);
                  }
                });
              
              lg(` - ${dirs_execs.length} directories`);
  
              if (dirs_execs.length == 0) {
                lg(' - resolved.');
                return resolve(dir_path);
              }
              else {
                Promise.allSettled(dirs_execs)
                .then(v => {
                  lg(' - all resolved.');
                  return resolve(v);
                })
                .catch(err => {
                  lg(` -- (all) ERROR: ${err}`);
                  lg(' - (all) rejected.');
                  return reject(err);
                });
              }
              
            })
            .catch(err => {
              dir_errors.push(
                {
                  path: dir_path,
                  err: err,
                  error: err,
                }
              );
              lg(` -- ERROR: ${err}`);
              lg(' - rejected.');
              return reject(err);
            });
        }
      })
    };
  
    files_processed.length = 0;
    file_errors.length = 0;
    dir_errors.length = 0;
    
    lg(`-== PROCESSING: ${exec_path} ==-`);

    process_dir(exec_path)
      .then(v => {
        // lg(`All done. (${v})`);
        lg('All done.');
  
        const po = o => {
          if (framework.isArray(o)) {
            console.log(`(array:${o.length}-items)`);
            o.forEach(po);
          } else {
            // lg(`[obj]: ${o}`);
            // console.log(o);
            // console.log(JSON.stringify(o));
            lg(`[obj]: ${JSON.stringify(o, null, '--')}`);
          }
        };
        po(v);
      })
      .catch(err => {
        lg('ERROR: ' + err);
      })
      .finally(() => {
        lg(`${dir_errors.length} dir errors.`);
        dir_errors.forEach(
          e => {
            lg(` -- ${e.err}`);
            lg(` -- ${e.path}`);
            lg(' -'.repeat(10));
          }
        );
        
        lg(`${file_errors.length} file verification errors.`);
        file_errors.forEach(
          e => {
            lg(` -- ${e.err}`);
            lg(` -- ${e.path}`);
            lg(' -'.repeat(10));
          }
        );
  
        lg(`${files_verified.length} files verified.`);
        files_verified.forEach(
          fv => { 
            // lg(JSON.stringify(fv, null, 2).replace(/\\\\/g, '/'));
            lg(fv.replace(/\\/g, '/'));
          });
        lg(`  
              ${files_verified.length} files verified.
              ${file_errors.length} verification errors.
              ${dir_errors.length} directory errors.`);
  
      });
};

//_run(__dirname);

module.exports = {
  run: _run
};

