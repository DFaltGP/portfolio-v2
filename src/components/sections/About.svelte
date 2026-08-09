<script>
  import { onMount } from "svelte";
  import { reveal } from "$lib/actions/reveal";
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";

  let mounted = false;

  const profile = {
    bio: "Desenvolvedor focado em arquitetura backend e otimização de sistemas críticos. Combino a base técnica sólida da Engenharia com a prática diária de liderança e refatoração de alta performance, entregando soluções escaláveis e alinhadas ao negócio.",
    location: "Divinópolis, MG",
    email: "gpachecodiniz@gmail.com",
    traits: [
      { label: "Pensamento Sistêmico", icon: "mdi:strategy" },
      { label: "Liderança Técnica", icon: "mdi:account-group" },
      { label: "Engenharia de Performance", icon: "mdi:speedometer" },
      { label: "Domínio Fiscal & SPED", icon: "mdi:file-document-check" },
    ],
  };

  const timeline = [
    {
      year: "2025 - Presente",
      title: "Desenvolvedor .NET Pleno",
      company: "Makrosystem",
      type: "work",
      description:
        "Liderança na criação do sistema de ponto (Makro Conecta) em .NET 10, Redis e RabbitMQ com IA. Refatoração do motor de NF-e (reduzindo tempo de 2h para ~20s) e implementação completa do módulo NFCom.",
      tags: [".NET 10", "Blazor Server", "RabbitMQ", "Redis", "Docker Swarm", "SQL Server"],
    },
    {
      year: "2025 - Presente",
      title: "Diretor de Projetos",
      company: "CAECOMP (UEMG)",
      type: "edu",
      description:
        "Liderança técnica no desenvolvimento do portal institucional universitário, gerenciando a arquitetura frontend e serviços serverless.",
      tags: ["Next.js 16", "TypeScript", "Supabase", "TailwindCSS"],
    },
    {
      year: "2022 - 2025",
      title: "Desenvolvedor Desktop / ERP",
      company: "LC Sistemas",
      type: "work",
      description:
        "Desenvolvimento de ecossistemas ERP, migração do motor fiscal UniNFe para API PlugNotas e criação de ferramentas de alta performance em Rust, TypeScript e SQL.",
      tags: ["C#", "Rust", "PlugNotas", "SQL Server", "FoxPro"],
    },
    {
      year: "Cursando",
      title: "Engenharia da Computação",
      company: "UEMG",
      type: "edu",
      description:
        "Bacharelado focado em arquitetura de computadores, sistemas distribuídos, redes e desenvolvimento de software.",
      tags: ["Sistemas Distribuídos", "Algoritmos", "Redes"],
    },
    {
      year: "2021 - 2023",
      title: "Técnico em Eletroeletrônica",
      company: "SENAI CFP Anielo Greco",
      type: "edu",
      description:
        "Formação em automação industrial, programação de microcontroladores em C++ (ESP32/Arduino) e integração hardware/software.",
      tags: ["C++", "Sistemas Embarcados", "Automação"],
    },
  ];

  onMount(() => (mounted = true));
</script>

<div class="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-24">
  {#if mounted}
    <p class="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
      ~/about
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
      <div in:fly={{ y: 20, duration: 600 }} class="lg:col-span-2 space-y-6">
        <h2 class="text-4xl sm:text-5xl font-bold text-white tracking-tighter">
          Construindo <span class="text-primary">Performance & Escala</span>.
        </h2>
        <p class="text-lg text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-6">
          {profile.bio}
        </p>

        <div class="flex flex-wrap gap-3 pt-4">
          {#each profile.traits as trait, i}
            <div
              in:fly={{ y: 10, delay: 200 + i * 50 }}
              class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 font-medium"
            >
              <Icon icon={trait.icon} class="text-zinc-500" />
              {trait.label}
            </div>
          {/each}
        </div>
      </div>

      <div in:fly={{ x: 20, duration: 600, delay: 200 }} class="lg:col-span-1">
        <div class="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-sm">
          <ul class="space-y-6">
            <li class="flex items-start gap-4 text-zinc-300">
              <div class="mt-1 p-2 rounded bg-zinc-800/50 text-zinc-400">
                <Icon icon="mdi:map-marker" />
              </div>
              <div>
                <p class="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Localização</p>
                <p class="text-sm font-medium">{profile.location}</p>
              </div>
            </li>
            <li class="flex items-start gap-4 text-zinc-300">
              <div class="mt-1 p-2 rounded bg-zinc-800/50 text-zinc-400">
                <Icon icon="mdi:email" />
              </div>
              <div>
                <p class="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Contato Direto</p>
                <a
                  href="mailto:{profile.email}"
                  class="text-sm font-medium hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-0.5"
                >
                  {profile.email}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-bold text-white flex items-center gap-3 tracking-tight mb-10">
      <Icon icon="mdi:history" class="text-zinc-600" /> Trajetória Profissional & Acadêmica
    </h3>

    <div class="relative border-l border-zinc-800 ml-3 space-y-12">
      {#each timeline as item, i}
        <div in:fly={{ y: 20, delay: 300 + i * 100 }} class="relative pl-8 group">
          <div
            class={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 ${
              item.type === "work"
                ? "bg-zinc-900 border-primary group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(241,80,37,0.3)]"
                : "bg-zinc-900 border-zinc-600"
            }`}
          ></div>

          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
            <h4 class="text-lg font-bold text-white group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <span class="text-xs font-mono text-zinc-500 mt-1 sm:mt-0">
              {item.year}
            </span>
          </div>

          <p class="text-sm text-zinc-400 font-medium mb-3">{item.company}</p>
          <p class="text-zinc-500 text-sm leading-relaxed mb-4 max-w-lg">
            {item.description}
          </p>

          <div class="flex flex-wrap gap-2">
            {#each item.tags as tag}
              <span class="text-[10px] px-2 py-0.5 rounded border border-zinc-800 text-zinc-500 bg-zinc-900/50">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
