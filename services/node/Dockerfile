FROM node:6.7.0

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME

ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install
CMD npm start