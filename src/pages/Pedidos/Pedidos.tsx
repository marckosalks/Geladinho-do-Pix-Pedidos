import { useSabor } from "../../context/saborContext";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./styles.css";

export default function Pedidos() {
  const [quantidadeCount, setQuantidadeCount] = useState(0);
  const { sabor, setPreco, setQuantidade, adicionarPedido } = useSabor(); // 🔹 Pegamos `adicionarPedido`
  const { itensPedido } = useSabor();
  const navigate = useNavigate();

  const valorUnidade = 3.0;
  const doisPontoCinco = 2.5;

  const novoArray = itensPedido.filter((item) => sabor === item.titulo);

  if (novoArray.length === 0) return <p>Nenhum item encontrado.</p>;

  const pedido = {
    titulo: novoArray[0].titulo,
    descricao: novoArray[0].descricao,
    imagem: novoArray[0].imagem,
  };

  function handlePedido() {
    if (quantidadeCount === 0) {
      setQuantidadeCount((prev) => {
        const novaQtd = prev + 1;
        setQuantidade(novaQtd);
        setPreco(novaQtd * valorUnidade);
        return novaQtd;
      });
    } else {
      setPreco(quantidadeCount * doisPontoCinco);
      setQuantidade(quantidadeCount);
    }

    // 🔹 Agora adicionamos o pedido na lista de pedidos
    adicionarPedido({
      sabor,
      preco: quantidadeCount === 0 ? valorUnidade : quantidadeCount * doisPontoCinco,
      quantidade: quantidadeCount === 0 ? 1 : quantidadeCount,
    });

    navigate("/confirmar"); // 🔹 Depois de adicionar, navegamos para confirmar
  }

  function handleAddQtd() {
    setQuantidadeCount((preQtd) => (preQtd === 0 ? 2 : preQtd + 1));
  }

  function handleSubQtd() {
    setQuantidadeCount((preQtd) => (preQtd === 1 ? 0 : preQtd - 1));
  }

  return (
    <div className="containerPedidos">
      <h3>{pedido.titulo}</h3>

      <div className="cardSabor">
        <img className="pedidoImagem" src={pedido.imagem} alt="" />
        <p className="textoSpbreposto">{pedido.descricao}</p>
      </div>

      <div className="containerFooter">
        <div className="containerQtd">
          {quantidadeCount === 0 ? <button disabled></button> : <button onClick={handleSubQtd}>-</button>}
          <span>{quantidadeCount === 0 ? 1 : quantidadeCount}</span>
          <button onClick={handleAddQtd}>+</button>
        </div>

        <div className="containerValor">
          <button onClick={handlePedido}>Adicionar</button>
          <span>R$ {quantidadeCount === 1 || quantidadeCount === 0 ? valorUnidade : quantidadeCount * doisPontoCinco}</span>
        </div>
      </div>
    </div>
  );
}
