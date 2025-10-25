# 1️⃣ Базалык Node.js образ
FROM node:18-alpine AS build

# 2️⃣ Жумушчу каталог
WORKDIR /app

# 3️⃣ package.json көчүрүү жана орнотуу
COPY package*.json ./
RUN npm install

# 4️⃣ Кодду көчүрүү жана билд жасоо
COPY .. .
RUN npm run build

# 5️⃣ Production сервер катары Nginx колдонобуз
FROM nginx:alpine

# 6️⃣ React билд файлын Nginx'ке көчүрүү
COPY --from=build /app/build /usr/share/nginx/html

# 7️⃣ Nginx порту
EXPOSE 80

# 8️⃣ Контейнер иштегенде Nginx’ти баштоо
CMD ["nginx", "-g", "daemon off;"]





#docker compose build
#docker compose up -d