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
					string: text,
				};

				axios
					.post(this.apiCreateUrl, toDo, this.config)
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
			};

			axios
				.post(this.apiDeleteUrl, toDo, this.config)
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
		changeToDo(element, index) {
			// element.done ? (element.done = false) : (element.done = true);
			const toDo = {
				element: index,
			};

			axios
				.post(this.apiUpdateUrl, toDo, this.config)
				.then((response) => {
					this.toDoList = response.data;
				})
				.catch((error) => {
					console.error(error);
				});
		},
		clearList() {
			this.toDoList.splice(0);
		},
	},
	mounted() {
		const options = {
			method: "GET",
			url: this.apiListUrl,
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
