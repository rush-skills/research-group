# Research Group Website(Template)

Made by Ankur Singh for Dr. Hashmi and Dr. Anubha's research group page. Uses transparency.js to implement a JSON based CMS. Editing the data in /data.json is reflected on the others pages without any recomilation

Based on SOLID - Bootstrap 3 Theme by Carlos Alvarez(http://alvarez.is)

Uses jQuery, bootstrap, FontAwesome, animate.css, modernizr, slick, transparency.js
Uses formspree.io for the contact form
Uses loading animations from http://simbyone.com/30-css-page-preload-animations/
Image Credit: https://viralatom.com/wp-content/uploads/2015/03/electronics.jpg

##Usage
- File data.json has all the associated data and this is the only data that can be directly altered by the website maintianers. Also enter key might not add a newline in the same. Use a <br> tag if neccessary, not sure if it works either.

- All the data in the file must follow the json standards and use appropriate brackets, commas and symbols where necessary. Also the repeating elements are in a json array and must be kept in the same. Any changes in the layout or breaking json syntax of the data file will render the whole website useless.

- meta_title, title and body are the text elements in the header of all pages. Also title will be used the navigation bar as the logo and also for the/window title.

- descripton and motivation are the first and second paragraphs of the about section of home page.

- news is an array of all the news elements. The last 5 elements are shown on the scroller on all pages. Please add the latest news to the bottom of the list
  - title: the main haading of the news
  - url: the link that the news takes to(on click)
  - date: date of the post, displayed on the posts tab
  - description: description of the post, displayed on the posts tab

- faculty is the details of the faculty members displayed on the people page.
  - name: the name of the faculty member.
  - title: the title of the faculty member.
  - url: the link to the homepage of the faculty member. Opens when the name or the title of the faculty member is clicked.
  - image: link to the image that is displayed. the default 4 images are already present, please add the others in the project folder or somewhere accessible on the internet and make sure the path is correct
  - lab is an array of name and url, the respective details of the lab. only add the lab content if the faculty member has a lab, dont leave it blank.

- students is an array of names(can put other details in the same string if required) of the students who need to be listed on the website. Displayed on the people page.

- publications is an array of title and url of the publications. Displayed on the publication page.

- projects is an array of the projects of the group. Displayed on the projects page.
  - title: is the name of the project
  - description: is the description of the project
  - url: the url of the project, if any

- You also need to change the email in contact.html from 'ankur13019@iiitd.ac.in' to the concerned email for email notifications when the form is filled up(will need to confirm it. will be usually delivered to spam). Uses formspree.io for the same.

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

##TODO:
- Can this be made into a one page theme with sections shown/hidden instead of so many pages, as the data otherwise is the same.
- feed the head with some awesome meta tags maybe?
- Add google maps, or perhaps a gmaps generated image with a link to google maps(integrating google maps makes it quite slow IMHO, Indian net)