import React, {useState} from 'react';
import InputField from '../components/InputField';
import ToDoItem from '../components/ToDoItem';

import Header from '../layouts/Header';

const Home: React.FC = () => {

    const [itemList, setItemList] = useState<string[]>([]);
    const setItem = (value: string) => {
        setItemList([...itemList, value]);
    }
    const deleteItem = (indexNum: number) => {
        let items =itemList.filter((item: string, index:number) => indexNum !== index);
        return setItemList(items)
    }
    const renderItem = () => {
        return itemList.map((item: string, index:number) => <ToDoItem itemName={item} indexNum={index} deleteItem={deleteItem}/>
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


