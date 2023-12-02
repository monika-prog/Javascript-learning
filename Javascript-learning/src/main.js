const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function addButtonHandlers() {
  const buttonEle = [...document.getElementsByClassName('click-here-btn')];
  buttonEle.forEach((i) => {
    i.addEventListener('click', function (event) {
      const index = this.getAttribute('data-id');
      const modal = document.querySelector(
        `.cards-container__card${index} .details-container.hide`
      );
      if (modal) {
        modal.classList.remove('hide');
        modal.classList.add('click-details');
      }
    });
  });
}

function addCloseHandlers() {
  const closeElements = [...document.getElementsByClassName('close')];
  closeElements.forEach((i) => {
    i.addEventListener('click', function (event) {
      const index = this.getAttribute('data-id');
      const modal = document.querySelector(
        `.cards-container__card${index} .details-container`
      );
      if (modal) {
        modal.classList.add('hide');
      }
    });
  });
}

function getData() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementsByClassName('cards-container')[0];
      if (data.length > 0) {
        data.forEach((card, index) => {
          const htmlTemplate = ` <div class="cards-container__card cards-container__card${index}" tabindex="0">
                  <div class="cards-container__card-data">
              <p><span class="card-data-header">Name:</span> ${card.name}</p>
              <p><span class="card-data-header">Username:</span> ${card.username}</p>
              <p><span class="card-data-header">E-mail:</span> ${card.email}</p>
              <p><span class="card-data-header">Phone:</span> ${card.phone}</p>
              <p><span class="card-data-header">Website:</span> ${card.website}</p>
              <button class="click-here-btn" data-id="${index}">Click here</button>
               <div class="details-container hide">
                <div class="onclick-content" tabindex="0">
                  <span class="close close${index}" data-id="${index}" tabindex="0" aria-label="close">&times;</span>
                  <p><span class="card-data-header">Name:</span> ${card.name}</p>
                  <p><span class="card-data-header">Username:</span> ${card.username}</p>
                  <p><span class="card-data-header">E-mail:</span> ${card.email}</p>
                  <p><span class="card-data-header">Phone:</span> ${card.phone}</p>
                  <p><span class="card-data-header">Website:</span> ${card.website}</p>
                  <p><span class="card-data-header">Address:</span> ${card.address.street}, ${card.address.suite}, ${card.address.city}, ${card.address.zipcode}</p>
                  <p><span class="card-data-header">Company Name:</span> ${card.company.name}</p>
                  <p><span class="card-data-header">Company Catch Phrase:</span> ${card.company.catchPhrase}</p>
                  <p><span class="card-data-header">Company Business:</span> ${card.company.bs}</p>
                </div>
              </div>
            </div>
            </div>
              `;

          cardContainer.innerHTML += htmlTemplate;
        });
      }
      addButtonHandlers();
      addCloseHandlers();
    });
}
getData();
