import React from 'react';
import { MyContext } from '../../Context/ApplicationContext';

const Setter = () => {

    const options = ["Mensajería", "Redes sociales", "Entretenimiento"];
    const context = React.useContext(MyContext);

    const addNewItem = (e) => {
        e.preventDefault();
        const newItem = { name: context.newName, category: context.newCategory }
        context.setNewName('');
        context.setNewCategory('');
        setTimeout(() => {
            context.setState([...context.state, newItem])
        }, 500);
    };
    
    return (
        <form onSubmit={(e) => addNewItem(e)} className="mt-4 mx-auto flex justify-between border-2 w-9/12 p-2 h-16 rounded-lg">
            <input 
                type="text" 
                name="newApplication" 
                id="setterApplication" 
                className='w-2/4 mx-2 px-3 border-2 rounded-lg'
                placeholder='Escribe el nombre de la app'
                value = {context.newName}
                onChange = {(e) => context.setNewName(e.target.value)} 
            />
            <select 
                name="select-category" 
                id="select-category"
                className="mx-2 border-2 rounded-lg px-4 cursor-pointer"
                value = {context.newCategory}
                onChange = {(e) => context.setNewCategory(e.target.value)}
            >
                <option value="" disabled>Selecciona una categoría</option>
                {options.map((x, i) => <option value={x} key={`option-${i}`}>{x}</option>)}
            </select>
            <button 
                type="submit"
                className="w-20 font-bold mx-2 text-white bg-blue-300 rounded-lg"
            >
                Agregar
            </button>
        </form>
    );
}

export default Setter;