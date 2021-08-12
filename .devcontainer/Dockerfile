# Update the VARIANT arg in docker-compose.yml to pick a Node version: 10, 12, 14
ARG NODE_VARIANT=14
ARG PYTHON_VARIANT=3.9
FROM nikolaik/python-nodejs:python${PYTHON_VARIANT}-nodejs${NODE_VARIANT}-slim

# Update args in docker-compose.yaml to set the UID/GID of the "node" user.
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN adduser ubuntu \
    && if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then groupmod --gid $USER_GID ubuntu && usermod --uid $USER_UID --gid $USER_GID ubuntu; fi

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        git

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
