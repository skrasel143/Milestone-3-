 
    // Task-1   

function feetToMile(feet){
    if (feet < 1) {
        return "Input any numbers except'0' to have an output";
      }
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(10560);
console.log(result);

function mileToFeet(mile){
    if (mile < 1) {
        return "Input any numbers except'0' to have an output";
      }
    var feet = mile * 5280;
    return feet;
}
var result = mileToFeet(0);
console.log(result);


    // Task-2

function woodCalculator(chair, table, bed){
    if ((chair, table, bed) < 1) {
        return "Please! input number except'0'";
      }
    var chairCounter = chair;
    var tableCounter = table * 3;
    var bedCounter = bed * 5;
    var totalCount = [(chairCounter), (tableCounter), (bedCounter), (chairCounter + tableCounter + bedCounter)];   /* Count individual and then total */
    return totalCount;
}
var result = woodCalculator(5, 3, 2);
console.log(result);


    // Task-3

function brickCalculator(floor){
    var brick = 1000;
    if (floor < 1) {
        return "Please! input floor amount";
    } else if (floor <= 10){
    var totalBrick = brick * 15 * floor;
        return totalBrick;
    } else if (floor <= 20){
        var first10 = (1000 * 15 * 10);
        var elevantTo20 = (floor - 10) * 12 * brick;
        var totalBrick = first10 + elevantTo20;
        return totalBrick;
    } else if (floor > 20){
        var first20 = (brick * 15 * 10) + (brick * 12 * (20-10));
        var above20 = (floor - 20) * 10 * brick;
        var totalBrick = first20 + above20;
        return totalBrick;
    }
}
var result = brickCalculator(0);
console.log(result);


        // Task-4

function tinyFriend(names){
    var shortestName = names[0];
         for(var i = 0; i < names.length; i++){
            var friendsName = names[i];
            if (friendsName < [0]) {
                return "Please! enter names";
            } else if(friendsName.length < shortestName.length){
                shortestName = friendsName;
            }
        }
        return shortestName;
   }
var result = tinyFriend(['Mohsin', 'Robel', 'Apo', 'Nahid', 'Hassan']);
var result2 = tinyFriend(['']);
console.log(result);
console.log(result2);