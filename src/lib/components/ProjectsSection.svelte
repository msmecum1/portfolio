<script lang="ts">
  import { projects } from '$lib/data/portfolio';
</script>

<section id="projects" class="py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
      Featured Projects
    </h2>
    <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
      Real-world applications I’ve designed and built from the ground up.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {#each projects as project (project.title)}
        <a
          href="/projects/riverside"
          class="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div class="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
            {#if project.image}
              <img
                src={project.image}
                alt={project.title}
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            {:else}
              <div class="flex items-center justify-center h-full text-white text-6xl font-bold opacity-30">
                {project.title.charAt(0)}
              </div>
            {/if}
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p class="text-white font-semibold text-lg">View Details →</p>
            </div>
          </div>

          <div class="p-8">
            <h3 class="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
            <p class="text-gray-600 mb-6 line-clamp-3">{project.description}</p>

            <div class="flex flex-wrap gap-2">
              {#each project.tech.slice(0, 4) as tag}
                <span class="px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>