class SlingShot{
    constructor(A,B){
        var options = {
            bodyA:A,stiffness:0.05,
            pointB:B,length:10
        }
        this.ss=B
         this.cons = Constraint.create(options);
        World.add(world,this.cons);
        


    }
    
    
    
    
    
    
    
    
    display(){
         if(this.cons.bodyA!=null)
       {line (this.cons.bodyA.position.x,this.cons.bodyA.position.y,this.ss.x,this.ss.y)};
 }
   Release(){
       this.cons.bodyA=null
   } 


}