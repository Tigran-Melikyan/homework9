class Acount{
	constructor(id, name, balance){
		this._id = id;
		this.name = name;
		this.balance = balance;
	}
	credit(amount){
		return this._balance + amount;
		
	}
	debit(amount){
		if(amount < this._balance){
			return this._balance - amount;
		} else {
			return "Amount exceeded balance.";
		}
		
	}
	transferTo(anotherAccount, amount){
		let anotherAccountBalance = anotherAccount.balance;
		
		if(this._balance < amount){
			return "Amount exceeded balance.";
		} else {
			this._balance = this._balance - amount;
			anotherAccount = anotherAccountBalance + amount ;
			return anotherAccount;
		}
	}
	static identifyAccounts(accountFirst, accountSecond){
		if(accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance){
			return true;
		}
		return false ;
	}
	toString () { 
		return `${(this.id === undefined)? '': this.id} ${(this.name === undefined)? '': this.name} ${(this.balance === undefined)? '': this.balance} `; 
	}
	get id() {
		return this._id ;
	}
	get name() {
		return this._name ;
	}
	get balance() {
		return this._balance ;
	}
	set name(x) {
		this._name = x;
	}
	set balance(x) {
		this._balance = x;
	}
}




