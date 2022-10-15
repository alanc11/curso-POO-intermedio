const obj1 ={
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA(){
        this.a = "Metodo para editar A"
    }
};

// const stringifiedComplexObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifiedComplexObj);
// console.log(stringifiedComplexObj);
// console.log(obj2);


// let numerito = 0;
// const numeritos = [555,0,1,2,3,4,5,6,7,8,2,2,6,4,7,9,5,6,4];

// for(let i = 0; i < numeritos.length; i++){
//     numerito = numeritos[i];
//     console.log({i, numerito});
// }

function recursiva(numbersArray){
    if(numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        return recursiva(numbersArray);
    }
}

//: DEEP COPY CON RECURSIVIDAD EN JS
function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;
    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray){
        copySubject = [];

    }else if(subjectIsObject){
       copySubject = {};
    }else{
        return subject;
    }
    
    for(key in subject){
        const keyIsObject = isObject(subject[key]);
        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else{
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}
