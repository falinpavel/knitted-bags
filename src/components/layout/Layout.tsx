import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

export const Layout: React.FC = () => {
    return (
        <LayoutContainer>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </LayoutContainer>
    );
};