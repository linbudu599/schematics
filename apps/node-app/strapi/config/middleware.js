module.exports = {
  timeout: 2000,
  load: {
    before: ['responseTime', 'logger', 'cors', 'responses'],
    order: [
      "Define the middlewares' load order by putting their name in this array in the right order",
    ],
    after: ['parser', 'router'],
  },
  settings: {
    cors: {
      // origin: [
      //   "http://localhost",
      //   "https://mysite.com",
      //   "https://www.mysite.com",
      // ],
    },
    'middleware-name': {
      enableld: true,
    },
  },
};
