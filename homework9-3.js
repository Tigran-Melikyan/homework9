class Person {
    constructor(firstName, lastName, age, gender){
        this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
    }
	toString () { 
		return `${this.firstName} ${(this.lastName === undefined)? '': this.lastName} ${(this.age === undefined)? '': this.age} ${(this.gender === undefined)? '': this.gender} `; 
	}
	get firstName() {
		return this._firstName;
	}
	get lastName() {
		return this._lastName;
	}
	get age() {
		return this._age;
	}
	get gender() {
		return this._gender;
	}
	set gender(x) {
		this._gender = x;
	}
	set age(x) {
		this._age = x;
	}
	set firstName(x) {
		this._firstName = x;
	}
	set lastName(x) {
		this._lastName = x;
	}
}

class Student extends Person{
	constructor(firstName, lastName, age, gender, program, year, fee){
		super(firstName, lastName, age, gender);
		this.program = program;
		this.year = year;
		this.fee = fee;
		this.exams = [];
		for(let programItem of this.program) {
			this.exams[programItem] = 0;
		}
	}
	toString () { 
		return `${this.firstName} ${this.lastName} ${(this.year === undefined)? '': this.year} ${(this.fee === undefined)? '': this.fee}`; 
	}
	passExam(program, grade){
		this.exams[program] = grade;
		let isPassed = true;
		for(let exam in this.exams) {
			if(this.exams[exam] < 50) {
				isPassed = false;
				break;
			}
		}
		
		if(isPassed) {
			++this._year;
		}
	}
	get year() {
		return this._year;
	}
	set year(x) {
		this._year = x;
	}
	get program() {
		return this._program;
	}
	set program(x) {
		this._program = x;
		this.exams = [];
		for(let programItem of this._program) {
			this.exams[programItem] = 0;
		}
	}
	get fee() {
		return this._fee;
	}
	set fee(x) {
		this._fee = x;
	}
}

class Teacher extends Person{
	constructor(firstName, lastName, program, pay){
		super(firstName, lastName);
	    this.program = program;
		this.pay = pay;
    }
	
	
	toString = function() { 
		return `${this.firstName} ${this.lastName} ${(this.pay === undefined)? '': this.pay}`;
	}
	get program() {
		return this._program;
	}
	set program(x) {
		this._program = x;
	}
	
	get pay() {
		return this._pay;
	}
	set pay(x) {
		this._pay = x;
	}
  
}

