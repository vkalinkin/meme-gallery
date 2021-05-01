//console.log('hello, world!');
var imageUrls = ['https://th.bing.com/th/id/OIP.NT2RwbvIz6VKelx98bXIQAHaGv?pid=ImgDet&rs=1',
  'https://ih0.redbubble.net/image.133003823.2275/raf,360x360,075,t,fafafa:ca443f4786.jpg',
'https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/04/superhero-meme-display.jpg'];


var gallery = document.querySelector('main');

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
  updateGallery();
}

function updateGallery(){
  gallery.innerHTML = '';
  for (var a = 0; a < imageUrls.length; a++){
    //console.log("imageUrls array contents: ", imageUrls[a]);
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[a];
    //console.log(imageElement);
    gallery.appendChild(imageElement);
  }
}
