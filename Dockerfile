FROM nginx:alpine

WORKDIR /

RUN apk add --no-cache nodejs yarn

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY package.json yarn.lock ./

RUN yarn install --production
RUN yarn set version berry

COPY . ./
RUN yarn build

EXPOSE 8180

CMD ["nginx", "-g", "daemon off;"]