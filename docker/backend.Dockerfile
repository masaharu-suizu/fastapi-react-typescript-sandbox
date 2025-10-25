FROM python:3.14-slim

WORKDIR /app
COPY backend/ .

RUN pip install uv
RUN uv sync

EXPOSE 8000
CMD ["uv", "run", "fastapi", "run", "app/main.py", "--port", "8000"]

