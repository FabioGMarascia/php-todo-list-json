const { createApp } = Vue;

createApp({
	data() {
		return {
			toDoList: [],
			input: ``,
			myH1Style: `text-center fw-bold display-3 text-black py-3`,
			myIconStyle: `d-inline-block position-absolute end-0 mt-2 text-danger fs-3`,
			taskDone: `text-success text-decoration-line-through`,
			ongoingTask: `text-danger`,
		};
	},
	methods: {
		addItem(text) {
			if (!this.input == ``) {
				this.toDoList.push({
					string: text,
					done: false,
				});
				this.input = ``;
			}
		},
		deleteItem(index) {
			this.toDoList.splice(index, 1);
		},
		done(element) {
			return element.done ? this.taskDone : this.ongoingTask;
		},
		changeToDo(element) {
			element.done ? (element.done = false) : (element.done = true);
		},
		clearList() {
			this.toDoList.splice(0);
		},
	},
	mounted() {
		const options = {
			method: "GET",
			url: "../api.php",
		};

		axios
			.request(options)
			.then((response) => {
				this.toDoList = response.data;
			})
			.catch(function (error) {
				console.error(error);
			});
	},
}).mount("#app");
