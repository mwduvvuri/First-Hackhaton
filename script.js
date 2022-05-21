var box = document.createElement("form");
box.setAttribute("id","pokiform");

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","pokemon");
input.setAttribute("required"," ");
input.setAttribute("placeholder","Pokemon name");

var get = document.createElement("input");
get.setAttribute("type","submit");
get.setAttribute("value","Search");
box.append(input,get);

document.body.append(box);

let div4 = document.createElement("div");
div4.setAttribute("id","allinfo");
document.body.append(div4);

let div1 = document.createElement("div");
div1.setAttribute("id","abilities");
div4.append(div1);

let div2 = document.createElement("div");
div2.setAttribute("id","weight");
div4.append(div2);

let div3 = document.createElement("div");
div3.setAttribute("id","moves");
div4.append(div3);

var poki = document.getElementById("pokiform");
poki.addEventListener("submit",(event)=>{
    event.preventDefault();

var pokemon = document.getElementById("pokemon").value;
var url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

getpokemon(url);
});

async function getpokemon(url){
      let info = await fetch(url);
    // console.log(info);
    let data = await info.json();
    console.log(data);
  
  let pokiability = document.getElementById("abilities");
  let weight = document.getElementById("weight");
  let move = document.getElementById("move");

  pokiability.innerHTML=" ";
  weight.innerHTML=" ";
  // move.innerHTML=" ";

  for(let i=0; i<data.abilities.length; i++){
    let label1 = document.createElement("label1");
    label1.innerHTML = data.abilities[i].ability.name;
    label1.innerHTML.split;
    pokiability.append(`The abilities of the pokemon: `);
    pokiability.append(label1);
  }
  weight.append(`Weight of the pokemon: ${data.weight}`);
}

