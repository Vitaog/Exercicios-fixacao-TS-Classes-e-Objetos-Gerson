import Empresa from "./Empresa";

export default class Descritor {
  descrever(empresa: Empresa): void {
    console.log(`Nome da empresa: ${empresa.nomeFantasia}`);
    console.log(`Endereço: ${empresa.endereco.numero}, ${empresa.endereco.rua}, ${empresa.endereco.bairro}${empresa.endereco.cidade}`);
    console.log(`Razão Social: ${empresa.razaoSocial}`);
    console.log(`CNPJ: ${empresa.cnpj}`);

    console.log('Funcionários:');
    empresa.funcionarios.forEach(funcionario => {
      console.log(`Nome: ${funcionario.nome}`)
      console.log(`CPF:${funcionario.cpf}`)
      console.log(`Matricula: ${funcionario.matricula}`)
      console.log(`Rua: ${JSON.stringify(funcionario.endereco.rua)} Bairro:${JSON.stringify(funcionario.endereco.bairro)} Cidade:${JSON.stringify(funcionario.endereco.cidade)} Número: ${JSON.stringify(funcionario.endereco.numero)}`)
    });

  }
}


