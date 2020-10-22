setTimeout(() => {
    let text = document.getElementById('text');
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
    text.classList.add('visible');
   	text.classList.remove('hidden');
  }, 4000);
let date = new Date;
 let getDate = new Promise((resolve, reject) => {
 	setTimeout(() => date ? resolve(document.getElementById("time").innerHTML = date) : reject(error), 4000)
 })
//getDate
	//.then(result => document.getElementById("time").innerHTML = result)

let url = 'https://api.github.com/users/mojombo';
let getUrl = new Promise((resolve, reject) => {
	resolve(url);
	reject('Ссылка не найдена');	
})

Promise.all([getUrl, getDate])
		.then(([url, date]) => fetch(url))
		.then(res => res.json())
		.then(json => {
			console.log(json.name)
			console.log(json.bio)
			console.log(json.html_url)
			console.log(json.avatar_url)

	let link = document.querySelector('.link');
	let img = document.querySelector('.img');
	let bio = document.querySelector('.bio');
	link.innerHTML = json.name;
	link.addEventListener('click', () => {
		window.location = json.html_url;
	});
	if (json.bio !== null) {
		bio.innerHTML = json.bio;
		} else {
		bio.innerHTML += "Информация о пользователе не доступна."
		}
	img.src = json.avatar_url;
	});	

