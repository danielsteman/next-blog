FROM alpine:3 as downloader

# Install the dependencies
RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    zip \
    zlib-dev

RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.11.3/pocketbase_0.11.3_linux_amd64.zip \
    && unzip pocketbase_0.11.3_linux_amd64.zip \
    && chmod +x /pocketbase

FROM scratch

EXPOSE 8090

COPY --from=downloader /pocketbase /usr/local/bin/pocketbase
CMD ["/usr/local/bin/pocketbase", "serve", "--http=0.0.0.0:8090"]