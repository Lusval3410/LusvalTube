// ===============================
// LusvalTube Core
// ===============================


const API_KEY = "AIzaSyD9jUT95fiWKr0vFVbggKvoOeIOcuY4srE";


let reproductor;



// ===============================
// Crear reproductor YouTube
// ===============================


function crearPlayer(id){



if(reproductor){


reproductor.loadVideoById(id);


}

else {


reproductor = new YT.Player(

"player",

{

height:"360",

width:"640",


videoId:id,


playerVars:{


autoplay:1,


controls:1,


rel:0


}



}


);


}


}



// ===============================
// Buscar videos
// ===============================


async function buscar(){



let texto =

document.getElementById("busqueda").value;



if(texto==""){

alert("Escribe algo ");

return;

}



let respuesta = await fetch(


`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${texto}&type=video&maxResults=5&key=${API_KEY}`


);



let datos = await respuesta.json();



let resultados =

document.getElementById("resultados");



resultados.innerHTML="";




datos.items.forEach(video => {



resultados.innerHTML += `


<div class="video">


<img src="${video.snippet.thumbnails.medium.url}">


<h2>
${video.snippet.title}
</h2>


<p>
${video.snippet.channelTitle}
</p>



<button onclick="crearPlayer('${video.id.videoId}')">

▶ Reproducir

</button>


</div>



`;



});



}
