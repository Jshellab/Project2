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

- Trainer Table: PK: Trainer_Id - Holds information on the various trainers that would use our website
- Pokemon Table: PK: Poke_Id - Holds information on the various pokemon related to the trainers represented on our client-side of the aplication with a JSON object tied to the trainer table
- Posts Table: PK: Post_ID - Holds the information on the posts that have been submitted by users over time relating them using the Trainer_Id

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

DELETE calls: 
-this.http.delete(this.url2 + '/delete/' + this.trainer.trainer_Id).toPromise(): Calls the DELETE function from our front-end to spring to let it know we want to wipe the information of the trainer in the system, along with his pokemon, and posts they have made
-this.http.delete(this.url4+"/delete/"+pokemonToRelease.pokemon_Id).toPromise(): Calls the DELETE funciton from our front-end to spring to let it know we wanted to remove a specific pokemon from the database
- this.http.delete(this.url3+"/delete/"+id).toPromise(): Calls the DELETE function from our front-end to spring to let it know we want to delete a post after it has been accepted

GET calls:
- this.http.get(this.url2 +"/"+name).toPromise(): Calls a GET function that pulls in all of our information for the entered user
- this.http.get(this.url + url).toPromise(): Calls a GET function that calls the pokeapi and retreives the object representing the Pokemon's information, then we populate a front end table with that information
- this.http.get(this.url4 + '/' + this.trainer.username).toPromise(): Calls a GET function that returns all of the pokemon associated with that trainer ID in the DB

POST calls: 
- this.http.post(this.url3, submissionP).toPromise(): Submits user Posts, and relates them to the Trainer ID so they can be retrieved later
- this.http.post(this.url4, pokemon).toPromise(): Submits pokemon that are 'caught' and places them in the capturers box for use later
- this.http.post(this.url4, pokeBox).toPromise(): Submits a POST request that moves a pokemon from your party to the box


# API's/Docs referenced:
JPA: The Java Persistence API is a Java application programming interface specification that describes the management of relational data in applications using Java Platform, Standard Edition and Java Platform, Enterprise Edition
JavaDocs: a documentation generator created by Sun Microsystems for the Java language (now owned by Oracle Corporation) for generating API documentation in HTML format from Java source code
Pokeapi: Consumption-only API that holds large amounts, of pokemon information for referene and call later
SendBird: Messaging API used to incorporate messaging services onto websites, and other application.
Angular:a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations
AWS BeanStalk documentation: Documentation used to explain, and define the purpose of AWS beanstalk along with the workflow
