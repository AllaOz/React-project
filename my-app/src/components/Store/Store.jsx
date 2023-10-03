import { makeObservable, observable, action, runInAction } from 'mobx';

class WordStore {
  wordData = [];

  constructor() {
    makeObservable(this, {
      wordData: observable,
      fetchWords: action,
    });
  }

  async fetchWords() {
    try {
      const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();

      runInAction(() => {
        this.wordData = data;
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}

const wordStore = new WordStore();
export default wordStore;
