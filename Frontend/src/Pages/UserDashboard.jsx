import React from 'react'
import ProductCard from '../Components/ProductCard';

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

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {dummyProducts.map((Product) => (
                        <ProductCard
                            key={Product.id}
                            title={Product.title}
                            price={Product.price}
                            image={Product.image}
                            description={Product.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserDashboard