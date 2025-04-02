
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


}
showResults()

