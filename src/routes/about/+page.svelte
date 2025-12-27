<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import Icon from "@iconify/svelte";

  let mounted = false;

  const profile = {
    // Baseado no perfil do PDF
    role: "Full-Stack Developer & Software Architect",
    bio: "Developer focused on architecture and performance with an analytical vision for delivering scalable solutions. I combine mastery of development best practices with a continuous drive for innovation to solve complex challenges.",
    location: "Divinópolis, MG",
    email: "gpachecodiniz@gmail.com",
    // Baseado nas soft skills do PDF [cite: 64]
    traits: [
      { label: "Systems Thinking", icon: "mdi:strategy" },
      { label: "Tech Leadership", icon: "mdi:account-group" },
      { label: "Critical Analysis", icon: "mdi:magnify-scan" },
      { label: "Adaptability", icon: "mdi:refresh" },
    ],
  };

  // Baseado nas Experiências e Formação [cite: 43, 47, 55, 61]
  const timeline = [
    {
      year: "Current",
      title: ".NET Developer Pleno",
      company: "Makrosystem",
      type: "work",
      description:
        "Leading the modernization of legacy ecosystems using .NET 8, Blazor Server, and Docker. Responsible for the full implementation of the NFCom fiscal module and integrating Generative AI.",
      tags: [".NET 8", "Blazor", "Docker", "SQL Server", "AI"],
    },
    {
      year: "2022 - 2024",
      title: "Desktop Developer",
      company: "LC Sistemas",
      type: "work",
      description:
        "Developed ERP solutions and fiscal integrations (NFe, NFCe, NFSe). Built high-performance automation tools using Rust and TypeScript, and managed XML import engines.",
      tags: ["C#", "Rust", "SQL", "FoxPro", "Fiscal APIs"],
    },
    {
      year: "2025 (Expected)",
      title: "Computer Engineering",
      company: "UEMG",
      type: "edu",
      description:
        "Bachelor's degree focused on software development, embedded systems, and IT infrastructure.",
      tags: ["Algorithms", "Architecture", "IoT"],
    },
    {
      year: "2023",
      title: "Electronics Technician",
      company: "SENAI",
      type: "edu",
      description:
        "Technical training in automation, C++ programming for embedded systems (Arduino/ESP32), and industrial projects.",
      tags: ["C++", "Automation", "Electronics"],
    },
  ];

  // Baseado nas Hard Skills [cite: 71, 72, 73, 75]
  const skills = [
    {
      category: "Backend & Core",
      icon: "mdi:server-network",
      items: [
        { name: ".NET / C#", level: 95 },
        { name: "Rust", level: 80 },
        { name: "SQL Server / T-SQL", level: 90 },
        { name: "Node.js", level: 85 },
      ],
    },
    {
      category: "Frontend & Web",
      icon: "mdi:monitor-dashboard",
      items: [
        { name: "Svelte / SvelteKit", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "TypeScript", level: 88 },
        { name: "Blazor Server", level: 85 },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: "mdi:docker",
      items: [
        { name: "Docker", level: 85 },
        { name: "CI/CD (Git)", level: 90 },
        { name: "Linux", level: 80 },
        { name: "N8n / AI Tools", level: 75 },
      ],
    },
  ];

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>About - Guilherme Pacheco</title>
</svelte:head>

<div class="min-h-screen px-4 py-12 sm:px-6 lg:px-8 max-w-6xl mx-auto">
  {#if mounted}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
      <div in:fly={{ y: 20, duration: 600 }} class="lg:col-span-2 space-y-6">
        <h1 class="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Architecting <span class="text-primary">Performance</span>
        </h1>
        <p
          class="text-lg text-zinc-400 leading-relaxed border-l-2 border-primary pl-6"
        >
          {profile.bio}
        </p>

        <div class="flex flex-wrap gap-3 pt-4">
          {#each profile.traits as trait, i}
            <div
              in:fly={{ y: 10, delay: 200 + i * 50 }}
              class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#252526] border border-zinc-700/50 text-sm text-zinc-300"
            >
              <Icon icon={trait.icon} class="text-primary" />
              {trait.label}
            </div>
          {/each}
        </div>
      </div>

      <div in:fly={{ x: 20, duration: 600, delay: 200 }} class="lg:col-span-1">
        <div
          class="p-6 rounded-2xl bg-[#252526]/50 border border-zinc-700/50 backdrop-blur-sm"
        >
          <ul class="space-y-4">
            <li class="flex items-center gap-3 text-zinc-300">
              <div class="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon icon="mdi:map-marker" />
              </div>
              <div>
                <p class="text-xs text-zinc-500 uppercase font-bold">
                  Location
                </p>
                <p>{profile.location}</p>
              </div>
            </li>
            <li class="flex items-center gap-3 text-zinc-300">
              <div class="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon icon="mdi:email" />
              </div>
              <div>
                <p class="text-xs text-zinc-500 uppercase font-bold">Contact</p>
                <a
                  href="mailto:{profile.email}"
                  class="hover:text-primary transition-colors"
                  >{profile.email}</a
                >
              </div>
            </li>
          </ul>
          <div
            class="mt-6 pt-6 border-t border-zinc-700/50 flex justify-between items-center"
          >
            <span class="text-zinc-400 text-sm">Download CV</span>
            <a
              href="/guilherme_pacheco_dev_curriculum.pdf"
              target="_blank"
              class="p-2 bg-primary text-white rounded-lg hover:bg-[#d13f18] transition-colors"
            >
              <Icon icon="mdi:download" width="20" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-7 space-y-8">
        <h2 class="text-2xl font-bold text-white flex items-center gap-3">
          <Icon icon="mdi:history" class="text-primary" /> Journey
        </h2>

        <div class="relative border-l border-zinc-800 ml-3 space-y-12">
          {#each timeline as item, i}
            <div
              in:fly={{ y: 20, delay: 300 + i * 100 }}
              class="relative pl-8 group"
            >
              <div
                class={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 ${item.type === "work" ? "bg-[#18181b] border-primary group-hover:bg-primary" : "bg-[#18181b] border-zinc-600"}`}
              ></div>

              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
              >
                <h3
                  class="text-lg font-bold text-white group-hover:text-primary transition-colors"
                >
                  {item.title}
                </h3>
                <span
                  class="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800"
                  >{item.year}</span
                >
              </div>

              <p class="text-sm text-zinc-400 font-medium mb-2">
                {item.company}
              </p>
              <p class="text-zinc-500 text-sm leading-relaxed mb-3">
                {item.description}
              </p>

              <div class="flex flex-wrap gap-2">
                {#each item.tags as tag}
                  <span
                    class="text-[10px] px-2 py-0.5 rounded border border-zinc-800 text-zinc-400 bg-zinc-900/50"
                  >
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="lg:col-span-5 space-y-8">
        <h2 class="text-2xl font-bold text-white flex items-center gap-3">
          <Icon icon="mdi:code-braces" class="text-primary" /> Technical Arsenal
        </h2>

        <div class="space-y-6">
          {#each skills as category, i}
            <div
              in:fly={{ x: 20, delay: 400 + i * 100 }}
              class="bg-[#252526]/30 rounded-xl p-5 border border-zinc-800 hover:border-primary/30 transition-colors"
            >
              <div class="flex items-center gap-2 mb-4 text-zinc-300">
                <Icon icon={category.icon} />
                <span class="font-semibold text-sm">{category.category}</span>
              </div>

              <div class="space-y-3">
                {#each category.items as skill}
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-zinc-400">{skill.name}</span>
                      <span class="text-zinc-600 font-mono">{skill.level}%</span
                      >
                    </div>
                    <div class="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-linear-to-r from-primary to-orange-400 rounded-full"
                        style="width: {skill.level}%"
                      ></div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>
