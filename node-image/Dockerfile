FROM node:alpine

# copy everything from your build context(current working directory) inside the container.
# Build context is essentially a set of files and folders that belong to our project and we want to wrap in our container.

# for specifying the folder inside root dir where we want to store project.
WORKDIR /usr/app 

# COPY (path to folder , to copy from on your machine relative to build context) (Place to copy stuff to inside the container)
COPY ./package.json ./ 

RUN npm install


COPY ./ ./

CMD ["npm","start"]