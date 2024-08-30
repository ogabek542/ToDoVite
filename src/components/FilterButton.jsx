import React from 'react';

const FilterButton = () => {


    return (
        <div className='flex space-x-4 items-center rounded '>
            <select className='p-2 text-sm py-1 rounded border border-gray-300 focus:outline-none'>
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incompleted</option>
            </select>
            <button className='text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded font-bold'>Mark All Completed</button>
        </div>
    )
}

export default FilterButton