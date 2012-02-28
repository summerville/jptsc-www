(function() {

  $(function() {
    return $("#twitter").tweet({
      join_text: null,
      username: "fleetio",
      count: 3,
      template: "{avatar}{text}<br/>{time}",
      loading_text: "Loading tweets..."
    });
  });

}).call(this);
