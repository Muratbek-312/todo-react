import TodoContextProvider from "./contexts/TodoContext";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <TodoContextProvider>
        <Routes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
