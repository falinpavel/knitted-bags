import styled from 'styled-components';
import { Navigation } from './Navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CartIndicator = styled.span`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

export const Header: React.FC = () => {
    const cartItemsCount = useSelector((state: RootState) =>
        state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
    );

    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo>Knitted Bags Store</Logo>
                <Navigation />
                {cartItemsCount > 0 && <CartIndicator>{cartItemsCount}</CartIndicator>}
            </HeaderContent>
        </HeaderContainer>
    );
};