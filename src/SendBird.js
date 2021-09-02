"use strict";

const rp = require("request-promise");

const DEFAULT_BASE_URL = "https://api.sendbird.com/v3/";

// users
const usersService = require("./services/users");
// open channel
const openChannelsService = require("./services/openChannels");
// group channel
const groupChannelsService = require("./services/groupChannels");
// applications
const applicationsService = require("./services/applications");

function SendBird(apiToken, baseUrl = DEFAULT_BASE_URL) {
  if (!apiToken) {
    throw new Error("Invalid api token");
  }
  const request = rp.defaults({
    baseUrl,
    headers: {
      "Api-Token": apiToken,
    },
    json: true,
  });

  const api = {};

  api.users = usersService(request);
  api.openChannels = openChannelsService(request);
  api.groupChannels = groupChannelsService(request);
  api.applications = applicationsService(request);

  return api;
}

module.exports = SendBird;
