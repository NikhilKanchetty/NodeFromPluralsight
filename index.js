const HTTP = require('http');

const server = HTTP.createServer((res) => {
    res.end('Hello world, This is nikhil learning node js in plural sight\n');
});

server.listen(1234, ()=>{
    console.log('server is running on port 1234....');
});

/*
//---------------------------------------------------------------server was created at this point
const rocks = () =>{
    console.log('Hello after 2 seconds');
};

setTimeout(rocks, 2*1000, 'Node js ');
//---------------------------------------------------------------testing timeout function

// this is the new example
const Func = time =>{

    console.log("Hello after " +time+ " seconds");

};

setTimeout(Func, 4*1000, 4);
setTimeout(Func, 8*1000, 8);
//----------------------------------------------------------------retesting the timeout function



// This is example to learn about timers in node js
const func = intervel => {
    console.log('Hello after every one second');
}

setInterval(func, 1*1000);
//--------------------------------------------testing the time intervel function 
// an example using counter
const fun = counter => {
  
    if(counter == 5){
        console.log('done');
    }else{
        console.log('Hello world');
    }// if - else
};

for(var count=0;count<=5;count++){

    setTimeout(fun, count*1000, count);

}
//---------------------------similar kind of example using a counter and timeout function
// another example here
*/

