const fs = require("fs");
const path = require("path");

// ↓ Criar uma pasta ↓
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// ↓ Criar um arquivo (somente o arquivo, sem as pastas) ou sobrescreve algum arquivo existente ↓
fs.writeFile(
  path.join(__dirname, "test", "test.html"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");
  }
);

// ↓ Adicionar algum conteúdo a um arquivo ↓
fs.appendFile(
  path.join(__dirname, "test", "test.html"),
  "hello world!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo modificado com sucesso!");
  }
);

// ↓ Ler um arquivo ↓
fs.readFile(
  path.join(__dirname, "test", "test.html"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log(data);
  }
);
