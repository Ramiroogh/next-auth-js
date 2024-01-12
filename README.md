# Autenticación de Usuarios
Este repositorio contiene una estructura modular, basica y simple para la autenticacion de usuarios, es de libre uso y se puede replicar el mismo formato para adaptarlo a cualquier proyecto que utilice como framework base NEXT JS.

Los usuarios pueden loguearse con Email y Github, tambien se pueden integrar otros metodos de autenticación.

## Tecnologías
Las tecnologias que se utilizaron en el proyecto son las siguientes:
+ NextJS
+ Typescript

#### Base de Datos
Para almacenar las autenticaciones de usuarios, utilice:
+ Prisma
+ Supabase

#### Autenticación
Para manejar la autenticación utilice:
+ Resend
+ NextAuth.js
+ Nodemailer
+ API de Github (Auth0)

#### UI
Para la interfaz de usuario, utilice:
+ Tailwind
+ Shadcn

## Deploy
al proceder a hacer el Deploy, no olvides cambiar la ```URL HOMEPAGE``` de Github Apps.
Prisma: Necesitas agregar el script ```"postinstall": "prisma generate"``` en el package.json
No olvides de proporcionar las variables de entorno, y especificamente en NextAuth.js deberas agregar una configuracion adicional sobre esto, puedo leerlo en este enlace de la [Documentacion Oficial, Deploy con NextAuth.js](https://next-auth.js.org/deployment)

## Conclusión
Este proyecto contiene una estructura de autenticacion que se puede replicar en cualquier sistema donde se utilice como Framework base (NEXT JS).
Ya que los Providers, Adapters y Schemas son compatibles solo con NextJS, este repositorio es de codigo abierto y libre de uso, podes clonarlo para revisarlo con fines educativos e implementar la estrucutra, gracias por leer.