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

    //UPDATE: Now data stored in /data.json.
    // so any changes made are refleted in the website.
    labDecorator = function() {
        "<a class='btn btn-info' href='" + this.lab + "'>LAB</a>";
    };
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
        },
        lab: {
          html: function(params){
            if(this.lab)
              return "<a class=\"btn btn-info lab-button\" href=\"" + this.lab + "\">LAB</a>";
            else
              return "";

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

    var list = $(".news div.news-inner");
    list.parent(".news").append(list.get().reverse());

    var list2 = $(".news div.news-page-inner");
    list2.parent(".news").append(list2.get().reverse());

    var lis = $(".news div.news-inner");
    var len=lis.length;
    lis.slice(5,len).remove();
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
    $("#loading").fadeOut(500);
  });
})(jQuery);