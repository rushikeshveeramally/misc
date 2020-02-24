/* 

console.log("hey this is script file");


//coding challenge 1

var markHeight = 3.5;
var markWeight = 60;

var johnHeight = 4.0;
var johnWeight = 55;
 
var markBmi = markWeight / (markHeight * markHeight);

var johnBmi =  johnWeight/(johnHeight * johnHeight);
     
console.log(markBmi ,johnBmi);
var isMarksBmi = markBmi > johnBmi;

console.log("Is Marks BMI higher than John? " + isMarksBmi);


// coding challenge 2

    var jhonsTeam= 89+120+103 / 3;
    var mikesTeam=116+94+123 / 3;

    var marysTeam=97+134+105 / 3;
        
           if( jhonsTeam > (mikesTeam && marysTeam)){
               console.log("jhon's team is the winner");
           }
            else if(mikesTeam > (jhonsTeam && marysTeam)){
                console.log("mike's team is the winner");
            }
            else{
                console.log("mary is the winner");
            }





// coding challenge 3

function tipCalculator(bill){
    
    var percentage;
    if(bill < 50){
        percentage=  0.2
    }
    else if ( bill  >50 && bill < 200)
        {
            percentage = 0.15;
        }
    else{
        percentage = 0.1;
    }
    return percentage * bill;
}

 var bills = [124 , 80 , 202];
    
var tips =  [tipCalculator(bills[0]) , tipCalculator(bills[1]) , tipCalculator(bills[2])];
console.log(tips);

var finalBills = [bills[0]+tips[0] , bills[1]+tips[1] , bills[2] + tips[2]];

console.log(finalBills);



// coding challenge 4

var mark = {
    fullName : 'MarkJane',
    mass: 60,
    height : 3.5 ,
        
    bmi:function(){
  return this.bmi = this.mass / (this.height * this.height);
   
         }
    
};

console.log(mark);

var john = {
    fullName : 'JohnSmith', 
    mass : 60,
    height : 3.4,
    bmi : function(){
       return this.bmi = this.mass/(this.height * this.height);
       
    }
};

console.log(john);


if(mark.bmi() > john.bmi()){
    console.log(mark.fullName + " has bmi of " + mark.bmi);
}
else if (john.bmi > mark.bmi){
    console.log(john.fullName +  " has bmi of  " + john.bmi);
}
else{
    console.log("both have same bmi");
}

*/

// CODING CHALLENGE 5

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}






































