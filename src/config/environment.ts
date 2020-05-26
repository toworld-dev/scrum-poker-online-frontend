export default {
  httpURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : process.env.PROD_URL,
  socketURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : process.env.PROD_URL,
  analyticsCode: process.env.ANALYTICS || '',
};
