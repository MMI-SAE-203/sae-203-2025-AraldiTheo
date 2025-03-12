import { allfilm } from "./backend.mjs";

try {
    const records = await allfilm() ;
    console.log(JSON.stringify(records, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }