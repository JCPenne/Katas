function urlDecode (text) {
  let array = text.split('&');
  console.log(array);
  let keys = [];
  let values = [];
  let object = {};


  for (i = 0; i < array.length; i++) {
    keys.push(array[i].split('=')[0]); 
    values.push(array[i].split('=')[1])
  }
  for (i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i].replaceAll('%20',' ');
  }
  return object;
};
console.log(urlDecode('duck=rubber'));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));

