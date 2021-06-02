import { createGlobalStyle } from 'styled-components';
import Colors from './Colors';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        color: #2b2b2b;
        }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    .link {
        text-decoration: none;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    ::-webkit-input-placeholder {
        /* Edge */
        color: ${Colors.mediumGray};
        opacity: 0.6;
    }

    ::-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${Colors.mediumGray};
        opacity: 0.6;
    }

    ::placeholder {
        color: ${Colors.mediumGray};
        opacity: 0.6;
    }
`;

export default GlobalStyles;
