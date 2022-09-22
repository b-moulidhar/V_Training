class Person{
    constructor(cname){
        this.name = cname;
    }
    canWalk(){
        return this.name+" can walk";
    }
    sayName(){
        return this.name;
    }
}

export default Person;