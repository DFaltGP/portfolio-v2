<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
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
      value: "linkedin.com/in/gpachecodev",
      href: "https://linkedin.com/in/gpachecodev",
      icon: "mdi:linkedin",
      color: "text-blue-400",
      border: "group-hover:border-blue-500/50",
      bg: "group-hover:bg-blue-500/10",
      action: "Connect",
    },
    {
      name: "WhatsApp",
      value: "+55 (37) 99136-7973",
      href: "https://wa.me/5537991367973",
      icon: "mdi:whatsapp",
      color: "text-green-400",
      border: "group-hover:border-green-500/50",
      bg: "group-hover:bg-green-500/10",
      action: "Chat",
    },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("gpachecodiniz@gmail.com");
    copied = true;
    setTimeout(() => (copied = false), 2000);
  };

  const handleSubmit = async () => {
    isSubmitting = true;
    // Simulação de envio
    await new Promise((r) => setTimeout(r, 1500));
    alert("Message sent successfully! (Connect to your backend here)");
    isSubmitting = false;
    formData = { name: "", email: "", subject: "", message: "" };
  };

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Contact - Guilherme Pacheco</title>
</svelte:head>

<div
  class="min-h-screen px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center"
>
  {#if mounted}
    <div
      class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
    >
      <div in:fly={{ x: -30, duration: 600 }} class="space-y-8 pt-4">
        <div class="space-y-4">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-semibold"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"
              ></span>
            </span>
            Available for opportunities
          </div>

          <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's build something <br />
            <span class="text-primary">amazing together.</span>
          </h1>
          <p class="text-zinc-400 text-lg leading-relaxed max-w-md">
            I'm currently looking for new challenges. Whether you have a
            question, a project proposal, or just want to say hi, I'll try my
            best to get back to you!
          </p>
        </div>

        <div class="space-y-4">
          <button
            on:click={copyEmail}
            class="w-full group flex items-center gap-4 p-4 rounded-xl bg-[#252526]/50 border border-zinc-800 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all text-left relative overflow-hidden"
          >
            <div
              class="p-3 rounded-lg bg-[#252526] border border-zinc-700 text-yellow-400 group-hover:scale-110 transition-transform"
            >
              <Icon icon="mdi:email" width="24" />
            </div>
            <div class="flex-1">
              <div
                class="text-xs text-zinc-500 font-mono uppercase tracking-wider"
              >
                Email
              </div>
              <div class="text-white font-medium break-all">
                gpachecodiniz@gmail.com
              </div>
            </div>
            <div
              class="text-zinc-500 group-hover:text-yellow-400 transition-colors"
            >
              {#if copied}
                <div
                  in:fly={{ y: 10 }}
                  class="flex items-center gap-1 text-xs font-bold text-green-400"
                >
                  <Icon icon="mdi:check" /> Copied
                </div>
              {:else}
                <Icon icon="mdi:content-copy" width="20" />
              {/if}
            </div>
          </button>

          {#each socials as social, i}
            <a
              href={social.href}
              target="_blank"
              in:fly={{ x: -20, delay: 100 + i * 100 }}
              class={`group flex items-center gap-4 p-4 rounded-xl bg-[#252526]/50 border border-zinc-800 transition-all ${social.border} ${social.bg}`}
            >
              <div
                class={`p-3 rounded-lg bg-[#252526] border border-zinc-700 ${social.color} group-hover:scale-110 transition-transform`}
              >
                <Icon icon={social.icon} width="24" />
              </div>
              <div class="flex-1">
                <div
                  class="text-xs text-zinc-500 font-mono uppercase tracking-wider"
                >
                  {social.name}
                </div>
                <div class="text-white font-medium">{social.action}</div>
              </div>
              <Icon
                icon="mdi:arrow-top-right"
                width="20"
                class="text-zinc-600 group-hover:text-white transition-colors"
              />
            </a>
          {/each}

          <a
            href="/guilherme_pacheco_dev_curriculum.pdf"
            download
            class="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary transition-colors pt-2 pl-1"
          >
            <Icon icon="mdi:download" />
            Prefer a traditional resume? Download PDF
          </a>
        </div>
      </div>

      <div in:fly={{ x: 30, duration: 600, delay: 200 }} class="relative">
        <div
          class="absolute -inset-1 bg-linear-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-1000"
        ></div>

        <div
          class="relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-zinc-800 shadow-2xl"
        >
          <div
            class="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-black/20"
          >
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div
              class="text-xs text-zinc-500 font-mono flex items-center gap-2"
            >
              <Icon icon="mdi:code-json" /> contact.json
            </div>
            <div class="w-10"></div>
          </div>

          <div class="flex">
            <div
              class="hidden sm:flex flex-col items-end px-3 py-6 text-zinc-700 font-mono text-sm select-none border-r border-white/5 bg-[#1e1e1e] leading-[2.5rem]"
            >
              {#each Array(10) as _, i}
                <span>{i + 1}</span>
              {/each}
            </div>

            <form
              on:submit|preventDefault={handleSubmit}
              class="flex-1 p-6 font-mono text-sm relative bg-[#1e1e1e]/95"
            >
              <div class="text-zinc-500 mb-2">
                <span class="text-purple-400">const</span>
                <span class="text-yellow-200">message</span>
                <span class="text-zinc-400">=</span>
                <span class="text-purple-400">{`{`}</span>
              </div>

              <div class="space-y-2 pl-4 md:pl-6">
                <div
                  class="group flex flex-col md:flex-row md:items-center gap-1 md:gap-3"
                >
                  <label class="text-blue-400 min-w-[60px]">name:</label>
                  <div class="flex-1 flex items-center">
                    <span class="text-green-400">"</span>
                    <input
                      bind:value={formData.name}
                      type="text"
                      placeholder="Your Name"
                      required
                      class="flex-1 bg-transparent border-b border-zinc-800 focus:border-primary outline-none text-green-300 placeholder-zinc-700 px-1 py-0.5 transition-colors"
                    />
                    <span class="text-green-400">"</span><span
                      class="text-zinc-500">,</span
                    >
                  </div>
                </div>

                <div
                  class="group flex flex-col md:flex-row md:items-center gap-1 md:gap-3"
                >
                  <label class="text-blue-400 min-w-[60px]">email:</label>
                  <div class="flex-1 flex items-center">
                    <span class="text-green-400">"</span>
                    <input
                      bind:value={formData.email}
                      type="email"
                      placeholder="your@email.com"
                      required
                      class="flex-1 bg-transparent border-b border-zinc-800 focus:border-primary outline-none text-green-300 placeholder-zinc-700 px-1 py-0.5 transition-colors"
                    />
                    <span class="text-green-400">"</span><span
                      class="text-zinc-500">,</span
                    >
                  </div>
                </div>

                <div
                  class="group flex flex-col md:flex-row md:items-center gap-1 md:gap-3"
                >
                  <label class="text-blue-400 min-w-[60px]">subject:</label>
                  <div class="flex-1 flex items-center">
                    <span class="text-green-400">"</span>
                    <input
                      bind:value={formData.subject}
                      type="text"
                      placeholder="Project Opportunity"
                      class="flex-1 bg-transparent border-b border-zinc-800 focus:border-primary outline-none text-green-300 placeholder-zinc-700 px-1 py-0.5 transition-colors"
                    />
                    <span class="text-green-400">"</span><span
                      class="text-zinc-500">,</span
                    >
                  </div>
                </div>

                <div class="group flex flex-col gap-1 pt-2">
                  <label class="text-blue-400">message:</label>
                  <div class="flex items-start">
                    <span class="text-green-400 mt-1">`</span>
                    <textarea
                      bind:value={formData.message}
                      rows="4"
                      required
                      placeholder="Tell me about your project..."
                      class="w-full bg-zinc-900/30 border border-zinc-800 focus:border-primary rounded p-2 outline-none text-green-300 placeholder-zinc-700 resize-none transition-colors leading-relaxed"
                    ></textarea>
                    <span class="text-green-400 mt-auto">`</span>
                  </div>
                </div>
              </div>

              <div class="text-purple-400 mt-2">{`}`}</div>

              <div class="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-[#d13f18] text-white rounded font-sans font-bold shadow-lg hover:shadow-orange-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
                >
                  {#if isSubmitting}
                    <Icon icon="line-md:loading-loop" width="20" /> Sending...
                  {:else}
                    <Icon icon="mdi:send-outline" width="18" /> Send Message
                  {/if}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
