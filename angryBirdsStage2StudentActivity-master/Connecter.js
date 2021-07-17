class Connecter{
    constructor(bodya,bodyb){
        var options={
            bodyA:bodya,
            bodyB:bodyb,
            length:2,
            stiffness:0.3 
        }

        this.string=Matter.Constraint.create();
        World.add(world,this.string);

    }
    display(){

    }
}