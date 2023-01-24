let user = {};
console.log(user);
user= {
    name:"John",
    };
console.log(user);
user["surname"]= "Smith";
console.log(user);
user.name="Pete";
console.log(user);
delete user["name"];
console.log(user);
function isEmpty(obj){
    return (Object.keys(obj).length==0);
}
function sumObject(obj){
    let sum = 0;
        for (var i=0; i<obj.length; i++){
        if (typeof obj[i]=="number"){
            sum+= obj[i];
        }
    }
    return sum;
}
function multiplyNumeric(obj){
    for (var i=0; i < obj.length; i++){
        if (typeof obj[i]=="number"){
            obj[i] *= 2;
        }
    }
}
