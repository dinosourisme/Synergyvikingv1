import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {productsData} from '../../pages/productDetail/data/productData.js'



export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const navigate = useNavigate();

  // Filter products based on search query
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle image navigation for a specific product
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

  // Handle card click - navigate to product detail
  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  // Handle search submission
  const handleSearch = () => {
    // Search is already reactive via useState, but button can trigger focus
    document.getElementById('product-search')?.focus();
  };

  return (
    <div className="w-full bg-white font-geist">
      {/* Hero Section */}
      <section className="relative w-full bg-[#00151C] pt-[7px] pb-[120px] px-10">
        {/* Label */}
        <div className="flex items-center gap-[17px] mb-8">
          <div className="w-3 h-3 bg-[#00B1F1]" />
          <span
            className="text-lg leading-[21px] tracking-[-0.28px] uppercase text-white font-geist-mono font-normal"
          >
            OUR Products
          </span>
        </div>

        {/* Heading */}
        <h2
          className="max-w-[1051px] ml-[370px] text-[60px] leading-[72px] tracking-[-2.2px] text-white font-normal font-ptserif"
        >
          Our goal is to be recognised as the most trusted, safety-first diving equipment company serving the global offshore and subsea industry.
        </h2>
      </section>

      {/* Search Bar Section */}
      {/* Spacing: 45px gap between hero (ends at 469px) and search bar (starts at 514px) */}
      <section className="w-full max-w-[1440px] mx-auto px-10 pt-[45px] pb-[60px]">
        <div className="flex items-center justify-between gap-[15px]">
          {/* Search Input */}
          <div className="flex items-center gap-2 w-[1281px] h-16 px-[30px] bg-[rgba(247,247,247,0.97)] rounded-[56px]">
            <input
              id="product-search"
              type="text"
              placeholder="Search for Our Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xl leading-6 text-[#949494] outline-none placeholder:text-[#949494]"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="flex items-center justify-center w-16 h-16 bg-[rgba(247,247,247,0.97)] rounded-[56px] cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="#525252"
                strokeWidth="2"
              />
              <path
                d="M20 20L16 16"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Products Grid */}
      {/* 
        Grid Layout Explanation:
        - 3 columns per row
        - Column gap: 20px (card width 440px + 20px gap = 460px; positions: 40px, 500px, 960px)
        - Row gap: 120px (card height 308px + title height 63px + 120px gap = 491px; rows at 623px, 1114px, etc.)
        - The CSS positions: left 40px, 500px, 960px with 20px gaps
        - Row positions: top 623px, 1114px (623 + 308 + 63 + 120 = 1114)
      */}
      <section className="w-full max-w-[1440px] mx-auto px-10 pb-[100px]">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-[#949494]">No products found</p>
          </div>
        ) : (
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(3, 440px)',
              gap: '20px 20px', // row-gap: 120px handled via margin-bottom on cards
            }}
          >
            {filteredProducts.map((product) => {
              const currentImg =
                currentImageIndex[product.id] || 0;

              return (
                <div
                  key={product.id}
                  onClick={() => handleCardClick(product.id)}
                  className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02] mb-[120px]"
                  style={{ width: '440px' }}
                >
                  {/* Card Image Container */}
                  {/* Aspect ratio: 440px x 308px enforced */}
                  <div className="relative w-[440px] h-[308px] rounded-md border border-[#DDDDDD] overflow-hidden mb-3">
                    <img
                      src={product.images[currentImg]}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 px-[10px] py-[6px] bg-[rgba(28,28,28,0.2)] rounded">
                      <span
                        className="text-sm leading-[21px] tracking-[-0.28px] uppercase text-white font-geist-mono font-normal"
                      >
                        {product.tag}
                      </span>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      {/* Previous Arrow */}
                      <button
                        onClick={(e) =>
                          prevImage(product.id, product.images.length, e)
                        }
                        className="w-5 h-5 bg-black rounded-full flex items-center justify-center cursor-pointer z-10"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M8 2L4 6L8 10"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* Next Arrow */}
                      <button
                        onClick={(e) =>
                          nextImage(product.id, product.images.length, e)
                        }
                        className="w-5 h-5 bg-black rounded-full flex items-center justify-center cursor-pointer z-10"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M4 1L9 6L4 11"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Image Indicators */}
                    {product.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                        {product.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              idx === currentImg
                                ? 'bg-white'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl leading-[31px] tracking-[-0.48px] font-medium text-[#1C1C1C]">
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