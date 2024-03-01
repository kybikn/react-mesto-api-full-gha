###################
# BUILD
###################

FROM node:20.11.1-bookworm-slim As build

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

COPY --chown=node:node . .

ENV NODE_ENV production
# Run the build command which creates the production bundle
RUN npm run build

###################
# PRODUCTION
###################

#alpine-slim 13Mb, alpine 44Mb, 1.25.4-bookworm 188Mb
FROM nginx:alpine-slim As production

# Copy static files to the production image
COPY --chown=node:node --from=build /usr/src/app/build /usr/share/nginx/html
