
https://novosibirsk.hh.ru/vacancy/118347515?hhtmFrom=employer_vacancies

##### **Актуализация и поддержка тестовой модели + знание TMS (желательно TestIT)**
Обновляю тесты, когда появляются изменения в функционале или бизнес-логике. Делал регрессы, тест планы внесение тест-кейсов для проверки функционала на регрессе.

##### **Знание баг-трекинг систем (Jira)**
Создание тасок, настройка приоритетов, работа с эпиками. Использую её для отслеживания багов, создания зависимостей между задачами, для отчетности. Работал со Scrum досками, статусами задач, интеграцией (Git, confluence).
##### **Знание клиент-серверного взаимодействия**

**Клиент-сервер — это когда у тебя есть фронт и бэк.**

1. **Фронт** – мобильное приложение или веб-страница. Оно отправляет запросы на сервер.
2. **API** – мостик между фронтом и бэком. Форматы: REST, GraphQL, gRPC. Инструменты: Postman, Swagger.
3. **Бэк** – сервер, который принимает запросы и работает с базами, логикой и т.д.
    - Код (например, на Java, Python, Node.js).
    - База данных (SQL – PostgreSQL/MySQL, NoSQL – MongoDB/Redis).
    - Очереди сообщений (Kafka, RabbitMQ) – если надо обрабатывать данные асинхронно.
    - Кэширование (Redis, Memcached) – чтобы работало быстрее.
4. **Облако** – сервера, базы и хранилища в AWS/GCP/Azure.

Если коротко, клиент отправляет запрос → API передаёт на бэк → бэк обрабатывает → лезет в базу → даёт ответ. 
[[Структура клиент-серверной архитектуры]]
[[Архитектуры API]]
##### **Знание микросервисной архитектуры**

На каждой работе были микросервисы и высокая нагрузка.

**Микросервисная архитектура — это когда приложение не одной кучей, а разбито на мелкие независимые сервисы.**

1. **Каждый микросервис – это отдельная мини-программа**, которая делает свою работу (например, один отвечает за платежи, другой – за авторизацию).
2. **Они общаются друг с другом через API** (обычно REST, gRPC, очереди Kafka/RabbitMQ).
3. **Если один упал – остальные продолжают работать** (в отличие от монолита, где всё рушится).
4. **Разрабатывать и обновлять можно по отдельности** – удобно для больших команд.
5. **Деплой и масштабирование** – можно нагрузить только нужные части системы (например, если на платежи большая нагрузка, увеличиваем только этот сервис).

Главное – это **разделение, независимость и удобство масштабирования**.
##### **Опыт взаимодействия с внешними (относительно окружения микросервиса) системами + опыт интеграционного тестирования**

Ну вот недавно было. Моя команда переводит свой функционал из WebView (то есть веба) на натив (на Android и iOS) - компоненты. И этот, как бы, апдейт, он сильно аффектит некоторые другие команды. И вот эти команды, они тоже заинтересованы в том, чтобы проверить то, что все работает нормально. Мы тестировщики, из нескольких команд, все вместе проходим тест-кейсы, для того, чтобы сделать регрессионное и со своей стороны выявить наличие возможных ошибок или рисков. Ну или их отсутствие.

Иногда 2 или 3 команды могут совместный функционал делать в рамках спринта или нескольких кварталов. 

Изначально я составлял тест-кейсы ,исходя из того, что мне нужно проверить. Для этого мне пришлось почитать документацию в конфлюенсе, написанную моим системным аналитиком. Эта документация, она про бизнес-логику прежде всего, про взаимодействие между микросервисами различными и тому, какие там данные должны входить, какие выходить из одного микросервиса в другой, и каким образом маппиться. 

Плюс смотрел макеты Figma, то есть как экраны выглядят на фронте UI, и еще там же кейсы позитивные, негативные.  Большинство были описаны.

После этого всего я написал тест-кейсы, я потом показал своему системному аналитику из команды. Он посмотрел, сказал: «Да, норм" и пару правок там каких-то сказал сделать, не помню уже. 

После этого я писал главному бизнес-аналитику в Доме, он валидировал мои тест-кейсы, и там тучу правок всяких еще внес.

