const dogImage = document.getElementById("dogImage");

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(image => {
        dogImage.src = image.message;
        dogImage.style.height = '300px';
        dogImage.style.width = 'auto';
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  }