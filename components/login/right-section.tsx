import { Label } from "../ui/label";
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import Link from "next/link";


export const RightSection = () => {
    return(
        <div className="w-1/2 flex flex-col justify-center" >
            <Card className="h-full flex flex-col justify-center px-14 gap-16">
                <CardHeader>
                    <span className="text-5xl font-bold">Login</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Email</Label>
                            <Input type="text" placeholder="example@example.com" className="py-2 h-10 text-lg"/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Password</label>
                            <Input type="password" placeholder="Your password..." className="py-2 text-lg h-10" />
                        </div>
                        

                        <Button className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-gray-200">
                            Login
                        </Button>
                     </div>
                     <div>
                        <span>Don´t have an account yet?</span>
                        <Link href="/registro" className="text-[#13A4EC] font-semibold">Create Account</Link>
                     </div>
                </CardContent>
            </Card>
        </div>
    );
}