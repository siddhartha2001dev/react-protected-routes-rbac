import React from 'react'

// ============================================================================
// 📦 PROPS CONCEPT - CHILD COMPONENT (REUSABLE TEMPLATE)
// ============================================================================
// 1. WHAT ARE PROPS?
//    - "Props" stands for Properties.
//    - They allow data to be passed from a PARENT component to a CHILD component
//      (Unidirectional / One-Way Data Flow).
//
// 2. DESTRUCTURING IN PARAMETERS:
//    - Instead of writing `const ProductCard = (props) => props.title`,
//      we use ES6 Destructuring `{ title, price, image, description }`.
//    - This extracts each variable directly, making the code cleaner and readable.
//
// 3. REUSABILITY BENEFIT:
//    - ProductCard is completely independent of where data comes from.
//    - Whether there are 3 products or 10,000 from an API, this single template
//      can render any product item consistently.
// ============================================================================

const ProductCard = ({ title, price, image, description }) => {
    return (
        // Main Card Container (Tailwind styling: border, shadow, rounded corners)
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-4">
            
            {/* Prop 1: image and title used as src and alt attributes */}
            <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-cover rounded-xl mb-4 bg-gray-100" 
            />

            {/* Prop 2: title rendered inside heading */}
            <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                {title}
            </h3>

            {/* Prop 3: description rendered as text */}
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {description}
            </p>

            {/* Bottom Row: Price and Action Button */}
            <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                {/* Prop 4: price rendered */}
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