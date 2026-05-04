"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


export const RightSection = () => {
    const [name, setName] = useState("");
    const [numero_identificacao, setNumero_identificacao] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [pais, setPais] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [password, setPassword] = useState("")
    
    
    
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setName(e.target.value);
    } else {
      setName("");
    }
  };

   const changeNumero_identificacao = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setNumero_identificacao(e.target.value);
    } else {
      setNumero_identificacao("");
    }
  };

   const changeData_nascimento = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setData_nascimento(e.target.value);
    } else {
      setData_nascimento("");
    }
  };

   const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setEmail(e.target.value);
    } else {
      setEmail("");
    }
  };

  const changeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setTelefone(e.target.value);
    } else {
      setTelefone("");
    }
  };

   const changePais = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setPais(e.target.value);
    } else {
      setPais("");
    }
  };

  const changeLocalidade = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setLocalidade(e.target.value);
    } else {
      setLocalidade("");
    }
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setPassword(e.target.value);
    } else {
      setPassword("");
    }
  };

   const handleRegistro = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

     // fetch API
    await fetch("http://localhost:8080/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        numero_identificacao: numero_identificacao,
        data_nascimento: data_nascimento,
        email: email,
        telefone: telefone,
        pais: pais,
        localidade: localidade,
        password: password,
      }),
    }).then((response) => {
      console.log(response.json());
    });
};
    console.log({  name: name,
        numero_identificacao: numero_identificacao,
        data_nascimento: data_nascimento,
        email: email,
        telefone: telefone,
        pais: pais,
        localidade: localidade,
        password: password, });

    return (
    <div className="w-1/2 flex flex-col justify-center">
      <Card className="h-full flex flex-col justify-center px-14 gap-16">
        <CardHeader>
          <span className="text-5xl font-bold">Create your Account</span>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="name"
                className="py-2 h-10 text-lg"
                value={name}
                onChange={changeName}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Id number</Label>
              <Input
                type="numero_identificacao"
                placeholder="Your id number..."
                className="py-2 text-lg h-10"
                value={numero_identificacao}
                onChange={changeNumero_identificacao}
              />
            </div>

             <div className="flex flex-col gap-2">
              <Label>Birthday date</Label>
              <Input
                type="data_nascimento"
                placeholder="Your Birthday date..."
                className="py-2 text-lg h-10"
                value={data_nascimento}
                onChange={changeData_nascimento}
              />
            </div>

             <div className="flex flex-col gap-2">
              <Label>Email Adress</Label>
              <Input
                type="text"
                placeholder="example@example.com"
                className="py-2 h-10 text-lg"
                value={email}
                onChange={changeEmail}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Phone Number</Label>
              <Input
                type="text"
               
                className="py-2 h-10 text-lg"
                value={telefone}
                onChange={changeTelefone}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Country</Label>
              <Input
                type="text"
               
                className="py-2 h-10 text-lg"
                value={pais}
                onChange={changePais}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Location</Label>
              <Input
                type="text"
                
                className="py-2 h-10 text-lg"
                value={localidade}
                onChange={changeLocalidade}
              />
            </div>
              <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input
                type="text"
                placeholder="your password"
                className="py-2 h-10 text-lg"
                value={password}
                onChange={changePassword}
                
              />
            </div>

             <Button
              onClick={handleRegistro}
              className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-lg drop-shadow-gray-200"
            >
              Complete Registration
            </Button>
            </div>
            <div>
            <span>Already have an account? </span>
            <Link href="/login" className="text-[#13A4EC] font-semibold">
              Sign in
            </Link>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );



 
}
