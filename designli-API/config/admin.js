module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5a366220d1825fbb534a5341a277447c'),
  },
});
