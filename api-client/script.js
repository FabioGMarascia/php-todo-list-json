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
			apiUrl: "../api.php",
			apiListUrl: "../list.php",
			apiCreateUrl: "../create.php",
			apiDeleteUrl: "../delete.php",
			apiUpdateUrl: "../updateTask.php",
			config: { headers: { "Content-Type": "multipart/form-data" } },
		};
	},
	methods: {
		addItem(text) {
			if (!this.input == ``) {
				const toDo = {
					element: text,
					type: "add",
				};

				axios
					.post(this.apiUrl, toDo, this.config)
					.then((response) => {
						this.toDoList = response.data;
					})
					.catch((error) => {
						console.error(error);
					});

				this.input = ``;
			}
		},
		deleteItem(index) {
			const toDo = {
				element: index,
				type: "delete",
			};

			axios
				.post(this.apiUrl, toDo, this.config)
				.then((response) => {
					this.toDoList = response.data;
				})
				.catch((error) => {
					console.error(error);
				});
		},
		done(element) {
			return element.done ? this.taskDone : this.ongoingTask;
		},
		changeToDo(index) {
			const toDo = {
				element: index,
				type: "update",
			};

			axios
				.post(this.apiUrl, toDo, this.config)
				.then((response) => {
					this.toDoList = response.data;
				})
				.catch((error) => {
					console.error(error);
				});
		},
		clearList() {
			const toDo = {
				type: "clear",
			};

			axios
				.post(this.apiUrl, toDo, this.config)
				.then((response) => {
					this.toDoList = response.data;
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
	mounted() {
		const options = {
			method: "GET",
			url: this.apiUrl,
		};

		axios
			.request(options)
			.then((response) => {
				this.toDoList = response.data;
			})
			.catch((error) => {
				console.error(error);
			});
	},
}).mount("#app");
