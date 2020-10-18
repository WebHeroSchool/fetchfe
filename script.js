fetch('https://api.github.com/users/mojombo')
	.then(res => res.json())
	.then(json => {
		console.log(json.name)
		console.log(json.bio)
		console.log(json.html_url)
		console.log(json.avatar_url)
	
	//document.write(json.login)

	let link = document.querySelector('.link');
	let img = document.querySelector('.img');
	let bio = document.querySelector('.bio');
	link.innerHTML = json.name;
	link.addEventListener('click', () => {
		window.location = json.html_url;
	})
	if (json.bio !== null) {
		bio.innerHTML = json.bio;
	} else {
		bio.innerHTML += "Информация о пользователе не доступна."
	}
	
	img.src = json.avatar_url;

	})