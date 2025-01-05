# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN yarn install --production

# Copy application code
COPY . .

# Build the React app
RUN yarn build

# Install serve to serve the build files
RUN yarn global add serve

# Expose port
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "build"]
