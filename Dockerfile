FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package*.json /app/

EXPOSE 3000

CMD ["npm", "run", "start"]
