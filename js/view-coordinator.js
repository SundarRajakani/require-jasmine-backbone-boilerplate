define(['views/testView'],
	function(view){
		return {
			initialize: function(){
				console.log("initialising app");
				view.initialize();
			}
		}
	}
)