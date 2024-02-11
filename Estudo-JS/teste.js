
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold',
//       ano: 2000 ,
//       tracks: ['tau']
//     }
//   };
    
//   //let prop = "albumTitle";
//   //delete recordCollection["5439"];
//   //console.log(recordCollection[5439][prop]);

 

// function updateRecords(records, id, prop, value) {

//     if(value === "" || !value){
//         delete records[id][prop];
//         console.log("vazio");
//       }else if(prop !== "tracks" && value !== "" ){
//         records[id][prop] = value;
//      }else if (prop === "tracks" && value !== "") {
//         if (records[id].hasOwnProperty(prop) == true) {
//             console.log(" tem track");
//             records[id][prop].push(value);
//         }else{
//             console.log("não tem track");
//             records[id][prop] = [];
//             records[id][prop].push(value);
//         }
//      }

//      return records;

// }

// console.log(recordCollection[1245]);

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// console.log(recordCollection[5439])  
// //console.log(recordCollection[5439].hasOwnProperty('ano'));



// let numero = window.prompt("Digita o numero ai");
// console.log(numero);

// function testarNum(numero){
//     if (numero % 2 == 0) {
//       console.log("par");
//     } else {
//       console.log("impar");
//     }
// }

// testarNum(numero);

// function countdown(i) {
//   console.log(i);
//     if (i <= 1) {  // base case
//       return;
//   } else {     // recursive case
//       countdown(i - 1);
//   }
// }

// countdown(5); 


// Configuração
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

function lookUpProfile(name, prop) {
  
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        console.log(contacts[i][prop]);
        return contacts[i][prop];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}


// //console.log(contacts[0].firstName);
// lookUpProfile("Kristian", "likes");
// console.log(lookUpProfile("Kristian", "likes"));

// let obj = {
//     name:"FreeCodeCamp",
//     review:"Awesome"
//   };
//   Object.freeze(obj);
//   obj.review = "bad";
//   obj.newProp = "Test";
//   console.log(obj);

// function howMany(...args) {
//     return "You have passed " + args.length + " arguments.";
//   }
//   console.log(howMany(0, 1, 2));
//   console.log(howMany("string", null, [1, 2, 3], { }));

// var arr = [6, 89, 3, 45];
// var maximus = Math.max(...arr);

// console.log(maximus);

// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
//   // Altere apenas o código abaixo desta linha
  
//   const {today, tomorrow,teste} = HIGH_TEMPERATURES;
//   console.log(today, tomorrow, teste);aaaaa


// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

// function removeFirstTwo(list) {
//     // Only change code below this line
//     //let teste = list;
//     const [,, ...shorterList] = list; // Change this line
//     // Only change code above this line
//     return shorterList;
//   }
 
  
//   const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const sourceWithoutFirstTwo = removeFirstTwo(...source);
//   console.log(sourceWithoutFirstTwo);

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Altere esta linha
// let result = text.match(myRegex);

// console.log(result)

// const cpf = `cpfs sao: 
// 123.345.567-20 543.564.685-54

// 564.789.123-20
// `
// let myRegexCpf =/\d.\S+/g;

// const ip = ` meus ips sao:
//   213.234.123.3  012.432.123.65 
//   145.231.45.123
// `

// let myRegexIp = /\d.[]+/g;

// console.log(cpf.match(myRegexCpf));
// console.log(ip.match(myRegexIp));

let string = '2.50kg - R$45.00 4.35kg - R$122.00 5.60kg - R$122.00';

let myRegex = /.+/g;

console.log(nome.match(myRegex));
