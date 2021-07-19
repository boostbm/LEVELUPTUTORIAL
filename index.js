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

const newColors = document.getElementById(new-colors);

newColors.onclick = () => addRandomColorToBg();