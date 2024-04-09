import './App.css';
import { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { TodoList } from './components/TodoList';
import Title from './components/Title';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';

function App() {
  const [text,setText] = useState("");
  const [incompleteTodo,setIncompleteTodo] = useState([]);
  const handleChange = e=>setText(e.target.value);

  const onClickAdd = () => {
    if (text.trim() !== "") {
      const newTodo = { text: text, isStriked: false }; // 新しいtodoをオブジェクトとして作成
      setIncompleteTodo([...incompleteTodo, newTodo]);
      setText("");
    }
  };

  const completeButton = (index)=>{
    const updateTodo = [...incompleteTodo];
    updateTodo[index].isStriked = !updateTodo[index].isStriked;
    setIncompleteTodo(updateTodo);
  }

  const deleteButton = (index)=>{
    const newTodos = [...incompleteTodo];
    newTodos.splice(index,1);
    setIncompleteTodo(newTodos);
  }
 
  
  return (
    <ChakraProvider theme={theme}>
     <Title>Todoアプリ</Title>
     <InputTodo text={text} handleChange={handleChange} onClickAdd={onClickAdd}/>
     <TodoList incompleteTodo={incompleteTodo} completeButton={completeButton} deleteButton={deleteButton}/>
    </ChakraProvider>

    
  
  );
}

export default App;
