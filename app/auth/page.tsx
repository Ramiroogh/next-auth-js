// UI de ShadCN
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";

// Componentes Hidratados
import SignWithGithub from "../components/SignWithGithub";
import SignInForm from "../components/SignInForm";

// Manejo Asincrono de DATOS
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AuthRoute() {
    //Con esta configuracion, protejemos la ruta /Auth y redireccionamos a '/', si esta logueado o no.
    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/')
    }

    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <Button asChild className="mb-5">
                <Link href="/">Volver a Inicio</Link>
            </Button>
            
            <Card>
            <CardHeader>
                <CardTitle>Porfavor Inicia Sesion</CardTitle>
                <CardDescription>Para acceder a la pagina privada, debes estar autenticado.</CardDescription>
            </CardHeader>
            <CardContent>

                <div className='flex flex-col'>
                    <SignInForm />
                    <SignWithGithub />
                </div>
            </CardContent>
            </Card>
        </div>
    )
}