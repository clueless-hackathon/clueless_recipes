//adds textbox to bottom of selected element div
function addTextbox(element){
    const textbox = document.createElement("div");
    textbox.innerHTML = "<input type = \"text\"><input type = \"button\" value = \"+\" class = \"Textbox\" onclick = \"addTextbox('" + element + "')\"><input class \"Button\" type = \"button\" value = \"-\" onclick = \"removeTextbox('" + element + "')\">";
    document.getElementById(element).appendChild(textbox);
}

//TODO: Finish implementation - remove selected element
function removeTextbox(element){
    document.getElementById(element).removeChild();
}