# nextjs app
FROM node:20.10.0

WORKDIR /app

COPY ./ ./
# add yarn
RUN npm install -g yarn

# install dependencies
RUN yarn install

# expose port 3000
EXPOSE 3000

# start app

CMD ["yarn", "dev"]
