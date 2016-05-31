var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var y;
var student = (function () {
    function student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + middlename + lastname;
    }
    return student;
}());
function greeter(person) {
    return y + person.firstname + " " + person.lastname;
}
var user = new student("Sachin", "Ramesh", "Tendulkar");
rl.question("", function (answer) {
    y = answer;
    console.log(greeter(user));
    rl.close();
});
