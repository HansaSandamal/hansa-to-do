import React, { useState } from 'react';
import InputField from '../components/InputField';
import ToDoItem from '../components/ToDoItem';
import Header from '../layouts/Header';

const Home: React.FC = () => {
    const [item,setItem]=useState('');
    return (
        <div>
            <Header/>
            <InputField setItem={setItem}/>
            <ToDoItem itemName={item}/>
        </div>
    )
}
export default Home;