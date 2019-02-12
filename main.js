console.log("Funguje");

function decToBin(num){
    var vysledek = '';
    do{
        vysledek = (num % 2) + vysledek;
        num = Math.floor(num / 2);
    }while(num != 0);
    return vysledek;
}

console.log(decToBin(255));