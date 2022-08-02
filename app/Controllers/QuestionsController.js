import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { triviaDbService } from "../Services/TriviaDbService.js";
import { Pop } from "../Utils/Pop.js";



function _drawQuestions() {
  let template = ''

  ProxyState.questions.forEach(q => template += q.Template)

  // @ts-ignore
  document.getElementById('question').innerHTML = template
}
function _drawCount() {

  let num = 0
  num = ProxyState.count
  // @ts-ignore
  document.getElementById('count').innerText = num

}

function _drawTotal() {
  let num = 10
  num = ProxyState.total
  // @ts-ignore
  document.getElementById('total').innerText = num
}


export class QuestionsController{


  constructor() {
    ProxyState.on('questions', _drawQuestions)
    ProxyState.on('count', _drawCount)
    ProxyState.on('total', _drawTotal)


_drawTotal()
_drawCount()
this.getQuestionsFromApi()
  }


  async newGame() {
  
    try {
      ProxyState.total += 10
      await this.getQuestionsFromApi()
    } catch (error) {
      console.error('new game', error);
    }
}



  async getQuestionsFromApi() {
    try {
      await triviaDbService.getQuestions()
    } catch (error) {
      console.error('getting questions', error);
    }
  }

  checkTrue(questionId) {
    let question = ProxyState.questions.find(q => q.id == questionId)
    console.log('question', question);
    this.toggleFlip(questionId)
    // @ts-ignore
    if (question.answer == 'True') {
      ProxyState.count++
      ProxyState.count = ProxyState.count
      console.log('thats correct');
      Pop.toast('Correct')
    } else {
      console.log('thats wrong');
      Pop.toast('Wrong')
    }
  
  }
  checkFalse(questionId) {
    let question = ProxyState.questions.find(q => q.id == questionId)
    console.log('question', question);
    this.toggleFlip(questionId)
    // @ts-ignore
    if (question.answer == 'False') {
      ProxyState.count++
      ProxyState.count = ProxyState.count
      console.log('thats correct');
      Pop.toast('Correct')
    } else {
      console.log('thats wrong');
      Pop.toast('Wrong')
    }
  
  }

  toggleFlip(questionId) {
    questionsService.toggleFlip(questionId)
  }


}