FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install prisma @prisma/client
COPY . .
RUN npm run build
EXPOSE 3000
EXPOSE 1025
CMD ["npm", "run", "start:prod"]
