FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "dev"]

# Project launch documentation:
# // creating an image
#1. docker build . -t chart-app
# // launching an application through a Docker container
#2. npm start