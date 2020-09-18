FROM node:12.16.3

WORKDIR /app
ADD . /app

RUN yarn build
CMD ["pm2-runtime", "server/app.js"] && ["pm2-runtime", "server/start.js"]
#FROM nginx
#COPY --from=0 /app/dist /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080