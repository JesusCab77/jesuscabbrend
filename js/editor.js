// Get the source image to be edited
let image = document.getElementById('sourceImage');

// Get the canvas for the edited image
let canvas = document.getElementById('canvas');

// Get the 2D context of the image
let context = canvas.getContext('2d');
let divtest = document.getElementById("test");


var test = "";

$(document).ready(function () {
	context.fillStyle = "#"+test;
    $('#bgcolor').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = '#' + this.value;
        getcolor();
        $("#background").css("background-color", valueSelected);
        
    });
});
function uploadImage(event) {

	image.src = URL.createObjectURL(event.target.files[0]);

	image.onload = function () {
		document.querySelector("#ocultar").style.display = "none";
		canvas.width = this.width;
		canvas.height = this.height;
		canvas.crossOrigin = "anonymous";
        getcolor();
        applyFilter();
	};

	document.querySelector('.help-text').style.display = "none";
	document.querySelector('.image-save').style.display = "block";
	document.querySelector('.image-controls').style.display = "block";
	document.querySelector('.preset-filters').style.display = "block";
    document.querySelector('#test').style.display = "block";
};
function applyFilter() {
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.drawImage(image, 0, 0);
}
function resetImage() {
	applyFilter();
}

function saveImage() {	
	let linkElement = document.getElementById('link');
	linkElement.setAttribute(
	'download', 'edited_image.png'
	);

	// Convert the canvas data to a image data URL
	let canvasData = canvas.toDataURL("image/png")
	
	// Replace it with a stream so that
	// it starts downloading
	canvasData.replace(
	"image/png", "image/octet-stream"
	)
	
	// Set the location href to the canvas data
	linkElement.setAttribute('href', canvasData);

	// Click on the link to start the download
	linkElement.click();
}

function getcolor(){
    test =  document.querySelector('input').value;
    canvas.style.backgroundColor = "#"+test;
	context.fillStyle = "#"+test;
	resetImage();
}
