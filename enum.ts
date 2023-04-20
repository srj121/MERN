enum Color {
    Red,
    Green,
    Blue
  }
  
  function getColorName(color: Color): string {
    switch (color) {
      case Color.Red:
        return "red";
      case Color.Green:
        return "green";
      case Color.Blue:
        return "blue";
      default:
        throw new Error("Invalid color");
    }
  }
  
  console.log(getColorName(Color.Red)); // Output: "red"
  