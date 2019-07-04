(function (window) {
	'use strict';
	window.app = new Vue({
		el: "#app",
		data: {
			title: 'Hello, World',
			todos: [],
			newTodo: "",
			// 編集対象のtodoを保存する変数
			editTargetTodo: null,
			// 編集対象のtodo.title文字列を保存する変数
			editTargetTodoTitle: ""
		},
		computed: {
			todoCount() {
				const COMMA_SPLIT_REGEX = /(\d)(?=(\d{3})+$)/g
				// todosの要素数をカンマ区切りにして返す
				return this.todos.length.toString().replace(COMMA_SPLIT_REGEX, '$1,');
			},
			existsTodo() {
				return this.todos.length > 0;
			}
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
			},
			editTodo(editTarget) {
				this.editTargetTodo = editTarget;
				this.editTargetTodoTitle = editTarget.title;
			},
			updateTodo(updateTarget) {
				updateTarget.title = this.editTargetTodoTitle;
				this.editTargetTodo = null;
				this.editTargetTodoTitle = "";
			}
		}
	});

})(window);