import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";


class TriviaDbService {

    async getQuestions() {
      // console.log('make it here?');
      // @ts-ignore
      let res = await axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
      console.log('res',res.data.results);
      
      ProxyState.questions = res.data.results.map(q => new Question(q))
      
      console.log('proxy state',ProxyState.questions);


    }

}


export const triviaDbService = new TriviaDbService()