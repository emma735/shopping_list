// IF STATEMENTS        if (paramater) {console.log('string/expression/etc)
//                      
// const variable = 10;    //declare a constant variable
// const variable2 = 10;    //and assign it a number

// if (variable === variable2) //if this is true
//     { console.log(`${variable} is greater than ${variable2}`)}
//                         //this will be logged 
                            //log in the IF scope 
//_________________________________________________________________________

{/* < less than 
> greater than 
<= less than or equal to 
=> greater than or equal to
=== equal to 
!= not equal to 
____________________________________________________________________________ */}

// IF ELSE          

// const variable = 10;    //declare a constant variable
// const variable2 = 5;   

// if (variable > variable2)   //this is true so it will log
//   { console.log(`${variable} is greater than ${variable2}`)}

// if (variable === variable2) //this is false so it won't log
//     { console.log(`${variable} is equal to ${variable2}`)}

//     //but what if I want something else to happen to the FALSE statement?

// else 
//     { console.log(`${variable} is NOT equal to ${variable2}`)}

//_______________________________________________________________________

//ELSE-IF & NESTING 
// const d = new Date(10,20,2022, 14,0,0); //create a new date
//             //(day,month,year,hour,minute,second)
// const hour = d.getHours(); //returns the hour 
// console.log(hour); //logs the hour

//CREATE GREETINGS
// if (hour < 12) {
//     console.log('Good Morning!'); }  
// else if (hour < 18) {
//     console.log('Good Afternoon!');}
// else {
//     console.log('Good Night!');}
//_________________________________________________________________________

//Nested If
// if (hour < 12) {        //if its less than 12
//     console.log('Good Morning!'); //good morning

//     if (hour===6) {     //if it's less than 12 and also 6am
//         console.log('Wake up!');    //wake up
//     };
// }  

//__________________________________________________________

//MULTIPLE CONDITIONS IN 1 IF STATEMENT

// const d = new Date(10,20,2022, 14,0,0); //create a new date
// const hour = d.getHours(); //target the hour

// if (hour >= 7 && hour < 15)
//  //if the hour is greater than or equal to 7 AND if the hour is less than 15
//     {console.log('It is work time!'); //log this message
// }
//___________________________________________________________________

const d = new Date (2022,7,10,8,0,0); //yr/month//date//time
const month =d.getMonth();             //target month

switch(month) {
    case 1: console.log('It is January');
    break;
    case 2: console.log('It is February');
    break;
    case 3: console.log('It is March');
    break;
    default: console.log('It is NOT Jan, Feb or March');
}

switch(true) {
    case month > 6:
    console.log('It is July');
}
//_________________________________________________________________________