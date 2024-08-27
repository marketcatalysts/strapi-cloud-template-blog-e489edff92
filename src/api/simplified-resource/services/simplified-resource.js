'use strict';

/**
 * simplified-resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::simplified-resource.simplified-resource');
