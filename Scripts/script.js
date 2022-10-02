var personas =["Emilinao", "Hola", "Eward", "Jared", 198];

class Algo
{
    constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


var personas = 
{
    nombre:"Román",
    apellido:"García",    
}

function laPersona(nombre, apellido)
{
    this.nombre=nombre;
    this.apellido=apellido;
}

let variable=
{
    nombre:"HP",
    ram:"8gb"
}

let nombre=variable.nombre;
let ram=variable.ram;

let frase=`Mi laptop ${variable.nombre} tiene ${variable.ram} de ram`;

var al = new Algo("Emiliano","García");
var goman = new laPersona("Gomán","de la Cruz");

// var alumnos=
// [
//     [
//         nombre:"Goman",
//         edad:22
//     ],
//     [
//         nombre:"",
//         edad:""
//     ]    
// ]

function laFuncion(variable1)
{
    return variable1*2;
}

(variable1) =>{return variable1*2}

variable1=>{return variable1*2}

variable1=>variable1*2;

 ()=>variable1*2;

 var articulos=[
    {nombre: "Bici",costo:3000},
    {nombre: "Tv",costo:2500},
    {nombre: "Libro",costo:320},
    {nombre: "Celular",costo:10000},
    {nombre: "Laptop",costo:20000},
    {nombre: "Teclado",costo:500},
    {nombre: "Audifonos",costo:1700},
 ];

//  articulos.forEach(valor => {
//     console.log(valor.nombre);
//  });

 var articuloskaros=articulos.filter((valor)=>
 {
    if(valor.costo>2000)
        return valor;
 })

 var articulosDescuento = articulos.map((articulo=>
    {
        return {nombre:articulo.nombre,costo:articulo.costo*0.8};  
    }))