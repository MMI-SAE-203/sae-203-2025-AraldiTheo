import PocketBase from 'pocketbase' ;
export const pb = new PocketBase('http://127.0.0.1:8090');


// export async function allfilm() {
//   const records = await pb.collection('film').getFullList() ;
//   return records ;
//   }
export const getFilm = async (collection = "film") => {
  try {
    const films = await pb.collection(collection).getFullList({
      sort: 'date',
  });
   
    const updatedfilm = films.map((film) => ({
      ...film,
      imageUrl: film.affiche
        ? pb.files.getURL(film, film.affiche[0], { thumb: "1024x1024" })
        : null,
    }));
    return updatedfilm;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return []; 
  }
};

export const onefilm = async (id, collection = "film") => {
  try {
    const film = await pb.collection(collection).getOne(id);

    film.imageUrlsFull = Array.isArray(film?.affiche)
      ? film.affiche.map((img) =>
          pb.files.getURL(film, img, { thumb: "1024x1024"})
        )
      : [];

    return film;
  } catch (error) {
    console.error("Erreur :", error);
    return [];
  }
};

export const getactivite = async (collection = "activite") => {
  try {
    const activites = await pb.collection(collection).getFullList({
      sort: 'date',
  });
   
    const updatedactivite = activites.map((activite) => ({
      ...activite,
      imageUrl: activite.affiche
        ? pb.files.getURL(activite, activite.affiche[0], { thumb: "1024x1024" })
        : null,
    }));
    return updatedactivite;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return []; 
  }
};
export const getinvite = async (collection = "invite") => {
  try {
    const invites = await pb.collection(collection).getFullList();
   
    const updatedinvite = invites.map((invite) => ({
      ...invite,
      imageUrl: invite.photo
        ? pb.files.getURL(invite, invite.photo[0], { thumb: "1024x1024" })
        : null,
    }));
    return updatedinvite;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return []; 
  }
};