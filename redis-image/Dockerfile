# Use an existing docker image- base image

FROM alpine                         

# Download and install dependency
# apk package manager that comes preinstalled with alpine image and we use it to download and update redis server

RUN apk add --update redis              

# Specify command to tell the image what to do when it starts as a container

CMD ["redis-server"]                