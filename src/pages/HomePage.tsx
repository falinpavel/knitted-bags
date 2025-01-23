import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { ProductGrid } from '@/components/products/ProductGrid';
import { AnimatedPage } from '@/components/common/AnimatedPage';

export const HomePage: React.FC = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Knitted Bags Store | Handcrafted in Mumbai</title>
                <meta name="description" content="Discover our unique collection of handcrafted knitted bags made with love in Mumbai" />
            </Helmet>

            <Hero />
            <About />
            <ProductGrid />
        </AnimatedPage>
    );
};