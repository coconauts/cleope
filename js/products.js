$(document).ready(function() {
  $.getJSON("products.json", function(result){

         var template = $('#products-template').html();
         Mustache.parse(template);
         var rendered = Mustache.render(template, {products: result});
         $("#list-products").html(rendered);

      });
});
