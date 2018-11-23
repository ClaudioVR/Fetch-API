			
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
			`;
		
		ul.appendChild(userCard);
		
		
// Adding a click event to userCard
		
		userCard.addEventListener('click', () => {
			const modalWindow = document.getElementById('modal-window');
			modalWindow.style.display = 'flex';
			
			let clone = userCard.cloneNode(true);
			clone.innerHTML = `
				<div class="overlay-user-info">
					<img class="overlay overlayAvatar" src="${user.picture.large} ">
					<h3 class="overlay overlayName">${user.name.first} ${user.name.last}</h3>
					<p class="overlay overlayEmail">${user.email}</p>
					<p class="overlay overlayCity">${user.location.city}</p>
					<hr>
					<p class="overlay overlayPhone">Tel: ${user.phone}</p>
					<p class="overlay overlayAddress">${user.location.street}, ${user.location.postcode}</p>
					<p class="overlay overlayDOB">Birthday: ${user.dob.date.slice(0,10)}</p>
				</div>
				`;
			clone.className = 'modal-card';
			modalWindow.appendChild(clone);
			
			modalWindow.addEventListener('click', () => {
				modalWindow.style.display = 'none';
				userCard.className = 'card';
				modalWindow.removeChild(clone);	
				
			});
		});
	
	});
} // createListElement function end




