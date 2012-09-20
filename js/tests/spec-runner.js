define([
	'spec/views/testview-spec'
	], 
	function(	testViewSpec
		) {
		return {
			initialize: function(){
				jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
  				jasmine.getEnv().execute();
			}
		}
	}
)