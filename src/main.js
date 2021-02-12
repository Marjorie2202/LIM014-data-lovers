//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


import { example } from './data.js';
import data from './data/lol/lol.js';

document.getElementById("principalNav").style.display= "block";
document.getElementById("secondaryNav").style.display= "none";
// const showDataChamps = document.querySelector(" .calling");

//PARA EL CAMBIO DE PAGINA - AL DAR CLICK EN EL MENU DORADITO A CAMPEONES
document.getElementById("champions").addEventListener("click", function() {
    document.getElementById("secondaryNav").style.display= "block";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page2-Champions");
    document.getElementById("body").classList.remove("page3-Statistics");
    document.getElementById("body").classList.remove("page4-InfoAbout");
   //const dataAllChampions = Object.values(data);
   
});

//AL DAR CLICK EN ESTADISTICA CAMBIO IMAGEN FONDO ETC
document.getElementById("statistics").addEventListener("click", function() {
    document.getElementById("secondaryNav").style.display= "none";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page3-Statistics");
    document.getElementById("body").classList.remove("page2-Champions");
    document.getElementById("body").classList.remove("page4-InfoAbout");

   //const dataAllChampions = Object.values(data);
   
});

document.getElementById("about").addEventListener("click", function() {
    document.getElementById("secondaryNav").style.display= "none";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page4-InfoAbout");
    document.getElementById("body").classList.remove("page3-Statistics");
    document.getElementById("body").classList.remove("page2-Champions");

   //const dataAllChampions = Object.values(data);
   
});



document.getElementById("hamburgerBtn").addEventListener("click", function(){
    document.getElementsByClassName("menuCel").style.display= 'block';
})

const reload = document.getElementById("lolIcon").addEventListener("click",
function(){
    location.reload();
}
)


//console.log(data);