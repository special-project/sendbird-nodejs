"use strict";

const _ = require("lodash");
const actions = require("./actions");

const createService = require("../../utils/createService");

module.exports = function (request) {
  return createService(request, "/applications", actions);
};
