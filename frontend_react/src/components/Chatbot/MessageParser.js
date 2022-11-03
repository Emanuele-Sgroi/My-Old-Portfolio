class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const userInput = message.toLowerCase().trim();
    const nothing = null;

    if (
      userInput.includes("hello") ||
      userInput.includes("hi") ||
      userInput.includes("ciao") ||
      userInput.includes("hola") ||
      userInput.includes("good afternoon") ||
      userInput.includes("good evening")
    ) {
      this.actionProvider.greet();
    } else if (
      userInput.includes("good morning") ||
      userInput.includes("goodmorning") ||
      userInput.includes("morning")
    ) {
      this.actionProvider.goodMorning();
    } else if (
      userInput.includes("good night") ||
      userInput.includes("goodnight")
    ) {
      this.actionProvider.goodNight();
    } else if (userInput.includes("goodbye") || userInput.includes("bye")) {
      this.actionProvider.goodBye();
    } else if (
      userInput.includes("how are you") ||
      userInput.includes("How are you doing") ||
      userInput.includes("you doing") ||
      userInput.includes("have you been") ||
      userInput.includes("is everything")
    ) {
      this.actionProvider.howAreYou();
    } else if (userInput.includes("sport")) {
      this.actionProvider.sport();
    } else if (
      userInput.includes("football") ||
      userInput.includes("footballer") ||
      userInput.includes("player")
    ) {
      this.actionProvider.football();
    } else if (userInput.includes("juventus")) {
      this.actionProvider.juventus();
    } else if (
      userInput.includes("programming") ||
      userInput.includes("it") ||
      userInput.includes("computer science") ||
      userInput.includes("coding") ||
      userInput.includes("software engineering") ||
      userInput.includes("software engineer") ||
      userInput.includes("software")
    ) {
      this.actionProvider.coding();
    } else if (
      userInput.includes("frontend") ||
      userInput.includes("front end") ||
      userInput.includes("front-end") ||
      userInput.includes("back end") ||
      userInput.includes("back-end") ||
      userInput.includes("backend") ||
      userInput.includes("full stack") ||
      userInput.includes("full-stack") ||
      userInput.includes("fullstack")
    ) {
      this.actionProvider.fullstack();
    } else if (userInput.includes("javascript") || userInput.includes("js")) {
      this.actionProvider.javascript();
    } else if (userInput.includes("python")) {
      this.actionProvider.python();
    } else if (
      userInput.includes("react") ||
      userInput.includes("reactjs") ||
      userInput.includes("react.js")
    ) {
      this.actionProvider.react();
    } else if (userInput.includes("java")) {
      this.actionProvider.java();
    } else if (userInput.includes("html") || userInput.includes("xml")) {
      this.actionProvider.easy();
    } else if (
      userInput.includes("css") ||
      userInput.includes("scss") ||
      userInput.includes("sass")
    ) {
      this.actionProvider.css();
    } else if (
      userInput.includes("node") ||
      userInput.includes("nodejs") ||
      userInput.includes("node.js") ||
      userInput.includes("typescript") ||
      userInput.includes("express") ||
      userInput.includes("expressjs")
    ) {
      this.actionProvider.node();
    } else if (userInput.includes("sql") || userInput.includes("database")) {
      this.actionProvider.sql();
    } else if (
      userInput.includes("C") ||
      userInput.includes("c++") ||
      userInput.includes("c#") ||
      userInput.includes("ruby") ||
      userInput.includes("flutter") ||
      userInput.includes("php") ||
      userInput.includes("shell")
    ) {
      this.actionProvider.unkownLanguages();
    } else if (
      userInput.includes("how old are you") ||
      userInput.includes("age") ||
      userInput.includes("your age")
    ) {
      this.actionProvider.howOldAreYou();
    } else if (
      userInput.includes("where are you from") ||
      userInput.includes("nationality") ||
      userInput.includes("country")
    ) {
      this.actionProvider.nationality();
    } else if (
      userInput.includes("birthday") ||
      userInput.includes("bday") ||
      userInput.includes("b-day")
    ) {
      this.actionProvider.birthday();
    } else if (userInput.includes("ok")) {
      this.actionProvider.ok();
    } else if (
      userInput.includes("what is your name") ||
      userInput.includes("name") ||
      userInput.includes("what's your name") ||
      userInput.includes("your name")
    ) {
      this.actionProvider.myName();
    } else if (
      userInput.includes("your projects") ||
      userInput.includes("projects") ||
      userInput.includes("portfolio") ||
      userInput.includes("work") ||
      userInput.includes("work")
    ) {
      this.actionProvider.myProjects();
    } else if (userInput.includes("contact") || userInput.includes("email")) {
      this.actionProvider.contact();
    } else if (userInput.includes("experience")) {
      this.actionProvider.handleExperience();
    } else if (
      userInput.includes("about") ||
      userInput.includes("about me") ||
      userInput.includes("about you")
    ) {
      this.actionProvider.handleAboutMe();
    } else if (
      userInput.includes("skills") ||
      userInput.includes("your skills")
    ) {
      this.actionProvider.handleSkills();
    } else if (
      userInput.includes("this project") ||
      userInput.includes("project") ||
      userInput.includes("website") ||
      userInput.includes("this website") ||
      userInput.includes("about this website")
    ) {
      this.actionProvider.handleThisProject();
    } else if (
      userInput.includes("photo") ||
      userInput.includes("picture") ||
      userInput.includes("photos") ||
      userInput.includes("pictures") ||
      userInput.includes("photo of you") ||
      userInput.includes("picture of you") ||
      userInput.includes("selfie")
    ) {
      this.actionProvider.photo();
    } else {
      this.actionProvider.handleElse();
    }
  }
}

export default MessageParser;
