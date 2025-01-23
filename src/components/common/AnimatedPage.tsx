import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -20,
    },
};

interface AnimatedPageProps {
    children: React.ReactNode;
}

export const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
    return (
        <PageWrapper
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
        >
            {children}
        </PageWrapper>
    );
};