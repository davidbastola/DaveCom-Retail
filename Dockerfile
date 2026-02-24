FROM node:16-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Expose server port
EXPOSE 3000

# Run server
CMD ["node", "server.js"]
