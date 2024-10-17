import { createDirectus, rest } from '@directus/sdk';

const agencies = createDirectus('https://fdnd-agency.directus.app/items/')
    .with(rest());

export default agencies;