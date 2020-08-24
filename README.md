# Emulsio
____
Project 2 General Assembly 713 Squad

## Project Requirements
* Include sign up/log in functionality, with hashed passwords & an authorization flow. You will be able to start your app from the auth boilerplate built w/ in-class code-alongs.
* Have at least 2 models (more if they make sense) that represents the main functional idea for your app. This doesn't include join tables or the user model which should be part of your class's boilerplate code.
* Note: If your app idea doesn't really call for more models, let your instructors know and they can suggest ideas for other sufficiently difficult replacements for this requirement.
* Incorporate at least one third-party API.
* Have complete RESTful routes for at least one of your resources (models) with GET, POST, PUT, and DELETE
* Utilize an ORM to create a database table structure and interact with your relationally-stored data
* Include a readme file that explains how to use your app (also how to set up the db, obtain api keys, what environment variables are needed, etc, so anyone can fork and clone your app then run it locally
* Have semantically clean HTML, CSS, and back-end code
* Be deployed online and accessible to the public

## Technologies Used
* Node
* Express, ejs, ejs-layouts, session
* JavaScript
* HTML
* CSS
* Passport
* Materialize
____
## Concept
Cooking with dietary restrictions is always a challange. Finding a recipe, figuring out what needs to be removed, how to replace it, etc. I know I was never a fan, but stress no more! Emulsio is an app where the user can search for recipes by cuisine, diet, and type. Or, if the provided options are not what the user is looking for, they can do a natural language search through an input text box. The recipes can then be viewed and/or saved in any folder of the user's choosing. Finally, this app has been optimized for mobile to ease the use of the app while actually working in the kitchen!
_______
## Where to access Emulsio
Emulsio has been deployed using heroku. Access it here: [Emulsio](https://emulsio.herokuapp.com/)

### How to Install Locally

1. Fork and clone [this](https://github.com/BGoldenberg161/Emulsio) repo

2. Run ```npm install```

3. Update the config.json file dialect to route to your database

4. Run ```sequelize db:create```

5. Run ```sequelize db:migrate```

6. Create your .env file and give it your hidden variable information as shown below:

    * SECRET_SESSION = 'Your unique random string here'

    * API_KEY = 'you can apply for an api key at [spoonacular](https://spoonacular.com/)'

7. Run ```nodemon``` and open your browser to localhost:3000

8. Find your perfect recipes!
____
## Images of Emulsio in Action

![Home page image](./images/Home.png)
![Search page image](./images/Search.png)
![Results page image](./images/Show.png)
![Detail page image](./images/Detail.png)

## User Stories
>I have severe food allergies, but I still want delicious meals so I can keep my healthy life.. Without giving up extra time to find recipies that I can enjoy. This app has changed how I approach cooking!

>My wife has always wanted me to cook for her, but she is on these crazy diets! I never knew where to start, but Emulsio makes it so easy now!

>I have always been a picky eater, but I want my guests to enjoy the meal also, I can have both with this app!
____
## Planning
### ERD
![ERD Image](./images/ERD.png)

For my database, I wanted the user to be able to create their own folders and those folders need to be unique to each user. Any given recipe within the database could reside in more than one folder, so I used a joins table to simplify my many to many relationship.
### Wireframes
![Wireframes Image](./images/wireframes.jpg)

In an attempt to keep my app user friendly, I wanted to keep is simple. Each page will have a similar look while requested the required information. The app obviously evolved over time while in development, but the finished product is not too far off of the initial plan, and the only changes were improvements!
____
## Structure
I kept my code as clean as possible without using controllers. I didn't need a crazy amount of get, put, and delete routes for Emulsio, so I just organized the 3 route files I created as follows. Anything specific to a user is in the profile route, anything only related to API data is in the show route, and all authorization is contained within the auth route. Using controllers would only have over complicated things.

## Blockers
### Pagination
Throughout the duration of the project there were, and always will be, things that slow the process. One of my stretch goals was to implement pagintion. Because I am using a API with daily query limits, I wanted to limit the amount of data I was pulling with each axios call. This way I am saving on API points and only pulling in extra information if asked for by the user. In the instance where the first ten results didn't satisfy the user, the pagination allows for the next ten results to be seen. 

``` html
<ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <% for (let i=0; i<recipes.totalResults/10; i++) { %>
        <li class="waves-effect deep-purple"><a class="white-text" type="submit" href="/show?cuisine=<%= search.cuisine %>&diet=<%= search.diet %>&type=<%= search.type %>&offset=<%= i*10 %>"><%= i + 1 %></a></li>
        <% if(i>8) {break} %> 
    <% } %> 
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
</ul>
```
Although the HTML was a simple unordered list, implementing this in an ejs file with all of the tags to carry the required data for the next axios call was the challange. Making sure I passed the previous search values into the search result page allowed a for simple for loop to be utilized. This loop also insured that the user didn't see more pages than existed. I capped them off at eight pages of recipes, to save some searches for other users. Once I am out of API points for the day, no more searches can be made. 

### User Data
Learning new things rarely sets in overnight and using passport for authentication was no different. Once signed into Emulsio the user is able to save recipes in folders of their choosing. This concept seemed simple until I relized that I was not carrying the user data in an object throughout the code. Little did I know that ```req.user``` is a set of user data for the current logged in user. Once figuring that out, the project came together very nicely!

## Future Goals
One stretch goal that I didn't get to implement is a custom input drop down list for folder creation. When adding a recipe to a folder, having a drop down menu that contained the user's existing folders plus an empty cell that the user could type a new folder name into would be some slick functionality. 

____
## Author
* Branden Goldenberg - Initial creator
* Would love to add more names below!

## Shoutouts
Many many thanks to the many classmates and instructors for the technical and creative input. Thank you [Spoonacular](https://spoonacular.com/) for the super sweet API!

