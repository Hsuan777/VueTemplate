FROM nginx:stable-alpine

COPY ngnix/nginx.conf /etc/nginx/nginx.conf
COPY ngnix/appNginx.conf /etc/nginx/sites-available/

RUN mkdir -p /etc/nginx/sites-enabled/ && \
    ln -sf /etc/nginx/sites-available/appNginx.conf /etc/nginx/sites-enabled/

CMD ["nginx", "-g", "daemon off;"]
