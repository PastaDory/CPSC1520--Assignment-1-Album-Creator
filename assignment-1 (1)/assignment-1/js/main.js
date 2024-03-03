document.addEventListener('DOMContentLoaded', function () {
    var albumForm = document.getElementById('album-form');
    var albumTitleInput = document.getElementById('album-title');
    var albumDescriptionInput = document.getElementById('album-description');
    var albumArtSelect = document.getElementById('albume-art');
    var allAlbumsList = document.getElementById('all-albums-list');

    if (albumForm && albumTitleInput && albumDescriptionInput && albumArtSelect && allAlbumsList) {
        albumForm.addEventListener('submit', function (event) {
            // Prevent default form submission behavior
            event.preventDefault();

            // Reset error messages and styling
            albumTitleInput.classList.remove('is-invalid');
            albumDescriptionInput.classList.remove('is-invalid');
            albumArtSelect.classList.remove('is-invalid');

            // Check album title length and emptiness
            if (albumTitleInput.value.trim() === "" || albumTitleInput.value.length > 10) {
                albumTitleInput.classList.add('is-invalid');
                return; // Stop further processing if validation fails
            }

            // Check description length
            if (albumDescriptionInput.value.trim() === "" || albumDescriptionInput.value.length > 30) {
                albumDescriptionInput.classList.add('is-invalid');
                return; // Stop further processing if validation fails
            }

            // Check album art selection
            if (albumArtSelect.value === "") {
                albumArtSelect.classList.add('is-invalid');
                return; // Stop further processing if validation fails
            }

            // If all validations pass, create a new album card based on the template
            var albumCardTemplate = `
                <div class="col">
                    <div class="card shadow-sm">
                        <img class="bd-placeholder-img card-img-top" src="${albumArtSelect.value}" />
                        <div class="card-body">
                            <h5 class="card-title">${albumDescriptionInput.value}</h5>
                            <p class="card-text">${albumTitleInput.value}</p>
                        </div>
                    </div>
                </div>
            `;

            // Append the new album card to the list of all albums
            allAlbumsList.innerHTML += albumCardTemplate;

            // Reset the form
            albumForm.reset();

            // If needed, you can also save the form data or perform other actions here
            console.log("Form is valid. Album card added.");
        });
    } else {
        console.error("One or more form elements not found.");
    }
});