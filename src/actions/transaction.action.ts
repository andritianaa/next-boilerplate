"use server"
import {Post } from "@prisma/client"
import {prisma} from "@/prisma";

const createPost = async (data : Post)=>{
    const np = await prisma.post.create({
        data
    })
    return np
}