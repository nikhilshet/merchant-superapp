# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app with http-server
FROM node:18-alpine

WORKDIR /app

# Install http-server globally
RUN npm install -g http-server

# Copy built files from the build stage
COPY --from=build /app/dist ./dist

# Expose port 80
EXPOSE 80

# Serve the built app on port 80
CMD ["http-server", "dist", "-p", "80", "-c-1"]
