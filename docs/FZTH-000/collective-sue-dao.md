# CollectiveSueDAO

## Introducción
Actualmente grandes conglomerados que acumulan cada vez más poder, atropellan el derecho de las personas que se encuentran en inferioridad de condiciones para defenderse legalmente.

Para solventar este problema, surge ``CollectiveSueDAO``, una **organización autónoma descentralizada** que busca **facilitar el acceso a la justicia** a damnificados a través de la gestión de **demandas colectivas**.

Al estar desarrollada en la Blockchain de xDai, las **operaciones** de ``CollectiveSueDAO`` son, por naturaleza: 
  - **Inmutables**
  - **Transparentes**
  - **Descentralizadas**
  - **Incensurable**
  - **Globales**

A su vez, nuestros smart contracts se rigen por los votos de los interesados por lo que también es **democrática**.

Solventamos las dificultades que existen habitualmente en las acciones colectivas:
  - Falta de información
  - Falta de un modo de organización
  - Dependencia del marco jurídico de cada país
  - Falta de dinero

Con las siguientes soluciones:
  - Creación de una **comunidad** donde la información esté a disposición
  - **Formas organizativas** democráticas y ágiles para tomar decisiones mediante una ``CollectiveSueDAO`` madre que siente las bases y nuclee intereses comunes; y diferentes ``SueDAOs`` para cada caso en particular
  - SueDAOs adaptadas a la legislación del sitio donde se encuentre
  - Creación de un canal de **financiamiento** a través de inversores que podrán comprar los tokens SUET con la perspectiva de un beneficio ya sea por la resolución favorable de una causa o por la valorización de los SUET debido al éxito de la DAO

## Manifesto
Puedes encontrar nuestro ``Manifesto`` en los links de referencia al final de este artículo.
En él podrás ver nuestras motivaciones y los fundamentos de la existencia de una CollectiveSueDAO “madre” y diferentes SueDAOs.

## DAO mínima viable
Para validar nuestra visión, proponemos como DAO mínima viable la creación de una única SueDAO para un caso en particular, que en el futuro servirá de base para la creación de la DAO madre y subsiguientes SueDAOs.

Esta SueDAO fue diseñada, desarrollada y desplegada por los miembros fundadores de CollectiveSueDAO. El código fue auditado por el alma mater del equipo fundador, ``DAO  Education``. Este patrón seguirá vigente hasta que se cree la CollectiveSueDAO y pase a ser la encargada de definir estas actividades. Las reglas de funcionamiento podrán cambiar previo debate en Discord e implementación por el equipo fundador.

En esta SueDAO, participarán damnificados con un interés de justicia común y un/a abogado/a elegido/a por votación.

Las decisiones serán discutidas en el Discord oficial y las votaciones se realizarán en la SueDAO desplegada en Aragon. Cada damnificado recibirá un token de gobernanza de la SueDAO. Habrá un voto por persona. (App ``Voting``)

Entre estas decisiones estará la elección de un abogado que los represente en la demanda colectiva, previa validación de la matrícula. 

Habrá un registro de abogados con su reputación y antecedentes en la DAO (off-chain, en Discord). Además, una vez finalizada una SueDAO, los damnificados tendrán un período de cinco días para calificar la tarea del abogado o abogada, producto de lo cual se expedirá un NFT donde conste su calificación y el resultado de la demanda, el cual podrá exhibir para sus futuras postulaciones.

Los damnificados podrán votar para abrir la posibilidad de aceptar inversores por un monto determinado, con el fin de que ayuden a costear la demanda. Un damnificado puede actuar también como inversor sin que esto le otorgue más votos. Una vez que un inversor hizo su staking no podrá recuperarlo antes de que se resuelva la demanda.

Todos los participantes deberán loguearse desde una dirección validada en ``Proof of Humanity``. Esto busca evitar el uso de bots o de duplicación de identidades.

Para participar, todos los integrantes deberán comprar el token ``LEGY`` que quedará en staking y que actuará como desincentivo a malos accionares. 

Todo damnificado podrá dejar de participar y abandonar la SueDAO. En caso de querer recuperar su staking, deberá enviar su token de gobernanza a la dirección de la SueDAO. Antes de la devolución, se retendrá un descuento del 3% como desincentivo a la especulación.

Los conflictos serán debatidos en el Discord oficial de SueDAO, eventualmente serán resueltos por votación y, en caso de haber sanciones, se decidirán también por votación y serán graduales con un inicio bajo y crecimiento cuadrático en caso de reincidencia.

El potencial resarcimiento ante una demanda será repartido entre los damnificados - e inversores en caso de haber - en forma proporcional al LEGY en staking, excluyendo al abogado que cobra por sus servicios un monto preacordado.

Los LEGY serán enviados y almacenados en la dirección del contrato de la SueDAO hasta que el litigio tenga resolución. (App ``Finance``).

SueDAO utilizará el ecosistema Blockchain siempre que sea posible. Por ejemplo, las pruebas aportadas por los damnificados, serán almacenadas en IPFS. El único que podrá acceder a ellas será el abogado. Este puede rechazar pruebas por no ser procedentes, resultando en la remoción del participante de la SueDAO y la devolución de su stacking sin descuento.

