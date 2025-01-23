import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Roboto', sans-serif;
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.background};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
        margin-bottom: ${({ theme }) => theme.spacing.md};
    }

    p {
        margin-bottom: ${({ theme }) => theme.spacing.md};
    }

    ul, ol {
        list-style: none;
    }

    input, textarea {
        font-family: inherit;
        font-size: inherit;
    }
`;