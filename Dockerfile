FROM debian:jessie

RUN \
  apt-get update \
  && \
  apt-get install -y \
    curl \
  && \
  curl -sL https://deb.nodesource.com/setup_8.x | bash - \
  && \
  apt-get update \
  && \
  apt-get install -y \
    git \
    nodejs \
    openjdk-7-jre \
    protobuf-compiler \
    python-protobuf \
    python2.7 \
  && \
  npm i -g rollup

RUN \
  mkdir -p /build \
  && \
  cd /build \
  && \
  git clone https://github.com/ampproject/amphtml.git

WORKDIR /build/amphtml/validator

COPY ./rollup.config.js ./
COPY ./goog.provide.js ./

CMD ["sh", "-c", "python ./build.py && rollup -c ./rollup.config.js"]
