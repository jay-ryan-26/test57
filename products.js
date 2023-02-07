let products = [
  {
    id: 1001,
    image:
      "https://static.wikia.nocookie.net/seuss/images/9/9a/Img_drseuss_cat.gif",
    title: "cat",
    price: 10000,
    description: "pog",
    availableInventory: 5,
    rating: 1,
  },
  {
    id: 1002,
    image:
      "data:image/jpeg;base64,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",
    title: "pooh",
    price: 2500,
    description: "very pog",
    availableInventory: 9,
    rating: 3,
  },
  {
    id: 1003,
    image:
      "https://static.wikia.nocookie.net/ben10/images/1/16/Ben_Tennyson_%28Classic%29_Original_Series_Pose_1.png/",
    title: "Ben",
    price: 5000,
    description: "Buy one, Get 10 aliens free!!! pog x10",
    availableInventory: 50,
    rating: 4,
  },
  {
    id: 1004,
    image: "https://static.wikia.nocookie.net/dragontales/images/1/17/Ord.png",
    title: "dragooon",
    price: 2000,
    description: "kinda pog",
    availableInventory: 7,
  },
  {
    id: 1005,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLeORO8T2MU3nH_x51JxuiK-B27sck_7e9Q&usqp=CAU",
    title: "Laddoooooooooo",
    price: 2000,
    description: "Most pog lessgoooooooooooo",
    availableInventory: 600,
    rating: 5,
  },
];
