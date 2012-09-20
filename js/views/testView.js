define(['jquery', 'underscore', 'backbone'], 
	function($, _, Backbone) {
		return {

			initialize: function(){
				var TestView = Backbone.View.extend({
					initialize: function(){
						console.log("initialize testView");
					},
					render: function(){
					}
				});

				var testView = new TestView();
			}
		}
	}
)
