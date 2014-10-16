//API variables for menu and specials
var api_menu = 'http://restaurantapi.apiary-mock.com/menu';
var api_special = 'http://restaurantapi.apiary-mock.com/menu/special';



//Main menu jquery for template
var template_menu= $('#template_menu').html();
var render_menu = _.template(template_menu);

$.getJSON(api_menu).done( function(menu_data){
    _.each(menu_data.appetizers, function (apps){
           $('.menu_apps').append(render_menu(apps));
    })

    _.each(menu_data.entrees, function (entree){

    $('.menu_entree').append(render_menu(entree));
    })

    _.each(menu_data.sides, function (side){

    $('.menu_sides').append(render_menu(side));
    })
});


// Specials section
//var template_special= $('').html();
//var render_special = _.template(template_special);*/


// Tab Functionality
$('#story').click(function(){
  $('.tabs .open').removeClass('open');
  $(this).addClass('open');
  $('.story').addClass('open');
});

$('#menu').click(function(){
  $('.tabs .open').removeClass('open');
  $(this).addClass('open');
  $('.menu').addClass('open');
});

$('#reservations').click(function(){
  $('.tabs .open').removeClass('open');
  $(this).addClass('open');
  $('.reservations').addClass('open');
});


// Datepicker for reservation form date input

$(document).ready(function() {
    $('#date').datepicker();
});


// Increeases the text area as user types

function autoGrow (textField) {
  if (textField.scrollHeight > textField.clientHeight) {
    textField.style.height = textField.scrollHeight + "px";
  }
}
