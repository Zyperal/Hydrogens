	document.onkeydown = (e) => {
		if (e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
			switch (e.key) {
				case "q":
					e.preventDefault();
					e.stopPropagation();
					window.location.replace("https://classroom.google.com/");
					break;
				case "b":
					e.preventDefault();
					e.stopPropagation();
					let input = prompt("what background image would you like?");
					localStorage.setItem(backgroundImage, input);
					break;
				case "h":
					e.preventDefault();
					e.stopPropagation();
					if (document.title === "Hydrogen") {
						document.title = "Google";
						document.querySelector("link[rel*='icon']").href = "https://raw.githubusercontent.com/whitespider-dev/whitespider/Main/res/google.ico";
					} else {
						document.title = "Hydrogen";
						document.querySelector("link[rel*='icon']").href = "/static/img/gas.png";
					}
				default:
					break;
			}
		}
	};
