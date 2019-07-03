// "use strict"

// this.name = "Windowsss";
// let tnr = {
//     // name: 'Nag',
//     oneMoreTeach:()=>{
//         console.log("here i am "+this.name);
//     },
//     doTeach: {
//         name:"Omkar",
//         // console.log(this.name + " teaching");
//         // let askQues = function (q) {
//         //     console.log(this.name + " answering " + q);
//         // }
//         //or
//         // name = "manish"
//        // console.log(this.name);
//         askQues :{
//             name:"Rushabh",
//             // console.log(this.name + " answering " + q);
//             tomanyQues: (q)=>{
//                 console.log(this.name + " answering " + q);
//             }
//         },
//         newQues:()=>{
//             console.log(this.name + " new answering ");
//         }
//         // console.log("teaching ends");
//         // return askQues.bind(this);
//     },
// };


// let func = function(){
//     console.log(this);
// }
// //func();
// // console.log(typeof(tnr.doTeach))
// tnr.doTeach.askQues.tomanyQues('.js');
// tnr.doTeach.newQues();
// // tnr.oneMoreTeach();

function Counter()
{
    this.num=0;
    this.timer = setInterval(()=>{
        this.num++;
        console.log(this.num);
    },1000);
}
var b = Counter()