//console.log('hello, world!');
var imageUrls = [];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', performOnClick);
function performOnClick(){
  if (imageUrlInput.value !== ""){
    //console.log(imageUrlInput.value);
    imageUrls.push(imageUrlInput.value);
    //console.log("current array contents: ", imageUrls);

  }
  imageUrlInput.value = "";
}
