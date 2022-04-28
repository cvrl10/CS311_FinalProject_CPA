"use strict";

function suffix(id)
{
    let element = document.getElementById(id);
    let name = element.getAttribute("name");

    let input = document.getElementById(name+"-input-label");
    input.textContent = id.substring(0, id.indexOf("-"));

    let output = document.getElementById(name+"-output-label");
    output.textContent = id.substring(id.lastIndexOf("-")+1, id.length);
}

function calculate(id)
{
    let element = document.getElementById(id);
    id = id.substring(0, id.indexOf("-"));

    //some formating: if the input string is empty return and if the string isNaN hide the output textbox 
    if (element.value === "" || isNaN(element.value))
    {   
        if (element.value === "")
            return;

        element = document.getElementById(id+"-output-container");

        if (element.style.display === "block")
            element.style.display = "none";

        return;
    }

    //array of radio buttons to determine which button is selected to decide the correct calculation
    let checked = document.getElementsByName(id);
    let result;

    switch(id)
    {
        case "meters":
            if (checked[0].checked)
                result = parseFloat(element.value)*3.2804;
            else
                result = parseFloat(element.value)/3.2804;
            break;
        case "kilometers":
            if (checked[0].checked)
                result = parseFloat(element.value)*0.621371;
            else
                result = parseFloat(element.value)/0.621371;
            break;
        case "celsius":
            if (checked[0].checked)
                result = parseFloat(element.value)*(9/5) + 32;
            else
                result = (parseFloat(element.value)-32)*(5/9);
            break;
        case "kilogram":
            if (checked[0].checked)
                result = parseFloat(element.value)*2.20462;
            else
                result = parseFloat(element.value)/2.20462;
            break;
        case "grams":
            if (checked[0].checked)
                result = parseFloat(element.value)/28.35;
            else
                result = parseFloat(element.value)*28.35;
    }

    element = document.getElementById(id+"-output");
    element.value = result.toFixed(2);

    element = document.getElementById(id+"-output-container");
    element.style.display = "block";
}

function display(id)
{
    let element = document.getElementById(id+"-input-container");
    element.style.display = "block";
}