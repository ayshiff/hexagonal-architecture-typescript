import TxtPoetryLibraryFileAdapter from "./infrastructure/TxtPoetryLibraryFileAdapter";
import PoetryReader from "./domain/poetryReader";
import ConsoleAdapter from "./application/ConsoleAdapter";
import SQLitePoetryLibraryFileAdapter from "./infrastructure/SQLitePoetryLibraryFileAdapter";

// For this example we don't use any dependency injection.

// Instantiate the right-part txt adapter (infrastructure)
const fileAdapter = new TxtPoetryLibraryFileAdapter("./data/Rimbaud.txt");

// Instantiate the right-part sql adapter (infrastructure)
const fileAdapterSQLite = new SQLitePoetryLibraryFileAdapter(
  __dirname + "/data/Poems.db"
);

// Instantiate the business logic (domain)
const poetryReader = new PoetryReader(fileAdapterSQLite);

const consolePort = {
  writeLine: arg => {
    console.log(arg);
  }
};

// Instantiate the left-part adapter (application)
const consoleAdapter = new ConsoleAdapter(poetryReader, consolePort);

consoleAdapter.ask();
