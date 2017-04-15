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
		flag_class = "cbp-spmenu-open";


	showRightPush.onclick = function() {
		// classie.toggle( menuRight, 'cbp-spmenu-open' );
		var flag = menuRight.classList.contains(flag_class);
		if (flag) {
			menuRight.classList.remove(flag_class);
		} else {
			menuRight.classList.add(flag_class);
		}
	};

})