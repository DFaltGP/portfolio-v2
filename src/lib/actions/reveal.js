export function reveal(node, options = {}) {
  const { threshold = 0.15, delay = 0, y = 24 } = options;

  node.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
