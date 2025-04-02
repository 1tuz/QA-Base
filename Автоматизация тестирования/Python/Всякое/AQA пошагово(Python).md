

**Полное руководство по написанию автотестов: от основ до сложных задач**
---

### Введение

Добро пожаловать в мир автоматизированного тестирования! Это пошаговое руководство проведёт Вас через все этапы создания автотестов, начиная с основ и заканчивая сложными сценариями. Мы начнём с самого простого и постепенно усложним задачи.

### Что такое автотесты?

Автотесты — это программы, которые проверяют, что другой код или система работает корректно. Они полезны, чтобы:

- Экономить время на ручной проверке.
- Выявлять ошибки на ранних этапах разработки.
- Уверенно вносить изменения в код без страха что-то сломать.

---

## 1. Установка инструментов и подготовка окружения

### Шаг 1. Установка Python

1. Скачайте последнюю версию Python с [официального сайта](https://www.python.org/).
2. Во время установки выберите:
    - **"Add Python to PATH"** (очень важно).
    - Убедитесь, что включены pip (пакетный менеджер) и IDLE.
3. После установки откройте командную строку (Win + R, затем `cmd`) и введите:
    
    ```bash
    python --version
    ```
    
    Если всё правильно, Вы увидите номер версии Python.

### Шаг 2. Установка PyCharm

1. Скачайте PyCharm Community Edition с [официального сайта](https://www.jetbrains.com/pycharm/).
2. Установите PyCharm с настройками по умолчанию.
3. Запустите PyCharm и создайте новый проект (например, `C:\Users\YourName\autotests`).

### Шаг 3. Создание виртуального окружения

Виртуальное окружение позволяет изолировать зависимости Вашего проекта от глобальной системы.

1. В PyCharm откройте встроенный терминал (внизу окна).
2. Введите команду для создания виртуального окружения:
    
    ```bash
    python -m venv название_окружения
    ```
    
    Это создаст папку `venv` в корне проекта.
3. Активируйте виртуальное окружение:
    - На Windows:
        
        ```bash
        .\venv\Scripts\activate
        ```
        
    - На macOS/Linux:
        
        ```bash
        source venv/bin/activate
        ```
        
4. После активации виртуального окружения в командной строке появится префикс `(venv)`.

### Шаг 4. Установка необходимых библиотек

1. Убедитесь, что виртуальное окружение активировано (виден префикс `(venv)` в терминале).
2. Установите библиотеку `pytest`:
    
    ```bash
    pip install pytest
    ```
    
3. Проверьте установку:
    
             ```bash
    pytest --version
    ```
    

---

## 2. Написание базовых автотестов

### Шаг 1. Создайте файл с тестами

1. В PyCharm создайте файл `test_sample.py`.
2. Добавьте в файл следующий код:
    
    ```python
    def test_addition():
        assert 1 + 1 == 2
    
    def test_subtraction():
        assert 5 - 3 == 2
    ```
    

### Шаг 2. Запуск тестов

1. Убедитесь, что виртуальное окружение активировано.
2. Откройте терминал в PyCharm или командную строку.
3. Перейдите в папку с проектом (если используете командную строку):
    
    ```bash
    cd C:\Users\YourName\autotests
    ```
    
4. Запустите тесты командой:
    
    ```bash
    pytest
    ```
    
5. Вы увидите результаты выполнения тестов.

---

## 3. Работа с параметризацией и исключениями

Параметризация нужна для сокращения кода, в случае, если мы можем использовать один и тот же тест, но подавать туда разную логику.

### Шаг 1. Использование параметризации

Добавьте в файл `test_sample.py` следующий код:

```python
import pytest

@pytest.mark.parametrize("a, b, expected", [
    (1, 1, 2),
    (2, 3, 5),
    (5, 5, 10),
])
def test_addition(a, b, expected):
    assert a + b == expected
```

### Шаг 2. Проверка ошибок

Добавьте тест для проверки исключений:

```python
def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        1 / 0
```

---

## 4. Написание тестов для веб-приложений (Selenium)

### Шаг 1. Установка Selenium

1. Установите библиотеку Selenium:
    
    ```bash
    pip install selenium
    ```
    
2. Скачайте [WebDriver](https://chromedriver.chromium.org/downloads) для вашего браузера.

### Шаг 2. Написание теста

Создайте файл `test_web.py` и добавьте следующий код:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

def test_google_search():
    driver = webdriver.Chrome(executable_path="/path/to/chromedriver")
    driver.get("https://www.google.com")

    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("pytest")
    search_box.submit()

    assert "pytest" in driver.title
    driver.quit()
```

### Шаг 3. Запуск тестов

Запустите тесты, как описано выше.

---

## 5. Написание тестов для API (Backend)

### Шаг 1. Установка библиотек

1. Убедитесь, что виртуальное окружение активировано.
2. Установите библиотеку `requests`:
    
    ```bash
    pip install requests
    ```
    

### Шаг 2. Создание структуры проекта

Создайте следующую структуру:

```
tests/
|-- api/
|   |-- client.py
|-- data/
|   |-- test_data.py
|-- utils/
|   |-- helpers.py
|-- test_create_employee.py
```

### Шаг 3. Реализация клиента API

В `tests/api/client.py`:

```python
import requests

BASE_URL = "http://localhost:8888/api/employees"

class APIClient:
    @staticmethod
    def create_employee(data):
        response = requests.post(BASE_URL, json=data)
        response.raise_for_status()
        return response.json()
```

### Шаг 4. Тестовые данные

В `tests/data/test_data.py`:

```python
new_employee = {
    "name": "John Doe",
    "age": 30,
    "position": "Developer"
}
```

### Шаг 5. Тесты

В `tests/test_create_employee.py`:

```python
import pytest
from api.client import APIClient
from data.test_data import new_employee

def test_create_employee():
    response = APIClient.create_employee(new_employee)
    assert response["name"] == new_employee["name"]
    assert response["age"] == new_employee["age"]
    assert response["position"] == new_employee["position"]
```

### Шаг 6. Запуск тестов

```bash
pytest tests/
```

---

## 6. Создание отчётов с Allure

### Шаг 1. Установка Allure

1. Убедитесь, что виртуальное окружение активировано.
2. Установите библиотеку:
    
    ```bash
    pip install allure-pytest
    ```
    

### Шаг 2. Добавление конфигурации

В корне проекта создайте файл `pytest.ini`:

```ini
[pytest]
addopts = --alluredir=reports
```

### Шаг 3. Генерация отчётов

1. Запустите тесты:
    
    ```bash
    pytest
    ```
    
2. Сгенерируйте отчёт:
    
    ```bash
    allure serve reports
    ```
    

---
