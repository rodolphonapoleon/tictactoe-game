import "./App.css";
import Board from "./components/board";
function App() {
  return (
    <>
      <div className="title">TIC TAC TOE</div>
      <div className="game">
        <Board></Board>
      </div>
    </>
  );
}

export default App;
