let doubleAndReturnArgs=((arr,...args)=>[
    ...arr, ...args.map((v)=>{return(v*2);})
]);
doubleAndReturnArgs([4,3,2,1],1,2,3,4,5,6,7,8,9,10);
doubleAndReturnArgs([10,9,8,7],5,6,7,8,9,10,11,12,13,14,15);