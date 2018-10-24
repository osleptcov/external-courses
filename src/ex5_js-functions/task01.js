function Calculator(){
  var result=0;

  return {
     getResult: function(){
              return result;
    },
    
     add: function(a){
      if (typeof a==='number'&&!isNaN(a))
      result+=a;
       function sum(a){
        if (typeof a==='number'&&!isNaN(a))
            result+=a;
                return sum;
       }
       sum.valueOf=function(){
                   return result
       }
       return sum;
    },
     subtract: function(a){
      if (typeof a==='number'&&!isNaN(a))
      result-=a;
       function s(a){
        if (typeof a==='number'&&!isNaN(a))
        result-=a;
        return s;
       }
      s.valueOf=function(){
        return result
      }
     return s;
    },
     divide: function(a){
      if (typeof a==='number'&&!isNaN(a))
      result/=a;
       function d(a){
        if (typeof a==='number'&&!isNaN(a))
        result/=a;
        return d;
       }
       d.valueOf=function(){
          return result
      }
     return d;
    },
    multiply: function(a){
      if (typeof a==='number'&&!isNaN(a))
      result*=a;
      function m(a){
        if (typeof a==='number'&&!isNaN(a))
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
g.add(2)()(1)()(4);
console.log(g.getResult() );
g.multiply()(2);
console.log(g.getResult() );
g.divide(3)(2);
console.log(g.getResult() );

