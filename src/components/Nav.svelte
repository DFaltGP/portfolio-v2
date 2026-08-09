<script>
  import Icon from "@iconify/svelte";
  import { activeSection } from "$lib/stores";

  let isMobileOpen = false;

  const links = [
    { id: "about", label: "~/sobre" },
    { id: "stack", label: "~/stack" },
    { id: "work", label: "~/trabalhos" },
    { id: "contact", label: "~/contato" },
  ];

  function toggleMobile() {
    isMobileOpen = !isMobileOpen;
  }

  function closeMobile() {
    isMobileOpen = false;
  }
</script>

<nav
  class="fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-dark/70 backdrop-blur-md"
>
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
  >
    <a href="#home" class="text-sm font-bold tracking-tight text-white">
      &gt;_ guilherme
    </a>

    <div class="hidden md:flex items-center gap-8 text-xs">
      {#each links as link}
        <a
          href={`#${link.id}`}
          class="flex items-center gap-2 transition-colors {$activeSection ===
          link.id
            ? 'text-white'
            : 'text-zinc-500 hover:text-white'}"
        >
          <span
            class="w-1 h-1 rounded-full bg-primary transition-opacity"
            class:opacity-0={$activeSection !== link.id}
          ></span>
          {link.label}
        </a>
      {/each}
    </div>

    <a
      href="#contact"
      class="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded-md transition-colors"
    >
      Vamos conversar
    </a>

    <button
      on:click={toggleMobile}
      class="md:hidden text-zinc-400 hover:text-primary transition-colors"
      aria-label="Toggle menu"
    >
      <Icon icon={isMobileOpen ? "mdi:close" : "mdi:menu"} width="24" />
    </button>
  </div>

  {#if isMobileOpen}
    <div
      class="md:hidden flex flex-col border-t border-white/5 bg-dark/95 backdrop-blur-md px-4 py-4 gap-1 text-sm"
    >
      {#each links as link}
        <a
          href={`#${link.id}`}
          on:click={closeMobile}
          class="py-2 text-zinc-400 hover:text-white"
        >
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>
