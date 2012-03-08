(function( $ ) {
  $.widget( "plugins.accord", {
 
    // These options will be used as defaults
    options: { 
    	headers : '.header', // define accordian headers aka trigger to open
		content : '.content', // define accordion containers
		slideup : 'fast', // also takes an integer not in quotes
		slidedown : 'fast', // also takes an integer not in quotes
		collapsible: false, // (boolean) Whether only one section can be active (true)
		activeClass: 'open', // (string) Class added to active headers, can also be used to apply open/close icon
		active: 0 // pass the index of the slide you want to start active, if left at 0 none will start active
    },
 
    // Set up the widget
    _create: function() {
		var _this = this,
			el = _this.element,
			headers = el.find(_this.options.headers),
			content = el.find(_this.options.content);

		if(_this.options.active != 0){
			// add the active class to teh header and open the slide
			el.find(_this.options.headers +':nth-child('+_this.options.active+')').addClass(_this.options.activeClass).next().show();
		}

		headers.bind('click', function() {				
			// if collapsible is true close all
			if(_this.options.collapsible == true){
				
				// remove the active class from all headers 
				$(".header."+_this.options.activeClass).removeClass(_this.options.activeClass);
				// close all open slides
		 		content.slideUp(_this.options.slideup);
	   		}
	   		
	   		
			// If the next slide wasn't open then open it
			if($(this).next().is(':hidden') == true) {
				// Add the class to the button and open the slide
				_this._open($(this));
				
			 } else if ($(this).next().is(':visible') == true) {
			 	// Add the class to the button and close the slide
				_this._close($(this));
			 }
			  
		 });


    },
 
	// open a section		
	_open: function(el){
		var _this = this;
						
		el.addClass(_this.options.activeClass).next().slideDown(_this.options.slidedown);
	},
	
	// close a section
	_close: function(el){
		var _this = this;
			
		el.removeClass(_this.options.activeClass).next().slideUp(_this.options.slidedown);
	},

	// internal destroy method
	_destroy: function(){
		var _this = this;

		_this.element.find('.header').unbind('click');
	},

    // Use the _setOption method to respond to changes to options
    _setOption: function( key, value ) {
      /*switch( key ) {
        case "clear":
          // handle changes to clear option
          break;
      }*/
 
      // In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
      $.Widget.prototype._setOption.apply( this, arguments );
      // In jQuery UI 1.9 and above, you use the _super method instead
      this._super( "_setOption", key, value );
    },
 
    // Use the destroy method to clean up any modifications your widget has made to the DOM
    destroy: function() {
      // In jQuery UI 1.8, you must invoke the destroy method from the base widget
      $.Widget.prototype.destroy.call( this );
      // In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
    }
  });
}( jQuery ) );

