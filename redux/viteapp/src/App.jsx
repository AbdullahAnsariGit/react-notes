import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/counterSlice';
import Profile from './components/Profile';
import Game from './components/Game';
import Card from './components/Card';

function App() {
  // Get data from store using redux
  // const counter = useSelector((store) => store.counter);
  // const dispatch = useDispatch();

  // const store = useSelector((store) => store)
  // Send data to store using redux
  // 2 steps
  // 1 - create a useDispatch hook
  // const dispatch = useDispatch()
  // 2 - using this hook
  // dispatch(increment())

  return (
    <div>
      <h1>Counter: {counter.value}</h1>
      <h1>Name: {counter.name}</h1>
      <Profile />
      <Game />
      <Card />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount({ counter: 5, name: 'Increment By Amount' }))}>Add 5</button>
    </div>
  );
}

export default App;
