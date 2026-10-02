/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Matikan optimasi gambar (kompatibel dengan Cloudflare Pages)
    images: {
        unoptimized: true,
    },
    // 2. Output untuk Cloudflare Pages (static export)
    output: 'export',
    // 3. Matikan linting saat build
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
