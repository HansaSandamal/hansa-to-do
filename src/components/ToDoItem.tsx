import React from 'react';
import { Button } from 'react-bootstrap';

type ToDoItemProps={
    itemName:string;
}

const ToDoItem:React.FC<ToDoItemProps>=(props)=>{
    const {itemName}=props;
    return(
        <div className={'item'} >
            {itemName}
            <button  style={{float: 'right', backgroundColor: 'blue', color: 'white'}}>
                Update</button>
            <button  style={{float: 'right', backgroundColor: 'red', color: 'white'}}>
                Delete</button>
        </div>

    )
}
export default ToDoItem;