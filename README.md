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
* Express, ejs, ejs-layouts
* HTML
* CSS
* Materialize
* Passport

## Concept
Cooking with dietary restrictions is always a challange. Finding a recipe, figuring out what needs to be removed, how to replace it, etc. I know I was never a fan, but stress no more! Emulsio is an app where the user can search for recipes by cuisine, diet, and type. Or, if the provided options are not what the user is looking for, they can do a natural language search through an input text box. The recipes can then be viewed and/or saved in any folder of the user's choosing. Finally, this app has been optimized for mobile to ease the use of the app while actually working in the kitchen!
_______
## Where to access Emulsio
[Emulsio](https://emulsio.herokuapp.com/)


## Images of Emulsio in Action


## How to Install Locally

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
## Lessons Learned
The amount of knowledge gained through the creation of Emulsio is vast. I have gained a full understanding of how routes and views are connected to eachother and how data is accessed. Using the multiple npm packages, the authentication tools, and some google-fu I was able to learn a ton while building something I can use in my every day life. This understanding will help me continue to grow as a developer, I am excited to see what my future will hold!

## Future Goals
One stretch goal that I didn't get to implement is a custom input drop down list for folder creation. When adding a recipe to a folder, having a drop down menu that contained the user's existing folders plus an empty cell that the user could type a new folder name into would be some slick functionality. 

____
## Author
* Branden Goldenberg - Initial creator
* Would love to add more names below!

## Shoutouts
Many many thanks to the many classmates and instructors for the technical and creative input!!

