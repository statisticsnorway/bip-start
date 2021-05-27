#Inspired by https://codefresh.io/docs/docs/learn-by-example/nodejs/react/ and
#https://github.com/statisticsnorway/dapla-react-reference-app/blob/master/Dockerfile
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY /build /usr/share/nginx/html

EXPOSE 8180

CMD ["nginx", "-g", "daemon off;"]
