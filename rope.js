class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length:10,
            stiffness:0.004
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
   fly(){
       this.rope.bodyA = null
   } 
   display(){
       if (this.rope.bodyA){
           push();
           line( this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.pointB.x, this.pointB.y)
           pop ();
       }
   }
   attach(chain){
    this.rope.bodyA = chain;
   }

}