import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productDetails } from './data/productDetails.js';

export default function ProductDetail() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSpecsOpen, setIsSpecsOpen] = useState(false);

    const product = productDetails[productId];

    if (!product) {
        return (
            <div className="w-full min-h-screen bg-white flex items-center justify-center font-geist px-5">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1C1C1C] mb-4">Product Not Found</h2>
                    <button
                        onClick={() => navigate('/products')}
                        className="text-[#00B1F1] text-lg sm:text-xl hover:underline"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + product.images.length) % product.images.length
        );
    };

    return (
        <div className="w-full bg-white font-geist">
            {/* Hero Section */}
            <section className="relative w-full bg-[#00151C] pt-4 pb-16 px-5 sm:px-6 md:px-8 lg:pt-[7px] lg:pb-[120px] lg:px-10">
                {/* Label */}
                <div className="flex items-center gap-3 md:gap-[17px] mb-6 md:mb-8">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
                    <span className="text-sm md:text-lg leading-[21px] tracking-[-0.28px] uppercase text-white font-geist-mono font-normal">
                        Product
                    </span>
                </div>

                {/* Heading */}
                <h2 className="max-w-full lg:max-w-[1051px] lg:ml-[205px] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight md:leading-[1.2] lg:leading-[72px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] xl:tracking-[-2.2px] text-white font-normal font-ptserif">
                    {product.title}
                </h2>
            </section>

            {/* Back Button */}
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 pt-8 sm:pt-10 md:pt-[60px]">
                <button
                    onClick={() => navigate('/products')}
                    className="group inline-flex items-center gap-2 h-12 sm:h-14 md:h-16 px-5 sm:px-6 md:px-[30px] bg-[rgba(247,247,247,0.97)] rounded-full cursor-pointer hover:bg-[#00B1F1] transition-colors duration-200 active:scale-95"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#949494] group-hover:text-white transition-colors duration-200 sm:w-5 sm:h-5">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-base sm:text-lg md:text-xl leading-6 text-[#949494] group-hover:text-white transition-colors duration-200">
                        Back
                    </span>
                </button>
            </div>

            {/* Product Content */}
            <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 pt-8 sm:pt-10 md:pt-[45px] pb-16 sm:pb-20 md:pb-[100px]">
                <div className="flex flex-col lg:flex-row lg:gap-[74px]">
                    {/* Left Column - Images */}
                    <div className="w-full lg:w-[678px] shrink-0 min-w-0">
                        {/* Main Image Carousel */}
                        <div className="relative w-full aspect-[678/490] rounded-lg sm:rounded-[10.6px] border border-[#DDDDDD] sm:border-[1.77px] mb-4 sm:mb-6 overflow-hidden">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Navigation Arrows */}
                            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-3 pointer-events-none">
                                <button
                                    onClick={prevImage}
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center cursor-pointer z-10 pointer-events-auto active:scale-90 transition-all"
                                >
                                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="sm:w-5 sm:h-5">
                                        <path d="M9 2L4 7L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center cursor-pointer z-10 pointer-events-auto active:scale-90 transition-all"
                                >
                                    <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="sm:w-5 sm:h-5">
                                        <path d="M4 1L9 6L4 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            {/* Image Indicators */}
                            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                                {product.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Thumbnail Images */}
                        <div className="relative w-full">
                            <div className="flex gap-2 sm:gap-3 md:gap-[19px] overflow-x-auto pb-2 scrollbar-hide">
                                {product.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-[148px] lg:h-[126px] rounded overflow-hidden cursor-pointer border-2 ${idx === currentImageIndex ? 'border-[#00B1F1]' : 'border-[#DDDDDD]'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${product.title} thumbnail ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Description & Colors */}
                    <div className="w-full lg:w-[648px] mt-8 lg:mt-0">
                        {/* Description */}
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-[32px] md:leading-[36px] lg:leading-[40px] tracking-[-0.2px] md:tracking-[-0.48px] text-[#1C1C1C] opacity-80 mb-8 sm:mb-10 md:mb-[60px]">
                            {product.description}
                        </p>

                        {/* Button */}
                        <button
                            type="button"
                            className="w-full sm:w-auto h-12 sm:h-14 md:h-10 px-6 sm:px-8 md:px-5 bg-[#00B1F1] rounded-full shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] flex items-center justify-center mb-8 sm:mb-10 md:mb-[60px] active:scale-95 transition-transform"
                        >
                            <span className="text-base sm:text-lg md:text-base font-semibold text-white tracking-[-0.32px] leading-6">
                                View Data Sheet
                            </span>
                        </button>

                        {/* Available Colors */}
                        <div className="mb-8 sm:mb-10 md:mb-[60px]">
                            <h3 className="font-geist-mono font-normal text-sm sm:text-base md:text-lg leading-[21px] tracking-[-0.28px] uppercase text-[#1C1C1C] mb-3 sm:mb-4 md:mb-[17px]">
                                AVAILABLE COLORS
                            </h3>
                            <div className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap">
                                {product.colors.map((color, idx) => (
                                    <div
                                        key={idx}
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[65px] lg:h-[65px] rounded"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Details Accordion */}
                <div className="mt-10 sm:mt-12 md:mt-[60px]">
                    <button
                        onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                        className="w-full flex items-center justify-between py-4 sm:py-5 border-b border-black/20 cursor-pointer active:scale-[0.99] transition-transform"
                    >
                        <span className="text-lg sm:text-xl md:text-2xl leading-6 text-[#525252]">
                            View Technical Details
                        </span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`transition-transform duration-300 sm:w-6 sm:h-6 ${isSpecsOpen ? 'rotate-180' : ''}`}
                        >
                            <path d="M6 9L12 15L18 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Specs Content */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${isSpecsOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-5">
                            <div className="text-sm sm:text-base md:text-xl leading-relaxed sm:leading-[30px] md:leading-[38px] tracking-[-0.2px] md:tracking-[-0.48px] text-[#1C1C1C] font-medium">
                                {product.specs.split('\n').map((line, idx) => {
                                    const [label, value] = line.split(':');
                                    if (!value) return <p key={idx} className="mb-1">{line}</p>;
                                    return (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:gap-4 mb-2 sm:mb-3">
                                            <span className="text-[#525252] sm:w-[200px] md:w-[250px] shrink-0">{label}:</span>
                                            <span>{value}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}