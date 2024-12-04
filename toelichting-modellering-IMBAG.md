# Toelichting Modelleringskeuzes IMBAG

IMBAG past het KKG-metamodel toe, versie 1.0. Het KKG-metamodel is een nationaal metamodel voor informatiemodellering ontwikkeld door KING, Kadaster en Geonovum (KKG). Het metamodel is beschikbaar in versie 1.0 op de website van Geonovum: [https://www.geonovum.nl/wegwijzer/standaarden/nationaal-metamodel-voor-informatiemodellering](https://www.geonovum.nl/wegwijzer/standaarden/nationaal-metamodel-voor-informatiemodellering).

Voor IMBAG-modellen die afgeleid worden van deze catalogus, geldt ook dat deze gebaseerd zijn op het KKG-metamodel.

<aside class="note">Indien dit niet mogelijk is, moet beschreven worden wat de verhoudingen zijn tussen de gebruikte modellering en de KKG-modellering.</aside>

Zoals aangegeven in metamodel KKG 1.0, paragraaf 1.7 geeft IMBAG aan welke invulling en keuzes de BAG heeft gemaakt bij de toepassing van het metamodel. Dit wordt de KKG-extensie voor IMBAG genoemd en is hieronder beschreven.

## KKG-extensie voor IMBAG

### Type informatiemodel

_MM KKG 1.0, paragraaf 1.4._

Type is: conceptueel.

### Modelelementen

_MM KKG 1.0, paragraaf 2.2._

De volgende modelelementen worden gebruikt:

- Uit de kern: objecttype, attribuutsoort, generalisatie, relatiesoort en relatierol (target).
- Uit de datatypes: Datatype, Primitief datatype, Complex datatype (en Data element), Union (en Union element), Enumeratie (en Enumeratie element).
- Uit overige: Constraint.

### Naamgeving

_MM KKG 1.0, paragraaf 3.26._

- Gewone taal voor objecttypen, attribuutsoorten, relatiesoorten en relatierollen.
- Camelcase voor datatypen.

### Relaties

_MM KKG 1.0, paragraaf 2.3.2._

- Relatiesoort centraal (3.3.2.1): metagegevens worden opgenomen op de relatiesoort.
- Er wordt altijd een naam gegeven aan een relatiesoort en er wordt altijd een naam gegeven aan een relatierol. Deze namen zijn nooit hetzelfde.

Patronen en formele patronen: deze worden altijd beide opgenomen.

Eigen gedefinieerde datatypes: AN. Zie paragraaf 7.10.1 van deze catalogus.

### Metagegevens (tagged values)

_MM KKG 1.0, paragraaf 2.3_

Toevoeging metagegevens aan KKG:

- Code

Soms zijn de metagegevens leeg gelaten in hoofdstuk 7 van deze catalogus. Bij voorbeeld een patroon of een lengte kan leeggelaten zijn. Dit betekent respectievelijk dat er geen sprake is van een patroon en (in principe) geen sprake is van een maximale lengte.

IMBAG beschrijft de volgende metagegevens voor elementen van het stereotype «Objecttype»:

- Naam
- Stereotype
- Herkomst
- Code
- Definitie
- Herkomst definitie
- Datum opname
- Unieke aanduiding
- Populatie
- Kwaliteit
- Toelichting
- Indicatie abstract object

IMBAG beschrijft de volgende metagegevens voor elementen van het stereotype «Attribuutsoort» , «Gegevenselement» en «Union element»:

- Naam
- Stereotype
- Herkomst
- Code
- Definitie
- Herkomst definitie
- Datum opname
- Domein: Type
- Domein: Lengte
- Domein: Patroon
- Indicatie materiële historie
- Indicatie formele historie
- Kardinaliteit
- Authentiek
- Indicatie in onderzoek
- Toelichting
- Mogelijk geen waarde
- Identificerend

IMBAG beschrijft de volgende metagegevens voor elementen van het stereotype «Relatiesoort»:

- Naam
- Definitie

IMBAG beschrijft de volgende metagegevens voor elementen van het stereotype «Relatierol»:

- Naam
- Stereotype
- Uni-directioneel
- Objecttype
- Gerelateerde objecttype
- Type aggregatie
- Kardinaliteit
- Herkomst
- Code
- Definitie
- Herkomst definitie
- Datum opname
- Indicatie materiële historie
- Indicatie formele historie
- Authentiek
- Indicatie in onderzoek
- Toelichting
- Mogelijk geen waarde

IMBAG beschrijft de volgende metagegevens voor elementen van het stereotype «Complex gegevenstype» en «Union»:

- Naam
- Definitie
- Stereotype
- Datum opname

IMBAG beschrijft de volgende metagegevens voor elementen van het stereotype «Enumeratie»:

- Naam
- Definitie
- Datum opname
- Toelichting
