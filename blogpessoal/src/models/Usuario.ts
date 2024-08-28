import Postagem from "./Postagem";

export default interface Usuario{
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem | null;
    
}
// o ? antes do nome indica que o preenchimento é opcional, pode retornar vazio