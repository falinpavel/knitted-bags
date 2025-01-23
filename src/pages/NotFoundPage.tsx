import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/common/Button';
import { AnimatedPage } from '@/components/common/AnimatedPage';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const NotFoundPage: React.FC = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>404 - Page Not Found | Knitted Bags Store</title>
            </Helmet>

            <NotFoundContainer>
                <Title>404</Title>
                <Subtitle>Page Not Found</Subtitle>
                <Message>
                    The page you're looking for doesn't exist or has been moved.
                </Message>
                <Button as={Link} to="/">
                    Return to Home
                </Button>
            </NotFoundContainer>
        </AnimatedPage>
    );
};