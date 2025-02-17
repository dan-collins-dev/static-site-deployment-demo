"use strict";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const monsterName = params.get("name");

function renderData() {
    const monsters = JSON.parse(localStorage.getItem("monsterData"))
    const monster = monsters.find(m => m.name === monsterName)
    const name = document.getElementById("name")
    name.textContent = monster.name
}

renderData()