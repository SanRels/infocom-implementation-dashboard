# ===== Этап 1: сборка приложения =====
FROM node:20-alpine AS build

WORKDIR /app

# Копируем манифесты для кэширования слоёв
COPY package*.json ./

# Устанавливаем зависимости (только production + сборка)
RUN npm ci

# Копируем исходники
COPY . .

# Собираем production-сборку
RUN npm run build

# ===== Этап 2: раздача статики через Nginx =====
FROM nginx:1.27-alpine

# Удаляем дефолтную конфигурацию
RUN rm /etc/nginx/conf.d/default.conf

# Копируем свою конфигурацию
COPY nginx.conf /etc/nginx/conf.d/

# Копируем собранный билд из первого этапа
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
