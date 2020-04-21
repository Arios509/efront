# Project User management

Create one system and let agent create for the record for potential employee. System is build into separate part.
For the Frontend, using Angular 9 to build.
For the Backend, using NodeJs and MongoDB to build. As for the MongoDB is MongoDB atlas, the backend project is set to private.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Run the command below and it will install for the system need.

```
npm install
```

## Run for development - frontend

Run the command then open http://localhost:4200, will direct user to homepage.

```
npm start
```

For the development testing, must run together with the backend-node, else the backend server will no have the response.

## Run for development - backend

Run the command and the server will start in http://localhost:3000

```
npm start
```

After get the message, ```Connected db```, which mean the server is running.

### Features

Some explanation on how to use this systems

Home page - Pretty simple homepage, at this page you can see the list of the user that added to the system.

![home](https://imgur.com/XjZQ2qZ)

Click the ```Create``` button, then you will able to direct to create a new user.
![create](https://imgur.com/5zhslvw)

Inside the Create page, agens are able to write the basic info, and add multiple skillsets or hobbys in case the user have multiple skillsets and hobbys need to add in.

After submit, then will direct back the user list page.

At the user list page, click on the username part, then will able to go into the detail page for the user. In this page, you will able to see more detail about the user. And also able to edit the user info.
![detail](https://imgur.com/pGASqMH)

Inside the edit page, all the previous information will auto fill into the inputs part.
![edit](https://imgur.com/W5fuyHI)


## Deployment

This project is hosted in the github page, and it will auto deploy using the deploy.yml under .github/workflows, when push to production, this will auto build and bring the files generated under dist/ in the master branch.