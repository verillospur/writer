// 
//  _promises_test.js
//  ~/
// 
//  created:    2021-07-17
// 
//  promises recursion/parallel resolution test
// 
'use strict';

const framework = require('./framework');

const test = () => {
  const logger = require('./log');
  logger.log("-- Serious psychological disturbances: ");
  logger.log("-- | promises recursion/parallel resolution test ");
 

  // let lg = msg => { console.log(`..> ${msg}`) };
  let lg = (msg, t = true) => { if (t) console.log(`..> ${msg}`); };
  // let lg = (msg, t = false) => { if (t) console.log(`..> ${msg}`); };


  let runs = 0;

  const exec = input => {
    runs++;
    lg(`---[${runs} runs]---`);
    // if ((runs % 1000000) == 0) lg(`---[${runs} runs]---`, true);
    return new Promise(
      (resolve, reject) => {

        lg(`[exec(${input})]`);

        // if we have enough, steal 
        // some for parallel wotsits
        if (input > 10) {
          const wotsits = [];
          for (let i = 0; i < 5; i++) {
            lg(`e-all-exec-----${input}`);
            wotsits.push(exec(input - 1 - i));
          }
          Promise.all(wotsits)
            .then(v => {
              lg(`e-all-then------${v}`);
              return resolve(v);
            })
        }
        else {
          // if there's any left, use 
          // one recursively
          if (input > 0) {
            // doSomething(input - 1)
            exec(input - 1)
              .then(v => {
                lg(`e-then----${v}`);
                return resolve(v);
              })
          }
          else {
            // otherwise just resolve (with 0)
            lg(`e-resolving-----${input}`);
            return resolve(input);
          }
        }
      }
    );
  };


  let exec_n = 15;
  exec_n = Number.parseInt(framework.getCommandLineArgs()[0])
  if (!framework.getObjectType(exec_n) == 'Number') exec_n = 15;
  if (isNaN(exec_n)) exec_n = 15;

  exec(exec_n)

    .then(v => {

      const lgt = lg;
      lg = (m, t = true) => { if (t) lgt(m, true); };

      let pf_c = 0;
      const pf = (v, n) => {
        pf_c++;
        const pf_t = true;  //((pf_c % 100) == 0);
        lg(`---[${pf_c} pf_c]---`, pf_t);
        lg(`---[${runs} runs]---`, pf_t);
        if (framework.getObjectType(v) == 'Array') {
          if (framework.getObjectType(v[0]) == 'Array') {
            for (let i = 0; i < v.length; i++) {
              pf(v[i], n + 1, pf_t);
            }
          } else {
            // lg('COMPLETE: ');
            lg(`COMPLETE: ${v.length} item(s)`, pf_t);
            for (let i = 0; i < v.length; i++) {
              lg(` -${n}-${i}- [${v[i]}]`, pf_t);
            }
          }
          // lg(`COMPLETE: ${v.length} item(s)`);
        } else {
          lg(`COMPLETE: ${v}-${n}`, pf_t);
        }
      };

      pf(v, 0);
      lg(`--[ ${exec_n} ]--`);

    })
    ;
};

// test();

module.exports = {
  run: test
};
