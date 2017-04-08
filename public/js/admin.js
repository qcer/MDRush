$(function () {
	// body...
	// vue constance

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

	// methods 

	getDraft = function (name) {
		// body...
		console.log(name);
		var data = {name:name};
		var options = {
			url:'/admin_draft.html',
			type:'post',
			data:data,
			success:function (results) {
				// body...
				console.log(results);
				vm_edit.edit_content = results;
			}
		};
		$.ajax(options);

	}
	saveDraft = function () {
		// body...
		var draft = document.getElementById("edit_area").value;
		var filename = document.getElementById("file-name").value;
		if (filename == "") {
			alert("文章名不能为空！")
		} else {
			console.log(draft);
			var data = {
				filename:filename,
				content:draft,
				status:"editing"

			};
			var options = {
				url:'/admin.html',
				type:"post",
				data:data,
				success:function () {
					// body...
				}
			};
			$.ajax(options);
		}
	}

	publish = function () {
		// body...
		var draft = document.getElementById("edit_area").value;
		var filename = document.getElementById("filen-ame").value;

		if (filename == "") {
			alert("文章名不能为空！")
		} else {
			var data = {
				filename:filename,
				content:draft,
				status:"done"
			};
			var options = {
				url:'/admin.html',
				type:"post",
				data:data,
				success:function () {
					// body...
				}
			};
			$.ajax(options);
		}
	}

})