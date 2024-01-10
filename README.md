## Model-View-Controller (MVC) Challenge: Tech Blog
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

 Building a CMS-style blog site from scratch, similar to WordPress, developers can publish posts and engage in discussions by commenting on each other's work. Deploy the site on Heroku, following the MVC paradigm with Handlebars.js for templates, Sequelize as the ORM, and express-session for authentication. 

## User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria
* GIVEN a CMS-style blog site
* WHEN I visit the site for the first time
* THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
* WHEN I click on the homepage option
* THEN I am taken to the homepage
* WHEN I click on any other links in the navigation
* I am prompted to either sign up or sign in
* When I choose to sign up
* Then I am prompted to create a username and password
* When I click on the sign-up button
* Then my user credentials are saved, and I am logged into the site
* When I revisit the site at a later time and choose to sign in
* Then I am prompted to enter my username and password
* When I am signed in to the site
* Then I see navigation links for the homepage, the dashboard, and the option to log out
* When I click on the homepage option in the navigation
* Then I am taken to the homepage and presented with existing blog posts that include the post title and the date created
* When I click on an existing blog post
* Then I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
* When I enter a comment and click on the submit button while signed in
* Then the comment is saved, and the post is updated to display the comment, the comment creator’s username, and the date created
* When I click on the dashboard option in the navigation
* Then I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
* When I click on the button to add a new blog post
* Then I am prompted to enter both a title and contents for my blog post
* When I click on the button to create a new blog post
* Then the title and contents of my post are saved, and I am taken back to an updated dashboard with my new blog post
* When I click on one of my existing posts in the dashboard
* Then I am able to delete or update my post and taken back to an updated dashboard
* When I click on the logout option in the navigation
* Then I am signed out of the site
* When I am idle on the site for more than a set time
* Then I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

