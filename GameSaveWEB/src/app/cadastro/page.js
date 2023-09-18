import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getCadastro(){
  const url = "http://localhost:8080/api/cadastro"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default function Cadastro() {
  const data = await getCadastro()

  return (
    <>
      <NavBar active={"cadastro"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Cadastro</h2>
          <Button href="/cadastro/new">
            Cadastrar Jogo
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map(cadastro => <DataRow cadastro={cadastro} /> )}
        </div>
      </main>
    </>

  )
}
