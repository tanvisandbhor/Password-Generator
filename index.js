// const rectangle = {
//  length:1,
//  breadth :2,
//  draw: function(){
//    console.log('draw rectangle');
//  },
//  calculateArea : function( length,breadth){
//    let Area = length*breadth;
//    return Area = length*breadth;
//  }
// };




// ///////////////**-----FACTORY FUNCTION-------**/////////////


// function crateRectangle(length,breadth){//object is returned
//   return rectangle = {
//   length,
//   breadth:2,
//   draw : function(){
//    console.log('draw rectangle');
//   }
//   };
// } 
// //objct is created
// let rectangleshow = crateRectangle(4,5);
// rectangleshow.color = 'yellow';
// console.log(rectangleshow);
// delete rectangleshow.color;
// console.log(rectangleshow);


// ///////////**----------CONSTRUCTOR FUNCTION-------**///////

// // function createRectangle(len,bre){
// //    this.length =len;
// //    this.breadth =bre;
// //     this.draw = function(){
// //       console.log('drawing rectangle');
// //     }
// // }
// // let Robject = new createRectangle(4,5);

// for(let key in rectangle){
//    console.log(key,rectangle[key])
// }

// if('color' in rectangle){
//    console.log('present');
// }
// else
// console.log('not present');


// let src={
//       value:10
// };
// let dest={};

// for(let key in src){
//    console.log(key);
//    dest[key]=src[key];
// }
// for(let key in dest){
// console.log(key);
// }
// let date = new Date();console.log(date);

















console.log('chaliye shuru karte hai');

// setTimeout(function(){
//     console.log('my timeout function');
// },4000);

// console.log('first');



// let merapromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('i am inside promise');
//     },4000);
// resolve(1998)
// });



let promise123 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am promise');
    },4000);
    // resolve(123456);
     reject(new Error('error aaye hain'));

});


promise123.then((value) => {console.log(value)} ,(error)=> {console.log('received error')});
//  promise123.catch((error)=> {console.log('received error')});




















































