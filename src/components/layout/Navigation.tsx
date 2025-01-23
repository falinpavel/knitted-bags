import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Navigation: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/cart', label: 'Cart' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <>
            <Nav>
                {navItems.map(({ path, label }) => (
                    <NavLink
                        key={path}
                        to={path}
                        $isActive={location.pathname === path}
                    >
                        {label}
                    </NavLink>
                ))}
            </Nav>
            <MobileMenuButton aria-label="Menu">
                <span>☰</span>
            </MobileMenuButton>
        </>
    );
};