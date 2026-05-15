/* =========================
   SMART TOOLS GROCERY ITEMS
   File: Smart-Tools/Grocery/grocery-items.js
   Large smart grocery suggestion engine
   English + Pakistani / Indian / Desi + Roman Urdu/Hindi + some Urdu names
   This generates thousands of searchable suggestions from clean base items.
========================= */

/* =========================
   BUILT-IN GROCERY ITEMS
========================= */
const grocerySuggestions = buildPremiumGrocerySuggestions();

/* =========================
   BUILD PREMIUM GROCERY SUGGESTIONS
========================= */
function buildPremiumGrocerySuggestions(){
  const baseItems = [
    /* =========================
       VEGETABLES / SABZI
    ========================= */
    ["Potato / Aloo / آلو", "Vegetables"],
    ["Tomato / Tamatar / ٹماٹر", "Vegetables"],
    ["Onion / Pyaz / Pyaaz / پیاز", "Vegetables"],
    ["Red Onion / Laal Pyaz", "Vegetables"],
    ["White Onion / Safaid Pyaz", "Vegetables"],
    ["Yellow Onion", "Vegetables"],
    ["Green Onion / Hara Pyaz", "Vegetables"],
    ["Garlic / Lehsan / Lahsun / لہسن", "Vegetables"],
    ["Ginger / Adrak / ادرک", "Vegetables"],
    ["Green Chili / Hari Mirch / ہری مرچ", "Vegetables"],
    ["Red Chili / Laal Mirch / لال مرچ", "Vegetables"],
    ["Cilantro / Dhania / Hara Dhania / دھنیا", "Vegetables"],
    ["Coriander Leaves / Dhania", "Vegetables"],
    ["Mint / Podina / Pudina / پودینہ", "Vegetables"],
    ["Curry Leaves / Kari Patta", "Vegetables"],
    ["Fenugreek Leaves / Methi", "Vegetables"],
    ["Spinach / Palak / پالک", "Vegetables"],
    ["Mustard Greens / Sarson Ka Saag", "Vegetables"],
    ["Dill / Soya / Suwa", "Vegetables"],
    ["Carrot / Gajar / گاجر", "Vegetables"],
    ["Radish / Mooli / مولی", "Vegetables"],
    ["Turnip / Shalgam / شلجم", "Vegetables"],
    ["Beetroot / Chukandar", "Vegetables"],
    ["Cucumber / Kheera / کھیرا", "Vegetables"],
    ["Eggplant / Baingan / بینگن", "Vegetables"],
    ["Okra / Bhindi / بھنڈی", "Vegetables"],
    ["Bitter Gourd / Karela / کریلا", "Vegetables"],
    ["Bottle Gourd / Lauki / Loki", "Vegetables"],
    ["Ridge Gourd / Tori", "Vegetables"],
    ["Round Gourd / Tinda", "Vegetables"],
    ["Pumpkin / Kaddu / کدو", "Vegetables"],
    ["Cauliflower / Phool Gobi", "Vegetables"],
    ["Cabbage / Band Gobi", "Vegetables"],
    ["Broccoli", "Vegetables"],
    ["Mushroom", "Vegetables"],
    ["Bell Pepper / Shimla Mirch", "Vegetables"],
    ["Green Pepper", "Vegetables"],
    ["Red Pepper", "Vegetables"],
    ["Yellow Pepper", "Vegetables"],
    ["Orange Pepper", "Vegetables"],
    ["Jalapeno", "Vegetables"],
    ["Corn / Makai / مکئی", "Vegetables"],
    ["Sweet Corn", "Vegetables"],
    ["Green Peas / Matar / مٹر", "Vegetables"],
    ["Snow Peas", "Vegetables"],
    ["Sugar Snap Peas", "Vegetables"],
    ["Green Beans", "Vegetables"],
    ["French Beans", "Vegetables"],
    ["Long Beans", "Vegetables"],
    ["Sweet Potato / Shakarkandi", "Vegetables"],
    ["Lettuce", "Vegetables"],
    ["Romaine Lettuce", "Vegetables"],
    ["Iceberg Lettuce", "Vegetables"],
    ["Celery", "Vegetables"],
    ["Zucchini", "Vegetables"],
    ["Avocado", "Vegetables"],
    ["Asparagus", "Vegetables"],
    ["Artichoke", "Vegetables"],
    ["Brussels Sprouts", "Vegetables"],
    ["Kale", "Vegetables"],
    ["Arugula", "Vegetables"],
    ["Spring Mix", "Vegetables"],
    ["Salad Mix", "Vegetables"],
    ["Coleslaw Mix", "Vegetables"],
    ["Bean Sprouts", "Vegetables"],
    ["Bok Choy", "Vegetables"],
    ["Leeks", "Vegetables"],
    ["Parsley", "Vegetables"],
    ["Basil", "Vegetables"],
    ["Rosemary", "Vegetables"],
    ["Thyme", "Vegetables"],

    /* =========================
       FRUITS / PHAL
    ========================= */
    ["Apple / Saib / سیب", "Fruits"],
    ["Red Apple", "Fruits"],
    ["Green Apple", "Fruits"],
    ["Gala Apple", "Fruits"],
    ["Fuji Apple", "Fruits"],
    ["Honeycrisp Apple", "Fruits"],
    ["Banana / Kela / کیلا", "Fruits"],
    ["Orange / Malta / مالٹا", "Fruits"],
    ["Mandarin / Kinnow / کینو", "Fruits"],
    ["Clementine", "Fruits"],
    ["Mango / Aam / آم", "Fruits"],
    ["Grapes / Angoor / انگور", "Fruits"],
    ["Green Grapes", "Fruits"],
    ["Red Grapes", "Fruits"],
    ["Black Grapes", "Fruits"],
    ["Watermelon / Tarbooz / تربوز", "Fruits"],
    ["Melon / Kharbooja", "Fruits"],
    ["Cantaloupe", "Fruits"],
    ["Honeydew", "Fruits"],
    ["Pear / Nashpati", "Fruits"],
    ["Peach / Aadoo / Aaroo", "Fruits"],
    ["Plum / Aloo Bukhara", "Fruits"],
    ["Apricot / Khubani", "Fruits"],
    ["Pomegranate / Anaar / انار", "Fruits"],
    ["Strawberry", "Fruits"],
    ["Blueberry", "Fruits"],
    ["Raspberry", "Fruits"],
    ["Blackberry", "Fruits"],
    ["Pineapple", "Fruits"],
    ["Kiwi", "Fruits"],
    ["Papaya / Papita", "Fruits"],
    ["Guava / Amrood / امرود", "Fruits"],
    ["Dates / Khajoor / کھجور", "Fruits"],
    ["Medjool Dates", "Fruits"],
    ["Ajwa Dates", "Fruits"],
    ["Figs / Anjeer", "Fruits"],
    ["Coconut / Nariyal", "Fruits"],
    ["Lemon / Nimbu / لیموں", "Fruits"],
    ["Lime", "Fruits"],
    ["Grapefruit", "Fruits"],
    ["Cherry", "Fruits"],
    ["Dragon Fruit", "Fruits"],
    ["Passion Fruit", "Fruits"],
    ["Lychee", "Fruits"],
    ["Persimmon", "Fruits"],
    ["Nectarine", "Fruits"],
    ["Cranberries", "Fruits"],
    ["Prunes", "Fruits"],
    ["Raisins / Kishmish", "Fruits"],

    /* =========================
       DAIRY / DOODH DAHI
    ========================= */
    ["Milk / Doodh / دودھ", "Dairy"],
    ["Whole Milk / Full Cream Doodh", "Dairy"],
    ["Low Fat Milk", "Dairy"],
    ["Skim Milk", "Dairy"],
    ["Lactose Free Milk", "Dairy"],
    ["Almond Milk", "Dairy"],
    ["Oat Milk", "Dairy"],
    ["Soy Milk", "Dairy"],
    ["Coconut Milk Drink", "Dairy"],
    ["Evaporated Milk", "Dairy"],
    ["Condensed Milk", "Dairy"],
    ["Yogurt / Dahi / دہی", "Dairy"],
    ["Greek Yogurt", "Dairy"],
    ["Plain Yogurt / Saada Dahi", "Dairy"],
    ["Desi Yogurt / Desi Dahi", "Dairy"],
    ["Flavored Yogurt", "Dairy"],
    ["Butter / Makhan / مکھن", "Dairy"],
    ["Salted Butter", "Dairy"],
    ["Unsalted Butter", "Dairy"],
    ["Cheese", "Dairy"],
    ["Mozzarella Cheese", "Dairy"],
    ["Cheddar Cheese", "Dairy"],
    ["American Cheese", "Dairy"],
    ["Swiss Cheese", "Dairy"],
    ["Parmesan Cheese", "Dairy"],
    ["Feta Cheese", "Dairy"],
    ["Cream Cheese", "Dairy"],
    ["Cottage Cheese / Paneer", "Dairy"],
    ["Paneer / پنیر", "Dairy"],
    ["Sour Cream", "Dairy"],
    ["Heavy Cream", "Dairy"],
    ["Whipping Cream", "Dairy"],
    ["Half and Half", "Dairy"],
    ["Eggs / Anday / انڈے", "Dairy"],
    ["Brown Eggs", "Dairy"],
    ["White Eggs", "Dairy"],
    ["Organic Eggs", "Dairy"],
    ["Lassi / لسی", "Drinks"],
    ["Butter Milk / Chaach", "Dairy"],
    ["Milk Powder / Doodh Powder", "Dairy"],
    ["Nido Milk Powder", "Dairy"],
    ["Everyday Milk Powder", "Dairy"],
    ["Coffee Creamer", "Dairy"],

    /* =========================
       RICE / FLOUR / GRAINS
    ========================= */
    ["Rice / Chawal / چاول", "Pantry"],
    ["Basmati Rice / Basmati Chawal", "Pantry"],
    ["Sela Rice", "Pantry"],
    ["Jasmine Rice", "Pantry"],
    ["Brown Rice", "Pantry"],
    ["White Rice", "Pantry"],
    ["Parboiled Rice", "Pantry"],
    ["Sushi Rice", "Pantry"],
    ["Arborio Rice", "Pantry"],
    ["Flour / Atta / آٹا", "Pantry"],
    ["Wheat Flour / Gehun Ka Atta", "Pantry"],
    ["All Purpose Flour / Maida / میدہ", "Pantry"],
    ["Bread Flour", "Pantry"],
    ["Cake Flour", "Pantry"],
    ["Gram Flour / Besan / بیسن", "Pantry"],
    ["Semolina / Sooji / سوجی", "Pantry"],
    ["Corn Flour / Makai Ka Atta", "Pantry"],
    ["Rice Flour", "Pantry"],
    ["Barley / Jau", "Pantry"],
    ["Oats / Jau", "Pantry"],
    ["Quinoa", "Pantry"],
    ["Couscous", "Pantry"],
    ["Bulgur", "Pantry"],
    ["Millet / Bajra", "Pantry"],
    ["Sorghum / Jowar", "Pantry"],
    ["Poha", "Pantry"],
    ["Vermicelli / Seviyan / سویاں", "Pantry"],
    ["Noodles", "Pantry"],
    ["Egg Noodles", "Pantry"],
    ["Ramen Noodles", "Pantry"],
    ["Pasta", "Pantry"],
    ["Spaghetti", "Pantry"],
    ["Macaroni", "Pantry"],
    ["Penne Pasta", "Pantry"],
    ["Lasagna Sheets", "Pantry"],
    ["Elbow Pasta", "Pantry"],
    ["Fettuccine", "Pantry"],
    ["Linguine", "Pantry"],

    /* =========================
       DAAL / BEANS
    ========================= */
    ["Daal / Dal / Lentils / دال", "Pantry"],
    ["Masoor Daal / Red Lentils", "Pantry"],
    ["Moong Daal", "Pantry"],
    ["Chana Daal", "Pantry"],
    ["Toor Daal / Arhar Daal", "Pantry"],
    ["Urad Daal / Mash Daal", "Pantry"],
    ["Green Lentils", "Pantry"],
    ["Black Lentils / Sabut Mash", "Pantry"],
    ["Chickpeas / Chana / چنا", "Pantry"],
    ["Black Chickpeas / Kala Chana", "Pantry"],
    ["White Chickpeas / Safaid Chana", "Pantry"],
    ["Kidney Beans / Rajma", "Pantry"],
    ["Black Beans", "Pantry"],
    ["White Beans", "Pantry"],
    ["Pinto Beans", "Pantry"],
    ["Lima Beans", "Pantry"],
    ["Soy Beans", "Pantry"],
    ["Fava Beans", "Pantry"],
    ["Navy Beans", "Pantry"],
    ["Mixed Beans", "Pantry"],

    /* =========================
       SPICES / MASALAY
    ========================= */
    ["Salt / Namak / نمک", "Spices"],
    ["Black Pepper / Kali Mirch / کالی مرچ", "Spices"],
    ["White Pepper", "Spices"],
    ["Red Chili Powder / Laal Mirch Powder", "Spices"],
    ["Crushed Red Pepper", "Spices"],
    ["Turmeric / Haldi / ہلدی", "Spices"],
    ["Cumin / Zeera / زیرہ", "Spices"],
    ["Cumin Powder / Zeera Powder", "Spices"],
    ["Coriander Seeds / Sabut Dhania", "Spices"],
    ["Coriander Powder / Dhania Powder", "Spices"],
    ["Garam Masala", "Spices"],
    ["Biryani Masala", "Spices"],
    ["Tandoori Masala", "Spices"],
    ["Chaat Masala", "Spices"],
    ["Nihari Masala", "Spices"],
    ["Qorma Masala", "Spices"],
    ["Karahi Masala", "Spices"],
    ["Chicken Masala", "Spices"],
    ["Meat Masala", "Spices"],
    ["Fish Masala", "Spices"],
    ["Curry Powder", "Spices"],
    ["Paprika", "Spices"],
    ["Smoked Paprika", "Spices"],
    ["Oregano", "Spices"],
    ["Italian Seasoning", "Spices"],
    ["Cinnamon / Daar Cheeni", "Spices"],
    ["Cardamom / Elaichi / الائچی", "Spices"],
    ["Black Cardamom / Bari Elaichi", "Spices"],
    ["Cloves / Laung", "Spices"],
    ["Bay Leaves / Tez Patta", "Spices"],
    ["Star Anise / Badiyan", "Spices"],
    ["Nutmeg / Jaifal", "Spices"],
    ["Mace / Javitri", "Spices"],
    ["Fennel Seeds / Saunf", "Spices"],
    ["Fenugreek Seeds / Methi Dana", "Spices"],
    ["Mustard Seeds / Rai", "Spices"],
    ["Carom Seeds / Ajwain", "Spices"],
    ["Nigella Seeds / Kalonji", "Spices"],
    ["Sesame Seeds / Til", "Spices"],
    ["Poppy Seeds / Khashkhash", "Spices"],
    ["Tamarind / Imli", "Spices"],
    ["Jaggery / Gur", "Spices"],
    ["Saffron / Zafran", "Spices"],
    ["Rose Water / Arq Gulab", "Spices"],
    ["Kewra Water", "Spices"],
    ["Citric Acid / Tatri", "Spices"],
    ["Dry Mango Powder / Amchur", "Spices"],
    ["Asafoetida / Hing", "Spices"],

    /* =========================
       DESI BRANDS / MASALA BOX
    ========================= */
    ["Shan Masala", "Spices"],
    ["National Masala", "Spices"],
    ["Laziza Masala", "Spices"],
    ["MDH Masala", "Spices"],
    ["Everest Masala", "Spices"],
    ["Badshah Masala", "Spices"],
    ["Ahmed Pickle", "Pantry"],
    ["National Pickle", "Pantry"],
    ["Shan Pickle", "Pantry"],
    ["Mother's Recipe Pickle", "Pantry"],
    ["Rooh Afza", "Drinks"],
    ["Jam-e-Shirin", "Drinks"],
    ["Tapal Tea", "Drinks"],
    ["Lipton Tea", "Drinks"],
    ["Red Label Tea", "Drinks"],
    ["Brooke Bond Tea", "Drinks"],
    ["Tetley Tea", "Drinks"],
    ["Wagh Bakri Tea", "Drinks"],
    ["Nestle Milk Pack", "Dairy"],
    ["Nido Milk Powder", "Dairy"],
    ["Everyday Milk Powder", "Dairy"],

    /* =========================
       MEAT / HALAL
    ========================= */
    ["Chicken / Murghi / مرغی", "Meat"],
    ["Halal Chicken", "Meat"],
    ["Chicken Breast", "Meat"],
    ["Chicken Thighs", "Meat"],
    ["Chicken Wings", "Meat"],
    ["Chicken Legs", "Meat"],
    ["Chicken Drumsticks", "Meat"],
    ["Chicken Tenderloins", "Meat"],
    ["Ground Chicken / Chicken Keema", "Meat"],
    ["Beef / Gosht / گوشت", "Meat"],
    ["Halal Beef", "Meat"],
    ["Ground Beef / Beef Keema", "Meat"],
    ["Beef Steak", "Meat"],
    ["Beef Cubes", "Meat"],
    ["Beef Ribs", "Meat"],
    ["Beef Shank", "Meat"],
    ["Lamb / Bakra Gosht", "Meat"],
    ["Goat Meat / Bakra", "Meat"],
    ["Lamb Chops", "Meat"],
    ["Ground Lamb / Lamb Keema", "Meat"],
    ["Mutton", "Meat"],
    ["Turkey", "Meat"],
    ["Ground Turkey", "Meat"],
    ["Turkey Ground", "Meat"],
    ["Chicken Nuggets", "Frozen"],
    ["Halal Nuggets", "Frozen"],
    ["Seekh Kabab", "Frozen"],
    ["Chicken Kabab", "Frozen"],
    ["Beef Kabab", "Frozen"],
    ["Chapli Kabab", "Frozen"],
    ["Shami Kabab", "Frozen"],
    ["Gyro Meat", "Frozen"],

    /* =========================
       SEAFOOD
    ========================= */
    ["Fish / Machli / مچھلی", "Seafood"],
    ["Salmon", "Seafood"],
    ["Tilapia", "Seafood"],
    ["Tuna", "Seafood"],
    ["Sardines", "Seafood"],
    ["Shrimp / Jhinga", "Seafood"],
    ["Prawns", "Seafood"],
    ["Cod Fish", "Seafood"],
    ["Catfish", "Seafood"],
    ["Fish Fillet", "Seafood"],
    ["Fish Sticks", "Frozen"],
    ["Crab", "Seafood"],
    ["Lobster", "Seafood"],
    ["Scallops", "Seafood"],

    /* =========================
       BAKERY / ROTI
    ========================= */
    ["Bread / Double Roti", "Bakery"],
    ["White Bread", "Bakery"],
    ["Wheat Bread", "Bakery"],
    ["Brown Bread", "Bakery"],
    ["Sourdough Bread", "Bakery"],
    ["Naan / نان", "Bakery"],
    ["Roti / روٹی", "Bakery"],
    ["Chapati", "Bakery"],
    ["Paratha / پراٹھا", "Frozen"],
    ["Frozen Paratha", "Frozen"],
    ["Plain Paratha", "Frozen"],
    ["Aloo Paratha", "Frozen"],
    ["Tandoori Naan", "Bakery"],
    ["Garlic Naan", "Bakery"],
    ["Pita Bread", "Bakery"],
    ["Tortilla", "Bakery"],
    ["Bagels", "Bakery"],
    ["Burger Buns", "Bakery"],
    ["Hot Dog Buns", "Bakery"],
    ["Croissant", "Bakery"],
    ["Muffins", "Bakery"],
    ["Cake", "Bakery"],
    ["Rusk / Cake Rusk", "Bakery"],
    ["Brioche", "Bakery"],
    ["Dinner Rolls", "Bakery"],

    /* =========================
       FROZEN / DESI FROZEN
    ========================= */
    ["Frozen Samosa", "Frozen"],
    ["Samosa / سموسہ", "Frozen"],
    ["Frozen Spring Rolls", "Frozen"],
    ["Spring Rolls", "Frozen"],
    ["Frozen Pakora", "Frozen"],
    ["Pakora Mix", "Pantry"],
    ["Frozen Fries", "Frozen"],
    ["French Fries", "Frozen"],
    ["Hash Browns", "Frozen"],
    ["Frozen Pizza", "Frozen"],
    ["Frozen Vegetables", "Frozen"],
    ["Frozen Peas", "Frozen"],
    ["Frozen Corn", "Frozen"],
    ["Frozen Spinach", "Frozen"],
    ["Frozen Berries", "Frozen"],
    ["Frozen Waffles", "Frozen"],
    ["Ice Cream", "Frozen"],
    ["Kulfi", "Frozen"],
    ["Falooda Ice Cream", "Frozen"],
    ["Frozen Garlic Naan", "Frozen"],
    ["Frozen Aloo Tikki", "Frozen"],
    ["Frozen Paneer", "Frozen"],

    /* =========================
       SNACKS / NAMKEEN
    ========================= */
    ["Chips", "Snacks"],
    ["Potato Chips", "Snacks"],
    ["Tortilla Chips", "Snacks"],
    ["Popcorn", "Snacks"],
    ["Crackers", "Snacks"],
    ["Cookies", "Snacks"],
    ["Biscuits", "Snacks"],
    ["Cake Rusk", "Snacks"],
    ["Nimco", "Snacks"],
    ["Namkeen", "Snacks"],
    ["Sev", "Snacks"],
    ["Bhujia", "Snacks"],
    ["Peanuts / Moong Phali", "Snacks"],
    ["Almonds / Badam", "Snacks"],
    ["Cashews / Kaju", "Snacks"],
    ["Pistachios / Pista", "Snacks"],
    ["Walnuts / Akhrot", "Snacks"],
    ["Raisins / Kishmish", "Snacks"],
    ["Trail Mix", "Snacks"],
    ["Granola Bars", "Snacks"],
    ["Protein Bars", "Snacks"],
    ["Chocolate", "Snacks"],
    ["Candy", "Snacks"],
    ["Pretzels", "Snacks"],
    ["Chakri", "Snacks"],
    ["Mathri", "Snacks"],
    ["Khari", "Snacks"],
    ["Pani Puri", "Snacks"],
    ["Papdi", "Snacks"],

    /* =========================
       DRINKS
    ========================= */
    ["Water Bottles", "Drinks"],
    ["Mineral Water", "Drinks"],
    ["Sparkling Water", "Drinks"],
    ["Soda", "Drinks"],
    ["Cola", "Drinks"],
    ["Diet Soda", "Drinks"],
    ["Juice", "Drinks"],
    ["Orange Juice", "Drinks"],
    ["Apple Juice", "Drinks"],
    ["Mango Juice", "Drinks"],
    ["Cranberry Juice", "Drinks"],
    ["Lemonade", "Drinks"],
    ["Iced Tea", "Drinks"],
    ["Tea / Chai / چائے", "Drinks"],
    ["Tea Bags", "Drinks"],
    ["Green Tea", "Drinks"],
    ["Black Tea", "Drinks"],
    ["Coffee", "Drinks"],
    ["Instant Coffee", "Drinks"],
    ["Coffee Creamer", "Drinks"],
    ["Hot Chocolate", "Drinks"],
    ["Energy Drink", "Drinks"],
    ["Sports Drink", "Drinks"],
    ["Coconut Water", "Drinks"],
    ["Yogurt Drink", "Drinks"],
    ["Smoothie", "Drinks"],
    ["Sugarcane Juice", "Drinks"],
    ["Falooda", "Drinks"],

    /* =========================
       CONDIMENTS / SAUCES
    ========================= */
    ["Ketchup", "Pantry"],
    ["Mayonnaise", "Pantry"],
    ["Mustard", "Pantry"],
    ["BBQ Sauce", "Pantry"],
    ["Hot Sauce", "Pantry"],
    ["Chili Garlic Sauce", "Pantry"],
    ["Soy Sauce", "Pantry"],
    ["Vinegar / Sirka", "Pantry"],
    ["Apple Cider Vinegar", "Pantry"],
    ["Tomato Sauce", "Pantry"],
    ["Tomato Paste", "Pantry"],
    ["Pasta Sauce", "Pantry"],
    ["Salsa", "Deli"],
    ["Hummus", "Deli"],
    ["Guacamole", "Deli"],
    ["Pickles / Achar / اچار", "Pantry"],
    ["Olives", "Pantry"],
    ["Tahini", "Pantry"],
    ["Sriracha", "Pantry"],
    ["Buffalo Sauce", "Pantry"],
    ["Ranch Dressing", "Pantry"],

    /* =========================
       BREAKFAST
    ========================= */
    ["Cereal", "Pantry"],
    ["Oatmeal", "Pantry"],
    ["Granola", "Pantry"],
    ["Pancake Mix", "Pantry"],
    ["Waffle Mix", "Pantry"],
    ["Maple Syrup", "Pantry"],
    ["Honey / Shehad / شہد", "Pantry"],
    ["Jam", "Pantry"],
    ["Jelly", "Pantry"],
    ["Peanut Butter", "Pantry"],
    ["Almond Butter", "Pantry"],
    ["Nutella", "Pantry"],
    ["Cream", "Dairy"],
    ["Cream of Wheat", "Pantry"],

    /* =========================
       CANNED / PACKAGED
    ========================= */
    ["Canned Corn", "Pantry"],
    ["Canned Tomatoes", "Pantry"],
    ["Canned Beans", "Pantry"],
    ["Canned Chickpeas", "Pantry"],
    ["Canned Tuna", "Pantry"],
    ["Canned Soup", "Pantry"],
    ["Chicken Broth", "Pantry"],
    ["Beef Broth", "Pantry"],
    ["Vegetable Broth", "Pantry"],
    ["Coconut Milk", "Pantry"],
    ["Evaporated Milk", "Pantry"],
    ["Condensed Milk", "Pantry"],
    ["Instant Soup", "Pantry"],
    ["Instant Noodles", "Pantry"],

    /* =========================
       HOUSEHOLD
    ========================= */
    ["Paper Towels", "Household"],
    ["Toilet Paper", "Household"],
    ["Tissues", "Household"],
    ["Napkins", "Household"],
    ["Aluminum Foil", "Household"],
    ["Plastic Wrap", "Household"],
    ["Zip Bags", "Household"],
    ["Sandwich Bags", "Household"],
    ["Freezer Bags", "Household"],
    ["Trash Bags", "Household"],
    ["Dish Soap", "Household"],
    ["Dishwasher Pods", "Household"],
    ["Laundry Detergent", "Household"],
    ["Fabric Softener", "Household"],
    ["Bleach", "Household"],
    ["All Purpose Cleaner", "Household"],
    ["Glass Cleaner", "Household"],
    ["Floor Cleaner", "Household"],
    ["Bathroom Cleaner", "Household"],
    ["Kitchen Cleaner", "Household"],
    ["Sponges", "Household"],
    ["Dish Scrub", "Household"],
    ["Hand Soap", "Household"],
    ["Hand Sanitizer", "Household"],
    ["Air Freshener", "Household"],
    ["Paper Plates", "Household"],
    ["Plastic Cups", "Household"],
    ["Plastic Spoons", "Household"],
    ["Plastic Forks", "Household"],
    ["Plastic Knives", "Household"],
    ["Batteries", "Household"],
    ["Light Bulbs", "Household"],

    /* =========================
       PERSONAL / BATHROOM
    ========================= */
    ["Body Wash", "Personal"],
    ["Soap", "Personal"],
    ["Bar Soap", "Personal"],
    ["Shampoo", "Personal"],
    ["Conditioner", "Personal"],
    ["Toothpaste", "Personal"],
    ["Toothbrush", "Personal"],
    ["Mouthwash", "Personal"],
    ["Dental Floss", "Personal"],
    ["Deodorant", "Personal"],
    ["Razors", "Personal"],
    ["Shaving Cream", "Personal"],
    ["Lotion", "Personal"],
    ["Face Wash", "Personal"],
    ["Hair Oil", "Personal"],
    ["Coconut Oil", "Personal"],
    ["Baby Oil", "Personal"],
    ["Cotton Swabs", "Personal"],
    ["Cotton Balls", "Personal"],

    /* =========================
       BABY
    ========================= */
    ["Baby Diapers", "Baby"],
    ["Baby Wipes", "Baby"],
    ["Baby Formula", "Baby"],
    ["Baby Food", "Baby"],
    ["Baby Lotion", "Baby"],
    ["Baby Shampoo", "Baby"],
    ["Baby Soap", "Baby"],
    ["Baby Cereal", "Baby"],
    ["Diaper Rash Cream", "Baby"],

    /* =========================
       PETS
    ========================= */
    ["Cat Food", "Pets"],
    ["Dog Food", "Pets"],
    ["Pet Treats", "Pets"],
    ["Cat Litter", "Pets"],
    ["Pet Shampoo", "Pets"],
    ["Bird Food", "Pets"],
    ["Fish Food", "Pets"],

    /* =========================
       BASIC OTC / HEALTH
    ========================= */
    ["Bandages", "Health"],
    ["First Aid Kit", "Health"],
    ["Thermometer", "Health"],
    ["Pain Reliever", "Health"],
    ["Cough Drops", "Health"],
    ["Vapor Rub", "Health"],
    ["Electrolyte Drink", "Health"],
    ["Antacid", "Health"],
    ["Allergy Tablets", "Health"],
    ["Vitamin C", "Health"],
    ["Multivitamin", "Health"]
  ];

  const premiumWords = [
    "Fresh",
    "Organic",
    "Regular",
    "Large",
    "Small",
    "Medium",
    "Family Pack",
    "Value Pack",
    "Mini",
    "Jumbo",
    "Premium",
    "Desi",
    "Halal",
    "Frozen",
    "Canned",
    "Dry",
    "Whole",
    "Cut",
    "Sliced",
    "Chopped",
    "Diced",
    "Washed",
    "Pre Washed",
    "Bag",
    "Box",
    "Bottle",
    "Can",
    "Jar",
    "Pack",
    "Bulk",
    "Costco",
    "Walmart",
    "Aldi",
    "BJs",
    "Target",
    "Restaurant Size",
    "Party Size",
    "Kids",
    "Sugar Free",
    "Low Sodium",
    "No Salt",
    "Gluten Free",
    "Lactose Free",
    "Non GMO",
    "Vegan",
    "Vegetarian",
    "Low Fat",
    "Full Fat",
    "Extra Large"
  ];

  const desiWords = [
    "Pakistani Style",
    "Indian Style",
    "Desi Style",
    "Home Style",
    "Masala",
    "Spicy",
    "Mild",
    "Ready To Cook",
    "Ready Made",
    "Restaurant Style",
    "Karachi Style",
    "Lahori Style",
    "Hyderabadi Style",
    "Punjabi Style",
    "Bombay Style",
    "Delhi Style",
    "Dhaba Style",
    "Tandoori",
    "Chatpata",
    "Traditional"
  ];

  const quantityWords = [
    "1 lb",
    "2 lb",
    "3 lb",
    "5 lb",
    "10 lb",
    "1 pack",
    "2 pack",
    "3 pack",
    "1 box",
    "2 boxes",
    "1 bag",
    "2 bags",
    "1 bottle",
    "2 bottles",
    "1 dozen",
    "Half Gallon",
    "1 Gallon",
    "Small Pack",
    "Large Pack"
  ];

  const allItems = [];
  const seen = {};

  function addItem(name, category){
    const cleanName = String(name || "").trim();
    const cleanCategory = String(category || "Other").trim();

    if(!cleanName){ return; }

    const key = cleanName.toLowerCase() + "|" + cleanCategory.toLowerCase();

    if(seen[key]){ return; }

    seen[key] = true;

    allItems.push({
      name: cleanName,
      category: cleanCategory
    });
  }

  function addSplitNames(name, category){
    if(!name.includes(" / ")){ return; }

    const parts = name.split(" / ").map(function(part){
      return part.trim();
    }).filter(Boolean);

    parts.forEach(function(part){
      addItem(part, category);
    });

    if(parts.length >= 2){
      addItem(parts[0] + " / " + parts[1], category);
      addItem(parts[1] + " / " + parts[0], category);
    }
  }

  baseItems.forEach(function(item){
    const name = item[0];
    const category = item[1];

    addItem(name, category);
    addSplitNames(name, category);

    premiumWords.forEach(function(word){
      addItem(word + " " + name, category);
    });

    if(
      category === "Pantry" ||
      category === "Spices" ||
      category === "Frozen" ||
      category === "Meat" ||
      category === "Dairy" ||
      category === "Vegetables" ||
      category === "Drinks" ||
      category === "Snacks" ||
      category === "Bakery"
    ){
      desiWords.forEach(function(word){
        addItem(word + " " + name, category);
      });
    }

    quantityWords.forEach(function(word){
      addItem(word + " " + name, category);
    });
  });

  return allItems;
}
