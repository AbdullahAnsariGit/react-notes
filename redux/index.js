{
    user: {
      name: 'Alice',
      isLoggedIn: true
    },
    todos: [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 2, text: 'Write code', completed: true }
    ]
  }
  
import { useSelector } from 'react-redux';

function App() {
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // return(
  //   isLoggedIn ? <Home /> : <Login/>
  // )
  const todos = useSelector((state) => state.todos);
  return(
    {
      todos.map((item) => (
        <h1>{item.text}</h1>
      ))
    }
  )
}