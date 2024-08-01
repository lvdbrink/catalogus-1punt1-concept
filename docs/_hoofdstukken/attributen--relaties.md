---
layout: page
title: 7 Attributen & relaties
date: 2018-03-05
description:
lijstvolgorde: 170
toc:
- 7 Attributen & relaties
- 7.1 Woonplaats
- 7.2 Openbare ruimte
- 7.3 Nummeraanduiding
- 7.4 Pand
- 7.5 Adresseerbaar object
- 7.6 Ligplaats
- 7.7 Standplaats
- 7.8 Verblijfsobject
- 7.9 Samengestelde attributen
- 7.10 Gegevenstypen
---

# Inhoud van hoofdstuk 7 Attributen & relaties
{:.no_toc}

* ToC
{:toc}

---

# 7 Attributen & relaties
{:.no_toc}

## 7.1 Woonplaats

### 7.1.1 identificatie

_Tabel 7.1.1.a: Beschrijving van het attribuut identificatie_

| Naam | identificatie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.03 |
| **Definitie** | De unieke aanduiding van een woonplaats, zoals opgenomen in de landelijke woonplaatsentabel. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 3.0 |
| **Datum opname** | Augustus 2004 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 4 |
| **Domein: Patroon** | Een natuurlijk getal tussen 0001 en 9999 |
| **Indicatie materiële historie** | Nee |
| **Indicatie formele historie** | Nee |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | De woonplaatsen worden vastgesteld door de gemeenten. De vastgestelde woonplaatsen worden voorzien van een unieke aanduiding, te vergelijken met de gemeentecode volgens Tabel 33 Gemeententabel van de Landelijke Tabellen GBA. Deze aanduiding wordt verstrekt door de Dienst voor het kadaster en de openbare registers. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Ja |

### 7.1.2 naam

_Tabel 7.1.2.a: Beschrijving van het attribuut naam_

| Naam | naam |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.70 |
| **Definitie** | De benaming van een door het gemeentebestuur aangewezen woonplaats. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 3.0 |
| **Datum opname** | Augustus 2004 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..80 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | Het maximale aantal te gebruiken tekens voor een benaming is tachtig. Het verdient aanbeveling te streven naar korte benamingen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.1.3 geometrie

_Tabel 7.1.3.a: Beschrijving van het attribuut geometrie_

| Naam | geometrie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.71 |
| **Definitie** | De tweedimensionale geometrische representatie van het vlak dat wordt gevormd door de omtrekken van een woonplaats. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | VlakOfMultivlak |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.1.4 status

_Tabel 7.1.4.a: Beschrijving van het attribuut status_

| Naam | status |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.79 |
| **Definitie** | De fase van de levenscyclus van een woonplaats, waarin de betreffende woonplaats zich bevindt. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | StatusWoonplaats |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | De basisregistratie adressen en gebouwen bevat gegevens over zowel bestaande woonplaatsen als opgeheven woonplaatsen. Om het onderscheid tussen de stadia in de levenscyclus van de woonplaats te kunnen maken, wordt gebruik gemaakt van dit statusgegeven. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.1.5 geconstateerd

_Tabel 7.1.5.a: Beschrijving van het attribuut geconstateerd_

| Naam | geconstateerd |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.72 |
| **Definitie** | Een aanduiding waarmee kan worden aangegeven dat een woonplaats in de registratie is opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument voor deze opname. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | Indicatie |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Het feitelijk bestaan van een woonplaats dient daadwerkelijk te worden geconstateerd. Het gaat dan bijvoorbeeld om door burgers aangebrachte woonplaatsbenamingen die binnen andere processen aan het licht zijn gekomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.1.6 documentdatum

_Tabel 7.1.6.a: Beschrijving van het attribuut documentdatum_

| Naam | documentdatum |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.77 |
| **Definitie** | De datum waarop het brondocument is vastgesteld op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een woonplaats heeft plaatsgevonden. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 3.0 |
| **Datum opname** | Augustus 2004 |
| **Domein: Type** | Date |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Alleen een datum die gelijk is aan of die is gelegen voor de datum van het opnemen of muteren van het betreffende gegeven kan in de registratie worden opgenomen. In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.1.7 documentnummer

_Tabel 7.1.7.a: Beschrijving van het attribuut documentnummer_

| Naam | documentnummer |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.78 |
| **Definitie** | De unieke aanduiding van het brondocument op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een woonplaats heeft plaatsgevonden binnen een gemeente. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 3.0 |
| **Datum opname** | Augustus 2004 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..40 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

## 7.2 Openbare ruimte

### 7.2.1 identificatie

_Tabel 7.2.1.a: Beschrijving van het attribuut identificatie_

| Naam | identificatie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.01 |
| **Definitie** | De unieke aanduiding van een openbare ruimte. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | Objectnummering |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Nee |
| **Indicatie formele historie** | Nee |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Elke openbare ruimte waarvan gegevens zijn opgenomen in de basisregistratie adressen, wordt uniek aangeduid door middel van een identificatiecode. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Ja |

### 7.2.2 naam

_Tabel 7.2.2.a: Beschrijving van het attribuut naam_

| Naam | naam |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.10 |
| **Definitie** | De naam die aan een openbare ruimte is toegekend in een daartoe strekkend formeel gemeentelijk besluit. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..80 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | Het verdient aanbeveling te streven naar korte benamingen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.2.3 type

_Tabel 7.2.3.a: Beschrijving van het attribuut type_

