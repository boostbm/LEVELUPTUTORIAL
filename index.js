// Generate Random Color
// RGB 0-255 
// Apply to Dom
// Update Color on Event. 


const generateColorValue = () => Math.floor(Math.random() * 256);

const createColor = () => {
  const red = generateColorValue();
  const green = generateColorValue();
  const blue = generateColorValue();
  return `rgb(${red}, ${green}, ${blue})`;
};

const applyColorToBody = color => {
  return (document.body.style.backgroundColor = color)
  
}; 

const addRandomColorToBg = () => {
  const color = createColor();
  return applyColorToBody(color);
}; 

addRandomColorToBg();

const newColors = document.getElementById("new-colors");

newColors.onclick = () => addRandomColorToBg();

//const log = () => console.log("is in timeout");
//setTimeout(log, 5000);
setTimeout(addRandomColorToBg, 5000);

const chargeCard = () => new Promise ((resolve, reject) => {
  if (true) {
    return resolve(true);
  }
  return resolve(false);
});

const chargeCC = async (ccNUmber) => {
  const res = await chargeCard(ccNumber);
  console.log(res);
}