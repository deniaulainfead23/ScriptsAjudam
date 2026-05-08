function organizarPastaUNIG() {

  const ID_PASTA = "ID_PASTA_UNIG";

  const pastaOrigem = DriveApp.getFolderById(ID_PASTA_UNIG);

  const regras = [
    {
      pasta: "Capacitação",
      palavras: ["capacitação", "capacitacao", "curso", "certificado", "evento", "palestra"]
    },
    {
      pasta: "Aulas",
      palavras: ["aula", "aulas", "gravada", "gravadas", "presencial", "classroom", "meet recordings"]
    },
    {
      pasta: "Avaliações",
      palavras: ["avaliação", "avaliacao", "forms", "prova", "rascunho", "integrada", "ciclo"]
    },
    {
      pasta: "Turmas",
      palavras: ["turma", "ctcii", "tc", "ct", "prod", "eng", "vpe", "vpl"]
    },
    {
      pasta: "PIC",
      palavras: ["pic", "iniciação científica", "iniciacao cientifica"]
    },
    {
      pasta: "NEAD",
      palavras: ["nead", "ead"]
    },
    {
      pasta: "Eventos",
      palavras: ["evento", "inovação", "inovacao", "bi", "tecnologia"]
    },
    {
      pasta: "Diagramas",
      palavras: ["diagrama", "drawio"]
    }
  ];

  organizarItensDaPasta(pastaOrigem, regras);

  Logger.log("Organização concluída.");
}

function organizarItensDaPasta(pastaOrigem, regras) {

  // Organiza arquivos
  const arquivos = pastaOrigem.getFiles();

  while (arquivos.hasNext()) {
    const arquivo = arquivos.next();
    const nomeArquivo = arquivo.getName().toLowerCase();

    for (let i = 0; i < regras.length; i++) {
      const regra = regras[i];

      if (contemPalavra(nomeArquivo, regra.palavras)) {
        const pastaDestino = obterOuCriarPasta(pastaOrigem, regra.pasta);
        arquivo.moveTo(pastaDestino);

        Logger.log("Arquivo movido: " + arquivo.getName() + " → " + regra.pasta);
        break;
      }
    }
  }

  // Organiza pastas
  const pastas = pastaOrigem.getFolders();

  while (pastas.hasNext()) {
    const pasta = pastas.next();
    const nomePasta = pasta.getName().toLowerCase();

    // Evita mover as próprias pastas principais
    if (ehPastaPrincipal(nomePasta, regras)) {
      continue;
    }

    for (let i = 0; i < regras.length; i++) {
      const regra = regras[i];

      if (contemPalavra(nomePasta, regra.palavras)) {
        const pastaDestino = obterOuCriarPasta(pastaOrigem, regra.pasta);
        pasta.moveTo(pastaDestino);

        Logger.log("Pasta movida: " + pasta.getName() + " → " + regra.pasta);
        break;
      }
    }
  }
}

function contemPalavra(nome, palavras) {
  for (let i = 0; i < palavras.length; i++) {
    if (nome.includes(palavras[i].toLowerCase())) {
      return true;
    }
  }
  return false;
}

function obterOuCriarPasta(pastaPai, nomePasta) {
  const pastas = pastaPai.getFoldersByName(nomePasta);

  if (pastas.hasNext()) {
    return pastas.next();
  }

  return pastaPai.createFolder(nomePasta);
}

function ehPastaPrincipal(nomePasta, regras) {
  for (let i = 0; i < regras.length; i++) {
    if (nomePasta === regras[i].pasta.toLowerCase()) {
      return true;
    }
  }
  return false;
}
