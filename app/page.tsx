"use client";
import { useState } from "react";

export default function Home() {
  const [showAllMenu, setShowAllMenu] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "American Classic Cheeseburger",
      desc: "Pizza klasik dengan paduan daging sapi cincang, saus mustard, saus tomat, dan keju mozzarella lumer.",
      price: "Rp 85.000",
      imgURL: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Meat Meat Meat",
      desc: "Kombinasi sosis sapi, daging sapi cincang, dan burger sapi yang melimpah untuk pencinta daging.",
      price: "Rp 92.500",
      imgURL: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Cheese Mania",
      desc: "Ekstra keju mozzarella melimpah dipadu saus tomat klasik Domino's.",
      price: "Rp 70.000",
      imgURL: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Extravaganzza",
      desc: "Dilengkapi pepperoni, sosis, paprika hijau, bawang bombay, jamur, zaitun hitam, dan keju.",
      price: "Rp 98.000",
      imgURL: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Meatzza",
      desc: "Sosis sapi, daging sapi cincang, dan smoked beef berpadu dengan limpahan mozzarella.",
      price: "Rp 95.000",
      imgURL: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Veggie Mania",
      desc: "Segar dengan paprika hijau, jamur, bawang bombay, zaitun hitam, cincin tomat dan keju.",
      price: "Rp 75.000",
      imgURL: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Tuna Delight",
      desc: "Irisan ikan tuna panggang yang lezat dengan bawang bombay dan keju mozzarella.",
      price: "Rp 88.000",
      imgURL: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "Chicken Lovers",
      desc: "Potongan dada ayam premium panggang dengan sosis ayam ayam dan paprika.",
      price: "Rp 82.000",
      imgURL: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=500&q=80"
    }
  ];

  /* Data Dummy Lokasi Toko */
  const lokasiToko = [
    { id: 1, nama: "Domino's Pizza Kemang", alamat: "Jl. Kemang Raya No. 10", jam: "10:00 - 23:00" },
    { id: 2, nama: "Domino's Pizza Senopati", alamat: "Jl. Senopati No. 45", jam: "10:00 - 24:00" },
    { id: 3, nama: "Domino's Pizza PIK", alamat: "Pantai Indah Kapuk, ruko blok A", jam: "10:00 - 23:00" },
  ];

  // Limit items shown based on state
  const displayedMenu = showAllMenu ? menuItems : menuItems.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-gray-800">
      {/* Top Banner */}
      <div className="bg-[#136990] text-[#ffffff] text-xs py-2 px-4 flex justify-between items-center sm:px-8">
        <div className="font-semibold tracking-wide">1500-366 | Pesan Antar Domino's Pizza</div>
        <div className="hidden sm:flex gap-4">
          <a href="#" className="hover:underline">Lacak Pesanan</a>
          <a href="#" className="hover:underline">Bantuan</a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-[#016593] text-[#ffffff] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-8 flex justify-between items-center">
          {/* Logo Container */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 flex flex-col transform rotate-45 gap-0.5">
                <div className="w-full h-1/2 bg-[#e61838] rounded-t flex justify-center items-center">
                  <div className="w-1.5 h-1.5 bg-[#ffffff] rounded-full"></div>
                </div>
                <div className="w-full h-1/2 bg-[#016593] rounded-b flex justify-around items-center px-1">
                  <div className="w-1.5 h-1.5 bg-[#ffffff] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#ffffff] rounded-full"></div>
                </div>
              </div>
              Domino's
            </a>
            
            <nav className="hidden md:flex gap-6 font-semibold ml-4">
              <a href="#menu" className="hover:text-[#e61838] transition-colors border-b-2 border-transparent hover:border-[#e61838]">MENU</a>
              <a href="#promo" className="hover:text-[#e61838] transition-colors border-b-2 border-transparent hover:border-[#e61838]">PROMO</a>
              <a href="#lokasi" className="hover:text-[#e61838] transition-colors border-b-2 border-transparent hover:border-[#e61838]">LOKASI TOKO</a>
            </nav>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <a href="#" className="font-semibold hidden sm:block hover:text-gray-200 transition-colors">Masuk / Daftar</a>
            <button className="bg-[#e61838] hover:bg-[#cc213c] text-[#ffffff] font-bold py-2 px-6 rounded-full shadow-md transition-all">
              KERANJANG (0)
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Banner Hero */}
        <section className="bg-[#f8f9fa] flex flex-col md:flex-row items-stretch border-b border-gray-200 relative overflow-hidden min-h-[500px]">
          <div className="md:w-1/2 p-8 md:p-16 lg:p-24 z-10 w-full flex flex-col justify-center">
            <div>
              <span className="inline-block bg-[#e61838] text-[#ffffff] font-bold px-4 py-1.5 rounded-full text-sm mb-6 shadow-md tracking-wider">PROMO SPESIAL</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#016593] leading-tight mb-6 uppercase tracking-tighter drop-shadow-sm">
                Pasti Ekstra, <br /> Pasti Mantap
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium mb-10 max-w-lg leading-relaxed">
                Pesan sekarang dan nikmati garansi pengiriman 30 menit sampai. Rasakan kehangatan pizza dari oven langsung ke tangan Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#menu" className="bg-[#e61838] hover:bg-[#cc213c] text-[#ffffff] px-8 py-4 font-bold rounded-full shadow-lg transition-transform hover:-translate-y-1 text-center uppercase tracking-wide">
                  Mulai Pesan
                </a>
                <a href="#promo" className="bg-[#ffffff] text-[#016593] border-2 border-[#016593] hover:bg-gray-50 px-8 py-4 font-bold rounded-full shadow-sm transition-transform hover:-translate-y-1 text-center uppercase tracking-wide">
                  Lihat Promo
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-64 sm:h-80 md:h-auto relative overflow-hidden md:overflow-visible">
            {/* Background Shape */}
            <div className="hidden md:block absolute inset-0 bg-[#016593] transform skew-x-[-10deg] translate-x-20 shadow-2xl z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80" 
              alt="Promo Pizza" 
              className="w-full h-full object-cover object-center relative z-10 md:absolute md:inset-0 md:rounded-l-[4rem] shadow-2xl md:border-l-[12px] md:border-[#ffffff]"
            />
          </div>
        </section>

        {/* Categories / Steps */}
        <section className="py-12 bg-[#ffffff] relative z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-[#ffffff] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col items-center text-center hover:border-[#136990] hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-[#136990] text-[#ffffff] flex items-center justify-center text-2xl font-bold mb-4 shadow-inner">1</div>
                <h3 className="font-bold text-lg text-[#016593] mb-2">Pilih Pizza Favorit</h3>
                <p className="text-gray-500 text-sm">Temukan berbagai ukuran dan topping lezat sesuai selera Anda.</p>
              </div>
              <div className="bg-[#ffffff] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col items-center text-center hover:border-[#136990] hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-[#136990] text-[#ffffff] flex items-center justify-center text-2xl font-bold mb-4 shadow-inner">2</div>
                <h3 className="font-bold text-lg text-[#016593] mb-2">Sesuaikan Topping</h3>
                <p className="text-gray-500 text-sm">Tambahkan ekstra pepperoni, keju, atau sesuaikan porsi Anda.</p>
              </div>
              <div className="bg-[#ffffff] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col items-center text-center hover:border-[#136990] hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-[#136990] text-[#ffffff] flex items-center justify-center text-2xl font-bold mb-4 shadow-inner">3</div>
                <h3 className="font-bold text-lg text-[#016593] mb-2">Lacak Pesanan</h3>
                <p className="text-gray-500 text-sm">Gunakan Pizza Tracker kami untuk melihat status pesanan real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Menu Section */}
        <section id="menu" className="py-16 max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24">
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-3xl font-black text-[#016593] uppercase tracking-tight">Menu Terlaris</h2>
              <p className="text-gray-500 mt-1 font-medium">Berdasarkan pilihan jutaan pelanggan.</p>
            </div>
            <button 
              onClick={() => setShowAllMenu(!showAllMenu)}
              className="font-bold text-[#cc213c] hover:text-[#e61838] hover:underline cursor-pointer hidden sm:block">
              {showAllMenu ? "Tutup Menu <<" : "Lihat Semua Menu >>"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedMenu.map((item) => (
              <div key={item.id} className="bg-[#ffffff] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 group flex flex-col">
                <div className="relative h-56 overflow-hidden bg-gray-50 p-4 flex items-center justify-center cursor-pointer rounded-t-3xl">
                  <img 
                    src={item.imgURL} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#e61838] text-[#ffffff] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    Promo
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-[#016593] text-xl mb-2 leading-tight cursor-pointer hover:underline">{item.name}</h3>
                  <p className="text-sm text-gray-500 flex-grow mb-6 leading-relaxed">{item.desc}</p>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="font-black text-[#e61838] text-xl">{item.price}</span>
                    <button className="bg-[#016593] hover:bg-[#136990] text-[#ffffff] py-2 px-6 rounded-full font-bold text-sm transition-colors shadow-sm focus:ring-2 focus:ring-[#016593] focus:ring-offset-2">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <button 
              onClick={() => setShowAllMenu(!showAllMenu)}
              className="border-2 border-[#016593] text-[#016593] font-bold py-3 px-8 rounded-full w-full hover:bg-gray-50 transition-colors">
              {showAllMenu ? "Tutup Menu" : "Lihat Semua Menu"}
            </button>
          </div>
        </section>

        {/* PROMO SECTION */}
        <section id="promo" className="py-16 bg-gray-50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl font-black text-[#016593] uppercase tracking-tight mb-8 text-center sm:text-left">
              Promo Spesial Minggu Ini
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Promo Card 1 */}
              <div className="bg-[#136990] text-[#ffffff] rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-lg hover:-translate-y-1 transition-transform">
                <div className="sm:w-2/5 h-48 sm:h-auto bg-white">
                  <img src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=500&q=80" alt="Promo Buy 1 Get 1" className="w-full h-full object-cover"/>
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <span className="bg-[#e61838] w-max text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">Terbatas</span>
                  <h3 className="text-2xl font-black mb-2">Buy 1 Get 1 Free!</h3>
                  <p className="text-sm opacity-90 mb-6">Beli Medium Classic Pizza varian apa saja, dapatkan 1 Personal Pizza gratis. Cocok untuk mabar.</p>
                  <button className="bg-[#ffffff] text-[#136990] hover:bg-gray-100 font-bold py-2.5 px-6 rounded-full w-max shadow-sm transition-colors cursor-pointer">Klaim Promo</button>
                </div>
              </div>
              {/* Promo Card 2 */}
              <div className="bg-[#cc213c] text-[#ffffff] rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-lg hover:-translate-y-1 transition-transform">
                <div className="sm:w-2/5 h-48 sm:h-auto">
                  <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" alt="Promo Combo" className="w-full h-full object-cover"/>
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <span className="bg-[#ffffff] text-[#cc213c] w-max text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">Paket Hemat</span>
                  <h3 className="text-2xl font-black mb-2">Combo Berani</h3>
                  <p className="text-sm opacity-90 mb-6">Nikmati 2 Large Pizza + 1 Garlic Bread + 1 Cola 1L hanya dengan Rp195 Ribu.</p>
                  <button className="bg-[#ffffff] text-[#cc213c] hover:bg-gray-100 font-bold py-2.5 px-6 rounded-full w-max shadow-sm transition-colors cursor-pointer">Klaim Promo</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOKASI TOKO SECTION */}
        <section id="lokasi" className="py-16 max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3 flex flex-col">
              <div className="mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-black text-[#016593] uppercase tracking-tight">Lokasi Toko</h2>
                <p className="text-gray-500 mt-1 font-medium">Temukan store Domino's Pizza terdekat dari tempat Anda.</p>
              </div>
              <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
                {lokasiToko.map((toko) => (
                  <div key={toko.id} className="border border-gray-200 rounded-2xl p-5 hover:border-[#016593] bg-white hover:shadow-md transition-all cursor-pointer">
                    <h3 className="font-bold text-[#016593] text-lg mb-1">{toko.nama}</h3>
                    <p className="text-sm text-gray-500 mb-2 font-medium">{toko.alamat}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#136990] font-bold bg-[#136990] bg-opacity-10 px-2 py-1 rounded-sm">Buka: {toko.jam}</span>
                      <button className="text-[#e61838] font-bold hover:underline">Lihat Rute &rarr;</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-2/3 h-[400px] md:h-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-200 relative">
              {/* Fake Map Implementation */}
              <div className="absolute inset-0 bg-[#016593] opacity-5"></div>
              <div 
                className="w-full h-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')" }}>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl text-center max-w-[250px]">
                  <div className="w-12 h-12 bg-[#e61838] text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <p className="font-bold text-[#016593]">Area Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Delivery Info / CTA */}
        <section className="bg-gradient-to-r from-[#cc213c] to-[#e61838] text-[#ffffff] py-20 relative overflow-hidden rounded-[3rem] mx-4 sm:mx-8 mb-16 shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffffff] opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#136990] opacity-20 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-2xl"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-wider drop-shadow-md">Garansi 30 Menit Sampai</h2>
            <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl opacity-90 leading-relaxed">
              Pengiriman instan. Oven ke pintu dalam waktu singkat. Kalau lewat, kami berikan voucher pizza gratis untuk pesanan selanjutnya.
            </p>
            <button className="bg-[#ffffff] text-[#cc213c] hover:bg-gray-50 font-bold py-4 px-10 rounded-full shadow-xl transition-all text-xl uppercase ring-4 ring-[#ffffff]/30 hover:scale-105">
              Pesan Delivery Sekarang
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#016593] text-[#ffffff] pt-16 pb-8 border-t-8 border-[#e61838] relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-5 text-gray-100 uppercase tracking-wide">Perusahaan</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Karir</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5 text-gray-100 uppercase tracking-wide">Pesanan</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Lacak Pesanan Tracker</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Menu Pizza</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Promo Terbaru</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Informasi Nutrisi & Alergen</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5 text-gray-100 uppercase tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Layanan Pelanggan:</li>
              <li className="font-black text-2xl text-yellow-400 drop-shadow-sm">1500-366</li>
              <li className="mt-4">Email: support@dominos.co.id</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5 text-gray-100 uppercase tracking-wide">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#ffffff] bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:-translate-y-1 transition-all">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#ffffff] bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:-translate-y-1 transition-all">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#ffffff] bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:-translate-y-1 transition-all">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-gray-300 mb-3 uppercase tracking-wider font-semibold">Tersedia di Aplikasi Terpisah</p>
              <button className="bg-[#136990] hover:bg-[#136990]/80 py-2.5 px-5 rounded text-sm font-bold border border-[#136990] w-full text-left flex justify-between items-center transition-colors">
                Unduh Aplikasi
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
