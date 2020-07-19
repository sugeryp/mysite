const obj = { id: 1, name: "js-primer", bio: null };
const replacer = (key, value) => {
    if (key === "id") {
        return undefined;
    }
    return value;
};
console.log(JSON.stringify(obj, replacer)); // => '{"id":1,"name":"js-primer"}'