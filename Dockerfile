FROM nginx

COPY *.tgz /usr/share/nginx/html/

RUN cd /usr/share/nginx/html/ && tar -xvf *.tgz && mv package/* .
