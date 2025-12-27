<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import Icon from "@iconify/svelte";

  let mounted = false;
  let copied = false;
  let isSubmitting = false;

  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const socials = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/gpachecodev",
      icon: "mdi:linkedin",
      hoverClass: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5537991367973",
      icon: "mdi:whatsapp",
      hoverClass: "hover:text-green-400",
    },
    {
      name: "Resume",
      href: "/guilherme_pacheco_dev_curriculum.pdf",
      icon: "mdi:file-document-outline",
      hoverClass: "hover:text-orange-400",
      download: true,
    },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("gpachecodiniz@gmail.com");
    copied = true;
    setTimeout(() => (copied = false), 2000);
  };

  const handleSubmit = async () => {
    isSubmitting = true;
    await new Promise((r) => setTimeout(r, 1500));
    formData = { name: "", email: "", subject: "", message: "" };
    alert("Message sent!");
    isSubmitting = false;
  };

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Contact - Guilherme Pacheco</title>
</svelte:head>

<div class="w-full px-4 py-12 md:px-8 lg:px-16 flex justify-center">
  {#if mounted}
    <div
      class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
    >
      <div
        in:fly={{ y: 20, duration: 600 }}
        class="lg:col-span-5 flex flex-col justify-center h-full space-y-8 pt-4"
      >
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-zinc-300 w-fit"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"
            ></span>
          </span>
          Available for opportunities
        </div>

        <div class="space-y-4">
          <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's build <br />
            <span class="text-primary">something amazing.</span>
          </h1>
          <p class="text-zinc-400 text-lg leading-relaxed">
            I'm currently looking for new challenges. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>

        <div class="flex flex-col gap-6 pt-2">
          <button
            on:click={copyEmail}
            class="group flex items-center gap-3 text-left w-fit"
          >
            <div
              class="p-3 rounded-lg bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white group-hover:border-primary/50 group-hover:bg-primary/10 transition-all"
            >
              <Icon icon="mdi:email-outline" width="20" />
            </div>
            <div>
              <div
                class="text-[10px] text-zinc-500 font-mono uppercase tracking-wider"
              >
                Email
              </div>
              <div
                class="text-zinc-200 font-medium group-hover:text-primary transition-colors flex gap-2 items-center"
              >
                gpachecodiniz@gmail.com
                {#if copied}
                  <span in:fade class="text-xs text-green-400 font-mono"
                    >[copied]</span
                  >
                {/if}
              </div>
            </div>
          </button>

          <div class="flex items-center gap-3">
            {#each socials as social}
              <a
                href={social.href}
                target="_blank"
                download={social.download}
                class={`p-3 rounded-lg bg-white/5 border border-white/10 text-zinc-400 transition-all hover:scale-105 hover:bg-white/10 hover:border-white/20 ${social.hoverClass}`}
                title={social.name}
              >
                <Icon icon={social.icon} width="20" />
              </a>
            {/each}
          </div>
        </div>
      </div>

      <div
        in:fly={{ y: 20, duration: 600, delay: 200 }}
        class="lg:col-span-7 w-full"
      >
        <div
          class="rounded-xl overflow-hidden bg-[#1e1e1e]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <div
            class="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5"
          >
            <div class="flex items-center gap-2">
              <Icon icon="mdi:console" class="text-zinc-400" />
              <span class="text-xs text-zinc-400 font-mono">contact.sh</span>
            </div>
            <div class="flex gap-1.5">
              <div class="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-white/10"></div>
            </div>
          </div>

          <form
            on:submit|preventDefault={handleSubmit}
            class="p-6 md:p-8 font-mono text-sm overflow-x-auto"
          >
            <div class="mb-6 text-zinc-600 select-none">#!/bin/bash</div>

            <div class="space-y-4">
              <div class="group flex flex-wrap items-baseline gap-1">
                <label class="text-purple-400">NAME</label>
                <span class="text-zinc-500">=</span>
                <div class="flex-1 flex items-center min-w-[200px]">
                  <span class="text-green-400">"</span>
                  <input
                    bind:value={formData.name}
                    type="text"
                    required
                    placeholder="Your Name"
                    class="flex-1 bg-transparent border-none outline-none text-green-300 placeholder-zinc-700 px-0 py-0"
                  />
                  <span class="text-green-400">"</span>
                </div>
              </div>

              <div class="group flex flex-wrap items-baseline gap-1">
                <label class="text-purple-400">EMAIL</label>
                <span class="text-zinc-500">=</span>
                <div class="flex-1 flex items-center min-w-[200px]">
                  <span class="text-green-400">"</span>
                  <input
                    bind:value={formData.email}
                    type="email"
                    required
                    placeholder="your@email.com"
                    class="flex-1 bg-transparent border-none outline-none text-green-300 placeholder-zinc-700 px-0 py-0"
                  />
                  <span class="text-green-400">"</span>
                </div>
              </div>

              <div class="group flex flex-wrap items-baseline gap-1">
                <label class="text-purple-400">SUBJECT</label>
                <span class="text-zinc-500">=</span>
                <div class="flex-1 flex items-center min-w-[200px]">
                  <span class="text-green-400">"</span>
                  <input
                    bind:value={formData.subject}
                    type="text"
                    placeholder="Project Opportunity"
                    class="flex-1 bg-transparent border-none outline-none text-green-300 placeholder-zinc-700 px-0 py-0"
                  />
                  <span class="text-green-400">"</span>
                </div>
              </div>

              <div class="group flex flex-col gap-1">
                <div class="flex items-baseline gap-1">
                  <label class="text-purple-400">MESSAGE</label>
                  <span class="text-zinc-500">=</span>
                  <span class="text-green-400">"</span>
                </div>
                <textarea
                  bind:value={formData.message}
                  required
                  rows="4"
                  placeholder="Type your message here..."
                  class="w-full bg-transparent border-l border-zinc-800 ml-4 pl-2 outline-none text-green-300 placeholder-zinc-700 resize-none leading-relaxed focus:border-zinc-600 transition-colors"
                ></textarea>
                <div class="ml-4 pl-2">
                  <span class="text-green-400">"</span>
                </div>
              </div>
            </div>

            <div class="mt-6 text-zinc-600 select-none">
              # Execute script to send message
            </div>

            <div
              class="mt-2 flex items-center gap-2 border-t border-white/5 pt-4"
            >
              <span class="text-green-500">➜</span>
              <span class="text-cyan-400">~</span>
              <button
                type="submit"
                disabled={isSubmitting}
                class="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors outline-none group"
              >
                <span
                  class="font-bold group-hover:text-green-400 transition-colors"
                  >./contact.sh</span
                >
                {#if isSubmitting}
                  <Icon icon="line-md:loading-loop" class="animate-spin" />
                {:else}
                  <span class="w-2.5 h-5 bg-zinc-500 animate-pulse block"
                  ></span>
                {/if}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  {/if}
</div>
