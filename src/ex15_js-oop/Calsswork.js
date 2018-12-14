var shape = {
    name: 'Name',
    type: 'shape',
    getType: function () {
        return this.type;
    },
    getPerimeter: function () {
    },
    draw: function () {
        console.log(this.name + ' is drawn');
    }
}

var Triangle = function (name, a, b, c) {
    this._type = 'Triangle';
    this.name = name;
    this._a = a||1;
    this._b = b||1;
    this._c = c||1;
}
Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function () {
    return this._a + this._b + this._c;
}

/*g = new Triangle('tri', 1,2,3)*/
var Square = function (name, a) {
	
    this.type = 'Square';
    this.name = name;
    this._a = a||1;
	getPerimeter = function () {
    return this.a * 4;}
}
Square.prototype = shape;
Square.prototype.constructor = Square;

/*g = new Square('tri',3)*/

var Circle = function (name, a) {
    this.type = 'Circle';
    this.name = name;
    this._a = a||1;
    
}
Circle.prototype = Object.create(Square.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getPerimeter = function () {
    Number(this._a * 2 *Math.PI.toFixed(2)).toFixed(2);
}

var t = new Triangle('t', 1, 2, 3);
t.draw();
console.log('Type: ' + t.getType());
console.log('Perimeter: ' + t.getPerimeter());

var s = new Square('s', 2);
s.draw();
console.log('Type: ' + s.getType());
console.log('Perimeter: ' + s.getPerimeter());

var c = new Circle('c',  5);
c.draw();
console.log('Type: ' + c.getType());
console.log('Perimeter: ' + c.getPerimeter());