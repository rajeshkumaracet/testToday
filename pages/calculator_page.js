const NaNCheck = () => {
    element(by.model("first")).sendKeys("");
    element(by.model("second")).sendKeys("");
    element(by.model("operator")).element(by.css("[value='MULTIPLICATION']")).click();
    element(by.buttonText("Go!")).click();
}

const calcAdd = () => {
    element(by.model("first")).sendKeys(5);
    element(by.model("operator")).element(by.css("[value='ADDITION']")).click();
    element(by.model("second")).sendKeys(5);
    element(by.buttonText("Go!")).click();
}
const calcMin = () => {
    element(by.model("first")).sendKeys(5);
    element(by.model("operator")).element(by.css("[value='SUBTRACTION']")).click();
    element(by.model("second")).sendKeys(5);
    element(by.buttonText("Go!")).click();
}
const calcMul = () => {
    element(by.model("first")).sendKeys(5);
    element(by.model("operator")).element(by.css("[value='MULTIPLICATION']")).click();
    element(by.model("second")).sendKeys(5);
    element(by.buttonText("Go!")).click();
}
const calcDiv = () => {
    element(by.model("first")).sendKeys(5);
    element(by.model("operator")).element(by.css("[value='DIVISION']")).click();
    element(by.model("second")).sendKeys(5);
    element(by.buttonText("Go!")).click();
}
const calcMod = () => {
    element(by.model("first")).sendKeys(5);
    element(by.model("operator")).element(by.css("[value='MODULO']")).click();
    element(by.model("second")).sendKeys(5);
    element(by.buttonText("Go!")).click();
}



module.exports ={
    NaNCheck,
    calcAdd,
    calcMin,
    calcDiv, 
    calcMul,
    calcMod
    
}