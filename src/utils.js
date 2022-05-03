export const getDate = timestamp =>
  timestamp ? new Date(timestamp).toDateString().substring(4) : '';
