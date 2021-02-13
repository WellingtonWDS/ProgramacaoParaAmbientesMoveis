function loadMovies() {
  
  var saida = '';
  
  var movie = [];
  
  $.getJSON("index.json", function(data) {
      movie = data.movie;

      for (i = 0; i < movie.length; i++) {
        saida += movie[i].title;

        /*
        saida += '<div class="row">';
        saida += '<div class="col-lg-4 items-img">';
        saida += '<img src="' + movie[i].title + movie[i].genre + '" title="' + movie[i].name + '">';
        saida += '</div>';
        saida += '</div>';
        */
      }

      document.getElementById('tela').innerHTML = saida;
    });
}