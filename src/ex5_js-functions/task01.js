  function Calculator(){
    var result=0;

    return {
       getResult: function(){
                return result;
      },
      
       add: function(a){
         if( arguments.length===0) a=0;
        result+=a;
         function sum(a){
              result+=a;
                  return sum;
         }
         sum.valueOf=function(){
                     return result
         }
         return sum;
      },
       subtract: function(a){
        result-=a;
         function s(a){
          result-=a;
          return s;
         }
        s.valueOf=function(){
          return result
        }
       return s;
      },
       divide: function(a){
        result/=a;
         function d(a){
          result/=a;
          return d;
         }
         d.valueOf=function(){
            return result
        }
       return d;
      },
      multiply: function(a){
        result*=a;
        function m(a){
          result*=a;
          return m;
        }
        m.valueOf=function(){
          return result;
        }
        return m;
      },
       setReset: function(){
        result=0;
        
      }
}
}


   var g = Calculator();
  console.log(g.getResult() );
  g.result=100;
  console.log(g.getResult() );
  g.add(5)()(4)(3);
  console.log(g.getResult() );
  g.multiply(6)(2);
  console.log(g.getResult() );
  g.divide(3);
  console.log(g.getResult() );
  
 /* function  g()
  {
    return arguments;
  }*/
  var a = function()
  {
    return console.log(arguments.length);
  };
a
g.add(5)(11)()(3)().arguments