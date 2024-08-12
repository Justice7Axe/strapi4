"use strict";

/**
 * A set of functions called "actions" for `transfer-cars`
 */

module.exports = {
  async transferCars(ctx) {
    try {
      const data = await strapi
        .service("api::transfer-cars.transfer-cars")
        .transferCars(ctx.request.body);
      ctx.body = data;
    } catch (error) {
      ctx.badRequest("product-reviews 컨트롤러에서 에러 발생", {
        moreDetails: error,
      });
    }
  },
};
