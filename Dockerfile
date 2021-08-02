FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server/index.js"]