// @ts-check
//npm install typescript --save-dev
//npm install --save-dev ts-node
//npx ts-node hw.ts
//npx tsc .\hw.ts --downlevelIteration

console.log("Hello World");

let cadena: string = "Hola Mundo";
console.log(cadena);
console.log(typeof cadena);
printMessage();

// or
// import { Set } from 'es6-set';

function sum(a: number, b: number): number {
    return a + b;
}

function printMessage(): void {
    console.log("Print");
}

//Listas
let myList: Array<String> = ["a","b","c"];
console.log(myList);

//Set
let myList2: Set<String> = new Set<String>(["a","b","c"]);
console.log(myList2);
console.log(myList2.has("a"));

for (let item of myList2) {
    console.log(item);
}

//Map
let myList3: Map<String, number> = new Map<String, number>();
myList3.set("a", 1);
myList3.set("b", 2);
myList3.set("c", 3);
console.log(myList3);

for (let key of myList3.keys()) {
    console.log(key);
}


//Clases
class Persona {
    private nombre: string;

    constructor(name: string) {
        this.nombre = name;
    }

    get name(): string {
        return this.nombre;
    }
}
let persona: Persona = new Persona("Pepe");
console.log(persona);
console.log(persona.name);

//Enums
enum Colors {Red, Green, Blue};
let c: Colors = Colors.Green;
console.log(c);

//interfaces
interface SquareConfig {
    color?: string;
    width?: number;
}
//Probar interfaz
let mySquare: SquareConfig = {color: "red", width: 100};
console.log(mySquare);



type Result = "pass" | "fail"
 
function verifys(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}