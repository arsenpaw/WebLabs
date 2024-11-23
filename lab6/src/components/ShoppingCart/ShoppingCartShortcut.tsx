import React, { useState } from 'react';

import ShoppingCart from "./ShoppingCart";

function ShoppingCartShortcut() {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    return (
        <>
        <div>
            {isCartOpen && <ShoppingCart onClose={() => {setIsCartOpen(false)}}/>}
        </div>
            <button
                onClick={() => setIsCartOpen((prev) => !prev)}
                className="fixed top-10 right-10 items-center justify-center bg-blue-500 text-white font-bold rounded-full w-12 h-12 shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            >
                🛒
            </button>
        </>
    );
}

export default ShoppingCartShortcut;
