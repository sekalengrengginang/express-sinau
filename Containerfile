FROM node:20-alpine AS build-env

WORKDIR /app/src

COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs20-debian11
COPY --from=build-env /app/src /app
WORKDIR /app
EXPOSE 3000
CMD ["./src/index.js"]