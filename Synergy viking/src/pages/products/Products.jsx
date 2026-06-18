import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../../pages/productDetail/data/productData.js';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const navigate = useNavigate();

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const nextImage = (productId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (productId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleSearch = () => {
    document.getElementById('product-search')?.focus();
  };

  return (
    <div className="w-full bg-white font-geist">
      {/* Hero Section */}
      <section className="relative w-full bg-[#00151C] pt-4 pb-16 px-5 sm:px-6 md:px-8 lg:pt-[7px] lg:pb-[120px] lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-3 md:gap-[17px] mb-6 md:mb-8">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
          <span className="text-sm md:text-lg leading-[21px] tracking-[-0.28px] uppercase text-white font-geist-mono font-normal">
            OUR Products
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-full lg:max-w-[1051px] lg:ml-[205px] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight md:leading-[1.2] lg:leading-[72px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] xl:tracking-[-2.2px] text-white font-normal font-ptserif">
          Our goal is to be recognised as the most trusted, safety-first diving equipment company serving the global offshore and subsea industry.
        </h2>
      </section>

      {/* Search Bar Section */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 pt-8 sm:pt-10 md:pt-[45px] pb-10 sm:pb-12 md:pb-[60px]">
        <div className="flex items-center gap-2 sm:gap-[15px] w-full">
          {/* Search Input */}
          <div className="flex items-center gap-2 flex-1 h-12 sm:h-14 md:h-16 px-4 sm:px-5 md:px-[30px] bg-[rgba(247,247,247,0.97)] rounded-full">
            <input
              id="product-search"
              type="text"
              placeholder="Search for Our Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-base sm:text-lg md:text-xl leading-6 text-[#949494] outline-none placeholder:text-[#949494]"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[rgba(247,247,247,0.97)] rounded-full cursor-pointer shrink-0 active:scale-95 transition-transform"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-[22px] sm:h-[22px] md:w-6 md:h-6"
            >
              <circle cx="11" cy="11" r="7" stroke="#525252" strokeWidth="2" />
              <path d="M20 20L16 16" stroke="#525252" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 pb-16 sm:pb-20 md:pb-[100px]">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 sm:py-20">
            <p className="text-xl sm:text-2xl text-[#949494]">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 md:gap-y-14 lg:gap-y-[120px] gap-x-5">
            {filteredProducts.map((product) => {
              const currentImg = currentImageIndex[product.id] || 0;

              return (
                <div
                  key={product.id}
                  onClick={() => handleCardClick(product.id)}
                  className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {/* Card Image Container */}
                  <div className="relative w-full aspect-[440/308] rounded-md border border-[#DDDDDD] overflow-hidden mb-3">
                    <img
                      src={product.images[currentImg]}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Tag Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-[10px] py-1 sm:py-[6px] bg-[rgba(28,28,28,0.2)] rounded">
                      <span className="text-xs sm:text-sm leading-[21px] tracking-[-0.28px] uppercase text-white font-geist-mono font-normal">
                        {product.tag}
                      </span>
                    </div>

                    {/* Navigation Arrows */}
                    {/* Navigation Arrows */}
                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-3 pointer-events-none">
                      <button
                        onClick={(e) => prevImage(product.id, product.images.length, e)}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center cursor-pointer z-10 pointer-events-auto active:scale-90 transition-all"
                      >
                        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="sm:w-5 sm:h-5">
                          <path d="M8 2L4 6L8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => nextImage(product.id, product.images.length, e)}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center cursor-pointer z-10 pointer-events-auto active:scale-90 transition-all"
                      >
                        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="sm:w-5 sm:h-5">
                          <path d="M4 1L9 6L4 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>

                    {/* Image Indicators */}
                    {product.images.length > 1 && (
                      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                        {product.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImg ? 'bg-white' : 'bg-white/50'
                              }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl leading-[28px] sm:leading-[31px] tracking-[-0.4px] sm:tracking-[-0.48px] font-medium text-[#1C1C1C]">
                    {product.title}
                  </h3>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}