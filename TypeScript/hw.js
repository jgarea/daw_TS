// @ts-check
//npm install typescript --save-dev
//npm install --save-dev ts-node
//npx ts-node hw.ts
//npx tsc .\hw.ts --downlevelIteration
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b;
console.log("Hello World");
var cadena = "Hola Mundo";
console.log(cadena);
console.log(typeof cadena);
printMessage();
// or
// import { Set } from 'es6-set';
function sum(a, b) {
    return a + b;
}
function printMessage() {
    console.log("Print");
}
//Listas
var myList = ["a", "b", "c"];
console.log(myList);
//Set
var myList2 = new Set(["a", "b", "c"]);
console.log(myList2);
console.log(myList2.has("a"));
try {
    for (var myList2_1 = __values(myList2), myList2_1_1 = myList2_1.next(); !myList2_1_1.done; myList2_1_1 = myList2_1.next()) {
        var item = myList2_1_1.value;
        console.log(item);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (myList2_1_1 && !myList2_1_1.done && (_a = myList2_1.return)) _a.call(myList2_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//Map
var myList3 = new Map();
myList3.set("a", 1);
myList3.set("b", 2);
myList3.set("c", 3);
console.log(myList3);
try {
    for (var _c = __values(myList3.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var key = _d.value;
        console.log(key);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_2) throw e_2.error; }
}
//Clases
var Persona = /** @class */ (function () {
    function Persona(name) {
        this.nombre = name;
    }
    Object.defineProperty(Persona.prototype, "name", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var persona = new Persona("Pepe");
console.log(persona);
console.log(persona.name);
//Enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
;
var c = Colors.Green;
console.log(c);
//Probar interfaz
var mySquare = { color: "red", width: 100 };
console.log(mySquare);
function verifys(result) {
    if (result === "pass") {
        console.log("Passed");
    }
    else {
        console.log("Failed");
    }
}
