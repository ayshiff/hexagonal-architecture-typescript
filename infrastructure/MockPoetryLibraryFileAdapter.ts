import { IObtainPoems } from "../domain/IObtainPoems";

class MockPoetryLibraryFileAdapter implements IObtainPoems {
  private poem: string;

  constructor(poemContent) {
    this.poem = poemContent;
  }

  public getMeAPoem() {
    return this.poem;
  }
}

export default MockPoetryLibraryFileAdapter;
