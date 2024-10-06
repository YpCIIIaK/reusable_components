import React from 'react';
import Button from "./components/buttons/Button";
import Input from "./components/input/Input";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
        <div className="buttons">
            <Button styleType="black">Try out</Button>
            <Button styleType="gray600">Try out</Button>
            <Button styleType="white">Try out</Button>
        </div>

        <div>
            <Input
                styleType='black'
                placeholder='Enter text'
            />
            <Input
                styleType='gray600'
                placeholder='Enter text'
            />
            <Input
                styleType='white'
                placeholder='Enter text'
            />
        </div>

        <div>
            <Card
                title="Card Title"
                content="This is content inside the card."
                styleType="black"
                size='sm'
            />
            <Card
                title="Card Title"
                content="This is content inside the card."
                styleType="gray600"
                size='md'
            />
            <Card
                title="Card Title"
                content="This is content inside the card."
                styleType="white"
                size='lg'
            />
        </div>
    </div>
  );
}

export default App;