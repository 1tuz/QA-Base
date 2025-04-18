#pytest #Фикстуры #Видимость #conftest

🔹 **Фикстуры в pytest**  
✅ Фикстуры — это функции, которые могут быть использованы для подготовки данных или состояния, необходимого для тестов.  
✅ Определяются с помощью декоратора `@pytest.fixture`.  
✅ Фикстуры могут быть переданы в тесты как аргументы.  
❌ Если фикстура не используется в тестах, она не будет вызвана.

🔹 **Область видимости фикстуры**  
✅ Устанавливается через параметр `scope`:

- `function` (по умолчанию): создается для каждого теста.
- `module`: создается один раз для модуля.
- `class`: создается один раз для каждого теста в классе.
- `session`: создается один раз на все тесты в сессии. ❌ Неправильная область видимости может привести к лишним вычислениям или некорректным результатам тестов.

🔹 **conftest.py**  
✅ Файл `conftest.py` используется для хранения фикстур, которые могут быть общими для нескольких тестов и модулей.  
✅ В нем можно размещать фикстуры, которые будут доступны во всей директории и вложенных каталогах.  
✅ Не требует импорта в тестах, pytest автоматически находит и использует фикстуры из этого файла.  
❌ Фикстуры из `conftest.py` доступны только в тех каталогах, где он расположен, и в подкаталогах.