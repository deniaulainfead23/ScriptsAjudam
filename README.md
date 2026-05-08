# ScriptsAjudam – Organizador Inteligente para Google Drive

Sistema desenvolvido em Google Apps Script para auxiliar na organização automática de arquivos e pastas dentro do Google Drive.

O projeto utiliza regras baseadas em palavras-chave para identificar conteúdos acadêmicos, administrativos e pessoais, movendo-os automaticamente para pastas apropriadas.

---

# Objetivo do Projeto

O objetivo deste script é automatizar a organização do Google Drive, reduzindo tempo gasto com:

* separação manual de arquivos;
* organização de documentos acadêmicos;
* categorização de evidências;
* estruturação de materiais didáticos;
* gestão de turmas e avaliações;
* organização de documentos institucionais.

---

# Funcionalidades

O sistema consegue:

✔ Criar pastas automaticamente
✔ Criar subpastas
✔ Organizar arquivos por nome
✔ Organizar arquivos por palavras-chave
✔ Organizar pastas inteiras
✔ Ignorar arquivos sem regra definida
✔ Manter arquivos desconhecidos no local original
✔ Funcionar com Google Drive pessoal ou institucional

---

# Estrutura Utilizada

Exemplo de organização automática:

```text
UNIG
├── Capacitação
├── Aulas
├── Avaliações
├── Turmas
├── PPC
├── NDE
├── Colegiado
├── Eventos
├── Diagramas
└── PIC
```

---

# Tecnologias Utilizadas

* Google Apps Script
* JavaScript
* Google Drive API (nativa do Apps Script)

---

# Como Utilizar

# 1. Criar uma pasta principal no Google Drive

Exemplo:

```text
UNIG
```

Coloque dentro dela:

* arquivos;
* documentos;
* pastas;
* materiais acadêmicos.

---

# 2. Abrir o Google Apps Script

Acesse:

https://script.google.com

ou:

Google Drive → Novo → Mais → Google Apps Script

---

# 3. Criar um novo projeto

Nome sugerido:

```text
OrganizadorDrive
```

---

# 4. Criar um arquivo `.gs`

Exemplo:

```text
organizarDrive.gs
```

---

# 5. Colar o código do projeto

Cole o conteúdo do script dentro do arquivo `.gs`.

---

# 6. Obter o ID da pasta

Abra a pasta no Drive.

A URL ficará parecida com:

```text
https://drive.google.com/drive/folders/1ABCxyz123
```

Copie apenas:

```text
1ABCxyz123
```

---

# 7. Inserir o ID no código

Localize:

```javascript
const ID_PASTA_UNIG = "COLE_AQUI_O_ID_DA_PASTA_UNIG";
```

Substitua pelo ID real da pasta.

---

# 8. Salvar o projeto

Clique em:

```text
Salvar
```

ou:

```text
Ctrl + S
```

---

# 9. Executar o script

Selecione:

```text
organizarPastaUNIG
```

Clique em:

```text
Executar
```

---

# 10. Autorizar permissões

Na primeira execução:

1. Clique em “Review permissions”
2. Escolha sua conta Google
3. Clique em:

   * Avançado
   * Ir para o projeto
   * Permitir

Essas permissões são necessárias para:

* ler arquivos;
* mover arquivos;
* criar pastas.

---

# Como Funciona

O script analisa:

* nomes de arquivos;
* nomes de pastas.

Depois compara com regras internas.

Exemplo:

| Palavra encontrada | Pasta destino |
| ------------------ | ------------- |
| avaliação          | Avaliações    |
| prova              | Avaliações    |
| aula               | Aulas         |
| certificado        | Capacitação   |
| nde                | NDE           |
| colegiado          | Colegiado     |
| pic                | PIC           |

---

# Segurança

Arquivos que NÃO correspondem a nenhuma regra:

✔ NÃO são apagados
✔ NÃO são alterados
✔ permanecem no local original

---

# Exemplo de Organização

Antes:

```text
UNIG
├── AulaPresencial_2026
├── Avaliação CICLO 1
├── Certificado_Evento.pdf
├── Ata_NDE.docx
├── Diagrama.drawio
```

Depois:

```text
UNIG
├── Aulas
│   └── AulaPresencial_2026
│
├── Avaliações
│   └── Avaliação CICLO 1
│
├── Capacitação
│   └── Certificado_Evento.pdf
│
├── NDE
│   └── Ata_NDE.docx
│
├── Diagramas
│   └── Diagrama.drawio
```

---

# Execução Automática

O Google Apps Script permite automatizar execuções.

Para isso:

1. Abra “Triggers”
2. Adicione um acionador
3. Escolha:

   * função: `organizarPastaUNIG`
   * tipo: Time-driven
   * frequência: diária

Assim o Drive será organizado automaticamente.

---

# Recomendações

✔ Testar primeiro com poucos arquivos
✔ Utilizar cópias de segurança
✔ Revisar logs após execução
✔ Criar regras específicas para evitar ambiguidades

---

# Estrutura Recomendada para Instituições

```text
UNIG
├── PPC
├── NDE
├── Colegiado
├── CPA
├── Capacitação
├── Turmas
├── Aulas
├── Avaliações
├── Eventos
├── PIC
└── Extensão
```

---

# Melhorias Futuras

Possíveis evoluções do projeto:

* interface gráfica;
* painel web;
* organização por IA;
* classificação automática por conteúdo;
* integração com Gemini/OpenAI;
* geração de relatórios;
* detecção de duplicados;
* indexação inteligente;
* organização por ano/período/disciplina.

---

# Licença

Projeto de uso acadêmico e educacional.

---

# Autor

Denise Moraes do Nascimento Vieira

Pesquisadora, docente e coordenadora na área de Tecnologia da Informação, Educação Digital e Humanidades Digitais.
