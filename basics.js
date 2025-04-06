function exampleFunction(param1 , param2){
    
    let answer = param1.toLowerCase().concat(param2.toLowerCase());
    
    return answer;

}

  let firstname = "JOHN"
  let lastname = "DOE"

  let a = exampleFunction(firstname , lastname);
  console.log(a)