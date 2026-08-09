<script>
  import { onMount, onDestroy } from "svelte";
  import Icon from "@iconify/svelte";
  import { activeSection } from "$lib/stores";

  let time = "";
  let interval;

  function tick() {
    time = new Date().toLocaleTimeString(navigator.language, {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  onMount(() => {
    tick();
    interval = setInterval(tick, 1000);
  });

  onDestroy(() => clearInterval(interval));
</script>

<div
  class="fixed bottom-0 inset-x-0 z-40 h-7 bg-primary text-white text-[11px] flex items-center justify-between px-4 select-none"
>
  <div class="flex items-center gap-4">
    <span class="flex items-center gap-1">
      <Icon icon="mdi:source-branch" width="13" /> main
    </span>
    <span class="hidden sm:inline">~/{$activeSection}</span>
  </div>
  <div class="flex items-center gap-4">
    <span class="hidden sm:flex items-center gap-1">
      <Icon icon="mdi:map-marker" width="13" /> Divinópolis, BR
    </span>
    <span class="flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Disponível
    </span>
    <span>{time}</span>
  </div>
</div>
