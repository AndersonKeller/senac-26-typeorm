import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitie";

@Entity("posts")
export class Posts {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    content: string

    @ManyToOne(()=>User,(user)=>user.posts)
    user:User
}