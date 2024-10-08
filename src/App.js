import React from 'react';
import Button from "./components/buttons/Button";
import Input from "./components/input/Input";
import Card from "./components/card/Card";
import {FaBeer, FaUser} from "react-icons/fa";
import Link from "./components/links/link";

function App() {
    const handleClick = () => {};
    const handleChange = () => {};

    const handleCardClick = () => {};

    const handleButtonClick = (e) => {};

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
                size='sm'
                icon={<FaUser />}
                iconPosition="left"
            />
            <Input
                styleType="gray600"
                placeholder="Отключенный инпут"
                onChange={handleChange}
                size='md'
                disabled
            />
            <Input
                styleType="white"
                placeholder="С иконкой справа"
                onChange={handleChange}
                size='lg'
                icon={<FaUser />}
                iconPosition="right"
            />
        </div>

        <div className='flex flex-row'>
            <Card
                title="Товар 1"
                content="Описание товара 1"
                styleType="black"
                size="md"
                imageSrc="https://via.placeholder.com/300"
                buttonLabel="Добавить в корзину"
                onClick={handleCardClick}
                onButtonClick={handleButtonClick}
            />
            <Card
                title="Товар 2"
                content="Описание товара 2"
                styleType="gray600"
                size="lg"
                imageSrc="https://via.placeholder.com/400"
                buttonLabel="Купить"
                onClick={handleCardClick}
                onButtonClick={handleButtonClick}
            />
            <Card
                title="Товар 3"
                content="Описание товара 3"
                styleType="white"
                size="sm"
                imageSrc="https://via.placeholder.com/200"
                buttonLabel="Посмотреть"
                onClick={handleCardClick}
                onButtonClick={handleButtonClick}
            />
        </div>

        <div>
            <Link
                styleType="black"
                onClick={handleClick}
                icon={<span>🔗</span>}
            >
                left black link
            </Link>

            <Link
                styleType="gray600"
                onClick={handleClick}
                icon={<span>⚙️</span>}
                iconPosition="right"
            >
                right link
            </Link>

            <Link
                styleType="white"
                onClick={handleClick}
                disabled
            >
                disabled link
            </Link>

            <Link
                styleType="black"
                icon={<span>🌐</span>}
            >
                без onClick link
            </Link>
        </div>
    </div>
  );
}

export default App;