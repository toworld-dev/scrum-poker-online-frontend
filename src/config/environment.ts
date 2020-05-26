export default {
  httpURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : `https://scrumpoker-api.toworld.dev/`,
  socketURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : `https://scrumpoker-api.toworld.dev/`,
  analyticsCode: 'UA-146436412-2',
};
