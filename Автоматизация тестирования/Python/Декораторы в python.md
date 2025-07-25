#decorators #python #авторефакторинг #код

## **КРАТКО**

**Декоратор — это обёртка вокруг функции (или метода/класса), которая добавляет какой‑то код «до» и/или «после» её вызова, не меняя исходный код самой функции.**

✅ **Ключевые преимущества:**

- Повторное использование общих операций (логирование, проверка прав, кэширование)
    
- Чистый код: нет дублирования «до/после» логики
    
- Явная декларативность через `@`
    

---

## **ПОДРОБНОЕ ПРОДОЛЖЕНИЕ**

✅ **1. Определение декоратора (без параметров):**

- Внешняя функция принимает оригинальную функцию `func`.
    
- Внутренняя (`wrapper`) оборачивает вызов: делает что‑то до, вызывает `func` и делает что‑то после.
    
- Возвращаем `wrapper`.
    

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("🔹 До вызова")
        result = func(*args, **kwargs)
        print("🔹 После вызова")
        return result
    return wrapper
```

✅ **2. Применение синтаксисом `@`:**

```python
@my_decorator
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Alice")
```

👉 При вызове `say_hello` фактически запускается `wrapper`.

---

✅ **3. Декоратор с параметрами:**

- Добавляется уровень «фабрики»:
    

```python
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator
```

```python
@repeat(3)
def greet(name):
    print(f"Hi, {name}!")
```

---

✅ **4. Сохранение метаданных функции:**  
Чтобы `wrapper` «прикидывался» оригиналом (имя, docs, сигнатура), используем `functools.wraps`:

```python
from functools import wraps

def my_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        # ...
        return func(*args, **kwargs)
    return wrapper
```

---

✅ **5. Порядок применения нескольких декораторов:**

```python
@dec1
@dec2
def func(): ...
# эквивалентно: func = dec1(dec2(func))
```

---

🔹 **Пример полного «конфига» декоратора:**

```python
from functools import wraps

def log_and_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"[LOG] Вызов {func.__name__} с args={args}, kwargs={kwargs}")
        start = __import__('time').time()
        result = func(*args, **kwargs)
        elapsed = __import__('time').time() - start
        print(f"[TIME] {func.__name__} заняла {elapsed:.4f} с, вернула {result!r}")
        return result
    return wrapper

@log_and_time
def add(a, b):
    return a + b

add(5, 7)
```