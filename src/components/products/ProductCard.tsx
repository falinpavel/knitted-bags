import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { useDispatch } from 'react-redux';
import { addItem } from '@/features/cart/cartSlice';
import { Button } from '@/components/common/Button';

interface ProductCardProps {
    product: Product;
}

const Card = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Price = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  font-weight: bold;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <Card
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <ImageContainer>
                <Image src={product.image} alt={product.title} loading="lazy" />
            </ImageContainer>
            <Content>
                <Title>{product.title}</Title>
                <Price>${product.price.toFixed(2)}</Price>
                <Description>{product.description}</Description>
                <ButtonContainer>
                    <Button
                        variant="primary"
                        fullWidth
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </ButtonContainer>
            </Content>
        </Card>
    );
};