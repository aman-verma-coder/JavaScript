function sum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(`You gave us ${args[i]}`);
    }
}
function sum2(...args) {
    return (args.reduce((sum2, el) => sum2 + el));
}
function min(...argss) {
    return(argss.reduce((min,elm)=>{
        if (min>elm) {
            return(elm);
        }
        else{
            return(min);
        }
    }));
}
function min2(msg,...argss) {
    console.log(msg);
    return(argss.reduce((min,elm)=>{
        if (min>elm) {
            return(elm);
        }
        else{
            return(min);
        }
    }));
}