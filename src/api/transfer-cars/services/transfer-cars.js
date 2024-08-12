"use strict";

/**
 * transfer-cars service
 */

module.exports = {
  transferCars: async (request) => {
    const { startName, endName } = request;
    try {
      // strapi가 제공하는 entityService의 findOne 메소드로 productId에 해당하는 product를 찾는다.
      const entries = await strapi.entityService.findMany(
        "api::airport-pickup-sending.airport-pickup-sending",
        { filters: { startname: startName, endname: endName } }
      );
      return entries;
    } catch (err) {
      return err;
    }
  },
};
