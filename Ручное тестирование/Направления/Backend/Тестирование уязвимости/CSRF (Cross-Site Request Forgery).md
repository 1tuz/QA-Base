#CSRF #БезопасностьВебПриложений #КроссСайтовыйЗапросФальсификации
### **CSRF (Cross-Site Request Forgery)**

**Пример:** Пользователь авторизован на банковском сайте. Злоумышленник отправляет ему ссылку:

```html
<img src="http://bank.com/transfer?amount=1000&to=attacker_account">
```

При открытии ссылки браузер отправит запрос от имени пользователя, переводя деньги.

**Защита:** Использование CSRF-токенов, проверка реферера, требование повторного ввода пароля.