function SubjectsController () {
    Llama.get('../app/data/subject.json').then( ( data ) => {
        let d = data[0];
        let container = document.getElementById('general-container');

        data.forEach( d => {
            let flipCardContainer = document.createElement('div');
            let flipCard = document.createElement('div');
            let flipCardFront = document.createElement('div');
            let containerInfoImage = document.createElement('div');
            let infoImage = document.createElement('img');
            let containerInfoData = document.createElement('div');
            let title = document.createElement('h2');
            let room = document.createElement('p');
            let day = document.createElement('p');
            let hour = document.createElement('p');
            let flipCardBack = document.createElement('div');
            let descriptionTitle = document.createElement('h3');
            let descriptionData = document.createElement('p');

            infoImage.src = '/img/default-taller.jpg';
            title.innerHTML = d.name;
            room.innerHTML = d.place;
            day.innerHTML = d.day;
            hour.innerHTML = d.hour;
            descriptionTitle.innerHTML = 'Descripción: ';
            descriptionData.innerHTML = d.description;

            flipCardContainer.className = 'flip-card-container';
            flipCard.className = 'flip-card';
            flipCardFront.className = 'flip-card-front';
            containerInfoImage.className = 'container-info';
            infoImage.alt = 'Imagen taller';
            containerInfoData.className = 'container-info';
            flipCardBack.className = 'flip-card-back';
            descriptionTitle.className = 'info-taller';
            descriptionData.className = 'info-taller';

            
            //image workshop
            containerInfoImage.appendChild(infoImage);
            //Workshop data
            containerInfoData.appendChild(title);
            containerInfoData.appendChild(room);
            containerInfoData.appendChild(day);
            containerInfoData.appendChild(hour);
            //Front card children
            flipCardFront.appendChild(containerInfoImage);
            flipCardFront.appendChild(containerInfoData);

            //Back card children
            flipCardBack.appendChild(descriptionTitle);
            flipCardBack.appendChild(descriptionData);

            //Flip card Children
            flipCard.appendChild(flipCardFront);
            flipCard.appendChild(flipCardBack);

            flipCardContainer.appendChild(flipCard);

            container.appendChild(flipCardContainer);
        });
    }).catch( ( error ) => 
    {
        console.log( error );
    });



};