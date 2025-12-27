<script lang="ts">
  import { writable } from "svelte/store";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";

  export let isOpen = false;

  type ProjectFile = {
    nesting_level: number;
    name: string;
    is_folder: boolean;
    is_open?: boolean;
    link?: string;
    icon?: string;
    files?: ProjectFile[] | null;
  };

  const filesStore = writable<ProjectFile[]>([
    {
      nesting_level: 0,
      name: "portfolio",
      is_folder: true,
      is_open: true,
      icon: "vscode-icons:folder-type-vscode-opened",
      files: [
        {
          nesting_level: 1,
          name: "home.svelte",
          is_folder: false,
          link: "/",
          icon: "vscode-icons:file-type-svelte",
        },
        {
          nesting_level: 1,
          name: "about.md",
          is_folder: false,
          link: "/about",
          icon: "vscode-icons:file-type-markdown",
        },
        {
          nesting_level: 1,
          name: "projects",
          is_folder: true,
          is_open: false,
          icon: "vscode-icons:folder-type-project",
          files: [
            {
              nesting_level: 2,
              name: "ecommerce-api.rs",
              is_folder: false,
              link: "/projects",
              icon: "vscode-icons:file-type-rust",
            },
            {
              nesting_level: 2,
              name: "kanban-board.tsx",
              is_folder: false,
              link: "/projects",
              icon: "vscode-icons:file-type-reactts",
            },
            {
              nesting_level: 2,
              name: "finance-app.go",
              is_folder: false,
              link: "/projects",
              icon: "vscode-icons:file-type-go",
            },
          ],
        },
        {
          nesting_level: 1,
          name: "skills.json",
          is_folder: false,
          link: "/skills",
          icon: "vscode-icons:file-type-node",
        },
        {
          nesting_level: 1,
          name: "contact.css",
          is_folder: false,
          link: "/contact",
          icon: "vscode-icons:file-type-css",
        },
      ],
    },
  ]);

  function toggleFolder(item: any) {
    if (item.is_folder && item.files && item.files.length > 0) {
      item.is_open = !item.is_open;

      // Update icon based on open state
      if (item.name === "portfolio") {
        item.icon = item.is_open
          ? "vscode-icons:folder-type-vscode-opened"
          : "vscode-icons:folder-type-vscode";
      } else if (item.name === "projects") {
        item.icon = item.is_open
          ? "vscode-icons:folder-type-project-opened"
          : "vscode-icons:folder-type-project";
      }

      $filesStore = $filesStore;
    }
  }

  $: currentPath = $page.url.pathname;

  function isActive(link: string) {
    return currentPath === link;
  }

  function renderTree(items: ProjectFile[], level = 0): any {
    return items;
  }

  let stats = {
    files: 8,
    lines: 1247,
  };
</script>

