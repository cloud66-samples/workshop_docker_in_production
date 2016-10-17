FROM node:6.7.0

# ------------------------------------------------------------------------------
# Install Cloud9
RUN git clone https://github.com/c9/core.git /cloud9
WORKDIR /cloud9
RUN scripts/install-sdk.sh

# Tweak standlone.js conf
RUN sed -i -e 's_127.0.0.1_0.0.0.0_g' /cloud9/configs/standalone.js 

# ------------------------------------------------------------------------------
# Add volumes
RUN mkdir /workspace
VOLUME /workspace

# ------------------------------------------------------------------------------
# Install Docker client
RUN apt-get -y update
RUN apt-get -y install apt-transport-https ca-certificates
RUN apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
RUN echo "deb https://apt.dockerproject.org/repo debian-jessie main" > /etc/apt/sources.list.d/docker.list
RUN apt-get -y update
RUN apt-get install -y docker-engine
RUN apt-get install -y apache2-utils

# ------------------------------------------------------------------------------
# Install Docker compose
RUN curl -L https://github.com/docker/compose/releases/download/1.8.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose

# ------------------------------------------------------------------------------
# Install Habitus
RUN curl -L https://github.com/cloud66/habitus/releases/download/v0.4.7/habitus_linux_amd64 > /usr/local/bin/habitus
RUN chmod +x /usr/local/bin/habitus

# ------------------------------------------------------------------------------
# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# ------------------------------------------------------------------------------
# Expose ports.
EXPOSE 80
ENV NODE_ENV production

CMD node /cloud9/server.js --auth ${C9_USERNAME}:${C9_PASSWORD} --listen 0.0.0.0 --collab true --port 80 -w /workspace
