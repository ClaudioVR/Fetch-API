			
//Fetch API	------------------------------------------

const url = "https://randomuser.me/api/?results=12&nat=gb";  
		
	fetch(url)
		.then((res) => res.json())
		.then((data) => {	
			createListElement(data.results);
		})


// Helpful functions ----------------------------------

function createListElement(users) {
	const ul = document.getElementById('grid');
	
	users.forEach(user => {
		let userCard = document.createElement('li');
		let userAvatar = document.createElement('img');
		let userName = document.createElement('p');
		let userEmail = document.createElement('p');
		let userCity = document.createElement('p');
		
		userName.innerHTML = `${user.name.first} ${user.name.last}`;
		userEmail.innerHTML = `${user.email}`;
		userCity.innerHTML = `${user.location.city}`;
		userAvatar.src = `${user.picture.large}`;
		
		userCard.className = 'card';
		userName.className = 'userName';
		userAvatar.className = 'userAvatar';
	
		userCard.appendChild(userAvatar);
		userCard.appendChild(userName);
		userCard.appendChild(userEmail);
		userCard.appendChild(userCity);
		
		ul.appendChild(userCard);
		
		userCard.addEventListener('click', () => {
			console.log('You clicked a user card');
			
			const modalWindow = document.getElementById('modal-window');
			modalWindow.style.display = 'block';
//			userCard.className = 'modal-card';
			
			modalWindow.addEventListener('click', () => {
				modalWindow.style.display = 'none';
				
			});
			
		});
	
	});
}



// Modal window --------------------

 
//
//this.addEventListener('click', (e) => {
//	console.log('You just clicked me');

//	modalWindow.appendChild(e);
//});


