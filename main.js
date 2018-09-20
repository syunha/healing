$(document).ready(function(){
	$(document).on('click','header li',function(event){
		history.pushState(null,null,event.target.href);
	
	$('article').load(event.target.href+'.content')

		event.preventDefault();
	})
});
