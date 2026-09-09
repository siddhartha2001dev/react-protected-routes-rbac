import React from 'react'
import ProductCard from '../Components/ProductCard';

// ============================================================================
// 📦 PROPS CONCEPT - PARENT COMPONENT (DATA SOURCE & PROP PASSING)
// ============================================================================
// 1. DATA SOURCE (MOCK DATABASE):
//    - In real full-stack apps, this array comes from a backend API (Express/MongoDB).
//    - Here, `dummyProducts` acts as our in-memory data source.
//
// 2. THE .map() METHOD:
//    - `.map((Product) => ...)` iterates over each object in the array.
//    - In each iteration, the `Product` argument holds the current item's data.
//
// 3. PASSING PROPS TO CHILD (<ProductCard />):
//    - We pass data like HTML attributes: `title={Product.title}`, `price={Product.price}`.
//    - The child component receives these as its `props` object.
//
// 4. THE 'key' PROP (IMPORTANT FOR INTERVIEWS):
//    - `key={Product.id}` is required by React to uniquely identify each element.
//    - It optimizes React's Virtual DOM reconciliation (rendering and updating lists).
// ============================================================================

const dummyProducts = [
    {
        id: 1,
        title: 'Noise WH-1000XM5',
        price: '$45',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        description: 'Noise cancelling wireless headphones with premium sound.'
    },
    {
        id: 2,
        title: 'Apple watch S9',
        price: '$65',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
        description: 'Advanced health sensors and fitness tracking smartwatch.'
    },
    {
        id: 3,
        title: 'Logitech Mouse',
        price: '$5',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
        description: 'Ergonomic performance wireless mouse for creators.'
    }
]

const UserDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                    User Dashboard - Products 🛒
                </h1>
                <p className="text-gray-500 mb-8">
                    Browse our top gadgets curated for you.
                </p>

                {/* Responsive 3-Column Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* 
                      DYNAMIC LIST RENDERING VIA .map()
                      Iterating through each product and passing properties as Props to ProductCard
                    */}
                    {dummyProducts.map((Product) => (
                        <ProductCard
                            key={Product.id}                  // Unique key for React's Virtual DOM
                            title={Product.title}            // Passing 'title' prop
                            price={Product.price}            // Passing 'price' prop
                            image={Product.image}            // Passing 'image' prop
                            description={Product.description}// Passing 'description' prop
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default UserDashboard