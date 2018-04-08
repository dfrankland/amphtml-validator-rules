FROM debian:jessie

ARG VERSION

# Install all the dependencies for `amphtml-validator` to build
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
    python2.7

# Explicity checkout `amphtml` at a specific revision (that way we don't have to
# guess which rules are published).
RUN \
  mkdir -p /build \
  && \
  cd /build \
  && \
  git clone https://github.com/ampproject/amphtml.git \
  && \
  cd ./amphtml \
  && \
  git checkout tags/$VERSION

WORKDIR /build/amphtml/validator

CMD ["sh", "-c", "python ./build.py && rm -rf ./hostdir/generated && mkdir -p ./hostdir/generated && cp ./dist/* ./hostdir/generated/"]
