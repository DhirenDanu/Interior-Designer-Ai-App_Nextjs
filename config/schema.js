import { serial, varchar, integer, pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(), // Specify length for varchar
    email: varchar('email', { length: 255 }).notNull(),
    imageUrl: varchar('imageUrl', { length: 255 }).notNull(),
    credits: integer('credits').default(3),
});
