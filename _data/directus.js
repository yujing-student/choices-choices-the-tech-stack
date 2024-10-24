import { createDirectus, rest } from '@directus/sdk';


// defineer een variable met de directus database en maak een api call naar de database
const agencies = createDirectus('https://fdnd-agency.directus.app/')
    .with(rest());

// exporteer dit variable zodat het gebruikt kan worden op de andere pagina's
export default agencies;


//https://fdnd-agency.directus.app/items/dda_agencies/