Так вот, после этого всего, я получил аппрув от главного бизнес-аналитика по этим тест-кейсам. И, по сути, ими пользовались другие тестировщики из других команд. **Я** это делал, потому что моя команда функционал меняла.


##### **Формирование отчетов по результатам тестирования**

**Отчеты**: берешь, пишешь тест-кейсы, затем тестируешь какой либо функционал, проставил статусы по типу “пройдено”, “не пройдено”, все протыкал, весь тест-план завершается и вот тебе отчет. В TestIT все это оформляем.  

**Баг-репорт**. Я делаю как. Я иду в треккер. Создаю таску. Т.к. баг репорт похож на тест-кейс. Предусловия, шаги и ожидаемый рез можно просто скопировать с тест-кейса.

Например не совпал ожидаемый рез: добавляем атрибут - фактический рез и пишем, что кнопка не работает. 

Далее, добавляю заголовок по формуле где? что? когда? (при каких условиях)

Авторизация. При вводе некорректных данных не происходит то-то 

Можно добавить окружение: операционка, версия браузера, разрешение экрана, версию браузера если это сайт

На мобилке: это ОС, версия ОС, марка модель устр-ва, версия приложения

Можно добавить скрин или запись экрана

##### **Умение анализировать логи (браузера и сервера)**

 **Логи браузера (Frontend)**
 
Смотрим в **DevTools (F12 → Console/Network)**:
1. **Ошибки в консоли** (красные) – например, `Uncaught TypeError: Cannot read property 'name' of undefined`.
2. **Запросы в Network** – отправляются ли, какие статусы (`200 OK` – норм, `500` – сервер упал, `404` – не нашли).
3. **Ответы от сервера** – корректные ли данные приходят или там ошибка.
4. **Performance** – долго грузится? Где затык?

**Алгоритм работы**:

- **Шаг 1**: Найдите ошибку или проблему.
- **Шаг 2**: Проверьте логи браузера для обнаружения JavaScript-ошибок, запросов, которые не были выполнены или вернули ошибку.
- **Шаг 3**: Перейдите к логам сервера для получения более подробной информации о запросах, связанных с ошибками.
- **Шаг 4**: Анализируйте таймлайны и зависимости между запросами, чтобы найти узкие места и проблемы с производительностью.
##### **MQ: Желателен опыт работы с kafka**
Kafka - не тестил, но знаю что это для асинхронности и отказоустойчивости(если сервис упал, но к нему идут сообщения - они дойдут до сервиса когда он поднимется). Если бы надо было тестить - можно  посмотреть события в условной кибане, по айдишнику для проверки корректности обработки данных и их состояния в процессе передачи через Kafka.
##### **Знакомство с jenkins\teamcity\иной инструмент**

Знаком, но в основном это автотестеры используют. Для автоматизации сборки, тестирования, развертывания, запуска тестов.
 
 **Jenkins**

 **Ключевые возможности:**
✔ Автоматизация сборки, тестирования и развертывания.  
✔ Поддержка **плагинов** (Git, Docker, Kubernetes и др.).  
✔ Работа с **Jenkinsfile** (Pipeline-as-Code).  
✔ Запуск тестов (юнит, интеграционные, автотесты).  
✔ Поддержка **параллельных билдов**.

**Как работает Jenkins:**
1. Код коммитится в репозиторий (**Git**).  
2.  Jenkins триггерит билд (например, через **webhook**).  
3. Запускается **сборка проекта**.  
4. Выполняются тесты (**Selenium, Pytest, JUnit**).  
5. Развёртывание на сервер (если билд успешен).

[[Конфигурация GitLab CI для автотестов на Python]]
##### **k8s (kubernetes\openshift), управление микросервисами (deployment\help\configmap), управление окружением (env-config) (необязательно) (фикс).**

Работал с кубером, но редко и через UI-сервис Platform. В основном когда разработчик был занят, а наша апишка легла и надо было её передеплоить
Раскатывал протестированную версию апишки в прод, запуская деплой её актуальной версии

(Я через UI с кубер работаю. Запускаю деплои микросервисов, чтоб проверить функционал на тесте , а затем и на прод деплой делаю. Сервис UI-ный называется platform.)

