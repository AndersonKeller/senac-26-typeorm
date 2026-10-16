import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Posts } from "./post.entitie"

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    cor: string

    @Column()
    password: string

    @Column()
    username: string

    @Column({ default: false })
    status: boolean

    @OneToMany(() => Posts, (posts) => posts.user)
    posts: Posts[]
}