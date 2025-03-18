
import { Images } from "../assets";


export type itensPedidoType = {
  id?: number;
  titulo?: string;
  imagem: string;
  descricao: string
}


export const itensPedido = [
  {
    id: 1,
    titulo: "Coco",
    imagem: Images[0],
    descricao: "O Clássico Cremoso! Sabor leve, textura irresistível e aquele gostinho de coco que abraça o paladar. Refrescante e delicioso a cada mordida!",
  },
  {
    id: 2,
    titulo: "Morango",
    imagem: Images[1],
    descricao: "Amor em Forma de Geladinho! O sabor que todo mundo ama! Cremoso, doce e com um toque de nostalgia que faz qualquer momento especial.",
  },
  {
    id: 3,
    titulo: "Manga",
    imagem: Images[2],
    descricao: "O Toque Tropical! Suave, docinha e cheia de sabor. A cara do verão em um geladinho irresistível!",
  },
  {
    id: 4,
    titulo: "Maracuja",
    imagem: Images[3],
    descricao: "Refrescância Perfeita! Equilíbrio entre azedinho e doce, trazendo a explosão tropical que você ama! Um refresco que alegra o dia.",
  },
  {
    id: 5,
    titulo: "Goiaba",
    imagem: Images[4],
    descricao: "Sabor da Infância! Doce na medida certa, com o sabor natural da goiaba que derrete na boca. Simplesmente viciante!O Clássico Cremoso! Sabor leve, textura irresistível e aquele gostinho de coco que abraça o paladar. Refrescante e delicioso a cada mordida!",
  },
  {
    id: 6,
    titulo: "Paçoca",
    imagem: Images[5],
    descricao: "O Queridinho dos Amantes de Doce! Paçoca cremosa, derretendo na boca e trazendo aquele gostinho de festa junina o ano todo!",
  },
  {
    id: 7,
    titulo: "Chocolate",
    imagem: Images[6],
    descricao: "O Intenso e Cremoso! Sabor marcante, textura aveludada e aquele irresistível gostinho de chocolate que conquista a cada pedaço. Puro prazer em cada mordida!",
  },
  {
    id: 8,
    titulo: "Uva",
    imagem: Images[7],
    descricao: "O Tradicional Saboroso! Um toque suave, textura envolvente e o inconfundível gostinho de uva que encanta o paladar. Refrescante e irresistível a cada mordida!",
  },
];