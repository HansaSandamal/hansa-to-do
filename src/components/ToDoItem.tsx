import React from 'react';
import { Button } from 'react-bootstrap';

type ToDoItemProps={
    itemName:string;
}

const ToDoItem:React.FC<ToDoItemProps>=(props)=>{
    const {itemName}=props;
    return(
        <div >
            {itemName}
            {/*<Button>Update</Button>*/}
            {/*<Button>Delete</Button>*/}
        </div>

    )
}
export default ToDoItem;