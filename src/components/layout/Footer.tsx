import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.textLight}20;
`;

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <h3>About Us</h3>
                    <p>Handcrafted knitted bags from Mumbai, made with love and attention to detail.</p>
                </FooterSection>
                <FooterSection>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </FooterSection>
                <FooterSection>
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: info@knittedbagsstore.com</li>
                        <li>Phone: +91 123 456 7890</li>
                        <li>Mumbai, India</li>
                    </ul>
                </FooterSection>
            </FooterContent>
            <Copyright>
                <p>&copy; {new Date().getFullYear()} Knitted Bags Store. All rights reserved.</p>
            </Copyright>
        </FooterContainer>
    );
};