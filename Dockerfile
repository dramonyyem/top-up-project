FROM node:lts-alpine


# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the default port for Vue.js (typically 8080)
EXPOSE 8080

# Run the Vue.js development server
CMD ["npm", "run", "dev"]