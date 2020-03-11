import { IObtainPoems } from "../domain/IObtainPoems";
const fs = require("fs");

class TxtPoetryLibraryFileAdapter implements IObtainPoems {
  private poem: string;

  constructor(filePath: string) {
    this.poem = fs.readFileSync(filePath).toString();
  }

  public getMeAPoem() {
    return this.poem;
  }
}

export default TxtPoetryLibraryFileAdapter;
