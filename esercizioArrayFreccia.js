
/*Creo 2 variabili in cui inserisco una lista di almeno 5 parole */


let array1 = ["Palla", "Cane", "Tigre", "Giocattolo", "Sirena", "Gatto","Peto", "Muro"]

let array2 = ["Carnevale", "Natale", "Pasqua", "Thanksgiving", "Halloween", "Casa", "Tana", "Pane"]

/*Dichiariamo una funzione che prenda come parametri formali 2 liste */
function filtraPerLunghezza(lista1, lista2) {
    /*Dichiaro una variabile arrayConcatenato per concatenare le 2 liste */
    let arrayConcatenato = lista1.concat( lista2)
    /*Dichiaro una variabile arrayFiltrato per filtrare la lista con le parole contenenti almeno 5 lettere  */
    let arrayFiltrato=arrayConcatenato.filter((word) => word.length >5 );

    
    
    
    /* Dichiaro la variabile da far tornare come Output della funzione*/
    return (arrayFiltrato)
   
    }
    

        
   



console.log(filtraPerLunghezza(array1, array2))