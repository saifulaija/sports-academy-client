
import { FaShoppingBasket, FaLock, FaShippingFast, FaDollarSign, FaHeart, FaCheck } from 'react-icons/fa';

const features = [
  {
    icon: <FaShoppingBasket />,
    title: 'Wide Range of Products',
    description: 'Explore a vast selection of sports equipment, apparel, and accessories.',
  },
  {
    icon: <FaLock />,
    title: 'Secure Payments',
    description: 'Shop with confidence using our secure payment options.',
  },
  {
    icon: <FaShippingFast />,
    title: 'Fast Shipping',
    description: 'Enjoy fast and reliable shipping services for your orders.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Competitive Pricing',
    description: 'Get the best deals on sports gear without breaking the bank.',
  },
  {
    icon: <FaHeart />,
    title: 'Customer Satisfaction',
    description: 'We prioritize customer happiness and strive to meet your needs.',
  },
  {
    icon: <FaCheck />,
    title: 'Quality Assurance',
    description: 'Our products are of the highest quality, ensuring durability and performance.',
  },
];

const KeyFeatures = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-black mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-4xl text-black mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
