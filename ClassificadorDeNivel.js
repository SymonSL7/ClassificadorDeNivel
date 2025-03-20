let experiencia = 9500;
let nome = "Goku";
let nivel = "";



if (experiencia <= 1000){
    nivel = "Ferro";
} else if (experiencia <=2000){
    nivel = "Bronze";
} else if (experiencia <= 5000){
    nivel = "Prata";
} else if (experiencia <= 7000){
    nivel = "Ouro";
} else if (experiencia <= 8000){
    nivel = "Platina Diamante";
} else if (experiencia <= 9000){
    nivel = "Ascendente";
} else if (experiencia <= 10000){
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O herói ${nome} está no nível ${nivel}`);