import styled from 'styled-components';
import { motion } from 'framer-motion';

const ErrorContainer = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => `${theme.colors.error}15`};
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <ErrorContainer
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
        >
            {message}
        </ErrorContainer>
    );
};