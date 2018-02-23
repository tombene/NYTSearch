$(document).ready(function(){
var query = "beer";
var startDate = "20170201";
var endDate = "20180201";
var numResponses = 1;



var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "cd735801b5514e83b927e1bfdcced7af",
  'q': query,
  'begin_date': startDate,
	'end_date': endDate,
	'page': 0
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	console.log(result);
	var headline, author, weburl;
	for (var i = 0; i < numResponses; i++) {
		headline = result.response.docs[i].headline.main;
		author = result.response.docs[i].byline.original;
		weburl = result.response.docs[i].web_url;
		console.log(headline);
		console.log(author);
		$("#topArticles").append()
		$("#topArticles").html(headline);
	}

}).fail(function(err) {
  throw err;
});























	// end of document ready
})

