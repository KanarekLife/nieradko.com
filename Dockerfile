FROM node:23-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

FROM nginx:1.27
COPY --from=build /app/dist /usr/share/nginx/html
