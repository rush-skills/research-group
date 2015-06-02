(function($) {
  $(document).ready(function () {
    // var details = require('/data.json');
    var details = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "/data.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

    //till here the variable stores the content of the website in form of json, which will be a different file in future. 
    // so any changes made are refleted in the website.
    var directives = {
      news: {
        url: {
          href: function(params) {
            return this.url;
          },
          text: function(params){
            return "";
          }
        }
      },
      faculty: {
        url: {
          href: function(params) {
            return this.url;
          },
          text: function(params){
            return "";
          }
        },
        image: {
          src: function(params) {
            return this.image;
          }
        }
      },
      publications: {
        url: {
          href: function(params) {
            return this.url;
          },
          text: function(params){
            return "";
          }
        }
      },
      projects: {
        url: {
          href: function(params) {
            return this.url;
          },
          text: function(params){
            return "";
          }
        }
      }
    };

    $('#everything').render(details,directives);
    $('.collapse').collapse();

    $(document).ready(function () {
      $('.news').first().slick(
        {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 500,
          vertical: true,
          dots: false,
          arrows: false,
          pauseOnHover: false
        }
      );
     });
  });
})(jQuery);