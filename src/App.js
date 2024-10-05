import React from 'react';
import Button from "./components/buttons/Button";
function App() {
  return (
    <div className="App">
        <div className="buttons">
            <Button styleType="black">Try out</Button>
            <Button styleType="gray600">Try out</Button>
            <Button styleType="white">Try out</Button>
        </div>
    </div>
  );
}

export default App;