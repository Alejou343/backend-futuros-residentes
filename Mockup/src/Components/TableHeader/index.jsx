import React from 'react';

const TableHeader = () => {
    return (
    <div className="mt-6 mb-0.5 font-bold flex justify-between items-center w-9/12 rounded-lg mx-auto p-8 h-16 bg-blue-300">
        <span className="w-full">#</span>
        <span className="w-full flex justify-start">Objeto</span>
        <span className="w-full flex justify-center">Categoría</span>
        <p className="w-full flex justify-end">
            {null}
        </p>
    </div>
    );
}

export default TableHeader;