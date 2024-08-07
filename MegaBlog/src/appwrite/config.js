import conf from "../conf/conf";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service{
    client = new Client();
    database;
    storage;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectUrl);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredimage, status, userId}){

        try {
            
            return await this.database.createDocument(
                conf.appwriteDatbaseUrl,
                conf.appwriteCollectionUrl,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createpost:: error" , error);
        }

    }

    async updatePost(slug , {title, content, featuredimage, status}) {
        try {
            return await this.database.updateDocument(
                conf.appwriteDatbaseUrl,
                conf.appwriteCollectionUrl,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                }
            )
        } catch (error) {
            console.log("error in updating" , error);
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                conf.appwriteDatbaseUrl,
                conf.appwriteCollectionUrl,
                slug
            );
            return true;
        } catch (error) {
            console.log("Error in deleting", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(
                conf.appwriteDatbaseUrl,
                conf.appwriteCollectionUrl,
                slug
            )
        } catch (error) {
            console.log("error in getting a single post", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatbaseUrl,
                conf.appwriteCollectionUrl,
                queries
            )
        } catch (error) {
            console.log("Error in fetching all the posts", error);
            return false;
            
        }
    }

    //uplode file funtion
    async uplodeFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketUrl,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("error in uploding the file", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketUrl,
                fileId
            )
            return true;
        } catch (error) {
            console.log("error in deleting file", error);
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketUrl,
            fileId
        )
    }
}

const service = new Service();
export default service;