FROM node:12

# Create app directory
WORKDIR /data

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /data

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /data

EXPOSE 3000
CMD [ "node", "index.js" ]
