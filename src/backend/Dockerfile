# Use the official Node.js image from Docker Hub
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files into the container
COPY . .

# Expose the port where the Express.js app will run
# Here we're using a default port of 3000 if the environment variable is not provided
ARG BACKEND_PORT=3000
ENV PORT=${BACKEND_PORT}
EXPOSE ${PORT}

# Command to run the Express.js server
CMD ["npm", "start"]
