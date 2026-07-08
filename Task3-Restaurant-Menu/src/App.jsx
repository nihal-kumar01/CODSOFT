import React, { useState } from 'react';
import { Search, ShoppingBag, Clock, Star, ChevronLeft, Heart, Menu as MenuIcon, User, ListOrdered } from 'lucide-react';

// Mock Food Data matching the design references
const FOOD_DATA = [
  {
    id: 1,
    name: "Pear & Orange",
    category: "Breakfast",
    price: "25.00$",
    time: "20 min",
    rating: "4.8",
    image: "🥞",
    bgColor: "bg-orange-50",
    desc: "As a rule, pancakes are served for breakfast with various sweet sauces, chocolate, berries, maple syrup. Pancakes were a very popular breakfast only in the USA and Canada, but now pancakes enjoy breakfast all over the world."
  },
  {
    id: 2,
    name: "Meat & Mashrooms",
    category: "Lunch",
    price: "37.00$",
    time: "30 min",
    rating: "5.0",
    image: "🍞",
    bgColor: "bg-amber-50",
    desc: "A rich and savory combination of premium slow-cooked cuts with earthy forest mushrooms, lightly toasted over farmhouse bread for a satisfying mid-day meal."
  },
  {
    id: 3,
    name: "Egg & Bread",
    category: "Breakfast",
    price: "25.00$",
    time: "10 min",
    rating: "4.7",
    image: "🍳",
    bgColor: "bg-yellow-50",
    desc: "Classic sunny-side up artisanal breakfast sandwich crafted with freshly baked sourdough toast, vitamin-rich organic free-range eggs, and micro-herbs."
  },
  {
    id: 4,
    name: "Sweet pancake",
    category: "Dessert",
    price: "13.00$",
    time: "10 min",
    rating: "4.9",
    image: "🥞",
    bgColor: "bg-red-50",
    desc: "Delicate fluffy miniature hotcakes drizzled elegantly with organic single-origin honey, accompanied by seasonal garden fresh mixed berries."
  }
];

