const fore = document.getElementById("fore");
const mapa   = document.getElementById("mapa");
const tarea = document.getElementById("tarea");

//ForEach recorre cada elemento del array 
const productos = [
    {nombre : "hamburgesa", precio: 10000},
    {nombre : "pizza", precio: 20000},
    {nombre : "sahwarma", precio: 15000}
]

productos.forEach(producto => {
    fore.innerHTML +=
    `<li>${producto.nombre} - ${producto.precio}</li>`
});

//Map método que transforma el array original y devuelve un nuevo array transformado

const productosMap = [
    {nombre : "hamburgesa", precio: 10000},
    {nombre : "pizza", precio: 20000},
    {nombre : "sahwarma", precio: 15000}
]

productosMap.map(produc => {
   return mapa.innerHTML += `${produc.nombre} ${produc.precio *5}`;
})
console.log("producto map", productosMap);

//Tarea 1

const numerosPlatzi = [2,4,5,6];

const numTwo = numerosPlatzi.map(num =>{
    return num * 2;
})
console.log("numros multiplicados", numTwo);

//Map reload 

const productosReload = [
    {nombre : "hamburgesa", precio: 10000},
    {nombre : "pizza", precio: 20000},
    {nombre : "sahwarma", precio: 15000}
]


const productosRecorridos = productosReload.map(produc => {

    return {
        //retorna una nueva propiedad en el objeto sin modificar el original
        ...productosReload,
        iva: 0.12
    }
});
console.log("productos originales", productosReload);
console.log("productros recorrdidod", productosRecorridos);

//tarea MAP

const productosTarea = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
];

const taxesProductos = productosTarea.map(product => {
    const taxesPrice = 19;
    const taxes =  Math.trunc(taxesPrice * product.price / 100);
    return {
        ...product,
       taxes: taxes
    }
});
console.log("productosTarea original", productosTarea);
console.log("taxes productos", taxesProductos);

//FILTER

const productosTareaFilter = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
    {
        name: "Dariana",
        price: 8000,
        stock: 70
      }
];

const searchProduct = (query) => {
   const prodFil = productosTareaFilter.filter(prod => prod.name.includes(query));
   return prodFil;
}
console.log("palabras query", searchProduct('Da'));

//TAREA FILTER
// Tienes un array con palabras, tu desafío es
//retornar un array solo con las que cumplan con la condición de tener 4 o más letras.


const palabras = ['amor', 'sol', 'piedra', 'día'];

const palabrasFilter = palabras.filter(palabra => palabra.length >= 4);
console.log("palabras Filtradas", palabrasFilter);

//TAREA REDUCE
// Tienes un array de números y debes retornar la suma de todos los valores en él.


const numerosReales = [1, 1, 1];
const numerosReales2 = [2, 4, 8];

const initial = 0;
const sumaNumerosReales = numerosReales.reduce((sum, item) => sum + item, initial);   
const sumaNumerosReales2 = numerosReales2.reduce((sum, item) => sum + item, initial);   

console.log("arreglo original reducce", numerosReales)
console.log("suma de numeros con reduce", sumaNumerosReales);
console.log("suma de numeros con reduce 2", sumaNumerosReales2);

//REDUCE RELOADED

const numerosRepetidos = [1, 1, 5, 3, 9, 3];

const numerosRepetidosReduce = numerosRepetidos.reduce((acumulador, item) => {
    if(item in acumulador){
        acumulador[item] ++;
    } else {
        acumulador[item] = 1;
    }
    return acumulador
}, {}) //se manda un objeto vacio porque hay que darle un valor inicial, en este caso un objeto vacio;

console.log("numeros repetidos reduce", numerosRepetidosReduce);

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "medium",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
];

const dataMapReduce = data.map(item => item.level)
.reduce((acumulador, item) => {
    if(item in acumulador){
        acumulador[item] ++;
    } else {
        acumulador[item] = 1;
    }
    return acumulador
}, {

});

console.log("data map", dataMapReduce);

//REDUCE RELOADED 2.0
//Devolver valores por rango 

const numerosRango = [2,3,6,8,7,1,9,10,23,5,4];
const orderNumerosRango = numerosRango.sort((a, b) => a - b);

