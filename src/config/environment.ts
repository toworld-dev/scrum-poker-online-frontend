export default {
  httpURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : `https://toworld-scrum-poker-online.herokuapp.com/`,
  socketURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : `https://toworld-scrum-poker-online.herokuapp.com/`,
  analyticsCode: 'UA-146436412-2',
};
