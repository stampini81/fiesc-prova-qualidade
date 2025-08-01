describe('Teste E2E para a Aplicação de Lista de Tarefas', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve carregar a página e exibir o título principal', () => {
    cy.get('h1').should('contain', 'Minha Lista de Tarefas');
  });

  it('Deve adicionar uma nova tarefa com sucesso', () => {
    const novaTarefa = 'Aprender a testar com Cypress';
    cy.get('#task-input').type(novaTarefa);
    cy.get('#add-task-btn').click();
    cy.get('#task-list').should('contain', novaTarefa);
  });

  it('Deve marcar uma tarefa como concluída', () => {
    const tarefaParaConcluir = 'Apresentar o projeto';
    cy.get('#task-input').type(tarefaParaConcluir);
    cy.get('#add-task-btn').click();
    cy.contains('.task-item', tarefaParaConcluir)
      .find('input[type="checkbox"]')
      .click();
    cy.contains('.task-item', tarefaParaConcluir).should('have.class', 'completed');
  });

  it('Deve deletar uma tarefa', () => {
    const tarefaParaDeletar = 'Fazer o commit final';
    cy.get('#task-input').type(tarefaParaDeletar);
    cy.get('#add-task-btn').click();
    cy.get('#task-list').should('contain', tarefaParaDeletar);
    cy.contains('.task-item', tarefaParaDeletar)
      .find('.delete-btn')
      .click();
    cy.get('#task-list').should('not.contain', tarefaParaDeletar);
  });
});
