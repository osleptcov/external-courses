function Calculator() {
  this.result = 0;

  

    this.getResult= function () {

      return this.result;
    };

    this.add= function (a) {
      if (typeof a === 'number' && !isNaN(a))
        this.result += a;
      return this;
    };
    this.substract= function (a) {
      if (typeof a === 'number' && !isNaN(a))
        this.result -= a;
      return this;
    };
    this.divide= function (a) {
      if (typeof a === 'number' && !isNaN(a))
        this.result /= a;
      return this;
    };
   this. multiply= function (a) {
      if (typeof a === 'number' && !isNaN(a))
        this.result *= a;
      return this;
    };
    this.reset= function () {
      this.result = 0;
      return this;
    };
    this.setState= function (a) {
      this.result = a;
      return this;
    };
    this.fetchData = function(callback){
      callback.call(this);
      this.setState(500); 
      return this;
    };
  
}

function SimpleCalculator(a) {
    Calculator.call(this,arguments);
}

SimpleCalculator.prototype = Calculator;
SimpleCalculator.prototype.constructor = SimpleCalculator;


function TrygonometryCalculator() {
    Calculator.call(this);
}

TrygonometryCalculator.prototype = Calculator;
TrygonometryCalculator.prototype.constructor = TrygonometryCalculator;

TrygonometryCalculator.prototype.getSin = function() {
    this.result = Math.sin(this.result);
    return this;
}

TrygonometryCalculator.prototype.getCos = function() {
    this.result = Math.cos(this.result);
    return this;
}

TrygonometryCalculator.prototype.getTan = function() {
    this.result = Math.tan(this.result);
    return this;
}
TrygonometryCalculator.prototype.getCosH = function() {
    this.result = Math.cosh(this.result);
    return this;
}

function EngineerCalculator() {
    TrygonometryCalculator.call(this);
}

EngineerCalculator.prototype = Object.create(TrygonometryCalculator.prototype); 
EngineerCalculator.prototype.constructor = EngineerCalculator;

EngineerCalculator.prototype.getSqrt = function() {
    this.result = Math.sqrt(this.result);
    return this;
}

EngineerCalculator.prototype.getLog10 = function() {
    this.result = Math.log10(this.result);
    return this;
}

EngineerCalculator.prototype.getLn = function() {
    this.result = Math.log(this.result);
    return this;
}
EngineerCalculator.prototype.getNegative = function() {
    this.result = -this.result;
    return this;
}
EngineerCalculator.prototype.getAbs = function() {
    this.result = Math.abs(this.result);
    return this;
}


var simple = new SimpleCalculator();
console.log(simple.add(50).substract(10).getResult());

var tryg = new TrygonometryCalculator();
console.log(tryg.add(Math.PI/2).getSin().getResult());
console.log(tryg.reset().getCos().getResult());


var engr = new EngineerCalculator();
engr.add(50).substract(10).getNegative().divide(30).getCos().getResult();