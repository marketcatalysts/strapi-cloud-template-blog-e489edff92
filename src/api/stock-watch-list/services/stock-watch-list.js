'use strict';

/**
 * stock-watch-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stock-watch-list.stock-watch-list');
