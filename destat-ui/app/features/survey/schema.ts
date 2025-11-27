import { doublePrecision, integer, varchar, text, bigint, jsonb, boolean, serial, pgTable } from "drizzle-orm/pg-core";

export const survey = pgTable("survey", {
    id: varchar().primaryKey().notNull(),
    title: varchar().notNull(),
    description: text().notNull(),
    target_number: integer().notNull(),
    reward_amount: doublePrecision().notNull(),
    questions: jsonb().notNull(),
    owner: varchar().notNull(),
    image: text().notNull(),
    finsh: boolean().default(false),
    view: bigint({ mode: "number"}).default(0),
});

export const Answer = pgTable("answer", {
    id: serial().primaryKey(),
    answers: jsonb().default({}),
    survey_id: varchar().references(() => survey.id)
})