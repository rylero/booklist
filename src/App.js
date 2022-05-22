import QuestionNode from "./QuestionNode.js";
import BookNode from "./BookNode.js";
import React, { useState } from "react";
import "./app.css";

function App() {
  var tree = [
    {currentQuestion: "Do you want to read Fantasy or Realistic?", answer1Text: "Fantasy", answer2Text: "Realistic", answer1Pointer:1, answer2Pointer:20, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: "Do you want to read about Sci-fi or Magic?", answer1Text: "Sci-fi", answer2Text: "Magic", answer1Pointer:2, answer2Pointer:7, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: "Do you want to read about Technology or Criminals?", answer1Text: "Technology", answer2Text: "Criminals", answer1Pointer:3, answer2Pointer:4, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: "Do you want to read about World War 3 or Hackers?", answer1Text: "World War 3", answer2Text: "Hackers", answer1Pointer:5, answer2Pointer:6, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "Legend", bookAuthor:"Marie Lu", bookDesc:"What was once the western United States is now home to the Republic, a nation perpetually at war with its neighbors. Born into an elite family in one of the Republic's wealthiest districts, fifteen-year-old June is a prodigy being groomed for success in the Republic's highest military circles. Born into the slums, fifteen-year-old Day is the country's most wanted criminal. But his motives may not be as malicious as they seem.From very different worlds, June and Day have no reason to cross paths - until the day June's brother, Metias, is murdered and Day becomes the prime suspect. Caught in the ultimate game of cat and mouse, Day is in a race for his family's survival, while June seeks to avenge Metias's death. But in a shocking turn of events, the two uncover the truth of what has really brought them together, and the sinister lengths their country will go to keep its secrets. Full of nonstop action, suspense, and romance, this novel is sure to move readers as much as it thrills.", bookImg:"https://books.google.com/books/publisher/content?id=QV2JDQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U31K7z0BriclKhXX8kBEuFg7iFRkg&w=1280"},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "Insignia", bookAuthor:"S. J. Kincaid", bookDesc:"The earth is in the middle of WWIII in Insignia, the first entry in S. J. Kincaid's fast-paced sci-fi adventure trilogy perfect for fans of Ender's Game. The planet's natural resources are almost gone, and war is being fought to control the assets of the solar system. The enemy is winning. The salvation may be Tom Raines. Tom doesn't seem like a hero. He's a short fourteen-year-old with bad skin. But he has the virtual-reality gaming skills that make him a phenom behind the controls of the battle drones.As a new member of the Intrasolar Forces, Tom's life completely changes. Suddenly, he's someone important. He has new opportunities, friends, and a shot at having a girlfriend. But there's a price to pay. . . .", bookImg:"https://books.google.com/books/content?id=XYE9zoOaKrwC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3f6oGV8ngkDYfOcE2Msui_mlWBdA&w=1280"},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "Warcross", bookAuthor:"Marie Lu", bookDesc:"For the millions who log in every day, Warcross isn't just a game--it's a way of life. Struggling to make ends meet, teenage hacker Emika Chen works as a bounty hunter, tracking down players who bet on the game illegally. Needing to make some quick cash, Emika takes a risk and hacks into the opening game of the international Warcross Championships--only to accidentally glitch herself into the action and become an overnight sensation. Convinced she's going to be arrested, Emika is shocked when instead she gets a call from the game's creator, the elusive young billionaire Hideo Tanaka, with an irresistible offer. With no time to lose, Emika's whisked off to Tokyo and thrust into a world of fame and fortune that she's only dreamed of. But soon her investigation uncovers a sinister plot, with major consequences for the entire Warcross empire.", bookImg:"https://books.google.com/books/publisher/content?id=hPOiDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1WPQJDnGdU_bS6PlihctaUZtp29w&w=1280"},
    {currentQuestion: "Do you want to read about Magic in a Realistic or not Realistic place?", answer1Text: "Realistic Place", answer2Text: "Not Realistic Place", answer1Pointer:8, answer2Pointer:13, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: "Do you want to read a book with or without Aliens?", answer1Text: "With Aliens", answer2Text: "Without Aliens", answer1Pointer:9, answer2Pointer:10, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "I Am Number 4", bookAuthor:"Pittacus Lore", bookDesc:"The book that started it all . . . Nine of us came here. We look like you. We talk like you. We live among you. But we are not you. We can do things you dream of doing. We have powers you dream of having. We are stronger and faster than anything you have ever seen. Our plan was to grow, and train, and become strong, and become one, and fight them. But they found us and started hunting us first. Now all of us are running. They caught Number One in Malaysia. Number Two in England. And Number Three in Kenya. They killed them all. I am Number Four. I am next.", bookImg:"https://images-na.ssl-images-amazon.com/images/I/71n7qBsjZaL.jpg"},
    {currentQuestion: "Do you want to read about a Family or a Fight for Survival?", answer1Text: "Family", answer2Text: "Fight for Survival", answer1Pointer:11, answer2Pointer:12, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "Savy", bookAuthor:"Ingrid Law", bookDesc:"Thirteen is when a Beaumont's savvy hits--and with one brother who causes hurricanes and another who creates electricity, Mibs Beaumont is eager to see what she gets. But just before the big day, Poppa is in a terrible accident. And now all Mibs wants is a savvy that will save him. In fact, Mibs is so sure she'll get a powerful savvy that she sneaks a ride to the hospital on a rickety bus with her sibling and the preacher's kids in tow. After this extraordinary adventure--full of talking tattoos and a kidnapping--not a soul on board will ever be the same.", bookImg:"https://books.google.com/books/publisher/content?id=SUGLDQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0mNNZHGg48xpNvNJu0I-CALukVmg&w=1280"},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "Gone", bookAuthor:"Michael Grant", bookDesc:"In the blink of an eye, everyone disappears. Gone. Except for the young. There are teens, but not one single adult. Just as suddenly, there are no phones, no internet, no television. No way to get help. And no way to figure out what's happened. Hunger threatens. Bullies rule. A sinister creature lurks. Animals are mutating. And the teens themselves are changing, developing new talents—unimaginable, dangerous, deadly powers—that grow stronger by the day.It's a terrifying new world. Sides are being chosen, a fight is shaping up. Townies against rich kids. Bullies against the weak. Powerful against powerless. And time is running out: on your birthday, you disappear just like everyone else. . . .", bookImg:"https://books.google.com/books/content?id=apS34mdVym0C&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1X29wZMwgBjS1bBBISQgbj-h5xrQ&w=1280"},
    {currentQuestion: "Do you want to read a book with or without Dragons?", answer1Text: "With Dragons", answer2Text: "Without Dragons", answer1Pointer:14, answer2Pointer:17, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: "Do you want to read a book with the perspective of people or dragons?", answer1Text: "Perspective of People", answer2Text: "Perspective of Dragons", answer1Pointer:15, answer2Pointer:16, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "Eon", bookAuthor:"Alison Goodman", bookDesc:"Sixteen-year-old Eon has a dream, and a mission. For years, he's been studying sword-work and magic, toward one end. He and his master hope that he will be chosen as a Dragoneye-an apprentice to one of the twelve energy dragons of good fortune. But Eon has a dangerous secret. He is actually Eona, a sixteen-year-old girl who has been masquerading as a twelve-year-old boy. Females are forbidden to use Dragon Magic; if anyone discovers she has been hiding in plain sight, her death is assured. When Eon's secret threatens to come to light, she and her allies are plunged into grave danger and a deadly struggle for the Imperial throne. Eon must find the strength and inner power to battle those who want to take her magic...and her life.", bookImg:"https://images-na.ssl-images-amazon.com/images/I/910nyI8UxeL.jpg"},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "The Dragonet Prophecy", bookAuthor:"Tui T. Sutherland", bookDesc:"Clay has lived his whole life under the mountain. The MudWing dragonet knows war is raging between the dragon tribes in the world outside - a war that he and four other dragonets are destined to end, according to the mysterious prophecy they have been taught. The five 'chosen' dragonets were stolen from their homes while they were still in their eggs - and hidden away for years - all to fulfill the prophecy. But not every dragonet wants a destiny. And when danger threatens one of their own, Clay and his friends may choose freedom over fate ... leave the mountain ... and set the dragon world on a course that no one could have predicted", bookImg:"https://images-na.ssl-images-amazon.com/images/I/91kwXlB6x9L.jpg"},
    {currentQuestion: "Do you want to read a book about a new universe or a medieval times?", answer1Text: "New Universe", answer2Text: "Medieval", answer1Pointer:18, answer2Pointer:19, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "Door to Infernia", bookAuthor:"Rishab Borah", bookDesc:"On a winter break from school that should have been nothing but goofing around with his best friends, teenager Khioneus Nevula soon realizes his recent peculiar dreams and visions are cries of help from the strange, mystical, parallel world of Elkloria, whose inhabitants need his special powers to survive. Adopted from unknown parentage, he has always been marked as different by his purple eyes. Now he begins to understand who he really is, and what he must do: open the door to Inferna to save the people of Elkloria. In the mystical land of Elkloria, he meets his twin sister, a proficient mage, a slightly mad scientist, and a princess. In this land, Khioneus is a prince, and he finds himself and his new friends caught in a war between the inhabitants of Elkloria and an ancient and powerful evil.", bookImg:"https://i5.walmartimages.com/asr/a67558bb-b8f0-4af2-a796-eea53025ffa1.2713befb7df72a98a929f51311f60e34.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "The Ruins of Gorlan", bookAuthor:"John Flanagan", bookDesc:"They have always scared him in the past—the Rangers, with their dark cloaksand shadowy ways. The villagers believe the Rangers practice magic that makes them invisible to ordinary people. And now 15-year-old Will, always small for his age, has been chosen as a Ranger's apprentice. What he doesn't yet realize is that the Rangers are the protectors of the kingdom. Highly trained in the skills of battle and surveillance, they fight the battles before the battles reach the people. And as Will is about to learn, there is a large battle brewing. The exiled Morgarath, Lord of the Mountains of Rain and Night, is gathering his forces for an attack on the kingdom. This time, he will not be denied.... Here is the fantasy adventure that launched the Ranger's Apprentice series, an epic story of heroes and villains that has become an international phenomenon. Perfect for fans of J.R.R. Tolkien’s Lord of the Rings, T.H. White’s The Sword in the Stone, Christopher Paolini’s Eragon series, and George R. R. Martin’s Game of Thrones / A Song of Ice and Fire series.", bookImg:"https://books.google.com/books/content?id=1aEN0xBnQnAC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1208zgJeWmZUSzoC79GrSPR3EsWw&w=1280"},
    {currentQuestion: "Do you want to read about Survival or Daily Life?", answer1Text: "Survival", answer2Text: "Daily Life", answer1Pointer:21, answer2Pointer:22, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "Raft", bookAuthor:"S. A. Bodeen", bookDesc:"Robie is an experienced traveler. She's taken the flight from Honolulu to the Midway Atoll, a group of Pacific islands where her parents live, many times. When she has to get to Midway in a hurry after a visit with her aunt in Hawaii, she gets on the next cargo flight at the last minute. She knows the pilot, but on this flight, there's a new co-pilot named Max. All systems are go until a storm hits during the flight. The only passenger, Robie doesn't panic until the engine suddenly cuts out and Max shouts at her to put on a life jacket. They are over miles of Pacific Ocean. She sees Max struggle with a raft.And then . . . she's in the water. Fighting for her life. Max pulls her onto the raft, and that's when the real terror begins. They have no water. Their only food is a bag of Skittles. There are sharks. There is an island. But there's no sign of help on the way.", bookImg:"https://books.google.com/books/content?id=oJE5XHWs7xoC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1fsfDMA7thg97Go9KJ8xZItiyOUQ&w=1280"},
    {currentQuestion: "Do you want to read about a Trivia Game or a Religeous Crime?", answer1Text: "Trivia Game", answer2Text: "Religeous Crime", answer1Pointer:23, answer2Pointer:24, bookTitle:null, bookAuthor:null, bookDesc:null, bookImg:null},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "No Fixed Address", bookAuthor:"Susin Nielsen", bookDesc:"Twelve-and-three-quarter-year-old Felix Knutsson has a knack for trivia. His favorite game show is Who What Where When; he even named his gerbil after the host. Felix's mom, Astrid, is loving but can't seem to hold on to a job. So when they get evicted from their latest shabby apartment, they have to move into a van. Astrid swears him to secrecy; he can't tell anyone about their living arrangement, not even Dylan and Winnie, his best friends at his new school. If he does, she warns him, he'll be taken away from her and put in foster care. As their circumstances go from bad to worse, Felix gets a chance to audition for a junior edition of Who What Where When, and he's determined to earn a spot on the show. Winning the cash prize could make everything okay again. But things don't turn out the way he expects. . . .", bookImg:"https://images3.penguinrandomhouse.com/cover/9781524768379"},
    {currentQuestion: null, answer1Text: null, answer2Text: null, answer1Pointer:null, answer2Pointer:null, bookTitle: "Linked", bookAuthor:"Gordon Korman", bookDesc:"Link, Michael, and Dana live in a quiet town. But it's woken up very quickly when someone sneaks into school and vandalizes it with a swastika.Nobody can believe it. How could such a symbol of hate end up in the middle of their school? Who would do such a thing? Because Michael was the first person to see it, he's the first suspect. Because Link is one of the most popular guys in school, everyone's looking to him to figure it out. And because Dana's the only Jewish girl in the whole town, everyone's treating her more like an outsider than ever. The mystery deepens as more swastikas begin to appear. Some students decide to fight back and start a project to bring people together instead of dividing them further. The closer Link, Michael, and Dana get to the truth, the more there is to face-not just the crimes of the present, but the crimes of the past.", bookImg:"https://books.google.com/books/publisher/content?id=DbsEEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U28jvLlXH0_UcqteVW2vUd0v_DlnA&w=1280"},
  ];
  var [state, setState] = useState(tree[0]);

  function getData(numberPointer) {
    return tree[numberPointer];
  }

  var reset = () => {
    var data = getData(0);
    setState({
      currentQuestion: data.currentQuestion, 
      answer1Text: data.answer1Text, 
      answer2Text: data.answer2Text, 
      answer1Pointer: data.answer1Pointer, 
      answer2Pointer: data.answer2Pointer,
      bookTitle: data.bookTitle, 
      bookAuthor: data.bookAuthor, 
      bookDesc: data.bookDesc,
      bookImg: data.bookImg
    });
  }

  var answered = (number) => {
    var data;
    
    if (number === 1) {
      data = getData(state.answer1Pointer);
      setState({
        currentQuestion: data.currentQuestion, 
        answer1Text: data.answer1Text, 
        answer2Text: data.answer2Text, 
        answer1Pointer: data.answer1Pointer, 
        answer2Pointer: data.answer2Pointer,
        bookTitle: data.bookTitle, 
        bookAuthor: data.bookAuthor, 
        bookDesc: data.bookDesc,
        bookImg: data.bookImg
      });
    } else if (number === 2) {
      data = getData(state.answer2Pointer);
      setState({
        currentQuestion: data.currentQuestion, 
        answer1Text: data.answer1Text, 
        answer2Text: data.answer2Text, 
        answer1Pointer: data.answer1Pointer, 
        answer2Pointer: data.answer2Pointer,
        bookTitle: data.bookTitle, 
        bookAuthor: data.bookAuthor, 
        bookDesc: data.bookDesc,
        bookImg: data.bookImg
      });
    }
  }

  if (state.bookTitle == null) {
    return (
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
        <QuestionNode questionText={state.currentQuestion} answer1={state.answer1Text} answer2={state.answer2Text} answer={answered} />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </div>
    );
  } else {
    return (
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
        <BookNode bookTitle={state.bookTitle} bookAuthor={state.bookAuthor} bookDesc={state.bookDesc} bookImg={state.bookImg} resetFunc={reset} />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </div>
    );
  }
}

export default App;
