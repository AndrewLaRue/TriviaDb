import { ProxyState } from "../AppState.js"





class QuestionsService{


  toggleFlip(questionId) {
    let question = ProxyState.questions.find(q => q.id == questionId)
    // @ts-ignore
    question.attempted = !question.attempted
console.log('getting here?');
    ProxyState.questions = ProxyState.questions
  }


}









export const questionsService = new QuestionsService()

