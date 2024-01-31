import images from "./images";
export const navigationList = [
  { name: "home", index: 1, icon: images.home },
  { name: "about", index: 2, icon: images.about },
  {
    name: "work",
    index: 3,
    icon: images.work,
  },
  { name: "skills", index: 4, icon: images.skill },
  {
    name: "blog",
    index: 5,
    icon: images.blog,
  },
  { name: "contact", index: 6, icon: images.contact },
];

export const blogPostsNavigationList = [
  { name: "home", index: 1, icon: images.home, link: "/" },
];

export const filterCategories = [
  { name: "home", index: 1, icon: images.home, link: "/" },
];

export const themes = [
  { value: "light", label: "Light", icon: "../assets/sun.svg" },
  { value: "dark", label: "Dark", icon: "../assets/moon.svg" },
  { value: "system", label: "System", icon: "../assets/computer.svg" },
];
