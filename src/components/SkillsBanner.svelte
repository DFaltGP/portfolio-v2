<script>
  import SkillCard from "./SkillCard.svelte";
  import { skillsIcons } from "$lib";
</script>

<!-- Banner -->
<div class="banner flex items-center justify-center">
  <div class="slider transform-gpu">
    {#each skillsIcons as skill, i}
      <div
        class="item"
        style={`--position: ${i + 1}; --quantity: ${skillsIcons.length};`}
      >
        <SkillCard iconName={skill.iconName} skillName={skill.skillName} />
      </div>
    {/each}
  </div>
</div>

<style>
  .banner {
    width: 100%;
    height: 550px;
    text-align: center;
    overflow: hidden;
    position: relative;
  }

  .banner .slider {
    position: absolute;
    width: 75px;
    height: 75px;
    top: 20%;
    transform-style: preserve-3d;
    transform: perspective(1500px);
    animation: autoRun 50s linear infinite;
    z-index: 2;
  }

  @keyframes autoRun {
    from {
      transform: perspective(1500px) rotateX(-8deg) rotateY(0deg);
    }
    to {
      transform: perspective(1500px) rotateX(-8deg) rotateY(360deg);
    }
  }

  .banner .slider .item {
    position: absolute;
    inset: 0 0 0 0;
    transform: rotateY(
        calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
      )
      translateZ(175px);
  }

  @media (min-width: 480px) {
    .banner {
      height: 200px;
    }
  }

  @media (min-width: 640px) {
    .banner {
      height: 250px;
    }

    .banner .slider {
      width: 80px;
      height: 100px;
    }

    .banner .slider .item {
      transform: rotateY(
          calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
        )
        translateZ(250px);
    }
  }

  @media (min-width: 768px) {
    .banner {
      height: 350px;
    }

    .banner .slider {
      width: 110px;
      height: 110px;
    }

    .banner .slider .item {
      transform: rotateY(
          calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
        )
        translateZ(350px);
    }
  }

  @media (min-width: 1024px) {
    .banner {
      height: 450px;
    }

    .banner .slider {
      width: 140px;
      height: 100px;
    }

    .banner .slider .item {
      transform: rotateY(
          calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
        )
        translateZ(450px);
    }
  }

  @media (min-width: 1280px) {
    .banner {
      height: 550px;
    }

    .banner .slider {
      width: 150px;
      height: 150px;
    }

    .banner .slider .item {
      transform: rotateY(
          calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
        )
        translateZ(550px);
    }
  }

  .slider:hover {
    animation-play-state: paused !important;
  }
</style>
