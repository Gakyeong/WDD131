const recipes = [
  {
    url: "https://damndelicious.net/2013/07/07/korean-beef-bowl/",
    isBasedOn: "",
    cookTime: "15 Min",
    datePublished: "2024 /10/ 25",
    tags: ["beef", "saltsweet", "rice"],
    description:
      "Tastes like Korean BBQ and is on your dinner table in just 15 min from start to finish! Seriously. It doesn’t get any easier than this!",
    image: "./images/beefrice.png",
    recipeIngredient: [
      "¼ cup brown sugar, packed",
      "¼ cup reduced sodium soy sauce",
      "2 teaspoons sesame oil",
      "½ teaspoon crushed red-pepper flakes, or more to taste",
      "¼ teaspoon ground ginger",
      "1 tablespoon vegetable oil",
      "3 cloves garlic, minced",
      "1 pound ground beef",
      "2 green onions, thinly sliced",
      "¼ teaspoon sesame seeds",
    ],
    name: "Korean Beef Bowl",
    recipeInstructions: [
      "In a small bowl, whisk together brown sugar, soy sauce, sesame oil, red pepper flakes and ginger.",
      "Heat vegetable oil in a large cast iron skillet over medium high heat. Add garlic and cook, stirring constantly, until fragrant, about 1 minute. Add ground beef and cook until browned, about 3-5 minutes, making sure to crumble the beef as it cooks; drain excess fat.",
      "Stir in soy sauce mixture and green onions until well combined, allowing to simmer until heated through, about 2 minutes.",
      "Serve immediately, garnished with green onion and sesame seeds, if desired.",
    ],
    rating: 5,
  },
  {
    url: "https://www.koreanbapsang.com/dakgangjeong-sweet-crispy-chicken/",
    isBasedOn: "",
    cookTime: "30 Min",
    datePublished: "2023 /12/ 25",
    tags: ["Appetizer", "Snack"],
    description:
      "Crispy Korean fried chicken glazed in a sticky, sweet, and spicy sauce. This dakgangjeong recipe uses bite sized boneless chicken pieces, so it cooks up fast for a quick snack!",
    image: "./images/fried_chicken.png",
    recipeIngredient: [
      "1 pound boneless skinless chicken thigh and/or breast",
      "1/2 cup milk optional",
      "1/4 teaspoon salt",
      "pinch pepper",
      "1/2 teaspoon minced garlic",
      "1/2 teaspoon minced ginger",
      "1 tablespoon rice wine if not using milk",
      "⅓ cup potato starch or corn starch",
      "oil for deep frying",
    ],
    name: "Dakgangjeong",
    recipeInstructions: [
      "Remove any visible fat. Cut the chicken into bite sized pieces.",
      "Soak the chicken pieces in milk for at least 30 minutes in the fridge. This step is optional.",
      "Drain well. Mix with the salt, pepper, rice wine (if you didn’t use milk) garlic, and ginger. Let it sit for 20 to 30 minutes.",
      "In a pan, add all the sauce ingredients, and stir well. Bring it to a boil. When it starts to bubble, reduce the heat to medium low, and simmer until it thickens slightly, about 3 to 4 minutes. Turn the heat off.",
      "Coat each chicken piece well with the potato (or corn) starch.",
      "Pour about 1 inch of oil in to a heavy bottom pan. Use a narrow and deep pan if available, When the oil is sufficiently hot (330°F), drop the chicken pieces in one at a time. Fry them in two batches. Overcrowding will drop the oil temperature too quickly. Cook until light golden brown, about 3 minutes. Remove and set them on a wire rack or a paper towel-lined plate.",
      "Reheat the oil to 330°F. Deep fry again until golden brown, about a minute or two. You can do the second frying in one batch.",
      "Heat the sauce over medium low heat. Add the chicken and stir well until the chicken pieces are evenly coated.",
    ],
    rating: 4,
  },
  {
    url: "https://www.koreanbapsang.com/dakgangjeong-sweet-crispy-chicken/",
    isBasedOn: "",
    cookTime: "10 Min",
    datePublished: "2024 /06/ 04",
    tags: ["Easy", "Main", "Spicy"],
    description:
      "This simple, simple dish is super, super tasty. It’s just a few ingredients, but it’s a dish much loved by Koreans and a staple of our everyday lives.",
    image: "./images/kimchi friedrice.png",
    recipeIngredient: [
      "3 bowls steamed rice (3 cups)",
      "1 cup chopped kimchi (should be aged, well-fermented and sour)",
      " ¼ cup kimchi juice (spicy red juice from a jar of kimchi)",
      "¼ cup water",
      "2-3 tablespoons gochujang",
      "3 teaspoons toasted sesame oil",
      "1 teaspoon vegetable oil",
      "1 green onion, chopped",
      "1 tablespoon roasted sesame seeds",
      "1 sheet of gim, roasted and shredded into seaweed strips",
    ],
    name: "Kimchi fried rice",
    recipeInstructions: [
      "Heat up a wide, flat pan or skillet. Add the vegetable oil.",
      "Add the kimchi and stir fry for 1 minute over medium-high heat.",
      "Add rice, kimchi juice, water, and gochujang. Stir all the ingredients together for about 7 minutes with a wooden spoon.",
      "Add sesame oil and remove from the heat.",
      "Garnish with sprinkled chopped green onion, roasted gim, and sesame seeds. Serve right away.",
    ],
    rating: 3,
  },
];

