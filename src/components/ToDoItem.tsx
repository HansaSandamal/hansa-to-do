import React from 'react';
import { Button } from 'react-bootstrap';

type ToDoItemProps={
    itemName:string;
    indexNum:number;
    deleteItem:(indexNum:number)=>void;
}

const ToDoItem:React.FC<ToDoItemProps>=(props)=>{
    const {itemName,indexNum,deleteItem}=props;
    return(
        <div className={'item'} >
            {itemName}
            {/*<button  style={{float: 'right', backgroundColor: 'blue', color: 'white'}}>*/}
            {/*    Update</button>*/}
            <button onClick={() => deleteItem(indexNum)} style={{float: 'right', backgroundColor: 'red', color: 'white'}}>
                Delete</button>
        </div>

    )
}
export default ToDoItem;