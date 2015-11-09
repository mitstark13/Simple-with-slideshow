imgLibrary = ['img/background.jpg', 'img/image.jpg', 'img/images.jpeg'];
count = 0;

var autoplay = setInterval(next, 3000);

function show() {
	$('.aboveFold').css('background-image', 'url(' + imgLibrary[count] + ')');
	$('.aboveFold li').removeClass('active');
	$('.aboveFold li:eq(' + count + ')').addClass('active');
	$('.progress li').removeClass('active');
	$('.progress li:eq(' + count + ')').addClass('active');
};

function next() {
	if (count != 2) {
		count += 1;
	} else {
		count = 0;
	}; show();
};

function stop() {
	clearInterval(autoplay);
};

function previous() {
	if (count != 0) {
		count -= 1;
	} else {
		count = 2;
	}; show();
};

$('.progress li').click(function(){
	count = $(li).data('index');
	stop();
	show();
});