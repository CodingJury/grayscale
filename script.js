function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
        console.log(file);
    } else {
        preview.src = "";
    }
}


const img = document.getElementById("origonalImage");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

img.onload = function () {
  img.crossOrigin = "anonymous";
  canvas.width = this.width;
  canvas.height = this.height;

  ctx.drawImage(img, 0, 0);
//   console.log(this.width);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (i = 0; i < imgData.data.length; i += 4) {
    let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
    let colour = count/3;

    imgData.data[i] = colour;
    imgData.data[i + 1] = colour;
    imgData.data[i + 2] = colour;
    imgData.data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
};