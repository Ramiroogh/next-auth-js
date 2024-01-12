"use client"

// UI
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
    const [email, setEmail] = useState<null | string>(null);

    // Usando los Providers de next/auth y los datos del estado useState 'email'
    async function SignWithEmail() {
        const signInResult = await signIn("email", {
            email: email,
            callbackUrl: `${window.location.origin}`,
            redirect: false,
        })
        if(!signInResult?.ok) {
            return toast({
                title: 'Error de autenticacion',
                description: 'porfavor, vuelve a intentarlo de nuevo',
                variant: 'destructive',
            });
        }
    return toast({
        title: 'Chequea tu Email',
        description: 'se a enviado un link a tu email, revisalo para iniciar sesion',
    })
    }

    return(
        <form action={SignWithEmail}>
            <div className='flex flex-col gap-y-2'>
            <Label>Email</Label>
            <Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="name@example.com"></Input>
            </div>
            <Button type="submit" className='mt-5 hover:bg-green-600 w-full'>Login with Email</Button>  
        </form>
    )
}