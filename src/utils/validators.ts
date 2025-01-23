export const validators = {
    email: {
        regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        regex: /^\+?\d{10,15}$/,
        message: 'Please enter a valid phone number'
    },
    name: {
        regex: /^[a-zA-Zа-яА-Я\s]{2,50}$/,
        message: 'Name should be between 2 and 50 characters'
    }
};

export const validateField = (name: string, value: string): string | null => {
    const validator = validators[name as keyof typeof validators];
    if (!validator) return null;

    return validator.regex.test(value) ? null : validator.message;
};

export const validateForm = (values: Record<string, string>): Record<string, string> => {
    const errors: Record<string, string> = {};

    Object.keys(values).forEach(key => {
        const error = validateField(key, values[key]);
        if (error) errors[key] = error;
    });

    return errors;
};