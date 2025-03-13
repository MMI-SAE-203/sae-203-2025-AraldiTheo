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
    const film = await pb.collection(collection).getOne(id, {expand:'invite'});

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
export const oneactivite = async (id, collection = "activite") => {
  try {
    const activite = await pb.collection(collection).getOne(id,{expand:'animateur'});

    activite.imageUrlsFull = Array.isArray(activite?.affiche)
      ? activite.affiche.map((img) =>
          pb.files.getURL(activite, img, { thumb: "1024x1024"})
        )
      : [];

    return activite;
  } catch (error) {
    console.error("Erreur :", error);
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
export const oneinvite = async (id, collection = "invite") => {
  try {
    const invite = await pb.collection(collection).getOne(id,{expand:'film'});

    invite.imageUrlsFull = Array.isArray(invite?.photo)
      ? invite.photo.map((img) =>
          pb.files.getURL(invite, img, { thumb: "1024x1024"})
        )
      : [];

    return invite;
  } catch (error) {
    console.error("Erreur :", error);
    return [];
  }
};

export async function updateFilmById(id, data) {
  return await pb.collection('film').update(id, data);
}

export async function updateInviteById(id, data) {
  return await pb.collection('invite').update(id, data);
}

export async function updateActiviteById(id, data) {
  return await pb.collection('activite').update(id, data);
}

export async function DeleteFilmById(id) {
  await pb.collection('film').delete(id) ;
}
export async function DeleteInviteById(id) {
  await pb.collection('invite').delete(id) ;
}
export async function DeleteActiviteById(id) {
  await pb.collection('activite').delete(id) ;
}


export async function addfilm(data) {
  try {
      await pb.collection("film").create(data);
      return {
          success: true,
          message: "le film a été ajouté avec succès.",
      };
  } catch (error) {
      return {
          success: false,
          message: "Une erreur est survenue lors de l'ajout du film " + error,
      };
  }
}
export async function addactivite(data) {
  try {
      await pb.collection("activite").create(data);
      return {
          success: true,
          message: "l'activite a été ajouté avec succès.",
      };
  } catch (error) {
      return {
          success: false,
          message: "Une erreur est survenue lors de l'ajout de l'activite " + error,
      };
  }
}
export async function addinvite(data) {
  try {
      await pb.collection("invite").create(data);
      return {
          success: true,
          message: "l'activite a été ajouté avec succès.",
      };
  } catch (error) {
      return {
          success: false,
          message: "Une erreur est survenue lors de l'ajout de l'activite " + error,
      };
  }
}