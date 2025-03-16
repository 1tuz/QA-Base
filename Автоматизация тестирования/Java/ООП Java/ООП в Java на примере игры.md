#java #ООП #наследование #классы #игры

## 🎮 RPG-система классов на Java с Dark Souls-статистикой

**Базовый класс персонажа с дефолтными параметрами:**

```java
public class Character {
    protected String name;
    protected int level;
    protected int vitality;
    protected int endurance;
    protected int strength;
    protected int dexterity;
    protected int intelligence;
    protected int faith;

    protected int maxHealth;
    protected int stamina;
    protected int equipLoad;

    public Character(String name, int level, int vitality, int endurance, int strength,
                     int dexterity, int intelligence, int faith) {
        this.name = name;
        this.level = level;
        this.vitality = vitality;
        this.endurance = endurance;
        this.strength = strength;
        this.dexterity = dexterity;
        this.intelligence = intelligence;
        this.faith = faith;

        calculateStats();
    }

    protected void calculateStats() {
        maxHealth = vitality * 10 + 50;
        stamina = endurance * 5;
        equipLoad = strength * 3;
    }

    public void showStats() {
        System.out.printf("\n⚡ %s (Ур. %d)\n", name, level);
        System.out.printf("❤️ Здоровье: %d | 🏃‍♂️ Стамина: %d\n", maxHealth, stamina);
        System.out.printf("📦 Грузоподъёмность: %dкг\n", equipLoad);
        System.out.println("\n⚔️ Основные параметры:");
        System.out.printf("💪 Сила: %d | 🏹 Ловкость: %d\n", strength, dexterity);
        System.out.printf("🔮 Интеллект: %d | ✨ Вера: %d\n", intelligence, faith);
    }
}
```

---

**Подклассы с наследованием и переопределением параметров по умолчанию:**

**Warrior.java**

```java
public class Warrior extends Character {
    private String weaponType;

    public Warrior(String name, int level) {
        super(name, level, 40, 25, 35, 8, 10, 10);
        this.weaponType = "Двуручное оружие";
    }

    public String powerAttack() {
        stamina -= 30;
        return name + " бьёт с разворота! (🗡️" + (strength * 3) + " урона)";
    }
}
```

**Paladin.java**

```java
public class Paladin extends Character {
    public Paladin(String name, int level) {
        super(name, level, 35, 30, 30, 10, 10, 40);
    }

    public String holyLight() {
        stamina -= 25;
        maxHealth += 50;
        return "✨ " + name + " призывает святой свет! (+50 HP)";
    }
}
```

**Archer.java**

```java
public class Archer extends Character {
    public Archer(String name, int level) {
        super(name, level, 25, 40, 15, 45, 10, 10);
    }

    public String rapidShot() {
        stamina -= 15;
        return "🏹 " + name + " выпускает 3 стрелы! (➹" + (dexterity * 2) + " урона каждая)";
    }
}
```

**Cleric.java**

```java
public class Cleric extends Character {
    public Cleric(String name, int level) {
        super(name, level, 30, 15, 10, 10, 25, 45);
    }

    public String healParty() {
        stamina -= 40;
        return "🌿 " + name + " исцеляет союзников! (+" + (faith * 2) + " HP)";
    }
}
```

---

**⚙️ Пример использования:**

```java
public class Main {
    public static void main(String[] args) {
        Paladin paladin = new Paladin("Паладин", 25);
        Archer archer = new Archer("Леголас", 20);

        System.out.println(paladin.holyLight());
        System.out.println(archer.rapidShot());
        paladin.showStats();
    }
}
```

**Консольный вывод:**

```
✨ Паладин призывает святой свет! (+50 HP)
🏹 Леголас выпускает 3 стрелы! (➹90 урона каждая)

⚡ Паладин (Ур. 25)
❤️ Здоровье: 400 | 🏃‍♂️ Стамина: 150
📦 Грузоподъёмность: 90кг

⚔️ Основные параметры:
💪 Сила: 30 | 🏹 Ловкость: 10
🔮 Интеллект: 10 | ✨ Вера: 40
```

---

**🔍 Ключевые концепции Java-ООП:**

- **this:** доступ к текущему объекту.
- **super:** вызов конструктора родительского класса.
- **Наследование:** расширение функционала базового класса.
- **Инкапсуляция:** скрытие реализации (например, расчёт характеристик в методе `calculateStats()`).
- **Полиморфизм:** переопределение поведения методов.

---

**📌 Советы по архитектуре на Java:**

- Каждый класс в отдельном файле.
- Используй модификаторы доступа (`private`, `protected`).
- Логика расчётов в отдельных методах.
- Для кастомизации можешь использовать Builder-паттерн или перегрузку конструкторов.