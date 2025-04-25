const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

const matrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];
const updateText = () => {
    outputText.textContent = checkUserInput();
    numberInput.value = "";
};

// Провверка вводных данных
const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if (!numberInput.value || isNaN(inputInt)){
        return "Please enter a valid number";
    } else if (inputInt < 1){
        return "Please enter a number greater than or equal to 1";
    } else if(inputInt > 3999){
        return "Please enter a number less than or equal to 3999";
    }
        
    return decimialToRome(inputInt);
};

// Рекурсия
const decimialToRome = (input) => {
    if (input === 0){
        return "";
    }
    for (let i = 0; i < matrix.length; i++){
        if (input >= matrix[i][0]){
            return matrix[i][1] + decimialToRome(input - matrix[i][0]);
        }
    }
};


// Ивенты
convertBtn.addEventListener("click", updateText);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        updateText();
    }
});