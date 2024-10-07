import React from 'react';
import Button from "./components/buttons/Button";
import Input from "./components/input/Input";
import Card from "./components/card/Card";
import {FaBeer, FaUser} from "react-icons/fa";

function App() {
    const handleClick = () => {};
    const handleChange = () => {};

  return (
    <div className="App">
        <div className="buttons">
            <Button onClick={handleClick} size='sm' styleType="black">
                black
            </Button>
            <Button onClick={handleClick} size='md' styleType="gray600" disabled>
                disabled
            </Button>
            <Button onClick={handleClick} size='lg' styleType="white" icon={<FaBeer />} iconPosition="left">
                left
            </Button>
            <Button onClick={handleClick} size='xl1' styleType="white" icon={<FaBeer />} iconPosition="right">
                right
            </Button>
        </div>

        <div>
            <Input
                styleType="black"
                placeholder="Введите текст"
                onChange={handleChange}
                icon={<FaUser />}
                iconPosition="left"
            />
            <Input
                styleType="gray600"
                placeholder="Отключенный инпут"
                onChange={handleChange}
                disabled
            />
            <Input
                styleType="white"
                placeholder="С иконкой справа"
                onChange={handleChange}
                icon={<FaUser />}
                iconPosition="right"
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