import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactInfoContainer = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
`;

const InfoSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactInfo: React.FC = () => {
    return (
        <ContactInfoContainer
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <InfoSection>
                <Title>Contact Information</Title>
                <InfoItem>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <Link href="mailto:info@knittedbagsstore.com">
                        info@knittedbagsstore.com
                    </Link>
                </InfoItem>
                <InfoItem>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.2 16.5h-2.5v-6.2h2.5v6.2zM12 10.9c-.8 0-1.4-.5-1.4-1.2s.6-1.2 1.4-1.2 1.4.5 1.4 1.2-.6 1.2-1.4 1.2zm-2.3 7.6H7.2v-6.2h2.5v6.2z"/>
                    </svg>
                    <Link href="tel:+911234567890">
                        +91 123 456 7890
                    </Link>
                </InfoItem>
            </InfoSection>

            <InfoSection>
                <Title>Location</Title>
                <InfoItem>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <Link
                        href="https://goo.gl/maps/mumbai"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mumbai, Maharashtra, India
                    </Link>
                </InfoItem>
            </InfoSection>
        </ContactInfoContainer>
    );
};