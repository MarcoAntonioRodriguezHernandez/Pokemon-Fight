document.addEventListener("DOMContentLoaded", function () {
    comienzo();
});

let player = [];
let pokemonSelected = [];
let enemy = [];
let pokemonEnemy = [];
Math.random()

//====================================== Pokemon del jugador ======================================
player[1] = 1;
pokemonSelected[0] = "Pikachu"; // Nombre
pokemonSelected[1] = 1500; // Poder
pokemonSelected[2] = "Corriente"; // Tipo
pokemonSelected[3] = 100; // Vida

//====================================== Pokemon enemigo ==========================================
pokemonEnemy[0] = "Bulbasur"; // Nombre
pokemonEnemy[1] = 1250; // Poder
pokemonEnemy[2] = "Plantoso"; // Tipo
pokemonEnemy[3] = 75; // Vida

//=================================================================================================

function comienzo() {
    alert('Presiona el botón para comenzar.')


    if (player[1] === 1) {
        document.getElementById("pkImage1").innerHTML = "https://hothardware.com/ContentImages/NewsItem/46448/content/small_possum-sweater.jpg";
        document.getElementById("v1").innerHTML = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`
        document.getElementById("btnAtack1").innerText = 'Patada';
        document.getElementById("btnAtack2").innerText = 'AtackTrueno';
        document.getElementById("btnAtack3").innerText = 'ImpackTrueno';

        //================================== Pokemon enemigo ==================================
        document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;

    } else if (player[1] === 2) {
        document.getElementById("pkImage1").innerHTML = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtjM4T3dfk459_ZRnkZaqj9yl5RROJwQ4pQ&usqp=CAU";
        document.getElementById("v1").innerHTML = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`
        document.getElementById("btnAtack1").innerText = 'Latigazo';
        document.getElementById("btnAtack2").innerText = 'Golpe Pastoso';
        document.getElementById("btnAtack3").innerText = 'Enredadera';

        //================================== Pokemon enemigo ==================================
        document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;

    } else if (player[1] === 3) {
        document.getElementById("pkImage1").innerHTML = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKdhyFprj4-XAqxi7jQgnsql7_IuClG9sqUQ&usqp=CAU";
        document.getElementById("v1").innerHTML = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`
        document.getElementById("btnAtack1").innerText = 'Sarpazo';
        document.getElementById("btnAtack2").innerText = 'EscupeFuego';
        document.getElementById("btnAtack3").innerText = 'Llamarada';

        //================================== Pokemon enemigo ==================================
        document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;

    } else if (player[1] === 4) {
        document.getElementById("pkImage1").innerHTML = "https://media.sketchfab.com/models/a23f291aa6114a8fb461b4480f8ebe4c/thumbnails/85a2eacccedb49a19a383a51795200e3/8cc47da186e5490489e7fb54987e496a.jpeg";
        document.getElementById("v1").innerHTML = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`
        document.getElementById("btnAtack1").innerText = 'PatadaAcuosa';
        document.getElementById("btnAtack2").innerText = 'Salpicon';
        document.getElementById("btnAtack3").innerText = 'Inundación';

        //================================== Pokemon enemigo ==================================
        document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;

    }
}

function fnGolpe1() {
    pokemonEnemy[3] -= 8;
    document.getElementById("v2").innerHTML = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`
    healtLeft(1)
    pokemonSelected[3] -= 8;
    document.getElementById("v1").innerHTML = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`
    healtLeft(2)
}

function fnGolpe2(atk) {
    playerAttack(atk)
    enemyAttack()
}

function fnGolpe3(atk) {
    playerAttack(atk)
    enemyAttack()
}

function playerAttack(atk) {
    switch (pokemonSelected[2]) {
        case "Corriente":
            comparisonPokemon(atk, 16, 5, 13, 19, 19, 20, 20, 27)
            break;
        case "Plantoso":
            comparisonPokemon(atk, 12, 17, 10, 15, 12, 5, 16, 20)
            break;
        case "Hot":
            comparisonPokemon(atk, 15, 18, 18, 22, 10, 10, 10, 12)
            break;
        case "Acuoso":
            comparisonPokemon(atk, 15, 17, 10, 11, 17, 21, 7, 8)
            break;
    }
}

