module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3d507275c83ce809b31a87940794553b'),
  },
});