Para cambiar estas reglas que estamos definiendo tiene que intervenir la CollectiveSueDAO. Es decir que las SueDAO no pueden cambiar por sí solas estas reglas.

También, los damnificados pueden elegir depositar esos fondos comunes en una Dapp DeFi de bajo riesgo y alta liquidez para obtener un rédito mientras dure el juicio. (Ejemplos: AAVE, Compound, Curve).

## ¿Por qué Aragon?
Elegimos Aragon como modelo de DAO por su **alta configurabilidad y modularidad** y su facilidad para votar propuestas.
En cuanto a sus apps asociadas, destacamos:
  - ``Voting``: se ajusta la necesidad de un voto por persona. Puede configurarse:
    - ``Support %``:  porcentaje relativo de tokens que deben votar "Sí" para que se apruebe una propuesta. Por ejemplo, si "Apoyo" se establece en 50%, entonces más del 50% de los tokens utilizados para votar una propuesta deben votar "Sí" para que se apruebe.
    -  `Minimum approval %` porcentaje del suministro total de tokens que se requiere para votar "Sí" en una propuesta antes de que pueda ser aprobada. Por ejemplo, si la "Aprobación mínima" se establece en 20%, entonces más del 20% del suministro de tokens pendiente debe votar "Sí" en una propuesta para que se apruebe.
  - ``Finance``: permite tener una dirección de la SueDAO que sea la que reciba el staking de todos los participantes. Al recibir correctamente el staking, previa votación para su aceptación, se emitirá el token de gobernanza en el caso de ser damnificado.

Estas características nos permitirán gestionar y  conectar fácilmente la DAO madre y futuras SueDAOs.

## ¿Cómo participar?
Puede participar de nuestra SueDAO de distintas formas de acuerdo a tus intereses y habilidades.
En nuestro Discord oficial encontrarás la descripción paso a paso para cada caso.
Igualmente, aquí tienes un resumen: (no son excluyentes)

 -  ``Developer``: participar de discusiones en Discord y/o participar del desarrollo en Github
 -  ``Damnificado``, con interés de crear una demanda: log in en nuestra DAO en xDai desde una dirección que esté validada en Proof of Humanity, comprar LEGY y enviar los necesarios a la address de la SueDao para realizar el staking. De ser aprobado, se te dará 1 SUET para gobernanza. Con esa misma cuenta, votarás las decisiones que se discutan en Discord. Participa en gobernanza con un voto por persona.
-  ``Abogados``, con interés de representar a damnificados: mismos pasos que el damnificado salvo que no participa en la gobernanza. Debe previamente aportar pruebas de que su matrícula le permite ejercer la profesión en la Jurisdicción necesaria
-  ``Inversores``: Cuando se necesite, comprar LEGY y enviar los necesarios a la address de la SueDao para realizar el staking. Quedarán en staking y al final se usarán para calcular la proporción del eventual resarcimiento pagado por la parte demandada.

## Stack Organizacional

### Propósito
Facilitar el acceso a la justicia a damnificados a través de la gestión de demandas colectivas.

### Visión
Que toda persona tenga el acceso y las herramientas necesarias para hacer valer sus derechos.   

### Misión
Establecer los mecanismos para crear una sociedad más justa 

### Tokenomics
  - ``SUET``, token de gobernanza SueDAO (ERC20): con emisión de 1 (uno) por damnificado, no puede ser transferido. Utilizado para las votaciones relativas a la demanda de la SueDAO y a la aprobación de abogados e inversores. Serán distribuidos una vez los damnificados hayan realizado su staking de LEGY
  - ``LEGY``, token financiero (ERC20): necesario para participar en SueDAO (staking) y determinar porcentaje de participación en un potencial resarcimiento. Habrá una emisión inicial de 1M de LEGYs minteada por el equipo fundador, que se irán intercambiando por otros tokens a medida que los participantes los demanden. En el futuro, la emisión será gobernada por CollectiveSueDAO.
   - ``Damnificados``: antes de elección de abogada, aportará un monto fijo equivalente en LEGY a 200 DAI. Luego de elección de abogada, aportará  monto en LEGY equivalente al total presupuestado por sus servicios más un 15% de margen, dividido el número de damnificados.
  - ``Abogada``: monto fijo equivalente en LEGY a 200 DAI. Devueltos una vez concluida su actuación.
  - ``Inversor``: aportará como máximo el monto en LEGY habilitado por SueDAO para recibir inversiones.

### Fondos comunes
Con los fondos provenientes de los damnificados e inversores que compraron sus LEGY y los pusieron en staking, se formará un pool de recursos comunes con los que se afrontarán los gastos de funcionamiento de la SueDAO.

### Governance
En la versión MVP, la gobernanza será realizada por los damnificados con un voto por persona (App de ``Voting``) previa discusión en el Discord oficial.

## Links - Información adicional
- [Manifesto](https://drive.google.com/file/d/1S-82zWKdz5a8I387Xh6PFRQdKGf3CpJt/view?usp=sharing)
- [SueDAO (Aragon xDai)](https://aragon.1hive.org/#/collectivesue2/) 
- [DAO Education](https://dao.education/)
- [Proof of Humanity](https://www.proofofhumanity.id/)