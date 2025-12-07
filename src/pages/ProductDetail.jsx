    import React, { useState, useMemo } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import { ShoppingCart, Star, CheckCircle, Clock, Truck, ArrowLeft, Image, Tag, Minus, Plus } from 'lucide-react';
    import Button from '../components/UI/Button';
    import { PRODUCTS } from '../data/dummyProducts'; // Import E-commerce products

    /**
     * Displays the full details of a single product, allows options selection, and adds to cart.
     * @param {object} props - Component props
     * @param {function} props.dispatchCart - Function to dispatch cart actions (from App.jsx).
     * @returns {JSX.Element}
     */
    const ProductDetail = ({ dispatchCart }) => {
        const { id } = useParams();
        const navigate = useNavigate();

        // Find the specific product based on the URL ID
        const product = PRODUCTS.find(p => p.id === id);

        // --- State for User Selections ---
        const defaultOptions = product?.options || {};
        const defaultSize = defaultOptions.size?.[0] || 'N/A';
        const defaultType = defaultOptions.paperType?.[0] || 'Standard';

        const [selectedSize, setSelectedSize] = useState(defaultSize);
        const [selectedType, setSelectedType] = useState(defaultType);
        const [quantity, setQuantity] = useState(1);
        const [mainImage, setMainImage] = useState(product?.thumbnail || product?.images?.[0]);
        const [isAdding, setIsAdding] = useState(false);


        // Handle cases where the product is not found
        if (!product) {
            return (
                <div className="max-w-4xl mx-auto px-4 py-20 text-center min-h-[70vh]">
                    <h1 className="text-3xl text-red-600 font-bold mb-4">Product Not Found (ID: {id})</h1>
                    <p className="text-gray-600 mb-6">The item you were looking for could not be located in our store.</p>
                    <Button onClick={() => navigate('/products')} variant="primary" className="flex items-center mx-auto">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
                    </Button>
                </div>
            );
        }

        // Calculated fields
        const finalPrice = product.salePrice || product.price;
        const isSale = product.salePrice && product.salePrice < product.price;
        const formatCurrency = (price) => `₹${price.toLocaleString('en-IN')}`;

        // --- Handlers ---
        const handleAddToCart = () => {
            if (quantity < 1 || isAdding) return;

            setIsAdding(true);

            dispatchCart({
                type: 'ADD_ITEM',
                payload: { 
                    product: product, 
                    selectedSize: selectedSize, 
                    selectedType: selectedType, 
                    quantity: quantity 
                }
            });

            // Simulate network delay for animation feedback
            setTimeout(() => {
                setIsAdding(false);
                // In a real application, use a global toast notification
                alert(`Added ${quantity}x ${product.name} (Size: ${selectedSize}, Type: ${selectedType}) to cart!`);
                setQuantity(1); // Reset quantity after successful add
            }, 800);
        };

        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[80vh]">
                <Button 
                    variant="outline" 
                    onClick={() => navigate(-1)} 
                    className="mb-8 flex items-center text-sm"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Listing
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 bg-white p-6 md:p-10 rounded-3xl shadow-2xl animate-fadeInUp">
                    
                    {/* 1. Image Gallery & Preview */}
                    <div className="space-y-4">
                        {/* Main Image View */}
                        <div className="relative overflow-hidden rounded-2xl aspect-square shadow-xl">
                            <img
                                src={mainImage || product.thumbnail || product.images?.[0]}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        {/* Thumbnail Selector */}
                        <div className="flex space-x-3 overflow-x-auto p-1">
                            {[product.thumbnail, ...(product.gallery || [])].filter(img => img).map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setMainImage(img)}
                                    className={`w-20 h-20 object-cover rounded-xl cursor-pointer transition-all duration-200 border-2 
                                        ${mainImage === img ? 'border-indigo-600 shadow-md transform scale-105' : 'border-gray-200 opacity-80 hover:opacity-100'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* 2. Product Details & Purchase Options */}
                    <div>
                        <p className="text-sm font-semibold text-indigo-500 mb-2 uppercase">{product.category}</p>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{product.name}</h1>
                        
                        {/* Rating & Reviews */}
                        <div className="flex items-center text-yellow-500 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-500' : 'text-gray-300'}`} />
                            ))}
                            <span className="ml-2 text-gray-600 text-sm">({product.rating} / {product.reviewsCount} reviews)</span>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-baseline space-x-3 mb-6">
                            <span className="text-4xl font-extrabold text-indigo-700">
                                {formatCurrency(finalPrice)}
                            </span>
                            {isSale && (
                                <span className="text-xl text-gray-500 line-through">
                                    {formatCurrency(product.price)}
                                </span>
                            )}
                            {isSale && (
                                <span className="text-sm font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                                    {( (product.price - finalPrice) / product.price * 100).toFixed(0)}% OFF
                                </span>
                            )}
                        </div>
                        
                        <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

                        {/* Options Selection */}
                        <div className="space-y-6 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                            {/* Size Options */}
                            {product.options?.size?.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center"><Tag className="w-5 h-5 mr-2 text-indigo-500"/> Select Size:</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {product.options.size.map(size => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-5 py-2 border rounded-full text-sm font-medium transition duration-150 shadow-sm
                                                    ${selectedSize === size
                                                        ? 'bg-indigo-600 text-white border-indigo-600'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-400'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Paper Type/Material Options */}
                            {product.options?.paperType?.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center"><Image className="w-5 h-5 mr-2 text-indigo-500"/> Select Finish/Type:</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {product.options.paperType.map(type => (
                                            <button
                                                key={type}
                                                onClick={() => setSelectedType(type)}
                                                className={`px-5 py-2 border rounded-full text-sm font-medium transition duration-150 shadow-sm
                                                    ${selectedType === type
                                                        ? 'bg-indigo-600 text-white border-indigo-600'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-400'
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="flex items-center space-x-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 flex-shrink-0">Quantity:</h3>
                            <div className="flex items-center border border-gray-300 rounded-xl">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="p-3 text-gray-600 hover:bg-gray-100 rounded-l-xl transition"
                                    aria-label="Decrease quantity"
                                >
                                    <Minus className="w-5 h-5" />
                                </button>
                                <span className="w-10 text-center text-lg font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="p-3 text-gray-600 hover:bg-gray-100 rounded-r-xl transition"
                                    aria-label="Increase quantity"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <Button
                            onClick={handleAddToCart}
                            className="w-full text-lg flex items-center justify-center py-4"
                            disabled={isAdding}
                        >
                            {isAdding ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            ) : (
                                <ShoppingCart className="w-6 h-6 mr-3" />
                            )}
                            {isAdding ? 'Adding...' : 'Add to Cart'}
                        </Button>

                        {/* Production & Shipping Info */}
                        <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                            <div className="flex items-center text-gray-600">
                                <Clock className="w-5 h-5 mr-3 text-indigo-500" />
                                <span className="font-semibold">Production Time:</span> {product.productionTime}
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Truck className="w-5 h-5 mr-3 text-indigo-500" />
                                <span className="font-semibold">Shipping Class:</span> {product.shippingClass} (Calculated at checkout)
                            </div>
                            <div className="flex items-center text-gray-600">
                                <CheckCircle className="w-5 h-5 mr-3 text-indigo-500" />
                                <span className="font-semibold">SKU:</span> {product.sku} | <span className="font-semibold ml-4">Stock:</span> {product.stockStatus}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Detailed Product Information */}
                <div className="mt-16 bg-gray-50 p-8 rounded-3xl shadow-inner">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Product Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Description */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">About This Product</h3>
                            <p className="text-gray-600">{product.description}</p>
                        </div>

                        {/* Features/Details List (using tags for demo) */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Details</h3>
                            <ul className="space-y-2 text-gray-600">
                                {product.tags.map((tag, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>
                                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Dimensions & Weight */}
                        {product.dimensions && (
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Physical Specs</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li><strong>Weight:</strong> {product.weight} kg</li>
                                    <li><strong>Dimensions:</strong> {product.dimensions.width}x{product.dimensions.height}x{product.dimensions.depth} in</li>
                                    <li><strong>Customizable:</strong> {product.customizable ? 'Yes' : 'No (Ready-made)'}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        );
    };

    export default ProductDetail;