function filtraNumeriPari(listaDiNumeri) {

    for (let index = 0; index < listaDiNumeri.length; index++) {

        if (listaDiNumeri[index] % 2 == 0){
            console.log("Il "+ listaDiNumeri[index]+" e'pari")
        } else{
            console.log("Il "+ listaDiNumeri[index]+" e'dispari")
        }
        
    }
}


let numeri=filtraNumeriPari([1,2,3,4,5,6,7,8,9,10])

