-- CreateTable
CREATE TABLE "User" (
"id" SERIAL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "displayName" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
"id" SERIAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "primaryId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tree" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "cid" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "widget" (
"id" SERIAL,
    "value" TEXT,
    "type" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectTowidget" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectTowidget_AB_unique" ON "_ProjectTowidget"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectTowidget_B_index" ON "_ProjectTowidget"("B");

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY("primaryId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tree" ADD FOREIGN KEY("projectId")REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTowidget" ADD FOREIGN KEY("A")REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTowidget" ADD FOREIGN KEY("B")REFERENCES "widget"("id") ON DELETE CASCADE ON UPDATE CASCADE;
