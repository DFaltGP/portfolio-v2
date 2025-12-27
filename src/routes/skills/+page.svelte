<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import { skillsIcons } from "$lib";

  let mounted = false;
  let activeCategory = "All";

  const tools = [
    { name: "Figma", icon: "figma" },
    { name: "Insomnia", icon: "insomnia" },
    { name: "Notion", icon: "notion" },
    { name: "Zed", icon: "zed" },
  ];

  const categories = ["All", "Backend", "Frontend", "DevOps"];

  $: filteredSkills =
    activeCategory === "All"
      ? skillsIcons
      : skillsIcons.filter((s) => s.category === activeCategory);

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Tech Stack - Guilherme Pacheco</title>
</svelte:head>

<div class="min-h-screen pb-20 overflow-x-hidden">
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
      class="relative w-full py-10 border-y border-zinc-800/50 backdrop-blur-sm overflow-hidden group"
    >
      <div
        class="absolute left-0 top-0 bottom-0 w-20 bg-transparent z-10"
      ></div>
      <div
        class="absolute right-0 top-0 bottom-0 w-20 bg-transparent z-10"
      ></div>

      <div
        class="flex gap-12 items-center animate-infinite-scroll w-max group-hover:[animation-play-state:paused]"
      >
        {#each [...skillsIcons, ...skillsIcons, ...skillsIcons] as skill}
          <div
            class="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default"
          >
            <img
              src={`/icons/${skill.iconName}.svg`}
              alt={skill.skillName}
              class="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        {/each}
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-16">
      <div class="flex justify-center mb-12 gap-2 flex-wrap">
        {#each categories as cat}
          <button
            on:click={() => (activeCategory = cat)}
            class={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-white shadow-[0_0_15px_rgba(241,80,37,0.4)]"
                : "bg-[#252526] text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {cat}
          </button>
        {/each}
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {#each filteredSkills as skill, i (skill.skillName)}
          <div
            in:fly={{ y: 20, duration: 400, delay: i * 50 }}
            class="group p-4 bg-[#252526]/40 border border-zinc-800 rounded-xl hover:border-primary/50 transition-all hover:-translate-y-1 flex items-center gap-4"
          >
            <div
              class="p-3 rounded-lg bg-[#18181b] border border-zinc-700/50 group-hover:border-primary/30 transition-colors"
            >
              <img
                src={`/icons/${skill.iconName}.svg`}
                alt={skill.skillName}
                class="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            <div class="flex-1">
              <h3
                class="text-white font-bold text-sm group-hover:text-primary transition-colors"
              >
                {skill.skillName}
              </h3>
              <div class="flex justify-between items-center mt-1">
                <span class="text-xs text-zinc-500 font-mono"
                  >{skill.yearsOfExperience}+ years</span
                >
                <div class="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div class="h-full bg-primary" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 pb-16">
      <div class="flex items-center gap-4 mb-8">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h2 class="text-zinc-500 text-sm uppercase tracking-widest font-bold">
          Preferred Tools
        </h2>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div class="flex justify-center flex-wrap gap-6">
        {#each tools as tool, i}
          <div
            in:fly={{ y: 20, delay: 800 + i * 50 }}
            class="flex flex-col items-center gap-2 group"
          >
            <div
              class="w-16 h-16 p-4 rounded-2xl bg-[#252526] border border-zinc-800 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(241,80,37,0.15)] transition-all"
            >
              <img
                src={`/icons/${tool.icon}.svg`}
                alt={tool.name}
                class="grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all"
              />
            </div>
            <span
              class="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors"
              >{tool.name}</span
            >
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  /* Animação do Marquee Infinito */
  @keyframes infinite-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  .animate-infinite-scroll {
    animation: infinite-scroll 40s linear infinite;
  }
</style>
