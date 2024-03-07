import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey, primaryKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const pifFields = sqliteTable("pif_fields", {
	id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
	name: text("name"),
	description: text("description"),
	createdAt: integer("created_at").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: integer("updatedAt"),
});

export const pifFieldsToUsers = sqliteTable("pif_fields_to_users", {
	fieldId: text("field_id").references(() => pifFields.id),
	userId: text("user_id").references(() => pifUsers.clerkId),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.fieldId, table.userId], name: "pif_fields_to_users_field_id_user_id_pk"})
	}
});

export const pifOffers = sqliteTable("pif_offers", {
	id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
	name: text("name"),
	description: text("description"),
	createdAt: integer("created_at").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: integer("updatedAt"),
});

export const pifOffersToUsers = sqliteTable("pif_offers_to_users", {
	offerId: text("offer_id").references(() => pifOffers.id),
	userId: text("user_id").references(() => pifUsers.clerkId),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.offerId, table.userId], name: "pif_offers_to_users_offer_id_user_id_pk"})
	}
});

export const pifUsers = sqliteTable("pif_users", {
	clerkId: text("clerk_id").primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	gender: text("gender"),
	role: text("role"),
	description: text("description"),
	major: text("major"),
	schoolName: text("school_name"),
	title: text("title"),
	workplace: text("workplace"),
	location: text("location"),
	githubUrl: text("github_url"),
	linkedinUrl: text("linkedin_url"),
	bookingUrl: text("booking_url"),
});