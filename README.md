# Welcome to ViewTube!

This is my functional clone of YouTube! Although it is still a work in progress, it has many great functions such as complete user creation and authentication. It also features full video playback and storage using Amazon Web Services. I started from scratch using Ruby on Rails on the backend and a React-Redux implementation for the front-end routes and setup. I am using a PostGresSQL databse. Please check out some of the features. Check out the live site [here](https://viewtube1.herokuapp.com/#/). Also, check out the wiki for the [schema](https://github.com/jjcazel/ViewTube/wiki/ViewTube-Schema), [sample slice of state](https://github.com/jjcazel/ViewTube/wiki/Sample-State), [frontend routes](https://github.com/jjcazel/ViewTube/wiki/Frontend-Routes), and [backend routes](https://github.com/jjcazel/ViewTube/wiki/Backend-Routes).

# Features
## User authentication
My app features complete user creation and authentication features that use modern Bcrypt technology. It compares password digests and session tokens to ensure secure login by a user and define a logged-in user. I used API requests to send user info to the backend User and Sessions controllers to validate a new session for a user. Once validated, the frontend uses Redux reducers to create the state for my front-end components.

## Video Playback
Going through the process of setting up and using an Amazon Web Services account for video haosting was a valuable learning experience as one can often hit many snags in this process as I did. I created a development and production bucket to hold the videos my site is hosting. I had to shape and map the state of my videos in certain way in my Right Sidebar container in order to keep the large video playing in the main show pane from being listed in the video list in the right sidebar.

``` javascript
const msp = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos).filter(video => {
            return video.id !== Number(ownProps.match.params.videoId)
        }),
        users: state.entities.users,
        currentUserId: state.session.id
    }
}
                          
```
## User Interface
I made great effort to clone the Google sign-in and account creation forms as close as I could, paying meticulous attention to every detail. My CSS skills greatly improved throughout this project and I feel much more confident styling UIs now. Take a look...

![signin](/app/assets/images/ViewTube_signin.png)

![Google signin](/app/assets/images/Google_sign.png)

## Features to come
I am planning to implement commenting on videos and like/dislike functionality on the page as my next steps. I will also be adding functionality to the search bar and ability to upload your own videos! All this will include meticulous CSS styling creating a clean and pristine design for my completed site! Enjoy!