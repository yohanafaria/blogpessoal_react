function Home() {
  return (
    <div className=
    "bg-indigo-900
    flex
    justify-center">

        <div className="
        container
        grid
        grid-cols-2
        Text-white">

          <div className="
          flex
          flex-col
          gap-4
          items-center
          justify-center
          py-4">
        
            <h2 className="
            text-5xl
            font-bold
            ">
              Seja Bem Vindo!</h2>
            <p className="text-xl">
              Expresse aqui seus pensamentos e opiniões
              </p>

              <div className="
              flex
              justify-around
              gap-4">

                <div className="
                rounded
                border-white
                border-solid
                border-2
                py-2
                px-4
                ">
                  Nova Postagem
                  </div>
          </div>
          </div>
        <div className="
        flex
        justify-center">
              <img src="https://i.imgur.com/VpwApCU.png" alt="Imagem da Página Home" width="400px">
                  </img>
              </div>
          </div>
    </div>
  )}

export default Home