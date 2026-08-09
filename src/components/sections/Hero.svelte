<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  const developer = {
    name: "Guilherme Pacheco",
    role: "Desenvolvedor .NET Pleno & Arquitetura Backend",
    photoUrl: "/profile.JPG",
  };

  let mounted = false;
  onMount(() => (mounted = true));
</script>

<div class="relative flex flex-col justify-center min-h-[calc(100vh-8rem)] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 lg:py-12">
  <div class="absolute top-[-20%] right-[0%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
    <div class="lg:col-span-7 space-y-6 order-2 lg:order-1">
      {#if mounted}
        <div class="space-y-4">
          <h1
            in:fly={{ y: 20, duration: 800, easing: cubicOut }}
            class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Alta Performance.<br />
            <span class="text-primary">Sistemas Escaláveis.</span><br />
            Impacto Real.
          </h1>

          <p
            in:fly={{ y: 20, duration: 800, delay: 150, easing: cubicOut }}
            class="text-base sm:text-lg text-zinc-400 leading-relaxed font-light max-w-xl"
          >
            Sou <strong translate="no" class="notranslate text-white font-medium">{developer.name}</strong>,
            desenvolvedor focado em arquitetura .NET, concorrência, microsserviços e integração fiscal.
            Especialista em solucionar gargalos críticos de desempenho e construir soluções resilientes.
          </p>
        </div>

        <div
          in:fly={{ y: 20, duration: 800, delay: 300, easing: cubicOut }}
          class="flex flex-wrap gap-4 pt-2"
        >
          <a
            href="#work"
            class="inline-flex h-11 items-center justify-center rounded-md bg-primary hover:bg-primary-hover px-6 text-sm font-medium text-white transition-colors"
          >
            Ver Cases & Projetos
          </a>
          <a
            href="#about"
            class="inline-flex h-11 items-center justify-center px-4 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Sobre minha trajetória &rarr;
          </a>
        </div>
      {/if}
    </div>

    <div class="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
      {#if mounted}
        <div
          in:fly={{ x: 30, duration: 800, delay: 200, easing: cubicOut }}
          class="w-full max-w-sm relative"
        >
          <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-xl p-5 shadow-2xl">
            <div class="relative w-full aspect-3/4 rounded-xl overflow-hidden mb-5 border border-zinc-800/60 bg-zinc-950">
              <img
                src={developer.photoUrl}
                alt={developer.name}
                class="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
              />
              <div class="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent"></div>

              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span translate="no" class="notranslate text-xs font-mono font-bold text-white tracking-wide">{developer.name}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/80 text-zinc-300 border border-zinc-800">BR</span>
              </div>
            </div>
            <div class="space-y-2.5 font-mono text-xs">
              <div class="flex justify-between items-center text-zinc-400">
                <span>Role</span>
                <span class="text-zinc-200">Dev .NET Pleno</span>
              </div>
              <div class="flex justify-between items-center text-zinc-400">
                <span>Core Stack</span>
                <span class="text-white font-medium">.NET 10 / C#</span>
              </div>
              <div class="flex justify-between items-center text-zinc-400">
                <span>Foco</span>
                <span class="text-white">Performance & Infra</span>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <span class="text-[10px] text-zinc-500 font-mono">STATUS</span>
              <span class="text-[10px] text-primary font-mono uppercase tracking-wider">Operacional</span>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
