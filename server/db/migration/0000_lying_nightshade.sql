-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `pif_fields` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`description` text,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE TABLE `pif_fields_to_users` (
	`field_id` text,
	`user_id` text,
	PRIMARY KEY(`field_id`, `user_id`),
	FOREIGN KEY (`user_id`) REFERENCES `pif_users`(`clerk_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`field_id`) REFERENCES `pif_fields`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `pif_offers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`description` text,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE TABLE `pif_offers_to_users` (
	`offer_id` text,
	`user_id` text,
	PRIMARY KEY(`offer_id`, `user_id`),
	FOREIGN KEY (`user_id`) REFERENCES `pif_users`(`clerk_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`offer_id`) REFERENCES `pif_offers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `pif_users` (
	`clerk_id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`gender` text,
	`role` text,
	`description` text,
	`major` text,
	`school_name` text,
	`title` text,
	`workplace` text,
	`location` text,
	`github_url` text,
	`linkedin_url` text,
	`booking_url` text
);

*/