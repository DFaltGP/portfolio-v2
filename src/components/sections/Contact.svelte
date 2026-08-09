<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import Icon from "@iconify/svelte";

  let mounted = false;
  let copied = false;

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
      name: "GitHub",
      href: "https://github.com/DFaltGP",
      icon: "mdi:github",
      hoverClass: "hover:text-purple-400",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5537991367973",
      icon: "mdi:whatsapp",
      hoverClass: "hover:text-green-400",
    },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("gpachecodiniz@gmail.com");
    copied = true;
    setTimeout(() => (copied = false), 2000);
  };

  const handleSubmit = () => {
    const subject = formData.subject || "Oportunidade / Projeto";
    const body = `De: ${formData.name} (${formData.email})\n\n${formData.message}`;
    const mailto = `mailto:gpachecodiniz@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  onMount(() => (mounted = true));
</script>

<div class="w-full px-4 py-20 md:px-8 lg:px-16 flex justify-center">
  {#if mounted}
    <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div in:fly={{ y: 20, duration: 600 }} class="lg:col-span-5 flex flex-col justify-center h-full space-y-6">
        <p class="text-xs uppercase tracking-widest text-primary font-semibold">
          ~/contact
        </p>

        <div class="space-y-3">
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Vamos construir <br />
            <span class="text-primary">algo relevante.</span>
          </h2>
          <p class="text-zinc-400 text-base leading-relaxed">
            Tem um projeto, vaga ou dúvida? Envie uma mensagem pelo formulário ou entre em contato diretamente.
          </p>
        </div>

        <div class="flex flex-col gap-5 pt-2">
          <button on:click={copyEmail} class="group flex items-center gap-3 text-left w-fit">
            <div class="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-primary/50 transition-all">
              <Icon icon="mdi:email-outline" width="20" />
            </div>
            <div>
              <div class="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">E-mail</div>
              <div class="text-zinc-200 font-medium group-hover:text-primary transition-colors flex gap-2 items-center text-sm">
                gpachecodiniz@gmail.com
                {#if copied}
                  <span in:fade class="text-xs text-green-400 font-mono">[copiado]</span>
                {/if}
              </div>
            </div>
          </button>

          <div class="flex items-center gap-3">
            {#each socials as social}
              <a
                href={social.href}
                target="_blank"
                class={`p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 transition-all hover:scale-105 hover:border-zinc-700 ${social.hoverClass}`}
                title={social.name}
              >
                <Icon icon={social.icon} width="20" />
              </a>
            {/each}
          </div>
        </div>
      </div>

      <div in:fly={{ y: 20, duration: 600, delay: 150 }} class="lg:col-span-7 w-full">
        <div class="rounded-2xl p-6 md:p-8 bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm shadow-xl">
          <h3 class="text-lg font-bold text-white mb-6 border-b border-zinc-800 pb-3">Enviar Mensagem</h3>

          <form on:submit|preventDefault={handleSubmit} class="space-y-4 text-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono text-zinc-400 mb-1.5" for="f-name">NOME</label>
                <input
                  id="f-name"
                  bind:value={formData.name}
                  type="text"
                  required
                  placeholder="Seu nome"
                  class="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-zinc-400 mb-1.5" for="f-email">EMAIL</label>
                <input
                  id="f-email"
                  bind:value={formData.email}
                  type="email"
                  required
                  placeholder="seu@email.com"
                  class="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono text-zinc-400 mb-1.5" for="f-subject">ASSUNTO</label>
              <input
                id="f-subject"
                bind:value={formData.subject}
                type="text"
                placeholder="Oportunidade / Projeto"
                class="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label class="block text-xs font-mono text-zinc-400 mb-1.5" for="f-message">MENSAGEM</label>
              <textarea
                id="f-message"
                bind:value={formData.message}
                required
                rows="4"
                placeholder="Escreva sua mensagem aqui..."
                class="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
            >
              <Icon icon="mdi:send" width="18" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  {/if}
</div>
