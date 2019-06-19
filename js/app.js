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
			}
		}
	});

})(window);
