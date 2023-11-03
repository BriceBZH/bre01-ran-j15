
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
    console.log(getSelectedColor());
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}
function create_color() {
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    return "#"+randomColor;
}
function loadPalette(palette)
{
    let colors = palette;
    //bonus2
    let head = document.querySelector("header");
    let nb_colors = colors.length;
    //fenetre pour savoir combien de couleur on veut
    let nb_palette_color = prompt("Combien de couleur voulez-vous, minimum 8", "8");
    if(nb_palette_color != null && nb_palette_color == 0)  {
        nb_palette_color = nb_colors;
    }
    let manque_color = nb_palette_color - nb_colors;
    for(let i=0;i<manque_color;i++) {
        let newDiv = document.createElement("div");
        head.appendChild(newDiv);
        let new_color = colors.push(create_color());
    }
    //affichage des couleurs dans les div + ajout des inputs
    let div = document.querySelectorAll("header > div");
    let nb_colors_bis = colors.length;
    for(let j=0;j < nb_colors_bis;j++ ) {
        div[j].setAttribute("style", "background-color:"+colors[j]+";");
        let newInput = document.createElement("input");
        newInput.setAttribute("type", "color");
        newInput.setAttribute("value", colors[j]);
        div[j].appendChild(newInput);
    }
    //on modifie le div en fonction de la couleur mise dans le input
    let input = document.querySelectorAll("header > div > input");
    console.log(input);
    let nb_input = input.length;
    for(let i=0;i<nb_input;i++) {
        input[i].addEventListener("change", function(){
            div[i].setAttribute("style", " background:"+input[i].value+";");
            sessionStorage.setItem("selectedColor", input[i].value);
        });
    }
}
window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);
    //exo2
    let div = document.querySelectorAll("header > div");
    let nb_div = div.length;
    for(let i=0;i<nb_div;i++) {
        div[i].addEventListener("click", selectColor);
    }
    //exo3
    let div_main = document.querySelectorAll("main > div > div");
    let nb_div_main = div_main.length;
    for(let i=0;i<nb_div_main;i++) {
        div_main[i].addEventListener("click", function(){
            if(!div_main[i].style.backgroundColor) {
                div_main[i].setAttribute("style", " background:"+getSelectedColor()+";");
            } else {
                div_main[i].setAttribute("style", null);
            }
        });
    }

});