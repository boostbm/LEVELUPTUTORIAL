// Generate Random Color
// RGB 0-255 
// Apply to Dom
// Update Color on Event. 


// const generateColorValue = () => Math.floor(Math.random() * 256);

// const createColor = () => {
//   const red = generateColorValue();
//   const green = generateColorValue();
//   const blue = generateColorValue();
//   return `rgb(${red}, ${green}, ${blue})`;
// };

// const applyColorToBody = color => {
//   return (document.body.style.backgroundColor = color)
  
// }; 

// const addRandomColorToBg = () => {
//   const color = createColor();
//   return applyColorToBody(color);
// }; 

// addRandomColorToBg();

// const newColors = document.getElementById("new-colors");

// newColors.onclick = () => addRandomColorToBg();

//const log = () => console.log("is in timeout");
//setTimeout(log, 5000);
// setTimeout(addRandomColorToBg, 5000);

// const chargeCard = () => new Promise ((resolve, reject) => {
//   if (true) {
//     return resolve(true);
//   }
//   return resolve(false);
// });

// const chargeCC = async (ccNUmber) => {
//   const res = await chargeCard(ccNumber);
//   console.log(res);
// }


const simpleShoppingCart = [10, 20, 25, 5, 10];

const shoppingCart = [
  {
    sku: "1234",
    price: 10,
    type: "t-shirt"
  },
  {
    sku: "1233334",
    price: 16,
    type: "tutorial"
  },
  {
    sku: "12111134",
    price: 30,
    type: "tutorial"
  }
];

// .map

// const discountCart  = simpleShoppingCart.map((value) => {
//   return value * .745;
// })



// const discountCart  = simpleShoppingCart.map((value => value * .75))



// .filter 


// const filteredCart = simpleShoppingCart.filter(value => {
//   return value.price <= 10; // if value is less or equal to 10, filter through.
// }); 

// const total = simpleShoppingCart.reduce()

// console.log(simpleShoppingCart);
// console.log(total);

// const total = simpleShoppingCart.reduce((total, currentPrice) => {
//   return total = currentPrice;
// })

// console.log([...simpleShoppingCart].reverse());
// console.log(simpleShoppingCart);


console.log(this);

const test = {
  testFunc: function() {
    console.log(this);
  },
  testFuncTwo: () => {
    console.log(this);
  }
};

function team() {
  console.log(this);
}

const button = document.getElementById("new-colors");
button.addEventListener("click", function() {
  console.log(this);
});

// test.testFunc();
// test.testFuncTwo();
// team();
// var test = new team();


// FETCH

const SEARCH_QUERY = 'Javascript';
const API_URL = `http://openlibrary.org/search.json?q=${SEARCH_QUERYß}`

fetch(API_URL)
.then(res => {
  console.log(res);
})
.catch(error => {
  console.log(error)
});
