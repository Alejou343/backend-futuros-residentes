import React from 'react';

const ApplicationCard = (props) => {

    const deleteItem = (ID) => {
        const items = [...props.context.state];
        items.splice(ID-1, 1);
        setTimeout(() => {
            props.context.setState(items);
        }, 100);
    }

    return (
        <div className="mb-0.5 relative rounded-lg flex justify-between items-center w-9/12 border-2 mx-auto p-8 h-16">
            <span className="w-full font-bold">{props.id}</span>
            <span className="w-full flex justify-start">{props.name}</span>
            <span className="w-full flex justify-center">{props.category}</span>
            <p className='w-full flex justify-end cursor-pointer'>
                <img 
                onClick={() => deleteItem(props.id)}
                src="https://img.icons8.com/?size=1x&id=84930&format=png" 
                alt="deleteIcon.png" 
                />
            </p>
        </div>
    );
}

export default ApplicationCard;