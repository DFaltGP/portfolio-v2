<script>
  import { onMount, onDestroy } from "svelte";
  import { activeSection } from "$lib/stores";
  import Hero from "../components/sections/Hero.svelte";
  import About from "../components/sections/About.svelte";
  import Stack from "../components/sections/Stack.svelte";
  import Work from "../components/sections/Work.svelte";
  import Contact from "../components/sections/Contact.svelte";

  let observer;

  onMount(() => {
    const ids = ["home", "about", "stack", "work", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
  });

  onDestroy(() => observer?.disconnect());
</script>

<svelte:head>
  <title>Guilherme Pacheco — Desenvolvedor .NET Pleno & Arquitetura Backend</title>
  <meta name="description" content="Portfólio de Engenharia de Software com foco no ecossistema .NET, alta performance e microsserviços." />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://guilhermepachecodev.netlify.app" />
  <meta property="og:title" content="Guilherme Pacheco — Desenvolvedor .NET Pleno" />
  <meta property="og:description" content="Engenharia backend de alta performance, arquitetura .NET e soluções escaláveis." />
  <meta property="og:image" content="https://guilhermepachecodev.netlify.app/preview-banner.png" />
</svelte:head>

<div id="home" class="scroll-mt-16">
  <Hero />
</div>

<div id="about" class="scroll-mt-16">
  <About />
</div>

<div id="stack" class="scroll-mt-16">
  <Stack />
</div>

<div id="work" class="scroll-mt-16">
  <Work />
</div>

<div id="contact" class="scroll-mt-16">
  <Contact />
</div>

<footer class="text-center text-xs text-zinc-600 py-10 border-t border-zinc-900">
  © 2026 Guilherme Pacheco — built with SvelteKit &amp; Tailwind CSS v4.
</footer>
