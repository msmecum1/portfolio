<script lang="ts">
  import { onMount } from 'svelte';

  // Auto-scroll to content when page loads — fixes the "land at top" issue
  onMount(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 180,
        behavior: 'smooth'
      });
    }, 150);
  });
</script>

<svelte:head>
  <title>Riverside Municipal Site • Matthew Mecum</title>
  <meta
    name="description"
    content="A modern, WCAG 2.1-compliant municipal government portal built with SvelteKit and Tailwind. Features real-time emergency alerts, online permits, and full accessibility."
  />
</svelte:head>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
  <div class="max-w-7xl mx-auto">
    <!-- Back to Portfolio -->
    <a
      href="/#projects"
      class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-10 transition-colors"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Back to Portfolio
    </a>

    <!-- Title -->
    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-12 leading-tight">
      Riverside Municipal Site
    </h1>

    <div class="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
      <!-- Left: Live Demo -->
      <div class="space-y-8 order-2 lg:order-1">
        <!-- Live Preview -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-2"></div>
          <iframe
            src="https://riverside-municipal-site.vercel.app"
            title="Riverside Municipal Site – Live Demo"
            class="w-full h-[500px] md:h-[600px] border-0"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://riverside-municipal-site.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Live Demo
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="https://github.com/msmecum1/riverside-municipal-site"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            View Source on GitHub
          </a>
        </div>
      </div>

      <!-- Right: Project Info -->
      <div class="space-y-10 order-1 lg:order-2">
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">About This Project</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            A production-ready, fully accessible municipal government website prototype built from the ground up with modern web standards. Designed to serve real-world city needs with emphasis on usability, performance, and Section 508 / WCAG 2.1 compliance.
          </p>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-3">
              <span class="text-green-600 mt-1">Check</span>
              <span>Blazing-fast static generation + ISR for dynamic content (news, alerts)</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600 mt-1">Check</span>
              <span>Dark mode & reduced motion preferences (respects system settings)</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600 mt-1">Check</span>
              <span>Full keyboard navigation, screen reader optimization, proper ARIA labels</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600 mt-1">Check</span>
              <span>Mobile-first responsive design with touch-friendly controls</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600 mt-1">Check</span>
              <span>Ready for form integrations (Netlify/Vercel Forms, reCAPTCHA)</span>
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
          <div class="flex flex-wrap gap-3">
            {#each ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'Vercel', 'WCAG 2.1 AA', 'Responsive Design'] as tech}
              <span class="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">
                {tech}
              </span>
            {/each}
          </div>
        </section>
      </div>
    </div>
  </div>
</main>