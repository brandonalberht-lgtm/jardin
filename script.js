//=============================
// ELEMENTOS
//=============================

const flower = document.getElementById("flower");

const waterButton = document.getElementById("waterButton");

const message = document.getElementById("message");

const days = document.getElementById("days");

const moodButtons =
document.querySelectorAll("[data-mood]");

//=============================
// DATOS
//=============================

let garden = {

    level:0,

    days:0,

    lastVisit:null,

    mood:"normal"

};

//=============================
// CARGAR DATOS
//=============================

function loadGarden(){

    const data =
    localStorage.getItem("garden");

    if(data){

        garden = JSON.parse(data);

    }

}

//=============================
// GUARDAR DATOS
//=============================

function saveGarden(){

    localStorage.setItem(

        "garden",

        JSON.stringify(garden)

    );

}
//=============================
// FLORES
//=============================

const flowers=[

"🌱",

"🌿",

"🌷",

"🌹",

"🌹✨"

];

function updateFlower(){

    let level = garden.level;

    if(level>=flowers.length){

        level = flowers.length-1;

    }

    flower.textContent = flowers[level];

}

//=============================
// CONTADOR
//=============================

function updateDays(){

    days.textContent = garden.days;

}
//=============================
// MENSAJE
//=============================

function randomMessage(mood){

    const list =

    messages[mood];

    const random =

    Math.floor(

        Math.random()*list.length

    );

    message.textContent =

    list[random];

}
