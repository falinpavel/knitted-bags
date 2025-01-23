export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface FormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
    consent: boolean;
}

export interface ValidationError {
    field: string;
    message: string;
}

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Theme {
    colors: {
        primary: string;
        primaryDark: string;
        secondary: string;
        text: string;
        textLight: string;
        background: string;
        backgroundLight: string;
        error: string;
        success: string;
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    breakpoints: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    transitions: {
        default: string;
        fast: string;
        slow: string;
    };
}