"use strict";

const { GET, POST } = require("../../constants/requestTypes");

const actions = {
  listOperators: {
    method: GET,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/operators",
  },
  banUsers: {
    method: POST,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/ban",
  },
  listBannedUsers: {
    method: GET,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/ban",
  },
  unbanUsers: {
    method: DELETE,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/ban",
  },
};

module.exports = actions;
