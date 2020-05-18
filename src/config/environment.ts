export default {
  httpURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : `https://toworld.dev/`,
  socketURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : `https://toworld.dev/`,
};
