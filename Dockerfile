# 1단계: 빌드 스테이지
FROM node:24-alpine AS build-stage
WORKDIR /app

RUN corepack enable

# pnpm 관련 파일 복사
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# 2단계: 실행 스테이지 (Nginx)
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
