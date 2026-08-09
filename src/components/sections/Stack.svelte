<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";

  let mounted = false;

  const skillGroups = [
    {
      category: "Backend & Linguagens",
      items: [
        { name: "C# / .NET", desc: ".NET 10, 8 e Framework 4.8. ASP.NET Core, Blazor Server e WebForms.", icon: "simple-icons:dotnet" },
        { name: "TypeScript", desc: "Desenvolvimento full-stack tipado e APIs resilientes.", icon: "simple-icons:typescript" },
        { name: "Rust", desc: "Ferramentas de alta performance e consumo eficiente de memória.", icon: "simple-icons:rust" },
      ]
    },
    {
      category: "Arquitetura & Mensageria",
      items: [
        { name: "RabbitMQ", desc: "Filas de mensagens e processamento assíncrono de eventos.", icon: "simple-icons:rabbitmq" },
        { name: "Redis", desc: "Cache distribuído, gerenciamento de estado e Rate Limiting.", icon: "simple-icons:redis" },
        { name: "IA Generativa / LLM", desc: "Integração de LLMs para consultas e automações inteligentes.", icon: "mdi:robot-outline" },
      ]
    },
    {
      category: "Bancos de Dados & DevOps",
      items: [
        { name: "SQL Server (T-SQL)", desc: "Modelagem, procedures e otimização de queries para grande volume.", icon: "simple-icons:microsoftsqlserver" },
        { name: "Docker & Swarm", desc: "Contêineres, orquestração e deploys automatizados.", icon: "simple-icons:docker" },
        { name: "Supabase & Postgres", desc: "Bancos relacionais e serviços Serverless para web.", icon: "simple-icons:supabase" },
      ]
    },
    {
      category: "Domínio Fiscal & Web",
      items: [
        { name: "Ecossistema Fiscal", desc: "NF-e, NFCom, NFC-e, NFS-e, MDF-e, SPED e APIs Fiscais.", icon: "mdi:file-chart" },
        { name: "Next.js 16 & Svelte 5", desc: "Desenvolvimento de interfaces modernas, SSR e componentes reativos.", icon: "simple-icons:nextdotjs" },
      ]
    }
  ];

  const tools = [
    { name: "Docker", icon: "simple-icons:docker" },
    { name: "Insomnia", icon: "simple-icons:insomnia" },
    { name: "Git / GitHub", icon: "simple-icons:github" },
    { name: "Linux", icon: "simple-icons:linux" },
  ];

  onMount(() => (mounted = true));
</script>

<div class="pb-20 overflow-x-hidden relative">
  {#if mounted}
    <div class="pt-8 pb-10 px-4 text-center space-y-4 max-w-4xl mx-auto">
      <div in:fly={{ y: -20, duration: 600 }}>
        <p class="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
          ~/stack
        </p>
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Competências & <span class="text-primary">Tecnologias</span>.
        </h2>
        <p class="text-zinc-400 mt-4 text-base max-w-2xl mx-auto leading-relaxed">
          Ecossistema técnico utilizado no dia a dia para construir soluções escaláveis, resilientes e orientadas à performance.
        </p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each skillGroups as group, groupIdx}
          <div
            in:fly={{ y: 20, duration: 500, delay: groupIdx * 100 }}
            class="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between"
          >
            <h3 class="text-base font-bold text-white mb-4 border-b border-zinc-800/80 pb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
              {group.category}
            </h3>

            <div class="space-y-3">
              {#each group.items as item}
                <div class="flex items-center gap-4 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div class="flex-shrink-0 w-11 h-11 rounded-lg bg-zinc-800/80 text-primary flex items-center justify-center">
                    <Icon icon={item.icon} width="22" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <h4 class="text-white font-bold text-sm truncate">{item.name}</h4>
                    <p class="text-zinc-400 text-xs mt-0.5 leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 py-10">
      <div class="flex items-center gap-4 mb-8">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h3 class="text-zinc-500 text-xs uppercase tracking-widest font-bold">
          Ferramentas Diárias
        </h3>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div class="flex justify-center flex-wrap gap-8">
        {#each tools as tool, i}
          <div in:fly={{ y: 20, delay: 300 + i * 50 }} class="flex flex-col items-center gap-2 group">
            <div class="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-primary/50 transition-all">
              <Icon icon={tool.icon} width="24" class="text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <span class="text-xs text-zinc-500">{tool.name}</span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
