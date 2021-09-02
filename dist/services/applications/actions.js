"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require("../../constants/requestTypes"),
    GET = _require.GET,
    POST = _require.POST;

var actions = _defineProperty({
  listOperators: {
    method: GET,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/operators"
  }
}, "listOperators", {
  method: POST,
  endpoint: "/settings_by_channel_custom_type/{custom_type}/ban"
});

module.exports = actions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9hcHBsaWNhdGlvbnMvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiR0VUIiwiUE9TVCIsImFjdGlvbnMiLCJsaXN0T3BlcmF0b3JzIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OztlQUVzQkEsUUFBUSw4QkFBUixDO0lBQWRDLEcsWUFBQUEsRztJQUFLQyxJLFlBQUFBLEk7O0FBRWIsSUFBTUM7QUFDSkMsaUJBQWU7QUFDYkMsWUFBUUosR0FESztBQUViSyxjQUFVO0FBRkc7QUFEWCxvQkFLVztBQUNiRCxVQUFRSCxJQURLO0FBRWJJLFlBQVU7QUFGRyxDQUxYLENBQU47O0FBV0FDLE9BQU9DLE9BQVAsR0FBaUJMLE9BQWpCIiwiZmlsZSI6ImFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBHRVQsIFBPU1QgfSA9IHJlcXVpcmUoXCIuLi8uLi9jb25zdGFudHMvcmVxdWVzdFR5cGVzXCIpO1xuXG5jb25zdCBhY3Rpb25zID0ge1xuICBsaXN0T3BlcmF0b3JzOiB7XG4gICAgbWV0aG9kOiBHRVQsXG4gICAgZW5kcG9pbnQ6IFwiL3NldHRpbmdzX2J5X2NoYW5uZWxfY3VzdG9tX3R5cGUve2N1c3RvbV90eXBlfS9vcGVyYXRvcnNcIixcbiAgfSxcbiAgbGlzdE9wZXJhdG9yczoge1xuICAgIG1ldGhvZDogUE9TVCxcbiAgICBlbmRwb2ludDogXCIvc2V0dGluZ3NfYnlfY2hhbm5lbF9jdXN0b21fdHlwZS97Y3VzdG9tX3R5cGV9L2JhblwiLFxuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhY3Rpb25zO1xuIl19