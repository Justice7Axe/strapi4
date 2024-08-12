module.exports = {
  routes: [
    {
      method: "POST",
      path: "/transfer-cars",
      handler: "transfer-cars.transferCars",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
