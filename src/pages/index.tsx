import CollectionClient from "@/backend/db/CollectionClient";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import { useEffect, useState } from "react";

export default function Home() {
  const repo: ClientRepository = new CollectionClient()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [view, setView] = useState<'table' |'form'>('table')

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      setView('table')
    })
  }

  function clienteSelecionado(client: Client) {
   setClient(client)
   setView('form')
  }

  function clienteExcluido(client: Client) {
    console.log(`Excluir...${client.name}`)
  }

  function newClient() {
   setClient(Client.empty())
    setView('form')
  }


  async  function saveClient(client: Client) {
   await repo.save(client)
   getAll()
  }


  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-[#366f79] to-[#539eab]
    `}>
     <Layout title="SIMPLE REGISTRATION"> 
     {view === 'table' ? (
           <>
           <div className="flex justify-end">
            <Button cor="green" className="mb-4"
            onClick={newClient}> New Client </Button>
           </div>
            <Table clients={clients}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
            /> 
           </>
     ) : (
      <Form 
      client={client}
      clientChange={saveClient}
      canceled={() => setView('table')}
      />
     )}
     </Layout>
    </div>
  )
}
