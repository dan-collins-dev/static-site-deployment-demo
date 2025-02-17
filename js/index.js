"use strict";

const repoName = "static-site-deployment-demo"
let dev = false;

async function getAllMonsterData() {
    const endpointUrl =
        "https://dan-collins-dev.github.io/static-site-deployment-demo/data/monsters.json";
    const res = await fetch(endpointUrl);
    const data = await res.json();
    return data;
}

async function initializeData() {
    if (!localStorage.getItem("monsterData")) {
        console.log("Fetching Data and initializing local storage for data");
        const data = await getAllMonsterData();

        // setting data in local storage requires it to be stringified first
        localStorage.setItem("monsterData", JSON.stringify(data));
    } else {
        console.log("Data exists already");
    }
}

function createMonsterList() {
    const allMonsters = JSON.parse(localStorage.getItem("monsterData"));
    const monsterList = document.getElementById("monster-list")

    allMonsters.forEach(monster => {
        const listItem = document.createElement("li");
        listItem.classList.add("monster-entry")

        if (dev) {
            listItem.innerHTML = `<a href="./monster.html?name=${monster.name}">${monster.name}</a>`
        } else {
            listItem.innerHTML = `<a href="/monster.html?name=${monster.name}">${monster.name}</a>`
        }

        monsterList.appendChild(listItem)
    });
}

initializeData();
createMonsterList();
