"use strict";

// This is the hardcoded repo url for the github pages deployment
const repoUrl = "https://dan-collins-dev.github.io/static-site-deployment-demo"

// devMode is used to determine if the site is being run locally or on github pages
const devMode = false;

async function getAllMonsterData() {
    const endpointUrl =
        "https://dan-collins-dev.github.io/static-site-deployment-demo/data/monsters.json";
    const res = await fetch(endpointUrl);
    const data = await res.json();
    return data;
}

async function initializeData() {
    if (localStorage.getItem("monsterData") === null) {
        console.log("Fetching Data and initializing local storage for data");
        const data = await getAllMonsterData();

        // setting data in local storage requires it to be stringified first
        localStorage.setItem("monsterData", JSON.stringify(data));
        createMonsterList()
    } else {
        console.log("Data exists already");
        createMonsterList();
    }
}

function createMonsterList() {
    const allMonsters = JSON.parse(localStorage.getItem("monsterData"));
    const monsterList = document.getElementById("monster-list")

    allMonsters.forEach(monster => {
        const listItem = document.createElement("li");
        listItem.classList.add("monster-entry")

        if (devMode) {
            const link = document.createElement("a")
            link.href = `./monster.html?name=${monster.name}`;
            link.innerText = monster.name
            listItem.append(link)
            monsterList.appendChild(listItem)
        } else {
            const link = document.createElement("a")
            link.href = `${repoUrl}/monster.html?name=${monster.name}`;
            link.innerText = monster.name
            listItem.append(link)
            monsterList.appendChild(listItem)
        }
    });
}

initializeData();
