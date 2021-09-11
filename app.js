const male = document.querySelector("#maleInput");
const female = document.querySelector("#femaleInput");
const height = document.querySelector("#heightInput");
const weight = document.querySelector("#weightInput");
const age = document.querySelector("#ageInput");
const submit = document.querySelector("#resultsButton");
//const form = document.querySelector("#form")


function notEmpty(e){
    e.preventDefault();
    if(height.value ==='' || weight.value==='' || age.value==='' ||
     (male.checked === false && female.checked === false)){
        alert("all fields as required");
        submit.removeEventListener("click", showResults);
    }else{
        showResults();
    }
}
submit.addEventListener("click", notEmpty);

function showResults(){
    let infoDetails=[age.value, height.value, weight.value];
    if(male.checked){
        infoDetails.push("male");
    }else if(female.checked){
        infoDetails.push("female");
    }
    //form.reset();
    let bmi = Number(infoDetails[2])/(Number(infoDetails[1])/100*Number(infoDetails[1])/100);

    let measurment = "";
    if(bmi<18.5){
        measurment = "Lean";
        }else if(18.5<=bmi&&bmi<=29.8){
        measurment = "Ideal";
        }else if(30<=bmi&&bmi<=36.3){
        measurment = "Average";
        }else if(37<=bmi){
        measurment = "Above average";
    }

    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");

    let text = document.createTextNode(measurment);
    let bResult=document.createTextNode("BMI: ");
    let parse = document.createTextNode(parseFloat(bmi).toFixed(2));

    h1.append(text);
    h2.append(bResult);
    h2.append(parse);
    
    document.body.append(h1);
    document.body.append(h2);

    submit.removeEventListener("click", showResults);
    submit.removeEventListener("click", notEmpty);
}
submit.addEventListener("click", showResults);