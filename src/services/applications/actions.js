"use strict";

const { GET, POST } = require("../../constants/requestTypes");

const actions = {
  listOperators: {
    method: GET,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/operators",
  },
};

module.exports = actions;
