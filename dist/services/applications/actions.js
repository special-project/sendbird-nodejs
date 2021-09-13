"use strict";

var _require = require("../../constants/requestTypes"),
    GET = _require.GET,
    POST = _require.POST,
    DELETE = _require.DELETE;

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
    endpoint: "/settings_by_channel_custom_type/{custom_type}/ban?user_ids={user_ids}"
  },
  muteUsers: {
    method: POST,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/mute"
  },
  listMutedUsers: {
    method: GET,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/mute"
  },
  unmuteUsers: {
    method: DELETE,
    endpoint: "/settings_by_channel_custom_type/{custom_type}/mute?user_ids={user_ids}"
  }
};

module.exports = actions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9hcHBsaWNhdGlvbnMvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiR0VUIiwiUE9TVCIsIkRFTEVURSIsImFjdGlvbnMiLCJsaXN0T3BlcmF0b3JzIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJiYW5Vc2VycyIsImxpc3RCYW5uZWRVc2VycyIsInVuYmFuVXNlcnMiLCJtdXRlVXNlcnMiLCJsaXN0TXV0ZWRVc2VycyIsInVubXV0ZVVzZXJzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O2VBRThCQSxRQUFRLDhCQUFSLEM7SUFBdEJDLEcsWUFBQUEsRztJQUFLQyxJLFlBQUFBLEk7SUFBTUMsTSxZQUFBQSxNOztBQUVuQixJQUFNQyxVQUFVO0FBQ2RDLGlCQUFlO0FBQ2JDLFlBQVFMLEdBREs7QUFFYk0sY0FBVTtBQUZHLEdBREQ7QUFLZEMsWUFBVTtBQUNSRixZQUFRSixJQURBO0FBRVJLLGNBQVU7QUFGRixHQUxJO0FBU2RFLG1CQUFpQjtBQUNmSCxZQUFRTCxHQURPO0FBRWZNLGNBQVU7QUFGSyxHQVRIO0FBYWRHLGNBQVk7QUFDVkosWUFBUUgsTUFERTtBQUVWSSxjQUNFO0FBSFEsR0FiRTtBQWtCZEksYUFBVztBQUNUTCxZQUFRSixJQURDO0FBRVRLLGNBQVU7QUFGRCxHQWxCRztBQXNCZEssa0JBQWdCO0FBQ2ROLFlBQVFMLEdBRE07QUFFZE0sY0FBVTtBQUZJLEdBdEJGO0FBMEJkTSxlQUFhO0FBQ1hQLFlBQVFILE1BREc7QUFFWEksY0FDRTtBQUhTO0FBMUJDLENBQWhCOztBQWlDQU8sT0FBT0MsT0FBUCxHQUFpQlgsT0FBakIiLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB7IEdFVCwgUE9TVCwgREVMRVRFIH0gPSByZXF1aXJlKFwiLi4vLi4vY29uc3RhbnRzL3JlcXVlc3RUeXBlc1wiKTtcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgbGlzdE9wZXJhdG9yczoge1xuICAgIG1ldGhvZDogR0VULFxuICAgIGVuZHBvaW50OiBcIi9zZXR0aW5nc19ieV9jaGFubmVsX2N1c3RvbV90eXBlL3tjdXN0b21fdHlwZX0vb3BlcmF0b3JzXCIsXG4gIH0sXG4gIGJhblVzZXJzOiB7XG4gICAgbWV0aG9kOiBQT1NULFxuICAgIGVuZHBvaW50OiBcIi9zZXR0aW5nc19ieV9jaGFubmVsX2N1c3RvbV90eXBlL3tjdXN0b21fdHlwZX0vYmFuXCIsXG4gIH0sXG4gIGxpc3RCYW5uZWRVc2Vyczoge1xuICAgIG1ldGhvZDogR0VULFxuICAgIGVuZHBvaW50OiBcIi9zZXR0aW5nc19ieV9jaGFubmVsX2N1c3RvbV90eXBlL3tjdXN0b21fdHlwZX0vYmFuXCIsXG4gIH0sXG4gIHVuYmFuVXNlcnM6IHtcbiAgICBtZXRob2Q6IERFTEVURSxcbiAgICBlbmRwb2ludDpcbiAgICAgIFwiL3NldHRpbmdzX2J5X2NoYW5uZWxfY3VzdG9tX3R5cGUve2N1c3RvbV90eXBlfS9iYW4/dXNlcl9pZHM9e3VzZXJfaWRzfVwiLFxuICB9LFxuICBtdXRlVXNlcnM6IHtcbiAgICBtZXRob2Q6IFBPU1QsXG4gICAgZW5kcG9pbnQ6IFwiL3NldHRpbmdzX2J5X2NoYW5uZWxfY3VzdG9tX3R5cGUve2N1c3RvbV90eXBlfS9tdXRlXCIsXG4gIH0sXG4gIGxpc3RNdXRlZFVzZXJzOiB7XG4gICAgbWV0aG9kOiBHRVQsXG4gICAgZW5kcG9pbnQ6IFwiL3NldHRpbmdzX2J5X2NoYW5uZWxfY3VzdG9tX3R5cGUve2N1c3RvbV90eXBlfS9tdXRlXCIsXG4gIH0sXG4gIHVubXV0ZVVzZXJzOiB7XG4gICAgbWV0aG9kOiBERUxFVEUsXG4gICAgZW5kcG9pbnQ6XG4gICAgICBcIi9zZXR0aW5nc19ieV9jaGFubmVsX2N1c3RvbV90eXBlL3tjdXN0b21fdHlwZX0vbXV0ZT91c2VyX2lkcz17dXNlcl9pZHN9XCIsXG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFjdGlvbnM7XG4iXX0=