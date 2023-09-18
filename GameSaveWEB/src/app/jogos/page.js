import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getJogo(){
  const url = "http://localhost:8080/api/jogo"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default function Jogo() {
  const data = await getJogo()

  return (
    <>
      <NavBar active={"jogo"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <h2 className="text-2xl font-bold">Jogos</h2>
        <div id="data" className="text-slate-300 m-1">
          {data.map(jogo => <DataRow jogo={jogo} /> )}
        </div>
      </main>
    </>

  )
}
