# Como usar o ChatGPT para organizar o Google Drive com Google Apps Script

## 1. Abrir o Google Drive

Acesse:

https://drive.google.com

Entre na conta Google onde estão os arquivos.

---

## 2. Tirar uma imagem da tela inicial do Drive

No Google Drive, abra:

Meu Drive

Depois tire um print mostrando:

- nomes das pastas principais;
- arquivos soltos;
- organização atual;
- materiais que parecem misturados.

No Windows, pode usar:

PrtSc  
ou  
Windows + Shift + S

---

## 3. Enviar a imagem para o ChatGPT

Envie o print e escreva:

> Quero organizar meu Google Drive. Analise esta imagem, sugira as pastas-mãe corretas e depois gere um Google Apps Script para criar as pastas e realocar arquivos e pastas por palavras-chave. O que não encontrar regra deve permanecer no local original.

---

## 4. O ChatGPT deverá analisar os nomes

A partir da imagem, ele deve identificar padrões como:

- aulas;
- avaliações;
- certificados;
- eventos;
- projetos;
- documentos pessoais;
- pesquisas;
- turmas;
- arquivos antigos;
- imagens;
- planilhas;
- relatórios.

---

## 5. Pedir a estrutura de pastas-mãe

Use este pedido:

> Crie uma estrutura profissional de pastas-mãe e subpastas para organizar meu Drive, considerando os arquivos que aparecem na imagem.

Exemplo de resposta esperada:

```text
Meu Drive
├── 01_ADMINISTRATIVO
├── 02_ACADEMICO
├── 03_AULAS
├── 04_AVALIACOES
├── 05_EVENTOS
├── 06_PESQUISA
├── 07_PROJETOS
├── 08_CERTIFICADOS
├── 09_IMAGENS
├── 10_PLANILHAS
└── 99_TEMPORARIO

6. Pedir o script

Depois peça:

Agora gere um Google Apps Script que crie essas pastas e subpastas automaticamente e mova arquivos e pastas com base em palavras-chave. Os arquivos sem correspondência devem permanecer onde estão.


7. Abrir o Google Apps Script

Acesse:

https://script.google.com

Ou pelo Drive:

Novo → Mais → Google Apps Script

8. Criar um projeto

Nome sugerido:

OrganizadorDrive
9. Colar o código

Apague o código padrão e cole o script gerado pelo ChatGPT.

10. Salvar

Clique em:

Salvar

ou use:

Ctrl + S

11. Executar primeiro em modo teste

Antes de mover tudo, peça ao ChatGPT uma versão com:

MODO_TESTE = true;

Assim o script apenas registra o que seria movido, mas não move nada.

12. Verificar os logs

No Apps Script, veja:

Execuções
ou
Executions

Confira se os arquivos seriam enviados para as pastas corretas.

13. Ativar o modo real

Depois de conferir, altere:

const MODO_TESTE = true;

para:

const MODO_TESTE = false;

Execute novamente.

14. Autorizar permissões

Na primeira execução, o Google pedirá autorização.

Clique em:

Avançado
Ir para o projeto
Permitir

Isso é necessário porque o script irá criar pastas e mover arquivos no Drive.

15. Conferir o resultado no Drive

Depois da execução, volte ao Google Drive e confira:

se as pastas foram criadas;
se os arquivos foram movidos corretamente;
se os arquivos sem regra permaneceram onde estavam.
16. Cuidados importantes

Nunca comece direto no Drive inteiro sem modo teste.

O ideal é:

testar com poucos arquivos;
revisar os logs;
ajustar palavras-chave;
só depois organizar tudo.
Pedido ideal para copiar e colar no ChatGPT

Analise este print do meu Google Drive. Quero organizar todo o Drive com Google Apps Script. Primeiro, crie uma estrutura de pastas-mãe e subpastas. Depois, gere um script que crie essas pastas automaticamente e mova arquivos e pastas por palavras-chave. O script deve ter modo teste, logs detalhados e não deve mover arquivos sem regra encontrada.


Isso ensina a pessoa desde o primeiro passo até a geração do script.
