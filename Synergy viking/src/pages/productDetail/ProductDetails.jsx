import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productDetails } from './data/productDetails.js'

export default function ProductDetail() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSpecsOpen, setIsSpecsOpen] = useState(false);

    const product = productDetails[productId];

    // Handle invalid product ID
    if (!product) {
        return (
            <div className="w-full min-h-screen bg-white flex items-center justify-center font-geist">
                <div className="text-center">
                    <h2 className="text-4xl text-[#1C1C1C] mb-4">Product Not Found</h2>
                    <button
                        onClick={() => navigate('/products')}
                        className="text-[#00B1F1] text-xl hover:underline"
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
            <section className="relative w-full bg-[#00151C] pt-[7px] pb-[120px] px-10">
                {/* Label */}
                <div className="flex items-center gap-[17px] mb-8">
                    <div className="w-3 h-3 bg-[#00B1F1]" />
                    <span
                        className="text-lg leading-[21px] tracking-[-0.28px] uppercase text-white font-geist-mono font-normal"
                    >
                        Product
                    </span>
                </div>

                {/* Heading */}
                <h2
                    className="max-w-[1051px] ml-[370px] text-[60px] leading-[72px] tracking-[-2.2px] text-white font-normal font-ptserif"
                >
                    {product.title}
                </h2>
            </section>


            {/* Back Button */}
            <div className="w-full max-w-[1440px] mx-auto px-10 pt-[60px]">
                <button
                    onClick={() => navigate('/products')}
                    className="group inline-flex items-center gap-2 h-16 px-[30px] bg-[rgba(247,247,247,0.97)] rounded-[56px] cursor-pointer hover:bg-[#00B1F1] transition-colors duration-200"
                >
                    <span className="text-xl leading-6 text-[#949494] group-hover:text-white transition-colors duration-200">
                        Back
                    </span>
                </button>
            </div>

            {/* Product Content */}
            <section className="w-full max-w-[1440px] mx-auto px-10 pt-[45px] pb-[100px]">
                <div className="flex gap-[74px]">
                    {/* Left Column - Images */}
                    <div className="w-[678px]">
                        {/* Main Image Carousel */}
                        <div className="relative w-[678px] h-[490px] rounded-[10.6px] border-[1.77px] border-[#DDDDDD] mb-6">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute top-1/2 -translate-y-1/2 -left-[26px] w-[35px] h-[35px] bg-black rounded-full flex items-center justify-center cursor-pointer z-10"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M9 2L4 7L9 12"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute top-1/2 -translate-y-1/2 -right-[26px] w-[28px] h-[28px] bg-black rounded-full flex items-center justify-center cursor-pointer z-10"
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

                            {/* Image Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {product.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex
                                            ? 'bg-white'
                                            : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex gap-[19px]">
                            {product.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`relative w-[148px] h-[126px] rounded-[2.7px] border overflow-hidden cursor-pointer ${idx === currentImageIndex
                                        ? 'border-[#00B1F1]'
                                        : 'border-[#DDDDDD]'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.title} thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Thumbnail Navigation Arrows */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex(idx);
                                        }}
                                        className="absolute -top-[7px] -right-[7px] w-[7px] h-[7px] bg-white rounded-full flex items-center justify-center"
                                    >
                                        <svg
                                            width="5"
                                            height="5"
                                            viewBox="0 0 5 5"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 0L4 2.5L1 5"
                                                stroke="black"
                                                strokeWidth="0.5"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex(idx);
                                        }}
                                        className="absolute top-[7px] -left-[9px] w-[9px] h-[9px] bg-black rounded-full flex items-center justify-center"
                                    >
                                        <svg
                                            width="5"
                                            height="5"
                                            viewBox="0 0 5 5"
                                            fill="none"
                                        >
                                            <path
                                                d="M4 0L1 2.5L4 5"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Description & Colors */}
                    <div className="w-[648px]">
                        {/* Description */}
                        <p className="text-2xl leading-[40px] tracking-[-0.48px] text-[#1C1C1C] opacity-80 mb-[60px]">
                            {product.description}
                        </p>

                        {/* Button */}
                        <button
                            type="button"
                            className="h-10 px-5 bg-[#00B1F1] rounded-[100px] shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] flex items-center justify-center mb-[60px]"
                        >
                            <span className="text-base font-semibold text-white tracking-[-0.32px] leading-6">
                                View Data Sheet
                            </span>
                        </button>

                        {/* Available Colors */}
                        <div className="mb-[60px]">
                            <h3
                                className="font-geist-mono font-normal text-lg leading-[21px] tracking-[-0.28px] uppercase text-[#1C1C1C] mb-[17px]"
                                
                            >
                                AVAILABLE COLORS
                            </h3>

                            <div className="flex gap-5">
                                {product.colors.map((color, idx) => (
                                    <div
                                        key={idx}
                                        className="w-[65px] h-[65px] rounded"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Details Accordion */}
                <div className="mt-[60px]">
                    <button
                        onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                        className="w-full flex items-center justify-between py-5 border-b border-black/20 cursor-pointer"
                    >
                        <span className="text-2xl leading-6 text-[#525252]">
                            View Technical Details
                        </span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`transition-transform duration-300 ${isSpecsOpen ? 'rotate-180' : ''
                                }`}
                        >
                            <path
                                d="M6 9L12 15L18 9"
                                stroke="#141B34"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Specs Content - Hidden by default */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${isSpecsOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="pt-10 pb-5">
                            <p
                                className="text-xl leading-[38px] tracking-[-0.48px] text-[#1C1C1C] font-medium whitespace-pre-line"
                            >
                                {product.specs}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}