const tools = [
  {
    url: "https://www.amazon.com/gp/aw/d/B0B3MJFZSS/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=1b25106e85edb9e46cc3b84552942af4&hsa_cr_id=0&qid=1729985253&sr=1-1-9e67e56a-6f64-441f-a281-df67fc737124&ref_=sbx_be_s_sparkle_lsi4d_asin_0_img&pd_rd_w=1YmP4&content-id=amzn1.sym.8591358d-1345-4efd-9d50-5bd4e69cd942%3Aamzn1.sym.8591358d-1345-4efd-9d50-5bd4e69cd942&pf_rd_p=8591358d-1345-4efd-9d50-5bd4e69cd942&pf_rd_r=NRYCZ7GZAGAQN76RP4A2&pd_rd_wg=c3bzT&pd_rd_r=99ede171-2447-4dfb-a242-1caff8e48991",
    datePublished: "2024 /09/ 23",
    rating: 3,
    name: "VAKUEN",
    image: "./images/utensilsimg.png",
    description:
      "Premium Airtight Food Storage Containers & Vacuum Sealer Machine Starter Set, 4-piece Container with Sealer, 100% Leak Proof,Keep food fresh up to 5 times longer than non-vacuum strorage",
    tags: ["Leak Proof", "Container"],
  },
  {
    url: "https://www.amazon.com/dp/B08BF3GB5Q?aref=njFG2wr2s2&aaxitk=fe643f7d2bba6fee3f267f5d1d9e0d59&language=en_US&pf_rd_p=eece463e-9765-4c82-95e6-6bb6969aa564&pf_rd_r=BMKWQ0GW8YRQN18PN3SE&pd_rd_wg=Azmbu&pd_rd_w=XIdKz&pd_rd_r=9ba741a1-af71-4bce-9c9d-d360ca8297b2&smid=ATVPDKIKX0DER&ref=dacx_dp_590720743640251515_585194579412455763",
    datePublished: "2024 /07/ 13",
    rating: 5,
    name: "FoodSaver",
    image: "./images/foodsaver.png",
    description:
      "FoodSaver PowerVac Compact Vacuum Sealing Machine, Stainless Steel & Black, Vertical Storage, VS0150 | Preserves freshness, reduces bag waste, for both dry and wet food",
    tags: ["Freshness", "Space-efficient"],
  },
  {
    url: "https://www.amazon.com/Ninja-BN751-Professional-Smoothies-Extractions/dp/B0BMGSZMW9/ref=sr_1_6?crid=7H39SCRFDKX2&dib=eyJ2IjoiMSJ9.7Sm0YaxnArnCC57fPOJLX7pP9PjNWx-Y5hHoU1OLIEfrqqN5ZcoTLDgRzQTJhNBiroB1skUN8LBY32IvqUFUjTMvpAJM4Qc599Q5AYCytGhatlKmpHgMMDqD5ytvjo8AvlYx8UoZSKsn8RkwRVS8FsDFceueFA7aSmu6whmtllIhMNC4GxCrpgDXjN2sOhQnqsk-qM5U691O3WHmSI78vm0_xKDwd-jfixWzwCUT7Bk.C2t9uNWthNBUBYTwEdZe0HSWS4tZGitRH1OiwSeJU_M&dib_tag=se&keywords=ninja+blenders&qid=1729985897&sprefix=ninja%2Caps%2C234&sr=8-6",
    datePublished: "2022/04/08",
    rating: 4,
    name: "NiNJA NB751",
    image: "./images/ninja.png",
    description:
      "Ninja BN751 Professional Plus DUO Blender, 1400 Peak Watts, 3 Auto-IQ Programs for Smoothies, Frozen Drinks & Nutrient Extractions, 72-oz. Total Crushing Pitcher & (2) 24 oz. To-Go Cups, Black",
    tags: ["Easy to clean", "Power"],
  },
];

