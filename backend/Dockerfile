FROM node:20.11.1-bookworm-slim
# FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci --omit=dev && npm cache clean --force
# RUN npm ci --only=production && npm cache clean --force

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node

# Start the server using the production build
# CMD [ "node", "dist/main.js" ]
CMD [ "npm", "start" ]