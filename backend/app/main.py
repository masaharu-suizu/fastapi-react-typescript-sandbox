from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import sqlite3

app = FastAPI()

# CORS設定（フロントからのアクセス許可）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 本番ではドメインを指定
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = os.path.join(os.getcwd(), "db", "app.db") 

@app.get("/")
def read_root():
    conn = sqlite3.connect(DB_PATH)
    return {"message": "Hello from FastAPI (Python 3.14)!"}

