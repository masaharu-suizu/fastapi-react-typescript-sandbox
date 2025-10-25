# 🖥 システム構成情報

```
┌───────────────────────┐
│       Host PC         │
│                       │
│  Docker Engine + v2   │
└─────────┬─────────────┘
          │
          │ docker compose
          │
┌─────────▼─────────────┐
│       Docker Network   │
│ (bridge network内で通信) │
└───────┬───────────────┘
        │
        │
┌───────▼───────────────┐
│      frontend         │
│  (Dockerコンテナ)     │
│                       │
│  Bun + React + TS     │
│  Vite Dev Server      │
│  Bootstrap CSS        │
│                       │
│  - /index.html        │
│  - /src/main.tsx      │
│  - /src/App.tsx       │
│                       │
│  ポート: 5173         │
└─────────┬─────────────┘
          │ fetch API
          │
┌─────────▼─────────────┐
│      backend          │
│  (Dockerコンテナ)     │
│                       │
│  Python 3.14          │
│  uv (pipで管理)       │
│  FastAPI[standard]    │
│  pydantic             │
│  sqlite-utils         │
│                       │
│  - /app/app/main.py   │
│                       │
│  ポート: 8000         │
│  SQLite DB: /app/db/app.db │
└─────────┬─────────────┘
          │
          │ ファイルマウント
          │
┌─────────▼─────────────┐
│         db            │
│  ホスト側ディレクトリ │
│  - app.db             │
└───────────────────────┘
```

---

## 🔹 各コンポーネントの役割

| コンポーネント                          | 役割                                          |
| --------------------------------------- | --------------------------------------------- |
| frontend (Bun + React + TS + Bootstrap) | UI 表示・API 呼び出し・ブラウザにレンダリング |
| backend (uv + Python + FastAPI)         | API サーバー・DBアクセス・CORS 設定           |
| db (SQLite)                             | データ保存（ホスト側マウント）                |
| Docker network                          | frontend ↔ backend の通信を管理               |
| Docker Engine                           | コンテナのビルド・起動・管理                  |

---

## 🔹 ポート情報

| コンテナ         | ポート  | アクセス                                                     |
| ------------ | ---- | -------------------------------------------------------- |
| frontend     | 5173 | [http://localhost:5173](http://localhost:5173)           |
| backend      | 8000 | [http://localhost:8000](http://localhost:8000)           |
| backend docs | 8000 | [http://localhost:8000/docs](http://localhost:8000/docs) |

---


* backend は uv.lock に依存パッケージを管理
* SQLite DB は **ホスト側の db/app.db をボリュームマウント**
* Docker Compose で分離構成、依存関係を `depends_on` で設定

---

```bash
cd docker
docker compose up --build
```


