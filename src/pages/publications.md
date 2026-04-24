---
layout: base.html
title: Publications
permalink: /{{ page.fileSlug }}/
---

# Publications
Below are the group’s publications organised by themes. <br>
For the most up to date publication list, please see [GoogleScholar](https://scholar.google.com/citations?user=-vbtdmYAAAAJ&hl=en)

### Code
The codebase for projects with associated code is found at [GitHub](https://github.com/Jesperkemist?tab=repositories)

<div class="accordion" id="publicationsAccordion">
  <!-- Highlights -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#highlightsPubs">
        🏆 Highlights
      </button>
    </h2>
    <div id="highlightsPubs" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
        <!-- <div class="alert alert-info" role="alert">
          <strong>Featured Publications:</strong>
        </div> -->
          {% for pub in citations.all | filterByTag("Highlights") %}
            <li class="mb-2">
              {{ pub.authors | formatAuthors | safe }}<br>
              "{{ pub.title }}."<br>
              <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
              {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
            </li>
          {% endfor %}
      </div>
    </div>
  </div>


  <!-- Perspectives -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Perspectives">
        ⭐ Perspectives
      </button>
    </h2>
    <div id="Perspectives" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
          {% for pub in citations.all | filterByTag("Perspective") %}
            <li class="mb-2">
              {{ pub.authors | formatAuthors | safe }}<br>
              "{{ pub.title }}."<br>
              <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
              {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
            </li>
          {% endfor %}
      </div>
    </div>
  </div>

  <!-- AI for materials science -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aiPubs">
        🤖 AI for Materal Science
      </button>
    </h2>
    <div id="aiPubs" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
        {% for pub in citations.all | filterByTag("AI_for_material_science") %}
          <li class="mb-2">
            {{ pub.authors | formatAuthors | safe }}<br>
            "{{ pub.title }}."<br>
            <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
            {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
          </li>
        {% endfor %}
      </div>
    </div>
  </div>

  <!-- FAIR data -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAIR_data">
        🗃️ FAIR data. (Findable, Accessible, Interoperatable, Reusable)
      </button>
    </h2>
    <div id="FAIR_data" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
        {% for pub in citations.all | filterByTag("FAIR_data") %}
          <li class="mb-2">
            {{ pub.authors | formatAuthors | safe }}<br>
            "{{ pub.title }}."<br>
            <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
            {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
          </li>
        {% endfor %}
      </div>
    </div>
  </div>


  <!-- Perovskites -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#perovskites">
        ☀️ Perovskite solar cells
      </button>
    </h2>
    <div id="perovskites" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
          {% for pub in citations.all | filterByTag("Perovskites") %}
            <li class="mb-2">
              {{ pub.authors | formatAuthors | safe }}<br>
              "{{ pub.title }}."<br>
              <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
              {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
            </li>
          {% endfor %}
      </div>
    </div>
  </div>



  <!-- Review -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Review">
        📖 Reviews
      </button>
    </h2>
    <div id="Review" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
          {% for pub in citations.all | filterByTag("Review") %}
            <li class="mb-2">
              {{ pub.authors | formatAuthors | safe }}<br>
              "{{ pub.title }}."<br>
              <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
              {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
            </li>
          {% endfor %}
      </div>
    </div>
  </div>

  <!-- Quantum_dots -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Quantum_dots">
        ⚪ Quantum dots
      </button>
    </h2>
    <div id="Quantum_dots" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
          {% for pub in citations.all | filterByTag("Quantum_dots") %}
            <li class="mb-2">
              {{ pub.authors | formatAuthors | safe }}<br>
              "{{ pub.title }}."<br>
              <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
              {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
            </li>
          {% endfor %}
      </div>
    </div>
  </div>


  <!-- Hydrogen_production -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Hydrogen_production">
        ⚡ Solar hydrogen production
      </button>
    </h2>
    <div id="Hydrogen_production" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
          {% for pub in citations.all | filterByTag("Hydrogen_production") %}
            <li class="mb-2">
              {{ pub.authors | formatAuthors | safe }}<br>
              "{{ pub.title }}."<br>
              <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
              {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
            </li>
          {% endfor %}
      </div>
    </div>
  </div>

  <!-- Bookchapters -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#book_chapters">
        📖 Book Chapters
      </button>
    </h2>
    <div id="book_chapters" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
        {% for pub in citations.Book_chapters %}
          <li class="mb-2">
            {{ pub.authors | formatAuthors | safe }}<br>
            "{{ pub.title }}."<br>
             <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
            {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
          </li>
        {% endfor %}
      </div>
    </div>
  </div>


  <!-- All Publications Section -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#allPubs">
        📜 All Publications
      </button>
    </h2>
    <div id="allPubs" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
        {% for pub in citations.all %}
          <li class="mb-2">
            {{ pub.authors | formatAuthors | safe }}<br>
            "{{ pub.title }}."<br>
             <em>{{ pub.journal }}</em>{% if pub.publication_year %}, <strong>{{ pub.publication_year }}</strong>{% endif %}{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}, {{ pub.issue }}{% endif %}{% if pub.page %}, {{ pub.page }}{% endif %}.
            {% if pub.url %}<a href="{{ pub.url }}">link</a>{% endif %}
          </li>
        {% endfor %}
      </div>
    </div>
  </div>
</div>

  <!-- <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#allPubs">
        📚 All Publications
      </button>
    </h2>
    <div id="allPubs" class="accordion-collapse collapse" data-bs-parent="#publicationsAccordion">
      <div class="accordion-body">
        {% set currentType = '' %}
        {% for pub in citations_test.all %}
          {% if pub.type != currentType %}
            {% if currentType != '' %}</ul>{% endif %}
            {% if pub.type == 'journal' %}<h5 class="mb-3 mt-3">Journal Articles</h5>{% endif %}
            {% if pub.type == 'conference' %}<h5 class="mb-3 mt-3">Conference Proceedings</h5>{% endif %}
            {% if pub.type == 'preprint' %}<h5 class="mb-3 mt-3">Preprints</h5>{% endif %}
            <ul class="list-unstyled">
            {% set currentType = pub.type %}
          {% endif %}
          <li class="mb-2">
            <strong>{{ pub.authors }} ({{ pub.year }}).</strong> "<a href="{{ pub.url }}">{{ pub.title }}</a>." <em>{{ pub.journal }}</em>.
          </li>
        {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</div> -->
