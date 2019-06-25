function GalleryController() {
    Llama.get('../app/data/gallery.json').then( ( data ) => {
        let container = document.getElementById('general-container');
        data.forEach( d => {
            let showImages = '';
            d.images.forEach( imageSrc => {
                console.log(imageSrc);
                showImages += 
                `<a class="item-img" href="${imageSrc}" data-lightbox="mygallery-hackaton"><img src="${imageSrc}" alt="Aviones" /></a>`;
            });
            container.innerHTML += 
            `<div class="galery-container">
                <div class="galery-separator">
                    <h2>${d.title}</h2>
                </div>
                ${showImages}
            </div>`;
        });
    }).catch( ( error ) => 
    {
        console.log( error );
    });
};