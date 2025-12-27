<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { skillsIcons } from "$lib";

  const developer = {
    name: "Guilherme Pacheco",
    role: "Mid-Level Full-Stack Engineer",
    summary:
      "Architecting scalable web solutions and intuitive digital experiences.",
  };

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<div
  class="relative flex flex-col justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
>
  <div
    class="absolute top-[-20%] right-[0%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
  ></div>

  <div
    class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10"
  >
    <div class="lg:col-span-7 space-y-10 order-2 lg:order-1 pt-8 lg:pt-0">
      {#if mounted}
        <div
          in:fly={{ y: 20, duration: 800, delay: 0, easing: cubicOut }}
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-zinc-300 w-fit"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"
            ></span>
          </span>
          Available for opportunities & freelances
        </div>

        <div class="space-y-6">
          <h1
            in:fly={{ y: 30, duration: 800, delay: 100, easing: cubicOut }}
            class="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
          >
            Design.<br />
            <span class="text-primary">Develop.</span><br />
            Ship.
          </h1>

          <div
            in:fly={{ y: 30, duration: 800, delay: 200, easing: cubicOut }}
            class="max-w-xl"
          >
            <p
              class="text-lg sm:text-xl text-zinc-400 leading-relaxed font-light"
            >
              I am <strong class="text-white font-medium"
                >{developer.name}</strong
              >. {developer.summary}
              Focusing on performance, accessibility, and clean architecture.
            </p>
          </div>
        </div>

        <div
          in:fly={{ y: 30, duration: 800, delay: 300, easing: cubicOut }}
          class="flex flex-wrap gap-6 pt-4"
        >
          <a
            href="/projects"
            class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-white"
          >
            <span>View Selected Work</span>
            <div
              class="absolute inset-0 -z-10 bg-linear-to-r from-primary/20 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></div>
          </a>
          <a
            href="/about"
            class="inline-flex h-12 items-center justify-center px-6 text-zinc-400 transition-colors hover:text-white"
          >
            More about me &rarr;
          </a>
        </div>

        <div
          in:fly={{ y: 30, duration: 800, delay: 400, easing: cubicOut }}
          class="pt-8"
        >
          <p
            class="text-xs uppercase tracking-widest text-zinc-600 font-semibold mb-6"
          >
            Technical Arsenal
          </p>
          <div class="flex flex-wrap gap-x-6 gap-y-4">
            {#each skillsIcons as skill, idx}
              <div
                in:fly={{ y: 10, duration: 400, delay: 500 + idx * 20 }}
                class="group flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default"
              >
                {#if skill.iconName}
                  <img
                    src={`/icons/${skill.iconName}.svg`}
                    alt={skill.skillName}
                    class="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                {/if}
                <span
                  class="text-sm font-medium text-zinc-400 group-hover:text-zinc-200"
                >
                  {skill.skillName}
                </span>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>

    <div
      class="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
    >
      {#if mounted}
        <div
          in:fly={{ x: 50, duration: 1000, delay: 300, easing: cubicOut }}
          class="w-full max-w-sm relative"
        >
          <div
            class="relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-xl p-8 shadow-2xl"
          >
            <div
              class="flex justify-between items-start mb-8 border-b border-zinc-800 pb-6"
            >
              <div>
                <h3 class="text-white font-bold text-lg tracking-tight">
                  {developer.name}
                </h3>
                <p class="text-zinc-500 text-sm font-mono">{developer.role}</p>
              </div>
              <div
                class="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center"
              >
                <span class="text-xs text-zinc-400">BR</span>
              </div>
            </div>

            <div class="space-y-4 font-mono text-sm">
              <div class="flex justify-between items-center text-zinc-400">
                <span>Experience</span>
                <span class="text-white">4+ Years</span>
              </div>
              <div class="flex justify-between items-center text-zinc-400">
                <span>Focus</span>
                <span class="text-white">Scalability</span>
              </div>
              <div class="flex justify-between items-center text-zinc-400">
                <span>Stack Strategy</span>
                <span class="text-white">TS / Rust / .NET</span>
              </div>
            </div>

            <div
              class="mt-8 pt-6 border-t border-zinc-800 flex items-center gap-3"
            >
              <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span
                class="text-xs text-primary font-medium tracking-wide uppercase"
                >System Operational</span
              >
            </div>
          </div>

          <div
            class="absolute -inset-4 bg-gradient-to-tr from-zinc-800 to-transparent opacity-20 blur-xl -z-10 rounded-full"
          ></div>
        </div>
      {/if}
    </div>
  </div>
</div>
