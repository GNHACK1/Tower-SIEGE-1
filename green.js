class Green{
    constructor(x,y){
    var options = {
        'friction':2.0,
        'density':0.1
      }
       this.body= Bodies.rectangle(x,y,40,70);
       World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(3);
      rectMode(CENTER);
      fill(63, 224, 208);
      rect(pos.x, pos.y,40,70);
    }


}