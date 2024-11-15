# syntax=docker/dockerfile:experimental
FROM node:23 AS build
USER root

ENV ASTRO_TELEMETRY_DISABLED="1"
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
WORKDIR /app
COPY --chown=root:root . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ENTRYPOINT ["pnpm", "run", "dev", "--host"]
