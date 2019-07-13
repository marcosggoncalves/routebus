$(document).ready(function(){
  $("#pesquisa").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#busca").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});