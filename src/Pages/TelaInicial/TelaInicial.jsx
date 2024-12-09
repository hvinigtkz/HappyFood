import banner from '../Img/Banner.svg'
import selecionar from '../Img/selecionar (2).svg'
import customizar from '../Img/customizar.svg'
import carrinho from '../Img/carrinho.svg'
import entrega from '../Img/entrega.svg'

function TelaInicial() {
  return (
    <>
      <body>


        <header className="grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="col-span-1 px-8 py-4">
            <h1 className="font-sniglet font-extrabold text-primary-amarelo text-2xl">
              Happy<span className="text-black">Food</span>
            </h1>
          </div>
          {/* Navbar */}
          <div className="col-span-1 px-8 py-4">
            <nav className="flex space-x-6 text-gray-700 font-Inter font-medium justify-center">
              <a href="#" className="hover:text-primary-amarelo">
                Home
              </a>
              <a href="#" className="hover:text-primary-amarelo">
                About
              </a>
              <a href="#" className="hover:text-primary-amarelo">
                Service
              </a>
              <a href="#" className="hover:text-primary-amarelo">
                Contact us
              </a>
            </nav>
          </div>
          {/* Icons & Login Button */}
          <div className="col-span-1 flex items-center justify-end space-x-4 px-8 py-4">
            {/* Icon */}
            
            {/* Login Button */}
            <button className="border border-primary-amarelo shadow-xl text-black px-5 py-1 rounded hover:bg-primary-amarelo hover:text-white">
              Login
            </button>
            <button className="border bg-primary-amarelo shadow-xl text-black px-5 py-1 rounded  ">
              Registrar-se
            </button>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-center items-center">
              <img src={banner} alt="" className='h-4/5' />
            </div>
            <div className="col-span-1">
              <div className='w-full mt-32'>
                <h1 className='text-6xl'>
                  Feliz com a <span className='text-primary-amarelo'>comida deliciosa</span> e tenha novas experiências com diversas comidas
                </h1>
              </div>
              <div className='w-full mt-10'>
                <p>Explorando novos alimentos com diferentes transições de todos os países, onde você pode experimentar neste lugar e obter um bom preço conosco também, causaremos um bom impacto aos nossos clientes</p>
              </div>
              <div className='w-full mt-10 flex space-x-4'>
                <button className="border bg-primary-amarelo text-black px-5 py-2.5 rounded shadow-lg">
                  Pedir comida
                </button>
                <button className="border border-primary-amarelo shadow-xl text-black px-5 py-2.5 rounded">
                  Saber mais
                </button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">
              Como Você Pode Fazer O Pedido
            </h1>
            <hr className='w-1/6 mx-auto h-1 bg-yellow-500' />
          </div>
          <div className="grid grid-cols-4 gap-5 px-10 mt-10">
            <div className="col-span-1 bg-white p-4 shadow-md rounded-lg">
              <img src={selecionar} alt="Card Image" className=" object-cover rounded-t-lg" />
              <h1 className="text-xl font-semibold mt-4 text-center">Selecionar Comida</h1>
              <p className="mt-2 text-gray-600">selecionando o tipo de comida ou bebida que deseja pedir</p>
            </div>

            <div className="col-span-1 bg-white p-4 shadow-md rounded-lg">
            <img src={customizar} alt="Card Image" className=" object-cover rounded-t-lg" />
              <h1 className="text-xl font-semibold mt-4 text-center">Personalização</h1>
              <p className="mt-2 text-gray-600">especifique ingredientes adicionais, modificações ou quaisquer preferências específicas que você possa ter</p>
            </div>

            <div className="col-span-1 bg-white p-4 shadow-md rounded-lg">
            <img src={carrinho} alt="Card Image" className=" object-cover rounded-t-lg" />
              <h1 className="text-xl font-semibold mt-4 text-center">Colocação</h1>
              <p className="mt-2 text-gray-600">você pode fazer o pedido online adicionando itens ao seu carrinho virtual e fornecendo seu contato</p>
            </div>

            <div className="col-span-1 bg-white p-4 shadow-md rounded-lg">
            <img src={entrega} alt="Card Image" className=" object-cover rounded-t-lg" />
              <h1 className="text-xl font-semibold mt-4 text-center">Entrega/Retirada</h1>
              <p className="mt-2 text-gray-600">Normalmente, você receberá uma mensagem ou e-mail de confirmação que inclui os detalhes do seu pedido, como o horário estimado de entrega ou retirada.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <h1 className="text-2xl font-bold mb-2">
            Local do nosso restaurante
            </h1>
            <hr className='w-1/6 mx-auto h-1 bg-yellow-500' />
          </div>
        </main>
      </body>
    </>
  );
}

export default TelaInicial;
