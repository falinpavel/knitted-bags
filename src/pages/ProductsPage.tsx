import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { ProductGrid } from '@/components/products/ProductGrid';
import { fetchProducts } from '@/features/products/productsSlice';
import { AnimatedPage } from '@/components/common/AnimatedPage';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const ProductsPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <AnimatedPage>
            <Helmet>
                <title>Our Products | Knitted Bags Store</title>
                <meta name="description" content="Browse our collection of handcrafted knitted bags" />
            </Helmet>

            <ProductsContainer>
                <ProductGrid />
            </ProductsContainer>
        </AnimatedPage>
    );
};