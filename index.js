// Hello, object 
let user = {};
user= {
    name:"John",
    };
user["surname"]= "Smith";
user.name="Pete";
delete user["name"];

// Check for emptiness 
function isEmpty(obj){
    return (Object.keys(obj).length==0);
}

// Sum object properties updated
    let salaries={};
    let sum;
    if (Object.keys(salaries).length==0){
        sum=0;
    }
    else{
        for (var i=0; i<salaries.length; i++){
            if (typeof obj[i]=="number"){
                sum+= obj[i];
            }
        }
    }

// Multiply numeric property values by 2 
function multiplyNumeric(obj){
    for (var i=0; i < obj.length; i++){
        if (typeof obj[i]=="number"){
            obj[i] *= 2;
        }
    }
}
