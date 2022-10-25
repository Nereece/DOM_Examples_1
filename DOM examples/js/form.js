console.log("totally spies");
const firstName = document.getElementById('first-name');
const secondName = document.getElementById('second-name');
const submitButton = document.getElementById('submit');
submitButton.onclick = function(){
    if(firstName.value == "" || secondName.value == ""){
        console.log("Don't be a dickhead")
    }else{
        console.log("nice one james")
    }
}