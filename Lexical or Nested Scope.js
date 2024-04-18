function outerFunc() {
    let a=5;
    let b=10;
    function innerFunc() {
        console.log(a);
        console.log(b);
        let c=15;
    }
    innerFunc();
    console.log(c);
}
outerFunc();