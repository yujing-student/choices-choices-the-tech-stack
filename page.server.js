import fetchJson from "fetch-json.js";


export async function load() {

    const baseUrl = 'https://fdnd-agency.directus.app/items'
    const agencies = await fetchJson(`${baseUrl}/dda_agencies/`)
    const vacancies = await fetchJson(`${baseUrl}/dda_agencies_vacancies/`)


    // todo array.slice gebruiken om de eerste 6 items te laten zien en vervolgens
    return {


        members: agencies.data,
    }
}