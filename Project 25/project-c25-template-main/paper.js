class Paper {
    constructor(x, y) {
      var options = {
          restitution:0.3,
          friction:0,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y,angle, 50, 50, options);
      this.image = loadImage("paper.png")
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY; 
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("grey")
      strokeWeight(4)
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  