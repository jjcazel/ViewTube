# ViewTube

## Introduction
Welcome to **ViewTube**! This project is a tribute to YouTube, capturing its essence while integrating my enhancements. It stands as the capstone project of my coding boot camp, marking both the culmination of my initial journey into software development and the beginning of a deep-seated passion for building software. Built from the ground up, it demonstrates my evolution as a developer, featuring user authentication, video playback, commenting, and more, utilizing Ruby on Rails, React-Redux, and PostgreSQL.

## Live Demo
<!--Check out ViewTube live [here](https://viewtube1.herokuapp.com).--> Dive deeper into the architecture and features through our detailed wiki pages:
- [ViewTube Schema](https://github.com/jjcazel/ViewTube/wiki/ViewTube-Schema)
- [Sample State](https://github.com/jjcazel/ViewTube/wiki/Sample-State)
- [Frontend Routes](https://github.com/jjcazel/ViewTube/wiki/Frontend-Routes)
- [Backend Routes](https://github.com/jjcazel/ViewTube/wiki/Backend-Routes)

## Core Features

### User Authentication
Implemented robust user creation and authentication, leveraging Bcrypt for secure password handling and session management.

### Video Playback & Storage
Developed a comprehensive video playback feature, utilizing AWS S3 for video hosting, enabling users to upload, store, and view content seamlessly.

### Interactive User Interface
Crafted a highly interactive UI, closely mirroring Google's sign-in and account creation forms, to provide a familiar and intuitive user experience.

### Video Search
Built a dynamic search functionality, allowing users to discover videos by titles or descriptions, enhancing content discoverability.

```ruby
def search_scores(search_params)
  search_words = search_params.downcase.split(' ')
  scores = {}

  @videos.each do |video|
    score = 0
    title = video.title.downcase
    desc = video.description.downcase

    search_words.each { |word| score += 1 if title.include?(word) || desc.include?(word) }
    scores[video.id] = score
  end

  scores
end
                    
```
### User Interface
I made a great effort to clone the Google sign-in and account creation forms as closely as I could, paying meticulous attention to every detail. My CSS skills greatly improved throughout this project and I feel more confident styling UIs now. Take a look!

![signin](/app/assets/images/ViewTube_signin_450p.png) 
![Google signin](/app/assets/images/Google_sign_450p.png)

## Additional Highlights

- Enabled users to **comment on videos** and **express their reactions** through likes/dislikes, fostering a vibrant community interaction.
- **Optimized CSS styling** to create a clean and modern design, ensuring a pleasant browsing experience.

## Conclusion

ViewTube represents a significant milestone in my journey as a developer, encapsulating the skills and knowledge I've gained. It's a platform built with dedication to enhance user engagement and content sharing. I invite you to explore ViewTube and share your feedback!

