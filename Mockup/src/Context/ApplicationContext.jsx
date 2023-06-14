import React, { createContext } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {

    const aplicaciones = [
        {name: 'Whatsapp', category: 'Mensajería'},
        {name: 'Facebook', category: 'Redes Sociales'},
        {name: 'Netflix', category: 'Entretenimiento'},
        {name: 'HBO Max', category: 'Entretenimiento'},
    ]

    const [state, setState] = React.useState(aplicaciones);
    const [newName, setNewName] = React.useState('');
    const [newCategory, setNewCategory] = React.useState('');

    const providers = {
        state, 
        newName,
        newCategory,
        setNewCategory,
        setNewName,
        setState,
    };


    return (
    <MyContext.Provider value={providers}>
        {children}
    </MyContext.Provider>
    )
}

export { MyContext, MyContextProvider };