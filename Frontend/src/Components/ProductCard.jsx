import React from 'react'

const ProductCard = ({ title, price, image, description }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-cover rounded-xl mb-4 bg-gray-100" 
            />
            <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                {title}
            </h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {description}
            </p>
            <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xl font-bold text-indigo-600">
                    {price}
                </span>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition cursor-pointer">
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default ProductCard