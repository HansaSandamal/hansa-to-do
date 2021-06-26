import React, {useState} from 'react';
import InputField from '../components/InputField';
import ToDoItem from '../components/ToDoItem';
import Header from '../layouts/Header';

const Home: React.FC = () => {
    // const [item,setItem]=useState('');
    const [itemList, setItemList] = useState<string[]>([]);
    const setItem = (value: string) => {
        setItemList([...itemList, value]);
    }
    const renderItem = () => {
        return itemList.map((item: string) => <ToDoItem itemName={item}/>
        )
    }
    return (
        <div>
            <Header/>
            <InputField setItem={setItem}/>
            {
                renderItem()
            }
        </div>
    )
}
export default Home;


