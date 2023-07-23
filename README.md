# React-project

Week26

1. Если в этом примере изменить порядок Route таким образом:
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About/>} />
   <Route path="/users" element={<Users />} />
   </Routes>
   то какой компонент будет отрисован по адресу /users? По адресу users будет отрисован компонент <Users />
2. Какое сообщение появится на экране по адресу http://localhost:3000/users/12345
   <Route path='/users/:number' element={<User />} />
   function User(props) {
   const number = props.match.params.number;
   return(
   number===12345
   ? <h1>Моя личная страница</h1>
   : <h1>Страница пользователя {number}</h1>
   ); } Появится <h1>Моя личная страница</h1> т.к строгое сравнение 12345, при других числах появится <h1>Страница пользователя {c другими числами}</h1>
3. Вспомните, какой второй параметр принимает метод map . map принимает item, index and array.
4. Как бы вы подошли к решению задачи по выводу компонентом <CardList> только тех экземпляров компонента <Card>, цена которых не превышает заданную? Через fılter
5. Как задать параметр в пути? Например, filter (useLocation, useSearchParams).
   Использовать библиотеку React Router, import { useLocation } from 'react-router-dom';
6. Какая разница между element и children в указании роутера? В элементе указывается реакт компонент, в children передаются jsx элементы. Element стал использваться в 6 версии
7. Зачем нужен exact? Чтобы избезать потенциальных ошибок при нестрогой проверке path=”/”. Exact – строгая проверка на совпадения
8. Хук useMatch позволяет узнать совпадение маршрута с путем
   useLocation предоставляет доступ к объекту location, содержащему информацию об url и его параметров.
   Хук useNavigate предоставляет функцию для перехода на другой маршрут в приложении. Это позволяет управлять навигацией в React приложении без использования Link
9. Как можно сделать перенаправление на другую страницу по клику на кнопку с помощью useNavigate. В документации рекомендуется использовать redirect, loaders and actions вместо хука useNavigate

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Component() {
const navigate = useNavigate();

const handleButtonClick = () => {
navigate('/other-page');
};

return (
<div>
<button onClick={handleButtonClick}>Other Page</button>

</div>
  );
}
export default Component;
