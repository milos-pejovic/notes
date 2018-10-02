/** 
 * JavaScript Main 
 */

var results = document.getElementById('results');
var numberOfFoundResultsNumber = document.getElementById('number-of-found-results-number'); 
var entries = $('.entry');
var numberOfFoundResults = 0;

numberOfFoundResultsNumber.innerHTML = numberOfFoundResults;

// Split string

function splitString(searchQuery) {
	var result = [];
	searchQuery = searchQuery.split(',')
	var searchQueryLength = searchQuery.length;
	
	for (var j = 0; j < searchQueryLength; j++) {
		if (searchQuery[j] !== '') {
			result.push(searchQuery[j].trim());
		}
	}
	
	return result;
}

// Search query field keyup function

$('#sword').on('keyup', function() {
	results.innerHTML = '';
	numberOfFoundResults = 0;
	numberOfFoundResultsNumber.innerHTML = numberOfFoundResults;
	
	if ($(this).val() == '') {
		return;
	}
	
	var splitValues = splitString($(this).val());

	entries.each(function() {
		var displayEntry = true;
		var splitValuesLength = splitValues.length;
		
		for (var i = 0; i < splitValuesLength; i++) {
			if (!$(this).find('.entry-keywords').text().match(splitValues[i])) {
				displayEntry = false;
				break;
			}
		}
		
		if (displayEntry) {
			numberOfFoundResults++;
			var result = document.createElement('div');
			result.setAttribute('class', 'result');
			
			// Result title
			
			var title = document.createElement('h2');
			title.setAttribute('class', 'result-title');
			title.innerHTML = $(this).find('.entry-title').text();
			result.appendChild(title);
			
			// Result keywords
			
			var keywords = document.createElement('p');
			var entryKeywords = splitString($(this).find('.entry-keywords').text());
			var keywordsLength = entryKeywords.length;
			for (var k = 0; k < keywordsLength; k++) {
				var keyword = document.createElement('span');
				keyword.setAttribute('class', 'result-keyword');
				keyword.innerHTML = entryKeywords[k];
				keywords.appendChild(keyword);
			}
			result.appendChild(keywords);

			// Result text
			
			var entryText = document.createElement('div');
			entryText.setAttribute('class', 'result-text');
			entryText.innerHTML = $(this).find('.entry-text').html();

			result.appendChild(entryText);
			results.appendChild(result);
		}
		
	})
	numberOfFoundResultsNumber.innerHTML = numberOfFoundResults;
});