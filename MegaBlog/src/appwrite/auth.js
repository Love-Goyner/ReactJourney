import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectUrl);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            await this.account.createEmailPasswordSession(email, password);
            return this.getCurrentUser();
        } catch (error) {
            if (error.code === 409) { // Session already exists
                await this.logout();
                return this.login({email, password});
            } else {
                throw error;
            }
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            await this.account.deleteSession("current");
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
