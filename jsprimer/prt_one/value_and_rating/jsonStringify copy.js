const obj = { id: 1, name: "js-primer", bio: null };
const replacer = (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
};
console.log(JSON.stringify(obj, replacer)); // => '{"id":1,"name":"js-primer"}'



const obj2 = { id: 1, name: "js-primer", bio: null };
const replacer2 = ["id", "name"];
console.log(JSON.stringify(obj2, replacer2)); // => '{"id":1,"name":"js-primer"}'



const obj3 = { id: 1, name: "js-primer" };
// replacer引数を使わない場合はnullを渡して省略するのが一般的です
console.log(JSON.stringify(obj3, null, 2)); 
/*
{
   "id": 1,
   "name": "js-primer"
}
*/

const obj4 = { id: 1, name: "js-primer" };
console.log(JSON.stringify(obj4, null, "\t")); 
/*
{
   "id": 1,
   "name": "js-primer"
}
*/