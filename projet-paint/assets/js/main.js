
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

function loadPalette(palette)
{
    let colors = palette;
    let div = document.querySelectorAll("header > div");
    let nb_colors = colors.length;
    for(let j=0;j < nb_colors;j++ ) {
        div[j].setAttribute("style", "background-color:"+colors[j]+";")
    }
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);
    let div = document.querySelectorAll("header > div");
    //bonus2
    let head = document.querySelector("header");
    //fenetre pour savoir combien de couleur on veut
    let nb_palette_color = 16;
    let nb_color = loadPalette.length();
    let manque_color = nb_palette_color - nb_color;
    for(let i=0;i<manque_color;i++) {
        
    }
    //exo2
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