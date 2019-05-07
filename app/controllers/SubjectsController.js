function SubjectsController () {
    Llama.get('../app/data/subject.json').then( ( data ) => {
        let container = document.getElementById('workshop-list');

        for(let i in data)
        {
            //Crear elementos
            let workshop = document.createElement('div');
            let title = document.createElement('h1');
            let room = document.createElement('p');
            let day = document.createElement('p');
            let hour = document.createElement('p');

            //ingresar datos
            title.innerHTML = data[i].name;
            room.innerHTML = data[i].place;
            day.innerHTML = data[i].day;
            hour.innerHTML = data[i].hour;

            //Atributos
            workshop.className = 'workshop';
            title.className = 'subjects-title';
            room.className = 'subjects-room';
            day.className = 'subjects-day';
            hour.className = 'subjects-hour';
            
            //Insertar elementos al div
            workshop.appendChild(title);
            workshop.appendChild(room);
            workshop.appendChild(day);
            workshop.appendChild(hour);

            container.appendChild(workshop);
        }
    }).catch( ( error ) => 
    {
        console.log( error );
    });



};