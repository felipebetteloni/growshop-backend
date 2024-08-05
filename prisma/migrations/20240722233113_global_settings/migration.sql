-- CreateTable
CREATE TABLE "global_settings" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "global_settings_pkey" PRIMARY KEY ("id")
);
