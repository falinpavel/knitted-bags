import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { RootState } from '@/store';
import { removeItem, updateQuantity, clearCart } from '@/features/cart/cartSlice';
import { Button } from '@/components/common/Button';
import { AnimatedPage } from '@/components/common/AnimatedPage';

const CartContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr 1fr auto;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  button {
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.backgroundLight};
  }

  span {
    min-width: 40px;
    text-align: center;
  }
`;

const Total = styled.div`
  text-align: right;
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-size: 1.25rem;
  font-weight: bold;
`;

export const CartPage: React.FC = () => {
    const dispatch = useDispatch();
    const { items, total } = useSelector((state: RootState) => state.cart);

    return (
        <AnimatedPage>
            <Helmet>
                <title>Shopping Cart | Knitted Bags Store</title>
            </Helmet>

            <CartContainer>
                <h1>Shopping Cart</h1>

                {items.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        {items.map(item => (
                            <CartItem key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>
                                <QuantityControl>
                                    <button onClick={() =>
                                        dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                                    }>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() =>
                                        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                                    }>+</button>
                                </QuantityControl>
                                <div>${(item.price * item.quantity).toFixed(2)}</div>
                                <Button
                                    variant="outline"
                                    onClick={() => dispatch(removeItem(item.id))}
                                >
                                    Remove
                                </Button>
                            </CartItem>
                        ))}

                        <Total>Total: ${total.toFixed(2)}</Total>

                        <Button
                            onClick={() => dispatch(clearCart())}
                            variant="secondary"
                            style={{ marginTop: '1rem' }}
                        >
                            Clear Cart
                        </Button>
                    </>
                )}
            </CartContainer>
        </AnimatedPage>
    );
};