import antlr4 from "antlr4";
import GISGrammarLexer from "./lib/GISGrammarLexer.js";
import GISGrammarParser from "./lib/GISGrammarParser.js";
import ErrorListener from "./error/ErrorListener.js";
import GISVisitor from "./GISVisitor.js";
import store from "./store.js";

export default function parse(inputStr, debug = false) {
  const chars = new antlr4.InputStream(inputStr);
  const lexer = new GISGrammarLexer(chars);
  lexer.strictMode = false; // do not use js strictMode

  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new GISGrammarParser(tokens);

  const errorListener = new ErrorListener();
  // Do this after creating the parser and before running it
  parser.removeErrorListeners(); // Remove default ConsoleErrorListener
  parser.addErrorListener(errorListener); // Add custom error listener

  const visitor = new GISVisitor(store, debug);
  const tree = parser.parse();
  visitor.start(tree);

  return store.getLastGeneratedProduct();
}