const CATEGORIES = ["All", "Breakfast", "Lunch", "Treats", "Dessert", "Drinks"];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("menu");
  const [selectedItem, setSelectedItem] = useState(null); 
  const [favorites, setFavorites] = useState([]);

  // Filter logic for categories and search bar inputs
  const filteredFood = FOOD_DATA.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen w-full bg-[#DEEAE5] flex items-center justify-center p-4 font-sans antialiased text-slate-800">
      
      {/* Container simulating a sleek modern phone frame wrapper */}
      <div className="w-full max-w-[380px] h-[720px] bg-white rounded-[42px] shadow-2xl overflow-hidden flex flex-col border-[8px] border-slate-900 relative">
        
        {/* VIEW 1: IMMERSIVE DETAIL SCREEN */}
        {selectedItem ? (
          <div className="flex flex-col h-full bg-white animate-fadeIn">
            
            {/* Scrollable container for the details so items don't overflow the screen bottom */}
            <div className="flex-grow overflow-y-auto pb-16 scrollbar-none">
              
              {/* Immersive Detail Header Image Container */}
              <div className="h-[280px] bg-[#E3EFEA] p-6 flex flex-col justify-between relative rounded-b-[36px] overflow-hidden">
                <div className="flex justify-between items-center z-10">
                  <button 
                    onClick={() => setSelectedItem(null)} 
                    className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md text-[#0E7068] hover:scale-105 transition-transform"
                  >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                  </button>
                  <button className="w-10 h-10 bg-[#0E7068] rounded-xl flex items-center justify-center shadow-md text-white">
                    <ShoppingBag size={18} />
                  </button>
                </div>
                
                {/* Central Stylized Visual Asset Platform */}
                <div className="absolute inset-0 flex items-center justify-center text-[110px] select-none opacity-90 pt-8">
                  {selectedItem.image}
                </div>
              </div>

              {/* Core Item Information Details Pane */}
              <div className="p-6 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-extrabold text-slate-900">{selectedItem.name}</h2>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mt-1">
                    <span className="flex items-center gap-1"><Clock size={14} className="text-[#0E7068]" /> {selectedItem.time}</span>
                    <span className="flex items-center gap-1"><Star size={14} className="text-amber-500 fill-amber-500" /> {selectedItem.rating}</span>
                  </div>
                </div>

                <div className="text-xl font-black text-slate-900 mb-4">{selectedItem.price}</div>
                
                <p className="text-xs text-slate-500 font-medium leading-relaxed tracking-wide text-justify">
                  {selectedItem.desc}
                </p>

                {/* Recently Viewed Segment Carousel */}
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Recently Viewed</h3>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                    {FOOD_DATA.filter(f => f.id !== selectedItem.id).map(favItem => (
                      <div 
                        key={favItem.id} 
                        onClick={() => setSelectedItem(favItem)}
                        className="min-w-[70px] h-[70px] bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm cursor-pointer hover:scale-105 transition-transform"
                      >
                        {favItem.image}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detail Action Control Bar sitting natively in flow */}
                <div className="flex items-center gap-4 mt-8">
                  <button 
                    onClick={() => toggleFavorite(selectedItem.id)}
                    className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all shrink-0 ${
                      favorites.includes(selectedItem.id) 
                        ? 'bg-rose-50 border-rose-300 text-rose-500' 
                        : 'border-slate-200 text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <Heart size={20} fill={favorites.includes(selectedItem.id) ? "currentColor" : "none"} />
                  </button>
                  <button 
                    onClick={() => alert(`${selectedItem.name} successfully added to checkout cart!`)}
                    className="flex-grow h-12 bg-[#0E7068] hover:bg-[#0A534D] text-white font-bold rounded-2xl shadow-lg shadow-emerald-900/10 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    Add to cart
                  </button>
                </div>

              </div>
            </div>
          </div>
        ) : (
          
          /* VIEW 2: COMPREHENSIVE BROWSE MENU DASHBOARD */
          <div className="flex flex-col h-full bg-[#E5EFEA] pb-14">
            
            {/* Top Branding Global Menu Panel */}
            <div className="p-6 pb-4">
              <div className="flex justify-between items-center mb-5">
                <h1 className="text-3xl font-black tracking-tight text-slate-900">Menu</h1>
                <button className="w-10 h-10 bg-[#0E7068] text-white rounded-xl flex items-center justify-center shadow-sm">
                  <ShoppingBag size={18} />
                </button>
              </div>

              {/* Custom Input Box Field */}
              <div className="relative w-full mb-2">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-2xl placeholder-slate-400 focus:outline-none focus:bg-white border border-transparent focus:border-emerald-600/20 text-slate-800 shadow-sm transition-all"
                />
              </div>
            </div>

            {/* Horizontal Filter Navigation Tab Items Wrapper */}
            <div className="px-6 overflow-x-auto whitespace-nowrap pb-4 scrollbar-none flex gap-6 text-xs font-bold text-slate-400/90">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative pb-1 transition-colors ${
                    selectedCategory === category ? 'text-slate-900 font-extrabold scale-105' : 'hover:text-slate-600'
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-900 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Responsive Main Foods Scrolling Area Block Grid */}
            <div className="flex-grow bg-white rounded-t-[36px] p-5 overflow-y-auto shadow-inner grid grid-cols-2 gap-4 content-start pb-8">
              {filteredFood.length > 0 ? (
                filteredFood.map(food => (
                  <div 
                    key={food.id}
                    onClick={() => setSelectedItem(food)}
                    className="bg-white border border-slate-50 rounded-3xl p-3 flex flex-col justify-between shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 group transform hover:-translate-y-0.5"
                  >
                    {/* Item Frame Image Plate Graphic Top */}
                    <div className={`w-full h-24 ${food.bgColor} rounded-2xl flex items-center justify-center text-4xl mb-3 relative overflow-hidden group-hover:scale-95 transition-transform`}>
                      {food.image}
                    </div>

                    {/* Food Information Labels Body */}
                    <div>
                      <h3 className="text-xs font-bold text-slate-800 truncate mb-1">{food.name}</h3>
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold mb-2">
                        <span className="flex items-center gap-0.5"><Clock size={10} /> {food.time}</span>
                        <span className="flex items-center gap-0.5 text-amber-500"><Star size={10} className="fill-amber-500" /> {food.rating}</span>
                      </div>
                      <div className="text-xs font-extrabold text-slate-900">{food.price}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-slate-400 text-xs font-medium font-mono">
                  No matching menu records found.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Global Structural Sticky App Shell Footer Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t border-slate-100 px-6 flex justify-between items-center z-20">
          <button onClick={() => { setSelectedItem(null); setActiveTab('menu'); }} className={`flex items-center gap-1 text-[11px] font-bold ${activeTab === 'menu' ? 'text-[#0E7068]' : 'text-slate-300'}`}>
            <MenuIcon size={16} /> <span>Menu</span>
          </button>
          <button onClick={() => setActiveTab('fav')} className={`flex items-center gap-1 text-[11px] font-bold ${activeTab === 'fav' ? 'text-[#0E7068]' : 'text-slate-300'}`}>
            <Heart size={16} />
          </button>
          <button onClick={() => setActiveTab('orders')} className={`flex items-center gap-1 text-[11px] font-bold ${activeTab === 'orders' ? 'text-[#0E7068]' : 'text-slate-300'}`}>
            <ListOrdered size={16} />
          </button>
          <button onClick={() => setActiveTab('user')} className={`flex items-center gap-1 text-[11px] font-bold ${activeTab === 'user' ? 'text-[#0E7068]' : 'text-slate-300'}`}>
            <User size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}