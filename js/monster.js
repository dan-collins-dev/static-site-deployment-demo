"use strict";

// Get the query string from the URL
const queryString = window.location.search;
console.log(`Query String: ${queryString}`);

// Create a URLSearchParams object to parse the query string
const params = new URLSearchParams(queryString);

// Get the value of the "name" parameter for filtering monsters
const monsterName = params.get("name");
console.log(`Monster Name: ${monsterName}`);

function renderData() {
    // Retrieve the monster data from localStorage. Must be parsed as JSON
    const monsters = JSON.parse(localStorage.getItem("monsterData"));

    // Filter the monsters based on the name parameter
    const monster = monsters.find((m) => m.name === monsterName);
    console.table(monster);

    // Destructure the monster object to get the properties
    const {
        id,
        name,
        HP,
        attack,
        defense,
        accuracy,
        agility,
        evasion,
        magicDefense,
        gil,
        exp,
        items,
        type,
        weakness,
        resistances,
        spawnArea,
        encountered,
        sprite,
    } = monster;

    
    // Get the HTML elements to display the monster data
    const nameElement = document.getElementById("monster-name");
    const hpElement = document.getElementById("hp");
    const attackElement = document.getElementById("attack");
    const defenseElement = document.getElementById("defense");
    const accuracyElement = document.getElementById("accuracy");
    const agilityElement = document.getElementById("agility");
    const intellectElement = document.getElementById("intellect");
    const evasionElement = document.getElementById("evasion");
    const magicDefenseElement = document.getElementById("magic-defense");
    const gilElement = document.getElementById("gil");
    const expElement = document.getElementById("exp");
    const spriteElement = document.getElementById("sprite");
    
    // Set the inner text of the HTML elements to the monster data
    nameElement.innerText = name;
    spriteElement.src = sprite;
    spriteElement.alt = `${name} Sprite`;
    hpElement.innerText = HP;
    attackElement.innerText = attack;
    defenseElement.innerText = defense;
    accuracyElement.innerText = accuracy;
    agilityElement.innerText = agility;
    intellectElement.innerText = evasion;
    evasionElement.innerText = evasion;
    magicDefenseElement.innerText = magicDefense;
    gilElement.innerText = gil;
    expElement.innerText = exp;
}

renderData();
