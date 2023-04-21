$(function(){

    alert("Bienvenidos a mi Pagina Retro By: Erick Reyes");

    $(".equipo").mouseenter(function(){
        $(".fcbarcelona").css({"opacity": "1"})
    })
    
    $(".equipo").mouseleave(function(){
        $(".fcbarcelona").css({"opacity": "0"})
    })

    $(".jugador").mouseenter(function(){
        $(".messi").css({"opacity": "1"})
    })
    
    $(".jugador").mouseleave(function(){
        $(".messi").css({"opacity": "0"})
    })

})

function loanImg() {
    var xhr = new XMLHttpRequest();
  xhr.open('GET', 'messi.jpg', true);
  xhr.responseType = 'blob'; // importante indicar que se espera una respuesta de tipo blob
  xhr.onload = function() {
    if (this.status == 200) {
      var imagenBlob = this.response;
      var urlImagen = URL.createObjectURL(imagenBlob); // crear una URL temporal para la imagen
      var img = new Image();
      img.src = urlImagen;
      document.body.appendChild(img); // agregar la imagen al documento
    }
  };
  xhr.send();
  }