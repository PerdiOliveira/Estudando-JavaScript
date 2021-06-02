import {Cliente} from "./Cliente.js"
import {Gerente} from "./funcionarios/Gerente.js"
import {Diretor} from "./funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Jader", 10000, 12345678988);
const gerente = new Gerente("Italo", 5000, 23456789100);

diretor.cadastrarSenha("123456789")
gerente.cadastrarSenha("123")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

const cliente = new Cliente("Laís", 78945678900, "456");



const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

