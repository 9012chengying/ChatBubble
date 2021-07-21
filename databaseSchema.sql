DROP SCHEMA IF EXISTS dissertationDatabase;
Create schema IF NOT EXISTS dissertationDatabase;
use dissertationDatabase;

DROP TABLE IF EXISTS testTable;

CREATE TABLE IF NOT EXISTS `testTable` (
  `names` TEXT NOT NULL
);

INSERT INTO `testTable` (names) VALUES
('name 1'),
('name 2'),
('name 3')
;