| Naam | type |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.16 |
| **Definitie** | De aard van de als zodanig benoemde openbare ruimte. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | TypeOpenbareRuimte |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.2.4 status

_Tabel 7.2.4.a: Beschrijving van het attribuut status_

| Naam | status |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.19 |
| **Definitie** | De fase van de levenscyclus van een openbare ruimte waarin de betreffende openbare ruimte zich bevindt. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | StatusNaamgeving |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | De basisregistratie adressen en gebouwen bevat gegevens over zowel bestaande openbare ruimten als ingetrokken openbare ruimten. Om het onderscheid tussen de stadia in de levenscyclus van de openbare ruimte te kunnen maken, wordt gebruik gemaakt van dit statusgegeven. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.2.5 geconstateerd

_Tabel 7.2.5.a: Beschrijving van het attribuut geconstateerd_

| Naam | geconstateerd |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.11 |
| **Definitie** | Een aanduiding waarmee kan worden aangegeven dat een openbare ruimte in de registratie is opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument voor deze opname. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | Indicatie |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Het feitelijk bestaan van een naam van een openbare ruimte dient daadwerkelijk te worden geconstateerd. Het gaat dan bijvoorbeeld om door burgers aangebrachte benamingen die binnen andere processen aan het licht zijn gekomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.2.6 documentdatum

_Tabel 7.2.6.a: Beschrijving van het attribuut documentdatum_

| Naam | documentdatum |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.17 |
| **Definitie** | De datum waarop het brondocument is vastgesteld op basis waarvan een opname, mutatie of verwijdering van gegevens ten aanzien van een openbare ruimte heeft plaatsgevonden. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | Date |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Alleen een datum die gelijk is aan of die is gelegen voor de datum van het opnemen of muteren van het betreffende gegeven kan in de registratie worden opgenomen. In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.2.7 documentnummer

_Tabel 7.2.7.a: Beschrijving van het attribuut documentnummer_

| Naam | documentnummer |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.18 |
| **Definitie** | De unieke aanduiding van het brondocument op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een openbare ruimte heeft plaatsgevonden binnen een gemeente. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..40 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.2.8 Relatie: ligt in gerelateerde woonplaats

_Tabel 7.2.8.a: Beschrijving van de relatiesoort: ligt in_

| Naam | ligt in |
| :--- | :--- |
| **Definitie** | Een openbare ruimte ligt in een woonplaats. |

_Tabel 7.2.8.b: Beschrijving van de relatierol: gerelateerde woonplaats_

| Naam | gerelateerde woonplaats |
| :--- | :--- |
| **Stereotype** | «Relatiesoort»«Relatierol» |
| **Uni-directioneel** | Source -\> Destination |
| **Objecttype** | Openbare ruimte |
| **Gerelateerde objecttype** | Woonplaats |
| **Type aggregatie** | \- |
| **Kardinaliteit** | \[1\] |
| **Herkomst** | BAG |
| **Code** | 11.15 |
| **Definitie** | Unieke aanduiding van de Woonplaats waarbinnen een Openbare ruimte is gelegen. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | De woonplaats behorende bij de nummeraanduiding prevaleert boven de woonplaats behorende bij de openbare ruimte. Achtergrond hiervan is dat de locatie van het object bepalend is voor de vraag in welke woonplaats een adres is gelegen. |
| **Mogelijk geen waarde** | Nee |

## 7.3 Nummeraanduiding

### 7.3.1 identificatie

_Tabel 7.3.1.a: Beschrijving van het attribuut identificatie_

| Naam | identificatie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.02 |
| **Definitie** | De unieke aanduiding van een nummeraanduiding. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | Objectnummering |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Nee |
| **Indicatie formele historie** | Nee |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Elke nummeraanduiding waarvan gegevens zijn opgenomen in de basisregistratie adressen en gebouwen, wordt uniek aangeduid door middel van een identificatiecode. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Ja |

### 7.3.2 huisnummer

_Tabel 7.3.2.a: Beschrijving van het attribuut huisnummer_

| Naam | huisnummer |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.20 |
| **Definitie** | Een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nummering. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | Integer |
| **Domein: Lengte** | 1..5 |
| **Domein: Patroon** | Een natuurlijk getal tussen 1 en 99999 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.3.3 huisletter

_Tabel 7.3.3.a: Beschrijving van het attribuut huisletter_

