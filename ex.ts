declare var require: any
declare var process: any
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var y;
class student{
	fullname: string;
	constructor(public firstname, public middlename, public lastname){
		this.fullname = firstname + middlename + lastname;
	}
}

interface Person{
	firstname: string;
	lastname: string;
}

function greeter(person: Person){
	return y + person.firstname + " " + person.lastname;
}

var user = new student("Sachin", "Ramesh", "Tendulkar");

rl.question("", function(answer) {
  y = answer;
  console.log(greeter(user));
  rl.close();
});
