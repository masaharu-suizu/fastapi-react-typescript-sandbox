FROM oven/bun:latest
WORKDIR /app
COPY frontend/ .
RUN bun install
EXPOSE 5173
CMD ["bun", "run", "dev", "--host"]

