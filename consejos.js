
const btnMas = document.getElementById("btnMas");
const consejosExtra = document.getElementById("consejos-extra");

btnMas.addEventListener("click", () => {
    consejosExtra.style.display = "flex";
    consejosExtra.style.flexDirection = "column";
    consejosExtra.style.alignItems = "center";
    btnMas.style.display = "none";
});

