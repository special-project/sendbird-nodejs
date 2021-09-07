"use strict";

const { GET, POST, DELETE } = require("../../constants/requestTypes");

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
    endpoint:
      "/settings_by_channel_custom_type/{custom_type}/ban?user_ids={user_ids}",
  },
};

module.exports = actions;
