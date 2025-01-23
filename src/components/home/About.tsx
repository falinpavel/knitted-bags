import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled(motion.div)`
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 2.5rem;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const AboutImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing.lg};

  li {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    display: flex;
    align-items: center;
    
    &:before {
      content: '✓';
      color: ${({ theme }) => theme.colors.success};
      margin-right: ${({ theme }) => theme.spacing.sm};
      font-weight: bold;
    }
  }
`;

export const About: React.FC = () => {
    return (
        <AboutSection id="about">
            <AboutContainer>
                <AboutContent
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Our Story</h2>
                    <p>
                        From the heart of Mumbai, we bring you handcrafted knitted bags that combine
                        traditional artisanship with contemporary design. Each piece is carefully
                        created by skilled artisans who pour their heart and soul into every stitch.
                    </p>
                    <FeatureList>
                        <li>100% Handmade with Love</li>
                        <li>Sustainable Materials</li>
                        <li>Unique Designs</li>
                        <li>Fair Trade Practices</li>
                    </FeatureList>
                </AboutContent>
                <AboutImage
                    src="/images/about-image.jpg"
                    alt="Artisan crafting a knitted bag"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                />
            </AboutContainer>
        </AboutSection>
    );
};