(function($) {
	$.fn.autocomplete = function(params) {
		var currentSelection = -1;
		var currentProposals = [];
		params = $.extend({
			hints: [],
			showButton: true,
			buttonText: ' 查 看 ',
			onBlur: function(){}
		}, params);
		this.each(function() {
			var searchContainer = $('<div></div>')
				.addClass('inputBox')	
			var input = $('<input type="text" autocomplete="off" name="query">')
				.attr('placeholder','电影、电视剧、综艺').addClass('form-control head_s');
			var proposalList = $('<ul></ul>').addClass('searchList');
			searchContainer.append(proposalList);
			input.keydown(function(e) {
				switch(e.which) {
					case 38: // Up arrow
					e.preventDefault();
					$('ul.searchList li').removeClass('selected');
					if((currentSelection - 1) >= 0){
						currentSelection--;
						$( "ul.searchList li:eq(" + currentSelection + ")" )
							.addClass('selected');
					} else {
						currentSelection = -1;
					}
					break;
					case 40: // Down arrow
					e.preventDefault();
					if((currentSelection + 1) < currentProposals.length){
						$('ul.searchList li').removeClass('selected');
						currentSelection++;
						$( "ul.searchList li:eq(" + currentSelection + ")" )
							.addClass('selected');
					}
					break;
					case 13: // Enter
						if(currentSelection > -1){
							var text = $( "ul.searchList li:eq(" + currentSelection + ")" ).html();
							input.val(text);
						}
						currentSelection = -1;
						proposalList.empty();
						break;
					case 27: // Esc button
						currentSelection = -1;
						proposalList.empty();
						input.val('');
						break;
				}
			});
			input.bind("change paste keyup", function(e){
				if(e.which != 13 && e.which != 27 
						&& e.which != 38 && e.which != 40){				
					currentProposals = [];
					currentSelection = -1;
					proposalList.empty();
					if(input.val() != ''){
						var word = "^" + input.val() + ".*";
						proposalList.empty();
						for(var test in params.hints){
							if(params.hints[test].match(word)){
								currentProposals.push(params.hints[test]);	
								var element = $('<li></li>')
									.html(params.hints[test])
									.addClass('proposal')
									.click(function(){
										input.val($(this).html());
										proposalList.empty();
									})
									.mouseenter(function() {
										$(this).addClass('selected');
									})
									.mouseleave(function() {
										$(this).removeClass('selected');
									});
								proposalList.append(element);
							}
						}
					}
				}
			});
			input.blur(function(e){
				currentSelection = -1;
				params.onBlur();
			});
			searchContainer.append(input);		
			if(params.showButton){
				var button = "<a href='searchInfo.html'><span style='margin-top: -4px;' class='glyphicon glyphicon-search search-btn ie-hank head_search' aria-hidden='true'></span></a>";
					$(button).click(function(){
						proposalList.empty();
					});
				searchContainer.append(button);	
			}
			$(this).append(searchContainer);	
		});
		return this;
	};

})(jQuery);