function comparisonPokemon(atk, cDmg2, cDmg3, pDmg2, pDmg3, hDmg2, hDmg3, aDmg2, aDmg3) {
    switch (pokemonEnemy[2]) {
        case "Corriente":
            if (atk === 2) {
                pokemonEnemy[3] -= cDmg2;
                document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;
                healtLeft(1)
            } else {
                pokemonEnemy[3] -= cDmg3;
                document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;
                healtLeft(1)
            }
            break;
        case "Plantoso":
            if (atk === 2) {
                pokemonEnemy[3] -= pDmg2;
                document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;
                healtLeft(1)
            } else {
                pokemonEnemy[3] -= pDmg3;
                document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;
                healtLeft(1)
            }
            break;
        case "Hot":
            if (atk === 2) {
                pokemonEnemy[3] -= hDmg2;
                document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;
                healtLeft(1)
            } else {
                pokemonEnemy[3] -= hDmg3;
                document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;
                healtLeft(1)
            }
            break;
        case "Acuoso":
            if (atk === 2) {
                pokemonEnemy[3] -= aDmg2;
                document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;
                healtLeft(1)
            } else {
                pokemonEnemy[3] -= aDmg3;
                document.getElementById("v2").innerText = `Vida ${pokemonEnemy[0]}: ${pokemonEnemy[3]}`;
                healtLeft(1)
            }
            break;
    }
}

function enemyAttack() {
    switch (pokemonEnemy[2]) {
        case "Corriente":
            comparisonEnemy(randomNumber(2, 3), 16, 5, 13, 19, 19, 20, 20, 27)
            break;
        case "Plantoso":
            comparisonEnemy(randomNumber(2, 3), 12, 17, 10, 15, 12, 5, 16, 20)
            break;
        case "Hot":
            comparisonEnemy(randomNumber(2, 3), 15, 18, 18, 22, 10, 10, 10, 12)
            break;
        case "Acuoso":
            comparisonEnemy(randomNumber(2, 3), 15, 17, 10, 11, 17, 21, 7, 8)
            break;
    }
}

function comparisonEnemy(atk, cDmg2, cDmg3, pDmg2, pDmg3, hDmg2, hDmg3, aDmg2, aDmg3) {
    switch (pokemonSelected[2]) {
        case "Corriente":
            if (atk === 2) {
                pokemonSelected[3] -= cDmg2;
                document.getElementById("v1").innerText = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`;
                healtLeft(2)
            } else {
                pokemonSelected[3] -= cDmg3;
                document.getElementById("v1").innerText = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`;
                healtLeft(2)
            }
            break;
        case "Plantoso":
            if (atk === 2) {
                pokemonSelected[3] -= pDmg2;
                document.getElementById("v1").innerText = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`;
                healtLeft(2)
            } else {
                pokemonSelected[3] -= pDmg3;
                document.getElementById("v1").innerText = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`;
                healtLeft(2)
            }
            break;
        case "Hot":
            if (atk === 2) {
                pokemonSelected[3] -= hDmg2;
                document.getElementById("v1").innerText = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`;
                healtLeft(2)
            } else {
                pokemonSelected[3] -= hDmg3;
                document.getElementById("v1").innerText = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`;
                healtLeft(2)
            }
            break;
        case "Acuoso":
            if (atk === 2) {
                pokemonSelected[3] -= aDmg2;
                document.getElementById("v1").innerText = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`;
                healtLeft(2)
            } else {
                pokemonSelected[3] -= aDmg3;
                document.getElementById("v1").innerText = `Vida ${pokemonSelected[0]}: ${pokemonSelected[3]}`;
                healtLeft(2)
            }
            break;
    }
}


function healtLeft(id) {
    if (id == 1) {
        if (pokemonEnemy[3] <= 0) {
            alert(`Juego terminado, has ganado`)
        }
    } else if (id == 2) {
        if (pokemonSelected[3] <= 0) {
            alert(`Juego terminado, has perdido`)
        }
    }
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (1 + max - min) + min);
}
