<script>
  import { onMount } from "svelte";
  import { reveal } from "$lib/actions/reveal";
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";

  let mounted = false;

  const projects = [
    {
      id: "nfe-performance",
      title: "Motor de Alta Performance NF-e",
      description: "Refatoração do motor de importação de NF-e aplicando otimizações de concorrência e I/O em .NET.",
      metric: "2h ➔ ~20 segundos (5.000 XMLs)",
      category: "backend",
      tags: [".NET", "C#", "SQL Server", "Concorrência"],
      highlights: [
        "Redução drástica do tempo de processamento",
        "Otimização de rotinas no banco de dados",
        "Processamento massivo sem travamentos",
      ],
      image: "mdi:lightning-bolt",
    },
    {
      id: "makro-conecta",
      title: "Makro Conecta (Ponto & IA)",
      description: "Sistema corporativo de controle de ponto. Idealizado individualmente e expandido liderando uma equipe de 3 devs.",
      metric: "Em produção (Uso interno + clientes)",
      category: "fullstack",
      tags: [".NET 10", "Blazor Server", "Redis", "RabbitMQ", "Docker Swarm", "GenAI"],
      highlights: [
        "Rate Limiting com Redis e mensageria RabbitMQ",
        "Assistente com IA Generativa integrado",
        "Deploy automatizado via Docker Swarm",
      ],
      image: "mdi:clock-check-outline",
    },
    {
      id: "nfcom-module",
      title: "Módulo Fiscal NFCOm",
      description: "Arquitetura e implementação integral da Nota Fiscal de Comunicação, cobrindo do parser XML ao SPED Fiscal.",
      metric: "Compliance 100% SPED Fiscal",
      category: "backend",
      tags: ["C#", "NFCom", "SPED Fiscal", "APIs Fiscais"],
      highlights: [
        "Engine de validação e transmissão de documentos",
        "Geração de relatórios em conformidade com o SPED",
        "Integração contínua com a SEFAZ",
      ],
      image: "mdi:file-chart-outline",
    },
    {
      id: "caecomp-portal",
      title: "Portal Institucional CAECOMP",
      description: "Liderança técnica como Diretor de Projetos na construção do portal dinâmico do Centro Acadêmico de Eng. da Computação.",
      metric: "Projeto Ativo UEMG",
      category: "fullstack",
      tags: ["Next.js 16", "TypeScript", "Supabase", "TailwindCSS"],
      highlights: [
        "Calendário dinâmico de eventos universitários",
        "Árvore de membros por gestão e notícias",
        "Backend Serverless via Supabase",
      ],
      image: "mdi:web",
    },
    {
      id: "plugnotas-migration",
      title: "Migração de API Fiscal (PlugNotas)",
      description: "Substituição do motor legado UniNFe por solução em API moderna para emissão e gestão de NFe, NFCe e NFSe.",
      metric: "Zero Downtime em Transmissões",
      category: "backend",
      tags: ["C#", "PlugNotas", "REST APIs", "ERP Integration"],
      highlights: [
        "Aumento significativo na estabilidade das transmissões",
        "Tratamento automático de contingência",
        "Monitoramento unificado de documentos",
      ],
      image: "mdi:swap-horizontal",
    },
  ];

  onMount(() => (mounted = true));
</script>

<div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24">
  {#if mounted}
    <p class="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
      ~/work
    </p>
    <div in:fly={{ y: -20, duration: 600 }} class="space-y-6 mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-white">
        Cases & <span class="text-primary">Projetos Principais</span>
      </h2>
      <p class="text-zinc-400 max-w-2xl text-lg leading-relaxed border-l-2 border-primary pl-4">
        Soluções reais desenvolvidas para resolver gargalos de infraestrutura, escala e conformidade fiscal.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project, i (project.id)}
        <div
            use:reveal={{ delay: i * 100, y: 32 }}
          class="group relative bg-[#252526]/40 border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
        >
          <div class="flex justify-between items-start mb-4">
            <div class="p-3 bg-zinc-900 rounded-lg text-primary group-hover:scale-110 transition-transform">
              <Icon icon={project.image} width="28" />
            </div>
            <span class="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-primary/10 text-primary border border-primary/20">
              {project.metric}
            </span>
          </div>

          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p class="text-zinc-400 text-sm leading-relaxed mb-6 grow">
            {project.description}
          </p>

          <div class="space-y-2 mb-6">
            {#each project.highlights as highlight}
              <div class="flex items-center gap-2 text-xs text-zinc-400">
                <Icon icon="mdi:check-bold" class="text-primary" width="14" />
                <span>{highlight}</span>
              </div>
            {/each}
          </div>

          <div class="mt-auto pt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <div class="flex flex-wrap gap-1.5">
              {#each project.tags as tag}
                <span class="text-[10px] text-zinc-400 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800 font-mono">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div in:fly={{ y: 20, delay: 600 }} class="mt-20 text-center border-t border-zinc-800 pt-10">
      <p class="text-zinc-400 mb-6">
        Busca um desenvolvedor para evoluir e otimizar seus sistemas?
      </p>
      <a
        href="#contact"
        class="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-orange-900/20"
      >
        Vamos Conversar <Icon icon="mdi:arrow-right" />
      </a>
    </div>
  {/if}
</div>
