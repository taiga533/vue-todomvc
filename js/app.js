'use strict';

(function (window) {
	const STORAGE_KEY = "todo-list";
	const todoStorage = {
		load() {
			const storedTodos = localStorage.getItem(STORAGE_KEY);
			if(storedTodos == null) {
				return [];
			};
			return JSON.parse(storedTodos);
		},
		save(todos) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};

	const filter = {
		completed(todos) {
			return todos.filter((todo) => {
				return todo.completed;
			});
		},
		active(todos) {
			return todos.filter((todo) => {
				return !todo.completed;
			});
		},
		all(todos) {
			return todos;
		}
	};
	window.app = new Vue({
		el: '#app',
		data: {
			todos: todoStorage.load(),
			newTodo: '',
			editTargetTodo: null,
			editTargetTodoTitle: '',
			filterCondition: location.hash.replace(/^#\//, '') || 'all'
		},
		computed: {
			existsTodo() {
				return !this.todos.length == 0;
			},
			filteredTodos() {
				return filter[this.filterCondition](this.todos);
			},
			CompletedTodoExists: {
				get: function() {
					return filter.completed(this.todos).length;
				},
				set: function(checked) {
					this.todos.forEach(todo => todo.completed = checked);
				}
			},
			activeTodos() {
				return filter.active(this.todos);
			},
		},
		watch: {
			todos: {
				deep: true,
				handler: todoStorage.save
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
				this.newTodo = '';
			},
			removeTodo(todo) {
				let index = this.todos.indexOf(todo);
				this.todos.splice(index, 1);
			},
			editTodo(todo) {
				this.editTargetTodo = todo;
				this.editTargetTodoTitle = todo.title;
			},
			updateTodo(todo) {
				if (!this.editTargetTodo) return;
				this.editTargetTodo = null;
				todo.title = this.editTargetTodoTitle;
				if (!todo.title) this.removeTodo(todo);
			},
			cancelEditTodo() {
				this.editTargetTodo = null;
			},
			removeAllCompletedTodo() {
				this.todos = filter.active(this.todos);
			}
		},
		directives: {
			'todo-focus':{
				update(el, binding) {
					if(binding.value) el.focus();
				}
			}
		}
	});

})(window);
