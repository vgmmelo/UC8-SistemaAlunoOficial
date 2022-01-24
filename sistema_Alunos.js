let listaAlunos = 10;
let contador = 0;

// for(let i=0; i <=listaAlunos; i++ ){

//     if(i==0){console.log(" o numero atual é zero")}
//      else if (i%2==0){

//         console.log(`${i} é par`)
//     }else{console.log(`${i} é impar`);
// }
// }

while(contador <=listaAlunos){

    if (contador==0){
    console.log("o numero atual é zero")
    }
    else if(contador%2==0){
        console.log(`o numero ${contador} é PAR`)
    }
    else{console.log(`o numero ${contador} é IMPAR`)}

    contador++;
}