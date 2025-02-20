#requests #HTTP #API #Python

🔹 **Назначение**  
✅ Библиотека `requests` для Python используется для отправки HTTP-запросов и работы с веб-API.  
✅ Упрощает работу с HTTP-запросами, поддерживает методы GET, POST, PUT, DELETE и другие.

🔹 **Установка**  
✅ Устанавливается через pip: `pip install requests`.  
❌ Может требовать обновления pip для установки последней версии.

🔹 **Основные возможности**  
✅ Отправка запросов с различными методами: `requests.get()`, `requests.post()`, `requests.put()`, `requests.delete()`.  
✅ Легкость работы с параметрами URL, заголовками и телом запроса.  
✅ Обработка ответов: статус-код, текст ответа, JSON и другие.  
✅ Поддержка сессий через `requests.Session()`, что позволяет сохранять cookies между запросами.

🔹 **Пример использования**

```python
import requests

response = requests.get('https://api.example.com/data')
print(response.status_code)  # Статус-код ответа
print(response.json())  # Ответ в формате JSON
```

🔹 **Параметры запросов**  
✅ Параметры можно передавать через аргумент `params` для GET-запросов или через `data`/`json` для POST-запросов.

```python
response = requests.get('https://api.example.com/data', params={'key': 'value'})
```

🔹 **Обработка ошибок**  
✅ Для проверки успешности запроса можно использовать `response.ok`, `response.status_code` или `response.raise_for_status()` для выбрасывания исключений при ошибках HTTP.  
❌ Необработанные ошибки запросов могут привести к сбоям в работе программы.

🔹 **Работа с авторизацией**  
✅ Поддерживает базовую авторизацию и токены:

```python
response = requests.get('https://api.example.com/data', auth=('username', 'password'))
```

🔹 **Время ожидания**  
✅ Поддержка таймаутов через параметр `timeout` для предотвращения зависания запросов:

```python
response = requests.get('https://api.example.com/data', timeout=10)
```