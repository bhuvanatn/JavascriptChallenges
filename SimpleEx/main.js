console.log("Hi");
const simpleSumsObj = {

    s1: function(num){
      return num % 2 === 0 ? 0 : 1
    },
  
    s2: function(num){
      return ( num * ( num + 1 ) ) / 2
    },
  
    combinedResult: function(num){
      let s1 = this.s1(num);
      let s2 = this.s2(num);
      console.log(`s1 result: ${s1}, s2 result: ${s2}`);
    }
  
  }
  
  simpleSumsObj.combinedResult(Infinity)
  simpleSumsObj.combinedResult(10)
  simpleSumsObj.combinedResult(4)
  simpleSumsObj.combinedResult(3)



  let points = 60;
  console.log("points", points);
   points = 50;
  console.log("only points", points);