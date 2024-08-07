const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectUrl : String(import.meta.env.VITE_APPWRITE_PROJECT_URL),
    appwriteDatbaseUrl : String(import.meta.env.VITE_APPWRITE_DATABASE_URL),
    appwriteCollectionUrl : String(import.meta.env.VITE_APPWRITE_COLLECTION_URL),
    appwriteBucketUrl : String(import.meta.env.VITE_APPWRITE_BUCKET_URL),
    
}

export default conf