interface Shape {
    name: string;
    getArea(): number;
  }
  
  class Rectangle implements Shape {
    constructor(public name: string, public width: number, public height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Circle implements Shape {
    constructor(public name: string, public radius: number) {}
  
    public getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  const shapes: Shape[] = [
    new Rectangle("Rectangle", 10, 20),
    new Circle("Circle", 5),
  ];
  
  shapes.forEach(shape => {
    console.log(`${shape.name} has area ${shape.getArea()}`);
  });
  