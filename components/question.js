export default class Question {
    constructor(question) {
        this.question = question;
        this.response = "";
    }

    setResponse(r) {
        this.response = r;
    }
}