
/*Creo due variabili operazione e lista */

let operazione = parseInt(prompt("Clicca 1 per aggiungere un elemento alla lista \nClicca 2 per eliminare un elemento della lista\n Clicca 3 per ordinare la lista in modo alfabetico \n Clicca 4 per modificare un elemento della lista \n Clicca 5 per eliminare la lista \n Clicca 6 per Visualizzare la lista \n Clicca 0 per chiudere"))
var lista = []
/*Creo un ciclo while con condizione operazione diverso da 0 */
while (operazione != 0) {
    switch (operazione) {
        case 1:

             /* Dichiaro la variabile aggiungiElemento con parseInt e prompt*/
             let aggiungiElemento = parseInt(prompt("Premi 1 per aggiungere un elemento \n\n Premi 0 per uscire"))
             /* Dichiaro un ciclo while con aggiungiElemento diverso da 0*/
            while (aggiungiElemento != 0) {

                /*Uso la funzione push per aggiungere elementi all' array */
                lista.push(prompt("Elementi da aggiungere"))

                aggiungiElemento = parseInt(prompt("Premi 1 per aggiungere un elemento \n\n Premi 0 per uscire"))
            }
            alert("La lista creata e':" + lista)

            break;



        case 2:
            /*Dichiaro una variabile elementoDaEliminare e uso prompt per dare all'utente l'input */
            let elementoDaEliminare = (prompt("Qual'e' l'elemento da eliminare?"))
            /*Dichiaro un ciclo for e uso la condizione if per per fare in modo che lista sia = a elementoDaEliminare */
            for (let index = 0; index < lista.length; index++) {
                if (lista[index] == elementoDaEliminare) {
                    /*Uso la funzione splice dando come indice per eliminare la variabile index e gli dico di eliminare un solo elemento*/
                    lista.splice(index, 1);
                }
            }
            alert("La lista aggiornata e':" + lista)
            break;



        case 3:
            /*dichiaro una variabile ordine e do all utente la possibilita' di scegliere tramite switch case se vuole ordinare in maniera decrescente o crescente */
            let ordine = parseInt(prompt("Clicca 1 se vuoi la lista ordinata in modo crescente \n\n clicca 2 se vuoi la lista ordinata in modo decrescente"))
            switch (ordine) {
                case 1:
                    lista.sort((nome1, nome2) => {
                        /*per ordinare uso la funzione sort dando come return nome1 con la funzione localeCompare  */
                        return nome1.localeCompare(nome2)
                    })
                    alert("la lista ordinata in modo crescente e':" + lista)
                    break;
                case 2:
                    lista.sort((nome1, nome2) => {
                        return nome2.localeCompare(nome1)
                    })
                    alert("la lista ordinata in modo decrescente e':" + lista)
                    break;
            }
            break;

        case 4: 
            /*Dichiaro due variabili elementoDaModificare ed elementoDaAggiungere per riutilizzare la funzione splice usata antecedentemente con l'aggiunta dell'elemento da aggiungere  */
            let elementoDaModificare=prompt("Quale elemento vuoi modificare?")
            let elementoDaAggiungere=prompt("Quale elemento vuoi aggiungere?")
            for (let index = 0; index < lista.length; index++) {
                if (lista[index] == elementoDaModificare) {
                    lista.splice(index, 1, elementoDaAggiungere);
                }
            }
            alert("La lista aggiornata e':" + lista)
            break;


        case 5:
            /*dichiaro la lista vuota per cancellare la lista */
            lista = []
            alert("Lista cancellata:" + lista)
            break;
        case 6:
            /*un semplice alert per far visualizzare la lista! */
            alert("La lista e':" + lista)
            break;

    }
    operazione = parseInt(prompt("Clicca 1 per aggiungere un elemento alla lista \nClicca 2 per eliminare un elemento della lista\n Clicca 3 per ordinare la lista in modo alfabetico \n Clicca 4 per modificare un elemento della lista \n Clicca 5 per eliminare la lista \n Clicca 6 per Visualizzare la lista \n Clicca 0 per chiudere"))
}