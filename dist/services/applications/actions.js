"use strict";

var _require = require("../../constants/requestTypes"),
    GET = _require.GET,
    POST = _require.POST;

var actions = {
  listOperators: {
    method: GET,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/operators"
  },
  banUsers: {
    method: POST,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/ban"
  },
  listBannedUsers: {
    method: GET,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/ban"
  },
  unbanUsers: {
    method: DELETE,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/ban"
  }
};

module.exports = actions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9hcHBsaWNhdGlvbnMvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiR0VUIiwiUE9TVCIsImFjdGlvbnMiLCJsaXN0T3BlcmF0b3JzIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJiYW5Vc2VycyIsImxpc3RCYW5uZWRVc2VycyIsInVuYmFuVXNlcnMiLCJERUxFVEUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7ZUFFc0JBLFFBQVEsOEJBQVIsQztJQUFkQyxHLFlBQUFBLEc7SUFBS0MsSSxZQUFBQSxJOztBQUViLElBQU1DLFVBQVU7QUFDZEMsaUJBQWU7QUFDYkMsWUFBUUosR0FESztBQUViSyxjQUFVO0FBRkcsR0FERDtBQUtkQyxZQUFVO0FBQ1JGLFlBQVFILElBREE7QUFFUkksY0FBVTtBQUZGLEdBTEk7QUFTZEUsbUJBQWlCO0FBQ2ZILFlBQVFKLEdBRE87QUFFZkssY0FBVTtBQUZLLEdBVEg7QUFhZEcsY0FBWTtBQUNWSixZQUFRSyxNQURFO0FBRVZKLGNBQVU7QUFGQTtBQWJFLENBQWhCOztBQW1CQUssT0FBT0MsT0FBUCxHQUFpQlQsT0FBakIiLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB7IEdFVCwgUE9TVCB9ID0gcmVxdWlyZShcIi4uLy4uL2NvbnN0YW50cy9yZXF1ZXN0VHlwZXNcIik7XG5cbmNvbnN0IGFjdGlvbnMgPSB7XG4gIGxpc3RPcGVyYXRvcnM6IHtcbiAgICBtZXRob2Q6IEdFVCxcbiAgICBlbmRwb2ludDogXCIvc2V0dGluZ3NfYnlfY2hhbm5lbF9jdXN0b21fdHlwZS97Y3VzdG9tX3R5cGV9L29wZXJhdG9yc1wiLFxuICB9LFxuICBiYW5Vc2Vyczoge1xuICAgIG1ldGhvZDogUE9TVCxcbiAgICBlbmRwb2ludDogXCIvc2V0dGluZ3NfYnlfY2hhbm5lbF9jdXN0b21fdHlwZS97Y3VzdG9tX3R5cGV9L2JhblwiLFxuICB9LFxuICBsaXN0QmFubmVkVXNlcnM6IHtcbiAgICBtZXRob2Q6IEdFVCxcbiAgICBlbmRwb2ludDogXCIvc2V0dGluZ3NfYnlfY2hhbm5lbF9jdXN0b21fdHlwZS97Y3VzdG9tX3R5cGV9L2JhblwiLFxuICB9LFxuICB1bmJhblVzZXJzOiB7XG4gICAgbWV0aG9kOiBERUxFVEUsXG4gICAgZW5kcG9pbnQ6IFwiL3NldHRpbmdzX2J5X2NoYW5uZWxfY3VzdG9tX3R5cGUve2N1c3RvbV90eXBlfS9iYW5cIixcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYWN0aW9ucztcbiJdfQ==