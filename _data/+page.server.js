import fetchJson from "./fetch-json.js";


export async function load() {
    const ddaAgencies = 'https://fdnd-agency.directus.app/items/dda_agencies/'
    const members = await fetchJson(ddaAgencies)

    return {
        // first6Items: first6Items.data,
        // members: members.data

        members: members.data,
    }
}