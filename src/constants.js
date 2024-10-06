export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  ruby: "3.0.1",
  go: "1.16.2",
  swift: "5.3.3",  
  kotlin: "1.8.20",  
  rust: "1.68.2",  
  dart: "2.19.6",
  scala: "3.2.2",  
};


export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp: 'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Alex';\necho $name;\n",
  ruby: `\ndef greet(name)\n\tputs "Hello, #{name}!"\nend\n\ngreet("Alex")\n`,
  r: `\ngreet <- function(name) {\n\tcat("Hello, ", name, "!\n", sep = "")\n}\n\ngreet("Alex")\n`,
  go: `\npackage main\n\nimport "fmt"\n\nfunc greet(name string) {\n\tfmt.Println("Hello,", name + "!")\n}\n\nfunc main() {\n\tgreet("Alex")\n}\n`,
  swift: `\nfunc greet(name: String) {\n\tprint("Hello, \\(name)!")\n}\n\ngreet(name: "Alex")\n`,
  kotlin: `\nfun greet(name: String) {\n\tprintln("Hello, $name!")\n}\n\ngreet("Alex")\n`,
  rust: `\nfn greet(name: &str) {\n\tprintln!("Hello, {}!", name);\n}\n\ngreet("Alex");\n`,
  dart: `\nvoid greet(String name) {\n\tprint('Hello, \$name!');\n}\n\ngreet('Alex');\n`,
  scala: `\nobject HelloWorld {\n\tdef greet(name: String): Unit = {\n\t\tprintln(s"Hello, $name!")\n\t}\n\ngreet("Alex")\n}\n`,
};
