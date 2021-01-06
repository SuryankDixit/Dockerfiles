FROM node:alpine

# copy everything from your build context(current working directory) inside the container.
# Build context is essentially a set of files and folders that belong to our project and we want to wrap in our container.

WORKDIR /usr/app 
COPY ./package.json ./ 
RUN npm install

COPY ./ ./

CMD ["npm","start"]