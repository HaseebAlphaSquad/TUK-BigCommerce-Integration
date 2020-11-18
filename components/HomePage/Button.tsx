import React from 'react';

const  Button = (props: { text: React.ReactNode; }) => (
        <button className="mt-2 align-middle montserrat bg-transparent hover:bg-gray-400 text-gray-100 hover:border-black font-semibold hover:text-black p-3 pl-6 pr-6 border border-white-500 hover:border-transparent">
           {props.text}
        </button>
);
export default Button;