<script lang="ts">
  import { onMount } from "svelte";
  import { fly, fade, scale } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { skillsIcons } from "$lib"; // Ensure this path matches your index.ts location

  // --- State ---
  let mounted = false;
  let activeCategory = "All";
  let selectedSkill: (typeof skillsIcons)[0] | null = null; // Typing based on your array

  // --- Configuration ---
  const tools = [
    { name: "Figma", icon: "figma" },
    { name: "Insomnia", icon: "insomnia" },
    { name: "Notion", icon: "notion" },
    { name: "Zed", icon: "zed" },
  ];

  const categories = ["All", "Backend", "Frontend", "DevOps", "Fullstack"];

  // --- Reactivity ---
  $: filteredSkills =
    activeCategory === "All"
      ? skillsIcons
      : skillsIcons.filter((s) => s.category === activeCategory);

  // --- Helpers ---
  function getSkillBadge(level: number) {
    if (level >= 90) {
      return {
        label: "Expert",
        classes: "border-emerald-500/20 bg-emerald-500/5 text-emerald-500",
      };
    } else if (level >= 80) {
      return {
        label: "Advanced",
        classes: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400",
      };
    } else {
      return {
        label: "Proficient",
        classes: "border-yellow-500/20 bg-yellow-500/5 text-yellow-500",
      };
    }
  }

  function openModal(skill: typeof selectedSkill) {
    selectedSkill = skill;
    // Optional: Prevent background scrolling
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    selectedSkill = null;
    document.body.style.overflow = "unset";
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") closeModal();
  }

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
  <title>Tech Stack - Guilherme Pacheco</title>
</svelte:head>

<div class="min-h-screen pb-20 overflow-x-hidden relative">
  {#if mounted}
    <div class="pt-20 pb-12 px-4 text-center space-y-6 max-w-4xl mx-auto">
      <div in:fly={{ y: -20, duration: 600 }}>
        <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight">
          My Technical <span class="text-primary">Arsenal</span>
        </h1>
        <p class="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          A curated list of technologies I use to build scalable,
          high-performance applications. Focused on the .NET ecosystem and
          modern web standards.
        </p>
      </div>
    </div>

    <div
      in:fade={{ duration: 800 }}
      class="relative w-full py-10 border-y border-zinc-800/50 backdrop-blur-sm overflow-hidden group mb-16"
      style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"
    >
      <div
        class="flex gap-12 items-center animate-infinite-scroll w-max group-hover:[animation-play-state:paused]"
      >
        {#each [...skillsIcons, ...skillsIcons, ...skillsIcons] as skill}
          <div
            class="flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default"
          >
            <img
              src={`/icons/${skill.iconName}.svg`}
              alt={skill.skillName}
              class="w-12 h-12"
            />
          </div>
        {/each}
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex justify-center mb-12 gap-2 flex-wrap">
        {#each categories as cat}
          <button
            on:click={() => (activeCategory = cat)}
            class={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
              activeCategory === cat
                ? "bg-primary text-white border-primary-hover shadow-lg"
                : "bg-transparent text-zinc-500 border-transparent hover:bg-zinc-900 hover:text-zinc-300"
            }`}
          >
            {cat}
          </button>
        {/each}
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {#each filteredSkills as skill, i (skill.skillName)}
          {@const badge = getSkillBadge(skill.level)}

          <button
            in:fly={{ y: 20, duration: 400, delay: i * 50 }}
            on:click={() => openModal(skill)}
            class="group relative text-left p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 w-full"
          >
            <div class="flex items-start justify-between mb-4">
              <div
                class="p-3 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors"
              >
                <img
                  src={`/icons/${skill.iconName}.svg`}
                  alt={skill.skillName}
                  class="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span
                class={`text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wider ${badge.classes}`}
              >
                {badge.label}
              </span>
            </div>

            <h3
              class="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors"
            >
              {skill.skillName}
            </h3>

            <p class="text-zinc-500 text-xs line-clamp-2 h-8 leading-relaxed">
              {skill.description}
            </p>

            <div
              class="mt-4 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs text-zinc-500 font-mono"
            >
              <span>{skill.yearsOfExperience} years exp.</span>
              <span class="group-hover:text-white transition-colors"
                >Details &rarr;</span
              >
            </div>
          </button>
        {/each}
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 py-16">
      <div class="flex items-center gap-4 mb-8">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h2 class="text-zinc-600 text-xs uppercase tracking-widest font-bold">
          Daily Drivers
        </h2>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div class="flex justify-center flex-wrap gap-8">
        {#each tools as tool, i}
          <div
            in:fly={{ y: 20, delay: 800 + i * 50 }}
            class="flex flex-col items-center gap-3 group"
          >
            <div
              class="w-14 h-14 p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-all"
            >
              <img
                src={`/icons/${tool.icon}.svg`}
                alt={tool.name}
                class="w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if selectedSkill}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}
    >
      <div
        class="absolute inset-0 bg-black/80 backdrop-blur-sm"
        on:click={closeModal}
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
                src={`/icons/${selectedSkill.iconName}.svg`}
                alt={selectedSkill.skillName}
                class="w-10 h-10"
              />
            </div>
            <div>
              <h2 class="text-2xl font-bold text-white tracking-tight">
                {selectedSkill.skillName}
              </h2>
              <p class="text-zinc-500 text-sm font-mono">
                {selectedSkill.category} • {selectedSkill.yearsOfExperience} Years
                Exp
              </p>
            </div>
          </div>

          <button
            on:click={closeModal}
            class="p-2 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors"
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
              {selectedSkill.description}
            </p>

            <div
              class="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800/50"
            >
              <h4
                class="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2"
              >
                <span class="w-1 h-1 bg-primary rounded-full"></span> Implementation
                Strategy
              </h4>
              <p class="text-sm text-zinc-400 leading-relaxed">
                {selectedSkill.howIUse}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4
                class="text-sm font-semibold text-white mb-3 flex items-center gap-2"
              >
                Technical Scope
              </h4>
              <div class="flex flex-wrap gap-2">
                {#each selectedSkill.technicalTerms.split(", ") as term}
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
                "{selectedSkill.simpleTerms}"
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
              {#each selectedSkill.keyProjects as project}
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
  {/if}
</div>

<style>
  @keyframes infinite-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-33.33%);
    } /* Adjusted for tripled array */
  }
  .animate-infinite-scroll {
    animation: infinite-scroll 40s linear infinite;
  }
</style>
