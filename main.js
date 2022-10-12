const alan = {
    name: "Alan Castor",
    age: 24,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(alan));
// console.log(Object.getOwnPropertyNames(alan));
// console.log(Object.entries(alan));
Object.seal(alan); //? funciona para poner la propiedad configurable = false
Object.freeze(alan); //? hace que las propiedad no se puedan editar

Object.defineProperty(alan, "pruebaNasa",{
    value: "Alien",
    enumerable: false,
    writable: false, 
    configurable: false,
});
Object.defineProperty(alan, "navigator",{
    value: "Chrome",
    enumerable: false,
    writable: true, 
    configurable: true,
});
Object.defineProperty(alan, "editor",{
    value: "VSCode",
    enumerable: true,
    writable: false, 
    configurable: true,
});
Object.defineProperty(alan, "terminal",{
    value: "WSL",
    enumerable: true,
    writable: true, 
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(alan));