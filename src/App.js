import React, {useState} from 'react';
import Button from "./components/buttons/Button";
import Input from "./components/input/Input";
import Card from "./components/card/Card";
import {FaBeer, FaCheckCircle, FaExclamationCircle, FaShoppingCart, FaUser} from "react-icons/fa";
import Link from "./components/links/link";
import Alert from "./components/alert/Alert";
import Accordion from "./components/accordeon/Accordeon";
import Dropdown from "./components/dropdown/Dropdown";
import Modal from "./components/modal/Modal";
import Bage from "./components/bage/Bage";
import Avatar from "./components/avatar/Avatar";
import Carousel from "./components/carousel/Carousel";
import Navbar from "./components/navbar/Navbar1";

function App() {
    const handleClick = () => {};
    const handleChange = () => {};

    const handleCardClick = () => {};

    const handleButtonClick = (e) => {};

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleLinkClick = () => {};

    const items = [
        { title: 'Section 1', content: 'Content for section 1' },
        { title: 'Section 2', content: 'Content for section 2' },
        { title: 'Section 3', content: 'Content for section 3' },
    ];

    const carouselItems = [
        <div className="bg-red-500 h-32 flex items-center justify-center text-white">Item 1</div>,
        <div className="bg-blue-500 h-32 flex items-center justify-center text-white">Item 2</div>,
        <div className="bg-green-500 h-32 flex items-center justify-center text-white">Item 3</div>,
        <div className="bg-yellow-500 h-32 flex items-center justify-center text-white">Item 4</div>,
    ];

    return (
        <div className="App">
            <div>
                <Navbar
                    logo="MyLogo"
                    links={['Home', 'About', 'Services', 'Contact']}
                    styleType="black"
                    onLinkClick={handleLinkClick}
                />
            </div>

            <div className="mx-2">
                <Button onClick={handleClick} size='sm' styleType="black">
                    black
                </Button>
                <Button onClick={handleClick} size='md' styleType="gray600" disabled>
                    disabled
                </Button>
                <Button onClick={handleClick} size='lg' styleType="white" icon={<FaBeer/>} iconPosition="left">
                    left
                </Button>
                <Button onClick={handleClick} size='xl1' styleType="white" icon={<FaBeer/>} iconPosition="right">
                    right
                </Button>
            </div>

            <div>
                <Input
                    styleType="black"
                    placeholder="Введите текст"
                    onChange={handleChange}
                    size='sm'
                    icon={<FaUser/>}
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
                    icon={<FaUser/>}
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
                    onClick={handleCardClick}
                >
                    <Button
                        styleType="white"
                        onClick={handleButtonClick}
                        icon={<FaShoppingCart/>}
                    >
                        Добавить
                    </Button>
                </Card>
                <Card
                    title="Товар 2"
                    content="Описание товара 2"
                    styleType="gray600"
                    size="lg"
                    imageSrc="https://via.placeholder.com/400"
                    onClick={handleCardClick}
                >
                    <Button
                        styleType="gray600"
                        onClick={handleButtonClick}
                    >
                        Добавить
                    </Button>
                </Card>
                <Card
                    title="Товар 3"
                    content="Описание товара 3"
                    styleType="white"
                    size="sm"
                    imageSrc="https://via.placeholder.com/200"
                    onClick={handleCardClick}
                >
                    <Button
                        styleType="black"
                        onClick={handleButtonClick}
                        icon={<FaShoppingCart/>}
                        iconPosition="right"
                    >
                        Добавить
                    </Button>
                </Card>
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

            <div>
                <Alert type="success" icon={<FaCheckCircle/>}>
                    Success
                </Alert>
                <Alert type="error" icon={<FaExclamationCircle/>}>
                    Error
                </Alert>
                <Alert type="warning" icon={<FaExclamationCircle/>}>
                    Warning
                </Alert>
                <Alert type="info">
                    Info
                </Alert>
            </div>

            <div className='m-2'>
                <Accordion items={items}/>
            </div>

            <div>
                <Dropdown
                    options={[
                        {label: 'Option 1', value: '1'},
                        {label: 'Option 2', value: '2'},
                        {label: 'Option 3', value: '3'},
                    ]}
                    placeholder="Choose an option"
                    onChange={(option) => console.log(option)}
                    size="md"
                />
            </div>

            <div className='mx-2'>
                <Button onClick={openModal} styleType="black" size="md">
                    Open Modal
                </Button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2 className="text-xl mb-4">Modal Title</h2>
                    <p>This is the modal content.</p>
                    <Button onClick={closeModal} styleType="black" size="md">
                        Close
                    </Button>
                </Modal>
            </div>

            <div className='m-2'>
                <Bage styleType='black' size='md'>
                    <h1>New</h1>
                </Bage>
            </div>

            <div className="bg-blue-300">
                <Avatar
                    src="https://via.placeholder.com/150"
                    alt="Someone"
                    size="lg"
                    onClick={() => console.log('Avatar clicked!')}
                    border={true}
                    styleType="rounded"
                />

                <Avatar
                    alt="Vova"
                    size="lg"
                    onClick={() => console.log('Avatar clicked!')}
                    border={true}
                    styleType="rounded"
                />
            </div>

            <div>
                <Carousel items={carouselItems} itemsToShow={1} showArrows={true}/>
            </div>
        </div>
    );
}

export default App;