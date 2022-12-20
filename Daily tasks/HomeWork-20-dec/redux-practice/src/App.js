import { useDispatch, useSelector } from "react-redux";
import { increment } from "./reducer";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
    </div>
  );
}

export default App;
