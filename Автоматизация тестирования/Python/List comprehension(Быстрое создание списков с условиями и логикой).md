#python #listcomprehension #генераторы

🔹 **List comprehension** — компактный способ создания списков с фильтрацией и обработкой.

✅ **Синтаксис**

```python
[выражение for элемент in последовательность if условие]
```

✅ **Примеры**

- **Квадраты чисел**

```python
squares = [x**2 for x in range(5)]  
# [0, 1, 4, 9, 16]
```

- **Фильтрация четных**

```python
evens = [x for x in range(10) if x % 2 == 0]  
# [0, 2, 4, 6, 8]
```

- **Вложенные циклы**

```python
pairs = [(x, y) for x in range(3) for y in range(3)]  
# [(0, 0), (0, 1), (0, 2), ..., (2, 2)]
```