$("#form").submit(function(event){
  var $inputs = $("#form : input");

  var values = {};
  $inputs.each(function({
    values[this.name] = $(this).val();
  }));

  var queryURL = "https:\\api.nytimes.com/svc/search/v2/articlesearch.json";
  queryURL += "?" + $.param({
    'api_key': "d81a58fd167d49fcbeff8ceea11a6d87",
    'q': values['q'],
    'page': values['page'],
    'begin_date': values['begin_date'],
    'end_date': values['end_date']
  });

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .done(function(response)){
    var results = response.data;
    console.log(results);
    for(var i = 0; i < results.length; i++){
      var articlesDiv = $("<div>");
    }
  }
})
