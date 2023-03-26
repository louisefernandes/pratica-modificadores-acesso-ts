const c1 = new Conta('1', 100);
const c2 = new Conta('2');
console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();
const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
const pessoa = new Pessoa("Louise", 27, new Date(1996, 1, 23));
const pessoaFisica = new PessoaFisica("Ana", 28, new Date(1995, 2, 20), "123456");
const pessoaJuridica = new PessoaJuridica("Luiz", 23, new Date(2000, 2, 11), "123456789");
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.dataNascimento);
console.log(pessoaFisica.nome);
console.log(pessoaFisica.idade);
console.log(pessoa.dataNascimento);
console.log(pessoaFisica.cpf);
console.log(pessoaJuridica.nome);
console.log(pessoaJuridica.idade);
console.log(pessoaJuridica.dataNascimento);
console.log(pessoaJuridica.cnpj);
