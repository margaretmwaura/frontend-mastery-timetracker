# timetracker

## Project setup
```
npm install
```
### To run the project locally

Run 
``` docker build -t vue-prod -f Dockerfile . ``` 
to build the docker image from the dockerfile.

Run 
``` docker run -itd -p 8080:80 vue-prod ``` 
to create the container from the vue-prod docker image. You can access the app on port http://localhost:8080/ on your browser.

### What you will learn
- How to deploy application using docker
- Hosting of containers on heroku
- Hosting of static assets ( images ) on amazon s3.
