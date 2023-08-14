Week28

1. В чём разница между контролируемыми и неконтролируемыми компонентами?
   Элементы (форм), чьи данные хранятся в состоянии React, называются управляемыми компонентами (controlled components). Uncontrolled component - это компонент, состояние которого не контролируется React. Вместо использования состояния и обработчиков событий React, данные из элементов формы (например, текст из поля ввода) извлекаются напрямую из DOM после того, как пользователь совершил действие (например, отправил форму).

У управляемых или контролируемых компонентов есть атрибут их текущего состояния и метод, вызывающийся при их изменении.
Это существенно упрощает задачу проверки вводимых значений в инпуты

2. Есть ли смысл использовать метод `shouldComponentUpdate()` в `PureComponent`?
   Нет, не имеет смысла, потому что этот метод уже реализован внутри PureComponent
3. .Будет ли перерисовываться данный компонент? `jsx
 class PureComponent extends React.PureComponent {
   state = {
     item: {
  count:0
  },
   }      handleClick= () =>  {
     const item = this.state.item;
     item.count = this.state.item.count ++ ;
     this.setState({item});
   }
   render() {
     return <h2>{this.state.item.count}</h2>
   }
 }
 `
   Да, при вызове handleClick
4. Что будет, если чекбоксу не передать свойство '`checked`'?

- он будет работать как uncontrolled component и может управляться через DOM

5.  В чём главное преимущество использования `PureComponent`?
    автоматическая оптимизация процесса перерисовки компонентов. Если состояния props и state не изменились, Pure Component не будет делать рендер.
6.  . Что будет, если компоненту `input` передать метод `onChange`, но не передать `value`?

- это будет uncontrolled component и реакт не сможет управлять value
  А что будет, если компоненту `input` передать `value`, но не передать метод `onChange`? Не будет возможности изменять это поле

7. Как сделать из обычного `select` список с несколькими выбранными значениями (мультиселект)?
   <select multiple={true}, в value передавать массив выбраных значений option
8. Напишите пример валидации текстового поля на React, чтобы оно было не пустым.

import React, { useState } from 'react';

export default function MyInput(){
const [ inputValue, setInputValue ] = useState(''); const handleChange = ( e ) => {
/.+/.test(e.target.value)&&setInputValue(e.target.value);
}; return(
<input type="text" onChange = { handleChange } value = { inputValue }/>
);

9. Приведите пример простейшей формы логина на сторонних компонентах (Formic, Material или Bootstrap на ваш выбор).import React, { useState } from 'react';
   import { Container, Form, Button } from 'react-bootstrap';
   function LoginForm() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const handleLogin = () => {
   console.log('Email:', email);
   console.log('Password:', password);
   };
   return (
   <Container className="mt-5">
   <Form>
   <Form.Group controlId="email">
   <Form.Label>Email</Form.Label>
   <Form.Control
   type="email"
   placeholder="Введите email"
   value={email}
   onChange={(e) => setEmail(e.target.value)}
   />
   </Form.Group>
   <Form.Group controlId="password">
   <Form.Label>Пароль</Form.Label>
   <Form.Control
   type="password"
   placeholder="Введите пароль"
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   />
   </Form.Group>
   <Button variant="primary" onClick={handleLogin}>
   Войти
   </Button>
   </Form>
   </Container>
   );
   }
   export default LoginForm;
