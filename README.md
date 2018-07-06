# Project2
Team Name: The Professors
Project Overview: Create a Pokemon application that gets information from the PokeAPI and uses it to display pokemon on a webpage using multiple calls for sprites, stats, names, and numbers for pokemon

# Technology integrated in project:
AWS Elastic Beanstalk: Hosts our spring boot application back-end allowing us to make calls and query the database
RDS: Hosts the database and tables for our project 
GitHub: Hosted our Project for version control, and saved it multiple times when errors were made on our side
Hibernate/Spring: What was used to control and then query information from our database
Angular/JS/BootStrap/TypeScript: All used in combination to make design and format our front-end

# Database:
Consisting of 2 tables

- Trainer Table: PK: trainer_Id - Holds information on the various trainers that would use our website
- Pokemon Table: PK: Poke_Id - Holds information on the various pokemon related to the trainers represented on our client-side of the aplication with a JSON object tied to the trainer table

# Front End
Set up as one angular project composed of multiple components each representing a section of our web application:
app-routing: Holds and makes all of the application links to other pages/components on the application
http.service.ts: Held all of our HTTP calls to the springboot application that was being hosted on the Elastic BeanStalk along with JSON formatted objects meant to represent the data in our database
<app-root>: Root module of the applicaiton put on our index.html and the top layer of our application
<app-boxes>: Page showing the pokemon listed in your inventory, and in your box for storage functionality allows transfer between the 2
<app-catch>: Page dedicated to allowing users to get more Pokemon to add to their party 
<app-login>: Page that allows users to access the website through their own account
<app-register>: Links from the app-login component, and allows the user to register an account and login
<app-navbar>: Navbar that persist across all of our pages after the login page and allows navigation between our pages
<app-pokemon>: Search function that Queries the PokeAPI and brings/displays information from there
<app-post>: Displays all posts from all users that have made them on the userposts page
<app-userscreen>: Displays user screen which is composed of the <app-userposts>,<app-profile>, and <app-pokemon>

# Front-End Spring Calls
http://pokemon.us-east-2.elasticbeanstalk.com/trainers: Displays information on all trainers currently in the system
http://pokemon.us-east-2.elasticbeanstalk.com/pokemon: Displays all pokemon as well as trainer information tied to them
http://pokemon.us-east-2.elasticbeanstalk.com/posts: Displays all posts that exist on the database
