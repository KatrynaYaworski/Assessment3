const restArray = ["Earnest B's BBQ", '888 Cookhouse', 'i Fratelli', 'The Cheesecake Factory'];

function handleSubmitRecomendation() {
    const randomElement = restArray[Math.floor(Math.random() * restArray.length)];
	
	alert(`${randomElement} is a great place to eat!`);
}


let recBtn = document.querySelector("#restaurantRequestBtn");

recBtn.addEventListener('click', handleSubmitRecomendation);