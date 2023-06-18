# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:If you forget to add a column to your model, you can create a migration file. This will allow you to provide the updated information to the program, after it is merged with the database.  The foreign key would be assigned to the Student, which is derived from the primary key in the Cohort model. The naming convention for adding the foreign key column is `<something>_id`. Rails reads this automatically.  The key is automatically assigned (by default Rails uses integers) so there is no need to specifically name the key.

Researched answer: After adding the column to the migration file, you need to migrate the file into the database so the 'schema' is updated.  Then it can be considered part of the database.

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, destroy, and edit.  These three act on one particular object in a database, and therefore need to know which they are going to act on.

Researched answer: Correct answer is 'update' instead of 'edit'.  Parameters are a representation of the data being acted upon.

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model, rails generate migration, rails generate resource. generate model creates a new model in a database.  Generate Migration creates a new migration file to edit. Generate resource creates the bundle of pre-defined resources (like model routes) to be used in a Rails application.

Researched answer:rails generate view, and rails generate controller, are also valid generate commands that do as their names suggest.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - index. This would list all of the Student objects.

action: "POST" location: /students - create. This would put a new object into the model.

action: "GET" location: /students/new - new. Creates the form for adding a new object to the model.

action: "GET" location: /students/2 - show. displays the object with the id matching the number.

action: "GET" location: /students/2/edit edit. shows the form that allows you to input information that you'd like to edit the specified object with.

action: "PATCH" location: /students/2 - update. Pushes the updated information from the edit form to the object in the model.

action: "DELETE" location: /students/2 - destroy. removes the selected object from the model.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. As a user, I want to be able to see all my current tasks
2. as a user, I want to be able to add a task
3. As a user, I want to be able to delete a task
4. As a user, I want to be able to add a due-date to my task
5. As a user, I want to be able to edit a task
6. As a user, I want to be able to re-order my tasks manually
7. As a user, I want to receive an alert when a task is due
8. As a user, I want to be able to filter tasks that are overdue
9. As a user, I want to be able to add notes to my tasks
10. As a user, I want to be able to share a task with a friend
