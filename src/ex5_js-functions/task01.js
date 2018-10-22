  function Calculator(){
    var result=0;

    return {
       getResult: function(){
                return result;
      },
      
       add: function(a){
         
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

//}//d
   var g = Calculator();
  console.log(g.getResult() );
  g.result=100;
  console.log(g.getResult() );
  g.add(2)(11)(4);
  console.log(g.getResult() );
  g.multiply(6)(2);
  console.log(g.getResult() );
  g.divide(3);
  console.log(g.getResult() );
  
