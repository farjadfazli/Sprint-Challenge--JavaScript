// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height) {
    // this.length = length;
    // this.width = width;
    // this.height = height;
//   }

// CuboidMaker.prototype.volume = function() {
//     return (this.length*this.width*this.height);
// }

// CuboidMaker.prototype.surfaceArea = function() {
//     return 2*(this.length*this.width + this.length*this.height + this.width*this.height);
//   }

class CuboidMakerClass {
    constructor(attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume() {
        return (this.length*this.width*this.height);
    }
    surfaceArea() {
        return 2*(this.length*this.width + this.length*this.height + this.width*this.height);
    }
}

let newCuboid = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(cubeAttrs) {
        super(cubeAttrs);
    }
    volume() {
        return Math.pow(this.length, 3);
    }
    surfaceArea() {
        return 6 * (Math.pow(this.length, 2));
    }
}

let cube = new CubeMaker({
    length: 2
})

console.log(cube.volume());
console.log(cube.surfaceArea());