{const json = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json);
console.log(obj.id); // => 1
console.log(obj.name); // => "js-primer"
console.log(obj);}



{let json = 33
    json = '{ "id": "undefined", "name": null }';
    const obj = JSON.parse(json);
    console.log(obj);}