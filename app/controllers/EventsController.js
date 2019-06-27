function EventsController() {
    let container = document.getElementById('general-container');
    Llama.get('../app/data/events.json').then( ( data ) => {
        console.log(data);
        data.forEach( e => {
            console.log(e.image);
            container.innerHTML +=`
            <div class="container-event">
            <div class="container-info">
             <h2>${e.name}</h2>
              <p>${e.description} </p>
                <h4>La fecha es ${e.date} a las ${e.time}</h4>
            </div>
            <div class="container-info">
                <div class="img-event">
                <img src="${e.image}" alt="${e.name}">
                </div>
              
            </div>
            
            
        </div>
            `;
           
        });
    });
};