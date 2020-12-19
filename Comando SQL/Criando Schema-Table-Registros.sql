CREATE DATABASE IF NOT EXISTS `bdnodecrud`;
USE `bdnodecrud`;
CREATE TABLE IF NOT EXISTS `empregados` (
  `id` TINYINT AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` BIGINT (11) NOT NULL,
  `empresa` VARCHAR(45) NOT NULL,
  `funcao` VARCHAR(20) NOT NULL,
  `salario` DECIMAL(11,2) DEFAULT 1081.00,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
INSERT INTO `bdnodecrud`.`empregados` (`nome`, `email`, `telefone`, `empresa`, `funcao`, `salario`) VALUES ('Gabriel Belisario', 'gabriel.mhb@gmail.com', '31975760603', 'Belisario Software', 'Desenvolvedor Full Stack', 25500.00);
INSERT INTO `bdnodecrud`.`empregados` (`nome`, `email`, `telefone`, `empresa`, `funcao`, `salario`) VALUES ('Jovilson Inteligente', 'jovilson@gmail.com', '12345678910', 'Belisario Software', 'Desenvolvedor Mobile', 20500.00);
