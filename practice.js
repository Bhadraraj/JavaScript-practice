
            // console.log("Hello");
            // alert( "Welcome User ");
            // //print in console
            // console.log("Iam Learning Java Script")

            //print in view port (web port)
            //  document.write("Hello")

            // let name = "Bhadri";
            // let msg = "Hello my name is " +name+", i am learning javascript";
            // console.log(msg);

            // const name ="Bhadri"
            // const dob = "20/03/2001"
            // let msg = "My name is "+ name  +". My date of birth "+dob;
            // console.log(msg);

             // // PRIMITIVE DATA TYPE
            // let name = "Bhadri" 
            // let age = 21;//integer/number
            // let isDeveloper = true;
            // let lastName = null;
            // let nickName = undefined;


            //NON PRIMITIVE DATA TYPE
            //  Object  
            //    -Array
            //    -Function
            // let user ={
            // name:"Bhadri",
            // age :21,
            // rollNo:13,
            // gender  : "male",
            // nationality:"Indian",
            // address : "Nagercoil,Tamil Nadu",
            // }
            // console.log(user);


           
            // // TO GET INNER VALUE USE DOT (Dot Notation)

            // console.log(user.name);
            // console.log(user.age);
            // console.log(user.rollNo);
            // console.log(user.gender);
            // console.log(user.nationality);
            // console.log(user.address);


            // let user ={
            // name:"Bhadri",
            // age :21,
            // rollNo:13,
            // gender  : "male",
            // nationality:"Indian",
            // address : "Nagercoil,Tamil Nadu",
            // }
            // console.log(user.name);
            // console.log(user['age']);
            // console.log(user['address']);

            // Adding heading tag
            //  document.write("<h1>"+" Javascript "+"</h1>")


            //  document.getElementById("text").innerHTML="Hello Bhadri";
            //alert msg will first work
            // alert("Good day")

            //greatest number
            // var a = 40
            // var b = 100
            // result1 = (a < b) ? "40 is greater " : "100 is greater";
            // result2 = (a > b) ? "40 is greater " : "100 is greater";
            // console.log(result1)
            // console.log(result2)

           

            //grade check-if ,else if,else
            // a = 70
            // if (a = 100 && a >= 90) {
            //     console.log("Distincton");
            // }
            // else if (a < 90 && a >= 80) {
            //     console.log("First Class");
            // }
            // else if (a < 80 && a >= 70) {
            //     console.log("Second Class");
            // }
            // else if (a < 70 && a >= 60) {
            //     console.log("Third Class");
            // }
            // else if (a < 60 && a >= 50) {
            //     console.log("Poor")
            // }
            // else if (a < 50 && a >= 40) {
            //     console.log(' Very Poor')
            // }
            // else if (a < 40 && a >= 35) {
            //     console.log("Work Hard")
            // }
            // else if (a > 35) {
            //     console.log("Fail")
            // }
            // else {
            //     console.log("Invalid Mark")
            // }

            // grade check-ternary operator
            // a = 78
            // result1 = (a = 100 && a >= 90) ? "Destination" : (a < 90 && a >= 80) ? "First Class" : (a < 80 && a >= 70) ? "Second Class" :
            //     console.log(result1);

            // age check
            // let age = prompt("Enter your age")
            // if (age > 18 && age < 24) {
            //     console.log("You are allowed")
            // }

            // else {
            //     console.log("You are not allowed")
            // }

          

            //odd or even
            // var a = 2
            // var b = 5
            // output1 = (a % 2 == 0) ? "Number is Even" : "Number is Odd";
            // output2 = (b % 2 == 0) ? "Number is Even" : "Number is Odd";
            // console.log(output1);
            // console.log(output2);

            // change image
            // function flower() {
            //     document.getElementById("image").src = "./flower.jpeg";
            // }
            // function dog() {
            //     document.getElementById("image").src = "./dog.jpeg";
            // }
            // function tree() {
            //     document.getElementById("image").src = "./tree.jpeg";
            // }
             //function
            // function print() {
            //     document.getElementById("text").innerHTML = "Hello Bhadri";
            // }

            //background color-change while clicking the button
            // function print() {
            //     document.getElementById("text").style.backgroundColor = 'blue';
            //     document.getElementById("txt").style.fontSize = ("100px")
            // }

            //change image
            // function text() {
            //     document.getElementById("txt").innerHTML = "Have a Nice Day";
            // }

            //change image while clicking the button
            // function changeimg() {
            //     document.getElementById("myimg").src = "beetroot.jpeg";
            // }
            // alert("hello");

            // FOR LOOP
            // if (i == 1) {
            //     console.log(i);
            // } else {
            //     let value = 0;
            //     for (let j = 1; j <= i; j++) {
            //         if (j == 1) {
            //             value = i;
            //             console.log(value);
            //         } else {
            //             value = value + 1;
            //             console.log(value);
            //         }
            //     }
            //     for (let j = 1; j < i; j++) {
            //         value = value - 1;
            //         console.log(value);
            //     }
            // }

            //  O/P
            // 1
            // 2 3 2
            // 3 4 5 4 3
            // 4 5 6 7 6 5 4
            // 5 6 7 8 9 8 7 6 5

            // for (let i = 1; i <= 5; i++) {
            //   if (i == 1) {
            //     console.log(i);
            //   } else {
            //     let value = 0;
            //     for (let j = 1; j <= i; j++) {
            //       if (j == 1) {
            //         value = i;
            //         console.log(value);
            //       } else {
            //         value = value + 1;
            //         console.log(value);
            //       }
            //     }
            //     for (let j = 1; j < i; j++) {
            //       value = value - 1;
            //       console.log(value);
            //     }
            //   }
            // }


            // Eg:2 SWITCH CASE
            // for (let i = 1; i <= 5; i++) {
            //     switch (i) {
            //         case 1:
            //             console.log("1");
            //             break;
            //         case 2:
            //             console.log("2 3 2");
            //             break;
            //         case 3:
            //             console.log("3 4 5 4 3");
            //             break;
            //         case 4:
            //             console.log("4 5 6 7 6 5 4");
            //             break;
            //         case 5:
            //             console.log("5 6 7 8 9 8 7 6 5");
            //     }
            // }
            // O/p
            // 1
            // 2 3 2
            // 3 4 5 4 3
            // 4 5 6 7 6 5 4
            // 5 6 7 8 9 8 7 6 5


            //join:combine array and return as string
            // for (let i = 1; i <= 5; i++) {
            //     if (i == 1) {
            //         let arr = [1, 2, 3];
            //         let arr1 = [5, 4, 3, 2, 1];
            //         arr.push("1");
            //         let one = arr.join(arr1);
            //         console.log(one);
            //         console.log(typeof (one));
            //     }
            //     if (i == 2) {
            //         let arr2 = [];
            //         arr2.push("2 3 2");
            //         let two = arr2.join();
            //         console.log(two);
            //     }


            //     if (i == 3) {
            //         let arr3 = [];
            //         for (let i = 1; i <= 5; i++) {
            //             if (i == 1) {
            //                 arr3.push(3);
            //             }
            //             if (i == 2) {
            //                 arr3.push(4);
            //             }
            //             if (i == 3) {
            //                 arr3.push(5);
            //             }
            //         }
            //         console.log(arr3.length);
            //         let res = arr3.join(" ");
            //         console.log(res);
            //     }
            // }

            //REVERSING
            // 1, first split
            // 2, reverse

            // let text = "sky is blue";
            //split based on space
            // let myArray = text.split(" ");
            // console.log(myArray);
            //o/p: [ "sky", "is", "blue" ]
            // let revr = myArray.reverse();
            // console.log(revr)
            // o/p :[ "blue", "is", "sky" ]

            // split, reverse and return in array

            // let rverse = revr.join("");
            // let rverseVal = rverse.split("");
            // console.log(rverseVal);
            // o/p [ "b", "l", "u", "e", "i", "s", "s", "k", "y" ]

            // let newArr = [];
            // rverseVal.forEach((val, ind) => {
            //     if (!newArr.includes(val)) {
            //         newArr.push(val);
            //     }
            // });
            // console.log(newArr);
            // let main = newArr.reverse();
            // let mainResult = main.join("");
            // console.log(mainResult);

            //For Each
            // let dailyRoutine = ["wake up","workout", "eat", "sleep"];
            // dailyRoutine.forEach((routine,routineIndex)=>{
            //     console.log(routineIndex,routine);
            //     console.log(routineIndex+1,routine);
            // })
              // change color
            // function Redcolor() {
            //     document.getElementById("clr").style.color = 'red';
            // }
            // function Bluecolor() {
            //     document.getElementById("clr").style.color = "blue";
            // }
            // function Greencolor() {
            //     document.getElementById("clr").style.color = "green";
            // }
            // function Orangecolor() {
            //     document.getElementById("clr").style.color = "orange";
            // }

            //PYRAMID PATTERN

            // function generatePyramid(n) {
            //     let pyramid = "";
            //     // i defines row number if n = 5, then i go from 1 to 5
            //     for (let i = 1; i <= n; i++) {
            //         let row = "";
            //         let spaceCount = Math.ceil((n * 2) / 2 - i);

            //         let space = "";
            //         // s defines the space to put before values for each row
            //         for (let s = 1; s <= spaceCount; s++) {
            //             space += " ";
            //         }
            //         if (i === 1) {
            //             pyramid += space + i + "\n";
            //         } else {
            //             let temp = 0;
            // j defines the number to print in each row
            // row 2 => 2 + 2 - 1 => 3 => in second row we need 3 numbers to display

            //             for (let j = i; j <= i + i - 1; j++) {
            //                 if (j > 9) {
            //                     if (temp > 9) {
            //                         temp = 0;
            //                     }
            //                     temp++;
            //                     row += temp;
            //                 } else {
            //                     row += j;
            //                 }
            //             }
            //             pyramid +=
            //                 space + row + row.split("").reverse().splice(1).join("") + "\n";
            //         }
            //     }
            //     return pyramid;
            // }

            // console.log(generatePyramid(5));
            //output:
            //     1
            //    232
            //   34543
            //  4567654
            // 567898765

            // //FIND , FIND INDEX
            // const students = [
            //     { id: 1, name: "Bhadri", rollNo: 13 },
            //     { id: 2, name: "Subin", rollNo: 48 },
            // ]
            // let res = students.findIndex(function (student) {
            //     return student.name === "Subin"
            // })
            // let res1 = students.find(function (student) {
            //     return student.name === "Subin"
            // })
            // console.log(res);
            // //output:1
            // console.log(res1);
            // //output:Object { id: 2, name: "Subin", rollNo: 48 }


            // let arr = [5];
            // arr.push([2, 3, [59, 43], 5]);
            // let two = arr2.join("");
            // console.log(two);
            // output: 52, 3, 59, 43, 5
            // let resut = [...two];
            // console.log(resut);
            // let result = resut.filter((nu) => {
            //     if (Number(nu) == nu) {
            //         return nu;
            //     }
            // });
            // console.log(result);

            // let arrr = [5, [3, 5], [535, 53, [35, 353, [35]]]];
            // let ree = arrr.join();
            // let ec = [...ree];
            // let reu = ec.filter((ecc) => {
            //   if (Number(ecc) == ecc) {
            //     return ecc;
            //   }
            // });
            // let f = reu.join(" ").split(" ");
            // let near = [];
            // let ff = f.map((el) => {
            //   return Number(el);
            // });
            // let rd = [...new Set(ff)];
            // let rdr = rd.reduce((a, b) => {
            //   return a + b;
            // });
            // console.log(rdr);
            // const [count, setCount] = useState("bhadri";
            // useEffect(() => {
            //   async function fecthing() {
            //     setTimeout(() => {
            //       console.log("settimeout");
            //       setTimeout(()=>{
            //         console.log("inner")
            //       },100)
            //     }, 2000);
            //   }
            //   fecthing();
            // }, []);

            // console.log("semo")
            // console.log(count);

            //Array 

            // let favColors =['red','blue','green']
            // favColors[5] ='yellow'
            // favColors[4] = true
            // favColors[3] =55
            // console.log(favColors[4]);
            // console.log(favColors.length);

            // FUNCTION-ADDITION

            // function add(number1,number2){
            // let result = number1+number2;
            // console.log(result);
            // }
            //add(5,5)

            // FUNCTION-SUBRACTION

            // function sub(number1,number2){
            // let result = number1-number2;
            // console.log(result);
            // }
            // sub(9,5)

            // // FUNCTION-MULTIPLICATION
            // function mul(number1,number2){
            // let result = number1*number2;
            // console.log(result);
            // }
            // mul(9,5)

            // // Airthematic Operators

            // let number1 = 5;
            // let number2 = 5;
            // let number3 = 5;
            // let result =number1 + number2+number3;
            // // ++PRE INCREMENT
            // console.log(++result);

            // let a = 5;
            // let b = 5;
            // let c = 5;
            // // Increment
            // console.log(++a);
            // //output:6
            // console.log(a++);
            // //POST INCREMENT:first the value of a only return, then only  a is incremented
            // //output:6
            // console.log(number1);
            //     //output:7

            // console.log(number2++);
            // console.log(number2);
            // console.log(++number2);
            // console.log(number2++);
            // console.log(++number2);

            // Decreement
            // console.log(number1--);
            // console.log(--number1);
            // console.log(--number1);
            // console.log(number1--);
            // console.log(--number1);

            // Assignment operators

            // let x=5;
            // x=x+2;  //x=5+2, x=7;
            // y=x+3;  //y=7+3, y=10;
            // z=x+y;  //z=7+10, z=17.
            // y=x+z;  //y=7+17, y=24;
            // x=y+z;  //
            // console.log(x);

            // let x = 6;

            // x-=1;
            // console.log(x);

            //
            // let y= 5;
            //
            // y*=5;
            // console.log(y);
            //
            //
            // let z=5;
            //
            // z/=5;
            // console.log(z);
            //
            // let x=5;
            //
            // x%=4;
            // console.log(x);

            //Comparision Operator

            // let x = 5;
            // console.log(x>5);
            // this is relationl operator
            //
            // console.log( x >= 5);
            // console.log(x < 5);
            // console.log( x <= 5);
            // console.log( x > 5);
            //

            // // EQUALITY OPERATOR
            // let x=5;
            // console.log(x===5);
            // //output:true
            // console.log( x !==5);
            //  //output:false

            // //STRING COMPARISON
            // let a ="Fish"
            // let b="Fish"
            // console.log(a==b);

            // // >-GREATER THAN
            // // <-LESS THAN
            // //>= GREATER THAN OR EQUAL TO
            // //>LESS THAN OR EQUAL TO
            // // = :assign
            // // == : compare value
            // // ===: compare value and data type

            // console.log('a'>='b');
            // //output:false
            // // a comes before b , so it is less than 
            // console.log('a'<='b');
            // //output:true

            // console.log('today'>='thatday');
            // //output:true
            // // 'o' comes after h , so it is greater than

            // console.log('1'< 5);
            // console.log(5>'1');
            // console.log( 5 <='5');
            // console.log(true !== 1);
            // console.log(false === 0);
            // console.log(false !== 0);
            // console.log( 0!==0);
            //
            //Comparision of different type

            // console.log( true ==1);
            // console.log( true !==1);
            // console.log( 0 == 0);
            // console.log( 0 != 0);
            // console.log( false == "0");
            // console.log( 0 ===0);
            // console.log( true !==0);
            // console.log( true ==1);


            // console.log(1===1);
            // console.log(1!==1);

            // Lose Equality Operators

            // console.log(1==1);
            // console.log(1!=1);
            // console.log("1" == 1); //string == string(number)
            // console.log(3=="3");
            // console.log("bhadri"=="bhadri"); //True
            // console.log('bhadri'!='subin'); /true

            // Ternary Operators

            // Syntax
            // condition ? 'value1' : 'value2'
            //
            // let age = 5;
            //
            // let type = age > 25 ? " Adult Ticket" : 'Child Ticket'
            //
            // console.log(type);

            // let age = 18;

            // let type = age < 18 ? " Child Ticket" : 'Adult Ticket'

            // console.log(type);
            // let age =15;

            // if(age = 18){
            //
            // 'Child Ticket'
            // }
            // else{
            // 'Adult Ticket'
            // }

            // let age = 18;

            // let type = age >= 18 ? " Adult Ticket" : 'Child Ticket'

            // console.log(type);

            //
            // let age = 18;
            //
            // let type = age <=18? " Adult Ticket" : 'Child Ticket'
            //
            // console.log(type);
            //
            //
            // let age = 18;

            // let type = age <=17? 'Child Ticket' : "Adult Ticket"

            // console.log(type);

            // let age = 1;

            // let type = age <18  ? 'Child Ticket' : "Adult Ticket"

            // console.log(type);

            //
            // let age = 18;
            //
            // let type = age < 18 ? "Junior" : "Senior"
            // console.log(type);
            //
            //
            // let age = 18;
            //
            // let type = age < 18 ? "Child" : "Young"
            // console.log(type);
            //
            // Logical operators
            //logical &&
            //  console.log(true&&true);
            //  console.log(false&&false);
            //
            //  logical OR
            // console.log(true||false);
            // console.log(false||true);
            // logical NOT
            // console.log(false!=true);
            // console.log(true!=false);



            // Logical Operator with non boolian values
            // console.log(false|| 0);
            // console.log(true||"");
            // console.log(false||NaN);
            // console.log(true || undefined);

            // USING APPLICATION

            // let userColor = "blue";
            // let defaultColor = "blue ";
            // let  currentColor = userColor || defaultColor;
            // console.log(currentColor);
            //

            // let userColor = "";
            // let defaultColor = "blue ";
            // let  currentColor = userColor || defaultColor;
            // console.log(currentColor); ans: blue

            // let userColor = null;
            // let defaultColor = "blue ";
            // let  currentColor = userColor || defaultColor;
            // console.log(currentColor); ans:blue


            //Bitwise Operator

            // const excutePermission = 5;
            // const readPermission = 4;
            // const writePermission = 2;
            // let myPermission = 0;
            // myPermission = excutePermission | writePermission;
            // console.log(myPermission);

            // const excutePermission = 5;
            // const readPermission = 4;
            // const writePermission = 2;
            // let myPermission = 0;
            // myPermission = myPermission|excutePermission | writePermission;
            // console.log(myPermission);


            // 1=1
            // 2=10
            // 4=100
            // 8=1000
            // 16=10000
            // 32=100000
            // 64=1000000

            //JAVASCRIPT OPERATOR
            // let  x= 6+5-11;
            // console.log(x);
            // let y= 6-5+5;
            // console.log(y);

            // let x= 6-5*5;
            // console.log(x);

            // let x= 6*5+5/6%6/5;
            // console.log(x);

            // let x= 6*5+5/6%6/5;
            // console.log(x);

            // let x =5/6%6/5;
            // console.log(x);
            // let y = 5/0/5;
            // console.log(y);

            //=- is a third value
            // * / % is a second value
            // LEFT TO RIGHT TAKE THE VALUE
            //
            // let isRaining = true;
            // let isCloudy = "1";
            // let isNormal = false;
            //
            // let climate = isRaining|isCloudy|isNormal;
            // let message =(isRaining&isCloudy)?"yes":"no"
            // console.log(message); ANS ;YES
            //


            // //IF ELSE

            // if (true||false){
            // console.log(true);

            // }else{
            // console.log(false);
            // }

            //
            // if (false||false){
            // console.log(true);
            //
            // }
            // else{
            // console.log(false);
            //
            // }

            //
            // if (true&&false){
            // console.log(true);
            //
            // }else{
            // console.log(false);
            // }
            //
            // let x=true;

            // if (x<=true){
            // console.log(true);

            // }else{
            // console.log(false);
            // }//ans :true
            // let customer =true;

            // if (customer===true){
            // console.log(true);

            // }else{
            // console.log(false);
            // }// ANS:true
            //
            // let customer =false;
            //
            // if (customer===true){
            // console.log(true);
            //
            // }else{
            // console.log(false);
            // }// ANS:FALSE

            // let customer =true;

            // if (customer!==true){
            // console.log(true);

            // }else{
            // console.log(false);
            // // }// ANS:FALSE REASON 5!=5 SIMILARLY TRUE  != TRUE THIS IS FALSE CONDITION

            // let condition = true;
            // if(condition){
            // console.log("this is true");
            // console.log("this is true i am");
            // }
            // else{
            // console.log("this is false");
            // }

            // let weather ='hot';
            // if (weather==="hot"){
            // console.log('weather is soo hot');

            // }
            // else{
            // console.log('weathe is a cool or cold');
            // }

            // let weather ='cool';
            // if (weather==="hot"){
            // console.log('weather is soo hot');

            // }
            // else{
            // console.log('weathe is a cool or cold');
            // }

            //
            // let weather ='cold';
            // if (weather!=="hot"){
            // console.log('weather is soo hot');
            //
            // }
            // else{
            // console.log('weathe is a cool or cold');
            // }

            // let weather ='cold';
            // let message =(weather!=="hot")?"cold":"hot"
            // console.log(message);

            // let weather ='cold';
            // let message =(weather!=="hot")?"cold":"hot"
            // console.log((weather!=="hot")?"cold":"hot");
            //
            // let weather ='hot';
            // console.log((weather==="hot")?"hot":"cool");

            // let isRaining = false;
            // let isCloudy = true;
            // if (isRaining||isCloudy){
            // console.log("Don't forget to take umbrela");
            // }else{
            // console.log("Sky is normal you enjoy");
            // }

            // let isRaining = true;
            // let isCloudy = false;
            // if (isRaining||isCloudy){
            // console.log("Don't forget to take umbrela");
            // }else{
            // console.log("Sky is normal you enjoy");
            // }

            // let todaySchool = 1;
            // let tomorrowSchool = false;
            // if (todaySchool ||tomorrowSchool){
            // console.log("Study well")
            //
            // }else{
            // console.log("Play well");
            // }

            // let todaySchool = "yes";
            // let tomorrowSchool = "No";
            // if (todaySchool ||tomorrowSchool){
            // console.log("Study well")
            //
            // }else{
            // console.log("Play well");
            // }
            //
            // console.log( 0 || true );

            // let todaySchool = "No";
            // let tomorrowSchool = "yes";
            // if (todaySchool ||tomorrowSchool){
            // console.log("Study well")
            //
            // }else{
            // console.log("Play well");
            // }

            //IF ELSE EXAMPLE
            //If hour is between 12am to 12pm --> Good Morning;
            // If hour is between 12pm to 3pm -->Good Afternoon;
            // if hour is between 3pm to 6pm ..>Good evening;
            // if hour is between 6pm to 12pm -->Good Night;

            // let hour = 25;
            // if(0<=hour&&12>=hour){
            // console.log('Good Morning');
            // }else if (12<=hour&&15>=hour){
            // console.log("Good Afternoon");
            // }else if(15<=hour&&18>=hour){
            // console.log("Good Evening");
            // }else if(18<=hour&&24>=hour){
            // console.log('Good Night');
            // }else{
            // console.log('please enter your time');
            // }
            //
            // let age = 25;
            // if (0 <= age && 10 >= age) {
            //   console.log("MiniSub-junior");
            // } else if (10 <= age && 14 >= age) {
            //   console.log("Sub-junior");
            // } else if (14 <= age && 17 >= age) {
            //   console.log("Junior");
            // } else if (17 <= age && 25 >= age) {
            //   console.log("Senior");
            // } else if (25 <= age && 30 >= age) {
            //   console.log("Super-Senior");
            // } else {
            //   console.log("please enter your age");
            // }
            //

            // let hour = new Date();
            // let hour =new Date().getHours();

            // if(0<=hour&&12>=hour){
            // console.log('Good Morning');
            // }else if (12<=hour&&15>=hour){
            // console.log("Good Afternoon");
            // }else if(15<=hour&&18>=hour){
            // console.log("Good Evening");
            // }else if(18<=hour&&24>=hour){
            // console.log('Good Night');
            // }else{
            // console.log('please enter your time');
            // }
            //
            // var foo = -1;
            // switch (foo) {
            //   case -1:
            // console.log('negative 1');
            // break;
            //   case 0: // foo is 0 so criteria met here so this block will run
            // console.log(0);
            // NOTE: the forgotten break would have been here
            //   case 1: // no break statement in 'case 0:' so this case will run as well
            // console.log(1);
            // break; // it encounters this break so will not continue into 'case 2:'
            //   case 2:
            // console.log(2);
            // break;
            //   default:
            // console.log('default');
            // }
            //
            //
            // let fruitePrice = 'apple';
            //
            // switch (fruitePrice){
            //
            // case ('mango'):
            // console.log("the mango price Rs.10");
            // break;
            // case 'apple':
            // console.log("the apple Price Rs.20");
            // break;
            // case 'milk':
            // console.log('this is milk');
            // default:
            // console.log('choose your fruit');
            //
            // }
            //SWITCH STATEMENT;
            //
            // let degree = "BE";
            // switch (degree) {
            //   case "BE":
            // console.log("Iam a BE student");
            // break;
            //   case "ME":
            // console.log("Iam a ME student");
            // break;
            //   default:
            // console.log("no degree");
            // }
            //


            // let degree='BE';
            // if (degree='BE'){
            // console.log('you have applied for BE');
            // }else if (degree='ME'){
            // console.log('ypu are applied for ME');
            // }else{
            // console.log('please select any degree');
            // }

            //Interview Selection using switch case
            // let Hiring ='be';
            // switch (Hiring){
            // case ('bsc'):
            // case('msc'):
            // case ('mphil'):
            // case ('be'):
            // console.log('selected');
            // break;
            // default:
            // console.log("rejected");
            
            // }

            // let marks = 70;
            // switch (marks) {
            //   case 90:
            //   case 80:
            //   case 70:
            // console.log("pass");
            // break;
            //   case 90:
            // console.log("super");
            // break;
            //   default:
            // console.log("none");
            // }
            //
            // let marks = 95;
            // switch (true) {
            //   case (marks >= 70 && marks <= 90):
            // console.log("super");
            // break;
            //   case  (marks >= 35 && marks <= 70):
            //   console.log("pass");
            //   break;
            //   case  (marks >= 0 && marks <= 35):
            // console.log("fail");
            // break;
            //   default:
            // console.log("very super");
            // }

            //ASIGNMENT MOBLILE BUYING SUGGESTION
            //If Given saving  amount is >10k Buy Andriod mobile
            // Else if given amount is >60k Buy iphone Mobile
            //Else if given amount is>5 &&<10k Buy basic mobile
            //Else print "you can't afford mobile phone now

            // let amount = 70000;
            // if (5000<=amount && 10000>=amount){
            // console.log('you buy normal mobile');
            //
            // }else if (10000<=amount && 30000>=amount){
            // console.log('you buy andriod mobile');
            // }else if(30000<=amount && 60000>=amount){
            // console.log('you buy apple mobile');
            // }else if(60000<=amount){
            // console.log("you can buy any mobile");
            // }else{
            // console.log("you can't mobile");
            // }
            //
            //

            // MOBILE BUYING SUGGESTION IN SWITCH CASE

            // let amount = 5000;
            // switch (true) {
            //   case 5000 <= amount && 10000 >= amount:
            // console.log("you buy normal mobile");
            // break;
            //   case 10000 <= amount && 30000 >= amount:
            // console.log("you bur andriod mobile");
            // break;
            //   case 30000 < amount && 60000 >= amount:
            // console.log("bur apple");
            // break;
            //   case 60000 < amount:
            // console.log("you buy any mobile");
            // break;
            //   default:
            // console.log("you can't mobile");
            // }

            // let amount = 5000;
            // switch (true) {
            //   case 50000 <= amount:
            // console.log("Buy any mobile");
            // break;
            //   case amount >= 30000:
            // console.log("buy apple");
            // break;
            //   case amount >= 10000:
            // console.log("buy andriod");
            // break;
            //
            //   case (5000 <= amount && amount <= 10000):
            // console.log("you buy normal mobile");
            // break;
            //
            //   default:
            // console.log("if you have money only");
            // }
            //

            // FOR LOOPS IN JAVASCRIPT
            // for syntax
            // for(intial expression ; condition; step(increment ||decerment))

            // console.log("number 1");
            // console.log("number 2");
            // console.log("number 3");
            // console.log("number 4");
            // console.log("number 5");

            // let i=1;
            // if(i<=10){
            // console.log("trued");
            // }
            //

            // let i;
            // for( i=1; i<=10; i++){
            // console.log(i);
            // }

            // let intial;
            // for(intial=0; intial <=5; intial++){
            // console.log(intial);
            // }

            // ODD NUMBER ONLY
            // let intial;
            // for(intial=1; intial <5; intial++){

            // if (intial % 2!==0){
            // console.log(intial);
            // }
            // }

            // EVEN NUMBER ONLY 10 to 10
            //
            // let i = 10;
            // for (i = 9; i <= 20; i++) {
            //   if (i % 2 !==0) {
            // console.log(i);
            //   }
            // }

            // ODD NUMBER ONLY
            // for(i=8; i<=20;i++){

            // if(i% 3==1){
            // console.log(i);
            // }
            // }

            // for(i=8; i<=20;i++){

            // if(i% 3==2){
            // console.log(i);
            // }

            // }

            // for(i=8; i<=20;i++){
            // if(i% 3==0){
            // console.log(i);
            // }
            //  }

            // for(i=0; i<=50;i++){
            // if(i% 5==4){
            // console.log(i);
            // }
            //  }

            //  for(i=50; i>=1;i--){
            // if(i% 5===3){
            // console.log(i);
            // }
            //  }
            //  for(i=3; i<=50;i++){
            // if(i% 5===4){
            // console.log(i);
            // }
            //  }

            //  for(i=50; i>=1;i--){
            // if(i% 6===5){
            // console.log(i);
            // }
            //  }

            // WHILE LOOP

            // CONDITION
            //while (condition)

            // for (i=1;i<=20;i++){
            // console.log(i);
            // }
            // let i=5;
            // for (;i<=20;){
            // console.log(i);
            // i++;
            // }
            // WHILE (CONDITION)
            // let i=50;
            // while (i>=10){
            //    if(i%5==0){
            // console.log(i);
            //
            //    }
            //    i--;
            // }
            //
            // let intial =1;
            // for (intial =1; intial <=50; intial++){
            // console.log(intial);
            // }

            // let number =50;
            // while(number>5){
            //    if(number%5==0){
            // console.log(number);
            //    }
            // number--;
            // }
            //

            // for(i=1;i<2;i++){
            // console.log(i);
            // }

            // let i=1;
            // while(i<2){
            // console.log(i);
            // i++;
            // }

            // let i=5;
            // while(i>1){
            // console.log(i);
            // i--;
            // }
            //
            // let i = 5;
            // while (i >= 1) {
            //   if (i % 2!== 0) {
            // console.log(i);
            //   }
            //   i--;
            // }

            // let i =7;
            // do {
            //   console.log(i);
            //   i++;
            // }while(i<=5);
            //
            //
            //
            // let inti= 6;
            // do {
            // console.log(inti);
            // inti++;
            // }while (inti<=10);

            //

            // let i =4;
            // do {
            //   console.log("THIS IS DO WHILE LOOP : "+i);
            //   i++;
            // }while(i<=5);
            //
            //
            // let i =6;
            // do {
            //   if(i%2===0){
            // console.log("THIS IS DO WHILE LOOP : "+i);
            //   }
            //   i++;
            // }while(i<=5);

            //
            // let i =6;
            // do {
            //   if(i%2!==1){
            //  console.log("THIS IS DO WHILE LOOP : "+i);
            //   }
            //   i--;
            // }while(i>=7);
            //
            //
            // let i=0;
            //
            // while(i<=10){
            // if(i% 2!==0){
            // console.log(i);
            // }
            // i++;
            // }
            // do {
            // console.log('this is do while '+i);
            // i++;
            // }while(i<=10);
            //FOR-IN

            // let person = {
            // name : "Subin",
            // age :  21,
            //
            // };
            // for (let key in person){
            // console.log(key+":"+person[key]);
            // };


            // let friends =['Micheal', "Gopal"," Ram"];
            // friends[2]
            // console.log(friends[2]);

            // let friends = ['Micheal', "Gopal"," Ram"];
            // for (let bestFriend in friends){
            // console.log(bestFriend+friends[0]);
            // }
            //
            // let friends =['Micheal', "Gopal"," Ram"]
            // console.log(friends[0]);
            // console.log(friends[1]);
            // console.log(friends[2]);
            //
            //
            // let friends = ['','Micheal', 'Gopal','' Ram'];
            // for (let bestFriend in friends){
            // console.log(bestFriend+friends[bestFriend]);
            // }
            //
            // let fruits=['apple',"orange",]
            //
            // for(let fruitkeys in fruits){
            // console.log(fruitkeys);
            // }
            //FOR IN 
            // let fruits=['apple',"orange",]

            // for(frukeys in fruits){
            // console.log(fruits[fruitkeys]);
            // }

            //FOR OF 
            // let numbers =["1","2","3","4","5","6","7","8","9","10"];
            // for(number of numbers){
            // console.log(number);
            // }

            //FOR IN LOOP VS FOR OF LOOPS

            // let favsweets = ["DiaryMilk","KitKat","Munch"];
            // for (favsweet in favsweets){
            // console.log(favsweet+" : "+favsweets);
            // };
            //
            // for(favsweet in favsweets){
            // console.log(favsweets[favsweet]);
            // }

            // for( favsweet of favsweets){
            // console.log(favsweet);
            // }

            //FOR EACH ELEMENT
            //SYNTAX IS ARRAY.FOREACH(ELEMENT=>{});

            //
            //  let favsweets = ["DiaryMilk","KitKat","Munch"];
            // favsweets.forEach(favsweetlement => {
            // console.log(favsweetlement);
            // });
            //
            // let fruits=['apple',"orange","pineapple","grapes"]
            // fruits.forEach(fruit => {
            // console.log(fruit);
            // });
            //

            //OOPS-OBJECT ORINETED PROGRAMMING
            // let name ='Bhadri';
            // let age = 21;
            // let gender = "male";
            // let interest = ['designing,poetry'];
            // let address ={
            // place: "Nagercoil",
            //    district: "Kanyakumari",
            //    state : "Tamil Nadu",
            // };

            // console.log(address.place);
            // function myFunction(name,age){
            // let message = "hai i am "+name+"who are you"
            // let message = `hai i am ${name}  : ${age} who are you `
            // console.log(message);
            // };
            // myFunction()
            // myFunction("subin",21)


            // function fname (){
            // console.log(" i am bhadri "+name);
            // }
            // fnname();
            //

            //OOP OBJECT STEP 2
            //OBJECT ORIENTEND PROGRAMMING
            //OBJECT ORINETED PROGRAMMING SYNTAX KEY : VALUE COMMA
            // let person = {
            //  name :'Bhadri',
            //  age : 21,
            //  gender : "male",
            //  interest : ['Designing,Poetry'],
            //  address :{
            // place: "Nagercoil",
            //    district: "KanyaKumari",
            //    state : "Tamil Nadu",
            // },
            // greeting:function(){
            // let message = `Hai i am ${this.name},my ${this.age} `
            // console.log(message);
            // },

            // };
            // person.greeting();



            // FACTORY FUNCTIONS

            // function createPerson(name,age) {
            // return  {
            // name: name,
            //   age:age,
            // greeting: function () {
            //   console.log(`my name is ${this.name} my age is ${age}`);
            // },
            // };

            // }
            // let person= createPerson("Bhadri",21)
            // person.greeting();




            //CONSTRUCTOR FUNCTIONS
            // function Person () {
            // this.name = 'Bhadri'
            // console.log("hi"+this.name);
            // }

            // let person1 = new Person();
            // let person2 = new Person();

            // function createPerson() {
            //   (name = "subin"),
            //    console.log("Hey.." + this.name);
            // }

            // let user1 = createPerson();

            // constructor function
            // function Person () {
            // this.name = 'John',
            // this.age = 23
            // console.log(this.name+this.age+this.gender);
            // }
            //
            // creating objects
            // let person1 = new Person();
            // let person2 = new Person();
            //
            // adding new property to constructor function
            // Person.prototype.gender = 'Male';
            //
            // console.log(person1.gender); // Male
            // console.log(person2.gender); // Male
        

            //
            // var person = {
            // fullName: function(city, country) {
            // //   return this.firstName + " " + this.lastName + "," + city + "," + country;
            // }
            //   }
            //   var person1 = {
            // firstName:"John",
            // lastName: "Doe"
            //   }
            //   x=person.fullName.call(person1, ["Oslo", "Norway"]);
            //
            //   document.getElementById("demo").innerHTML=x;

            //JAVASCRIPT FUNCUTIIONS ARE OBJECTS
            //  function Person(name,age) {
            //  this.name=name,
            //  this.age=age,
            //  this.greating=function () {
            //  return `hi ${name} your age is ${age}`
            //  }
            //  }


            //PRIMITIVE DATA TYPES VS REFERENCE DATA TYPES
            //
            // let X=10;
            // let Y=X;
            // console.log(Y);
            //this is primitive data types

            // let y =20;
            // let x =y;
            // y = 10;
            // console.log(y);
            // console.log(x);

            // let x ={
            //
            // value:30,
            // }
            //
            //  x.value = 40;
            //  console.log(x);
            //
            // let y=x;
            //
            // console.log(y.value);

            // let num = 0xff;
            // console.log(num);

            //THIS IS REFERENCE  DATA TYPE
            // let cart = {
            // value:5,
            // };
            // function updateCart(cart) {
            //    cart.value++;
            // }
            // updateCart(cart)
            // console.log(cart.value);

            //THIS IS PRIMITIVE DATA TYPES
            // let apple =5;
            // function count(apple) {
            // apple++
            // }
            // count(apple);
            // console.log(apple);

            //
            // let apple = {
            // value:5,
            // };
            // function count(apple) {
            // apple.value++
            // }
            // count(apple);
            // console.log(apple.value);
            //
            //

            //
            // let appleObj = {
            // value:5,
            //    };
            //    function count(app) {
            // app.value++
            //    }
            //    count(appleObj);
            //    console.log(appleObj.value);


            //
            // let user = {
            //   name: "Bhadri",
            //   fullName: function () {
            // console.log(`My name is ${this.name}`);
            //   },
            // };
            // user.fullName();
            // for(key in user){
            // console.log(key);
            // }
            // for(key in user){
            // console.log(user[key]);
            // }
            //
            // FOR KEY OF OBJECTS.KEYS
            //
            // for (key of Object.keys(user)){
            // console.log(key);
            // }

            //FOR KEY OF OBJECTS.ENTRIES
            //
            // for(key of Object.entries(user)){
            // console.log(key);
            // }

            //THIS IS SPREAD OPERATOR
            // let another ={...user}
            // console.log(another);
            //
            //THIS IS ASSIGN VALUE IN OBJECT

            // let another1 = Object.assign({age:24,},user)
            // console.log(another1);
            // let another = user;
            // console.log(another.name);
            // console.log(another.getfullName);

            //FOR IN USER IN LOOP
            //ANOTHER USER COPY IN FOR IN LOOP
            //
            // let another={age:24};
            // for(key in user){
            // another[key]=user[key];
            // }
            // console.log(another);
            // MATH 
            //  console.log(Math.PI);

            //  console.log(Math.PI);
            // let y=-5;
            // console.log(Math.abs(y ));
            //Above 0.5 with 0.5;
            // console.log(Math.ceil(0.5));
            // console.log(Math.ceil(0.1));
            //RANDOM VARIABLES

            //
            // console.log(Math.random());
            //
            // console.log(Math.random());
            //
            //GET RANDOM ARBITARY
            // console.log(Math.random()*(max-min)+min);
            //Math.random()*((max-min)+min);
            //
            // console.log(Math.random()*(100-1)+1);
            // console.log(Math.random()*(100-1)+1);
            //
            // console.log(Math.random()*(100-1)+1);
            // ABOVE 0.5 TO 0.9
            // console.log(Math.round(0.4));

            //ABOVE 0.1 TO 0.9
            //  console.log(Math.ceil(1.4));

            //MAXIMAM VALUE
            // let marks=[29,60,90,25];
            // let result = Math.max(...marks);
            // console.log(result);

            //MINIUMUM VALUE
            //
            // let marks1=[29,60,90,25];
            // let result1 = Math.min(...marks1);
            // console.log(result1);
            //
            // let marks1=[29,60,90,25];

            // let result1 = Math.min(...marks1);
            // console.log(result1);
            //

            // let name="Subin";
            // console.log(name);
            //
            // let name1=new String("Subin");
            // console.log(name1);
            //
            // name.length
            // 5
            // CHAR.AT METHODS
            // name.char.At(5)
            // output:D,
            //
            //   let date = new Date(`October 24, 1996`);
            //   let nedate =new Date();
            //   let currentDate = nedate.getFullYear();
            //   let curDate = date - currentDate;
            //   console.log(curDate);
                
                 
            // let firstName="Bhadri";
            // let lastName ="R";
            // console.log(firstName.concat(" ",lastName));

            // INCLUDE METHOD
            // let firstName = "Bhadri";
            // console.log(firstName.includes("B"));
            // console.log(firstName.startsWith("Bha"));
            // console.log(firstName.endsWith("dri"));
            // console.log(firstName.length);
            // console.log(firstName.charAt(4));
            // console.log(firstName.includes("bha"));
            // console.log(firstName.indexOf("b"));
            // console.log(firstName.repeat(10));

                // console.log(firstName.replace("Bhadri","Subin"));
                // console.log(firstName.slice(1));
                //
                // SPLLIT
                // let para = " this is para in javascript "
                // console.log(para.split(' '));
                // console.log(para.split(' ',1));
                // console.log(para.split(' ',4));
                // console.log(para.split());
                //
                // SUBSTRING
                // console.log(para.substr(9));
                // console.log(para.substring(''));
                // console.log(para.toLocaleLowerCase());
                // console.log(para.toUpperCase());
                //
                // TRIM
                // let message =" this is message in javascript ";
                // console.log(message.trim());
                // console.log(message.trimStart());
                // console.log(message.trimEnd());

                //BACK NOTATION
                // let message = "this is my fifth \"messages in javascript\"if you want to couse this free \"in this course";
                // console.log(message);

                // let message ='this is "message"';
                // console.log(message);

                // let message ="this is \"message\"";
                // console.log(message);

                // let message ="this is \n\"message\"";
                // console.log(message);

                //THIS IS TEMPLETE OPERATORS

                // let name =`Bhadri`;
                // let message = `this is
                // message

                // hai ${name}`;
                // console.log(message);

                // let date = Date();//THIS IS STRING.

                // console.log(date);

                // let date = new Date()
                // console.log(date);
                // THIS IS WRONG INFORMATION

                // let date = new Date(`October 24, 1996`);
                // let nedate =new Date();
                // let currentDate = nedate.getFullYear();
                // let curDate = date - currentDate;
                // console.log(curDate);
                //
                // let date = new Date(`October 24, 1996`);
                // let ndate = date.getFullYear();
                // console.log(ndate);
                //
                //
                // let anotherDate = new Date();
                // anotherDate.setFullYear('1996');
                // console.log(anotherDate.getFullYear());
                // TWO SECONDS TO RUN
                // let start =  Date.now();
                // let end = start.now();
                // console.log(start);

                // let items =[`apple`,`orange`,`mango`,`lemon`,`apple`]
                // console.log(items.indexOf(`apple`));
                // console.log(items.includes(`apple`));
                // console.log(items.includes(`apple`));
                // console.log(items.inde(`apple`));

                // var ages = [3, 10, 18, 20];
                //
                // let  checkAdult =function(age) {
                //   return age >= 18;
                //
                // }
                // console.log(ages.find( checkAdult));

                //  checkAdult();
                //
                // let numbers = [10,28,30];
                // let result = function ages(age) {
                // return age>=28;
                // }
                // console.log(numbers.find(result));
                //
                //
                // var ages = [3, 10, 18, 20];

                // function checkAdult(age) {
                //   return age >= 18;
                // }
                // document.getElementById("demo").innerHTML = ages.findIndex
                // (checkAdult);
                //
                // let mobile = [
                //   { id: 1, item: "Samsung", price:"15k" },
                //   { id: 2, item: "Realme", quantity:"12k" },
                //   { id: 3, item: "Redmi", quantity: "18k" },
                // ];
                
                // function checkMobile(checkMob) {
                //   return checkMob.item === `Redmi`;
                // }
                
                // console.log(mobile.find(checkMobile));

                // let mobile = [
                //   { id: 1, item: "Samsung", price:"15k" },
                //   { id: 2, item: "Realme", quantity:"12k" },
                //   { id: 3, item: "Redmi", quantity: "18k" },
                // ];
                
                // function checkMobile(checkMob) {
                //   return checkMob.item === `Redmi`;
                // }
                


                // console.log(orders.findIndex (checkMobile));
                //
              
                //

                //
               // let mobile = [
                //   { id: 1, item: "Samsung", price:"15k" },
                //   { id: 2, item: "Realme", quantity:"12k" },
                //   { id: 3, item: "Redmi", quantity: "18k" },
                // ];

                //   let result = mobile.find((check) => check.id ===
                //   2);
                //   console.log(result);
                //

                //POP

                // let number = [25,36,40];
                // number.pop();
                // console.log(number);

                //SHIFT

                // let number = [25,36,40];
                // number.shift();
                // console.log(number);

                // SPLICE
            
                // let number = [25,36,40];
                // number.splice(1,2);
                // console.log(number);

                //SLICE
       
                // let number = [`orange`,`lemon`,`apple`,`guva`,`strawberry`];
                //  let no = number.slice(1,3);
                // console.log(no);

                // EMPTYING JAVASCRIPT
                // let numbers = [1,2,3,4,5];
                // numbers =[];
                // console.log(numbers);

                //   DEPENDABLE VARRIABLES
                //
                // let numbers = [1,2,3,4,5];
                // let another_numbers = numbers;
                // numbers = [];
                // console.log(numbers);

                // let numbers =[1,2,3,4,5];
                // numbers.length=0;
                // console.log(numbers);
                //
            // let mobile = [
                //   { id: 1, item: "Samsung", price:"15k" },
                //   { id: 2, item: "Realme", quantity:"12k" },
                //   { id: 3, item: "Redmi", quantity: "18k" },
                // ];
                //
                // let result = orders.find((check)=>check.item === `mobile`);
                // console.log(result);
                //

                 // let mobile = [
                //   { id: 1, item: "Samsung", price:"15k" },
                //   { id: 2, item: "Realme", quantity:"12k" },
                //   { id: 3, item: "Redmi", quantity: "18k" },
                // ];

                // // let result = mobile.findIndex((check) => check.item === "mobile");
                // console.log(result);

                // let numbers =[1,2,3,4,5];
                //
                // numbers.splice(0,numbers.length);
                // console.log(numbers);
                //
                //  let numbers =[1,2,3,4,5];
                //  while (numbers.length) {
                //  numbers.pop();

                //  }
                // console.log(numbers);


                // let shoping_cart = [`maagi`,`meals`,`masala`];
                // let additional_cart = [`matchbox`,`salt`];
                // let recipe = shoping_cart.concat(additional_cart);
                // console.log(recipe);
                //
                //
            
                // let shoping_cart = [`maagi`,`meals`,`masala`];
                // let additional_cart = [`matchbox`,`salt`];
                // let recipe = shoping_cart.concat(additional_cart);
                // let result = recipe.slice(1,4);
                // console.log(result);
                //
                // let shoping_cart = [{item:`beens`}];
                // let additional_cart = [`matchbox`,`salt`,`meals`,`masala`]
                // let recipe = shoping_cart.concat(additional_cart);
                // shoping_cart[0].item =`cooldrinks`;
                //
                // console.log(recipe);
                  // let mobile = [
                //   { id: 1, item: "Samsung", price:"15k" },
                //   { id: 2, item: "Realme", quantity:"12k" },
                //   { id: 3, item: "Redmi", quantity: "18k" },
                // ];
                //
                // let result = orders.find((check)=>check.item === `mobile`);
                // console.log(result);
                //

                 // let mobile = [
                //   { id: 1, item: "Samsung", price:"15k" },
                //   { id: 2, item: "Realme", quantity:"12k" },
                //   { id: 3, item: "Redmi", quantity: "18k" },
                // ];

                // // let result = mobile.findIndex((check) => check.item === "mobile");
                // console.log(result);

  