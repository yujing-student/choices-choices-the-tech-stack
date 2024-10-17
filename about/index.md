---
title: About Me
layout: layouts/page.njk
---

I am a person that writes stuff.

link tutorial: https://www.digitalocean.com/community/tutorials/how-to-create-and-deploy-your-first-eleventy-website#step-6-creating-an-about-page

<section class="grid-container">
    <h2 aria-label="leden" class="hide-members">Leden</h2>
    {#each data.members as member}

<article class="card">
    <picture>
        <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=avif" type="image/avif">
        <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=webp" type="image/webp">
        <img src="https://fdnd-agency.directus.app/assets/{member.photo}" loading="lazy" alt="foto van het bedrijf{member.title}">
    </picture>

<ul class="card-label-filters">
    <li class="label-filters">
        service design
    </li>
    <li class="label-filters">label</li>
</ul>

<h3 aria-label="bedrijfsnaam {member.title}">{member.title}</h3>
<p>{member.address}</p>

<ul class="card-label">
    <li>{parseInt(member.colleagues)}  </li>
    <li>werknemers</li>
    <li class="card-hiring">hiring</li>

</ul>

<Link href="/" clazz="detail-link"><span slot="link-text">Details</span>
    <svg width="16" height="16" slot="svg-icon-right" viewBox="0 0 24 24" fill="none" aria-label="ga naar details">
        <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
    </svg>
</Link>

</article>
{/each}


</section>



[//]: # (https://www.digitalocean.com/community/tutorials/how-to-create-and-deploy-your-first-eleventy-website#step-6-creating-an-about-page)