import Person from "./person.js";
class Myclass extends Person{
    fname = "Moulidhar";
    lname = "B";
    #emp_id = 5441;
    static version = 2023;
    constructor(efname,elname,eid,name){
        super(name);
        this.fname = efname;
        this.lname = elname
        this.emp_id = eid;
    }
    fullname(){
        return this.fname+" "+this.lname;
    }
    static getVersion(){
        return this.version;
    }
    get emp_id(){
        return this.#emp_id
    }
    set emp_id(nemp_id){
        this.#emp_id = nemp_id;
    }
}

export default Myclass;