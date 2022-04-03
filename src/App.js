import "./App.css";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;
