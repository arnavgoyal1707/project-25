class Crumpled {
    constructor() {
      var options = {
        
         'restitution':0.3,
         'friction':0.5,
          'density':1.2
         
      }
      this.body = Bodies.circle(190,600,40, options);
      this.image=loadImage('paper.png')
     
      World.add(world, this.body);
    }
    display(){
      this.body.scale=0.2
      var pos =this.body.position;
    
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     rotate(angle);
      image(this.image, 0, -20, 80,80);
 
      pop();
    }
    }
      ;