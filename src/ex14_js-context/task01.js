function Calculator() {
  var result = 0;

  return {

    getResult: function () {

      return result;
    },

    add: function (a) {
      if (typeof a === 'number' && !isNaN(a))
        result += a;
      return this;
    },
    subtract: function (a) {
      if (typeof a === 'number' && !isNaN(a))
        result -= a;
      return this;
    },
    divide: function (a) {
      if (typeof a === 'number' && !isNaN(a))
        result /= a;
      return this;
    },
    multiply: function (a) {
      if (typeof a === 'number' && !isNaN(a))
        result *= a;
      return this;
    },
    reset: function () {
      result = 0;
      return this;
    },
    setState: function (a) {
      result = a;
      return this;
    },
    fetchData : function(callback){
      callback.call(this);
      this.setState(500); 
      return this;
    }
  }
}


var g = new Calculator();
g.add(10);
console.log(g.getResult());
g.result = 100;
console.log(g.getResult());
// console.log(g.getResult() );
// g.add(2).reset();
// console.log(g.getResult() );
// g.add(1).multiply(2).divide(4).setState(3);
// console.log(g.getResult() );
/*g.multiply()(2);
console.log(g.getResult() );
g.divide(3)(2);
console.log(g.getResult() );*/
// g.add(100)
// .multiply(2)
// .divide(20)
// .reset()
// .subtract(1)
// .getResult();

console.log(g.result); 