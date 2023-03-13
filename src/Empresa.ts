import Endereco from "./Endereco"
import Funcionario from "./Funcionario"

export default class Empresa{
    public razaoSocial:string
    public nomeFantasia:string
    public cnpj:string
    public endereco:Endereco
    public funcionarios:Funcionario[]

    constructor(funcionarios:Funcionario[], endereco:Endereco, razaoSocial:string,nomeFantasia:string, cnpj:string){
        this.funcionarios=funcionarios
        this.endereco=endereco
        this.razaoSocial=razaoSocial
        this.nomeFantasia=nomeFantasia
        this.cnpj=cnpj
    }


}