function TeamController() {
   Llama.get('../app/data/team.json').then( ( data ) => {
        let container = document.getElementById('general-container-team');
        container.innerHTML = '';
        //Contenedores
        let directorContainer = document.createElement('div');
        let coordinadorContainer = document.createElement('div');
        let capitanContainer = document.createElement('div');

        //Contenido contenedores
        directorContainer.innerHTML = ` <div class="title-team">
                                            <h1>Director de carrera</h1>
                                        </div>`;
        coordinadorContainer.innerHTML = `  <div class="title-team">
                                                <h1>Coordinador CITT</h1>
                                            </div>`;
        capitanContainer.innerHTML = `  <div class="title-team">
                                            <h1>Capitanes CITT</h1>
                                        </div>`;

        //Atributos contenedores
        directorContainer.className = 'container-images';
        coordinadorContainer.className = 'container-images';
        capitanContainer.className = 'container-images';

        data.forEach( c => {
            let member = '';
            switch (c.position) {
                case 'Director de carrera':
                    member = `<div class="img-team-container">
                                <div class="img-team">
                                    <img src="${c.image}" alt="Imagen Director">
                                </div>
                                <h2>${c.name}</h2>
                            </div>`;
                    directorContainer.innerHTML += member;
                    break;
                case 'Coordinador Citt':
                    member = ` <div class="img-team-container">
                                    <div class="img-team">
                                        <img src="${c.image}" alt="Imagen Coordinador">
                                    </div>
                                    <h2>${c.name}</h2>
                                </div>`;
                    coordinadorContainer.innerHTML += member;
                    break;
                case 'Capitan':
                    member = `<div class="img-team-container">
                                <div class="img-team">
                                    <img src="${c.image}" alt="Imagen alumno">
                                </div>
                                <h2> ${c.name} </h2>
                            </div>`;
                    capitanContainer.innerHTML += member;
                    break;
                default:
                    break;
            }
        });
        container.appendChild(directorContainer);
        container.appendChild(coordinadorContainer);
        container.appendChild(capitanContainer);
    }).catch( ( error ) => {
        console.log( error );
    });
};