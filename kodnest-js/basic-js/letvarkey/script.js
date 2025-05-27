function testVarLetConst() {
    if (true) {
        var a = 10;     // function-scoped
        let b = 20;     // block-scoped
        const c = 30;   // block-scoped and constant

        console.log("Inside block:");
        console.log("var a:", a);   // 10
        console.log("let b:", b);   // 20
        console.log("const c:", c); // 30
    }

    console.log("Outside block:");
    console.log("var a:", a);       // 10 ✅ Accessible (var is function-scoped)
    
    // console.log("let b:", b);    ❌ Error (let is block-scoped)
    // console.log("const c:", c);  ❌ Error (const is block-scoped)
}

testVarLetConst();
