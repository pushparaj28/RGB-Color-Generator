const redslider= document.getElementById("redslider");
const blueslider= document.getElementById("blueslider");
const greenslider= document.getElementById("greenslider");

const redvalueSpan = document.getElementById("redValue");
const bluevalueSpan = document.getElementById("blueValue");
const greenvalueSpan = document.getElementById("greenValue");

const colorBox= document.getElementById("color-box");
const copyButton = document.getElementById("copyButton");
const inputtypeRGBValue = document.getElementById("input-type-value"); 

redslider.addEventListener('input',updateColor);
blueslider.addEventListener('input',updateColor);
greenslider.addEventListener('input',updateColor);

copyButton.addEventListener('click',copyRGBValue);

function updateColor(){

    const redvalue = redslider.value;
    const bluevalue = blueslider.value;
    const greenvalue = greenslider.value;
  
    // console.log(redvalue,bluevalue,greenvalue);

const rgbColor = `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`;
console.log(rgbColor);

   colorBox.style.backgroundColor = rgbColor;

   redvalueSpan.textContent=redvalue;
   bluevalueSpan.textContent=bluevalue;
   greenvalueSpan.textContent=greenvalue;

   inputtypeRGBValue.textContent=rgbColor;

  }

  

  updateColor();


  function copyRGBValue(){
    const redvalue = redslider.value;
    const bluevalue = blueslider.value;
    const greenvalue = greenslider.value;

    const rgbColor = `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`;

    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert("RGB Color is copyied to clipboard : "+rgbColor);
    })
    .catch((err)=>{
        console.error("failed to copy RGB value : ",error);
    })

  }
























