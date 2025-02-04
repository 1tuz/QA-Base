
1. **Статус-код** – результат обработки запроса (`200 OK`, `404 Not Found`).  
2. **Заголовки (Headers)** – метаинформация (тип данных, длина, кэширование).  
3. **Тело ответа (Body)** – содержимое (HTML, JSON, XML, файл и т. д.).  
4. **Версия протокола** – например, `HTTP/1.1` или `HTTP/2`.

📌 **Пример:**

```
HTTP/1.1 200 OK  
Content-Type: application/json  
Content-Length: 123  

{ "message": "Success" }
```

👉 **Статус-код:** `200 OK`  
👉 **Заголовки:** `Content-Type: application/json`  
👉 **Тело:** `{"message": "Success"}`