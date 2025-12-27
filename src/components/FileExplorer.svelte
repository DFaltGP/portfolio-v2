<script lang="ts">
  import Icon from "@iconify/svelte";

  // Recebe os itens recursivamente
  export let items: any[];

  function toggleFolder(item: any) {
    if (item.is_folder) {
      item.is_open = !item.is_open;
      items = items; // Trigger de reatividade Svelte
    }
  }
</script>

{#each items as item}
  <div class="flex flex-col">
    <div
      class="group flex items-center text-[13px] py-[3px] pr-2 hover:bg-[#2a2d2e] hover:text-white cursor-pointer select-none whitespace-nowrap transition-colors duration-100"
      style="padding-left: {item.nesting_level * 16 + 12}px;"
      on:click|stopPropagation={() => toggleFolder(item)}
      role="button"
      tabindex="0"
    >
      <span class="mr-1 w-4 h-4 flex items-center justify-center shrink-0">
        {#if item.is_folder && item.files && item.files.length > 0}
          <div
            class="transition-transform duration-100 {item.is_open
              ? 'rotate-90'
              : 'rotate-0'}"
          >
            <Icon
              icon="codicon:chevron-right"
              class="text-zinc-500 group-hover:text-white"
              width="14"
            />
          </div>
        {/if}
      </span>

      <span class="mr-2 shrink-0">
        {#if item.icon}
          <Icon icon={item.icon} width="16" />
        {:else}
          <Icon
            icon={item.is_folder
              ? "vscode-icons:default-folder"
              : "vscode-icons:default-file"}
            width="16"
          />
        {/if}
      </span>

      {#if item.link}
        <a
          href={item.link}
          target={item.external ? "_blank" : "_self"}
          class="flex-1 truncate text-zinc-muted group-hover:text-white no-underline decoration-0 outline-none"
          on:click|stopPropagation
        >
          {item.name}
        </a>
      {:else}
        <span
          class="flex-1 truncate {item.is_folder
            ? 'text-zinc-300 font-medium'
            : 'text-zinc-muted'}"
        >
          {item.name}
        </span>
      {/if}
    </div>

    {#if item.is_folder && item.is_open && item.files}
      <svelte:self items={item.files} />
    {/if}
  </div>
{/each}
