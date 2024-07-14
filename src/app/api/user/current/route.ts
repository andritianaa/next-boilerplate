import {User} from "@prisma/client";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {prisma} from "@/prisma";


export const GET = async () => {
    const session = await getServerSession(authOptions);
    if (!session) return null;
    let user = await prisma.user.findUnique({
        where: {
            email: session.user!.email || "",
        },
    })

    if (!user) {
        return NextResponse.json(null, {status: 200});
    } else {
        const response: User = user;
        return NextResponse.json(response, {status: 200});
    }
}