var pages = json_data.pages;

var current_page = 0;

$('#next_page').on('click', function() {
	show_next(pages);
});

var show_next = function(pages) {
	for (var i = 0; i < pages.length; i++) {
		if (parseInt(pages[i].id, 10) === current_page + 1) {
			page = build_page(pages[i]);
	    	$('#book_wrapper').slideUp("slow");
	    	$('#book').empty().append(page);
	    	$('#book_wrapper').slideDown("slow");

	    	current_page++;

	    	break;
		}
    }
}

$('#previous_page').on('click', function() {
	show_previous(pages);
});


var show_previous = function(pages) {
	for (var i = 0; i < pages.length; i++) {
	if (parseInt(pages[i].id, 10) === current_page -1) {
		page = build_page(pages[i]);
    	$('#book_wrapper').slideUp("slow");
    	$('#book').empty().append(page);
    	$('#book_wrapper').slideDown("slow");

    	current_page--;

    	break;
	}
}
}


var build_page = function(page_data) {
	var page = $('<div>');
	page.attr('class', 'page');

	var img = $('<img>');
	img.attr('src', page_data.file_name);
	page.append(img);

	return page;
}


show_next(pages);