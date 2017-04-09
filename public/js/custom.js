$(function () {
	// body...
	vm = new Vue({
		el:'#content',
		data:{
			edit_content:'### Start Editing',
			show_content:'',
		},
		computed:{
			parseMd:function () {
				// body...
				this.show_content = marked(this.edit_content);
			}
		}
	})

	var showRightPush = document.getElementById( 'showRightPush' ),
		menuRight = document.getElementById( 'cbp-spmenu-s2' ),
		body = document.body;


	showRightPush.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( body, 'cbp-spmenu-push-toleft' );
		classie.toggle( menuRight, 'cbp-spmenu-open' );
		disableOther( 'showRightPush' );
	};

	function disableOther( button ) {
		if( button !== 'showRightPush' ) {
			classie.toggle( showRightPush, 'disabled' );
		}
	}


})