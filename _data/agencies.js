import { createDirectus, rest } from '@directus/sdk';

const agencies = createDirectus('https://fdnd-agency.directus.app/')
    .with(rest());

export default agencies;