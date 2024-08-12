"use strict";

/**
 * transfer-cars service
 */

module.exports = {
  transferCars: async (request) => {
    const { startName, endName } = request;
    try {
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
