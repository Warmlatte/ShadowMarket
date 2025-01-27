console.log("STATIC_PASSWORD:", process.env.STATIC_PASSWORD);

export const authService = {
  async verifyStaticPassword(password) {
    return password === process.env.STATIC_PASSWORD;
  },
};
