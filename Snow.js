class Snow {
    constructor (x,y,width,height) {
        var options = {
            density:0.5,
            friction:1,
            restitution:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width  = width;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }

display(){
    var pos = this.body.position;
    push()
    imageMode(CENTRE);
    image(pos.x,pos.y,this.width,this.height)
    pop();
}
}