BEGIN;
--
-- Create model PackmolPlay
--
CREATE TABLE "tasks_packmolplay" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "chebi" varchar(30) NOT NULL, "cell" varchar(30) NOT NULL, "mol" text NOT NULL, "score" real NULL, "user_id" integer NOT NULL REFERENCES "auth_user" ("id") DEFERRABLE INITIALLY DEFERRED);
CREATE INDEX "tasks_packmolplay_user_id_02fcd069" ON "tasks_packmolplay" ("user_id");
COMMIT;
