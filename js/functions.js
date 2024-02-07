"use strict";

document.addEventListener("click", () => {
    let fname = "./img/" + Math.floor(Math.random() * 6 + 1) + ".svg"
    console.log(fname)
    document.querySelector("#dice > img").setAttribute("src", fname);
});
