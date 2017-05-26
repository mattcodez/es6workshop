//let and const
//quick run down
function basics(){
  //no hoisting
  console.log(v1); //undefined
  var v1 = 'foo';
  console.log(l1); //throws exception, l2 undefined
  let l1 = 'foo';

  //block scoped
  if (1){
    var v2 = 'bar';
    let l2 = 'bar';
  }
  console.log(v2); //bar
  console.log(l2); //throws exception, l2 undefined

  //no-reassignment
  const l1 = 5; //throws exception, l1 already defined
}

//let behavior in for loop
//participation, show difference with var
function loops(){
  for (var i = 0; i < 10; i++){
    window.setTimeout(function(){console.log(i);});
  }
  //ask for expected output of above
  //ask for explanation about why this happens

  //how to fix the old way
  //ask for someone to fix in code editor
  for (var j = 0; j < 10; j++){
    function(){ //IIFE
      var temp = i;
      window.setTimeout(function(){console.log(temp);});
    }();
  }

  //ask for guess for new way
  for (let k = 0; k < 10; k++){
    window.setTimeout(function(){console.log(k);});
  }
}
