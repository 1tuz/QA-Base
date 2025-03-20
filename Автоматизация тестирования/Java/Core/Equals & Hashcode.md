#Java #OOP #Equals #HashCode

🔹 **Метод `equals()`**  
✅ Определяется в `Object`, сравнивает ссылки (по умолчанию).  
✅ Должен быть переопределен для корректного сравнения объектов.  
✅ Должен быть:

- **Рефлексивным** (`a.equals(a) == true`)
- **Симметричным** (`a.equals(b) == b.equals(a)`)
- **Транзитивным** (`a.equals(b) && b.equals(c) → a.equals(c)`)
- **Стабильным** (результат не меняется, если объект неизменен)
- **Не должен выбрасывать `NullPointerException`** (`a.equals(null) == false`)

🔹 **Метод `hashCode()`**  
✅ Определяется в `Object`, возвращает `int` (хеш-код объекта).  
✅ Должен быть переопределен вместе с `equals()`.  
✅ Если `a.equals(b) == true`, то `a.hashCode() == b.hashCode()`.  
✅ Если `a.hashCode() == b.hashCode()`, `a.equals(b)` **может** быть `false` (коллизия).  
✅ Используется в `HashMap`, `HashSet`, `HashTable`.

🔹 **Правильное переопределение**  
✅ Используйте `Objects.equals()` для `equals()`.  
✅ Для `hashCode()` комбинируйте поля (`Objects.hash()`).  
✅ Можно сгенерировать через IDE (IntelliJ IDEA, Eclipse).  
✅ `record` автоматически генерирует корректные `equals()` и `hashCode()`.

🔹 **Пример переопределения**

```java
@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    MyClass myClass = (MyClass) obj;
    return Objects.equals(field1, myClass.field1) &&
           Objects.equals(field2, myClass.field2);
}

@Override
public int hashCode() {
    return Objects.hash(field1, field2);
}
```

🔹 **Что будет, если не переопределить?**  
❌ `equals()` сравнивает ссылки, а не содержимое.  
❌ `hashCode()` может давать разные значения для одинаковых объектов.  
❌ Нарушение контракта `equals()` и `hashCode()` приведёт к проблемам в коллекциях (`HashMap`, `HashSet`).