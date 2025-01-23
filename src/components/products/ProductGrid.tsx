import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchProducts } from '@/features/products/productsSlice';
import { ProductCard } from './ProductCard';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { ErrorMessage } from '@/components/common/ErrorMessage';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 2rem;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ProductGrid: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, status, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <LoadingSpinner />;
    }

    if (status === 'failed') {
        return <ErrorMessage message={error || 'Failed to load products'} />;
    }

    if (items.length === 0) {
        return <NoProducts>No products available</NoProducts>;
    }

    return (
        <section>
            <SectionTitle>Our Products</SectionTitle>
            <Grid>
                {items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </section>
    );
};