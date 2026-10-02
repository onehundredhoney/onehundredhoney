"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <main className="min-h-screen flex flex-col font-sans text-brand-text selection:bg-brand-gold/30">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-brand-gold/10 transition-all duration-300">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-1 group relative z-40">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105 -ml-2 -translate-y-1.5">
                            <Image
                                src="/ms-icon-150x150.png"
                                alt="OneHundred Logo"
                                fill
                                className="object-contain drop-shadow-sm scale-125"
                            />
                        </div>
                        <div className="flex flex-col justify-center -mt-1">
                            <span className="font-spartan font-bold text-lg md:text-xl tracking-[0.1em] text-brand-text leading-none">
                                ONEHUNDRED
                            </span>
                            <span className="font-spartan text-[10px] tracking-[0.2em] text-brand-gray uppercase leading-tight mt-0.5">
                                OFFICIAL STORE
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-12 font-spartan font-medium text-sm md:text-base tracking-wide text-brand-gray">
                        <Link href="/" className="text-brand-text hover:text-brand-gold transition-colors">Home</Link>
                        <Link href="#our-honey" className="hover:text-brand-gold transition-colors">Our Honey</Link>
                        <Link href="#philosophy" className="hover:text-brand-gold transition-colors">About Us</Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-6">

                        <a
                            href="https://www.instagram.com/100honeyofficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-yellow text-brand-text px-6 py-2.5 rounded-full font-inter font-bold text-xs md:text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-lg shadow-brand-yellow/20"
                        >
                            SHOP NOW
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden p-2 text-brand-text hover:bg-brand-light rounded-lg transition-colors"
                        aria-label="Open menu"
                    >
                        <span className="material-icons text-3xl">menu</span>
                    </button>

                    {/* --- CENTER MODAL MENU --- */}
                    <div
                        className={`fixed inset-0 z-[100] flex items-center justify-center min-h-[100dvh] w-screen transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                            }`}
                    >
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <div
                            className={`relative bg-white w-[85%] max-w-sm rounded-3xl p-8 shadow-2xl transform transition-all duration-300 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                                }`}
                        >
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-colors bg-gray-50 rounded-full"
                            >
                                <span className="material-icons">close</span>
                            </button>

                            <div className="flex flex-col items-center gap-6 py-4">
                                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-spartan font-bold text-brand-dark hover:text-brand-gold transition">Home</Link>
                                <Link href="#our-honey" onClick={() => setIsMenuOpen(false)} className="text-xl font-spartan font-bold text-brand-dark hover:text-brand-gold transition">Our Honey</Link>
                                <Link href="#philosophy" onClick={() => setIsMenuOpen(false)} className="text-xl font-spartan font-bold text-brand-dark hover:text-brand-gold transition">About Us</Link>
                                <div className="w-16 h-0.5 bg-brand-gold/20 my-2" />
                                <a
                                    href="https://www.instagram.com/100honeyofficial/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-brand-yellow hover:bg-brand-gold text-brand-text font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-all text-sm uppercase tracking-wide text-center"
                                >
                                    SHOP NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* SECTIONS IN ORDER OF IMAGE */}

            {/* 1. HERO SECTION (Liquid Honey) */}
            <section className="relative w-full min-h-[500px] md:h-screen md:min-h-[800px] flex items-center bg-brand-dark overflow-hidden pt-24 md:pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/head-section.png"
                        alt="Liquid Honey Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-24">
                    <div className="max-w-2xl text-white">
                        <h1 className="font-spartan font-semibold text-4xl md:text-7xl lg:text-[80px] leading-[1.1] mb-6 md:mb-8 drop-shadow-xl">
                            Tubuh kamu berhak dapat yang <br />
                            <span className="font-bold">100% jujur</span>
                        </h1>
                        <p className="font-spartan text-base md:text-2xl font-light leading-relaxed opacity-95 mb-8 md:mb-12 max-w-xl shadow-black drop-shadow-md">
                            OneHundred: Bukan sekadar madu, tapi investasi nutrisi yang tubuh Anda kenali manfaatnya sejak tetes pertama.
                        </p>
                        <div className="flex flex-wrap gap-4 md:gap-5">
                            <button className="bg-brand-yellow text-brand-dark px-8 md:px-10 py-3 md:py-4 rounded-full font-spartan font-bold text-xs md:text-base uppercase tracking-widest hover:scale-105 hover:bg-[#ffe066] transition-all shadow-xl shadow-brand-yellow/30">
                                JELAJAHI RASA
                            </button>
                            <Link href="#philosophy" className="bg-brand-light/10 backdrop-blur-sm border-2 border-brand-light/30 text-brand-light px-8 md:px-10 py-3 md:py-4 rounded-full font-spartan font-bold text-xs md:text-base uppercase tracking-widest hover:bg-brand-light hover:text-brand-dark transition-all">
                                OUR STORY
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SHOP SECTION (Start Your OneHundred Honey) */}
            <section id="shop" className="py-16 md:py-32 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat relative">
                <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
                        <div className="max-w-md">
                            <h2 className="font-spartan font-medium text-brand-text text-2xl md:text-[42px] leading-tight">
                                Start Your <br />
                                <span className="font-bold">OneHundred Honey</span>
                            </h2>
                        </div>
                        <a
                            href="https://www.instagram.com/100honeyofficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 bg-brand-yellow px-6 md:px-8 py-2.5 md:py-3 rounded-full font-inter font-bold text-brand-text uppercase text-xs md:text-sm tracking-wide shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/40 hover:-translate-y-1 transition-all"
                        >
                            SHOP ALL
                        </a>
                    </div>

                    {/* Grid Container for 4 Products */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                        {/* Product Card 1 - Leting */}
                        <div className="group flex flex-col w-full">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg border border-brand-gold/10 bg-brand-light">
                                <Image
                                    src="/leting.png"
                                    alt="Madu Leting"
                                    fill
                                    className="object-contain p-2 md:p-4 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                                />
                                <Image
                                    src="/deskripsi_leting.png"
                                    alt="Deskripsi Madu Leting"
                                    fill
                                    className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                                />
                                <div className="absolute top-0 left-0 bg-[#f4f0e6] px-3 py-1 md:px-6 md:py-2 rounded-br-xl md:rounded-br-2xl transition-opacity duration-300 group-hover:opacity-0">
                                    <span className="font-inter font-medium text-brand-text uppercase text-[10px] md:text-sm tracking-wider">600 g</span>
                                </div>
                            </div>
                            <div className="mt-3 md:mt-6 text-center space-y-0.5 md:space-y-1">
                                <h3 className="font-spartan font-bold text-base md:text-2xl text-brand-text group-hover:text-brand-gold transition-colors">Madu Leting</h3>
                                <p className="font-inter font-medium text-xs md:text-lg text-brand-text/70">RP. 130.000</p>
                            </div>
                        </div>

                        {/* Product Card 2 - Pelawan Merah */}
                        <div className="group flex flex-col w-full md:mt-12">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg border border-brand-gold/10 bg-brand-light">
                                <Image
                                    src="/pelawan_merah.png"
                                    alt="Madu Pelawan"
                                    fill
                                    className="object-contain p-2 md:p-4 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                                />
                                <Image
                                    src="/deskripsi_pelawan_merah.png"
                                    alt="Deskripsi Madu Pelawan"
                                    fill
                                    className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                                />
                                <div className="absolute top-0 left-0 bg-[#f4f0e6] px-3 py-1 md:px-6 md:py-2 rounded-br-xl md:rounded-br-2xl transition-opacity duration-300 group-hover:opacity-0">
                                    <span className="font-inter font-medium text-brand-text uppercase text-[10px] md:text-sm tracking-wider">600 g</span>
                                </div>
                            </div>
                            <div className="mt-3 md:mt-6 text-center space-y-0.5 md:space-y-1">
                                <h3 className="font-spartan font-bold text-base md:text-2xl text-brand-text group-hover:text-brand-gold transition-colors">Madu Pelawan</h3>
                                <p className="font-inter font-medium text-xs md:text-lg text-brand-text/70">RP. 150.000</p>
                            </div>
                        </div>

                        {/* Product Card 3 - Pules */}
                        <div className="group flex flex-col w-full">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg border border-brand-gold/10 bg-brand-light">
                                <Image
                                    src="/pules.png"
                                    alt="Madu Pules"
                                    fill
                                    className="object-contain p-2 md:p-4 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                                />
                                <Image
                                    src="/deskripsi_pules.png"
                                    alt="Deskripsi Madu Pules"
                                    fill
                                    className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                                />
                                <div className="absolute top-0 left-0 bg-[#f4f0e6] px-3 py-1 md:px-6 md:py-2 rounded-br-xl md:rounded-br-2xl transition-opacity duration-300 group-hover:opacity-0">
                                    <span className="font-inter font-medium text-brand-text uppercase text-[10px] md:text-sm tracking-wider">600 g</span>
                                </div>
                            </div>
                            <div className="mt-3 md:mt-6 text-center space-y-0.5 md:space-y-1">
                                <h3 className="font-spartan font-bold text-base md:text-2xl text-brand-text group-hover:text-brand-gold transition-colors">Madu Pules</h3>
                                <p className="font-inter font-medium text-xs md:text-lg text-brand-text/70">RP. 130.000</p>
                            </div>
                        </div>

                        {/* Product Card 4 - Rempudong */}
                        <div className="group flex flex-col w-full md:mt-12">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg border border-brand-gold/10 bg-brand-light">
                                <Image
                                    src="/rempudong.png"
                                    alt="Madu Rempudong"
                                    fill
                                    className="object-contain p-2 md:p-4 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                                />
                                <Image
                                    src="/deskripsi_rempudong.png"
                                    alt="Deskripsi Madu Rempudong"
                                    fill
                                    className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                                />
                                <div className="absolute top-0 left-0 bg-[#f4f0e6] px-3 py-1 md:px-6 md:py-2 rounded-br-xl md:rounded-br-2xl transition-opacity duration-300 group-hover:opacity-0">
                                    <span className="font-inter font-medium text-brand-text uppercase text-[10px] md:text-sm tracking-wider">600 g</span>
                                </div>
                            </div>
                            <div className="mt-3 md:mt-6 text-center space-y-0.5 md:space-y-1">
                                <h3 className="font-spartan font-bold text-base md:text-2xl text-brand-text group-hover:text-brand-gold transition-colors">Madu Rempudong</h3>
                                <p className="font-inter font-medium text-xs md:text-lg text-brand-text/70">RP. 130.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FEATURES SECTION (Dari Alam Untuk Kamu) */}
            <section className="py-16 md:py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
                    <div className="text-center mb-12 md:mb-20">
                        <span className="text-brand-gold font-bold font-spartan text-xs md:text-sm uppercase tracking-[0.2em] block mb-2 md:mb-4">
                            Kenapa pilih madu onehundred
                        </span>
                        <h2 className="text-brand-dark font-serif font-bold text-3xl md:text-5xl">
                            Dari Alam Untuk Kamu
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Feature 1 */}
                        <div className="group bg-brand-off-white border border-[#f8eecb] rounded-[24px] md:rounded-[32px] p-6 md:p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f8eecb] rounded-[20px] md:rounded-[24px] flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-brand-gold text-4xl md:text-5xl">hive</span>
                            </div>
                            <h3 className="font-spartan font-bold text-brand-dark text-xl md:text-2xl mb-3 md:mb-4">100% Madu Murni</h3>
                            <p className="font-spartan text-brand-gray text-base md:text-lg leading-relaxed">
                                Madu asli tanpa tambahan gula atau pengawet. Nutrisi alami tetap terjaga utuh hingga ke tangan Anda.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group bg-brand-off-white border border-[#f8eecb] rounded-[24px] md:rounded-[32px] p-6 md:p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f8eecb] rounded-[20px] md:rounded-[24px] flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-brand-gold text-4xl md:text-5xl">medical_services</span>
                            </div>
                            <h3 className="font-spartan font-bold text-brand-dark text-xl md:text-2xl mb-3 md:mb-4">Menjaga Imunitas</h3>
                            <p className="font-spartan text-brand-gray text-base md:text-lg leading-relaxed">
                                Kaya antioksidan dan enzim alami untuk memperkuat daya tahan tubuh keluarga setiap hari.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group bg-brand-off-white border border-[#f8eecb] rounded-[24px] md:rounded-[32px] p-6 md:p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f8eecb] rounded-[20px] md:rounded-[24px] flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-brand-gold text-4xl md:text-5xl">published_with_changes</span>
                            </div>
                            <h3 className="font-spartan font-bold text-brand-dark text-xl md:text-2xl mb-3 md:mb-4">Garansi Tukar Baru</h3>
                            <p className="font-spartan text-brand-gray text-base md:text-lg leading-relaxed">
                                Botol pecah atau kualitas tidak sesuai? Kami ganti baru secara gratis tanpa ribet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. QUOTE SECTION */}
            <section id="philosophy" className="py-20 md:py-32 bg-[#f3eee1] relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-[1px] border-white/20 rounded-full animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] border-[1px] border-white/20 rounded-full" />
                </div>

                <div className="container mx-auto px-6 md:px-12 max-w-[1200px] relative z-20 flex flex-col items-center text-center">
                    <span className="material-icons text-[60px] md:text-[100px] text-brand-dark mb-6 md:mb-8 opacity-90">format_quote</span>
                    <p className="font-spartan font-medium text-brand-dark text-lg md:text-[32px] leading-[1.6] max-w-4xl">
                        "Madu adalah hadiah terbaik dari alam untuk kesehatan manusia.
                        Sebagai balasannya, kami berkomitmen untuk menjaga, memelihara,
                        dan menyayangi alam tempat lebah-lebah kami bernaung. Kami
                        percaya bahwa semakin baik kita memperlakukan alam, semakin
                        melimpah pula manfaat yang alam berikan kepada kita."
                    </p>
                    <div className="mt-8 md:mt-10 flex items-center gap-4">
                        <div className="w-8 md:w-12 h-1 bg-brand-gold rounded-full" />
                        <span className="font-spartan font-bold text-brand-gold tracking-widest uppercase text-xs md:text-base">ONEHUNDRED PHILOSOPHY</span>
                        <div className="w-8 md:w-12 h-1 bg-brand-gold rounded-full" />
                    </div>
                </div>
            </section>

            {/* 5. OUR HONEY DETAIL SECTION (Image Left, Text Right) */}
            <section id="our-honey" className="py-16 md:py-24 bg-[url('/background-2.png')] bg-cover bg-center relative overflow-hidden">
                {/* Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />

                <div className="container mx-auto px-6 md:px-12 max-w-[1500px] relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">
                        {/* Left Side - Image */}
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-[30px] md:rounded-[40px] p-3 md:p-4 bg-white shadow-2xl rotate-0 md:rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                                <div className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[30px] overflow-hidden">
                                    <Image src="/gradient.png" alt="Our Honey Varieties" fill className="object-cover" />
                                </div>
                                <div className="absolute -right-2 -top-2 md:-right-4 md:-top-4 w-16 h-16 md:w-24 md:h-24 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg animate-bounce duration-[3000ms]">
                                    <span className="material-icons text-brand-text text-2xl md:text-4xl">verified</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full md:w-1/2">
                            <h2 className="font-spartan font-light text-4xl md:text-[64px] text-brand-dark mb-8 md:mb-12">
                                Our <span className="font-bold">Honey</span>
                            </h2>

                            <div className="space-y-6 md:space-y-8">
                                <div className="border-l-4 border-brand-yellow pl-4 md:pl-6">
                                    <h3 className="font-spartan font-bold text-lg md:text-xl text-brand-dark mb-1">Direct Sourcing</h3>
                                    <p className="font-inter text-brand-gray text-base md:text-lg leading-relaxed">
                                        Kami bukan sekadar pengemas. Kami mengenal petani kami dan memastikan proses panen yang etis.
                                    </p>
                                </div>
                                <div className="border-l-4 border-brand-yellow pl-4 md:pl-6">
                                    <h3 className="font-spartan font-bold text-lg md:text-xl text-brand-dark mb-1">Zero Additives</h3>
                                    <p className="font-inter text-brand-gray text-base md:text-lg leading-relaxed">
                                        Tanpa sirup gula, tanpa pengawet, dan tanpa proses pemanasan berlebih yang merusak nutrisi.
                                    </p>
                                </div>
                                <div className="border-l-4 border-brand-yellow pl-4 md:pl-6">
                                    <h3 className="font-spartan font-bold text-lg md:text-xl text-brand-dark mb-1">Raw & Pure</h3>
                                    <p className="font-inter text-brand-gray text-base md:text-lg leading-relaxed">
                                        Madu yang sampai di tangan Anda adalah madu yang sama saat lebah menyimpannya di sarang.
                                    </p>
                                </div>
                                <div className="border-l-4 border-brand-yellow pl-4 md:pl-6">
                                    <h3 className="font-spartan font-bold text-lg md:text-xl text-brand-dark mb-1">Full of Benefits</h3>
                                    <p className="font-inter text-brand-gray text-base md:text-lg leading-relaxed">
                                        Enzim dan kebaikan alami tetap utuh untuk menjaga imunitas keluarga Anda.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 md:mt-12">
                                <a
                                    href="https://www.instagram.com/100honeyofficial/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-brand-yellow text-brand-text px-8 md:px-10 py-3 rounded-full font-spartan font-bold text-sm md:text-base uppercase tracking-wider hover:scale-105 transition-transform shadow-xl shadow-brand-yellow/30"
                                >
                                    SHOP NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1f2937] text-white py-12 md:py-20 border-t border-gray-800">
                <div className="container mx-auto px-6 md:px-12 max-w-[1920px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="relative w-16 h-16 md:w-20 md:h-20">
                                    <Image src="/ms-icon-150x150.png" alt="Logo" fill className="object-contain" />
                                </div>
                                <span className="font-spartan font-bold text-2xl tracking-widest text-white">ONEHUNDRED</span>
                            </div>
                            <p className="text-gray-400 font-inter text-sm leading-relaxed max-w-xs">
                                Bringing the purity of honey to your table. Sustainable, natural, and 100% authentic honey.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-all text-gray-400">
                                    <span className="material-icons text-lg">facebook</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/100honeyofficial/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-all text-gray-400"
                                >
                                    <span className="material-icons text-lg">camera_alt</span>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-all text-gray-400">
                                    <span className="material-icons text-lg">alternate_email</span>
                                </a>
                            </div>
                        </div>

                        {/* Shop Links */}
                        <div>
                            <h4 className="font-spartan font-bold text-lg mb-8 text-brand-gold">Shop</h4>
                            <ul className="space-y-4 font-inter text-gray-400 text-sm">
                                <li><Link href="#" className="hover:text-white transition-colors">All Products</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Gift Sets</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Corporate Orders</Link></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-spartan font-bold text-lg mb-8 text-brand-gold">Company</h4>
                            <ul className="space-y-4 font-inter text-gray-400 text-sm">
                                <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-spartan font-bold text-lg mb-8 text-brand-gold">Contact</h4>
                            <ul className="space-y-6 font-inter text-gray-400 text-sm">
                                <li className="flex gap-4 items-start">
                                    <span className="material-icons text-brand-gold text-xl">location_on</span>
                                    <span>Pangkalpinang,<br />Kepulauan Bangka Belitung</span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="material-icons text-brand-gold text-xl">phone</span>
                                    <span>+62 851 6190 1868</span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <span className="material-icons text-brand-gold text-xl">email</span>
                                    <span>Onehundredhoney@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 font-inter text-sm gap-4">
                        <p>© 2025 OneHundred Honey</p>
                        <div className="flex gap-8">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                        <p className="font-serif italic text-brand-gold">#<span className="font-spartan not-italic text-gray-500">DariAlamUntukKamu</span></p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