console.log("numeros rango ordenados", orderNumerosRango);

const numerosRangoReduce = orderNumerosRango.reduce((acumulador, item) => {
    if(item <= 5){
        acumulador['1-5'] ++;
    } else if(item <= 8){
        acumulador['6-8'] ++;
    }
    else {
        acumulador['9-10'] ++
    }
    return acumulador;
}, {
    '1-5' : 0,
    '6-8': 0,
    '9-10': 0,
});

console.log("numeros rango reduce", numerosRangoReduce);

//SOME 

const numerosSome = [1,2,3,4,5,6];

const hayPares = numerosSome.some(num => num % 2 === 0)
console.log("isPar", hayPares)

//TAREA SOME

// En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array al menos uno es un número par.


const someTarea = [1, 3, 5, 7, 10, 11];

const isParNumTarea = someTarea.some (num => num % 2 === 0);
console.log("isParNumTarea", isParNumTarea);

const someTarea2 = [1, 3, 5];

const isParNumTarea2 = someTarea2.some (num => num % 2 === 0);
console.log("isParNumTarea2", isParNumTarea2);

//Every 

const numbersEvery = [1,5,6,8,20,84,12,69,3];

const isEveryNum = numbersEvery.every(num => num < 100);
console.log("isevery", isEveryNum);

//Every tarea 

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 1,
    },
];

const isMenorTo15 = team.every(edad => edad.age < 15);
console.log("is menor a 15", isMenorTo15); // true porque todos los objetos tienen una edad menor a 15

//Desafio every 

// En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array todos los números son pares.


const solution = (numbers) => numbers.every(num => num % 2 === 0);

console.log("la solucion de every es ", solution([2,4,5,9]));

//FIND

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const productFind = products.find(prod => prod.id === '🍔')
console.log("productFind", productFind);

const productoFindIn = products.findIndex(prod => prod.id === '🍔')
console.log("productoFindIn", productoFindIn);

//INCLUDES

const productsComida = ["hamburgesa", "hotdogs", "shawarma"];

  const resultComida = productsComida.includes("hamburgesa");
  console.log("resultComida", resultComida);

//JOIN

const productsJoin = ["hamburgesa",
"hotdogs", "shawarma"];

const productsJoinString = productsJoin.join("--");
console.log("productsJoinString", productsJoinString);

function solutionJoin(title) {
    return title.split(" ").join("-").toLowerCase();
}; 

console.log("solucion join", solutionJoin("La forma de correr Python"))

//CONCAT

const nombrePerros = ["Bruno", "Pug", "Poodle"];
const nombreGatos = ["Pepe", "Nieblecita", "frijol"];

const unirQArrays = nombrePerros.concat(nombreGatos);
console.log("unirQArrays", unirQArrays);

//Probar con soread operator 

const unirCatDog = [...nombrePerros,  ...nombreGatos]
console.log("unirCatDog", unirCatDog);

const nombrePerrosFlat = ["Bruno", "Pug", "Poodle", ["Pepe"],"lola"];

//FLAT
const flatPerros = nombrePerrosFlat.flat();
console.log("flatPerros", flatPerros);

//FLATMAP 


// En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python,
// tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

const palabrasTotales = [
    "Beautiful is better than ugly", 
    "Explicit is better than implicit", 
    "Simple is better than complex",
    "Complex is better than complicated"
];
console.log("array original", palabrasTotales); // array original

const lineasPalabras = palabrasTotales.map(palabra => palabra.split(" "));
console.log("separa el array en varios arrays", lineasPalabras); //
//se recorre el arreglo y se separa cada linea en un array

const resulCant = lineasPalabras.flat().length; //me une los  arrays en uno solo y me da la cantidad de palabras

console.log("resultado cantidad", resulCant); // resultado cantidad

// solucion para platzi 
function solutionLineas(lines) {
    const lineas = lines.map(palabra => palabra.split(" "));
    const resultado = lineas.flat().length;
    return resultado;
}; 

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);

console.log("rta", rta);

const array3 = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta3 = array3.flat();

console.log("rta3", rta3);