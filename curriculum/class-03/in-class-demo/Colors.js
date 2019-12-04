module.exports = class Colors {
  constructor() {
    this.colors = [];
  }

  add(color) {
    if(!this.has(color)) this.colors.push(color);
  }

  has(color) {
    return this.colors.includes(color);
  }
};
