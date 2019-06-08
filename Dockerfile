FROM debian:stretch

ARG VERSION=""

# Install all the dependencies for `amphtml-validator` to build
RUN \
  set -e; \
  apt-get update; \
  apt-get install -y \
    curl; \
  curl -sL https://deb.nodesource.com/setup_10.x | bash -; \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -; \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list; \
  apt-get update; \
  apt-get install -y \
    git \
    nodejs \
    yarn \
    openjdk-8-jre \
    protobuf-compiler \
    python2.7 \
    python-pip; \
  pip install --user protobuf; \
  yarn global add gulp-cli; \
  mkdir -p /build; \
  cd /build; \
  curl -sL https://github.com/ampproject/amphtml/archive/$VERSION.tar.gz | gunzip | tar -xv;

WORKDIR /build/amphtml-$VERSION/validator

CMD ["sh", "-c", "python ./build.py 1>/dev/null 2>/dev/null && cat ./dist/validator-generated.json"]
