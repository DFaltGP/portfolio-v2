<script lang="ts">
  export let iconName: string;
  export let skillName;

  let iconPath = `/icons/${iconName}.svg`;
</script>

<div
  class="flex items-center justify-center grayscale hover:-translate-y-4 duration-300 ease-in-out transition-all group"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <img src={iconPath} alt={skillName} />
  <span
    class="absolute -bottom-4 lg:-bottom-4 group-hover:visible invisible bg-zinc-900 p-1 text-[8px] md:text-sm tracking-wide rounded-md whitespace-nowrap text-zinc-100 font-montserrat font-bold uppercase"
    >{skillName}</span
  >
</div>
