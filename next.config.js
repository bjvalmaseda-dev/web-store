/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'cdn.pixabay.com', 'placeimg.com', 'www.libreriahuequito.com', 'thumbs.dreamstime.com'],
  },
  /*env: {
    customKey: 'customValue', //to work with environments variables
  },
  basePath: '/dist', //where is generate the projects
  compress: true, //compress gzip active
  //redirects urls
  async redirects() {
    return [
      {
        source: '/hola',
        destination: '/hi', //can be https://urls
        permanent: true,
      },
    ];
  },*/
};

module.exports = nextConfig;
