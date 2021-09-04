# Use an existing docker image- base image
# assume initial OS
FROM alpine  
# latest: Pulling from library/alpine
# a0d0a0d46f8b: Pull complete 

# Download and install dependency
# apk package manager that comes preinstalled with alpine image and we use it to download and update redis server

RUN apk add --update redis     
# now this run command is executed inside the new container created from alpine image and after running this command a new filesystem snapshot is taken and a new temporary image is created and the next command will use this temporary image.
# Running in 7b9fe4af640e         
# Removing intermediate container 7b9fe4af640e
#  ---> c861ff684cd1

# Specify command to tell the image what to do when it starts as a container

CMD ["redis-server"]  
# ---> Running in d380d627eba0
# Removing intermediate container d380d627eba0
# ---> 419fd4e125a4
# Successfully built 419fd4e125a4              