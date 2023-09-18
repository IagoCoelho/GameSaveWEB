"use client"

import { create } from "@/actions/cadastro";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormCadastro() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/cadastro")
    }

    return (
        <>
            <NavBar active="cadastro" />

            <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
                <h2 className="text-2xl font-bold">Cadastrar Jogo</h2>
                <form action={handleSubmit}>
                    <InputText name="nomeJogo" id="nomeJogo" label="nome Jjgo" />
                    <InputText name="categoria" id="categoria" label="categoria"/>
                    <InputText name="plataforma" id="plataforma" label="plataforma"/>
                    <InputText name="descricao" id="descricao" label="descricao"/>

                    <div className="flex justify-around mt-4">
                        <Button href="/cadastro" variant="secundary" icon={<ArrowLeftIcon className="h-6 w-6" />}>
                            Cancelar
                        </Button>
                        <Button element="button" icon={<CheckIcon className="h-6 w-6" />}>
                            Salvar
                        </Button>
                    </div>
                </form>
                <p>{message}</p>
            </main>
        </>
    )
}