'use strict';

var _ = require('lodash');
var actions = require('./actions');

var createService = require('../../utils/createService');

var messagesService = require('../messages');
var metadataService = require('../metadata');
var metacounterService = require('../metacounter');

module.exports = function (request) {
    var service = createService(request, '/open_channels', actions);
    service.messages = messagesService(request, '/open_channels/{channel_url}');
    service.metadata = metadataService(request, '/open_channels/{channel_url}');
    service.metacounter = metacounterService(request, '/open_channels/{channel_url}');
    return service;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9vcGVuQ2hhbm5lbHMvaW5kZXguanMiXSwibmFtZXMiOlsiXyIsInJlcXVpcmUiLCJhY3Rpb25zIiwiY3JlYXRlU2VydmljZSIsIm1lc3NhZ2VzU2VydmljZSIsIm1ldGFkYXRhU2VydmljZSIsIm1ldGFjb3VudGVyU2VydmljZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1ZXN0Iiwic2VydmljZSIsIm1lc3NhZ2VzIiwibWV0YWRhdGEiLCJtZXRhY291bnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsSUFBSUMsUUFBUSxRQUFSLENBQVY7QUFDQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7O0FBRUEsSUFBTUUsZ0JBQWdCRixRQUFRLDJCQUFSLENBQXRCOztBQUVBLElBQU1HLGtCQUFrQkgsUUFBUSxhQUFSLENBQXhCO0FBQ0EsSUFBTUksa0JBQWtCSixRQUFRLGFBQVIsQ0FBeEI7QUFDQSxJQUFNSyxxQkFBcUJMLFFBQVEsZ0JBQVIsQ0FBM0I7O0FBRUFNLE9BQU9DLE9BQVAsR0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNoQyxRQUFNQyxVQUFVUCxjQUFjTSxPQUFkLEVBQXVCLGdCQUF2QixFQUF5Q1AsT0FBekMsQ0FBaEI7QUFDQVEsWUFBUUMsUUFBUixHQUFtQlAsZ0JBQWdCSyxPQUFoQixFQUF5Qiw4QkFBekIsQ0FBbkI7QUFDQUMsWUFBUUUsUUFBUixHQUFtQlAsZ0JBQWdCSSxPQUFoQixFQUF5Qiw4QkFBekIsQ0FBbkI7QUFDQUMsWUFBUUcsV0FBUixHQUFzQlAsbUJBQW1CRyxPQUFuQixFQUE0Qiw4QkFBNUIsQ0FBdEI7QUFDQSxXQUFPQyxPQUFQO0FBQ0gsQ0FORCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG5jb25zdCBjcmVhdGVTZXJ2aWNlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY3JlYXRlU2VydmljZScpO1xuXG5jb25zdCBtZXNzYWdlc1NlcnZpY2UgPSByZXF1aXJlKCcuLi9tZXNzYWdlcycpO1xuY29uc3QgbWV0YWRhdGFTZXJ2aWNlID0gcmVxdWlyZSgnLi4vbWV0YWRhdGEnKTtcbmNvbnN0IG1ldGFjb3VudGVyU2VydmljZSA9IHJlcXVpcmUoJy4uL21ldGFjb3VudGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gY3JlYXRlU2VydmljZShyZXF1ZXN0LCAnL29wZW5fY2hhbm5lbHMnLCBhY3Rpb25zKTtcbiAgICBzZXJ2aWNlLm1lc3NhZ2VzID0gbWVzc2FnZXNTZXJ2aWNlKHJlcXVlc3QsICcvb3Blbl9jaGFubmVscy97Y2hhbm5lbF91cmx9Jyk7XG4gICAgc2VydmljZS5tZXRhZGF0YSA9IG1ldGFkYXRhU2VydmljZShyZXF1ZXN0LCAnL29wZW5fY2hhbm5lbHMve2NoYW5uZWxfdXJsfScpO1xuICAgIHNlcnZpY2UubWV0YWNvdW50ZXIgPSBtZXRhY291bnRlclNlcnZpY2UocmVxdWVzdCwgJy9vcGVuX2NoYW5uZWxzL3tjaGFubmVsX3VybH0nKTtcbiAgICByZXR1cm4gc2VydmljZTtcbn07Il19