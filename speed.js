// prompt user to input their speed
let speed = parseInt(prompt('Please enter your speed'));

var speedLimit = 70;
var demeritPointsPerkm = 5;
var maximumDemeritPoints = 12;
// function to check speed of vehicle 
checkSpeed()
function checkSpeed() {
    if (speed <= speedLimit) {
        alert('ok');
        console.log('ok');
    } else {
         var  demeritPoints = ((speed - speedLimit) / demeritPointsPerkm);
    }
     if (demeritPoints < maximumDemeritPoints) {
        console.log('demeritPoints =' + demeritPoints);}
else{

        (demeritPoints >= maximumDemeritPoints)
        alert('license Suspended');
    console.log(`licenseSuspended`);
    // display licenseSuspended
}
}

