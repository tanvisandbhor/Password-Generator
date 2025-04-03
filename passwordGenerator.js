// const inputSlider = document.querySelector("[dataLength-slider]");
// const lengthDisplay = document.querySelector("[data-LengthNo]");
// const passwordDisplay = document.querySelector("[data-passwordDsisplay]");
// const cpoyMsg = document.querySelector("[copiedPassword-message]");
// const cpoyBtn = document.querySelector("[copysymbol]");
// const uppercaseCheck = document.querySelector("uppercase");
// const lowerCheck = document.querySelector("#lowercase");
// const numberCheck = document.querySelector("#numbers");
// const symbolCheck = document.querySelector("#string");                                                         
// const indicator = document.querySelector("[data-Indicator]");
// const generateBtn = document.querySelector("#generate-button");
// const allCheckBox = document.querySelector("input[type=checkbox]");
// const symbols = '!@#$%&*()_+=-/*.,;:[]{}~';

// let password ="";
// let PasswordLength = 10;
// let checkCount= 0;
// // strength ka circle color grey
// console.log('hii');
// handleSlider();

// console.log('hii itna toh chala1 slider');

// function handleSlider(){ //set password length accordin to slider
//     inputSlider.value = PasswordLength;
//     console.log('hi in slider');
//     lengthDisplay.innerText = PasswordLength; 
// }

// console.log('hii itna toh chala2 slider2');


// function setIndicator(color){
//     indicator.style.backgroundColor = color;
//     indicator.style.boxShadow = "10px 20px 30px color"

// }

// console.log('hii itna toh chala1 indicator');

// function getRandomInt(min,max){

//     return Math.floor(Math.random() *(max-min))+min;

// }

// function generateRandomNumber(){
//     return getRandomInt(0,9);

// }

// function generateUpperCase(){
//     return String.fromCharCode(getRandomInt(65,91));
    
// }

// function generatelowerCase(){
//     return String.fromCharCode(getRandomInt(97,123));
    
// }

// function generateSymbols(){
//     const randonNo =  getRandomInt(0,symbols.length);
//     return stringCheck.charAt[randonNo];
    
// }

// console.log('hii itna toh chala4 generaterandom');

// function calculateStrength(){
//     let havUpper = false;
//     let havLower = false;
//     let havNum = false;
//     let havSym = false;
//     if(uppercaseCheck.checked) {
//         havUpper =  true;
//     }
//     if(lowerCheck.checked){
//         havLower = true;
//     }
//     if(numberCheck.checked){
//         havNum= true;
//     }
//     if(symbolCheck.checked){
//         havNum= true;
//     }

// if(havUpper && havLower && havSym && havSym && PasswordLength>=8){
//     setIndicator("#0f0");
// }
// else if((havLower||havUpper)&&
//    ( havNum || havSym) && PasswordLength>=6)
//     {setIndicator("#ff0");}

// else {
//     setIndicator("#f00"); 
// }
// }
// console.log('hii itna toh chala5 calculate');


// async function copyContent(){
//     try{
//     await navigator.clipboard.writeText(passwordDisplay.value);
//     cpoyMsg.innerText= 'copied';
//     }
//     catch(e){
//         cpoyMsg.innerText= 'failed';
//     }
//     cpoyMsg.classList.add('active');//to make copy wala span visible

//     setTimeout(function(){
//         cpoyMsg.classList.remove('active');
//     },2000);
 
// }

// console.log('hii itna toh chala5 copycontent');

// function shuflePassword(array){
// //fisher yates method to shuffle
// for(let i = array.length-1;i>0;i--){
//     const j = Math.floor(Math.random() * (i+1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;   
// }
// let str = "";
// array.forEach((el)=> (str+=el));
// return str;
// }
// console.log('hii itna toh chala6 shufle');


// function handleCheckboxChange(){
//     checkCount = 0;
//     allCheckBox.forEach((CheckBox)=>{
//         if(checkbox.checked)
//             checkCount++;

//     })
//     // special condition

//     if(checkCount>PasswordLength){
//         checkCount=PasswordLength;
//         handleSlider();
//     }
// }
    

// allCheckBox.forEach((CheckBox) => {
//    CheckBox.addEventListener('change',handleCheckboxChange)
 
//    }
// );

// inputSlider.addEventListener('input', (e)=>{
//     PasswordLength = e.target.value;
//     handleSlider();
// });

