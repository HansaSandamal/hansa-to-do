import React from 'react';

type ToDoItemProps={
    itemName:string;
}

const ToDoItem:React.FC<ToDoItemProps>=(props)=>{
    const {itemName}=props;
    return(
        <div>
            {itemName}
        </div>

    )
}
export default ToDoItem;