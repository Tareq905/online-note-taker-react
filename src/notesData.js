import { v4 } from "uuid";

const notes = [
  {
    title: "Prophet Hazrat Mohammad (SAW) Quote",
    content:
      "There will come a time when holding on to your Deen will be like holding on to hot coals.",
    tags: [{ tag: "quotes", id: v4() }],
    color: "#687D93",
    priority: "",
    isPinned: true,
    isRead: false,
    createdTime: new Date("Sat Dec 10 2022 14:55:22").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "Hazrat Ali Radiallahu Anhu Quote",
    content:
      " Riches without faith are the greatest poverty..",
    tags: [{ tag: "quotes", id: v4() }],
    color: "#68938E",
    priority: "",
    isPinned: true,
    isRead: false,
    createdTime: new Date("Sat Dec 10 2022 15:02:22").getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
