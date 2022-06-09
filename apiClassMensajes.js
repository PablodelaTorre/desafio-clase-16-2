import knex from "knex"

export default class Api {
    constructor(options,table){
        this.knex = knex(options)
        this.table = table
    }
    async findAll(){
        try {
            const mensajes = await this.knex.from(this.table).select("*")
            return mensajes
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async findById(id){
        try {
            const mensaje = await this.knex.from(this.table).select("*").where('id',id)
            return mensaje
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async create(obj){
        try {
            const nuevoMensaje = await this.knex(this.table).insert(obj)
            return nuevoMensaje
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async deleteP(id){
        try {
            const elementoBorrado = await this.knex.from(this.table).where("id",id).del()
            return elementoBorrado
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }   
    }

    async deleteAll(id){
        try {
            return await this.knex.from(this.table).del()
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }   
    }
}