FROM node:18-alpine

WORKDIR /

COPY package*.json ./

RUN npm install 

COPY next.config.js tsconfig.json  ./
COPY tailwind.config.js postcss.config.js ./

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm" ,"start" ]