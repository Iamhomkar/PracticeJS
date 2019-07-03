// // let tnr = {
// //     name:"Omkar",
// //     doTeach:()=>{
// //         console.log("why can we say that this belongs to window creator but");
// //     },
// //     doPreach:function(){
// //         return ()=>{
// //             console.log("but this is owned by tnr");
// //         };
// //     }
// // };


// // var teachbtn = document.getElementById('teachBtn');
// // // console.log(teachbtn);
// // teachbtn.addEventListener('click',()=>{
// //     console.log("why "+this+" kolavari di");
// // });

// function doPerson() {
//     // this.name = name;
//     // this.age = age;

//     // let self=this;
//     Size : 10,
//     incAge = function() {
//         // console.log(this);  
//         // self.age++;
//         console.log('sdcdscc');
//         // console.log(this.name + " : " + this.age);
//     }

//     // let incAge = () => {
//     //     console.log(this);
//     //     this.age++;
//     //     console.log(this.age)
//     // };
//     // incAge();
//     // setInterval(incAge, 1000);

// }

// // let p1  = new Person('Ria', 3);
// incAge.call(p1);

let person = {
    prop:10,
    doTeach : function(){
        console.log("sdclksdclsdc "+this.prop);
        let tp = function(){
            console.log("qwertyu "+this);
        }
    }
}
person.doTeach();