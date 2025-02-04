#mobile #тестирование #гайдлайны

📌 **1. Дизайн (UI/UX)**

- **Android:** Material Design — карточки, FAB-кнопки, тени, анимации.
- **iOS:** Human Interface Guidelines — четкая типографика, прозрачность, глубина.
- **Глобально:** соблюдение **нативных паттернов**, адаптация под **разные экраны, ориентацию.**

📌 **2. Навигация**

- **Android:** Bottom Navigation, Navigation Drawer, Back Button (системный).
- **iOS:** Tab Bar, Navigation Bar, жесты (swipe back).
- **Важно:** следить за **логикой переходов**, состоянием **back stack**.

📌 **3. Разрешения и безопасность**

- **Android:** Runtime Permissions, Scoped Storage, SafetyNet.
- **iOS:** Privacy Manifest, App Tracking Transparency (ATT).
- Проверять **диалоговые окна**, отказ от разрешений, поведение при **ограниченных правах**.

📌 **4. Жесты и анимации**

- **Android:** MotionLayout, Lottie, Shared Element Transition.
- **iOS:** UIKit Dynamics, Core Animation, haptic feedback.
- Тестировать: **swipe, pinch, long press, force touch**.

📌 **5. Производительность и энергопотребление**

- **Android:** Profiler, Battery Historian, WorkManager.
- **iOS:** Instruments, Background Modes, Low Power Mode.
- Проверять **нагрузку на CPU/GPU, фоновую работу, многозадачность**.

📌 **6. Сетевые запросы и API**

- **Android:** Retrofit, WorkManager, OkHttp.
- **iOS:** URLSession, Combine, Alamofire.
- Тестировать **обрыв сети, работу с кэшем, задержки запросов**.

📌 **7. Обновления и совместимость**

- **Android:** In-App Updates API, проверка старых API на новых версиях OS.
- **iOS:** TestFlight, backward compatibility для старых iOS.
- Следить за **откатами обновлений, миграцией данных**.

📌 **8. Логирование и краш-репорты**

- **Android:** Logcat, Firebase Crashlytics, Sentry.
- **iOS:** Xcode Console, App Store Connect, Sentry.
- Важно **логировать ключевые события, тестировать обработку ошибок**.

📌 **9. Локализация**

- Проверка **LTR/RTL**, языковых переключателей, адаптации UI.
- **Android:** res/values-XX, LocaleConfig.xml.
- **iOS:** NSLocalizedString, Xcode Localizations.

📌 **10. Push-уведомления**

- **Android:** FCM, foreground/background delivery, deep links.
- **iOS:** APNs, silent notifications, критические уведомления.
- Проверять **появление, действия с уведомлений, реакцию на разные состояния приложения**.