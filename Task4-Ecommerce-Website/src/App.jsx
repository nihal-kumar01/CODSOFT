import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
const PRODUCTS = [
  {
    id: 1,
    name: "Women's black vest Gucci",
    brand: "Gucci",
    price: 715,
    rating: 4.9,
    image: "🧥",
    category: "Dresses",
    desc: "This is a wonderful black vest, which is well suited for parties and matches great with seasonal accessories."
  },
  {
    id: 2,
    name: "Red dress Valentino",
    brand: "Valentino",
    price: 1610,
    rating: 5.0,
    image: "👗",
    category: "Dresses",
    desc: "A very stylish and sexy dress for special occasions, formal parties, and social high-profile events."
  },
  {
    id: 3,
    name: "Shiny dress Givenchy",
    brand: "Givenchy",
    price: 540,
    rating: 4.8,
    image: "✨",
    category: "Dresses",
    desc: "A shiny dress in the style of Lady Gaga, optimized carefully for bright events, red carpets, and cool parties."
  },
  {
    id: 4,
    name: "Denim Utility Overcoat",
    brand: "Dolce & Gabbana",
    price: 890,
    rating: 4.7,
    image: "🧥",
    category: "Denim Jackets",
    desc: "Rugged yet sophisticated classic piece perfect for layer setups. Built from premium dense raw denim."
  }
];

