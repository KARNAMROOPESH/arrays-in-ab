class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png");
    this.trajactory = [ ];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
   if(this.body.position.x>220&&
      this.body.velocity.x>5)
     { var  position = [this.body.position.x , this.body.position.y];
   this.trajactory.push(position);}
   for(var i = 0; i<this.trajactory.length; i=i+1 ){
      image(this.smokeimg,this.trajactory[i][0],this.trajactory[i][1]);
   }

  }
}