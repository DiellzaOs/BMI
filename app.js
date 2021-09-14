
//const submit = document.querySelector("#resultsButton");
//const calculation = document.querySelector("[name=calculation]");
//const form = document.querySelector("#form")
//const total = document.querySelector(".total");


function notEmpty(e){
    e.preventDefault();
    if(height.value ==='' || weight.value==='' || age.value==='' ||
     (male.checked === false && female.checked === false)){
        alert("all fields as required");
        //calculation.removeEventListener("input", showResults);
    }else{
        showResults();
    }
}
//calculation.addEventListener("input", notEmpty);

function showResults(){
    
    // var male = document.querySelector("#maleInput"),
    //     female = document.querySelector("#femaleInput"),
    var height = parseInt(document.querySelector("#height").value),
        weight = document.querySelector("#weight").value,
        
        age = document.querySelector("#age").value,
        output = document.querySelector("output");

    // let infoDetails=[age.value, height.value, weight.value];
    // if(male.checked){
    //     infoDetails.push("male");
    // }else if(female.checked){
    //     infoDetails.push("female");
    // }
    //form.reset();
    let formula = (weight/(height/100*height/100)).toFixed(2);
    //let formula = Number(infoDetails[2])/(Number(infoDetails[1])/100*Number(infoDetails[1])/100);

    let category = " "
    if(formula<18.5){
        category = "Lean";
        }else if(18.5<=formula&&formula<=29.8){
        category = "Ideal";
        }else if(30<=formula&&formula<=36.3){
        category = "Average";
        }else if(37<=formula){
        category = "Above average";
    }

    output.innerHTML = '<h1>' +formula+'</h1><h2>'+category+'</h2>';

    // const h1 = document.createElement("h1");
    // const h2 = document.createElement("h2");

    // let text = document.createTextNode(measurment);
    // let bResult=document.createTextNode("BMI: ");
    // let parse = document.createTextNode(parseFloat(bmi).toFixed(2));

    // h1.append(text);
    // h2.append(bResult);
    // h2.append(parse);
    
    // document.body.append(h1);
    // document.body.append(h2);

    //calculation.removeEventListener("input", showResults);
    //calculation.removeEventListener("input", notEmpty);

}
showResults()
//calculation.addEventListener("input", showResults);


// function updateKg(val){
//     document.querySelector(h2).value=val;
    
// }

// function calcChange(){
//    // weight.value=calculation;

// }
// calculation.addEventListener("change", showResults);
// function calculateSlider(){
//     const cmInput= height.value;
//     const kgInput= weight.value;
//     const calcInput = calculation.value;
//     const result = bmi;
//     console.log(bmi);
//}

