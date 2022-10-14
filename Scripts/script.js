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


// alert("asd");

let nombres=
[
    {
        nombre:"Emiliano",
        edad:25,
        sexo:"M"
    },

    {
        nombre:"Emmanuel",
        edad:23,
        sexo:"M"
    },

    {
        nombre:"Marianeh",
        edad:22,
        sexo:"M"
    },

    {
        nombre:"Magtan",
        edad:21,
        sexo:"M"
    },

    {
        nombre:"Paty",
        edad:22,
        sexo:"F"
    }      
]; //Se declara un areglo

let edad=nombres.filter(persona=> // genera un arreglo nuevo con los datos que cumplan con la condición
    {
        if(persona.edad<=23)
        {
            // console.log("Esta persona tiene "+persona.edad+" años");
            return persona.edad;
        }
    })

let sueldos=nombres.map(persona=> // Esta función modifica los datos 
    {
            let sueldo=0;
            if(persona.edad<25)
            {
                sueldo=1000;
            }
            // return "Hola " + persona.nombre+ " y tienes "+persona.edad+ " años";
            return {nombre:persona.nombre, sueldo:sueldo};
    }) // *``* se ponen con alt gr cierre de llave

let mujer=nombres.find(persona=> //Esta función 
    {
        if(persona.nombre.includes("y"))
        {
            return true
        }
    })

nombres.forEach(persona=>
    {
        // console.log(persona.nombre);
    })

let gentegrande=nombres.some(persona=>
    {
        if(persona.edad>23 && persona.edad<26)
        {
            return true;
        }
    })
    
let contenedor= document.getElementById("contenedor");
let input=document.querySelector("#input");
let botoncito=document.querySelector("#botoncito");


botoncito.addEventListener("click", ()=>
{
    contenedor.innerText=input.value;
    contenedor.className="sombreado";
})

input.addEventListener("keyup",()=>
{
    if(input.value.length>3)
    {
        contenedor.innerText=input.value;
        contenedor.className="exito";
    }
    else
    {
        contenedor.innerText="Texto invalido"
        contenedor.className="falla"
    }
})

