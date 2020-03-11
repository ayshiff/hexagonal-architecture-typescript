import TxtPoetryLibraryFileAdapter from "./infrastructure/TxtPoetryLibraryFileAdapter";
import PoetryReader from "./domain/poetryReader";
import MockPoetryLibraryFileAdapter from "./infrastructure/MockPoetryLibraryFileAdapter";
import MOCK_POEM from "./data/mock";
import ConsoleAdapter from "./application/ConsoleAdapter";
const fs = require("fs");

global.console.log = jest.fn();

describe("Test Poetry", () => {
  test("should give verses when asked for poetry with a PoetryLibrary", () => {
    const fileAdapter = new TxtPoetryLibraryFileAdapter("./data/Rimbaud.txt");
    const poetryReader = new PoetryReader(fileAdapter);
    const verse = poetryReader.giveMeSomePoetry();
    expect(verse).toBe(fs.readFileSync("./data/Rimbaud.txt").toString());
  });

  test("should give verses when asked for poetry with a mock", () => {
    const fileAdapter = new MockPoetryLibraryFileAdapter(MOCK_POEM);
    const poetryReader = new PoetryReader(fileAdapter);
    const verse = poetryReader.giveMeSomePoetry();
    expect(verse).toBe(MOCK_POEM);
  });

  test("should log verses when asked for poetry with a mock", () => {
    const fileAdapter = new MockPoetryLibraryFileAdapter(MOCK_POEM);
    const poetryReader = new PoetryReader(fileAdapter);

    const consolePort = {
      writeLine: arg => {
        console.log(arg);
      }
    };

    // Instantiate the left-part adapter (application)
    const consoleAdapter = new ConsoleAdapter(poetryReader, consolePort);
    consoleAdapter.ask();

    expect(global.console.log).toHaveBeenCalledWith(MOCK_POEM);
  });
});
