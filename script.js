function AskMe() {
    let answers = ['magic8ball_start.png', 'magic8ball_extra.png', 'magic8ball_1.png', 'magic8ball_2.png', 'magic8ball_3.png', 'magic8ball_4.png', 'magic8ball_5.png', 'magic8ball_6.png', 'magic8ball_7.png', 'magic8ball_8.png', 'magic8ball_9.png', 'magic8ball_10.png', 'magic8ball_11.png', 'magic8ball_12.png', 'magic8ball_13.png', 'magic8ball_14.png', 'magic8ball_15.png', 'magic8ball_16.png', 'magic8ball_17.png', 'magic8ball_18.png', 'magic8ball_19.png', 'magic8ball_20.png'];

    let random = Math.floor(Math.random() * answers.length);
    console.log(random, answers[random]);

    let imgAnswers = document.getElementById("answers")
    let question = document.getElementById("askMeAQuestion")
    console.log(question.value)
    console.log("askme ran")
    if (question.value == "") {
        alert("Please enter a question!");
    } else if (question.value != "") {
        console.log(answers[random])
        imgAnswers.src = "/img/" + answers[random]
        return answers[random]
    }
}