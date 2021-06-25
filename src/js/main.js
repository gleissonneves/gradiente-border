let shape = document.querySelector("#shape")
let topRight = document.querySelector('#top-right');
let bottomRight = document.querySelector('#bottom-right');
let topLeft = document.querySelector('#top-left');
let bottomLeft = document.querySelector('#bottom-left');
let generateShape = document.querySelector('#generateShape');

let shapeTopRight = 0;
let shapeBottomRight = 0;
let shapeTopLeft = 0;
let shapeBottomLeft = 0;


topRight.addEventListener('change', borderTopRightRadius);

bottomRight.addEventListener('change', borderBottomRightRadius);

bottomLeft.addEventListener('change', borderBottomLeftRadius);

topLeft.addEventListener('change', borderTopLeftRadius);

generateShape.addEventListener('click', generateShapeBloc);

function borderTopRightRadius(e) {
  shapeTopRight = e.target.value;
  shape.style.borderTopRightRadius = `${shapeTopRight}%`;
}

function borderBottomRightRadius(e) {
  shapeBottomRight = e.target.value;
  shape.style.borderBottomRightRadius = `${shapeBottomRight}%`;
}

function borderTopLeftRadius(e) {
  shapeTopLeft = e.target.value;
  shape.style.borderTopLeftRadius = `${shapeTopLeft}%`;
}

function borderBottomLeftRadius(e) {
  shapeBottomLeft = e.target.value;
  shape.style.borderBottomLeftRadius = `${shapeBottomLeft}%`;
}


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
 
function generateShapeBloc() {
  shape.style.borderBottomLeftRadius = `${shapeTopLeft}% ${shapeTopRight}% ${shapeBottomRight}% ${shapeBottomLeft}% / ${shapeTopLeft}% ${shapeTopRight}% ${shapeBottomRight}% ${shapeBottomLeft}% `;
}