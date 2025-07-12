import Carousel from '../components/Carousel';

export default function LandingPage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Welcome to ReWear 👕</h1>
      <p className="text-gray-600 mb-4">Swap or redeem clothes. Reduce waste. ReWear!</p>
      <Carousel />
    </div>
  );
}
