"use client"
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

// En DEPLOY se debe adaptar el callbackUrl para producción
export default function LogoutButton() {

    return(
            <Button onClick={() => signOut({callbackUrl: `${window.location.origin}/auth`})}>Log Out</Button>
    )
}