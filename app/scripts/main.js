
//API variables for menu and specials
var special_item;
var special_price;
var special_description;

var template_menu=$('#template_menu').html();
var render_menu=_.template(template_menu);

var template_special=$('#template_special').html();
var render_special=_.template(template_special);

var api_menu='http://restaurantapi.apiary-mock.com/menu';
var api_special= 'http://restaurantapi.apiary-mock.com/menu/special';


//Main menu & specials jquery for template
var specialID;
$.getJSON(api_special).done (function(special_data){
  specialID = special_data.menu_item_id;
});

$.getJSON(api_menu).done (function(menu_data){

    //using menu api for specials
      _.each(menu_data, function (looking){

       _.each(looking, function (all){

        if (all.id === specialID) {
          special_item = (all.item);
          special_price = (all.price);
          special_description = (all.description);
      $( document ).ready(function() {

      $('.special_info').append(render_special(special_item));
    })
        }
      })
  })


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
    $('#date').datepicker({ minDate: 0 });
});


// Increeases the text area as user types

function autoGrow (textField) {
  if (textField.scrollHeight > textField.clientHeight) {
    textField.style.height = textField.scrollHeight + "px";
  }
};


// Posting form information to api

var url = 'http://tiy-atl-fe-server.herokuapp.com/collections/testpostres';

   // attach a submit handler to the form
    $('#booking').submit(function(event) {

      // stop form from submitting normally
      event.preventDefault();

      // Send the data using post
      var posting = $.post( url, {

        fullName: $('#name').val(),
        guestNumber: $('#guests').val(),
        date: $('#date').val(),
        time: $('#time').val(),
        notes: $('#notes').val(),
        guestNumber:$('#guests').val(),
        seating: $('#seating').val()

      });

      var booked_date = $('#date').val();
      var booked_time = $('#time').val();

      /* Alerts the results */
      posting.done(function( data ) {
        alert('We look forward to seeing you on' + ' ' + booked_date + ' at ' + booked_time + ' pm. ');
      });

    });
