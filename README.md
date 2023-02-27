# Social Network API

## Licensing:
[![license](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)

## Table of Contents 
- [User Story](#user-story)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## User Story:
AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data

## Description:
This is a social network api back-end database created in the UW Coding Bootcamp. This is a command line application that utilizes mongoose, express, and moment to view, create, update, and delete data from the database using Insomnia or MongoDB Compass.

## Installation:
- Download it through Github
- Ensure Insomnia is installed on your own computer
- Ensure MongoDB Compass is installed on your own computer
- Ensure express is installed
- Ensure mongoose is installed
- Ensure moment is installed

## Usage:

Link to Video of Walkthrough for Demonstration:

https://youtu.be/CMaXuKK3Jjc


- Open terminal and navigate to social_network_api folder
- Type npm init -y into terminal to create a new .json file
- Type npm i into terminal
- Type npm i express into terminal
- Type npm i mongoose into terminal
- Type npm i moment into terminal
- Type npm start into the terminal
- Once you see the Now Listening indication you may open up your MongoDB Compass and Insomnia software


Screenshots:
On the backend of the app, using Insomnia, the following routes have been created:

GET /api/users

![Screenshot](assets/img/screenshot1.png)


GET /api/users/:userID

![Screenshot](assets/img/screenshot2.png)


POST /api/users

![Screenshot](assets/img/screenshot3.png)


PUT /api/users/:userID

![Screenshot](assets/img/screenshot4.png)


DELETE /api/users/:userID

![Screenshot](assets/img/screenshot5.png)


POST /api/users/:userID/friends/:friendID

![Screenshot](assets/img/screenshot6.png)


DELETE /api/users/:userID/friends/:friendID

![Screenshot](assets/img/screenshot7.png)


GET /api/thoughts

![Screenshot](assets/img/screenshot8.png)


GET /api/thoughts/:thoughtID

![Screenshot](assets/img/screenshot9.png)


POST /api/thoughts

![Screenshot](assets/img/screenshot10.png)


PUT /api/thoughts/:thoughtID

![Screenshot](assets/img/screenshot11.png)


DELETE /api/thoughts/:thoughtID

![Screenshot](assets/img/screenshot12.png)


POST /api/thoughts/:thoughtID/reactions

![Screenshot](assets/img/screenshot13.png)


DELETE /api/thoughts/:thoughtID/reactions/reactionID

![Screenshot](assets/img/screenshot14.png)


MongoDB Compass for socialmediaDB

![Screenshot](assets/img/screenshot15.png)


MongoDB Compass for socialmediaDB users

![Screenshot](assets/img/screenshot16.png)


MongoDB Compass for socialmediaDB thoughts

![Screenshot](assets/img/screenshot17.png)


## License:
MIT

## Contributing:
Contributions are welcome through forking my repository.

## Tests:
None

## Questions:
- Github: [andreahergert](https://github.com/andreahergert)
- Email: ahergert24@hotmail.com 