// 
//  get-object-type.js
//  ~/framework/
// 
//  created:    2021-06-28
// 
//  Return object type (as string)
// 
'use strict';

/*
> Object.prototype.toString.call([1,2,3])
"[object Array]"
> Object.prototype.toString.call("foo bar")
"[object String]"
> Object.prototype.toString.call(45)
"[object Number]"
> Object.prototype.toString.call(false)
"[object Boolean]"
> Object.prototype.toString.call(new String("foo bar"))
"[object String]"
> Object.prototype.toString.call(null)
"[object Null]"
> Object.prototype.toString.call(/123/)
"[object RegExp]"
> Object.prototype.toString.call(undefined)
"[object Undefined]"
 012345678901234567
*/

const getObjectType = obj => {
  const ts = Object.prototype.toString.call(obj);
  const t = ts.substr(8, (ts.length - 8 - 1));
  return t;
};

module.exports = {
  getObjectType: getObjectType
};
