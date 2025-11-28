si le main est dans un autre document que l'icon chevron down, remplacer par 
const handleScroll = () => {
  const main = document.querySelector("main");
  if (!main) return;

  main.scrollIntoView({
    behavior: "smooth",
  });
};