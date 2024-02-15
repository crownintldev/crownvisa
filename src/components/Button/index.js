import React from 'react'

const Button = ({ text, onClick, className ,btnicon,endicon }) => {
    return (
        <button onClick={onClick} className={`${className} flex border p-2 hover:scale-105 rounded-md font-semibold transition duration-300`}>{btnicon}{text}{endicon}</button>
    )
}

export default Button