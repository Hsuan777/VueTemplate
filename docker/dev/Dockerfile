FROM node:16.16-buster-slim
# There's a problem using v16.4+ on M1 Mac when using linux/amd64 container

RUN addgroup --gid 1024 dev
RUN useradd --create-home -g dev appuser

# RUN apt-get update -y && \
#     apt-get install python3 build-essential -y --no-install-recommends

USER appuser
RUN mkdir /home/appuser/app
WORKDIR /home/appuser/app

# COPY --chown=appuser:appuser package.json package-lock.json /home/appuser/app/

# RUN npm i

COPY docker/dev/entrypoint.sh /home/appuser/
