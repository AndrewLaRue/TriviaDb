import { generateId } from "../Utils/generateId.js"


export class Question{

  constructor({category, question, correct_answer }) {
    this.id = generateId() || '',
      this.attempted = false
    this.category = category,
      this.question = question,
      this.answer = correct_answer
  }
  
  get Template() {
    return `
        <div class="col-6 col-md-2 d-flex flex-column my-card bg-dark text-light rounded elevation-3 rounded m-3 ${this.attempted ? 'disabled flip-me' : ''}">
  
          <h4 class="text-center text-secondary">${this.category}</h4>
          <p>${this.question}
          </p>
          <div class="mt-auto my-1 d-flex justify-content-between">
            <button class="btn btn-success" onclick="app.questionsController.checkTrue('${this.id}')">True</button>
            <small class="text-center text-dark">${this.answer}</small>
            <button class="btn btn-danger" onclick="app.questionsController.checkFalse('${this.id}')">False</button>
          </div>
        </div>
    `
  }



}