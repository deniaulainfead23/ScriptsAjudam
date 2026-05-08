# IMPORTANTE – Limitações sobre Pastas Compartilhadas no Google Drive

Antes de executar o organizador automático do Google Drive, é fundamental entender como o Google Apps Script funciona em relação a arquivos compartilhados.

---

# O que o script consegue organizar

O script organiza normalmente:

✔ Arquivos do próprio usuário
✔ Pastas criadas pelo usuário
✔ Arquivos dentro do “Meu Drive”
✔ Pastas adicionadas ao “Meu Drive” com permissão de edição

---

# O que o script NÃO organiza automaticamente

O script NÃO acessa automaticamente:

❌ “Compartilhados comigo”
❌ Shared Drives (Drives Compartilhados institucionais)
❌ Arquivos sem permissão de edição
❌ Pastas corporativas protegidas
❌ Alguns atalhos do Google Drive

---

# Por que isso acontece

O Google Apps Script tradicional utiliza:

```javascript
DriveApp.getRootFolder()
```

Esse método acessa principalmente:

```text
Meu Drive
```

e não toda a estrutura de compartilhamentos do Google Workspace.

---

# Como organizar pastas compartilhadas corretamente

Se quiser organizar materiais compartilhados, faça primeiro:

## 1. Abrir “Compartilhados comigo”

No Google Drive:

```text
Compartilhados comigo
```

---

## 2. Adicionar ao Meu Drive

Clique com botão direito na pasta compartilhada:

```text
Adicionar atalho ao Drive
```

ou:

```text
Organizar → Meu Drive
```

---

## 3. Criar uma pasta de importação

Exemplo:

```text
00_IMPORTADOS
```

---

## 4. Mover os materiais compartilhados para lá

Somente depois execute o organizador.

---

# Estratégia recomendada

A forma mais segura é:

```text
Meu Drive
├── 00_IMPORTADOS
├── 01_ADMINISTRATIVO
├── 02_ACADEMICO
├── ...
```

Assim:

* o script consegue acessar os arquivos;
* os compartilhamentos não são quebrados;
* evita erros de permissão;
* evita mover arquivos institucionais indevidamente.

---

# Atenção sobre Shared Drives institucionais

Drives compartilhados institucionais da universidade normalmente possuem:

* permissões especiais;
* regras administrativas;
* restrições do Google Workspace.

O script padrão NÃO deve ser executado diretamente nesses ambientes sem autorização técnica.

---

# Recomendação de segurança

Antes de organizar o Drive inteiro:

✔ Teste em uma pasta pequena
✔ Revise os logs
✔ Faça backup de materiais importantes
✔ Verifique permissões de compartilhamento

---

# Resumo rápido

| Tipo de conteúdo       | Script padrão acessa? |
| ---------------------- | --------------------- |
| Meu Drive              | ✔ Sim                 |
| Arquivos próprios      | ✔ Sim                 |
| Pastas próprias        | ✔ Sim                 |
| Compartilhados comigo  | ❌ Não automaticamente |
| Shared Drives          | ❌ Não por padrão      |
| Arquivos sem permissão | ❌ Não                 |

---

# Melhor prática

O ideal é:

1. importar para “Meu Drive” o que deseja organizar;
2. executar o organizador apenas nas suas estruturas;
3. manter arquivos institucionais compartilhados separados.
