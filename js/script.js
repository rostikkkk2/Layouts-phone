$(document).ready(function(){
  $('#search').keyup(function(event){
    $(".good").addClass('hidden');
    var input_value = $(this).val().toLowerCase();
    $.each($(".good"), function(index, good){
      var title_text = $(good).find('.title').text().toLowerCase();
      if (title_text.indexOf(input_value) != -1) {
        $(good).removeClass("hidden");
      }
    })
  });
});
