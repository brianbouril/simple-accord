/*
* Accord jQuery UI Widget v1.0
*
* Copyright (c) 2011 Brian Bouril
*
* Dual licensed under the MIT and GPL licenses, located in
* MIT-LICENSE.txt and GPL-LICENSE.txt respectively.
*
* Thur Mar 08 2012 11:27:29 GMT-0500 (CDT)
*/

(function( $ ) {
  $.widget( "bb.accord", {
 
    // These options will be used as defaults
    options: { 
    	headerClass : 'header', // define accordian header class aka trigger to open
		contentClass : 'content', // define accordion containers class
		slideup : 'fast', // also takes an integer not in quotes
		slidedown : 'fast', // also takes an integer not in quotes
		collapsible: false, // (boolean) Whether only one header and content can be active (true)
		activeClass: 'open', // (string) Class added to active header, can also be used to apply open/close icon
		active: 0 // pass the index of the slide you want to start active, if left at 0 none will start active
    },
 
    // Set up the widget
    _create: function() {
		var _this = this,
			el = _this.element,
			header = el.find('.'+_this.options.headerClass),
			content = el.find('.'+_this.options.contentClass);

		if(_this.options.active != 0){
			// add the active class to the header and open the slide
			el.find('.'+_this.options.header +':nth-child('+_this.options.active+')').addClass(_this.options.activeClass).next().show();
		}

		header.bind('click', function() {				
			// if collapsible is true close all
			if(_this.options.collapsible === true){
				//console.log($('.'+_this.options.header+'.'+_this.options.activeClass));
				var $active = _this.element.find('.'+_this.options.headerClass+'.'+_this.options.activeClass)
				// remove the active class from all headers 
				$active.removeClass(_this.options.activeClass);
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

		_this.element.find('.'+_this.options.header).unbind('click');
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

