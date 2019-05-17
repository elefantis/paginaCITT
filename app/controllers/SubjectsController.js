function SubjectsController () {
    Llama.get('../app/data/subject.json').then( ( data ) => {
        let container = document.getElementById('general-container');

        data.forEach(i => {
            //Crear elementos
            let click4Flip = document.createElement('div');
            let flipCard = document.createElement('div');
            let flipCardFront = document.createElement('div');
            let containerInfoImage = document.createElement('div');
            let infoImage = document.createElement('img');
            let containerInfoTitle = document.createElement('div');
            let infoTitle = document.createElement('h2');
            let flipCardBack = document.createElement('div');
            let room = document.createElement('h3');
            let day = document.createElement('h4');
            let hour = document.createElement('p');

            //Agregar datos
            infoImage.src = '/img/default-taller.jpg';
            infoTitle.innerHTML = i.name;
            room.innerHTML = i.place;
            day.innerHTML = i.day;
            hour.innerHTML = i.hour;

            //Agregar atributos;
            click4Flip.className = 'click-for-flip';
            click4Flip.id = 'click-for-flip';
            flipCard.className = 'flip-card';
            flipCardFront.className = 'flip-card-front';
            containerInfoImage.className = 'container-info';
            containerInfoTitle.className = 'container-info';
            infoImage.alt = 'Imagen mano sobre el teclado';
            flipCardBack.className = 'flip-card-back';
            room.className = 'info-taller';
            day.className = 'info-taller';
            hour.className = 'info-taller';


            //Insertar elementos
            //Front
            containerInfoImage.appendChild(infoImage);
            containerInfoTitle.appendChild(infoTitle);
            flipCardFront.appendChild(containerInfoImage);
            flipCardFront.appendChild(containerInfoTitle);

            //back
            flipCardBack.appendChild(room);
            flipCardBack.appendChild(day);
            flipCardBack.appendChild(hour);

            // flip card
            flipCard.appendChild(flipCardFront);
            flipCard.appendChild(flipCardBack);
            click4Flip.appendChild(flipCard);

            //Insert to container
            container.appendChild(click4Flip);
        });
    }).catch( ( error ) => 
    {
        console.log( error );
    });



};