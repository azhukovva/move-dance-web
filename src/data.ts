import choreo from "./assets/images/choreo.jpg";
import contemp from "./assets/images/contemp.jpg";
import girly_hh from "./assets/images/girly_hh.jpg";
import heels from "./assets/images/heels.jpg";
import jazz_funk from "./assets/images/jazz_funk.jpg";
import frame from "./assets/images/frame.jpg";
import mobility from "./assets/images/mobility.jpg";
import morning_flow from "./assets/images/morning_flow.jpg";

export type Style = {
  name: string;
  about: string;
  for: string;
  whatToBring: string;
  image: string;
};

export const styles: Style[] = [
  {
    name: "Girly Hip-Hop",
    about:
      "An energetic dance with feminine accents, strong delivery, and a street character. It helps to unveil confidence and charisma.",
    for: "For girls who want to dance brightly, freely, and confidently, regardless of their level.",
    whatToBring:
      "Comfortable sneakers, loose pants or whatever allows easy movement, top/t-shirt, oversized hoodie optional.",
    image: girly_hh,
  },
  {
    name: "Frame Up Strip",
    about:
      "Feminine, flexible style with an emphasis on sensuality and confident command of the body.",
    for: "For girls who want to liberate themselves, emphasize their femininity, and learn to move confidently.",
    whatToBring: "Shoes or socks, comfortable clothing, knee pads are a must.",
    image: frame,
  },
  {
    name: "Mobility & Stretching",
    about:
      "Activities for developing flexibility, joint mobility, and relieving tension. Gentle work on the whole body.",
    for: "For all levels, especially if you want to improve well-being, posture, mobility, and flexibility.",
    whatToBring: "Sports uniform, socks.",
    image: mobility,
  },
  {
    name: "Jazz Funk",
    about:
      "Explosive mix of movements. A bright, eye-catching style like in the clips of popular artists.",
    for: "Suitable for those who want to dance freely, brightly, and with enthusiasm.",
    whatToBring: "Sneakers, loose pants, a top or a t-shirt.",
    image: jazz_funk,
  },
  {
    name: "Choreo",
    about:
      "A direction that goes beyond style. In the classes, we guarantee the development of musicality, working with rhythm and freedom of movement.",
    for: "For everyone who wants to dance confidently and quickly learn new movements.",
    whatToBring: "Comfortable sneakers, sports pants, top/t-shirt",
    image: choreo,
  },
  {
    name: "Contemporary",
    about:
      "A pliable and emotional style that combines dance, freedom of movement and emotions, and work with space.",
    for: "For those who want to develop flexibility, expressiveness, and work with emotions through dance.",
    whatToBring: "Socks, comfortable, non-restrictive clothing",
    image: contemp,
  },
  {
    name: "High Heels",
    about:
      "Dancing in high heels, focusing on grace, plasticity, and confident presentation. It helps to reveal femininity and improve posture.",
    for: "For girls who want to feel confident and move beautifully in heels.",
    whatToBring:
      "Stable heels (preferably closed, with a strap), something comfortable for dancing and knee pads.",
    image: heels,
  },
  {
    name: "Morning Flow",
    about:
      "Gentle morning practices to awaken the body, relieve tension, and energize for the whole day.",
    for: "For any level of training, to start the day in a good rhythm.",
    whatToBring: "Comfortable clothes, socks",
    image: morning_flow,
  },
];