<aside
  class="
    fixed md:relative z-50 h-full w-64 bg-[#1a1a1a] border-r border-white/[0.06] flex flex-col font-sans select-none transition-transform duration-300 ease-in-out
    {isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
  "
>
  <!-- Header -->
  <div
    class="px-3 py-3 flex justify-between items-center border-b border-white/[0.06]"
  >
    <div class="flex items-center gap-2">
      <Icon icon="mdi:folder-outline" width="18" class="text-primary" />
      <span
        class="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400"
        >Files</span
      >
    </div>
    <button
      class="md:hidden p-1 hover:bg-white/5 rounded transition-colors"
      on:click={() => (isOpen = false)}
      aria-label="Close sidebar"
    >
      <Icon icon="mdi:close" width="18" class="text-zinc-400" />
    </button>
  </div>

  <!-- File Tree -->
  <div class="flex-1 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar">
    {#each $filesStore as item}
      <div class="px-2">
        <!-- Root Folder -->
        <button
          class="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors text-left group"
          on:click={() => toggleFolder(item)}
        >
          <Icon
            icon="codicon:chevron-right"
            width="14"
            class="text-zinc-500 transition-transform {item.is_open
              ? 'rotate-90'
              : ''}"
          />
          <Icon icon={item.icon} width="16" />
          <span class="text-[13px] text-zinc-300 font-medium">{item.name}</span>
        </button>

        {#if item.is_open && item.files}
          <div class="mt-0.5 space-y-0.5">
            {#each item.files as file}
              {#if file.is_folder}
                <!-- Nested Folder -->
                <div class="ml-4">
                  <button
                    class="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors text-left group"
                    on:click={() => toggleFolder(file)}
                  >
                    <Icon
                      icon="codicon:chevron-right"
                      width="14"
                      class="text-zinc-500 transition-transform {file.is_open
                        ? 'rotate-90'
                        : ''}"
                    />
                    <Icon icon={file.icon} width="16" />
                    <span class="text-[13px] text-zinc-400">{file.name}</span>
                  </button>

                  {#if file.is_open && file.files}
                    <div class="ml-4 mt-0.5 space-y-0.5">
                      {#each file.files as subFile}
                        <a
                          href={subFile.link}
                          class="flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors group {isActive(
                            subFile.link || '',
                          )
                            ? 'bg-primary/10 text-white'
                            : 'hover:bg-white/5 text-zinc-400'}"
                        >
                          <Icon icon={subFile.icon} width="16" />
                          <span
                            class="text-[13px] {isActive(subFile.link || '')
                              ? 'font-medium'
                              : ''}">{subFile.name}</span
                          >
                          {#if isActive(subFile.link || "")}
                            <div
                              class="ml-auto w-1 h-1 rounded-full bg-primary"
                            ></div>
                          {/if}
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>
              {:else}
                <!-- File -->
                <a
                  href={file.link}
                  class="flex items-center gap-2 ml-4 px-2 py-1.5 rounded-md transition-colors group {isActive(
                    file.link || '',
                  )
                    ? 'bg-primary/10 text-white'
                    : 'hover:bg-white/5 text-zinc-400'}"
                >
                  <Icon icon={file.icon} width="16" />
                  <span
                    class="text-[13px] {isActive(file.link || '')
                      ? 'font-medium'
                      : ''}">{file.name}</span
                  >
                  {#if isActive(file.link || "")}
                    <div class="ml-auto w-1 h-1 rounded-full bg-primary"></div>
                  {/if}
                </a>
              {/if}
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Separator -->
  <div
    class="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mx-4"
  ></div>

  <!-- Stats Section -->
  <div class="px-4 py-3 space-y-2">
    <div class="flex items-center justify-between group">
      <div class="flex items-center gap-2">
        <Icon
          icon="mdi:file-document-outline"
          width="14"
          class="text-zinc-500"
        />
        <span class="text-[11px] text-zinc-500 uppercase tracking-wider"
          >Files</span
        >
      </div>
      <span class="text-[11px] font-mono font-semibold text-zinc-400"
        >{stats.files}</span
      >
    </div>
    <div class="flex items-center justify-between group">
      <div class="flex items-center gap-2">
        <Icon icon="mdi:code-tags" width="14" class="text-zinc-500" />
        <span class="text-[11px] text-zinc-500 uppercase tracking-wider"
          >Lines</span
        >
      </div>
      <span class="text-[11px] font-mono font-semibold text-zinc-400"
        >{stats.lines}</span
      >
    </div>
  </div>

  <!-- Status Bar -->
  <div class="h-7 w-full bg-primary flex items-center px-3 justify-between">
    <div class="flex items-center gap-2">
      <Icon icon="mdi:source-branch" width="12" class="text-white/90" />
      <span class="text-[10px] font-bold text-white tracking-wide">main</span>
    </div>
    <div
      class="flex items-center gap-2 text-[9px] text-white/80 uppercase tracking-wider"
    >
      <span class="hidden sm:inline">UTF-8</span>
      <div class="w-1 h-1 rounded-full bg-white/60"></div>
    </div>
  </div>
</aside>

{#if isOpen}
  <div
    class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
    on:click={() => (isOpen = false)}
    role="presentation"
  ></div>
{/if}

<style>
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #f15025;
  }
</style>
