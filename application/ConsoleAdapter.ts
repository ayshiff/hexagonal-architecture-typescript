import { IRequestVerses } from "../domain/IRequestVerses";
import { IWriteLines } from "./IWriteLines";

class ConsoleAdapter {
  private poetryReader: IRequestVerses;
  private publicationStrategy: IWriteLines;

  constructor(poetryReader, publicationStrategy) {
    this.poetryReader = poetryReader;
    this.publicationStrategy = publicationStrategy;
  }

  public ask() {
    const verses = this.poetryReader.giveMeSomePoetry();
    this.publicationStrategy.writeLine(verses);
  }
}

export default ConsoleAdapter;
