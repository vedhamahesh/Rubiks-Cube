// Small Cubes 
class Cubie {

  constructor(x, y, z, c1, c2, c3, c4, c5, c6) {
    this.x = 100 * (x - 1);
    this.y = 100 * (y - 1);
    this.z = 100 * (z - 1);
    this.xRotate = 0;
    this.yRotate = 0;
    this.zRotate = 0;
    this.rotates = [];
    this.frontColor = c1;
    this.backColor = c2;
    this.bottomColor = c3;
    this.topColor = c4;
    this.rightColor = c5;
    this.leftColor = c6;
  }

  // Updates every frame
  update(c1, c2, c3, c4, c5, c6) {
    this.frontColor = c1;
    this.backColor = c2;
    this.bottomColor = c3;
    this.topColor = c4;
    this.rightColor = c5;
    this.leftColor = c6;
  }

  // Shows One "Face" Using Cube
  showFace(w, h, d, t, turn, axis, posneg) {

    push();

    rotateX(this.xRotate);
    rotateY(this.yRotate);
    rotateZ(this.zRotate);

    for (var i = this.rotates.length - 1; i >= 0; i--) {
      rotateX(this.rotates[i].x);
      rotateY(this.rotates[i].y);
      rotateZ(this.rotates[i].z);
    }

    translate(this.x, this.y, this.z);

    translate(t);
    box(w, h, d);
    pop();
  }

  // Shows All "Faces"
  showAll() {
    fill(this.frontColor);
    this.showFace(98, 98, 10, createVector(0, 0, 45)); // front
    fill(this.backColor);
    this.showFace(98, 98, 10, createVector(0, 0, -45)); // back
    fill(this.bottomColor);
    this.showFace(98, 10, 98, createVector(0, 45, 0)); // bottom
    fill(this.topColor);
    this.showFace(98, 10, 98, createVector(0, -45, 0)); // top
    fill(this.rightColor);
    this.showFace(10, 98, 98, createVector(45, 0, 0)); // right
    fill(this.leftColor);
    this.showFace(10, 98, 98, createVector(-45, 0, 0)); // left
  }

}