export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  size: "small" | "medium" | "large";
}

export const photos: Photo[] = [
  // Portraits
  {
    id: "1",
    src: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1863882_1280.jpg",
    alt: "Black and white portrait of contemplative person",
    title: "Portrait Study I",
    category: "Portraits",
    size: "large",
  },
  {
    id: "2",
    src: "https://cdn.pixabay.com/photo/2023/02/05/17/55/woman-7771713_1280.jpg",
    alt: "Dramatic portrait with natural lighting",
    title: "Natural Light",
    category: "Portraits",
    size: "medium",
  },
  {
    id: "3",
    src: "https://cdn.pixabay.com/photo/2019/03/12/08/32/people-4051147_1280.jpg",
    alt: "Professional portrait photography",
    title: "Studio Session",
    category: "Portraits",
    size: "small",
  },
  {
    id: "4",
    src: "https://cdn.pixabay.com/photo/2016/12/09/10/52/girl-1894873_1280.jpg",
    alt: "Elegant portrait with soft focus",
    title: "Ethereal Beauty",
    category: "Portraits",
    size: "medium",
  },

  // Landscapes
  {
    id: "5",
    src: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    alt: "Urban landscape in monochrome",
    title: "City Lights",
    category: "Landscapes",
    size: "large",
  },
  {
    id: "6",
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    alt: "Mountain landscape at dawn",
    title: "Mountain Serenity",
    category: "Landscapes",
    size: "medium",
  },
  {
    id: "7",
    src: "https://cdn.pixabay.com/photo/2014/12/27/08/57/forest-581229_1280.jpg",
    alt: "Forest path in black and white",
    title: "Forest Path",
    category: "Landscapes",
    size: "medium",
  },
  {
    id: "8",
    src: "https://cdn.pixabay.com/photo/2014/02/27/16/00/landscape-275541_1280.jpg",
    alt: "Dramatic sky over water",
    title: "Horizon Line",
    category: "Landscapes",
    size: "large",
  },

  // Architecture
  {
    id: "9",
    src: "https://cdn.pixabay.com/photo/2021/02/20/20/57/skyscraper-6035607_1280.jpg",
    alt: "Modern architectural detail",
    title: "Urban Geometry",
    category: "Architecture",
    size: "large",
  },
  {
    id: "10",
    src: "https://cdn.pixabay.com/photo/2015/04/20/12/40/building-732205_1280.jpg",
    alt: "Minimalist building facade",
    title: "Clean Lines",
    category: "Architecture",
    size: "small",
  },
  {
    id: "11",
    src: "https://cdn.pixabay.com/photo/2016/06/24/10/47/building-1477041_1280.jpg",
    alt: "Interior architectural photography",
    title: "Interior Space",
    category: "Architecture",
    size: "medium",
  },
  {
    id: "12",
    src: "https://cdn.pixabay.com/photo/2016/06/13/11/57/architecture-1453895_1280.jpg",
    alt: "Historic building detail",
    title: "Heritage",
    category: "Architecture",
    size: "medium",
  },

  // Street
  {
    id: "13",
    src: "https://cdn.pixabay.com/photo/2017/07/18/23/41/urban-2513632_1280.jpg",
    alt: "Street photography moment",
    title: "Street Moment I",
    category: "Street",
    size: "small",
  },
  {
    id: "14",
    src: "https://cdn.pixabay.com/photo/2014/12/30/21/04/street-581199_1280.jpg",
    alt: "Urban life captured candidly",
    title: "City Life",
    category: "Street",
    size: "medium",
  },
  {
    id: "15",
    src: "https://cdn.pixabay.com/photo/2019/06/14/19/07/alley-4275109_1280.jpg",
    alt: "Nighttime street scene",
    title: "After Dark",
    category: "Street",
    size: "large",
  },

  // Nature
  {
    id: "16",
    src: "https://cdn.pixabay.com/photo/2015/12/01/20/28/rain-1072321_1280.jpg",
    alt: "Nature in black and white",
    title: "Natural Beauty",
    category: "Nature",
    size: "medium",
  },
  {
    id: "17",
    src: "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
    alt: "Dramatic nature landscape",
    title: "Wild Essence",
    category: "Nature",
    size: "large",
  },
  {
    id: "18",
    src: "https://cdn.pixabay.com/photo/2016/03/28/12/35/camellias-1285458_1280.jpg",
    alt: "Forest and trees in monochrome",
    title: "Woodland",
    category: "Nature",
    size: "small",
  },
  {
    id: "19",
    src: "https://cdn.pixabay.com/photo/2016/02/13/12/28/spring-1197570_1280.jpg",
    alt: "Floral detail in black and white",
    title: "Botanical Study",
    category: "Nature",
    size: "medium",
  },
  {
    id: "20",
    src: "https://cdn.pixabay.com/photo/2016/01/17/22/37/sea-1147155_1280.jpg",
    alt: "Seascape with dramatic waves",
    title: "Coastal",
    category: "Nature",
    size: "large",
  },
];
