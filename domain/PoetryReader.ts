import { IObtainPoems } from "./IObtainPoems";
import { IRequestVerses } from "./IRequestVerses";

class PoetryReader implements IRequestVerses {
  private poetryLibrary: IObtainPoems;

  constructor(poetryLibrary) {
    this.poetryLibrary = poetryLibrary;
  }

  public giveMeSomePoetry() {
    return this.poetryLibrary.getMeAPoem();
  }
}

export default PoetryReader;
