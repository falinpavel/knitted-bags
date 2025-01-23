export const theme = {
    colors: {
        primary: '#5C6BC0',
        primaryDark: '#3F51B5',
        secondary: '#FF4081',
        secondaryDark: '#F50057',
        text: '#333333',
        textLight: '#666666',
        background: '#FFFFFF',
        backgroundLight: '#F5F5F5',
        error: '#FF5252',
        success: '#4CAF50',
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    breakpoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '1024px',
    },
    transitions: {
        default: '0.3s ease',
        fast: '0.15s ease',
        slow: '0.5s ease',
    },
    shadows: {
        small: '0 2px 4px rgba(0, 0, 0, 0.1)',
        medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
        large: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
};

export type Theme = typeof theme;