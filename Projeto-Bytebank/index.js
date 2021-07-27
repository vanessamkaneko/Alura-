import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 1234566890);
diretor.cadastrarSenha("34332");
const gerente = new Gerente("Livia", 5000, 1234857482942);
gerente.cadastrarSenha("2947");
const cliente = new Cliente("Lais", 1847382938, "234")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "2947");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "34332");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "234")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


















