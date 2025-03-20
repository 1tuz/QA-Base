#python #циклы #for #while

🔹 **`for`** — перебирает последовательности.

```python
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)
```

🔹 **`while`** — выполняется, пока условие `True`.

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

🔹 **Управляющие инструкции**  
✅ `break` — выход из цикла.  
✅ `continue` — пропуск итерации.  
✅ `else` — выполняется, если `break` не сработал.

🔹 **Вложенные циклы**

```python
for i in range(2):
    for j in range(2):
        print(i, j)  # (0,0), (0,1), (1,0), (1,1)
```