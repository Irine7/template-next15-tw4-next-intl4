// import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: 'export',
//   assetPrefix: '.',
// }

// export default nextConfig

// import {NextConfig} from 'next';
import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);