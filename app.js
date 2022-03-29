// définir les variables 
// récuperer valeur input
// vérifier que valeur input est un nombre
// convertir valeur input en euros

// définir variables
let nbOfLitersInput = document.getElementById("numberOfLiters");
let price = document.getElementById("price");
let buttonPrice = document.getElementById("button-price");
let nbOfLiters;
let nbOfLitersConvert;
let nbEuros;

// fonction Récuperer valeur nombre de litres
function recupererNbLitre(){
    nbOfLiters = nbOfLitersInput.value;
    checkTypeNbLiters(nbOfLiters);
}

// fonction check
function checkTypeNbLiters(param){
    if(isNaN(param) || param==""){
        alert("veuillez saisir un nombre!");
    }else{
        convertirEnNombre(param);
    }
}
// fonction convertirNombre
function convertirEnNombre(param){
    nbOfLitersConvert = parseFloat(param);
    convertirEnEuros(nbOfLitersConvert);
}

// fonction convertirEnEuros
function convertirEnEuros(param){
    nbEuros = param* 1.94;
    afficherResultat(nbEuros);
}

function afficherResultat(){
    document.getElementById("price").innerHTML = nbEuros;
}

// fonction faire modifier la valeur de input

buttonPrice.addEventListener("click", function(){
    recupererNbLitre();
})