const stores = [
  {
    url: "https://www.thekou.com/",
    datePublished: "2023/05/14",
    rating: 4,
    name: "KOU",
    image: "./images/bbq.png",
    description: "Choose the ALL-YOU-CAN-EAT menu or Individual menu.",
    tags: ["Korean BBQ", "Orem, Utah"],
    address: "69 State St, Orem, UT 84058",
  },
  {
    url: "https://www.cupbop.com/",
    datePublished: "2023/06/26",
    rating: 3,
    name: "CUPBOB",
    image: "./images/cupbob.png",
    description:
      "Haven't tried our fast, simple, tasty catering yet? We're always set to serve crazy good Korean food, served with a smile.",
    tags: ["Korean BBQ", "Qiuck"],
    address: "163 W Main St ste 103, Rexburg, ID 83440",
  },
];
const all = [...recipes, ...tools, ...stores]
// subscription
function viewerTemplate() {
  return `<div class="viewer">
            <div class='back'>
                  <button class="close-viewer">X</button>
                  <div class= 'form1'>
                        <img class='healthy' src="./images/healthyfood.png" alt="healthyfoodimg" loading="lazy">
                  
                        <div class = 'form2'>
                              <form id ='subscription'>
                              <label for="email"><b>Email</b></label>
                              <input id ='email' type="email" placeholder="Enter Email" name="email" required>
                              <button type="submit" class="registerbtn">Register</button>
                              </form>
                        </div>
                  </div>
            </div>
        </div>`;
}

function closeviewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove();
}

function viewHandler(event) {
  const element = event.target;
  console.log(element);
  if (element.tagName === "IMG") {
    const htmltoinsert = viewerTemplate();
    console.log(htmltoinsert);

    document.body.insertAdjacentHTML("afterbegin", htmltoinsert);
    const removeModal = document.querySelector(".close-viewer");
    removeModal.addEventListener("click", closeviewer);
  }
}
const mailImage = document.querySelector('#mailImage');
mailImage.addEventListener('click', viewHandler);

function tagsTemplate(recipe) {
  let tagshtml = "";
  recipe.tags.forEach((tag) => {
    tagshtml += `<span class="tag">${tag}</span>`;
  });
  return tagshtml;
}

function ratingTemplate(rating) {
 
  let html = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    }
    else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

export {
  viewHandler,
  tagsTemplate,
  ratingTemplate,
  recipes,
  tools,
  stores
};
