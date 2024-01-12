import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInForm() {
    return(
        <form>
            <div className='flex flex-col gap-y-2'>
            <Label>Email</Label>
            <Input name="email" type="email" placeholder="name@example.com"></Input>
            </div>
            <Button type="submit" className='mt-5 hover:bg-green-600 w-full'>Login with Email</Button>  
        </form>
    )
}