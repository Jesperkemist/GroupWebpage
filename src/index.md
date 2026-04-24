---
layout: base.html
title: Home
---

<div class="hero">
    <div class="hero-image_2">
        <img src="{{ '/assets/Jesper_docentdiplomering_round.png' | url }}" alt="Jesper Jacobsson">
    </div>
    <div class="hero-content">
        {% include "group_introduction.md" %}
    </div>
</div>

<div class="research-interests">
    <h2>Research Interests</h2>
    <div class="research-grid">
        <figure>
            <img src="{{ '/assets/AI_ladder.png' | url }}" alt="Topic 1">
            <figcaption>AI for material science</figcaption>
        </figure>
        <figure>
            <img src="{{ '/assets/Robot_round.png' | url }}" alt="Topic 2">
            <figcaption>Research automation</figcaption>
        </figure>
        <figure>
            <img src="{{ '/assets/FAIR_data.png' | url }}" alt="Topic 3">
            <figcaption>FAIR research data</figcaption>
        </figure>
        <figure>
            <img src="{{ '/assets/Perovskite_structure.png' | url }}" alt="Topic 4">
            <figcaption>Perovskite photovoltaics</figcaption>
        </figure>
    </div>
</div>