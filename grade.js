// prompt the user to input student marks
let marks = parseInt(prompt('Please enter your marks'));
// function to check grade of student
gradechecker()
function gradechecker() {
if(marks >=0 && marks <=100){ 
var grade;
if (marks >79){
    alert(grade = 'A');
}else if (marks >=60 && marks <=79){
    alert(grade = 'B');
}else if (marks >49 && marks <=59){
    alert(grade = 'C');
}else if (marks >=40 && marks <=49){
    alert(grade = 'D');
}else if (marks <40){
    alert(grade = 'E');
}
 }
 
 console.log(`grade is ${grade}`);
};
 // dispplay the grade of the student
 




