<script>
  import { fade, scale } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";

  export let skill;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }

  function handleKeydown(e) {
    if (e.key === "Escape") close();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div
  class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
  in:fade={{ duration: 200 }}
  out:fade={{ duration: 200 }}
>
  <div
    class="absolute inset-0 bg-black/80 backdrop-blur-sm"
    on:click={close}
  ></div>

  <div
    class="relative w-full max-w-2xl bg-[#0f0f11] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
    in:scale={{ start: 0.95, duration: 300, easing: cubicOut }}
    out:scale={{ start: 0.95, duration: 200 }}
  >
    <div
      class="sticky top-0 z-10 bg-[#0f0f11]/95 backdrop-blur border-b border-zinc-800 p-6 flex items-start justify-between"
    >
      <div class="flex items-center gap-4">
        <div class="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
          <img
            src={`/icons/${skill.iconName}.svg`}
            alt={skill.skillName}
            class="w-10 h-10"
          />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white tracking-tight">
            {skill.skillName}
          </h2>
          <p class="text-zinc-500 text-sm font-mono">
            {skill.category} • {skill.yearsOfExperience} Years Exp
          </p>
        </div>
      </div>

      <button
        on:click={close}
        class="p-2 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><line x1="18" y1="6" x2="6" y2="18"></line><line
            x1="6"
            y1="6"
            x2="18"
            y2="18"
          ></line></svg
        >
      </button>
    </div>

    <div class="p-6 space-y-8">
      <div class="space-y-4">
        <p class="text-lg text-zinc-300 leading-relaxed font-light">
          {skill.description}
        </p>

        <div class="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800/50">
          <h4
            class="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2"
          >
            <span class="w-1 h-1 bg-primary rounded-full"></span> Implementation
            Strategy
          </h4>
          <p class="text-sm text-zinc-400 leading-relaxed">
            {skill.howIUse}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="text-sm font-semibold text-white mb-3">
            Technical Scope
          </h4>
          <div class="flex flex-wrap gap-2">
            {#each skill.technicalTerms.split(", ") as term}
              <span
                class="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-mono"
              >
                {term}
              </span>
            {/each}
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-white mb-3">
            In Simple Terms
          </h4>
          <p
            class="text-sm text-zinc-500 italic leading-relaxed border-l-2 border-zinc-800 pl-4"
          >
            "{skill.simpleTerms}"
          </p>
        </div>
      </div>

      <div class="pt-6 border-t border-zinc-800">
        <h4
          class="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-4"
        >
          Applied in Projects
        </h4>
        <div class="flex flex-wrap gap-3">
          {#each skill.keyProjects as project}
            <div
              class="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-900 px-3 py-2 rounded-md border border-zinc-800"
            >
              <div class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              {project}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
