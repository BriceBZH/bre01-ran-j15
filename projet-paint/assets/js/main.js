
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
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
    let nb_div = div.length;
    for(let i=0;i<nb_div;i++) {
        div[i].addEventListener("click", function(selectColor){
        	console.log(getSelectedColor());
        });
    }


    // le code de l'étape 3 se passe ici

});