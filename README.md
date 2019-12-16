# Fennec Fox Cast
-------------------------------------------------

## What is Fennec Fox?

Fennec Fox is a streaming platform which allows to communicate via voice or video with your friends or find new ones.

-------------------------------------------------
## Minimum plan

- __Users can register and sign in to the web application.__

- __In application users can add other users to friends. Make an audio/video call to friend via peer to peer connection.__

- __If user wants, call can be transferred through the web-server using web-socket connection.__


## Advanced plan
- Create group calls.

- On desire of user, the call can be recorded and than downloaded from the server.

- Module with video/audio processing.

- Text chat between users.
-------------------------------------------------
## Data Flow
![](imgReadMe/DataFlow.jpg)
-------------------------------------------------
## Class diagram
![](imgReadMe/ClassDiagram.jpg)
-------------------------------------------------
## Technologies

### Architecture
![](imgReadMe/Architecture.jpg)

### Frontend

- React JS for client side. We use React because its well spread technology and we have some minor experience in it.
- On client side we use IndexDB for creating web applications with rich query abilities regardless of network availability.
- Using web-socket for creating connection with server ('websocket').
- Using WebRTC for peer to peer connection.

### Backend

- Fastify for server side. We use fastify because it is fast and low overhead web framework, for Node.js
- Using web-socket for creating connection with clients ('websocket').
- We use MongoDB on server side, because we have document oriented data ('mongodb').


API backend https://thawing-fortress-40899.herokuapp.com/
Frontend https://fennec-fox-cast.netlify.com/contact

