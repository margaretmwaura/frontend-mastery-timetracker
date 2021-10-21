FROM node:15.12.0
WORKDIR /app
COPY package.json ./
RUN npm rebuild node-sass
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "start"]


# docker-compose up # to start the compilation process
# to install npm package run
# docker-compose exec web -it npm i bootstrap