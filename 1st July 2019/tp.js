var myfunc=[];

function ff(i)
{
    return function(){console.log(i);};
}
for(var i=0;i<100;i++)
{
    myfunc.push(ff(i));
}

myfunc[0]();
myfunc[1]();

// console.log("---------------------------------------------------");
// for(var i=0;i<10;i++)
// {
//     console.log(myfunc[i]());
// }