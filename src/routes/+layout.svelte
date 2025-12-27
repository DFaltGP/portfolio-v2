<script lang="ts">
  import "./layout.css";
  import Codebar from "../components/Codebar.svelte";
  import Icon from "@iconify/svelte";
  import { page } from "$app/state";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  let isSidebarOpen = false;

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }
</script>

<div class="fixed inset-0 -z-50 h-full w-full bg-dark">
  <div
    class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
  ></div>
</div>

<div
  class="font-source-code flex h-screen w-full bg-transparent text-zinc-light overflow-hidden"
>
  <Codebar bind:isOpen={isSidebarOpen} />

  <div class="flex-1 flex flex-col h-full relative overflow-hidden">
    <header
      class="md:hidden flex items-center justify-between px-4 py-3 border-b border-white/5 bg-dark/80 backdrop-blur-md z-30 sticky top-0"
    >
      <button
        on:click={toggleSidebar}
        class="text-zinc-500 hover:text-primary transition-colors"
      >
        <Icon icon="mdi:menu" width="24" />
      </button>
      <span class="text-sm font-bold tracking-wide font-source-code"
        >GpachecoDev</span
      >
      <div class="w-6"></div>
    </header>

    <main class="flex-1 relative overflow-hidden w-full h-full">
      <div class="grid grid-cols-1 grid-rows-1 w-full h-full">
        {#key page.url.pathname}
          <div
            class="col-start-1 row-start-1 w-full h-full overflow-y-auto overflow-x-hidden"
            in:fly={{ y: -20, duration: 600, delay: 300, easing: cubicOut }}
            out:fly={{ y: 20, duration: 300, easing: cubicOut }}
          >
            <div class="container mx-auto p-4 md:p-8 lg:p-12 max-w-7xl">
              <slot />
            </div>
          </div>
        {/key}
      </div>
    </main>
  </div>
</div>

<style>
  div::-webkit-scrollbar {
    width: 8px;
  }
  div::-webkit-scrollbar-track {
    background: transparent;
  }
  div::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 4px;
  }
  div::-webkit-scrollbar-thumb:hover {
    background-color: #f15025;
  }
</style>
