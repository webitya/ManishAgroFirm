import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  mrp: number; // Maximum Retail Price
  price: number; // Discounted Price
}

interface Data {
  Vegetables: Product[];
  Fruits: Product[];
  Fertilizers: Product[];
  Flowers: Product[];
}

const data: Data = {
  Vegetables: [
    { id: 1, name: 'Tomato', description: 'Rich in vitamins and antioxidants.', image: '/dummy_pro.png', mrp: 50, price: 40 },
    { id: 2, name: 'Potato', description: 'A versatile vegetable for many dishes.', image: '/dummy_pro.png', mrp: 30, price: 25 },
    { id: 3, name: 'Cucumber', description: 'Crisp and refreshing vegetable.', image: '/dummy_pro.png', mrp: 35, price: 30 },
    { id: 4, name: 'Carrot', description: 'Great for eye health.', image: '/dummy_pro.png', mrp: 40, price: 35 },
  ],
  Fruits: [
    { id: 1, name: 'Apple', description: 'Sweet and healthy snack.', image: '/dummy_pro.png', mrp: 100, price: 80 },
    { id: 2, name: 'Banana', description: 'Packed with potassium.', image: '/dummy_pro.png', mrp: 60, price: 50 },
    { id: 3, name: 'Mango', description: 'Delicious tropical fruit.', image: '/dummy_pro.png', mrp: 150, price: 120 },
    { id: 4, name: 'Orange', description: 'Full of Vitamin C.', image:'/dummy_pro.png', mrp: 90, price: 75 },
  ],
  Fertilizers: [
    { id: 1, name: 'Organic Fertilizer', description: 'Perfect for home gardens.', image: '/dummy_pro.png', mrp: 200, price: 180 },
    { id: 2, name: 'Chemical Fertilizer', description: 'High yield for agricultural use.', image: '/dummy_pro.png', mrp: 300, price: 270 },
    { id: 3, name: 'Organic Fertilizer', description: 'Perfect for home gardens.', image: '/dummy_pro.png', mrp: 200, price: 180 },
    { id: 4, name: 'Chemical Fertilizer', description: 'High yield for agricultural use.', image: '/dummy_pro.png', mrp: 300, price: 270 },
  ],
  Flowers: [
    { id: 1, name: 'Rose', description: 'Symbol of love and beauty.', image: '/dummy_pro.png', mrp: 150, price: 130 },
    { id: 2, name: 'Tulip', description: 'Bright and colorful blooms.', image:'/dummy_pro.png', mrp: 180, price: 150 },
    { id: 3, name: 'Lily', description: 'Elegant and fragrant flower.', image:'/dummy_pro.png', mrp: 250, price: 220 },
    { id: 4, name: 'Daisy', description: 'Cheerful and vibrant.', image: '/dummy_pro.png', mrp: 100, price: 80 },
  ],
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState<keyof Data>('Vegetables');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleTabClick = (tab: keyof Data) => {
    setActiveTab(tab);
    setDrawerOpen(false); // Close the drawer when a tab is clicked
  };

  return (
  
    <div className="container mx-auto px-6 py-12 bg-gradient-to-r from-purple-100 via-pink-200 to-blue-100 rounded-3xl shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-8">
          
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-end p-4">
        <button
          onClick={() => setDrawerOpen(!isDrawerOpen)}
          className="text-white text-3xl bg-green-600 p-3 rounded-full"
        >
          ☰
        </button>
      </div>
        {/* Mobile Drawer for Categories */}
        <div className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-10 ${isDrawerOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-end p-4">
            <button onClick={() => setDrawerOpen(false)} className="text-white text-3xl">×</button>
          </div>
          <div className="bg-white w-64 h-full p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
            <div className="space-y-4">
              {Object.keys(data).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab as keyof Data)}
                  className={`block w-full text-left px-4 py-3 font-medium rounded-lg transition-all duration-300 
                    ${activeTab === tab
                      ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-green-100'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Left Side Tabs for larger screens */}
        <div className="hidden lg:block w-full lg:w-1/4 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
          <div className="space-y-4">
            {Object.keys(data).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab as keyof Data)}
                className={`block w-full text-left px-4 py-3 font-medium rounded-lg transition-all duration-300 
                  ${activeTab === tab
                    ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-green-100'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Products Grid */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-10 font-serif px-4" style={{marginTop:"24px"}}>Explore Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {data[activeTab].map((item) => (
              <div key={item.id} className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 ease-in-out" style={{cursor:"pointer"}}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-43 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-l font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-500 mb-4">{item.description}</p>

                  {/* MRP Section */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">₹{item.price}</span>
                    <span className="text-sm line-through text-gray-500">₹{item.mrp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductTabs;






