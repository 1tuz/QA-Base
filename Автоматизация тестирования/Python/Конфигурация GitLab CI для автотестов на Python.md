#gitlab #CI/CD #CI #Автотесты  #python 

## **КРАТКО**

**Пайплайн автоматизирует проверку кода. Он регулярно запускает автотесты, выявляет ошибки ещё до релиза и упрощает интеграцию изменений в проект.**

✅ **Файл настройки:**  
Создай в корне проекта файл `.gitlab-ci.yml`.

—

## **ПОДРОБНОЕ ПРОДОЛЖЕНИЕ**

✅ **Стадии:**  
Определи стадии, минимум — `test`.

```yaml
stages:
  - test
```

✅ **Использование Docker образа:**  
Укажи образ с нужной версией Python.

```yaml
test_job:
  stage: test
  image: python:3.9
```

✅ **Установка зависимостей:**  
Устанавливай библиотеки через `pip install -r requirements.txt`.

```yaml
  script:
    - pip install -r requirements.txt
```

✅ **Запуск тестов:**  
Простой запуск тестов через `pytest`.

```yaml
    - pytest
```

🔹 **Пример полного конфига:**

```yaml
stages:
  - test

test_job:
  stage: test
  image: python:3.9
  script:
    - pip install -r requirements.txt
    - pytest
```
