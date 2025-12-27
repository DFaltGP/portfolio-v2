<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import Icon from "@iconify/svelte";
  import type { SkillIcon } from "$lib";

  export let skill: SkillIcon | null = null;
  export let onClose: () => void;

  $: isOpen = skill !== null;

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleEscape(e: KeyboardEvent) {
    if (e.key === "Escape" && isOpen) {
      onClose();
    }
  }

  const categoryIcons = {
    Frontend: "mdi:palette",
    Backend: "mdi:server",
    Fullstack: "mdi:layers",
    DevOps: "mdi:cog",
  };
</script>

<svelte:window on:keydown={handleEscape} />

{#if isOpen && skill}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    on:click={handleBackdropClick}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    transition:fade={{ duration: 200 }}
  >
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

    <!-- Modal -->
    <div
      class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1e1e1e] rounded-2xl border border-white/10 shadow-2xl"
      transition:fly={{ y: 50, duration: 300, easing: cubicOut }}
    >
      <!-- Header -->
      <div class="sticky top-0 bg-[#1e1e1e] p-8 border-b border-white/10">
        <!-- Close Button -->
        <button
          on:click={onClose}
          class="absolute top-10 right-8 p-2 rounded-lg bg-[#252526] border border-white/10 hover:border-primary/50 text-zinc-400 hover:text-white transition-all z-10"
          aria-label="Close modal"
        >
          <Icon icon="mdi:close" width="24" />
        </button>
        <div class="flex items-start gap-6">
          <div class="flex-shrink-0">
            <img
              src="/icons/{skill.iconName}.svg"
              alt={skill.skillName}
              class="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          <div class="flex-1 space-y-3">
            <h2
              id="modal-title"
              class="text-3xl md:text-4xl font-bold text-white"
            >
              {skill.skillName}
            </h2>
            <div class="flex flex-wrap gap-3">
              <span
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-orange-500 to-red-500 text-white text-sm font-semibold"
              >
                <Icon icon={categoryIcons[skill.category]} width="16" />
                {skill.category}
              </span>
              <span
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#252526] border border-white/10 text-zinc-300 text-sm font-semibold"
              >
                <Icon icon="mdi:clock" width="16" />
                {skill.yearsOfExperience}
                {skill.yearsOfExperience === 1 ? "year" : "years"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-8 space-y-8">
        <!-- Description -->
        <div class="space-y-3">
          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <Icon icon="mdi:information" width="24" class="text-primary" />
            Description
          </h3>
          <p class="text-zinc-300 leading-relaxed">
            {skill.description}
          </p>
        </div>

        <!-- How I Use It -->
        <div class="space-y-3">
          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <Icon icon="mdi:hammer-wrench" width="24" class="text-primary" />
            How I Use It
          </h3>
          <p class="text-zinc-300 leading-relaxed">
            {skill.howIUse}
          </p>
        </div>

        <!-- Technical Terms -->
        <div class="space-y-3">
          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <Icon icon="mdi:code-braces" width="24" class="text-primary" />
            Technical Terms
          </h3>
          <p class="text-zinc-300 leading-relaxed">
            {skill.technicalTerms}
          </p>
        </div>

        <!-- Simple Terms -->
        <div class="space-y-3">
          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <Icon icon="mdi:lightbulb" width="24" class="text-primary" />
            In Simple Terms
          </h3>
          <div
            class="p-4 rounded-lg bg-[#252526] border border-white/10 text-zinc-300 leading-relaxed"
          >
            {skill.simpleTerms}
          </div>
        </div>

        <!-- Key Projects -->
        <div class="space-y-3">
          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <Icon icon="mdi:rocket" width="24" class="text-primary" />
            Key Projects
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            {#each skill.keyProjects as project}
              <div
                class="p-4 rounded-lg bg-[#252526] border border-white/10 hover:border-primary/30 transition-all"
              >
                <div class="flex items-center gap-3">
                  <Icon
                    icon="mdi:folder"
                    width="20"
                    class="text-primary flex-shrink-0"
                  />
                  <span class="text-zinc-300 font-medium">{project}</span>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Custom scrollbar for modal */
  div::-webkit-scrollbar {
    width: 8px;
  }

  div::-webkit-scrollbar-track {
    background: #1e1e1e;
  }

  div::-webkit-scrollbar-thumb {
    background: #3a3a3a;
    border-radius: 4px;
  }

  div::-webkit-scrollbar-thumb:hover {
    background: #4a4a4a;
  }
</style>
