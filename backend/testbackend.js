import { getfilm,getactivite,getinvite,oneID,oneIDActivite,oneIDInvite,allActiviteByInvite,allActiviteByName,addNewFilm,addNewInvite,addNewActivite,updateFilmById,updateInviteById,updateActiviteById
} from './backend.mjs' ;

try { const date = await getfilm();   
    console.log(date); 
    } catch (e) { 
        console.error(e); 
    }

 try { const date = await getactivite();   
     console.log(date); 
     } catch (e) { 
         console.error(e); 
     }
     
     
     try {
         const records = await getinvite();
         console.log(records);
     } catch (e) {
         console.error(e);
     }
     
     try {
         const Onerecord = await oneID('29k2mi7c52a3n68');
         console.log(Onerecord);
     } catch (e) {
         console.error(e);
     }
     
     try {
         const Onerecord = await oneIDActivite('55cbyc81r7gyg0c');
         console.log(Onerecord);
     } catch (e) {
         console.error(e);
     }
     
     try {
         const Onerecord = await oneIDInvite('9481k641j2h8997');
         console.log(Onerecord);
     } catch (e) {
         console.error(e);
     }
     
     try {
         const records = await allActiviteByInvite('9481k641j2h8997');
         console.table(records);
     } catch (e) {
         console.error(e);
         
     }
     
     try {
         const records = await allActiviteByName('Antoine');
         console.log(records);
     } catch (e) {
         console.error(e);
      }
     
     
     
     try {
         const newFilm = {
             "synopsis": "Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer et d'explorer les différentes régions encore mystérieuses de Pandora. Lorsqu'une ancienne menace refait surface, Jake va devoir mener une guerre difficile contre les humains.",
             "ba": "https://www.youtube.com/watch?v=d9MyW72ELq0",
             "nom_film": "Avatar 2",
             "date": "2025-07-08 19:30:00",
         };
     
         await addNewFilm(newFilm);
         
     } catch (e) {
         console.error(e);
     }
     
     
     try {
         const newInvite = {
             "nom_invite": "Araldi",
             "prenom_invite": "Théo",
             "bio": "c'est moi",
         };
     
         await addNewInvite(newInvite);
     
     } catch (e) {
         console.error(e);
     }
     
        try {
            const newActivite = {
                "date": "2025-07-06 17:00:00",
                "nom_activite": "Atelier d'éclairage",
            };
     
            await addNewActivite(newActivite);
     
        } catch (e) {
            console.error(e);
}
     
     try {
         const data = {
             "nom_film": "Avatar 2",
             "synopsis": "Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer et d'explorer les différentes régions encore mystérieuses de Pandora. Lorsqu'une ancienne menace refait surface, Jake va devoir mener une guerre difficile contre les humains.",
             "ba": "https://www.youtube.com/watch?v=d9MyW72ELq0",
             "date": "2025-07-08 19:30:00",
             "infos": "Film en 3D",
         };
     
         await updateFilmById('29k2mi7c52a3n68', data);
     } catch (e) {
         console.error(e);
     }
     
     
     try {
         const data = {
             "nom_invite": "Estelle",
             "prenom_invite": "Coullon",
             "bio": "test",
             
         };
     
         await updateInviteById('x4p859btokv1l0y', data);
     } catch (e) {
         console.error(e);
     }
     
     try {
         const data = {
             "nom_activite": "Vision",
             "date": "2025-09-21 23:00:00",
         };
     
         await updateActiviteById('zujy4696z4261i6', data);
     } catch (e) {
         console.error(e);
     }