var s = skrollr.init({
	render: function(data) {
		//Log Skrollr position
		$('#info').text(data.curTop);
	}
});
skrollr.init(s);