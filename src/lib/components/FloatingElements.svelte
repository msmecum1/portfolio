<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
  {#each Array(8) as _, index (index)}
    <div
      class="animate-float absolute h-4 w-4 rounded-full bg-white/20"
      style="
        left: {Math.random() * 100}%;
        top: {Math.random() * 100}%;
        animation-delay: {index * 0.5}s;
        animation-duration: {6 + Math.random() * 4}s;
      "
    ></div>
  {/each}
</div>

<style>
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>