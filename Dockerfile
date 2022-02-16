FROM nginx

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY js/*.js /usr/share/nginx/html/js/
