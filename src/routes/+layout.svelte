<script>
  import "./layout.css";
  import Nav from "../components/Nav.svelte";
  import StatusBar from "../components/StatusBar.svelte";
</script>

<div class="fixed inset-0 -z-50 h-full w-full bg-dark">
  <div
    class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
  ></div>
</div>

<Nav />

<main
  class="font-source-code min-h-screen w-full bg-transparent text-zinc-light pt-16 pb-10"
>
  <slot />
</main>

<StatusBar />

<style>
  :global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 4rem;
  }
  :global(::-webkit-scrollbar) {
    width: 8px;
  }
  :global(::-webkit-scrollbar-track) {
    background: transparent;
  }
  :global(::-webkit-scrollbar-thumb) {
    background-color: #333;
    border-radius: 4px;
  }
  :global(::-webkit-scrollbar-thumb:hover) {
    background-color: #f15025;
  }
</style>
