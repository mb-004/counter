// TODO (see instructions)

const counterValue = document.getElementById("app");
//console.log("counterValue", counterValue);
const value = document.createElement("h1");
//console.log("value", value);
value.textContent = "0";
//console.log("value", value);
counterValue.prepend(value);

const selectButtons = document.querySelectorAll("button");
//console.log("selectButtons", selectButtons);

let countValue = 0;

selectButtons.forEach((button) => {
    //console.log(button);
    button.addEventListener("click", (e) => {
        //console.log("the button was clicked");
    const styles = e.currentTarget.classList;
    //console.log("styles", styles);
    if (styles.contains("increment")) {
        countValue++;
    }
    else if (styles.contains("decrement")) {
        countValue--;
    }
    value.textContent = countValue; 
    })
})