// cpoyBtn.addEventListener('onclick',()=>{
//     if(passwordDisplay.value){
//         copyContent();
//     }
// });
// generateBtn.addEventListener('click',() =>{
//     if(checkCount<=0)  {
//         return;}
//     if(checkCount>PasswordLength){
//         checkCount=PasswordLength;
//         handleSlider();
//     }


// // lets start the journey to find new password

// // first remove the old password
// password= "";

// // now lets generate new paswsword
// let funcArr = [];

// if(uppercaseCheck.checked){
// funcArr.push(generateUpperCase)}
// if(lowerCheck.checked){
//     funcArr.push(generatelowerCase)}

// if(numberCheck.checked){

//     funcArr.push(generateRandomNumber)
// }
// if(symbolCheck.checked){
//     funcArr.push(generateSymbols)}


//     // compulsary addition
//     for(let i = 0; i < funcArr.length ;i++){
//         password += funcArr[i]();
//     }
//     // remaining ADDITION
//     for(let i = 0; i<PasswordLength-funcArr.length;i++){
//         let Randindex = getRandomInt(0,funcArr);
//         password+= funcArrl[Randindex]();
//     }
//     // shufle the password
//     password = shuflePassword(array.from(password));
//     passwordDisplay.value = password;


//     calculateStrength();
// })
// calculateStrengthconsole.log(' chala ki nhi');







const inputSlider = document.querySelector("[data-length-slider]");
const lengthDisplay = document.querySelector("[data-length-no]");
const passwordDisplay = document.querySelector("[data-password-display]");
const copyMsg = document.querySelector("[copied-password-message]");
const copyBtn = document.querySelector("[copy-symbol]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowerCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector("#generate-button");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "!@#$%&*()_+=-/*.,;:[]{}~";

let password = "";
let passwordLength = 10;
let checkCount = 0;

// Set initial slider and display values
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

// Update strength indicator color
function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px ${color}`;
}

// Generate random numbers, letters, and symbols
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateRandomNumber() {
    return String(getRandomInt(0, 10));
}
function generateUpperCase() {
    return String.fromCharCode(getRandomInt(65, 91));
}
function generateLowerCase() {
    return String.fromCharCode(getRandomInt(97, 123));
}
function generateSymbols() {
    const randomNo = getRandomInt(0, symbols.length);
    return symbols.charAt(randomNo);
}

// Calculate password strength
function calculateStrength() {
    let hasUpper = uppercaseCheck.checked;
    let hasLower = lowerCheck.checked;
    let hasNum = numberCheck.checked;
    let hasSym = symbolCheck.checked;

    if (hasUpper && hasLower && hasNum && hasSym && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if ((hasUpper || hasLower) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

// Copy password to clipboard
async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied!";
    } catch (e) {
        copyMsg.innerText = "Failed to copy!";
    }
    copyMsg.classList.add("active");
    setTimeout(() => copyMsg.classList.remove("active"), 2000);
}

// Shuffle password using Fisher-Yates algorithm
function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
}

// Handle checkbox changes
function handleCheckboxChange() {
    checkCount = Array.from(allCheckBox).filter(checkbox => checkbox.checked).length;

    if (checkCount > passwordLength) {
        passwordLength = checkCount;
        handleSlider();
    }
}

// Generate password
generateBtn.addEventListener("click", () => {
    if (checkCount <= 0) return;

    password = "";
    const funcArr = [];
    if (uppercaseCheck.checked) funcArr.push(generateUpperCase);
    if (lowerCheck.checked) funcArr.push(generateLowerCase);
    if (numberCheck.checked) funcArr.push(generateRandomNumber);
    if (symbolCheck.checked) funcArr.push(generateSymbols);

    for (let i = 0; i < funcArr.length; i++) {
        password += funcArr[i]();
    }
    for (let i = 0; i < passwordLength - funcArr.length; i++) {
        const randIndex = getRandomInt(0, funcArr.length);
        password += funcArr[randIndex]();
    }

    password = shufflePassword(Array.from(password));
    passwordDisplay.value = password;

    calculateStrength();
});

// Event listeners
inputSlider.addEventListener("input", (e) => {
    passwordLength = e.target.value;
    handleSlider();
});
copyBtn.addEventListener("click", () => {
    if (passwordDisplay.value) copyContent();
});
allCheckBox.forEach(checkbox => checkbox.addEventListener("change", handleCheckboxChange));

handleSlider();
