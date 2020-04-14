class    Box{
    constructor(x, y, width, height, angle) {
        //var options = {
            //'isStatic':true,
            //'friction':1.0,
            //'density':1.0
      //  }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
}