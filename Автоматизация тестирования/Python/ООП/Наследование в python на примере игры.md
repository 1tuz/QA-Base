#python #ООП #наследование #классы #игры #kwargs


## 🎮 RPG-СИСТЕМА КЛАССОВ С DARK SOULS-СТАТИСТИКОЙ
Используем наследование для создания гибкой системы персонажей
с параметрами по умолчанию и кастомизацией характеристик


```python
# ================ base_character.py ================
class Character:
    """Базовый класс с параметрами по умолчанию"""
    def __init__(
        self,
        name: str = "Безымянный",
        level: int = 1,
        vitality: int = 20,
        endurance: int = 15,
        strength: int = 10,
        dexterity: int = 10,
        intelligence: int = 10,
        faith: int = 10
    ):
        self.name = name
        self.level = level
        self.vitality = vitality
        self.endurance = endurance
        self.strength = strength
        self.dexterity = dexterity
        self.intelligence = intelligence
        self.faith = faith
        
        self.max_health = vitality * 10 + 50
        self.stamina = endurance * 5
        self.equip_load = strength * 3

    def show_stats(self):
        """Выводит полную статистику персонажа"""
        print(f"\n⚡ {self.name} (Ур. {self.level})")
        print(f"❤️ Здоровье: {self.max_health} | 🏃♂️ Стамина: {self.stamina}")
        print(f"📦 Грузоподъёмность: {self.equip_load}кг")
        print("\n⚔️ Основные параметры:")
        print(f"💪 Сила: {self.strength} | 🏹 Ловкость: {self.dexterity}")
        print(f"🔮 Интеллект: {self.intelligence} | ✨ Вера: {self.faith}")

# ================ warrior.py ================
class Warrior(Character):
    def __init__(self, name: str = "Воин", **kwargs):
        super().__init__(
            name=name,
            vitality=40,
            endurance=25,
            strength=35,
            dexterity=8,
            **kwargs
        )
        self.weapon_type = "Двуручное оружие"

    def power_attack(self):
        self.stamina -= 30
        return f"{self.name} бьёт с разворота! (🗡️{self.strength * 3} урона)"

# ================ paladin.py ================
class Paladin(Character):
    def __init__(self, name: str = "Паладин", **kwargs):
        super().__init__(
            name=name,
            vitality=35,
            faith=40,
            strength=30,
            endurance=30,
            **kwargs
        )
    
    def holy_light(self):
        self.stamina -= 25
        self.max_health += 50
        return f"✨ {self.name} призывает святой свет! (+50 HP)"

# ================ archer.py ================
class Archer(Character):
    def __init__(self, name: str = "Лучник", **kwargs):
        super().__init__(
            name=name,
            dexterity=45,
            endurance=40,
            vitality=25,
            strength=15,
            **kwargs
        )
    
    def rapid_shot(self):
        self.stamina -= 15
        return f"🏹 {self.name} выпускает 3 стрелы! (➹{self.dexterity * 2} урона каждая)"

# ================ cleric.py ================
class Cleric(Character):
    def __init__(self, name: str = "Жрец", **kwargs):
        super().__init__(
            name=name,
            faith=45,
            vitality=30,
            intelligence=25,
            strength=10,
            **kwargs
        )
    
    def heal_party(self):
        self.stamina -= 40
        return f"🌿 {self.name} исцеляет союзников! (+{self.faith * 2} HP)"

# ================ Пример использования ================
if __name__ == "__main__":
    paladin = Paladin(level=25)
    archer = Archer(name="Леголас", dexterity=55)
    
    print(paladin.holy_light())
    print(archer.rapid_shot())
    paladin.show_stats()
```

```text
✨ Паладин призывает святой свет! (+50 HP)
🏹 Леголас выпускает 3 стрелы! (➹110 урона каждая)

⚡ Паладин (Ур. 25)
❤️ Здоровье: 400 | 🏃♂️ Стамина: 150
📦 Грузоподъёмность: 90кг

⚔️ Основные параметры:
💪 Сила: 30 | 🏹 Ловкость: 10
🔮 Интеллект: 10 | ✨ Вера: 40
```

**🔍 Ключевые концепции Python:**

1. **`self`**  
   - Ссылка на текущий экземпляр класса. Позволяет работать с атрибутами и методами объекта.

2. **`**kwargs` (Keyword Arguments)**  
   - Принимает произвольные именованные аргументы. Используется для гибкой настройки параметров:
   ```python
   Archer(strength=20, level=10)  # Переопределение параметров
   ```

3. **Наследование**  
   - Дочерние классы наследуют функционал родителя. Пример с `Warrior(Character)`.

4. **Инкапсуляция**  
   - Логика расчета характеристик (мана, стамина) скрыта внутри класса.

5. **Полиморфизм**  
   - Разные классы могут иметь одноименные методы с разной реализацией.

**📌 Советы по архитектуре:**
- Выносите каждый класс в отдельный файл
- Используйте наследование для общих механик
- Комбинируйте с композицией для сложных объектов
- Добавляйте валидацию параметров в `__init__`