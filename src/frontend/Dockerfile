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

# Expose port 4200 for serving the Angular app
EXPOSE 4200

# Command to serve the Angular app using ng serve
CMD ["npm", "start"]
