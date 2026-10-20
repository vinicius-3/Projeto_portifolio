import db from "../db/conn.js";
export default class ProjetoModel{
    static async creat(projeto){
        const(nome, 
            descreicao, 
            data_inicio, 
            data_fim, 
            tecnologias, 
            observacoes) = projeto;
        const query='Insert INTO projetos (nome, descricao, data_inicio, data_fim, tecnologias, observacoes) Values(?,?,?,?,?,?)';
        const [resultado] = await db.execute(query, [
            nome,
            descricao,
            data_inicio,
            data_fim,
            tecnologias,
            observacoes
        ]);
        return {id: resultado.insertid, ...projeto};    
    }
}