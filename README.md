Accord is a simple accordion UI widget for jQuery
=================================================

Call accord on the container of elements, using the same classes for the header and content that you set in the options. If none are set they will be "header" and "content" by default. You can use any block element for the header and content as long as you apply the appropriate classes to them.

	<div id="accord1" class="accord">
		<div class="header">Header Here</div>
		<div class="content">Some content here</div>
		<div class="header">Header Here</div>
		<div class="content">Some content here</div>
		<div class="header">Header Here</div>
		<div class="content">Some content here</div>
		<div class="header">Header Here</div>
		<div class="content">Some content here</div>
	</div>

Then instantiate the widget, by default these are the set options:
	
	$('#accord').accord({
		headers : '.header',  //define accordian headers aka trigger to open
		content : '.content',  //define accordion containers
		slideup : 'fast',  //also takes an integer not in quotes
		slidedown : 'fast',  //also takes an integer not in quotes
		collapsible: true,  //(boolean) Whether only one header and content can be active (true)
		activeClass: 'open',  //(string) Class added to active headers, can also be used to apply open/close icon
		active: 1  //pass the index of the slide you want to start active, if left at 0 none will start active
	});