const BRANDS = [
  { name: "Louis Vuitton", icon: "👜" },
  { name: "Dolce & Gabbana", icon: "👗" },
  { name: "Gucci", icon: "👛" },
  { name: "Dries van Noten", icon: "👠" }
];

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased">
      
      {/* ================= HEADER ================= */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-black text-sm">B</div>
          <span className="text-xl font-black tracking-tight">B-Shop</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-500">
          <span onClick={() => setSelectedCategory("All")} className="text-black border-b-2 border-black pb-1 cursor-pointer">Home</span>
          <span onClick={() => setSelectedCategory("Dresses")} className="hover:text-black transition-colors cursor-pointer">Shop</span>
          <span className="hover:text-black transition-colors cursor-pointer">Blog</span>
          <span className="hover:text-black transition-colors cursor-pointer">Contact</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input 
              type="text" 
              placeholder="Search labels..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-1.5 bg-slate-50 rounded-full text-xs font-medium focus:outline-none border border-transparent focus:border-slate-200 w-44 focus:w-56 transition-all"
            />
          </div>
          <button className="relative p-2 hover:bg-slate-50 rounded-full transition-colors">
            <ShoppingBag size={18} strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* ================= HERO BANNER ================= */}
      <header className="max-w-6xl mx-auto px-6 pt-8 pb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 space-y-6">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Admire Stylish <br />
            <span className="text-rose-500">Dresses & Looks</span>
          </h1>
          <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
            If you wanted to build a luxury style profile to offer automated outfit advice, we curated the exact pieces needed to understand fashion tastes.
          </p>
          <button 
            onClick={() => document.getElementById('browse-collection')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-black hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <span>Show More</span>
            <ArrowRight size={14} />
          </button>
        </div>
        <div className="md:col-span-7 bg-slate-200 h-[340px] rounded-[32px] overflow-hidden relative shadow-inner flex items-center justify-center">
          <span className="text-[140px] select-none">👩‍🦰</span>
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/40 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Trending Now</span>
            <span className="text-xs font-bold text-slate-900">Spring Couture Collection</span>
          </div>
        </div>
      </header>

      {/* ================= ASYMMETRICAL PROMO GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
        <div 
          onClick={() => setSelectedCategory("All")}
          className="sm:col-span-6 bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-[28px] h-48 flex justify-between items-center relative overflow-hidden cursor-pointer shadow-sm"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-black text-indigo-950">Women<br />Collection</h3>
            <span className="text-[10px] font-bold text-indigo-600 bg-white px-2 py-1 rounded-md">Spring 2026</span>
          </div>
          <span className="text-7xl select-none">💃</span>
        </div>

        <div className="sm:col-span-3 bg-slate-100 p-6 rounded-[28px] h-48 flex flex-col justify-between shadow-sm">
          <span className="text-xs font-extrabold text-slate-400">24 Items</span>
          <h3 className="text-lg font-black text-slate-800">Bestsellers</h3>
        </div>

        <div className="sm:col-span-3 flex flex-col gap-4">
          <div 
            onClick={() => setSelectedCategory("Dresses")}
            className={`p-4 rounded-[22px] flex-grow flex items-center justify-between cursor-pointer transition-all ${selectedCategory === "Dresses" ? 'bg-black text-white' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
          >
            <span className="text-xs font-bold tracking-wide">Dresses</span>
            <span className="text-2xl">👗</span>
          </div>
          <div 
            onClick={() => setSelectedCategory("Denim Jackets")}
            className={`p-4 rounded-[22px] flex-grow flex items-center justify-between cursor-pointer transition-all ${selectedCategory === "Denim Jackets" ? 'bg-black text-white' : 'bg-rose-400 text-white hover:bg-rose-500'}`}
          >
            <span className="text-xs font-bold tracking-wide">Denim Jackets</span>
            <span className="text-2xl">🧥</span>
          </div>
        </div>
      </section>

      {/* ================= BRAND TICKER ================= */}
      <section className="bg-white my-12 py-8 border-y border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:justify-between">
            {BRANDS.map((brand, i) => (
              <div key={i} className="flex items-center gap-2 opacity-50 cursor-pointer">
                <span className="text-xl">{brand.icon}</span>
                <span className="text-sm font-black uppercase tracking-widest font-serif">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCT DISPLAY ================= */}
      <main id="browse-collection" className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight text-slate-900">You may like</h2>
            <p className="text-[11px] font-bold text-slate-400">Active Filter: <span className="text-slate-800">{selectedCategory}</span></p>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400"><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400"><ChevronRight size={16} /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="bg-white border border-slate-100 rounded-[28px] p-4 shadow-sm flex flex-col justify-between group">
                
                <div className="h-52 bg-slate-50 rounded-[22px] relative flex items-center justify-center text-7xl select-none mb-4">
                  {product.image}
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border ${favorites.includes(product.id) ? 'text-rose-500 border-rose-100' : 'text-slate-300'}`}
                  >
                    <Heart size={14} fill={favorites.includes(product.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="space-y-1 px-1 flex-grow">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-slate-400">
                    <span>{product.brand}</span>
                    <span className="flex items-center gap-0.5 text-amber-500"><Star size={10} className="fill-amber-500" /> {product.rating}</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-800 truncate">{product.name}</h3>
                  <p className="text-[11px] text-slate-400 font-medium leading-normal line-clamp-2 pt-1">{product.desc}</p>
                </div>

                <div className="flex justify-between items-center pt-4 px-1 mt-auto">
                  <div className="text-lg font-black text-slate-900">${product.price}</div>
                  <button 
                    onClick={() => setCartCount(prev => prev + 1)}
                    className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-black hover:text-white font-extrabold text-[11px] uppercase tracking-wider rounded-xl transition-all"
                  >
                    Shop Now
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-xs font-mono text-slate-400">
              No matching products found.
            </div>
          )}
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-100 mt-24 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-200 rounded flex items-center justify-center text-slate-700 font-black text-xs">B</div>
            <span>© 2026 B-Shop Inc. Storefront Asset.</span>
          </div>
          <div className="flex items-center gap-6 font-bold uppercase tracking-widest text-[10px] text-slate-400">
            <span className="hover:text-black cursor-pointer">TW</span>
            <span className="hover:text-black cursor-pointer">IG</span>
            <span className="hover:text-black cursor-pointer">FB</span>
          </div>
        </div>
      </footer>

    </div>
  );
}