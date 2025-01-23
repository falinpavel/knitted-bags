import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { AnimatedPage } from '@/components/common/AnimatedPage';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
`;

export const ContactPage: React.FC = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Contact Us | Knitted Bags Store</title>
                <meta name="description" content="Get in touch with us for any questions about our handcrafted knitted bags" />
            </Helmet>

            <ContactContainer>
                <Title>Contact Us</Title>
                <ContactGrid>
                    <ContactForm />
                    <ContactInfo />
                </ContactGrid>
            </ContactContainer>
        </AnimatedPage>
    );
};