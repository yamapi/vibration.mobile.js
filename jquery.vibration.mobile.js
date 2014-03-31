**
 * jQuery.vibration for mobile - Vibrate your mobile with jQuery
 * Date: 31/03/2014
 * @author Marc CAMARD - marc.camard(at)hotmail(dot)fr / https://github.com/yamapi/rejax
 *
 * USAGE:
 *	$("#myObject").vibration({
 *			time: 3000, //  number of frames per milliseconds at which animations will run (default value 3000)
			loop: 0, // stop loading after x loop (default value 0)
 *			}
 *		);
 *
 */
(function($)
{ 
	var vibrate = [];
	$.fn.vibration = function(options)
	{
		var defauts =
		{
			duration: 0,
			loop: 0,
		};  

		var params = $.extend(defauts, options); 
		vibrateInterval = setInterval(function() {
			navigator.vibrate(defauts.duration);
		}, loop);						   
	};
})(jQuery);