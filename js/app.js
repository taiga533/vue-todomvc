(function (window) {
	'use strict';
	new Vue({
		el: "#app",
		data: {
			title: 'Hello, World',
			todos: [],
			newTodo: ""
		},
		methods: {
			addTodo() {
				if (!this.newTodo) return;
				this.todos.push({
					id: (new Date()).getTime(),
					title: this.newTodo,
					completed: false
				});
				this.newTodo = "";
			},
			deleteTodo(deleteTarget) {
				// 削除対象のtodoの添字を取ってくる
				const deleteTargetIndex = this.todos.indexOf(deleteTarget);
				const deleteCount = 1;
				// 削除対象のtodoをtodosから削除
				this.todos.splice(deleteTargetIndex, deleteCount);
			}
		}
	});

})(window);
