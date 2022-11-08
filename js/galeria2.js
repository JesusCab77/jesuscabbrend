var america = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/AMERICA2.png";
var canasta = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/CANASTA2.png";
var chef = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/CHEF2.png";
var cruzazul = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/CRUZAZUL2.png";
var jarra = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/JARRA2.png";
var pera = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/PERA2.png";
var vaca = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/VACA2.png";
var ardillas = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/ARDILLAS2.png";
var estrellas = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/ESTRELLAS2.png";

var borrego = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/BORREGO2.png";
var regadera = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/REGADERA2.png";

var marrano = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/MARRANO2.png";
var unicornio = "https://raw.githubusercontent.com/BeliizaVgs/imagensceramica/main/UNICORNIO2.png";
let imgurl = "";


//BOTONES CAMBIAR

function btnamerica(){
    imgurl = america;
    download()
}
function btncanasta(){
    imgurl = canasta;
    download()
}
function btnchef(){
    imgurl = chef;
    download()
}
function btncruzazul(){
    imgurl = cruzazul;
    download()
}
function btnjarra(){
    imgurl = jarra;
    download()
}
function btnpera(){
    imgurl = pera;
    download()
}
function btnvaca(){
    imgurl = vaca;
    download()
}
function btnardillas(){
    imgurl = ardillas;
    download()
}
function btnestrellas(){
    imgurl = estrellas;
    download()
}
function btnborrego(){
    imgurl = borrego;
    download()
}
function btnregadera(){
    imgurl = regadera;
    download()
}
function btnmarrano(){
    imgurl = marrano;
    download()
}
function btnunicornio(){
    imgurl = unicornio;
    download()
}

function download() {
    axios({
        url: imgurl,
        method: 'GET',
        responseType: 'blob'
    })
        .then((response) => {
            const url = window.URL
                .createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'image.png');
            document.body.appendChild(link);
            link.click();
        })
}