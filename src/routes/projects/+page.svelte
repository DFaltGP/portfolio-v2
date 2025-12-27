<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import Icon from "@iconify/svelte";

  let mounted = false;
  let activeFilter = "all";
  let searchQuery = "";

  // Dados atualizados e refinados
  const projects = [
    {
      id: 1,
      title: "Fiscal Data Ingestion Engine",
      description:
        "Sistema de alta performance para processamento fiscal (NFCom/SPED). Otimizado para volumes massivos de dados.",
      category: "backend",
      tags: [".NET 8", "SQL Server", "Performance"],
      status: "completed", // completed | in-progress
      access: "private", // private | public
      highlights: [
        "20x mais rápido que o legado",
        "Conformidade SPED",
        "T-SQL Optimization",
      ],
      image: "mdi:file-chart",
      link: null,
    },
    {
      id: 2,
      title: "Enterprise AI Portal",
      description:
        "Migração de legado para Blazor Server com integração de IA Generativa para suporte ao cliente.",
      category: "fullstack",
      tags: ["Blazor", ".NET 8", "OpenAI", "Docker"],
      status: "completed",
      access: "private",
      highlights: [
        "Modernização de Legado",
        "Arquitetura Containerizada",
        "RAG Integration",
      ],
      image: "mdi:robot",
      link: null,
    },
    {
      id: 3,
      title: "Rust Cache-Aside Architecture",
      description:
        "Padrão de cache distribuído focado em consistência eventual e baixa latência para PostgreSQL.",
      category: "backend",
      tags: ["Rust", "Redis", "PostgreSQL", "Tokio"],
      status: "completed",
      access: "public",
      highlights: [
        "Zero-Cost Abstractions",
        "High Throughput",
        "Thread Safety",
      ],
      image: "mdi:language-rust",
      link: "https://github.com/guilherme/rust-cache-aside",
    },
    {
      id: 4,
      title: "Log Analyzer CLI",
      description:
        "Ferramenta CLI para análise de streams de logs massivos (GBs) com baixo consumo de memória.",
      category: "tooling",
      tags: ["Rust", "CLI", "Systems Programming"],
      status: "completed",
      access: "public",
      highlights: ["Stream-based I/O", "Memory Safe", "Cross-Platform"],
      image: "mdi:console-line",
      link: "https://github.com/guilherme/log-analyzer-cli",
    },
    {
      id: 5,
      title: "Real-Time Polling API",
      description:
        "API de votação utilizando WebSockets e Pub/Sub para alta concorrência.",
      category: "backend",
      tags: ["Node.js", "TypeScript", "Redis", "WS"],
      status: "completed",
      access: "public",
      highlights: ["Event-Driven", "Scalable", "Real-time"],
      image: "mdi:vote",
      link: "https://github.com/guilherme/realtime-voting",
    },
    {
      id: 6,
      title: "Automated Fiscal Search",
      description:
        "Integração resiliente com API Jettax para busca e processamento de documentos fiscais.",
      category: "backend",
      tags: ["C#", ".NET", "Integration", "Resilience"],
      status: "completed",
      access: "private",
      highlights: ["Error Handling", "Automação", "Background Jobs"],
      image: "mdi:cloud-search",
      link: null,
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "tooling", label: "Tools" },
  ];

  $: filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesFilter && matchesSearch;
  });

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Projects - Guilherme Pacheco</title>
</svelte:head>

<div class="min-h-screen px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  {#if mounted}
    <div in:fly={{ y: -20, duration: 600 }} class="space-y-6 mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-white">
        Selected <span class="text-primary">Works</span>
      </h1>
      <p
        class="text-zinc-400 max-w-2xl text-lg leading-relaxed border-l-2 border-primary pl-4"
      >
        A collection of high-performance systems, architectural proofs of
        concept, and full-stack applications solving real-world problems.
      </p>
    </div>

    <div
      in:fly={{ y: 20, duration: 600, delay: 200 }}
      class="flex flex-col md:flex-row gap-6 justify-between items-center mb-10 pb-6 border-b border-zinc-800"
    >
      <div class="flex flex-wrap gap-2">
        {#each categories as cat}
          <button
            on:click={() => (activeFilter = cat.id)}
            class={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === cat.id
                ? "bg-primary text-white shadow-[0_0_15px_rgba(241,80,37,0.3)]"
                : "bg-[#252526] text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {cat.label}
          </button>
        {/each}
      </div>

      <div class="relative w-full md:w-64">
        <Icon
          icon="mdi:magnify"
          class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          width="18"
        />
        <input
          bind:value={searchQuery}
          type="text"
          placeholder="Search technologies..."
          class="w-full bg-[#252526] border border-zinc-700/50 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
        />
      </div>
    </div>

    {#if filteredProjects.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredProjects as project, i (project.id)}
          <div
            in:fly={{ y: 30, duration: 500, delay: 300 + i * 100 }}
            class="group relative bg-[#252526]/40 border border-zinc-800 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm flex flex-col h-full"
          >
            <div class="flex justify-between items-start mb-4">
              <div
                class="p-3 bg-zinc-900 rounded-lg text-primary group-hover:scale-110 transition-transform"
              >
                <Icon icon={project.image} width="28" />
              </div>
              <div class="flex gap-2">
                {#if project.access === "private"}
                  <span
                    class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-800 text-zinc-500 border border-zinc-700"
                    >PRIVATE</span
                  >
                {/if}
              </div>
            </div>

            <h3
              class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors"
            >
              {project.title}
            </h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div class="space-y-2 mb-6">
              {#each project.highlights as highlight}
                <div class="flex items-center gap-2 text-xs text-zinc-500">
                  <Icon icon="mdi:check" class="text-primary" width="14" />
                  <span>{highlight}</span>
                </div>
              {/each}
            </div>

            <div
              class="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between"
            >
              <div class="flex flex-wrap gap-2">
                {#each project.tags.slice(0, 3) as tag}
                  <span
                    class="text-[10px] text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800"
                    >{tag}</span
                  >
                {/each}
              </div>

              {#if project.link}
                <a
                  href={project.link}
                  target="_blank"
                  class="p-2 text-zinc-400 hover:text-white hover:bg-primary rounded-full transition-all"
                  title="View Code"
                >
                  <Icon icon="mdi:github" width="20" />
                </a>
              {:else}
                <span
                  class="p-2 text-zinc-600 cursor-not-allowed"
                  title="Private Repository"
                >
                  <Icon icon="mdi:lock" width="20" />
                </span>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div in:fade class="text-center py-20">
        <Icon
          icon="mdi:feature-search-outline"
          width="64"
          class="text-zinc-700 mx-auto mb-4"
        />
        <h3 class="text-xl text-zinc-300 font-semibold">No projects found</h3>
        <button
          on:click={() => {
            searchQuery = "";
            activeFilter = "all";
          }}
          class="mt-4 text-primary hover:underline text-sm"
          >Clear filters</button
        >
      </div>
    {/if}

    <div
      in:fly={{ y: 20, delay: 800 }}
      class="mt-20 text-center border-t border-zinc-800 pt-10"
    >
      <p class="text-zinc-400 mb-6">
        Looking for a developer who understands business value?
      </p>
      <a
        href="/contact"
        class="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-[#d13f18] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-orange-900/20"
      >
        Let's Talk <Icon icon="mdi:arrow-right" />
      </a>
    </div>
  {/if}
</div>
