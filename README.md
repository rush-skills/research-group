## Research Group Website(Template)

Made by Ankur Singh for Dr. Hashmi and Dr. Anubha's research group page. Uses transparency.js to implement a JSON based CMS. Editing the data in /data.json is reflected on the others pages without any recomilation.


Based on SOLID - Bootstrap 3 Theme by Carlos Alvarez(http://alvarez.is)

Uses jQuery, bootstrap, FontAwesome, animate.css, modernizr, slick, transparency.js
Uses loading animations from http://simbyone.com/30-css-page-preload-animations/
Image Credit: https://viralatom.com/wp-content/uploads/2015/03/electronics.jpg

##Contribution and Usage Guidelines
To contribute, suggest a feature in issues and feel free to implement it and send me a PR.
Feel free to use the theme and/or any of its contents for your use.

##More info
the custom.js file does most of the magic in this template.

- Reads the data.json file
- Sets the definations for the data attributes and how manipulate theme
- Renders the data and definations in the html views using the awesome transparency.js
- Reverses the news order to allow them to be added in normal order with time
- Keeps only 5 latest news for the top slider
- Uses slick to turn those 5 into a vertical scroller
