module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b033b1ac7bded49f403b3ceacfe20c9e'),
  },
});
