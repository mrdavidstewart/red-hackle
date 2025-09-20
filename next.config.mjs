/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: "SAMEORIGIN"
          },
          {
            key: 'X-Content-Type-Options',
            value: "nosniff"
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com https://www.google.com https://maps.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https:",
              "connect-src 'self' https://api.calendly.com https://maps.googleapis.com",
              "frame-src 'self' https://calendly.com https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'"
            ].join('; ')
          }
        ]
      }
    ]
  },
  
  // Image optimization and security
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app',
        port: '',
        pathname: '/**',
      }
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Added from updates
  },

  // Disable x-powered-by header
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Strict mode
  reactStrictMode: true,

  // Server external packages (moved from experimental.serverComponentsExternalPackages)
  serverExternalPackages: [],

  // Environment variables validation
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // ESLint and TypeScript configurations
  eslint: {
    ignoreDuringBuilds: true, // Added from updates
  },
  typescript: {
    ignoreBuildErrors: true, // Added from updates
  },
}

export default nextConfig
