// Try Block
try {
    let letA = 'try_let_A';
    console.log("varB", varB);
    console.log("varC", varC)
    throw new Err('error')
} catch (err) {
    var varB = 'catch_var_B';
} finally {
    var varC = 'finally_var_D';
}

// Catch Block
try {
    let letA = 'try_let_A';
    var varA = 'try_var_a';
    throw new Error('error')
} catch (err) {
    let letB = 'catch_let_B';
    var varB = 'catch_var_B';
    console.log('varA', varA)
    console.log("varC", varC)
    console.log('err', err)
} finally {
    let letC = 'finally_let_C'
    var varC = 'finally_var_C';
}

// Finally Block
try {
    let letA = 'try_let_A';
    var varA = 'try_var_a';
    throw new Error('error')
} catch (err) {
    let letB = 'catch_let_B';
    var varB = 'catch_var_B';
} finally {
    let letC = 'finally_let_C'
    var varC = 'finally_var_C';
    console.log('varA', varA)
    console.log("varB", varB)
    console.log('err', err)
}
