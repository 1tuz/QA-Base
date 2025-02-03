#if-else #java #условия

🔹 **if** — выполняет блок кода, если условие `true`.

```java
if (a > b) {
    System.out.println("a больше b");
}
```

🔹 **else** — выполняется, если условие в `if` — `false`.

```java
if (a > b) {
    System.out.println("a больше b");
} else {
    System.out.println("a не больше b");
}
```

🔹 **else if** — проверка дополнительного условия.

```java
if (a > b) {
    System.out.println("a больше b");
} else if (a == b) {
    System.out.println("a равно b");
} else {
    System.out.println("a меньше b");
}
```

🔹 **тернарный оператор** — компактная форма if-else.

```java
String result = (a > b) ? "a больше b" : "a не больше b";
System.out.println(result);
```

🔹 **вложенные условия**

```java
if (a > 0) {
    if (b > 0) {
        System.out.println("a и b положительные");
    }
}
```

🔹 **короткое замыкание (short-circuit)**  
✅ `&&` — и (and), если первое условие `false`, второе не проверяется.  
✅ `||` — или (or), если первое условие `true`, второе не проверяется.

```java
if (a > 0 && b > 0) {
    System.out.println("оба положительные");
}
```