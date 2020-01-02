const baseUrl = 'http://api.adorable.io/avatars';

async function fetchPhotos(id) {
    const res = await fetch (`${baseUrl}/${id}`);
    const data = await res.json();
}

fetchPhotos('32131231');