| Naam | huisletter |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.30 |
| **Definitie** | Een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende toevoeging aan een huisnummer in de vorm van een alfanumeriek teken. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1 |
| **Domein: Patroon** | Een hoofdletter (A – Z) of kleine letter (a – z) |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[0..1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.3.4 huisnummertoevoeging

_Tabel 7.3.4.a: Beschrijving van het attribuut huisnummertoevoeging_

| Naam | huisnummertoevoeging |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.40 |
| **Definitie** | Een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nadere toevoeging aan een huisnummer of een combinatie van huisnummer en huisletter. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..4 |
| **Domein: Patroon** | Maximaal vier alfanumerieke tekens bestaande uit een combinatie van hoofdletters (A – Z), kleine letters (a – z) en/of cijfers (0 – 9) |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[0..1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.3.5 postcode

_Tabel 7.3.5.a: Beschrijving van het attribuut postcode_

| Naam | postcode |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.60 |
| **Definitie** | De door PostNL vastgestelde code behorende bij een bepaalde combinatie van een straatnaam en een huisnummer. |
| **Herkomst definitie** | Ontleend aan Logisch Ontwerp GBA versie 3.0 |
| **Datum opname** | Augustus 2004 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 6 |
| **Domein: Patroon** | Combinatie van vier cijfers (0 – 9) en twee hoofdletters (A – Z) |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[0..1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Ja |
| **Identificerend** | Nee |

### 7.3.6 type adresseerbaar object

_Tabel 7.3.6.a: Beschrijving van het attribuut type adresseerbaar object_

| Naam | type adresseerbaar object |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.66 |
| **Definitie** | De aard van het object waaraan een nummeraanduiding is toegekend. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | TypeAdresseerbaarObject |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.3.7 status

_Tabel 7.3.7.a: Beschrijving van het attribuut status_

| Naam | status |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.69 |
| **Definitie** | De fase van de levenscyclus van een nummeraanduiding waarin de betreffende nummeraanduiding zich bevindt. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | StatusNaamgeving |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | De basisregistratie adressen en gebouwen bevat gegevens over zowel bestaande nummeraanduidingen als ingetrokken nummeraanduidingen. Om het onderscheid tussen de stadia in de levenscyclus van de nummeraanduiding te kunnen maken, wordt gebruik gemaakt van dit statusgegeven. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.3.8 geconstateerd

_Tabel 7.3.8.a: Beschrijving van het attribuut geconstateerd_

| Naam | geconstateerd |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.21 |
| **Definitie** | Een aanduiding waarmee kan worden aangegeven dat een nummeraanduiding in de registratie is opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument voor deze opname. |
| **Herkomst definitie** | BAG |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | Indicatie |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Het feitelijk bestaan van een nummeraanduiding dient daadwerkelijk te worden geconstateerd. Het gaat dan bijvoorbeeld om door burgers aangebrachte nummeraanduidingen die binnen andere processen aan het licht zijn gekomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.3.9 documentdatum

_Tabel 7.3.9.a: Beschrijving van het attribuut documentdatum_

| Naam | documentdatum |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.67 |
| **Definitie** | De datum waarop het brondocument is vastgesteld op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een nummeraanduiding heeft plaatsgevonden. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | Date |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Alleen een datum die gelijk is aan of die is gelegen voor de datum van het opnemen of muteren van het betreffende gegeven kan in de registratie worden opgenomen. In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.3.10 documentnummer

_Tabel 7.3.10.a: Beschrijving van het attribuut documentnummer_

| Naam | documentnummer |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 11.68 |
| **Definitie** | De unieke aanduiding van het brondocument op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een nummeraanduiding heeft plaatsgevonden binnen een gemeente. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Oktober 2002 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..40 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.3.11 Relatie: ligt in gerelateerde woonplaats

_Tabel 7.3.11.a: Beschrijving van de relatiesoort: ligt in_

| Naam | ligt in |
| :--- | :--- |
| **Definitie** | Een adresseerbaar object ligt in een woonplaats. |

_Tabel 7.3.11.b: Beschrijving van de relatierol: gerelateerde woonplaats_

| Naam | gerelateerde woonplaats |
| :--- | :--- |
| **Stereotype** | «Relatiesoort»«Relatierol» |
| **Uni-directioneel** | Source -\> Destination |
| **Objecttype** | Nummeraanduiding |
| **Gerelateerde objecttype** | Woonplaats |
| **Type aggregatie** | \- |
| **Kardinaliteit** | \[0..1\] |
| **Herkomst** | BAG |
| **Code** | 11.61 |
| **Definitie** | Unieke aanduiding van de woonplaats waarbinnen het object waaraan de Nummeraanduiding is toegekend is gelegen. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | Als dit gegeven is opgenomen dan wordt het adres van het object bepaald door de naam van de openbare ruimte, het huisnummer, een eventuele huisletter en huisnummertoevoeging en de woonplaats zoals die met dit gegeven wordt bepaald. De woonplaats behorende bij de nummeraanduiding prevaleert dus boven de woonplaats behorende bij de openbare ruimte. Achtergrond hiervan is dat de locatie van het object bepalend is voor de vraag in welke woonplaats een adres is gelegen. |
| **Mogelijk geen waarde** | Nee |

### 7.3.12 Relatie: ligt aan gerelateerde openbare ruimte

_Tabel 7.3.12.a: Beschrijving van de relatiesoort: ligt aan_

| Naam | ligt aan |
| :--- | :--- |
| **Definitie** | Een adresseerbaar object ligt aan een openbare ruimte. |

_Tabel 7.3.12.b: Beschrijving van de relatierol: gerelateerde openbare ruimte_

| Naam | gerelateerde openbare ruimte |
| :--- | :--- |
| **Stereotype** | «Relatiesoort»«Relatierol» |
| **Uni-directioneel** | Source -\> Destination |
| **Objecttype** | Nummeraanduiding |
| **Gerelateerde objecttype** | Openbare ruimte |
| **Type aggregatie** | \- |
| **Kardinaliteit** | \[1\] |
| **Herkomst** | BAG |
| **Code** | 11.65 |
| **Definitie** | De unieke aanduiding van een Openbare ruimte waaraan een adresseerbaar object is gelegen. |
| **Herkomst definitie** | Grondslagen Basis Registratie Adressen versie 2.0 |
| **Datum opname** | Oktober 2002 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |

## 7.4 Pand

### 7.4.1 identificatie

_Tabel 7.4.1.a: Beschrijving van het attribuut identificatie_

| Naam | identificatie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 55.01 |
| **Definitie** | De unieke aanduiding van een pand. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Objectnummering |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Nee |
| **Indicatie formele historie** | Nee |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Elk pand waarvan gegevens zijn opgenomen in de BAG wordt uniek aangeduid door middel van een identificatiecode. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Ja |

### 7.4.2 geometrie

_Tabel 7.4.2.a: Beschrijving van het attribuut geometrie_

| Naam | geometrie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 55.20 |
| **Definitie** | De minimaal tweedimensionale geometrische representatie van het bovenzicht van de omtrekken van een pand. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | GM\_Surface |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.4.3 oorspronkelijk bouwjaar

_Tabel 7.4.3.a: Beschrijving van het attribuut bouwjaar_

| Naam | oorspronkelijk bouwjaar |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 55.30 |
| **Definitie** | De aanduiding van het jaar waarin een pand oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Year |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | Bij het initieel opvoeren van een PAND wordt door de gemeente een reële inschatting gemaakt van het waarschijnlijke bouwjaar van het PAND. Bij het bouwkundig gereed opleveren van het PAND wordt deze waarde in voorkomende gevallen aangepast. Indien in latere jaren wijzigingen aan een pand worden aangebracht, leidt dit niet tot wijziging van het bouwjaar. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.4.4 status

_Tabel 7.4.4.a: Beschrijving van het attribuut status_

| Naam | status |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 55.31 |
| **Definitie** | De fase van de levenscyclus van een pand waarin het betreffende pand zich bevindt. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | StatusPand |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | De basisregistratie adressen en gebouwen bevat gegevens over zowel daadwerkelijk aanwezige panden, als nog tot stand te brengen en verdwenen panden. Om het onderscheid tussen de stadia in de levenscyclus van het pand te kunnen maken, wordt gebruik gemaakt van dit statusgegeven. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.4.5 geconstateerd

_Tabel 7.4.5.a: Beschrijving van het attribuut geconstateerd_

| Naam | geconstateerd |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 55.02 |
| **Definitie** | Een aanduiding waarmee kan worden aangegeven dat een pand in de registratie is opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument voor deze opname. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | Indicatie |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Het feitelijk bestaan van een pand dient daadwerkelijk te worden geconstateerd. Het gaat dan bijvoorbeeld om niet eerder in de registratie opgenomen panden, vanwege het ontbreken van de voor de bouw benodigde vergunning. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.4.6 documentdatum

_Tabel 7.4.6.a: Beschrijving van het attribuut documentdatum_

| Naam | documentdatum |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 55.97 |
| **Definitie** | De datum waarop het brondocument is vastgesteld, op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een pand heeft plaatsgevonden. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Date |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Alleen een datum die gelijk is aan of die is gelegen voor de datum van het opnemen of muteren van het betreffende gegeven kan in de registratie worden opgenomen. In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.4.7 documentnummer

_Tabel 7.4.7.a: Beschrijving van het attribuut documentnummer_

| Naam | documentnummer |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 55.98 |
| **Definitie** | De unieke aanduiding van het brondocument op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een pand heeft plaatsgevonden binnen een gemeente. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..40 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

## 7.5 Adresseerbaar object

### 7.5.1 Relatie: heeft als hoofdadres hoofdadres

_Tabel 7.5.1.a: Beschrijving van de relatiesoort: heeft als hoofdadres_

| Naam | heeft als hoofdadres |
| :--- | :--- |
| **Definitie** | Een adresseerbaar object heeft als hoofdadres een nummeraanduiding. |

_Tabel 7.5.1.b: Beschrijving van de relatierol: hoofdadres_

| Naam | hoofdadres |
| :--- | :--- |
| **Stereotype** | «Relatiesoort»«Relatierol» |
| **Uni-directioneel** | Source -\> Destination |
| **Objecttype** | Adresseerbaar object |
| **Gerelateerde objecttype** | Nummeraanduiding |
| **Type aggregatie** | \- |
| **Kardinaliteit** | \[1\] |
| **Herkomst** | BAG |
| **Code** | 100.51 |
| **Definitie** | De unieke aanduiding van de Nummeraanduiding die in het kader van de Basisregistratie Adressen en Gebouwen is aangemerkt als het hoofdadres van een adresseerbaar object. |
| **Herkomst definitie** | BAG |
| **Datum opname** | Januari 2017 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |

### 7.5.2 Relatie: heeft als nevenadres nevenadres

_Tabel 7.5.2.a: Beschrijving van de relatiesoort: heeft als nevenadres_

| Naam | heeft als nevenadres |
| :--- | :--- |
| **Definitie** | Een adresseerbaar object heeft als nevenadres een nummeraanduiding. |

_Tabel 7.5.1.b: Beschrijving van de relatierol: nevenadres_

| Naam | nevenadres |
| :--- | :--- |
| **Stereotype** | «Relatiesoort»«Relatierol» |
| **Uni-directioneel** | Source -\> Destination |
| **Objecttype** | Adresseerbaar object |
| **Gerelateerde objecttype** | Nummeraanduiding |
| **Type aggregatie** | \- |
| **Kardinaliteit** | \[0..\*\] |
| **Herkomst** | BAG |
| **Code** | 100.52 |
| **Definitie** | De unieke aanduiding van de Nummeraanduiding die in het kader van de Basisregistratie Adressen en Gebouwen is aangemerkt als het nevenadres van een adresseerbaar object. |
| **Herkomst definitie** | BAG |
| **Datum opname** | Januari 2017 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |

## 7.6 Ligplaats

### 7.6.1 identificatie

_Tabel 7.6.1.a: Beschrijving van het attribuut identificatie_

| Naam | identificatie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 58.01 |
| **Definitie** | De unieke aanduiding van een ligplaats. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Objectnummering |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Nee |
| **Indicatie formele historie** | Nee |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Elke Ligplaats waarvan gegevens zijn opgenomen in de basisregistratie adressen en gebouwen wordt uniek aangeduid door middel van een identificatiecode. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Ja |

### 7.6.2 status

_Tabel 7.6.2.a: Beschrijving van het attribuut status_

| Naam | status |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 58.03 |
| **Definitie** | De fase van de levenscyclus van een ligplaats waarin de betreffende ligplaats zich bevindt. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | StatusPlaats |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | De BAG bevat gegevens over zowel daadwerkelijk aanwezige ligplaatsen als ingetrokken ligplaatsen. Om het onderscheid tussen de stadia in de levenscyclus van de ligplaats te kunnen maken, wordt gebruik gemaakt van dit statusgegeven. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.6.3 geometrie

_Tabel 7.6.3.a: Beschrijving van het attribuut geometrie_

| Naam | geometrie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 58.20 |
| **Definitie** | De tweedimensionale geometrische representatie van de omtrekken van een ligplaats |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | GM\_Surface |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.6.4 geconstateerd

_Tabel 7.6.4.a: Beschrijving van het attribuut geconstateerd_

| Naam | geconstateerd |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 58.02 |
| **Definitie** | Een aanduiding waarmee kan worden aangegeven dat een ligplaats in de registratie is opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument voor deze opname. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | Indicatie |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Het feitelijk bestaan van een ligplaats dient daadwerkelijk te worden geconstateerd. Het gaat dan bijvoorbeeld om het feitelijk permanent gebruik van een plaats in het water dat binnen andere processen aan het licht is gekomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.6.5 documentdatum

_Tabel 7.6.5.a: Beschrijving van het attribuut documentdatum_

| Naam | documentdatum |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 58.97 |
| **Definitie** | De datum waarop het brondocument is vastgesteld op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een ligplaats heeft plaatsgevonden. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Date |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Alleen een datum die gelijk is aan of die is gelegen voor de datum van het opnemen of muteren van het betreffende gegeven kan in de registratie worden opgenomen. In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.6.6 documentnummer

_Tabel 7.6.6.a: Beschrijving van het attribuut documentnummer_

| Naam | documentnummer |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 59.98 |
| **Definitie** | De unieke aanduiding van het brondocument op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een ligplaats heeft plaatsgevonden binnen een gemeente. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..40 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

## 7.7 Standplaats

### 7.7.1 identificatie

_Tabel 7.7.1.a: Beschrijving van het attribuut identificatie_

| Naam | identificatie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 57.01 |
| **Definitie** | De unieke aanduiding van een standplaats. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Objectnummering |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Nee |
| **Indicatie formele historie** | Nee |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Elke standplaats waarvan gegevens zijn opgenomen in de BAG wordt uniek aangeduid door middel van een identificatiecode. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Ja |

### 7.7.2 status

_Tabel 7.7.2.a: Beschrijving van het attribuut status_

| Naam | status |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 57.03 |
| **Definitie** | De fase van de levenscyclus van een standplaats waarin de betreffende standplaats zich bevindt. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 4.0 |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | StatusPlaats |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | De BAG bevat gegevens over zowel daadwerkelijk aanwezige standplaatsen als ingetrokken standplaatsen. Om het onderscheid tussen de stadia in de levenscyclus van de standplaats te kunnen maken, wordt gebruik gemaakt van dit statusgegeven. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.7.3 geometrie

_Tabel 7.7.3.a: Beschrijving van het attribuut geometrie_

| Naam | geometrie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 57.20 |
| **Definitie** | De tweedimensionale geometrische representatie van de omtrekken van een standplaats |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | GM\_Surface |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.7.4 geconstateerd

_Tabel 7.7.4.a: Beschrijving van het attribuut geconstateerd_

| Naam | geconstateerd |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 57.02 |
| **Definitie** | Een aanduiding waarmee kan worden aangegeven dat een standplaats in de registratie is opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument voor deze opname. |
| **Herkomst definitie** | BAG |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | Indicatie |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Het feitelijk bestaan van een standplaats dient daadwerkelijk te worden geconstateerd. Het gaat dan bijvoorbeeld om het feitelijk gebruik van (een gedeelte van) een terrein dat binnen andere processen aan het licht is gekomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.7.5 documentdatum

_Tabel 7.7.5.a: Beschrijving van het attribuut documentdatum_

| Naam | documentdatum |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 57.97 |
| **Definitie** | De datum waarop het brondocument is vastgesteld op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een standplaats heeft plaatsgevonden. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Date |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Alleen een datum die gelijk is aan of die is gelegen voor de datum van het opnemen of muteren van het betreffende gegeven kan in de registratie worden opgenomen. In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.7.6 documentnummer

_Tabel 7.7.6.a: Beschrijving van het attribuut documentnummer_

| Naam | documentnummer |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 57.98 |
| **Definitie** | De unieke aanduiding van het brondocument op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een standplaats heeft plaatsgevonden binnen een gemeente. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..40 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

## 7.8 Verblijfsobject

### 7.8.1 identificatie

_Tabel 7.8.1.a: Beschrijving van het attribuut identificatie_

| Naam | identificatie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 56.01 |
| **Definitie** | De unieke aanduiding van een verblijfsobject. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Objectnummering |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Nee |
| **Indicatie formele historie** | Nee |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Elk verblijfsobject waarvan gegevens zijn opgenomen in de basisregistratie gebouwen wordt uniek aangeduid door middel van een identificatiecode. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Ja |

### 7.8.2 geometrie

_Tabel 7.8.2.a: Beschrijving van het attribuut geometrie_

| Naam | geometrie |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 56.20 |
| **Definitie** | De minimaal tweedimensionale geometrische representatie van een verblijfsobject |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | PuntOfVlak |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.8.3 gebruiksdoel

_Tabel 7.8.3.a: Beschrijving van het attribuut gebruiksdoel_

| Naam | gebruiksdoel |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 56.30 |
| **Definitie** | Een categorisering van de gebruiksdoelen van het betreffende verblijfsobject zoals in de vergunning is opgenomen of bij constatering is vastgesteld. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Gebruiksdoel |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1..\*\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | Het gebruiksdoel zal initieel worden afgeleid uit de bouwkundige gebruiksfunctie conform de categorisering van het Bouwbesluit 2012 zoals deze in de bouwvergunning als zodanig is aangemerkt. Het gebruiksdoel dient niet te worden verward met de planologische bestemming en het feitelijk gebruik. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Ja |

### 7.8.4 oppervlakte

_Tabel 7.8.4.a: Beschrijving van het attribuut oppervlakte_

| Naam | oppervlakte |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 56.31 |
| **Definitie** | De gebruiksoppervlakte van een verblijfsobject in gehele vierkante meters |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Integer |
| **Domein: Lengte** | 1..6 |
| **Domein: Patroon** | Een natuurlijk getal tussen 1 en 999999 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | De exacte wijze van bepalen van de gebruiksoppervlakte wordt beschreven in NEN 2580. In essentie komt dit erop neer dat de gebruiksoppervlakte van een Verblijfsobject wordt bepaald door hetgeen op vloerniveau wordt gemeten uitgaande van de binnenzijde van de omhullende scheidingsconstructies. Vides en schalmgaten van meer dan 4 m² blijven buiten beschouwing, evenals inspringingen en uitspringingen langs de omtrekken van minder dan 0,5 m². Gebroken positieve waarden waardoor decimalen achter de komma ontstaan, vormen geen natuurlijke getallen. Om een natuurlijk getal te verkrijgen, zal in die gevallen afronding op de nabijgelegen gehele waarde moeten plaatsvinden. Oppervlakten kleiner dan 1 m² worden altijd afgerond op 1 m². |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.8.5 status

_Tabel 7.8.5.a: Beschrijving van het attribuut status_

| Naam | status |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 56.32 |
| **Definitie** | De fase van de levenscyclus van een verblijfsobject waarin het betreffende verblijfsobject zich bevindt. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | StatusVerblijfsobject |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | De BAG bevat gegevens over zowel daadwerkelijk aanwezige verblijfsobjecten, als nog tot stand te brengen en verdwenen verblijfsobjecten. Om het onderscheid tussen de stadia in de levenscyclus van het verblijfsobject te kunnen maken, wordt gebruik gemaakt van dit statusgegeven. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.8.6 geconstateerd

_Tabel 7.8.6.a: Beschrijving van het attribuut geconstateerd_

| Naam | geconstateerd |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 56.02 |
| **Definitie** | Een aanduiding waarmee kan worden aangegeven dat een verblijfsobject in de registratie is opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument voor deze opname. |
| **Herkomst definitie** | BAG |
| **Datum opname** | Februari 2006 |
| **Domein: Type** | Indicatie |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Het feitelijk bestaan van een verblijfsobject dient daadwerkelijk te worden geconstateerd. Het gaat dan bijvoorbeeld om niet eerder in de registratie opgenomen verblijfsobjecten, vanwege het ontbreken van de voor de bouw benodigde vergunning of vanwege het niet benodigd zijn van een dergelijke vergunning. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.8.7 documentdatum

_Tabel 7.8.7.a: Beschrijving van het attribuut documentdatum_

| Naam | documentdatum |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 56.97 |
| **Definitie** | De datum waarop het brondocument is vastgesteld op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een verblijfsobject heeft plaatsgevonden. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | Date |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | Alleen een datum die gelijk is aan of die is gelegen voor de datum van het opnemen of muteren van het betreffende gegeven kan in de registratie worden opgenomen. In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.8.8 documentnummer

_Tabel 7.8.8.a: Beschrijving van het attribuut documentnummer_

| Naam | documentnummer |
| :--- | :--- |
| **Stereotype** | «Attribuutsoort» |
| **Herkomst** | BAG |
| **Code** | 56.98 |
| **Definitie** | De unieke aanduiding van het brondocument op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een object heeft plaatsgevonden binnen een gemeente. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Domein: Type** | AN |
| **Domein: Lengte** | 1..40 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | Basisgegeven |
| **Indicatie in onderzoek** | Nee |
| **Toelichting** | |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |

### 7.8.9 Relatie: maakt deel uit van gerelateerd pand

_Tabel 7.8.9.a: Beschrijving van de relatiesoort: maakt deel uit van_

| Naam | maakt deel uit van |
| :--- | :--- |
| **Definitie** | Een verblijfsobject maakt onderdeel uit van een pand. |

_Tabel 7.8.9.b: Beschrijving van de relatierol: gerelateerd pand_

| Naam | gerelateerd pand |
| :--- | :--- |
| **Stereotype** | «Relatiesoort»«Relatierol» |
| **Uni-directioneel** | Source -\> Destination |
| **Objecttype** | Verblijfsobject |
| **Gerelateerde objecttype** | Pand |
| **Type aggregatie** | \- |
| **Kardinaliteit** | \[1..\*\] |
| **Herkomst** | BAG |
| **Code** | 56.90 |
| **Definitie** | De unieke aanduiding van een Pand waarvan het Verblijfsobject onderdeel uitmaakt. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | Februari 2004 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Authentiek |
| **Indicatie in onderzoek** | Ja |
| **Toelichting** | Ten aanzien van elk in de BAG opgenomen verblijfsobject wordt aangegeven, welke identificatiecodes zijn toegekend aan de panden waarbinnen het verblijfsobject is gelegen. In de meeste gevallen zal dit een enkel pand betreffen. In een aantal gevallen zal het verblijfsobject zijn gelegen in meer dan een pand. In dat geval worden hier de identificatiecodes opgenomen van de verschillende panden waarbinnen het verblijfsobject is gelegen. Bij het relateren van het verblijfsobject aan het pand of de panden waarvan het verblijfsobject onderdeel uitmaakt, wordt gebruik gemaakt van de identificatie van een pand, zoals deze eveneens in de BAG is opgenomen. |
| **Mogelijk geen waarde** | Nee |

## 7.9 Samengestelde attributen

### 7.9.1 Objectnummering

Deze paragraaf geeft een beschrijving (zie tabel 7.9.1.a) en benoemt de gegevens­elementen (zie tabel 7.9.1.b) van het samengestelde attribuut objectnummering.

_Tabel 7.9.1.a: Beschrijving van het samengestelde attribuut objectnummering_

| Naam | objectnummering |
| :--- | :--- |
| **Definitie** | Unieke objectaanduiding binnen een gemeente |
| **Stereotype** | «Complex gegevenstype» |
| **Datum opname** | Februari 2004 |

_Tabel 7.9.1.b: Overzicht van de gegevens­elementen van het samengestelde attribuut objectnummering_

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| gemeentecode | \[1\] | Zie [paragraaf 7.9.1.1](#7911-gemeentecode) |
| objecttypecode | \[1\] | Zie [paragraaf 7.9.1.2](#7912-objecttypecode) |
| objectvolgnummer | \[1\] | Zie [paragraaf 7.9.1.3](#7913-objectvolgnummer) |

#### 7.9.1.1 gemeentecode

_Tabel 7.9.1.1.a: Beschrijving van het gegevenselement gemeentecode_

| Naam | gemeentecode |
| :--- | :--- |
| **Stereotype** | «Gegevenselement» |
| **Herkomst** | BAG |
| **Code** | |
| **Definitie** | De unieke aanduiding van de gemeente in Nederland die aan het object een identificatienummer heeft toegekend. |
| **Herkomst definitie** | Ontleend aan Logisch Ontwerp GBA versie 3.0 |
| **Datum opname** | |
| **Domein: Type** | AN |
| **Domein: Lengte** | 4 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | |
| **Indicatie formele historie** | |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | |
| **Indicatie in onderzoek** | |
| **Toelichting** | |
| **Mogelijk geen waarde** | |
| **Identificerend** | Nee |

#### 7.9.1.2 objecttypecode

_Tabel 7.9.1.2.a: Beschrijving van het gegevenselement objecttypecode_

| Naam | objecttypecode |
| :--- | :--- |
| **Stereotype** | «Gegevenselement» |
| **Herkomst** | BAG |
| **Code** | |
| **Definitie** | Een code waarmee het objecttype van een object wordt aangegeven. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 4.0 |
| **Datum opname** | |
| **Domein: Type** | Objecttypecode |
| **Domein: Lengte** | 2 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | |
| **Indicatie formele historie** | |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | |
| **Indicatie in onderzoek** | |
| **Toelichting** | |
| **Mogelijk geen waarde** | |
| **Identificerend** | Nee |

#### 7.9.1.3 objectvolgnummer

_Tabel 7.9.1.3.a: Beschrijving van het gegevenselement objectvolgnummer_

| Naam | objectvolgnummer |
| :--- | :--- |
| **Stereotype** | «Gegevenselement» |
| **Herkomst** | BAG |
| **Code** | |
| **Definitie** | Een uniek volgnummer waarmee een object van een bepaald objecttype binnen een gemeente kan worden aangeduid. |
| **Herkomst definitie** | Grondslagen Basis Gebouwen Registratie versie 2.3 |
| **Datum opname** | |
| **Domein: Type** | AN |
| **Domein: Lengte** | 10 |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | |
| **Indicatie formele historie** | |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | |
| **Indicatie in onderzoek** | |
| **Toelichting** | |
| **Mogelijk geen waarde** | |
| **Identificerend** | Nee |

### 7.9.2 puntOfVlak

Deze paragraaf geeft een beschrijving (zie tabel 7.9.2.a) en benoemt de gegevens­elementen (zie tabel 7.9.2.b) van het samengestelde attribuut puntOfVlak

_Tabel 7.9.2.a: Beschrijving van het samengestelde attribuut puntOfVlak_

| Naam | puntOfVlak |
| :--- | :--- |
| **Definitie** | Een samengesteld geometriegegevenstype waarbij wordt afgedwongen dat voor de geometrie een keuze gemaakt moet worden tussen een punt (GM\_Point) of een vlak (GM\_Surface). |
| **Stereotype** | «Union» |
| **Datum opname** | Januari 2017 |

_Tabel 7.9.2.b: Overzicht van de gegevens­elementen van het samengestelde attribuut puntOfVlak_

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| Punt | \[1\] | Zie [paragraaf 7.9.2.1](#7921-punt) |
| Vlak | \[1\] | Zie [paragraaf 7.9.2.2](#7922-vlak) |

#### 7.9.2.1 punt

_Tabel 7.9.2.1.a: Beschrijving van het gegevenselement punt_

| Naam | punt |
| :--- | :--- |
| **Stereotype** | «Union element» |
| **Herkomst** | GML |
| **Code** | |
| **Definitie** | Puntgeometrie |
| **Herkomst definitie** | |
| **Datum opname** | |
| **Domein: Type** | GM\_Point |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | |
| **Indicatie formele historie** | |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | |
| **Indicatie in onderzoek** | |
| **Toelichting** | |
| **Mogelijk geen waarde** | |
| **Identificerend** | Nee |

#### 7.9.2.2 vlak

_Tabel 7.9.2.2.a: Beschrijving van het gegevenselement vlak_

| Naam | vlak |
| :--- | :--- |
| **Stereotype** | «Union element» |
| **Herkomst** | GML |
| **Code** | |
| **Definitie** | Vlakgeometrie |
| **Herkomst definitie** | |
| **Datum opname** | |
| **Domein: Type** | GM\_Surface |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | |
| **Indicatie formele historie** | |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | |
| **Indicatie in onderzoek** | |
| **Toelichting** | |
| **Mogelijk geen waarde** | |
| **Identificerend** | Nee |

### 7.9.3 vlakOfMultivlak

Deze paragraaf geeft een beschrijving (zie tabel 7.9.3.a) en benoemt de gegevens­elementen (zie tabel 7.9.3.b) van het samengestelde attribuut vlakOfMultivlak

_Tabel 7.9.3.a: Beschrijving van het samengestelde attribuut vlakOfMultivlak_

| Naam | vlakOfMultivlak |
| :--- | :--- |
| **Definitie** | Een samengesteld geometriegegevenstype waarbij wordt afgedwongen dat voor de geometrie een keuze gemaakt moet worden tussen een vlak (GM\_Surface) of een multivlak (GM\_MultiSurface). |
| **Stereotype** | «Union» |
| **Datum opname** | Januari 2017 |

_Tabel 7.9.3.b: Overzicht van de gegevens­elementen van het samengestelde attribuut vlakOfMultivlak_

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| vlak | \[1\] | Zie [paragraaf 7.9.3.1](#7931-vlak) |
| multivlak | \[1\] | Zie [paragraaf 7.9.3.2](#7932-multivlak) |

#### 7.9.3.1 vlak

_Tabel 7.9.3.1.a: Beschrijving van het gegevenselement vlak_

| Naam | vlak |
| :--- | :--- |
| **Stereotype** | «Union element» |
| **Herkomst** | GML |
| **Code** | |
| **Definitie** | Vlakgeometrie |
| **Herkomst definitie** | |
| **Datum opname** | |
| **Domein: Type** | GM\_Surface |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | |
| **Indicatie formele historie** | |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | |
| **Indicatie in onderzoek** | |
| **Toelichting** | |
| **Mogelijk geen waarde** | |
| **Identificerend** | Nee |

#### 7.9.3.2 multivlak

_Tabel 7.9.3.2.a: Beschrijving van het gegevenselement multivlak_

| Naam | multivlak |
| :--- | :--- |
| **Stereotype** | «Union element» |
| **Herkomst** | GML |
| **Code** | |
| **Definitie** | |
| **Herkomst definitie** | Multivlakgeometrie |
| **Datum opname** | |
| **Domein: Type** | GM\_MultiSurface |
| **Domein: Lengte** | |
| **Domein: Patroon** | |
| **Indicatie materiële historie** | |
| **Indicatie formele historie** | |
| **Kardinaliteit** | \[1\] |
| **Authentiek** | |
| **Indicatie in onderzoek** | |
| **Toelichting** | |
| **Mogelijk geen waarde** | |
| **Identificerend** | Nee |

## 7.10 Gegevenstypen

### 7.10.1 AN

_Tabel 7.10.1.a: Beschrijving van het gegevenstype AN_

| Naam | AN |
| :--- | :--- |
| **Definitie** | Datatype met een eigen naam, analoog aan CharacterString. De minimale lengte is tenminste een teken en de eerste positie mag geen spatie bevatten. Alle 335 tekens uit de gestandaardiseerde deelverzameling MES-1 van Unicode zijn toegestaan[^7-10-1-i] |
| **Stereotype** | «Simpel gegevenstype» |

[^7-10-1-i]: ISO/IEC (2010) _International Standard ISO/IEC 10646_, Final Committee Draft, Second edition, p. 2076. [http://unicode.org/L2/L2010/10038-fcd10646-main.pdf](http://unicode.org/L2/L2010/10038-fcd10646-main.pdf)

----

## Voetnoten
