<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import Icon from "@iconify/svelte";
  import { skillsIcons } from "$lib";

  const developer = {
    name: "Guilherme Pacheco",
    role: "Full-Stack Developer",
    passion: "Building awesome things & Solving Problems.",
  };

  let displayText = "";
  let i = 0;
  let mounted = false;

  onMount(() => {
    mounted = true;
    const typeWriter = setInterval(() => {
      if (i < developer.passion.length) {
        displayText += developer.passion.charAt(i);
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 30);
  });
</script>

<div
  class="flex flex-col justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-7 space-y-8 order-2 lg:order-1 pt-8 lg:pt-0">
      {#if mounted}
        <div
          in:fly={{ y: 20, duration: 600, delay: 100, easing: cubicOut }}
          class="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-semibold shadow-[0_0_15px_rgba(241,80,37,0.15)] backdrop-blur-sm"
        >
          <span class="relative flex h-2 w-2 mr-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"
            ></span>
          </span>
          Open to work
        </div>

        <div
          in:fly={{ y: 20, duration: 600, delay: 200, easing: cubicOut }}
          class="space-y-4"
        >
          <h1
            class="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Hello, I'm <br />
            <span
              class="text-transparent bg-clip-text bg-linear-to-r from-primary via-orange-400 to-orange-300"
            >
              {developer.name}
            </span>
          </h1>

          <div class="h-8 flex items-center">
            <p
              class="text-lg sm:text-xl text-zinc-400 font-mono border-l-2 border-primary pl-3"
            >
              {displayText}<span class="animate-pulse text-primary">_</span>
            </p>
          </div>
        </div>

        <div
          in:fly={{ y: 20, duration: 600, delay: 300, easing: cubicOut }}
          class="flex flex-wrap gap-4 pt-2"
        >
          <a
            href="/projects"
            class="px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-[#d13f18] transition-all shadow-[0_0_20px_rgba(241,80,37,0.3)] hover:shadow-[0_0_30px_rgba(241,80,37,0.5)] active:scale-95 flex items-center gap-2"
          >
            View Projects
          </a>
          <a
            href="/about"
            class="px-8 py-3 rounded-lg border border-zinc-700 text-zinc-300 font-medium hover:border-primary/50 hover:text-white hover:bg-zinc-800 transition-all active:scale-95"
          >
            About Me
          </a>
        </div>

        <div
          in:fly={{ y: 20, duration: 600, delay: 400, easing: cubicOut }}
          class="pt-6 border-t border-zinc-800/50"
        >
          <p
            class="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4"
          >
            Core Technologies
          </p>
          <div class="flex flex-wrap gap-3">
            {#each skillsIcons as skill, idx}
              <div
                in:fly={{ y: 10, duration: 300, delay: 500 + idx * 30 }}
                class="group flex items-center gap-2 px-3 py-1.5 bg-[#252526] border border-zinc-700/50 rounded-md hover:border-primary/50 hover:bg-zinc-800 transition-colors cursor-default"
              >
                {#if skill.iconName}
                  <img
                    src={`/icons/${skill.iconName}.svg`}
                    alt={skill.skillName}
                    class="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                {/if}
                <span
                  class="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors"
                  >{skill.skillName}</span
                >
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
          in:fly={{ x: 50, duration: 800, delay: 300, easing: cubicOut }}
          class="w-full max-w-md relative rounded-xl bg-[#0d1117] border border-zinc-800 shadow-2xl overflow-hidden group hover:border-primary/30 transition-colors duration-500"
        >
          <div
            class="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-zinc-800"
          >
            <div class="flex gap-2">
              <span class="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span class="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span class="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            </div>
            <span class="text-xs text-zinc-500 font-mono"
              >portfolio.config.ts</span
            >
          </div>

          <div class="p-6 overflow-hidden">
            <pre class="font-mono text-sm leading-relaxed text-zinc-300">
<span class="text-primary">const</span> <span class="text-white">developer</span
              > = <span class="text-yellow-300">{`{`}</span>
  name: <span class="text-green-400">"{developer.name}"</span>,
  role: <span class="text-green-400">"Full-Stack"</span>,
  hardWorker: <span class="text-primary">true</span>,
  quickLearner: <span class="text-primary">true</span>,
  hirable: <span class="text-primary">true</span>,
  location: <span class="text-green-400">"Brazil"</span>,
  drink: <span class="text-green-400">"Coffee"</span>
<span class="text-yellow-300">{`}`}</span>;</pre>
          </div>

          <div
            class="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent pointer-events-none"
          ></div>
        </div>
      {/if}
    </div>
  </div>
</div>
