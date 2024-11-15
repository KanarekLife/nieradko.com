# syntax=docker/dockerfile:experimental
FROM node:23-alpine AS build

ENV ASTRO_TELEMETRY_DISABLED="1"
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
WORKDIR /app
COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build


FROM nginx:1.26-alpine
COPY --from=build /app/dist /usr/share/nginx/html