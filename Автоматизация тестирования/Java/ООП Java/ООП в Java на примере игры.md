#java #ООП #игры #инкапсуляция #наследование #полиморфизм #абстракция
## 🎮 Все концепции ООП в Java на примере RPG-игры
Демонстрация 4 принципов объектно-ориентированного программирования

```java

// 1. ИНКАПСУЛЯЦИЯ
class Character {
    private String name;
    private int health;
    
    public Character(String name, int health) {
        this.name = name;
        setHealth(health);
    }
    
    public void setHealth(int health) {
        if(health < 0) throw new IllegalArgumentException();
        this.health = health;
    }
    
    public String getName() { 
        return name; 
    }
    
    public int getHealth() { 
        return health; 
    }
    
    public void takeDamage(int damage) {
        setHealth(health - damage);
    }
}

// 2. НАСЛЕДОВАНИЕ
class Warrior extends Character {
    private int strength;
    
    public Warrior(String name, int health, int strength) {
        super(name, health);
        this.strength = strength;
    }
    
    public void smash() {
        System.out.println(getName() + " крушит врагов!");
    }
}

// 3. ПОЛИМОРФИЗМ
interface Attackable {
    void attack();
}

class Mage extends Character implements Attackable {
    private int mana;
    
    public Mage(String name, int health, int mana) {
        super(name, health);
        this.mana = mana;
    }
    
    @Override
    public void attack() {
        System.out.println(getName() + " запускает огненный шар!");
    }
}

// 4. АБСТРАКЦИЯ
abstract class NPC {
    public abstract void interact();
}

class Merchant extends NPC {
    @Override
    public void interact() {
        System.out.println("Торговец: Что желаете купить?");
    }
}

// Пример использования
public class Main {
    public static void main(String[] args) {
        Character hero = new Character("Герой", 100);
        hero.takeDamage(20);
        
        Warrior conan = new Warrior("Конан", 150, 15);
        conan.smash();
        
        Attackable gandalf = new Mage("Гендальф", 80, 200);
        gandalf.attack();
        
        NPC trader = new Merchant();
        trader.interact();
    }
}

/*
Вывод программы:
Здоровье героя: 80
Конан крушит врагов!
Гендальф запускает огненный шар!
Торговец: Что желаете купить?
*/

```

## Основные концепции:

| Элемент          | Пример из кода                 | Подробное описание                                                                 |
|-------------------|---------------------------------|-----------------------------------------------------------------------------------|
| **Класс**         | `class Character { ... }`       | Базовый строительный блок ООП. Инкапсулирует состояние (поля) и поведение (методы). Пример: `Character hero = new Character("Герой", 100);` |
| **Наследование**  | `class Warrior extends Character` | Механизм создания иерархии классов. Дочерний класс (Warrior) наследует поля/методы родителя (Character) и может их расширять. Пример: `Warrior conan = new Warrior(...);` |
| **Интерфейс**     | `interface Attackable { ... }`  | Контракт, который классы должны реализовать. Содержит абстрактные методы (без реализации). Пример: `class Mage implements Attackable` |
| **Инкапсуляция**  | `private String name;`          | Сокрытие внутреннего состояния объекта. Поля объявляются `private`, доступ — через методы (геттеры/сеттеры). |
| **Полиморфизм**   | `@Override public void attack()` | Возможность объектов разных классов выполнять одинаковые действия разными способами. Пример: `mage.attack()` vs `warrior.attack()` |
| **Абстракция**    | `abstract class NPC { ... }`    | Создание шаблонов с нереализованными методами. Нельзя создать экземпляр абстрактного класса. Пример: `abstract void interact();` |
| **Конструктор**   | `public Warrior(...) { ... }`  | Специальный метод для инициализации объекта. Вызывается при создании экземпляра (`new`). Может вызывать `super()` для инициализации родителя. |
| **Геттер**        | `public int getHealth() { ... }` | Метод для безопасного чтения приватных полей. Возвращает значение. Пример: `hero.getHealth()` → 100 |
| **Сеттер**        | `public void setHealth(int h) { ... }` | Метод для безопасной модификации приватных полей. Может включать валидацию. Пример: `hero.setHealth(hero.getHealth() - 20);` |


1. Инкапсуляция - сокрытие данных через private поля и методы доступа
2. Наследование - расширение функционала через extends
3. Полиморфизм - разные реализации методов через интерфейсы и @Override
4. Абстракция - использование abstract классов для определения шаблонов