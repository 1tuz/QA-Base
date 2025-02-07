

#mobile #QA #Android #iOS #PushNotifications #Пуши

🔹 **Foreground Push** – приходит, когда приложение активно.

- Android: `onMessageReceived()`, iOS: `userNotificationCenter(_:willPresent:)`.
- Показывается вручную или скрыто обрабатывается.

🔹 **Background Push** – приходит, когда приложение свернуто.

- Android: автоотображение с **notification payload** или обработка через `onMessageReceived()`.
- iOS: отображается сразу, обработка данных через **content-available = 1**.

🔹 **Silent Push** – не показывает уведомление, но выполняет действие (синхронизация, обновления).

- Android: **high-priority** FCM (ограничения Doze Mode).
- iOS: `content-available = 1`, выполнение кода ограничено системой.

🔹 **VoIP Push** – для звонков (CallKit, PushKit).

- Работает даже при закрытом приложении.

🔹 **Critical Push** – проигрывает звук даже в беззвучном режиме.

- Требует спец-разрешения от Apple.

🔹 **Push с actions** – кнопки для ответа, лайков и т. д.

- Android: `NotificationCompat.Action`, iOS: `UNNotificationAction`.

🔹 **Push с deep link** – открывает нужный экран.

- Android: `PendingIntent`, iOS: `userInfo["deeplink"]`.