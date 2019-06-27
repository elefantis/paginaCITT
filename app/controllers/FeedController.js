function FeedController() {
    Llama.get('../app/data/feed.json').then( ( data ) => {
        let container = document.getElementById('news-list');

        for(let i in data)
        {
            //Crear elementos
            let news = document.createElement('div');
            let title = document.createElement('h1');
            let paragraph = document.createElement('p');
            let video = document.createElement('div');
            let image = document.createElement('img');

            //Ingresar datos
            title.innerHTML = data[i].name;
            paragraph.innerHTML = data[i].data;
            video.innerHTML = data[i].video;
            image.src = data[i].image;

            //Atributos
            news.className = 'news';
            title.className = 'news-title';
            image.className = 'news-image';
            image.alt = data[i].name;
            paragraph.className = 'news-paragraph';

            //Insertar los elementos al div
            news.appendChild(title);
            news.appendChild(paragraph);
            if(data[i].video !== '')
            {
                news.appendChild(video);
            }
            if(data[i].image !== '')
            {
                news.appendChild(image);
            }
            container.appendChild(news);
        }
    } ).catch( ( error ) => {
        console.log( error );
    });
    
};
// <div class="container-event">
// <div class="container-info">
//  <h2>tITULO XD</h2>
//   <p> AQUI INSERTA DESCRIPCION  </p>
//     <h4></h4>
// </div>
// <div class="container-info">
//        <div class="img-event">
//          <img src="./Hackathon.jpg"alt="">  
//        </div>
        
// </div>
//PD: CACHE Q TIENES EL PROBLEMA Q SI TIENE VIDEOS O IMG
//HACE UN IF SI EXISTEN IMG ANTES DEL += EN EL IF INSERTAS LOS CON IMG Y EN EL ELSE LOS CON VIDEOS 
//NOSE SI FUNQUE xd