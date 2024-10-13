FROM node:18-alpine

WORKDIR /

COPY package*.json ./

RUN npm install 

COPY next.config.js .sentryclirc app-pocketup-fr.json .env.local tsconfig.json sentry.* ./
COPY tailwind.config.js ecosystem.config.js postcss.config.js ./

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm" ,"start" ]