

#mobile #QA #Android #iOS #Lifecycle

📌 **1. Жизненный цикл в Android**

Основные состояния `Activity`:

- **onCreate()** – инициализация (создание UI, загрузка данных).
- **onStart()** – приложение становится видимым.
- **onResume()** – активно (взаимодействие с пользователем).
- **onPause()** – приложение уходит в фон (но может вернуться без пересоздания).
- **onStop()** – полностью скрыто, но процесс жив.
- **onDestroy()** – окончательное уничтожение (по инициативе системы или юзера).

Дополнительно:

- **ViewModel + SavedStateHandle** – сохраняем данные при изменении конфигурации.
- **LifecycleObserver** – подписка на события жизненного цикла.
- **Foreground/Background Service** – работа в фоне (музыка, трекинг).

---

📌 **2. Жизненный цикл в iOS**

Основные состояния `UIApplication`:

- **not running** – приложение закрыто, процесс отсутствует.
- **inactive** – UI загружен, но взаимодействие невозможно (например, при звонке).
- **active** – приложение в фокусе, пользователь взаимодействует.
- **background** – свернуто, но выполняет задачи (по разрешению OS).
- **suspended** – процесс в памяти, но код не выполняется (быстрое восстановление).

Ключевые методы `AppDelegate`:

- **application(_:didFinishLaunchingWithOptions:)** – запуск.
- **applicationDidBecomeActive()** – переход в активное состояние.
- **applicationWillResignActive()** – потеря фокуса.
- **applicationDidEnterBackground()** – уход в фон.
- **applicationWillTerminate()** – завершение.

Дополнительно:

- **SceneDelegate (iOS 13+)** – управление окнами и сценами.
- **Background Modes** – задачи в фоне (вызовы, музыка, геолокация).

---

📌 **3. Особенности работы в фоне**

🔹 **Android**

- Foreground Service – активные фоновые задачи.
- WorkManager – отложенные фоновые задачи.
- Doze Mode – ограничения при простое.
- Battery Optimization – авто-убийство фоновых процессов.

🔹 **iOS**

- Background Fetch – периодическое обновление данных.
- Push Notifications – запуск приложения через silent push.
- VoIP, Audio, Location – фоновые режимы с ограничениями.rest