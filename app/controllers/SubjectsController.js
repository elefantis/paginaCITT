function SubjectsController () {
    Llama.get('../app/data/subject.json').then( ( data ) => {
        let container = document.getElementById('general-container');
        data.forEach( d => {
            container.innerHTML += 
            ` <div class="flip-card-container">
                <div class="flip-card">
                    <div class="flip-card-front">
                        <div class="container-info">
                        <img
                            src="/img/default-taller.jpg"
                            alt="Imagen mano sobre teclado"
                        />
                        </div>
                        <div class="container-info">
                        <h2>${d.name}</h2>
                        <p>${d.place}</p>
                        <p>${d.day}</p>
                        <p>${d.hour}</p>
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="info-taller">Descripcion:</h3>
                        <p class="info-taller">${d.description}</p>
                    </div>
                </div>
            </div>`;
        });
    }).catch( ( error ) => 
    {
        console.log( error );
    });



};