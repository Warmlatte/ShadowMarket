export const authService = {
  async verifyStaticPassword(password) {
    return password === process.env.STATIC_PASSWORD;
  },
};
