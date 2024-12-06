import Image from 'next/image';
import React, { useState } from 'react';

const DesignType = ({selectedDesignType}) => {
    const [selectedOption, setSelectedOption] = useState();

    const Designs = [
        {
            name: 'Modern',
            image: '/modern.jpg',
            alt: 'Modern design image', // Add alt text
        },
        {
            name: 'Rustic',
            image: '/rustic.jpg',
            alt: 'Rustic design image',
        },
        {
            name: 'Industrial',
            image: '/industrial.jpg',
            alt: 'Industrial design image',
        },
        {
            name: 'Traditional',
            image: '/traditional.jpg',
            alt: 'Traditional design image',
        },
    ];

    return (
        <div>
            <label className='text-gray-700'>
                Interior Design Type
            </label>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                {Designs.map((design, index) => (
                <div key={index} onClick={() => {setSelectedOption(design.name);selectedDesignType(design.name)}} className="cursor-pointer">
                        <Image 
                            src={design.image} 
                            width={100} 
                            height={100} 
                            alt={design.alt} // Use the alt property here
                            className={`rounded-md hover:scale-105 transition-all ${design.name === selectedOption ? 'border-2 border-green-500' : ''}`}
                        />
                        <h3 className='text-center mt-2'>{design.name}</h3> {/* Added some margin for spacing */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesignType;
