# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:If you forget to add a column to your model, you can create a migration file. This will allow you to provide the updated information to the program, after it is merged with the database.  The foreign key would be assigned to the Student, which is derived from the primary key in the Cohort model.  The key is automatically assigned (by default Rails uses integers) so there is no need to specifically name the key.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, 

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model, rails generate migration, rails generate resource. generate model creates a new model in a database.  Generate Migration creates a new migration file to edit. Generate resource creates the bundle of pre-defined resources (like model routes) to be used in a Rails application.

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - index. This would list all of the Student objects

action: "POST" location: /students - create. This would put a new object into the model.

action: "GET" location: /students/new - new. Creates the form for adding a new object to the model

action: "GET" location: /students/2 - show. displays the object with the id matching the number

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2 - 

action: "DELETE" location: /students/2 - destroy. removes the selected object from the model

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
