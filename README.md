# Mern-2
MERN Stack app built with React and Socket.io for CSCI331

## Folder Structure

### Client

Client side is written in typescript using the React framework. To start use:

    $cd client
    $npm install
    $npm start

### Server

Server side is written in javascript using the Node, Express, and Socket.io. To start use:

    $cd server
    $npm install
    $npm start

## Viewing Project

The project is currently live at http://csci330.cs.montana.icu/, or if running yourself you can see it at http://localhost:3000

## server-ONLY branch

This is the branch I am using to deploy directly to heroku, it doesn't have a client and uses the build pack created with:

    $npm run build
    
MUST CHANGE SOCKET.IO CLIENT URL IN APP.JSX BEFORE BUILDING
