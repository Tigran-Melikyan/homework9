class Author {
    constructor(author, age, gender){
        this.name = author;
		this.age = age;
		this.gender = gender;
    }
	toString () {
		let a = `${this.name} ${(this.age === undefined)? '': this.age} ${(this.gender === undefined)? '': this.gender} `;
		return a ;
	}
	get name() {
    return this._name;
  }
  set name(x) {
    this._name = x;
  }
}
class Book extends Author{
	constructor(title, author ,price, quantity){
		super(author);
	    this.title = title;
		this.price = price;
		this.quantity = quantity
    }
	getProfit(){
		return this.price*this.quantity
	}
	toString = function() { 
		let b = `${this.name}  ${this.title} ${this.price} ${this.quantity}`;
		return b ;
	}
	get price() {
    return this._price;
  }
  set price(x) {
	this._price = x;
  }
}

let author = new Author('B');
author.toString();