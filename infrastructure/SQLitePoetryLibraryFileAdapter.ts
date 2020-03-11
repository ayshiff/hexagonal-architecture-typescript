import { IObtainPoems } from "../domain/IObtainPoems";
const sqlite = require("better-sqlite3");

class SQLitePoetryLibraryFileAdapter implements IObtainPoems {
  private db: any;

  constructor(filePath: string) {
    this.db = new sqlite(filePath);
  }

  public getMeAPoem() {
    return this.db
      .prepare(
        `SELECT * FROM Poems WHERE rowid = abs(random()) % (SELECT max(rowid) FROM Poems) + 1;`
      )
      .all()[0].Content;
  }
}

export default SQLitePoetryLibraryFileAdapter;
