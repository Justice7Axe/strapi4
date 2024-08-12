"use strict";

/**
 * A set of functions called "actions" for `transfer-cars`
 */

module.exports = {
  async transferCars(ctx) {
    // ctx 객체에서 url로 들어온 id를 뽑아 productId에 할당한다.
    const { startName, endEnd } = ctx.request.body;
    try {
      const data = await strapi
        .service("api::transfer-cars.transfer-cars")
        // services에서 만들어놓은 productReviews에 productId를 넘겨준다.
        .transferCars(ctx.request.body);
      // service의 결과값인 data를 ctx 객체의 body에 할당한다.
      ctx.body = data;
    } catch (error) {
      ctx.badRequest("product-reviews 컨트롤러에서 에러 발생", {
        moreDetails: error,
      });
    }
  },
};
