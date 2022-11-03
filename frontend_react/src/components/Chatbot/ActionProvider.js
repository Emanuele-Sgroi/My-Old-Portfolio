class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = () => {
    const greet1 = this.createChatBotMessage("Hello 🙂");
    const greet2 = this.createChatBotMessage("Hello there!");
    const greet3 = this.createChatBotMessage("Hi 🙂");
    const greetArray = [greet1, greet2, greet3];
    this.addMessageToState(
      greetArray[Math.floor(Math.random() * greetArray.length)]
    );
  };

  goodMorning = () => {
    const goodMorning = this.createChatBotMessage("Good morning 🙂");
    this.addMessageToState(goodMorning);
  };

  goodNight = () => {
    const goodNight = this.createChatBotMessage("Ok, Good night then 🙂");
    this.addMessageToState(goodNight);
  };

  goodBye = () => {
    const goodBye = this.createChatBotMessage("Bye, see you soon! 😉");
    this.addMessageToState(goodBye);
  };

  howAreYou = () => {
    const howAreYou1 = this.createChatBotMessage("Good, thanks 😄");
    const howAreYou2 = this.createChatBotMessage(
      "Everything is great, thank you 🙂"
    );
    const howAreYou3 = this.createChatBotMessage("I'm well, thanks 🙂");
    const howAreYouArray = [howAreYou1, howAreYou2, howAreYou3];
    this.addMessageToState(
      howAreYouArray[Math.floor(Math.random() * howAreYouArray.length)]
    );
  };

  sport = () => {
    const sport = this.createChatBotMessage("I like football");
    this.addMessageToState(sport);
  };

  football = () => {
    const football = this.createChatBotMessage(
      "Are you talking about football? Personally I support Juventus"
    );
    this.addMessageToState(football);
  };

  juventus = () => {
    const juventus = this.createChatBotMessage(
      "Juventus is my favourite football team"
    );
    this.addMessageToState(juventus);
  };

  coding = () => {
    const coding1 = this.createChatBotMessage(
      "I like everything related to Computer Science and IT!!!"
    );
    const coding2 = this.createChatBotMessage(
      "Love this topic!!! I studied Computer Science 🙂"
    );
    const codingArray = [coding1, coding2];
    this.addMessageToState(
      codingArray[Math.floor(Math.random() * codingArray.length)]
    );
  };

  fullstack = () => {
    const fullstack = this.createChatBotMessage(
      "I like front end as well as back end! My goal is to be FULL STACK!"
    );
    this.addMessageToState(fullstack);
  };

  javascript = () => {
    const javascript = this.createChatBotMessage(
      "I love JavaScript! It's my first programming language. I started with DOM manipulation and now I am extending my knowledge (react, node etc.."
    );
    this.addMessageToState(javascript);
  };

  python = () => {
    const python = this.createChatBotMessage(
      "I like Python, I actually used this language when I started studying algorithms"
    );
    this.addMessageToState(python);
  };

  react = () => {
    const react = this.createChatBotMessage(
      "Such as beautiful JavaScript framework! This website was created with React!!!"
    );
    this.addMessageToState(react);
  };

  java = () => {
    const java = this.createChatBotMessage(
      "I had to learn Java during my university, however I enjoy it. Now I am using Java in Android Studio"
    );
    this.addMessageToState(java);
  };

  easy = () => {
    const easy = this.createChatBotMessage("Easy...");
    this.addMessageToState(easy);
  };

  css = () => {
    const css = this.createChatBotMessage(
      "I have fun building animations with this..."
    );
    this.addMessageToState(css);
  };

  node = () => {
    const node = this.createChatBotMessage("Work in progress 🙂");
    this.addMessageToState(node);
  };

  sql = () => {
    const sql = this.createChatBotMessage(
      "I enjoy SQL and database in general"
    );
    this.addMessageToState(sql);
  };

  unkownLanguages = () => {
    const unkownLanguages = this.createChatBotMessage(
      "I don't know this programming language but I will definitely try to learn it 🙂"
    );
    this.addMessageToState(unkownLanguages);
  };

  howOldAreYou = () => {
    function calculate_age(dob) {
      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms);

      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    const sayAge = this.createChatBotMessage(
      "I'm " + calculate_age(new Date(1995, 3, 27))
    );
    this.addMessageToState(sayAge);
  };
  nationality = () => {
    const nationality = this.createChatBotMessage("I'm Italian");
    this.addMessageToState(nationality);
  };
  birthday = () => {
    const birthday = this.createChatBotMessage(
      "My birthday is the 27th March 🎂"
    );
    this.addMessageToState(birthday);
  };

  ok = () => {
    const ok = this.createChatBotMessage("ok");
    this.addMessageToState(ok);
  };

  myName = () => {
    const myName = this.createChatBotMessage("My name is Emanuele Sgroi");
    this.addMessageToState(myName);
  };

  myProjects = () => {
    const myProjects = this.createChatBotMessage(
      "This website includes a section where you can see my projects. Check it out!"
    );
    this.addMessageToState(myProjects);
  };

  contact = () => {
    const contact = this.createChatBotMessage(
      "You can contact me using the contact section of this website"
    );
    this.addMessageToState(contact);
  };

  handleExperience = () => {
    const experience = this.createChatBotMessage(
      "I used to work mainly with front-end, but now I am focusing on full-stack. I have experience building web applications with React JS but I also worked with other programming languages such as Java, Python etc...",
      {
        widget: "options",
      }
    );
    this.addMessageToState(experience);
  };

  handleAboutMe = () => {
    const aboutMe = this.createChatBotMessage(
      "I am a passionate developer with a strong interest in UI/UX and the building of functional applications. I studied Computer Science and now I'm focusing on learning more about web 3.0. I also love rap music, pizza, football, and One Piece.",
      {
        widget: "options",
      }
    );
    this.addMessageToState(aboutMe);
  };

  handleSkills = () => {
    const skills = this.createChatBotMessage(
      "My tech stack includes JavaScript, React, Java, Python, SQL etc... I also like to mention that i am skilled in design and editing with Figma, Photoshop, Illustrator...",
      {
        widget: "options",
      }
    );
    this.addMessageToState(skills);
  };

  handleThisProject = () => {
    const thisProject = this.createChatBotMessage(
      "This website was created with React JS (Front-end) and Sanity (Back-end). I also used APIs like framer-motion, react-chat-bot-kit, react-particles, and SASS. I decided to make this website an open source so everyone can use it.",
      {
        widget: "options",
      }
    );
    this.addMessageToState(thisProject);
  };

  photo = () => {
    const photo = this.createChatBotMessage("Ok, here is a picture of me", {
      widget: "photo",
    });
    this.addMessageToState(photo);
  };

  handleElse = () => {
    const handleElse1 = this.createChatBotMessage(
      "Sorry, I don't know this. Try asking something else",
      {
        widget: "options",
      }
    );
    const handleElse2 = this.createChatBotMessage(
      "I am not sure what you mean. Try asking something else",
      {
        widget: "options",
      }
    );

    const handleElseArray = [handleElse1, handleElse2];
    this.addMessageToState(
      handleElseArray[Math.floor(Math.random() * handleElseArray.length)]
    );
  };
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
