Week29
1.	Можно ли создать несколько контекстов в одном приложении?
Контекстов в приложении может быть несколько. В таком случае, нужно будет создать несколько независимых компонентов.
2.	Можем ли мы влиять на контекст из вложенных компонентов?
Да
3.	Как выбрать компонент, в котором будет определяться контекст?
Сделать для него обертку из контекста в app.js
4.	Возможно ли создать контекст, который доступен только в части приложения?
Да
5.	На каком этапе жизненного цикла компонента лучше всего запросить данные с сервера? componentDidMount

6.	Вернёт ли сообщение об ошибке Fetch API, если код ответа 401 (ошибка авторизации)? 401 фетч считает валидной и нужно добавлять еще одну проверку и насильно выводить ошибку при таких ответах
7.	Каким ещё способом можно делать запросы к API кроме fetch?
XMLHttpRequest, Axios, graphql
8.	Зачем нужен CORS? Cross-Origin Resource Sharing (совместное использование ресурсов между разными источниками), является механизмом безопасности, который позволяет веб-приложениям в одном домене запрашивать ресурсы (например, данные API) с другого домена.
