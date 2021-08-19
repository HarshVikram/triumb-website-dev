import React from 'react';
import Home from "./pages/home/home"
import AuthProvider from "./pages/home/context/AuthProvider";
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Home/>
    </div>
    </AuthProvider>
  );
}

export default App;
