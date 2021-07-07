import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="App">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <button
        type="button"
        className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
      >
        Click me
      </button>
    </div>
  );
}

export default App;
