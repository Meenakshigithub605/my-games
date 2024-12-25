const wordList = [
    {
        Word: "doraemon",
        Hint: "Nobita"
    },
    {
        Word: "kiteretsu",
        Hint: "Korusuke"
    },
    {
        Word: "kennechi",
        Hint: "Hattori"
    },
    {
        Word: "dronzer",
        Hint: "Kai"
    },
    {
        Word: "pikachu",
        Hint: "ASH"
    },
    {
        Word: "drigger",
        Hint: "Ray"
    },
    {
        Word: "pokemon",
        Hint: "Pikachu"
    },
    {
        Word: "infinitynado",
        Hint: "jin"
    },
    {
        Word: "dreams",
        Hint: "U see with closed eyes."
    },
    {
        Word: "straw",
        Hint: "Use this to have liquids"
    },
    {
        Word: "table",
        Hint: "study-.....?"
    },
    {
        Word: "draceil",
        Hint: "Max-Beyblade"
    },
    {
        Word: "gian",
        Hint: "suneo fiend"
    },
    {
        Word: "rasgulla",
        Hint: "Bengal Sweet Dish"
    },
    {
        Word: "dragoon",
        Hint: "Tyson"
    },
    {
        Word: "staircase",
        Hint: "What goes up and down but don't move"
    },
    {
        Word: "age",
        Hint: "What goes up but never comes down"
    },
    {
        Word: "bed",
        Hint: "I have one head,one foot and 4 legs"
    },
    {
        Word: "nine",
        Hint: "If two’s company and three’s a crowd, what do four and five make?"
    },
    {
        Word: "hole",
        Hint: "What gets bigger and bigger the more you take away from it?"
    },
    {
        Word: "needle",
        Hint: "What has one eye but cant see at all?"
    },
    {
        Word: "envelope",
        Hint: "What starts with 'e' and ends with'e' but only has one letter in it?"
    },
    {
        Word: "clock",
        Hint: "What has a face and 2 hands but no arms or legs?"
    },
    {
        Word: "hole",
        Hint: "Mr. Jones noticed that his pants pockets were totally empty – but that there was still something in it. What was it?"
    },
    {
        Word: "silence",
        Hint: "I’m so fragile that if you say my name, you’ll break me. What am I?"
    },
    {
        Word: "palm",
        Hint: "What kind of tree can you carry in your hand?"
    },
    {
        Word: "cold",
        Hint: "What can one catch that is not thrown?"
    },
    {
        Word: "coin",
        Hint: "What has a head and a tail but no body?"
    },
    {
        Word: "asthma",
        Hint: "What 6-letter disease name begins with a vowel, ends with a vowel, and has no vowels in between?"
    },
    {
        Word: "football",
        Hint: "A popular sport played with a spherical ball."
    },
    {
        Word: "chocolate",
        Hint: "A sweet treat made from cocoa beans."
    },
    {
        Word: "butterfly",
        Hint: "An insect with colorful wings and a slender body."
    },
    {
        Word: "history",
        Hint: "The study of past events and human civilization."
    },
    {
        Word: "pizza",
        Hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        Word: "jazz",
        Hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        Word: "camera",
        Hint: "A device used to capture and record images or videos."
    },
    {
        Word: "diamond",
        Hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        Word: "adventure",
        Hint: "An exciting or daring experience."
    },
    {
        Word: "science",
        Hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        Word: "bicycle",
        Hint: "A human-powered vehicle with two wheels."
    },
    {
        Word: "sunset",
        Hint: "The daily disappearance of the sun below the horizon."
    },
    {
        Word: "coffee",
        Hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        Word: "dance",
        Hint: "A rhythmic movement of the body often performed to music."
    },
    {
        Word: "galaxy",
        Hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        Word: "orchestra",
        Hint: "A large ensemble of musicians playing various instruments."
    },
    {
        Word: "volcano",
        Hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        Word: "novel",
        Hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        Word: "sculpture",
        Hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        Word: "symphony",
        Hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        Word: "architecture",
        Hint: "The art and science of designing and constructing buildings."
    },
    {
        Word: "ballet",
        Hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        Word: "astronaut",
        Hint: "A person trained to travel and work in space."
    },
    {
        Word: "waterfall",
        Hint: "A cascade of water falling from a height."
    },
    {
        Word: "technology",
        Hint: "The application of scientific knowledge for practical purposes."
    },
    {
        Word: "rainbow",
        Hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        Word: "universe",
        Hint: "All existing matter, space, and time as a whole."
    },
    {
        Word: "piano",
        Hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        Word: "vacation",
        Hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        Word: "rainforest",
        Hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        Word: "theater",
        Hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        Word: "telephone",
        Hint: "A device used to transmit sound over long distances."
    },
    {
        Word: "language",
        Hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        Word: "desert",
        Hint: "A barren or arid land with little or no precipitation."
    },
    {
        Word: "sunflower",
        Hint: "A tall plant with a large yellow flower head."
    },
    {
        Word: "fantasy",
        Hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        Word: "telescope",
        Hint: "An optical instrument used to view distant objects in space."
    },
    {
        Word: "breeze",
        Hint: "A gentle wind."
    },
    {
        Word: "oasis",
        Hint: "A fertile spot in a desert where water is found."
    },
    {
        Word: "photography",
        Hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        Word: "safari",
        Hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        Word: "planet",
        Hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        Word: "river",
        Hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        Word: "tropical",
        Hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        Word: "mysterious",
        Hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        Word: "enigma",
        Hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        Word: "paradox",
        Hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        Word: "puzzle",
        Hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        Word: "whisper",
        Hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        Word: "shadow",
        Hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        Word: "secret",
        Hint: "Something kept hidden or unknown to others."
    },
    {
        Word: "curiosity",
        Hint: "A strong desire to know or learn something."
    },
    {
        Word: "unpredictable",
        Hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        Word: "obfuscate",
        Hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        Word: "unveil",
        Hint: "To make known or reveal something previously secret or unknown."
    },
    {
        Word: "illusion",
        Hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        Word: "moonlight",
        Hint: "The light from the moon."
    },
    {
        Word: "vibrant",
        Hint: "Full of energy, brightness, and life."
    },
    {
        Word: "nostalgia",
        Hint: "A sentimental longing or wistful affection for the past."
    },
    {
        Word: "brilliant",
        Hint: "Exceptionally clever, talented, or impressive."
    },
];
export default wordList;