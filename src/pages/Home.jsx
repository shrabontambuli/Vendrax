
import Banner from '../components/home/Banner';
import FeatureProducts from '../components/home/FeatureProducts';
import UserReview from '../components/home/UserReview';
import Accordion from '../components/home/Accordion';

const Home = () => {
    return (
        <>
            <Banner />
            <div className='container mx-auto'>
                <div className='my-24'>
                    <h1 className='mb-16 text-4xl font-semibold text-center'>Featured Products</h1>
                    <FeatureProducts />
                </div>
                <div className='my-24'>
                    <h1 className='mb-16 text-4xl font-semibold text-center'>User Review</h1>
                    <UserReview />
                </div>
                <div className='my-24'>
                    <h1 className='mb-16 text-4xl font-semibold text-center'>Frequently Asked Questions ?</h1>
                    <Accordion />
                </div>
            </div>
        </>
    );
};

export default Home;