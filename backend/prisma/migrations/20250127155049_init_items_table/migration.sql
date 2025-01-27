-- CreateTable
CREATE TABLE `Item` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `effect` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `weight` DOUBLE NOT NULL,
    `rarity` VARCHAR(191) NOT NULL,
    `detail_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
