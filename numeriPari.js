function filtraNumeriPari(listaDiNumeri) {

    for (let index = 0; index < listaDiNumeri.length; index++) {

        if (listaDiNumeri[index] % 2 == 0) {
            return true;
        } else { return false; }



    }
    return listaDiNumeri % 2 ==0
}


let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numeri.filter(filtraNumeriPari))

