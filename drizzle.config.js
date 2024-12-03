import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    dialect:"postgresql",
    schema:'./config/schema.js',
    dbCredentials:{
        url:'postgresql://neondb_owner:wSXKROc72zkP@ep-still-butterfly-a5483sdq.us-east-2.aws.neon.tech/neondb?sslmode=require'
    }

})