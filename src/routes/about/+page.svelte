<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import { skillsIcons } from "$lib"; // Importing your central data source

  let mounted = false;

  const profile = {
    role: "Full-Stack Developer & Software Architect",
    bio: "Developer focused on architecture and performance with an analytical vision for delivering scalable solutions. I combine mastery of development best practices with a continuous drive for innovation to solve complex challenges.",
    location: "Divinópolis, MG",
    email: "gpachecodiniz@gmail.com",
    traits: [
      { label: "Systems Thinking", icon: "mdi:strategy" },
      { label: "Tech Leadership", icon: "mdi:account-group" },
      { label: "Critical Analysis", icon: "mdi:magnify-scan" },
      { label: "Adaptability", icon: "mdi:refresh" },
    ],
  };

  const timeline = [
    {
      year: "Current",
      title: "Mid-Level .NET Developer",
      company: "Makrosystem",
      type: "work",
      description:
        "Leading the modernization of legacy ecosystems using .NET 8, Blazor Server, and Docker. Responsible for the full implementation of the NFCom fiscal module and integrating Generative AI.",
      tags: [".NET 8", "Blazor", "Docker", "SQL Server", "AI"],
    },
    {
      year: "2022 - 2025",
      title: "Desktop Developer",
      company: "LC Sistemas",
      type: "work",
      description:
        "Developed ERP solutions and fiscal integrations (NFe, NFCe, NFSe). Built high-performance automation tools using Rust and TypeScript, and managed XML import engines.",
      tags: ["C#", "Rust", "SQL", "FoxPro", "Fiscal APIs"],
    },
    {
      year: "2030 (Expected)",
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

  // 1. Define Category Metadata for display
  const categoryConfig = {
    Fullstack: { label: "Languages & Core", icon: "mdi:code-braces", order: 1 },
    Backend: {
      label: "Backend & Systems",
      icon: "mdi:server-network",
      order: 2,
    },
    Frontend: {
      label: "Frontend & Interfaces",
      icon: "mdi:monitor-dashboard",
      order: 3,
    },
    DevOps: { label: "DevOps & Infrastructure", icon: "mdi:docker", order: 4 },
  };

  // 2. Group skillsIcons dynamically
  let groupedSkills = [];

  $: {
    const groups = skillsIcons.reduce((acc, skill) => {
      const cat = skill.category || "Other";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(skill);
      return acc;
    }, {});

    // Convert to array and sort based on config
    groupedSkills = Object.keys(groups)
      .map((key) => ({
        key,
        ...categoryConfig[key],
        items: groups[key].sort((a, b) => b.level - a.level), // Sort items by proficiency
      }))
      .sort((a, b) => (a.order || 99) - (b.order || 99));
  }

  onMount(() => {
    mounted = true;
  });

  function getSkillBadge(level) {
    if (level >= 90) {
      return {
        label: "Expert",
        classes: "border-emerald-500/20 bg-emerald-500/5 text-emerald-500",
      };
    } else if (level >= 80) {
      return {
        label: "Advanced",
        classes: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400",
      };
    } else {
      return {
        label: "Proficient",
        classes: "border-yellow-500/20 bg-yellow-500/5 text-yellow-500",
      };
    }
  }
</script>

<svelte:head>
  <title>About - Guilherme Pacheco</title>
</svelte:head>

<div class="min-h-screen px-4 py-12 sm:px-6 lg:px-8 max-w-6xl mx-auto">
  {#if mounted}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
      <div in:fly={{ y: 20, duration: 600 }} class="lg:col-span-2 space-y-6">
        <h1 class="text-4xl sm:text-5xl font-bold text-white tracking-tighter">
          Architecting <span class="text-primary">Performance</span>.
        </h1>
        <p
          class="text-lg text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-6"
        >
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
        <div
          class="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-sm"
        >
          <ul class="space-y-6">
            <li class="flex items-start gap-4 text-zinc-300">
              <div class="mt-1 p-2 rounded bg-zinc-800/50 text-zinc-400">
                <Icon icon="mdi:map-marker" />
              </div>
              <div>
                <p
                  class="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1"
                >
                  Base of Operations
                </p>
                <p class="text-sm font-medium">{profile.location}</p>
              </div>
            </li>
            <li class="flex items-start gap-4 text-zinc-300">
              <div class="mt-1 p-2 rounded bg-zinc-800/50 text-zinc-400">
                <Icon icon="mdi:email" />
              </div>
              <div>
                <p
                  class="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1"
                >
                  Inquiries
                </p>
                <a
                  href="mailto:{profile.email}"
                  class="text-sm font-medium hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-0.5"
                >
                  {profile.email}
                </a>
              </div>
            </li>
          </ul>
          <div
            class="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center"
          >
            <span class="text-zinc-500 text-xs font-mono">RESUME_V2.PDF</span>
            <a
              href="/guilherme_pacheco_dev_curriculum.pdf"
              target="_blank"
              class="group flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider hover:text-primary transition-colors"
            >
              Download
              <Icon
                icon="mdi:download"
                class="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-7 space-y-10">
        <h2
          class="text-xl font-bold text-white flex items-center gap-3 tracking-tight"
        >
          <Icon icon="mdi:history" class="text-zinc-600" /> Career Trajectory
        </h2>

        <div class="relative border-l border-zinc-800 ml-3 space-y-12">
          {#each timeline as item, i}
            <div
              in:fly={{ y: 20, delay: 300 + i * 100 }}
              class="relative pl-8 group"
            >
              <div
                class={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 ${
                  item.type === "work"
                    ? "bg-zinc-900 border-primary group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(255,87,34,0.3)]"
                    : "bg-zinc-900 border-zinc-600"
                }`}
              ></div>

              <div
                class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2"
              >
                <h3
                  class="text-lg font-bold text-white group-hover:text-primary transition-colors"
                >
                  {item.title}
                </h3>
                <span class="text-xs font-mono text-zinc-500 mt-1 sm:mt-0">
                  {item.year}
                </span>
              </div>

              <p class="text-sm text-zinc-400 font-medium mb-3">
                {item.company}
              </p>
              <p class="text-zinc-500 text-sm leading-relaxed mb-4 max-w-lg">
                {item.description}
              </p>

              <div class="flex flex-wrap gap-2">
                {#each item.tags as tag}
                  <span
                    class="text-[10px] px-2 py-0.5 rounded border border-zinc-800 text-zinc-500 bg-zinc-900/50"
                  >
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="lg:col-span-5 space-y-10">
        <h2
          class="text-xl font-bold text-white flex items-center gap-3 tracking-tight"
        >
          <Icon icon="mdi:code-braces" class="text-zinc-600" /> Competencies
        </h2>

        <div class="space-y-4">
          {#each groupedSkills as category, i}
            <div
              in:fly={{ x: 20, delay: 400 + i * 100 }}
              class="group bg-zinc-900/20 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div class="flex items-center gap-2 mb-6 text-zinc-400">
                <Icon icon={category.icon} />
                <span class="text-xs font-bold uppercase tracking-widest">
                  {category.label}
                </span>
              </div>

              <div class="space-y-4">
                {#each category.items as skill}
                  {@const badge = getSkillBadge(skill.level)}
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <span class="text-sm text-zinc-300 font-medium">
                        {skill.skillName}
                      </span>
                    </div>

                    <span
                      class={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${badge.classes}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                  <div class="h-px w-full bg-zinc-800/50 last:hidden"></div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>
