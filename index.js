var arry=['one','two','three','four'];
sessionStorage.setItem('arry',arry);
sessionStorage.setItem('arry1','2');
sessionStorage.setItem('arry2','3');
sessionStorage.setItem('arry3','323');
console.log(sessionStorage.getItem('arry'));
sessionStorage.removeItem('arry2');
// localStorage.setItem('arry',arry);
// localStorage.setItem('arry1','ram');
// localStorage.setItem('arr2','sita');
// console.log(localStorage.getItem('arry'));
// console.log(localStorage.getItem('arry1'));
// localStorage.clear();
//localStorage.removeItem('arry1');
// Following is an Array of my favourite places and some two favourite place and remove Kathmandu from the list and also print the array with its length.
//     ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]


// // Create a function called calcCircumfrence:
// //     Pass the radius to the function.
// // Calculate the circumference based on the radius, and output "The circumference is NN".
// calcCircumfrence(3.2);
// function calcCircumfrence (radius) {
//     var cir=2*(22/7)*radius;
//     document.getElementById('array1').innerText=cir.toFixed(2);
// }




// Write a JavaScript program to get the website URL (loading page)
//
// var url=document.location.href;
// document.getElementById('array').innerText=url;




// Write a JavaScript program to display the current day and time in the following format.
//     Sample Output : Today is : Tuesday.
//     Current time is : 10 PM : 30 : 38

// setInterval(function () {
//     getTime();
// },1000);
//
// function getTime(){
//     var date=new Date();
//     var dayArray=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
//     var day=date.getDay();
//
//     var timeHoure=date.getHours();
//     var timeformat=timeHoure>12?'PM':'AM';
//     var timeMin=date.getMinutes();
//     var timeSec=date.getSeconds();
//
//     document.getElementById('array').innerText="Today is "+dayArray[day];
//     document.getElementById('array1').innerText="Current time  is "+timeHoure+" "+timeformat+" : "
//         +timeMin+" : "+timeSec;
// }




// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);



// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 4);
// console.log(citrus);



// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias", "Linus"];
// var arr3 = ["Robin", "Morgan"];
// var myChildren = arr1.concat(arr2, arr3)
// console.log(myChildren);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi","grapes");
//delete fruits[2];
// fruits[3]="kiwi";
//fruits.push("Kiwi");
//fruits.pop();
//console.log(fruits);




// Obbject
// function book(title, author,des) {
//     this.title = title;
//     this.author  = author;
//     this.des  = des;
// }
// var myBook = new book("Ashish", "Gautam","faf");
// document.write("Book title is : " + myBook.title + "<br>");
// document.write("Book author is : " + myBook.author + "<br>");
// document.write("Book author is : " + myBook.des + "<br>");



//date change
//
// setInterval(function () {
//     displayDate();
// },1000);
//
// function displayDate() {
//     var date=new Date();
//     document.getElementById('react').innerText =
//         date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
// }

// //function
// function  test() {
//     document.getElementById('react').innerText=conact('react','class');
// }
// function conact(first,seond) {
//     return first+' '+seond;
// }
// test();

//document get
//document.getElementById('react');
//Diplay date and time
// var date=new Date();
// document.write(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());
// ['jan','feb',......];
// [0,1,2]
//date types
// var class_react="ashish";
// var class_react_number=2;
// var clas_react_on=1;
//
// var add=clas_react_on+class_react_number;
// document.write(class_react+add);

// var a=true;
// var b=1;
// document.getElementById("demosingle").innerText =(a==b);//true
// //checks value only
//
// document.getElementById("demodouble").innerText =(a===b);//false
// //cheks type and value


//git clone [link]
//git pull

//source tree



