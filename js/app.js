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

function Todo(title = '', id = (new Date()).getTime(), completed = false) {
	this.id = id;
	this.title = title;
	this.completed = completed;
}

(function (window) {
	'use strict';
	window.app = new Vue({
		el: '#app',
		data: {
			todos: todoStorage.load(),
			newTodo: '',
			editTargetTodo: null,
			previousTodoTitle: null,
			filterCondition: location.hash.replace(/^#\//, '')
		},
		computed: {
			existsTodo() {
				return !this.todos.length == 0;
			},
			filteredTodos() {
				if (this.filterCondition == '')
					return filter['all'](this.todos);
				return filter[this.filterCondition](this.todos);
			},
			completedTodos: {
				get: function() {
					return filter.completed(this.todos);
				},
				set: function(checked) {
					this.todos.map((todo) => todo.completed = checked);
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
				this.todos.push(new Todo(this.newTodo));
				this.newTodo = '';
			},
			removeTodo(todo) {
				let index = this.todos.indexOf(todo);
				this.todos.splice(index, 1);
			},
			editTodo(todo) {
				this.editTargetTodo = todo;
				this.previousTodoTitle = todo.title;
			},
			updateTodo(todo) {
				this.editTargetTodo = null;
				todo.title = todo.title.trim();
				if (!todo.title) this.removeTodo(todo);
			},
			cancelEditTodo(todo) {
				this.editTargetTodo = null;
				todo.title = this.previousTodoTitle;
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
	})
	// Your starting point. Enjoy the ride!

})(window);
