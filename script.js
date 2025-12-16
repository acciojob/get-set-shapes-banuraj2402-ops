//complete this code
class Rectangle { 
    constructor(width, height) {
        if (width <= 0 || !Number.isInteger(width) || height <= 0 || !Number.isInteger(height)) {
            throw new Error("Dimensions must be positive integers.");
        }
        this.w = width;
        this.h = height;
    }
    get width() {
        return this.w;
    }

    get height() {
        return this.h;
    }

    getArea() {
        return this.width * this.height;
    }
}
class Square extends Rectangle { 
    constructor(side) {
        if (side <= 0 || !Number.isInteger(side)) {
            throw new Error("Side must be a positive integer.");
        }
        super(side, side);
    }
    
    getPerimeter() {
        return 4 * this.width; 
    }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
