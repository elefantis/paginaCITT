function EventsController() {
    let container = document.getElementById('general-container');
    Llama.get('../app/data/events.json').then( ( data ) => {
        console.log(data);
        data.forEach( e => {
            console.log(e.image);
            container.innerHTML += 
            `
            <div class="event-container">
                <div class="info-event">
                    <h2>${e.name}</h2>
                    <span id="decorator-title"></span>
                </div>
                <a data-lightbox="item-img-2" class="img-event" href="${e.image}">
                    <img src="${e.image}" alt="${e.name}">
                </a>
                <div class="info-event">
                    <p>${e.description}</p>
                    <p>La fecha es${e.date} a las ${e.time}</p>
                    <p></p>
                </div>
            </div>
            `;
        });
    });
};