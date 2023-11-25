// remember classes are not hoisted meaning we cannot initiate object before defining class.

class student {
    // javascript will call constructor even user don't call it
    // all the properties of a class must be assigned in constructor
    // class.
    constructor(name, age, section) {
        this.myname = name;
        this.myage = age;
        this.mysection = section;
    }
    biodata() {
        // console.log('Hi i am class method');
        console.log(`HI!!! My name is ${this.myname}. I am ${this.myage} years old and I study in class ${this.mysection}`);
    }
}

// keyword extend is used to inherit the base class
// dervided classes cannot use static function from base class
// only instance methods from base can be accessed and all methods are instance methods by default
class player extends student {
    constructor(name,age,section,game) {
        super(name,age,section); // this method will call base class constructor
        this.mygame = game;
    }
    player_biodata() {
        super.biodata();
        console.log(`I play ${this.mygame}`);
    }
}

let obj1 = new student('ahsan', 35, 'MS');
let obj2 = new student('aminah', 5, '1');
obj1.biodata();
obj2.biodata();

let obj3 = new player('ahsan', 35, 'MS','Chess');
let obj4 = new player('aminah', 5, '1','football');
obj3.biodata();
obj4.player_biodata();

console.log(obj1);
console.log(obj3);
