
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/ProductSlice';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { products, status } = useSelector((s) => s.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.short_desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero / Intro */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 md:mb-0">
            Our Products
          </h1>

          {/* Search Bar */}
          <input
            type="search"
            placeholder="Search products..."
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {status === 'loading' ? (
          <div className="text-center py-20 text-gray-500">Loading products…</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No products found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
