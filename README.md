# Getting Started

This repository functions as the basis of the instagram clone project.

## Development

### We'll be using the following stack:

- VueJS
- Bootstrap
- Express
- MySQL

## Installing Dependencies

# Structure

Let's run through the folders:

```
.
├── client
│   ├── public
│   └── src
├── server
│   ├── __test__
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── index.js
│   └── server.js
└── README.md
```

- `client` here is where the front end code will be stored. Inside is a basic vue js project folder structure
  - `public` this is the folder where the production build will be compiled to
  - `src` this is where the vue sj development code is stored
- `server` here is where the back end server code is stored
  - `controllers` this folder contains all the functions for our router endpoints
  - `models` here we store our data models which we use to communicate with the mysql database
  - `routes` here we store the routes for different resources (posts, accounts comments, etc)

# Backlog

So what should be built? Below is a collection of user stories you can choose from. Stories inside of each priority level are not necessarily in order, it's up to your group to decide how they fit into your strategy. These are also just suggestion, feel free to change them or create your own! Feel free to get creative.

## Must-Haves

> these are necessary for basic usability

- [ ] users should be able to create, update, delete an account
- [ ] users should be able to create posts
- [ ] users should be able to update posts
- [ ] users should be able to delete posts
- [ ] user should be able to view other peoples posts
- [ ] users should be able to add comments and likes
- [ ] user should be able to search based on tags, username

## Nice-to-Haves

> if time, add more features!

- [ ] should be able to follow/unfollow people
- [ ] get notifications about likes, comments, follows

## Componets

- [ ] TheHeader.vue
- [ ] PostsList.vue
- [ ] PostCard.vue
- [ ] SearchResults.vue

## Views

- [ ] Login page
- [ ] Home feed
- [ ] Signup page
- [ ] Create a post
- [ ] Account settings page
- [ ] Profile page