[[Флоу работы с задачей от начала до раскатки]]
##### **Знакомство с git\bitbucket\иной инструмент (необязательно).**

**Система контроля версий** — отслеживает изменения в коде, хранит историю, позволяет делать откаты. Побегать по версиям, поискать где зародилась проблема. 

**Пример:**
Приходит второй чел на работу, делается ответвление. Каждый вносит свои правки и обновления. Когда приходит время объединять, то версия, на которой мы разветвились берется за главную. Затем каждый отдает свою версию на главную версию. Если файлы не сходятся (по коду) то он просто объединит, оставив все. Если есть одинаковые строки, то он просто спросит, чью строку оставить. 
Если получилось не очень, то просто можно откатиться на изначальную или последнюю актуальную версию и переделываем. 

[[Git(система контроля версий)]]
##### **Приветствуется: опыт ведения демо\ПСИ для бизнес-заказчиков (фикс)**

Демонстрацию, как правило, может провести кто угодно, в основном это даже дизайнер делает. Ему разработчики рассказывают под какой фича веткой какую версию приложения открыть и короче, он показывает функционал. 

Но я, как тестировщик тоже могу такую демо-сессию провести, так как я уже хорошо знаком с функционалом и протестировал его в разных сценариях. На демо, как правило показываются ключевые позитивные и негативные сценарии, а так же я  могу объяснить особенности работы системы, основываясь на проведенных тестах."

Касательно конкретно меня, то да, проводил, раз 10 так точно. В конце спринта, как правило. Ничего особенного такого не могу по этому поводу сказать. Просто рассказывал функционал, показывал экран, да и все.
##### **Присутствует опыт тестирования backend операций / api**
Через постман. Проверяю корректности ответов (статус-коды, формат данных), обработку ошибок и тестирование граничных случаев.
##### **Присутствует опыт работы с БД SQL, соединение 2-х и более таблиц джоинами и подзапросами**

**Использую для проверки данных, которые система отображает пользователю, и того, что реально хранится в базе. 

- Суммы задолженности, платежей, начисленных процентов.
- Корректность статусов (например, "В грейсе", "Просрочено", "Закрыто").
- Даты списания платежей и окончания беспроцентного периода.
- Информацию по корзинам задолженности (правильно ли распределены транзакции).

  
**Агрегатные функции:**
Я их никогда не использовал. Я не ищу именно по числовым значениям, потому что они мне не нужны. Мне обычно больше нужны какие-то кодировки, то есть код кредитного продукта. Там оно все вперемешку и с буквами и цифрами написано.

Но там этих функций 5 штук: аверага, count, minmax и sum.

**Как их можно использовать**. 
Например, есть какой-то тип данных Big int, то есть целое численное значение. И вот колонка с таким типом данных может называться баланс, например, баланс на карте. И ты ищешь по этому минимальную сумму какую-то или максимальную или среднюю.


- **Джойны** используются, когда нужно объединить данные из нескольких таблиц, например, для проверки связей между сущностями.

- **Подзапросы** помогают делать сложные фильтрации или агрегирования без необходимости создавать отдельные таблицы или временные результаты.
Подзапрос — это запрос, вложенный в другой запрос. Они могут быть использованы для фильтрации данных, агрегации или в выражениях.



[[SQL(Базы данных)]]
##### **Глубокое понимание рестфул сервисов**

**Клиент и сервер не зависят друг от друга**
**Единый интерфейс для всех**
**Сервер не хранит состояние, это может делать только клиент**
**Сервер указывает, может ли клиент кэшировать ответ**
**REST организует доступ к ресурсам через понятные URL и стандартные методы запросов (REST основан на доступе к ресурсам)**
**У ресурса должен быть идентификатор**
**Клиент и сервер обмениваются данными в удобном для них формате**
**В REST API данные содержат гиперссылки для навигации**
**Многоуровневая система, где компоненты одного уровня общаются только со следующим уровнем**.
https://docs.google.com/document/d/1HNAbVeX9XCTX8lafF0dgJ_0z4T75dSxo_ZXngSvcEN4/edit?tab=t.0#heading=h.psjvn65tfazp