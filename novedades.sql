-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-08-2024 a las 03:33:56
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `subtitulo` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `cuerpo` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'La Vuelta al Hotel Edén', 'Este 28 y 29 de Septiembre se realizá la carrera más grande de las Sierras de Córdoba', 'Esta carrera se llevará a cabo el Sábado 28 y Domingo 29 de Septirmbre.\r\nEl primer día se correrá una carrera infantil que comienza a las 15:30 hs y luego una Downhill que arranca a las 16:30hs. Esta trata de un recorrido en descenso donde los corredres deberán descender mas de 300mts de desnivel en un recorrido de 5.8 km que transitara el camino viejo del Cuadrado. \r\n\r\nLa Vuelta al Hotel Edén se realizará el segundo día, en donde se combinan 5 distancias de carrera con amplia convocatoria. Este año propone más recorridos de montaña generando especial interés por ser una disciplina en auge en la región la provincia, el país y el mundo, aprovechando el gran recurso diferencial de nuestras Sierras.\r\n\r\nLas inscripciones ya están abiertas para ser parte de esta carrera, es necesario rellenar un formulario y llevar un certificado médico, deslinde de responsabilidad y los menores deben de tener la autorización de un adulto responsable.\r\nAdemás si estás en los primeros 300 inscriptos te llevas una remera del evento. ¿Queres participar? Acá te dejamos el link con el resto de la información donde vas a encontrar el formulario de inscripción: https://mytime.com.ar/Inscripcion/VueltaHotelEden');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
