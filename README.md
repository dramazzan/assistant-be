# Assistant Backend

Express сервер для AI Assistant.

## .env

Создать файл `.env`:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4.1-mini
PORT=4000
CORS_ORIGIN=http://localhost:8080
```

## Запуск

```bash
npm install
npm run dev
```

Проверка:

```text
http://localhost:4000/api/health
```

## Docker

```bash
docker compose up --build
```

Остановить:

```bash
docker compose down
```
