//imc = peso / altura * altura 

let peso;
let altura;

let tipoImc;

let imc;

peso = prompt("Peso: ");
altura = prompt("Altura: ");

imc = peso/(altura*altura);

if(imc< 18.5 && int >= 0) {
    tipoImc = "MAGREZA";
} else if(imc >= 18.5 && imc <= 24.9){
    tipoImc = "NORMAL";
} else if(imc >= 25 && imc <= 29.9){
    tipoImc = "SOBRE PESO";
} else if(imc >= 30 && imc <= 39.9){
    tipoImc = "OBESIDADE";
} else if(imc >=40){
    tipoImc = "GRAVE";
}else{
    tipoImc = "Erro 404";
}

alert(`Seu IMC é de ${imc} kg/m2. O seu tipo de IMC é ${tipoImc}`);



