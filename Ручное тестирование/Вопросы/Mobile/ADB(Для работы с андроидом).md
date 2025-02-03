#adb #тестирование #QA #Android #ручное

🔍 **Основные возможности ADB для ручного тестирования**

📌 **1. Управление устройством**

- Проверка подключения: adb devices
- Перезагрузка устройства: adb reboot
- Установка приложения: adb install your_app.apk
- Удаление приложения: adb uninstall package.name

📌 **2. Логирование и диагностика**

- Вывод логов: `adb logcat`
- Фильтрация логов по тегу: `adb logcat -s`
- Снимок экрана: `adb exec-out screencap -p > screen.png`

📌 **3. Работа с файловой системой**

- Скачивание файлов с устройства: `adb pull /sdcard/path local_path`
- Отправка файлов на устройство: `adb push local_file /sdcard/path`

📌 **4. Работа с оболочкой**

- Вход в shell устройства: `adb shell`
- Стандартные команды командной строки (то же, что и в обычном shell)

📌 **5. Дополнительные команды**

- Бэкап приложения: `adb backup -f backup.ab package.name`
- Восстановление из бэкапа: `adb restore backup.ab`