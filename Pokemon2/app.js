class pokemones {
    constructor(name, power, type, age, healPoints) {
        this._name = name;
        this._power = power;
        this._type = type;
        this._age = age;
        this._healPoints = healPoints;
    }

    get name() {
        return this._name;
    }

    get power() {
        return this._power;
    }

    get type() {
        return this._type;
    }

    get age() {
        return this._age;
    }

    get healPoints() {
        return this._healPoints;
    }

}

const pikachu = new pokemones("Pikachu", "1500", "Corriente", "5 años", "100")
const bulbasur = new pokemones("Bulbasur", "1250", "Plantoso", "2 años", "75")
const charmander = new pokemones("Charmander", "1450", "Hot", "4 años", "95")
const squirtle = new pokemones("Squirtle", "1350", "Acuoso", "3 años", "85")


let player = [];

function pokemonSelection(num) {
    switch (num) {
        case 1:
            player = [[pikachu.name], [pikachu.power], [pikachu.type], [pikachu.age], [pikachu.healPoints]]
            Swal.fire(
                `Seleccion correcta. `,
                `Has seleccionado tu pokemon de nombre: ${pikachu.name} ` +
                `con un poder de: ${pikachu.power} ` +
                `de tipo: ${pikachu.type}`,
                'success'
            )
            //alert(`Tu selecicon ha sido: ${player}`);
            break;
        case 2:
            player = [[bulbasur.name], [bulbasur.power], [bulbasur.type], [bulbasur.age], [bulbasur.healPoints]]
            Swal.fire(
                `Seleccion correcta. `,
                `Has seleccionado tu pokemon de nombre: ${bulbasur.name} ` +
                `con un poder de: ${bulbasur.power} ` +
                `de tipo: ${bulbasur.type}`,
                'success'
            )
            break;
        case 3:
            player = [[charmander.name], [charmander.power], [charmander.type], [charmander.age], [charmander.healPoints]]
            Swal.fire(
                `Seleccion correcta. ` ,
                `Has seleccionado tu pokemon de nombre: ${charmander.name} ` +
                `con un poder de: ${charmander.power} ` +
                `de tipo: ${charmander.type}`,
                'success'
            )
            break;
        case 4:
            player = [[squirtle.name], [squirtle.power], [squirtle.type], [squirtle.age], [squirtle.healPoints]]
            Swal.fire(
                `Seleccion correcta. ` ,
                `Has seleccionado tu pokemon de nombre: ${squirtle.name} ` +
                `con un poder de: ${squirtle.power} ` +
                `de tipo: ${squirtle.type}`,
                'success'
            )
            break;
    }
}

function mostrarinfo(num) {
    switch (num) {
        case 1:
            Swal.fire(
                'Información',
                `El pokemon se llama: ${pikachu.name} ` +
                `tiene un poder de: ${pikachu.power} ` +
                `es de tipo: ${pikachu.type} ` +
                `y tiene una edad de: ${pikachu.age}`,
                'question'
            )
            break;
        case 2:
            Swal.fire(
                'Información',
                `El pokemon se llama: ${bulbasur.name} ` +
                `tiene un poder de: ${bulbasur.power} ` +
                `es de tipo: ${bulbasur.type} ` +
                `y tiene una edad de: ${bulbasur.age}`,
                'question'
            )
            break;
        case 3:
            Swal.fire(
                'Información',
                `El pokemon se llama: ${charmander.name} ` +
                `tiene un poder de: ${charmander.power} ` +
                `es de tipo: ${charmander.type} ` +
                `y tiene una edad de: ${charmander.age}`,
                'question'
            )
            break;
        case 4:
            Swal.fire(
                'Información',
                `El pokemon se llama: ${squirtle.name} ` +
                `tiene un poder de: ${squirtle.power} ` +
                `es de tipo: ${squirtle.type} ` +
                `y tiene una edad de: ${squirtle.age}`,
                'question'
            )
            break;
    }
}
function redireccion() {
    location.href = "juego.html"
}
