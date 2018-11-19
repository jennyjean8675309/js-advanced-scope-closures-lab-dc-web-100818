const produceDrivingRange = function(blockRange) {
  return function(blockA, blockB) {
    const a = parseFloat(blockA);
    const b = parseFloat(blockB);
    const distance = Math.abs(a - b);
    debugger
    if (distance > blockRange) {
      return `${Math.abs(distance - blockRange)} blocks out of range`;
      debugger
    } else {
      return `within range by ${Math.abs(distance - blockRange)}`;
      debugger
    }
  }
}

const produceTipCalculator = function(decimal) {
  return function(fare) {
    return fare * decimal;
  }
}

const createDriver = function() {
  let driverId = 0;

  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
