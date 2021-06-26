import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

type InputFieldProps = {
    setItem: (value: string) => void;
}
const InputField: React.FC<InputFieldProps> = (props) => {
    const {setItem} = props;
    const [item, setNewItem] = useState('');


    const handleClick = () => {
        setItem(item);
        setNewItem("");
    }

    return (

        <div className={'textField'}>
            <input className='input' type="text" value={item} onChange={e => setNewItem(e.target.value)}
                   placeholder={'Enter Items'}/>
            <Button className='btn' onClick={handleClick}>Add</Button>
        </div>
    )
}
export default InputField;