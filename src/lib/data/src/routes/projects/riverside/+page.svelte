<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Riverside Municipal Site | Matthew Mecum</title>
  <meta name="description" content="A modern, accessible municipal website built with SvelteKit and Tailwind — featuring department directory, permits, news, and emergency alerts." />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12 px-6">
  <div class="max-w-5xl mx-auto">
    <!-- Back link -->
    <a href="/#projects" class="inline-block mb-8 text-blue-600 hover:text-blue-800 underline">
      ← Back to Portfolio
    </a>

    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Riverside Municipal Site
    </h1>

    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- Live Demo + Screenshot -->
      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://riverside-municipal-site.vercel.app" 
            title="Riverside Municipal Site Live Demo"
            class="w-full h-96 border-0"
            loading="lazy">
          </iframe>
        </div>
        <div class="text-center space-x-4">
          <a href="https://riverside-municipal-site.vercel.app" target="_blank" 
             class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Live Demo
          </a>
          <a href="https://github.com/msmecum1/riverside-municipal-site" target="_blank"
             class="inline-block px-6 py-3 border border-gray-600 text-gray-700 rounded-lg hover:bg-gray-100">
            View Source
          </a>
        </div>
      </div>

      <!-- Details -->
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-semibold mb-3">About This Project</h2>
          <p class="text-gray-700 leading-relaxed">
            A fully responsive, accessible municipal government website prototype built from the ground up with SvelteKit + Tailwind. Designed for real-world city use — includes department directory, online permits, emergency alerts, council agendas, and 508/WCAG compliance.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">Key Features</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Blazing-fast static generation with ISR for news/events</li>
            <li>Dark mode + reduced motion preferences</li>
            <li>Full keyboard navigation and screen-reader optimization</li>
            <li>Mobile-first responsive layout</li>
            <li>Form handling with Netlify/Vercel forms (ready)</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">Tech Stack</h3>
          <div class="flex flex-wrap gap-2">
            {#each ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'Vercel', 'WCAG 2.1'] as tech}
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>