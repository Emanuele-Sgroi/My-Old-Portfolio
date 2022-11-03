
# React JS and Sanity portfolio

I decided to share the template of my portfolio that I have created with React JS and Sanity.

Below You can find all the information of how you should build something like that before you clone this project.


## Demo

Visit my [website](https://emanuelesgroi.com) to see the template.


## Steps to build this project

Sanity

- Open a Sanity account
- Install Sanity project (backend_sanity)
- Create you schemas
- Upload your content in Sanity studio

React
- Create react app (frontend_react)
- Install depencies 
- Fetch Sanity as client
- Build frontend
- Map Sanity content



## Description

This website uses Sanity as backend database where you can store all the content that you need (creating your schemas) and then fetching all of them in your react application.




### Set your own Sanity ID and token in your ENV file

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_SANITY_PROJECT_ID`

`REACT_APP_SANITY_TOKEN`

You will find these information running the following command in your sanity project terminal:

```http
  sanity manage
```

##

The dependencies that you need to install in you react app are: 

#### Sanity 
`Sanity client` and `image builder`.

Documentation [here](https://www.sanity.io/docs/overview-introduction)

#### SASS

Needed for the use of `SCSS`.

Documentation [here](https://sass-lang.com/documentation/)

#### React Icons

Documentation [here](https://react-icons.github.io/react-icons/)

#### Framer Motion

A wonderfoul API for frontend lovers that allows you to create professional animations aiming in-line styles. With this you don't need to do animation with SCSS.

Documentation [here](https://www.framer.com/motion/)

#### ts-particles

I used this library for the particles effect in the home page

Documentation [here](https://particles.js.org)

#### React-chatbot-kit

Anothe API that I used for the creation of the chatbot.

Documentation [here](https://fredrikoseberg.github.io/react-chatbot-kit-docs/)



## Conclusion

This small project can be ideal for these people that are starting with React js. Feel free to use the code for your own needs


