let imageAlert = () => {
	alert('Puppies and kittens probably share photos of you with one another in their very own social network.')
}

let duckImage = document.querySelector('#duckImg');
duckImage.addEventListener("mouseover", imageAlert)


function handleSubmit(evt) {
	evt.preventDefault();

	alert('The form has been submitted successfully');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);