import { useState } from "react";

function App() {
  const [count] = useState(0);

  return (
    <header className="sticky top-0 flex items-center box-border h-18 w-full border-4 p-4 shadow-2xl backdrop-blur-md">
      <h1 className="text-2xl font-bold">Todo List</h1>

      <div className="ms-auto flex items-center gap-2">
        <p className="font-semibold leading-tight">Today</p>
        <p className="text-sm text-gray-500">Nov, 18 2026</p>
        <img src="src/assets/Icon.png" alt="Calendar Icon." className="w-10" />
      </div>
    </header>
  );
}

export default App;
