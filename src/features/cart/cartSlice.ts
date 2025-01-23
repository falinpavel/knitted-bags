import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '@/types';

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    total: number;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    total: 0,
};

const calculateTotal = (items: CartItem[]): number => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            state.total = calculateTotal(state.items);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.total = calculateTotal(state.items);
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = Math.max(0, action.payload.quantity);
                if (item.quantity === 0) {
                    state.items = state.items.filter(i => i.id !== item.id);
                }
            }
            state.total = calculateTotal(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const {
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart
} = cartSlice.actions;

export default cartSlice.reducer;