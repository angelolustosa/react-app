import './Coleguinha.css'


export function Coleguinha({ nome = "Nome", idade = 0, nomeCompleto = "Nome Completo" }) {
    return (
        <>
            {/*  <h3>{props.nome}</h3>
            <p>{`Idade: ${props.idade}`}</p>}
            <p>{props.nomeCompleto}</p> */}

            <h3>{nome}</h3>
            <p class='idade'>{`Idade: ${idade}`}</p>
            <p>{nomeCompleto}</p>
        </>
    )
}