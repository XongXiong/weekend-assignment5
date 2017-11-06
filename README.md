# Weekend Challenge 5 - Angular, Mongo, Mongoose Oh My!

## Technologies Used
- Mongo
- Express
- Angular
- Node

## Getting Started

Clone the repository from github.

In Terminal, navigate to the folder weekend-assignment5/server/public/data (or move it to where you want it).
Run this command in your Terminal: mongoimport --db realestate --collection rentals --file rentalData.js
Run this command in your Terminal: mongoimport --db realestate --collection listings --file listingData.js


### Installing

Steps to get the development environment running.

1. Download this project.
2. `npm install`
3. `npm start`

## Completed Features

- [x] Display all data onto the DOM
- [x] Have two different routes and templates to display "For Rent" and "For Sale"
- [x] Have an interface to add additional rental or housing properties
- [x] Ability to delete an existing property
- [x] Moved HTTP/AJAX requests to Angular Services
- [x] Display the least expensive property featured at the top of the page.

## Next Steps

- [ ] Ability to update an existing record using a pop up (modal). You will need to research libraries that support modals (e.g. [Sweet Alert](https://sweetalert.js.org/) or [ui-bootstrap](https://angular-ui.github.io/bootstrap/))
- [ ] Ability to search or filter by various parameters (try doing this in Mongo instead of Angular)

## Deployment

To deploy to Heroku:
1. Run 'heroku create' in terminal
2. Run 'git push heroku master'
3. Host mongoDB on mLab
4. Find URI for database in tools>json
5. Add the URI into your Heroku dashboard under Settings as a config variable named MONGODB_URI (replace the dbuser & dbpassword with the ones you added)

## Author

* Xong Xiong