import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { fetchProductById } from '@/features/products/productsSlice';
import { addItem } from '@/features/cart/cartSlice';
import { RootState } from '@/store';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { Button } from '@/components/common/Button';
import { AnimatedPage } from '@/components/common/AnimatedPage';
import styled from 'styled-components';

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }

  .price {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  .description {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: 1.6;
  }
`;

export const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selectedProduct: product, status, error } = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(Number(id)));
        }
    }, [id, dispatch]);

    if (status === 'loading') return <LoadingSpinner />;
    if (status === 'failed') return <ErrorMessage message={error || 'Failed to load product'} />;
    if (!product) return null;

    return (
        <AnimatedPage>
            <Helmet>
                <title>{`${product.title} | Knitted Bags Store`}</title>
                <meta name="description" content={product.description} />
            </Helmet>

            <ProductContainer>
                <ProductImage src={product.image} alt={product.title} />
                <ProductInfo>
                    <h1>{product.title}</h1>
                    <div className="price">${product.price.toFixed(2)}</div>
                    <p className="description">{product.description}</p>
                    <Button onClick={() => dispatch(addItem(product))}>
                        Add to Cart
                    </Button>
                </ProductInfo>
            </ProductContainer>
        </AnimatedPage>
    );
};