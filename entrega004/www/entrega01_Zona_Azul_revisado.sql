USE `zona_azul`;

SET FOREIGN_KEY_CHECKS=0;

 CREATE TABLE usuario (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
 nombre VARCHAR(50), 
 apellidos VARCHAR(50), 
 dni VARCHAR(9), 
 telefono_movil VARCHAR(9), 
 numero_cuenta VARCHAR(24)
 );
 
 CREATE TABLE vehiculos (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
 matricula VARCHAR(7), 
 marca VARCHAR(50), 
 modelo VARCHAR(50), 
 tipo ENUM('coche', 'moto', 'furgoneta'),
 id_usuario INT UNSIGNED,
 FOREIGN KEY (id_usuario) REFERENCES usuario (id)
  );
 
  CREATE TABLE aparcamiento (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
 fecha_entrada DATETIME, 
 fecha_salida DATETIME, 
 tiempo_aparcado DECIMAL(4,2) -- se calcularia restando (fecha_Salida - fecha_entrada)
 );
 

 CREATE TABLE zona_azul (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
 nombre VARCHAR(50), 
 hora_inicio DATETIME, 
 hora_fin DATETIME, 
 limite_tiempo DECIMAL(4,2),
 observaciones VARCHAR(200),
 operativa BOOLEAN
 );
 
  SET FOREIGN_KEY_CHECKS=1;