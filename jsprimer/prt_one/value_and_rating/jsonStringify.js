const obj = { id: 1, name: "js-primer", bio: null };
console.log(JSON.stringify(obj)); // => '{"id":1,"name":"js-primer","bio":null}'

console.log("----------------------------------------")

const obj2 = { id: 1, name: "js-primer", bio: undefined, kk: new Set(), "ll" : Symbol("kk"), [Symbol("mm")]: "dd"};
console.log(JSON.stringify(obj2)); // => '{"id":1,"name":"js-primer","bio":null}'