			
//Fetch API	------------------------------------------

const url = "https://randomuser.me/api/?results=12&nat=gb";  
// https://randomuser.me/
		
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
		userCard.className = "card";
		userCard.innerHTML = `
			<div class="basic-user-info">
			<img class="userAvatar" src="${user.picture.large} ">
			<p class="userName">${user.name.first} ${user.name.last}</p>
			<p class="userEmail">${user.email}</p>
			<p class="userCity">${user.location.city}</p>
			</div>
			<div class="additional-user-info">
			<p class="userPhone">${user.phone}</p>
			<p class="userAddress">${user.location.street},${user.location.postcode}</p>
			<p class="userDOB">${user.dob.date.slice(0,10)}</p>
			</div>
			`;
		
			// console.log(user.dob.date.slice(0,10));
		
		
// NB: Alternative but less cleaner...
			
//		let userAvatar = document.createElement('img');
//		let userName = document.createElement('p');
//		let userEmail = document.createElement('p');
//		let userCity = document.createElement('p');
//		
//		userName.innerHTML = `${user.name.first} ${user.name.last}`;
//		userEmail.innerHTML = `${user.email}`;
//		userCity.innerHTML = `${user.location.city}`;
//		userAvatar.src = `${user.picture.large}`;
//		
//		userCard.className = 'card';
//		userName.className = 'userName';
//		userAvatar.className = 'userAvatar';
//	
//		userCard.appendChild(userAvatar);
//		userCard.appendChild(userName);
//		userCard.appendChild(userEmail);
//		userCard.appendChild(userCity);
		
		ul.appendChild(userCard);
		
		
// Adding a click event to userCard
		
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
} // createListElement function end




