//API variables
var api_menu = 'http://restaurantapi.apiary-mock.com/menu';
var apt_flickr ;
var api_special = 'http://restaurantapi.apiary-mock.com/menu/special';
var api_news = 'http://restaurantapi.apiary-mock.com/news/latest';

//Main menu jquery for template
var template_menu= $('#template_menu').html();
var render_menu = _.template(template_menu);

$.getJSON(api_menu).done( function(menu_data){

    _.each(menu_data, function(menu_items){

    _.each(menu_items, function(b){

    $('.menu').append(render_menu(b));
})

})

});



/*var template_flickr= $('').html();
var render_flickr = _.template(template_flickr);

var template_special= $('').html();
var render_special = _.template(template_special);

var template_news= $('').html();
var render_news = _.template(template_news);*/


// Tab Functionality
$('#story').click(function(){
  $('.tabs div').removeClass('open');
  $('.story').addClass('open');
});

$('#menu').click(function(){
  $('.tabs div').removeClass('open');
  $('.menu').addClass('open');
});

$('#reservations').click(function(){
  $('.tabs div').removeClass('open');
  $('.reservations').addClass('open');
});
