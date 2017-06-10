let arr = ['some', 'vals', 'here'];
for (let i in arr){
  console.log(i);
}
for (let v of arr){
  console.log(v);
}

let myObj = {
  'test': 5,
  'nice': 'foobar',
  12    : 24,
  'fn'  : function(){alert('hi')}
}

for (let key in myObj){
  console.log(key)
}

for (let [key, value] of Object.entries(myObj)){
  console.log(val)
}
