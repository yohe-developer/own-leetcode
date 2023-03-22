/**
 * 
 * @param obj 实现一个对象的 flatten 方法
 * @returns 
 */
const flatten = (obj: any) => {
  const result: any = {};
  const help = (parent: any, o: any) => {
    for (const [key, value] of Object.entries(o)) {
      const objKey =
        parent + (Array.isArray(o) ? `[${key}]` : (parent ? "." : "") + key);
      if (typeof value !== "object") {
        result[objKey] = value;
      } else {
        help(objKey, value);
      }
    }
  };

  help("", obj);
  return result;
};

const obj = {
  a: {
    b: 1,
    c: 2,
    d: {
      e: 5,
    },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

console.log(flatten(obj));
