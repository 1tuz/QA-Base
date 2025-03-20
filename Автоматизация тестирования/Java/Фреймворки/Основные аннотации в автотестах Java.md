### **Совсем кратко**  
- **`@Autowired`** — Spring сам передаёт нужные объекты в ваш класс.  
- **`@Builder`** — удобное создание объектов через цепочку вызовов.  
- **`@Data`** — автоматически добавляет геттеры, сеттеры и другие методы.  
- **`@NoArgsConstructor`** — добавляет пустой конструктор.  
- **`@AllArgsConstructor`** — добавляет конструктор со всеми полями.
- **`@Lazy`** — откладывает создание объекта до последнего момента.  
- **`@SneakyThrows`** — бросает исключения без лишнего кода (но используйте осторожно!).  

### **Подробно**  
### **1. `@Autowired` (Spring)**  
**Что делает?**  
Автоматически "вставляет" (находит и подключает) нужные объекты (бины) из Spring-контекста в ваш класс.  
**Зачем нужно?**  
Чтобы не создавать объекты вручную (например, `new UserService()`). Spring сам найдёт подходящий компонент и передаст его вам.  

**Пример:**  
```java
@Service
public class UserService {
    // ... 
}

@SpringBootTest
public class UserServiceTest {

    // Spring автоматически передаст сюда реальный UserService из контекста
    @Autowired  
    private UserService userService; 

    @Test
    void test() {
        userService.doSomething(); // используем готовый сервис
    }
}
```

**Как работает?**  
Spring ищет в своём контексте бин, который соответствует типу (в примере — `UserService`), и подставляет его в поле/метод.  

**Важно:**  
- Если есть несколько реализаций одного интерфейса, нужно уточнять, какой бин использовать (например, через `@Qualifier`).  

---

### **2. `@Builder` (Lombok)**  
**Что делает?**  
Генерирует **паттерн "Строитель"** (Builder) для класса. Это удобный способ создавать объекты с большим количеством полей.  

**Зачем нужно?**  
Чтобы писать код вида:  
```java
User user = User.builder()
    .name("John")
    .age(25)
    .email("john@example.com")
    .build();
```
Вместо:  
```java
User user = new User("John", 25, "john@example.com"); // если много полей, легко запутаться
```

**Пример:**  
```java
@Builder // Lombok сгенерирует метод builder() и класс UserBuilder
public class User {
    private String name;
    private int age;
    private String email;
}
```

**Как это выглядит "под капотом"?**  
Lombok создаст скрытый класс `UserBuilder` с методами для каждого поля.  
После компиляции вы сможете использовать цепочку вызовов, как в примере выше.

---

### **3. `@Data` (Lombok)**  
**Что делает?**  
Автоматически генерирует:  
- Геттеры для всех полей,  
- Сеттеры для нефинальных полей,  
- Методы `toString()`, `equals()`, `hashCode()`.  

**Зачем нужно?**  
Чтобы не писать вручную кучу стандартного кода.  

**Пример:**  
```java
@Data
public class User {
    private String name;
    private int age;
}
```

**Эквивалент без Lombok:**  
```java
public class User {
    private String name;
    private int age;

    // Геттеры
    public String getName() { return name; }
    public int getAge() { return age; }

    // Сеттеры
    public void setName(String name) { this.name = name; }
    public void setAge(int age) { this.age = age; }

    // toString(), equals(), hashCode() 
    // (реализации опущены для краткости)
}
```

**Осторожно:**  
- Не используйте `@Data` для сущностей JPA/Hibernate, если не хотите случайно сломать `equals()`/`hashCode()`.  

---

### **4. `@NoArgsConstructor` (Lombok)**  
**Что делает?**  
Генерирует **конструктор без аргументов** (пустой конструктор).  

**Зачем нужно?**  
Некоторые библиотеки и фреймворки (например, Hibernate) требуют пустой конструктор для создания объектов.  

**Пример:**  
```java
@NoArgsConstructor
public class User {
    private String name;
    private int age;
}

// Теперь можно так:
User user = new User(); // без аргументов
```

---

### **5. `@AllArgsConstructor` (Lombok)**  
**Что делает?**  
Генерирует **конструктор со всеми полями класса** в качестве аргументов.  

**Зачем нужно?**  
Чтобы быстро создавать объекты, передавая значения всех полей сразу.  

**Пример:**  
```java
@AllArgsConstructor
public class User {
    private String name;
    private int age;
}

// Теперь можно так:
User user = new User("John", 25); // все поля передаются в конструктор
```

---

### **Пример использования всех аннотаций вместе**  
```java
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String name;
    private int age;
}

// Использование:
User user1 = new User(); // благодаря @NoArgsConstructor
User user2 = new User("John", 25); // благодаря @AllArgsConstructor
User user3 = User.builder().name("John").age(25).build(); // благодаря @Builder
```


---

### **6. `@Lazy` (Spring)**  
**Что делает?**  
Задерживает создание объекта (бина) до момента, когда он **действительно понадобится**.  
**Зачем нужно?**  
- Чтобы ускорить старт приложения (не тратить время на инициализацию ненужных сразу бинов).  
- Для оптимизации памяти (если бин используется редко, он не будет создан заранее).  

**Пример:**  
```java
@Configuration
public class AppConfig {

    @Lazy // Этот бин создастся только при первом обращении к нему
    @Bean
    public HeavyService heavyService() {
        return new HeavyService(); // Предположим, это "тяжёлый" сервис
    }
}

// Использование в другом классе:
@Autowired
private HeavyService heavyService; // Бин создастся здесь, при первом вызове метода heavyService
```

**Как работает?**  
- Без `@Lazy` Spring создаёт все бины при запуске приложения.  
- С `@Lazy` бин создаётся **тогда, когда его впервые запросят** (например, через `@Autowired`).  

**Где использовать?**  
- Для ресурсоёмких бинов (например, подключение к внешним сервисам).  
- Для бинов, которые могут не понадобиться в текущей сессии (например, специфичные для пользователя настройки).  

---

### **7. `@SneakyThrows` (Lombok)**  
**Что делает?**  
Позволяет бросать **проверяемые исключения** (checked exceptions) без объявления их в сигнатуре метода (`throws`).  
**Зачем нужно?**  
- Чтобы избежать boilerplate-кода с `try/catch` или `throws` в методах, где исключения обрабатываются неявно.  

**Пример:**  
```java
public class FileUtils {

    @SneakyThrows // Не нужно писать throws IOException
    public static String readFile(String path) {
        return Files.readString(Path.of(path)); // readString() бросает IOException
    }
}

// Использование:
String content = FileUtils.readFile("test.txt"); // Ошибка "пробрасывается" автоматически
```

**Как работает?**  
Lombok "оборачивает" исключение в `RuntimeException`, поэтому компилятор не требует обрабатывать его явно.  

**Осторожно:**  
- Если исключение действительно нужно обработать, **не используйте `@SneakyThrows`**.  
- Может усложнить отладку, так как исключение скрыто в стектрейсе.  

**Где использовать?**  
- В тестах, где вы уверены, что исключения не возникнут.  
- В лямбда-выражениях, где объявление `throws` невозможно.  

---

### **Пример совместного использования**  
```java
@Service
public class DataProcessor {

    @Lazy // Создастся только при первом вызове
    @Autowired
    private HeavyService heavyService;

    @SneakyThrows
    public void processData() {
        heavyService.init(); // Допустим, init() бросает проверяемое исключение
        // ... логика обработки ...
    }
}
```

