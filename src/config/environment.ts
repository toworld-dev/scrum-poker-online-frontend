export default {
  httpURL:
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3000/'
      : `https://toworld.dev/`,
  socketURL:
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3000/'
      : `https://toworld.dev/`,
};
