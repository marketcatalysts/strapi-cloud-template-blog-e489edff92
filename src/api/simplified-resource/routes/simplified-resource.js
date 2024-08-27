'use strict';

/**
 * simplified-resource router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::simplified-resource.simplified-resource');
