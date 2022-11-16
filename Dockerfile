FROM nginx
COPY build/. /usr/share/nginx/html
EXPOSE 5000