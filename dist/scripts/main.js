var api_menu = 'http://restaurantapi.apiary-mock.com/menu';
var apt_flickr ;
var api_special = 'http://restaurantapi.apiary-mock.com/menu/special';
var api_news = 'http://restaurantapi.apiary-mock.com/news/latest';

var template_menu= $('').html();
var render_menu = _.template(template_menu);

var template_flickr= $('').html();
var render_flickr = _.template(template_flickr);

var template_special= $('').html();
var render_special = _.template(template_special);

var template_news= $('').html();
var render_news = _.template(template_news);
