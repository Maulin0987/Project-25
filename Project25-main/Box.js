class Box 
  {
      constructor(x, y, width, height) 
      {
        var options = 
        {
            isStatic:true,
            'restitution':0.8,
            'friction':0.3,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);

        dustBin1 = new Box(1100,495,150,15);
	dustBin2 = new Box(1185,420,15,170);
	dustBin3 = new Box(1015,420,15,170);
      }
      display()
      {
          dustBin1.display();
          dustBin2.display();
          dustBin3.display();
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };