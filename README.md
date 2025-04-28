# Task Manager

## Descricao

Task Manager é um aplicativo mobile desenvolvido em React Native com TypeScript para gerenciamento de tarefas. Ele permite criar, visualizar, atualizar e excluir tarefas de forma simples e intuitiva. O aplicativo foi projetado para rodar em dispositivos Android e foi testado utilizando o emulador do Android Studio.

## Funcionalidades

- **Adicionar Tarefas**: Crie novas tarefas com título e descrição.
- **Listar Tarefas**: Visualize todas as tarefas em uma lista organizada.
- **Editar Tarefas**: Atualize os detalhes de tarefas existentes.
- **Excluir Tarefas**: Remova tarefas que não são mais necessárias.
- **Interface Intuitiva**: Design simples e responsivo para uma melhor experiência do usuário.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **TypeScript**: Linguagem utilizada para tipagem estática e maior robustez do código.
- **Android Studio**: Emulador utilizado para testes e desenvolvimento.

## Pré-requisitos

Para rodar o projeto localmente, você precisará ter instalado:

- Node.js (versão recomendada: 16.x ou superior)
- npm
- Android Studio com um emulador Android configurado
- React Native CLI

## Como Rodar o Projeto

### Clone o Repositório

```bash
git clone https://github.com/joaorafael1504/task-manager.git
cd task-manager
```

### Instale as Dependências

```bash
npm install
```

### Configure o Emulador

- Abra o Android Studio.
- Configure um dispositivo virtual (AVD) no AVD Manager.
- Inicie o emulador antes de rodar o projeto.

### Inicie o Projeto

```bash
npx react-native run-android
```

Após a compilação, o aplicativo será aberto automaticamente no emulador.

> Caso ocorra algum erro, verifique se o ambiente React Native está corretamente configurado.

## Possíveis Melhorias Futuras

- Adicionar suporte para iOS.
- Adicionar categorias ou prioridades para as tarefas.
- Incluir notificações para lembretes de tarefas.

## Autor

Desenvolvido por João Rafael.

## Licença

Este projeto está licenciado sob a MIT License.
