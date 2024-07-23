# 6 Objecttypen

## 6.1 Woonplaats

Deze paragraaf geeft een beschrijving (zie tabel 6.1.a) en benoemt de attributen (zie tabel 6.1.b) van het objecttype Woonplaats.

| Naam | Woonplaats |
| :--- | :--- |
| **Stereotype** | «Objecttype» |
| **Herkomst** | BAG |
| **Code** | 11.7 |
| **Definitie** | Een Woonplaats is een door het bevoegde gemeentelijke orgaan als zodanig aangewezen en van een naam voorzien gedeelte van het grondgebied van de gemeente. |
| **Herkomst definitie** | Artikel 1 Wet basisregistratie adressen en gebouwen |
| **Datum opname** | Augustus 2004 |
| **Unieke aanduiding** | identificatie |
| **Populatie** | De basisregistratie adressen en gebouwen bevat alle officieel als zodanig vastgestelde woonplaatsen op het Nederlandse grondgebied. Nieuwe woonplaatsen worden in de basisregistratie adressen en gebouwen opgenomen op basis van daartoe aangewezen brondocumenten waarin het ontstaan van de woonplaats als zodanig is vastgelegd. Daarnaast bevat de basisregistratie adressen en gebouwen alle geconstateerde woonplaatsen in de zin van artikel 2, tweede lid, onderdeel b, sub 3 van de wet. De gegevens over woonplaatsen blijven in de basisregistratie aanwezig, ook indien de woonplaats als zodanig wordt opgeheven. De basisregistratie bevat in principe geen gegevens over woonplaatsen die voor 1 juli 2009 zijn opgeheven. |
| **Kwaliteit** | Een Woonplaats bestaat als hiertoe door het bevoegde gemeentelijke orgaan als zodanig een besluit is genomen. |
| **Toelichting** | Zie [paragraaf 10.4](objectafbakening.md#104-indeling-in-woonplaatsen) voor de interpretatie van de definitie van het objecttype Woonplaats. |
| **Indicatie abstract object** | Nee |
[Tabel 6.1.a: Beschrijving van het objecttype Woonplaats]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie [paragraaf 7.1.1](#711-identificatie) |
| naam | \[1\] | Zie [paragraaf 7.1.2](#712-naam) |
| geometrie | \[1\] | Zie [paragraaf 7.1.3](#713-geometrie) |
| status | \[1\] | Zie [paragraaf 7.1.4](#714-status) |
| geconstateerd | \[1\] | Zie [paragraaf 7.1.5](#715-geconstateerd) |
| documentdatum | \[1\] | Zie [paragraaf 7.1.6](#716-documentdatum) |
| documentnummer | \[1\] | Zie [paragraaf 7.1.7](#717-documentnummer) |
[Tabel 6.1.b: Overzicht attributen]

## 6.2 Openbare ruimte

Deze paragraaf geeft een beschrijving (zie tabel 6.2.a) en benoemt de attributen (zie tabel 6.2.b) en relaties (zie tabel 6.2.c) van het objecttype Openbare ruimte.

| Naam | Openbare ruimte |
| :--- | :--- |
| **Stereotype** | «Objecttype» |
| **Herkomst** | BAG |
| **Code** | 11.1 |
| **Definitie** | Een Openbare ruimte is een door het bevoegde gemeentelijke orgaan als zodanig aangewezen en van een naam voorziene buitenruimte die binnen één woonplaats is gelegen. |
| **Herkomst definitie** | Artikel 1 Wet basisregistratie adressen en gebouwen |
| **Datum opname** | Oktober 2002 |
| **Unieke aanduiding** | identificatie |
| **Populatie** | De basisregistratie adressen en gebouwen bevat alle officieel als zodanig aangewezen openbare ruimten op het Nederlands grondgebied. Nieuwe openbare ruimten worden in de basisregistratie adressen en gebouwen opgenomen op basis van daartoe aangewezen brondocumenten waarin het ontstaan van de openbare ruimte als zodanig is vastgelegd. Daarnaast bevat de basisregistratie adressen en gebouwen alle geconstateerde openbare ruimten in de zin van artikel 2, tweede lid, onderdeel b, sub 4 van de wet. De gegevens over openbare ruimten blijven in de basisregistratie adressen en gebouwen aanwezig, ook indien de openbare ruimte als zodanig wordt ingetrokken. De basisregistratie adressen en gebouwen bevat in principe geen gegevens over openbare ruimten die voor 1 juli 2009 zijn ingetrokken. |
| **Kwaliteit** | Een Openbare ruimte bestaat als hiertoe door het bevoegde gemeentelijke orgaan als zodanig een besluit is genomen. |
| **Toelichting** | Als openbare ruimte worden onder meer aangemerkt wegen, water, spoorbanen en landschappelijke gebieden. Zie [paragraaf 10.3](objectafbakening.md#103-vaststelling-van-openbare-ruimten) voor de interpretatie van de definitie van het objecttype Openbare ruimte. |
| **Indicatie abstract object** | Nee |
[Tabel 6.2.a: Beschrijving van het objecttype Openbare ruimte]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie [paragraaf 7.2.1](#721-identificatie) |
| naam | \[1\] | Zie [paragraaf 7.2.2](#722-naam) |
| type | \[1\] | Zie [paragraaf 7.2.3](#723-type) |
| status | \[1\] | Zie [paragraaf 7.2.4](#724-status) |
| geconstateerd | \[1\] | Zie [paragraaf 7.2.5](#725-geconstateerd) |
| documentdatum | \[1\] | Zie [paragraaf 7.2.6](#726-documentdatum) |
| documentnummer | \[1\] | Zie [paragraaf 7.2.7](#727-documentnummer) |
[Tabel 6.2.b: Overzicht attributen]

| Relatiesoort | Relatierol | Kardinaliteit | Beschrijving |
| :---: | :---: | :---: | :--- |
| ligt in | gerelateerde woonplaats | \[1\] | Zie [paragraaf 7.2.8](#728-relatie-ligt-in-gerelateerde-woonplaats) |
[Tabel 6.2.c: Overzicht relaties]

## 6.3 Nummeraanduiding

Deze paragraaf geeft een beschrijving (zie tabel 6.3.a) en benoemt de attributen (zie tabel 6.3.b) en relaties (zie tabel 6.3.c) van het objecttype Nummeraanduiding.

| Naam | Nummeraanduiding |
| :--- | :--- |
| **Stereotype** | «Objecttype» |
| **Herkomst** | BAG |
| **Code** | 11.2 |
| **Definitie** | Een Nummeraanduiding is een door het bevoegde gemeentelijke orgaan als zodanig toegekende aanduiding van een verblijfsobject, een standplaats of een ligplaats. |
| **Herkomst definitie** | Artikel 1 Wet basisregistratie en gebouwen |
| **Datum opname** | Oktober 2002 |
| **Unieke aanduiding** | identificatie |
| **Populatie** | De basisregistratie adressen en gebouwen bevat alle officieel als zodanig toegekende nummeraanduidingen op het Nederlandse grondgebied. Nieuwe nummeraanduidingen worden in de basisregistratie adressen en gebouwen opgenomen op basis van daartoe aangewezen brondocumenten waarin het ontstaan van de nummeraanduiding als zodanig is vastgelegd. Daarnaast bevat de basisregistratie adressen en gebouwen alle geconstateerde nummeraanduidingen in de zin van artikel 2, tweede lid, onderdeel b, sub 5 van de wet. De gegevens over nummeraanduidingen blijven in de basisregistratie adressen en gebouwen aanwezig, ook indien de nummeraanduiding als zodanig wordt ingetrokken. De basisregistratie adressen en gebouwen bevat in principe geen gegevens over nummeraanduidingen die voor 1 juli 2009 zijn ingetrokken. |
| **Kwaliteit** | Een Nummeraanduiding bestaat als hiertoe door het bevoegde gemeentelijke orgaan als zodanig een besluit is genomen. Een Nummeraanduiding heeft altijd betrekking op een enkel adresseerbaar object. |
| **Toelichting** | Nummeraanduidingen kunnen alleen worden toegekend aan als zodanig aangewezen adresseerbare objecttypen. De thans aangewezen adresseerbare objecttypen zijn verblijfsobjecten, standplaatsen en ligplaatsen. Zie [paragraaf 10.2](objectafbakening.md#102-toekenning-van-nummeraanduidingen) voor de interpretatie van de definitie van het objecttype Nummeraanduiding. |
| **Indicatie abstract object** | Nee |
[Tabel 6.3.a: Beschrijving van het objecttype Nummeraanduiding]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie [paragraaf 7.3.1](#731-identificatie) |
| huisnummer | \[1\] | Zie [paragraaf 7.3.2](#732-huisnummer) |
| huisletter | \[0..1\] | Zie [paragraaf 7.3.3](#733-huisletter) |
| huisnummertoevoeging | \[0..1\] | Zie [paragraaf 7.3.4](#734-huisnummertoevoeging) |
| postcode | \[0..1\] | Zie [paragraaf 7.3.5](#735-postcode) |
| type adresseerbaar object | \[1\] | Zie [paragraaf 7.3.6](#736-type-adresseerbaar-object) |
| status | \[1\] | Zie [paragraaf 7.3.7](#737-status) |
| geconstateerd | \[1\] | Zie [paragraaf 7.3.8](#738-geconstateerd) |
| documentdatum | \[1\] | Zie [paragraaf 7.3.9](#739-documentdatum) |
| documentnummer | \[1\] | Zie [paragraaf 7.3.10](#7310-documentnummer) |
[Tabel 6.3.b: Overzicht attributen]

| Relatiesoort | Relatierol | Kardinaliteit | Beschrijving |
| :---: | :---: | :---: | :--- |
| ligt in | gerelateerde woonplaats | \[0..1\] | Zie [paragraaf 7.3.11](#7311-relatie-ligt-in-gerelateerde-woonplaats) |
| ligt aan | gerelateerde openbare ruimte | \[1\] | Zie [paragraaf 7.3.12](#7312-relatie-ligt-aan-gerelateerde-openbare-ruimte) |
[Tabel 6.3.c: Overzicht relaties]

## 6.4 Pand

Deze paragraaf geeft een beschrijving (zie tabel 6.4.a) en benoemt de attributen (zie tabel 6.4.b) van het objecttype Pand.

| Naam | Pand |
| :--- | :--- |
| **Stereotype** | «Objecttype» |
| **Herkomst** | BAG |
| **Code** | 55 |
| **Definitie** | Een Pand is de kleinste, bij de totstandkoming functioneel en bouwkundig-constructief zelfstandige eenheid die direct en duurzaam met de aarde is verbonden en betreedbaar en afsluitbaar is. |
| **Herkomst definitie** | Artikel 1 Wet basisregistratie adressen en gebouwen |
| **Datum opname** | Februari 2004 |
| **Unieke aanduiding** | identificatie |
| **Populatie** | De basisregistratie adressen en gebouwen omvat gegevens over alle panden op het Nederlands grondgebied, die voldoen aan bovenstaande objectdefinitie. Gegevens over een nieuw pand worden in de basisregistratie adressen en gebouwen opgenomen bij verlening van de voor het realiseren van het pand benodigde toestemming of het opmaken van een in artikel 10, onderdeel b van de wet genoemd document van constatering. De gegevens over panden blijven in de basisregistratie adressen en gebouwen aanwezig, ook indien het pand als zodanig niet meer aanwezig is. De basisregistratie adressen en gebouwen bevat in principe geen gegevens over panden die op 1 juli 2009 niet meer als zodanig aanwezig waren. |
| **Kwaliteit** | |
| **Toelichting** | Zie [paragraaf 10.6](objectafbakening.md#106-afbakening-van-panden) voor de interpretatie van de definitie van het objecttype Pand. |
| **Indicatie abstract object** | Nee |
[Tabel 6.4.a: Beschrijving van het objecttype Pand]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie [paragraaf 7.4.1](#741-identificatie) |
| geometrie | \[1\] | Zie [paragraaf 7.4.2](#742-geometrie) |
| oorspronkelijk bouwjaar | \[1\] | Zie [paragraaf 7.4.3](#743-oorspronkelijk-bouwjaar) |
| status | \[1\] | Zie [paragraaf 7.4.4](#744-status) |
| geconstateerd | \[1\] | Zie [paragraaf 7.4.5](#745-geconstateerd) |
| documentdatum | \[1\] | Zie [paragraaf 7.4.6](#746-documentdatum) |
| documentnummer | \[1\] | Zie [paragraaf 7.4.7](#747-documentnummer) |
[Tabel 6.4.b: Overzicht attributen]

## 6.5 Adresseerbaar object

Deze paragraaf geeft een beschrijving (zie tabel 6.5.a) en benoemt de relaties (zie tabel 6.5.b) van het objecttype Adresseerbaar object.

| Naam | Adresseerbaar object |
| :--- | :--- |
| **Stereotype** | «Objecttype» |
| **Herkomst** | BAG |
| **Code** | 101 |
| **Definitie** | Een Adresseerbaar object is een (abstract) object waaraan adressen kunnen worden toegekend. |
| **Herkomst definitie** | BAG |
| **Datum opname** | Januari 2017 |
| **Unieke aanduiding** | |
| **Populatie** | |
| **Kwaliteit** | |
| **Toelichting** | Een Adresseerbaar object is een Standplaats, een Ligplaats of een Verblijfsobject. |
| **Indicatie abstract object** | Ja |
[Tabel 6.5.a: Beschrijving van het objecttype Adresseerbaar object]

| Relatiesoort | Relatierol | Kardinaliteit | Beschrijving |
| :---: | :---: | :---: | :--- |
| heeft als hoofdadres | hoofdadres | \[1\] | Zie [paragraaf 7.5.1](#751-relatie-heeft-als-hoofdadres-hoofdadres) |
| heeft als nevenadres | nevenadres | \[0..\*\] | Zie [paragraaf 7.5.2](#752-relatie-heeft-als-nevenadres-nevenadres) |
[Tabel 6.5.b: Overzicht relaties]

## 6.6 Ligplaats

Deze paragraaf geeft een beschrijving (zie tabel 6.6.a) en benoemt de attributen (zie tabel 6.6.b) van het objecttype Ligplaats.

| Naam | Ligplaats |
| :--- | :--- |
| **Stereotype** | «Objecttype» |
| **Herkomst** | BAG |
| **Code** | 58 |
| **Definitie** | Een Ligplaats is een door het bevoegde gemeentelijke orgaan als zodanig aangewezen plaats in het water al dan niet aangevuld met een op de oever aanwezig terrein of een gedeelte daarvan, die bestemd is voor het permanent afmeren van een voor woon-, bedrijfsmatige of recreatieve doeleinden geschikt drijvend object. |
| **Herkomst definitie** | Artikel 1 Wet basisregistratie adressen en gebouwen |
| **Datum opname** | Februari 2004 |
| **Unieke aanduiding** | identificatie |
| **Populatie** | De basisregistratie adressen en gebouwen omvat gegevens over alle ligplaatsen op het Nederlands grondgebied, die daartoe officieel als zodanig zijn aangewezen. Nieuwe ligplaatsen worden in de basisregistratie adressen en gebouwen opgenomen op basis van daartoe aangewezen brondocumenten, waarin het ontstaan van de ligplaats als zodanig is vastgelegd. Daarnaast bevat de basisregistratie adressen en gebouwen alle geconstateerde ligplaatsen in de zin van artikel 2, tweede lid, onderdeel b, sub 2 van de wet. De gegevens over ligplaatsen blijven in de basisregistratie adressen en gebouwen aanwezig, ook indien de ligplaats als zodanig wordt ingetrokken. De basisregistratie adressen en gebouwen bevat in principe geen gegevens over ligplaatsen die voor 1 juli 2009 zijn ingetrokken. |
| **Kwaliteit** | Een Ligplaats bestaat op het moment dat er sprake is van een aanwijzing als ligplaats door het bevoegde gemeentelijke orgaan. |
| **Toelichting** | Zie [paragraaf 10.5](objectafbakening.md#105-afbakening-van-ligplaatsen) voor de interpretatie van de definitie van het objecttype Ligplaats. |
| **Indicatie abstract object** | Nee |
[Tabel 6.6.a: Beschrijving van het objecttype Ligplaats]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie [paragraaf 7.6.1](#761-identificatie) |
| status | \[1\] | Zie [paragraaf 7.6.2](#762-status) |
| geometrie | \[1\] | Zie [paragraaf 7.6.3](#763-geometrie) |
| geconstateerd | \[1\] | Zie [paragraaf 7.6.4](#764-geconstateerd) |
| documentdatum | \[1\] | Zie [paragraaf 7.6.5](#765-documentdatum) |
| documentnummer | \[1\] | Zie [paragraaf 7.6.6](#766-documentnummer) |
[Tabel 6.6.b: Overzicht attributen]

## 6.7 Standplaats

Deze paragraaf geeft een beschrijving (zie tabel 6.7.a) en benoemt de attributen (zie tabel 6.7.b) van het objecttype Standplaats.

| Naam | Standplaats |
| :--- | :--- |
| **Stereotype** | «Objecttype» |
| **Herkomst** | BAG |
| **Code** | 57 |
| **Definitie** | Een Standplaats is een door het bevoegde gemeentelijke orgaan als zodanig aangewezen terrein of gedeelte daarvan dat bestemd is voor het permanent plaatsen van een niet direct en niet duurzaam met de aarde verbonden en voor woon-, bedrijfsmatige, of recreatieve doeleinden geschikte ruimte. |
| **Herkomst definitie** | Artikel 1 Wet basisregistratie adressen en gebouwen |
| **Datum opname** | Februari 2004 |
| **Unieke aanduiding** | identificatie |
| **Populatie** | De basisregistratie adressen en gebouwen omvat gegevens over alle standplaatsen op het Nederlands grondgebied, die daartoe officieel als zodanig zijn aangewezen. Nieuwe standplaatsen worden in de basisregistratie adressen en gebouwen opgenomen op basis van daartoe aangewezen brondocumenten, waarin het ontstaan van de standplaats als zodanig is vastgelegd. Daarnaast bevat de basisregistratie adressen en gebouwen alle geconstateerde standplaatsen in de zin van artikel 10, tweede lid, onderdeel b van de wet. De gegevens over standplaatsen blijven in de basisregistratie adressen en gebouwen aanwezig, ook indien de standplaats als zodanig wordt ingetrokken. De basisregistratie adressen en gebouwen bevat in principe geen gegevens over standplaatsen die voor 1 juli 2009 zijn ingetrokken. |
| **Kwaliteit** | |
| **Toelichting** | Zie [paragraaf 10.7](objectafbakening.md#107-afbakening-van-standplaatsen) voor de interpretatie van de definitie van het objecttype Standplaats. |
| **Indicatie abstract object** | Nee |
[Tabel 6.7.a: Beschrijving van het objecttype Standplaats]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie [paragraaf 7.7.1](#771-identificatie) |
| status | \[1\] | Zie [paragraaf 7.7.2](#772-status) |
| geometrie | \[1\] | Zie [paragraaf 7.7.3](#773-geometrie) |
| geconstateerd | \[1\] | Zie [paragraaf 7.7.4](#774-geconstateerd) |
| documentdatum | \[1\] | Zie [paragraaf 7.7.5](#775-documentdatum) |
| documentnummer | \[1\] | Zie [paragraaf 7.7.6](#776-documentnummer) |
[Tabel 6.7.b: Overzicht attributen]

## 6.8 Verblijfsobject

Deze paragraaf geeft een beschrijving (zie tabel 6.8.a) en benoemt de attributen (zie tabel 6.8.b) en relaties (zie tabel 6.8.c) van het objecttype Verblijfsobject.

| Naam | Verblijfsobject |
| :--- | :--- |
| **Stereotype** | «Objecttype» |
| **Herkomst** | BAG |
| **Code** | 56 |
| **Definitie** | Een Verblijfsobject is de kleinste binnen een of meer panden gelegen en voor woon-, bedrijfsmatige, of recreatieve doeleinden geschikte eenheid van gebruik die ontsloten wordt via een eigen afsluitbare toegang vanaf de openbare weg, een erf of een gedeelde verkeersruimte, onderwerp kan zijn van goederenrechtelijke rechtshandelingen en in functioneel opzicht zelfstandig is. |
| **Herkomst definitie** | Artikel 1 Wet basisregistratie adressen en gebouwen |
| **Datum opname** | Februari 2004 |
| **Unieke aanduiding** | identificatie |
| **Populatie** | De basisregistratie adressen en gebouwen omvat gegevens over alle verblijfsobjecten op het Nederlands grondgebied die voldoen aan bovenstaande objectdefinitie. Gegevens over een nieuw verblijfsobject worden in de basisregistratie adressen en gebouwen opgenomen bij verlening van de voor het realiseren van het verblijfsobject benodigde toestemming of het opmaken van een in artikel 10, onderdeel b van de wet genoemd document van constatering. De gegevens over verblijfsobjecten blijven in de basisregistratie adressen en gebouwen aanwezig, ook indien het verblijfsobject als zodanig niet meer aanwezig is. De basisregistratie adressen en gebouwen bevat in principe geen gegevens over verblijfsobjecten die op 1 juli 2009 niet meer als zodanig aanwezig waren. |
| **Kwaliteit** | |
| **Toelichting** | Zie [paragraaf 10.8](objectafbakening.md#108-afbakening-van-verblijfsobjecten) voor de interpretatie van de definitie van het objecttype Verblijfsobject. |
| **Indicatie abstract object** | Nee |
[Tabel 6.8.a: Beschrijving van het objecttype Verblijfsobject]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie [paragraaf 7.8.1](#781-identificatie) |
| geometrie | \[1\] | Zie [paragraaf 7.8.2](#782-geometrie) |
| gebruiksdoel | \[1..\*\] | Zie [paragraaf 7.8.3](#783-gebruiksdoel) |
| oppervlakte | \[1\] | Zie [paragraaf 7.8.4](#784-oppervlakte) |
| status | \[1\] | Zie [paragraaf 7.8.5](#785-status) |
| geconstateerd | \[1\] | Zie [paragraaf 7.8.6](#786-geconstateerd) |
| documentdatum | \[1\] | Zie [paragraaf 7.8.7](#787-documentdatum) |
| documentnummer | \[1\] | Zie [paragraaf 7.8.8](#788-documentnummer) |
[Tabel 6.8.b: Overzicht attributen]

| Relatiesoort | Relatierol | Kardinaliteit | Beschrijving |
| :---: | :---: | :---: | :--- |
| maakt deel uit van | gerelateerd pand | \[1..\*\] | Zie [paragraaf 7.8.9](#789-relatie-maakt-deel-uit-van-gerelateerd-pand) |
[Tabel 6.8.c: Overzicht relaties]

# 7 Attributen & relaties

## 7.1 Woonplaats

### 7.1.1 identificatie

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
[Tabel 7.1.1.a: Beschrijving van het attribuut identificatie]

### 7.1.2 naam

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
[Tabel 7.1.2.a: Beschrijving van het attribuut naam]

### 7.1.3 geometrie

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
[Tabel 7.1.3.a: Beschrijving van het attribuut geometrie]

### 7.1.4 status

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
[Tabel 7.1.4.a: Beschrijving van het attribuut status]

### 7.1.5 geconstateerd

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
[Tabel 7.1.5.a: Beschrijving van het attribuut geconstateerd]

### 7.1.6 documentdatum

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
| **Toelichting** | In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |
[Tabel 7.1.6.a: Beschrijving van het attribuut documentdatum]

### 7.1.7 documentnummer

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
[Tabel 7.1.7.a: Beschrijving van het attribuut documentnummer]

## 7.2 Openbare ruimte

### 7.2.1 identificatie

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
[Tabel 7.2.1.a: Beschrijving van het attribuut identificatie]

### 7.2.2 naam

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
[Tabel 7.2.2.a: Beschrijving van het attribuut naam]

### 7.2.3 type

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
[Tabel 7.2.3.a: Beschrijving van het attribuut type]

### 7.2.4 status

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
[Tabel 7.2.4.a: Beschrijving van het attribuut status]

### 7.2.5 geconstateerd

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
[Tabel 7.2.5.a: Beschrijving van het attribuut geconstateerd]

### 7.2.6 documentdatum

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
| **Toelichting** | In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |
[Tabel 7.2.6.a: Beschrijving van het attribuut documentdatum]

### 7.2.7 documentnummer

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
[Tabel 7.2.7.a: Beschrijving van het attribuut documentnummer]

### 7.2.8 Relatie: ligt in gerelateerde woonplaats

| Naam | ligt in |
| :--- | :--- |
| **Definitie** | Een openbare ruimte ligt in een woonplaats. |
[Tabel 7.2.8.a: Beschrijving van de relatiesoort: ligt in]

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
[Tabel 7.2.8.b: Beschrijving van de relatierol: gerelateerde woonplaats]

## 7.3 Nummeraanduiding

### 7.3.1 identificatie

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
[Tabel 7.3.1.a: Beschrijving van het attribuut identificatie]

### 7.3.2 huisnummer

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
[Tabel 7.3.2.a: Beschrijving van het attribuut huisnummer]

### 7.3.3 huisletter

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
[Tabel 7.3.3.a: Beschrijving van het attribuut huisletter]

### 7.3.4 huisnummertoevoeging

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
[Tabel 7.3.4.a: Beschrijving van het attribuut huisnummertoevoeging]

### 7.3.5 postcode

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
[Tabel 7.3.5.a: Beschrijving van het attribuut postcode]

### 7.3.6 type adresseerbaar object

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
[Tabel 7.3.6.a: Beschrijving van het attribuut type adresseerbaar object]

### 7.3.7 status

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
[Tabel 7.3.7.a: Beschrijving van het attribuut status]

### 7.3.8 geconstateerd

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
[Tabel 7.3.8.a: Beschrijving van het attribuut geconstateerd]

### 7.3.9 documentdatum

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
| **Toelichting** | In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |
[Tabel 7.3.9.a: Beschrijving van het attribuut documentdatum]

### 7.3.10 documentnummer

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
[Tabel 7.3.10.a: Beschrijving van het attribuut documentnummer]

### 7.3.11 Relatie: ligt in gerelateerde woonplaats

| Naam | ligt in |
| :--- | :--- |
| **Definitie** | Een adresseerbaar object ligt in een woonplaats. |
[Tabel 7.3.11.a: Beschrijving van de relatiesoort: ligt in]

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
[Tabel 7.3.11.b: Beschrijving van de relatierol: gerelateerde woonplaats]

### 7.3.12 Relatie: ligt aan gerelateerde openbare ruimte

| Naam | ligt aan |
| :--- | :--- |
| **Definitie** | Een adresseerbaar object ligt aan een openbare ruimte. |
[Tabel 7.3.12.a: Beschrijving van de relatiesoort: ligt aan]

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
[Tabel 7.3.12.b: Beschrijving van de relatierol: gerelateerde openbare ruimte]

## 7.4 Pand

### 7.4.1 identificatie

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
[Tabel 7.4.1.a: Beschrijving van het attribuut identificatie]

### 7.4.2 geometrie

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
[Tabel 7.4.2.a: Beschrijving van het attribuut geometrie]

### 7.4.3 oorspronkelijk bouwjaar

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
[Tabel 7.4.3.a: Beschrijving van het attribuut bouwjaar]

### 7.4.4 status

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
[Tabel 7.4.4.a: Beschrijving van het attribuut status]

### 7.4.5 geconstateerd

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
[Tabel 7.4.5.a: Beschrijving van het attribuut geconstateerd]

### 7.4.6 documentdatum

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
[Tabel 7.4.6.a: Beschrijving van het attribuut documentdatum]

### 7.4.7 documentnummer

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
[Tabel 7.4.7.a: Beschrijving van het attribuut documentnummer]

## 7.5 Adresseerbaar object

### 7.5.1 Relatie: heeft als hoofdadres hoofdadres

| Naam | heeft als hoofdadres |
| :--- | :--- |
| **Definitie** | Een adresseerbaar object heeft als hoofdadres een nummeraanduiding. |
[Tabel 7.5.1.a: Beschrijving van de relatiesoort: heeft als hoofdadres]

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
[Tabel 7.5.1.b: Beschrijving van de relatierol: hoofdadres]

### 7.5.2 Relatie: heeft als nevenadres nevenadres

| Naam | heeft als nevenadres |
| :--- | :--- |
| **Definitie** | Een adresseerbaar object heeft als nevenadres een nummeraanduiding. |
[Tabel 7.5.2.a: Beschrijving van de relatiesoort: heeft als nevenadres]

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
[Tabel 7.5.1.b: Beschrijving van de relatierol: nevenadres]

## 7.6 Ligplaats

### 7.6.1 identificatie

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
[Tabel 7.6.1.a: Beschrijving van het attribuut identificatie]

### 7.6.2 status

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
[Tabel 7.6.2.a: Beschrijving van het attribuut status]

### 7.6.3 geometrie

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
[Tabel 7.6.3.a: Beschrijving van het attribuut geometrie]

### 7.6.4 geconstateerd

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
[Tabel 7.6.4.a: Beschrijving van het attribuut geconstateerd]

### 7.6.5 documentdatum

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
| **Toelichting** | In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |
[Tabel 7.6.5.a: Beschrijving van het attribuut documentdatum]

### 7.6.6 documentnummer

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
[Tabel 7.6.6.a: Beschrijving van het attribuut documentnummer]

## 7.7 Standplaats

### 7.7.1 identificatie

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
[Tabel 7.7.1.a: Beschrijving van het attribuut identificatie]

### 7.7.2 status

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
[Tabel 7.7.2.a: Beschrijving van het attribuut status]

### 7.7.3 geometrie

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
[Tabel 7.7.3.a: Beschrijving van het attribuut geometrie]

### 7.7.4 geconstateerd

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
[Tabel 7.7.4.a: Beschrijving van het attribuut geconstateerd]

### 7.7.5 documentdatum

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
| **Toelichting** | In het geval het brondocument een besluit van een bestuursorgaan betreft, dan is de datum van het brondocument de datum waarop het besluit is genomen. |
| **Mogelijk geen waarde** | Nee |
| **Identificerend** | Nee |
[Tabel 7.7.5.a: Beschrijving van het attribuut documentdatum]

### 7.7.6 documentnummer

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
[Tabel 7.7.6.a: Beschrijving van het attribuut documentnummer]

## 7.8 Verblijfsobject

### 7.8.1 identificatie

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
[Tabel 7.8.1.a: Beschrijving van het attribuut identificatie]

### 7.8.2 geometrie

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
[Tabel 7.8.2.a: Beschrijving van het attribuut geometrie]

### 7.8.3 gebruiksdoel

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
[Tabel 7.8.3.a: Beschrijving van het attribuut gebruiksdoel]

### 7.8.4 oppervlakte

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
[Tabel 7.8.4.a: Beschrijving van het attribuut oppervlakte]

### 7.8.5 status

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
[Tabel 7.8.5.a: Beschrijving van het attribuut status]

### 7.8.6 geconstateerd

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
[Tabel 7.8.6.a: Beschrijving van het attribuut geconstateerd]

### 7.8.7 documentdatum

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
[Tabel 7.8.7.a: Beschrijving van het attribuut documentdatum]

### 7.8.8 documentnummer

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
[Tabel 7.8.8.a: Beschrijving van het attribuut documentnummer]

### 7.8.9 Relatie: maakt deel uit van gerelateerd pand

| Naam | maakt deel uit van |
| :--- | :--- |
| **Definitie** | Een verblijfsobject maakt onderdeel uit van een pand. |
[Tabel 7.8.9.a: Beschrijving van de relatiesoort: maakt deel uit van]

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
[Tabel 7.8.9.b: Beschrijving van de relatierol: gerelateerd pand]

## 7.9 Samengestelde attributen

### 7.9.1 Objectnummering

Deze paragraaf geeft een beschrijving (zie tabel 7.9.1.a) en benoemt de gegevens­elementen (zie tabel 7.9.1.b) van het samengestelde attribuut objectnummering.

| Naam | objectnummering |
| :--- | :--- |
| **Definitie** | Unieke objectaanduiding binnen een gemeente |
| **Stereotype** | «Complex gegevenstype» |
| **Datum opname** | Februari 2004 |
[Tabel 7.9.1.a: Beschrijving van het samengestelde attribuut objectnummering]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| gemeentecode | \[1\] | Zie [paragraaf 7.9.1.1](#7911-gemeentecode) |
| objecttypecode | \[1\] | Zie [paragraaf 7.9.1.2](#7912-objecttypecode) |
| objectvolgnummer | \[1\] | Zie [paragraaf 7.9.1.3](#7913-objectvolgnummer) |
[Tabel 7.9.1.b: Overzicht van de gegevens­elementen van het samengestelde attribuut objectnummering]

#### 7.9.1.1 gemeentecode

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
[Tabel 7.9.1.1.a: Beschrijving van het gegevenselement gemeentecode]

#### 7.9.1.2 objecttypecode

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
[Tabel 7.9.1.2.a: Beschrijving van het gegevenselement objecttypecode]

#### 7.9.1.3 objectvolgnummer

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
[Tabel 7.9.1.3.a: Beschrijving van het gegevenselement objectvolgnummer]

### 7.9.2 puntOfVlak

Deze paragraaf geeft een beschrijving (zie tabel 7.9.2.a) en benoemt de gegevens­elementen (zie tabel 7.9.2.b) van het samengestelde attribuut puntOfVlak

| Naam | puntOfVlak |
| :--- | :--- |
| **Definitie** | Een samengesteld geometriegegevenstype waarbij wordt afgedwongen dat voor de geometrie een keuze gemaakt moet worden tussen een punt (GM\_Point) of een vlak (GM\_Surface). |
| **Stereotype** | «Union» |
| **Datum opname** | Januari 2017 |
[Tabel 7.9.2.a: Beschrijving van het samengestelde attribuut puntOfVlak]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| Punt | \[1\] | Zie [paragraaf 7.9.2.1](#7921-punt) |
| Vlak | \[1\] | Zie [paragraaf 7.9.2.2](#7922-vlak) |
[Tabel 7.9.2.b: Overzicht van de gegevens­elementen van het samengestelde attribuut puntOfVlak]

#### 7.9.2.1 punt

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
[Tabel 7.9.2.1.a: Beschrijving van het gegevenselement punt]

#### 7.9.2.2 vlak

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
[Tabel 7.9.2.2.a: Beschrijving van het gegevenselement vlak]

### 7.9.3 vlakOfMultivlak

Deze paragraaf geeft een beschrijving (zie tabel 7.9.3.a) en benoemt de gegevens­elementen (zie tabel 7.9.3.b) van het samengestelde attribuut vlakOfMultivlak

| Naam | vlakOfMultivlak |
| :--- | :--- |
| **Definitie** | Een samengesteld geometriegegevenstype waarbij wordt afgedwongen dat voor de geometrie een keuze gemaakt moet worden tussen een vlak (GM\_Surface) of een multivlak (GM\_MultiSurface). |
| **Stereotype** | «Union» |
| **Datum opname** | Januari 2017 |
[Tabel 7.9.3.a: Beschrijving van het samengestelde attribuut vlakOfMultivlak]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| vlak | \[1\] | Zie [paragraaf 7.9.3.1](#7931-vlak) |
| multivlak | \[1\] | Zie [paragraaf 7.9.3.2](#7932-multivlak) |
[Tabel 7.9.3.b: Overzicht van de gegevens­elementen van het samengestelde attribuut vlakOfMultivlak]

#### 7.9.3.1 vlak

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
[Tabel 7.9.3.1.a: Beschrijving van het gegevenselement vlak]

#### 7.9.3.2 multivlak

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
[Tabel 7.9.3.2.a: Beschrijving van het gegevenselement multivlak]

## 7.10 Gegevenstypen

### 7.10.1 AN

| Naam | AN |
| :--- | :--- |
| **Definitie** | Datatype met een eigen naam, analoog aan CharacterString. De minimale lengte is tenminste een teken en de eerste positie mag geen spatie bevatten. Alle 335 tekens uit de gestandaardiseerde deelverzameling MES-1 van Unicode zijn toegestaan[^7-10-1-i] |
| **Stereotype** | «Simpel gegevenstype» |
[Tabel 7.10.1.a: Beschrijving van het gegevenstype AN]

[^7-10-1-i]: ISO/IEC (2010) _International Standard ISO/IEC 10646_, Final Committee Draft, Second edition, p. 2076. [http://unicode.org/L2/L2010/10038-fcd10646-main.pdf](http://unicode.org/L2/L2010/10038-fcd10646-main.pdf)

# 8 Domeinwaarden

## 8.1 Indicatie

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein Indicatie (zie tabellen 8.1.a en 8.1.b).

| Naam | Indicatie |
| :--- | :--- |
| **Definitie** | Een aanduiding waarmee wordt aangegeven of een bepaalde indicatie al dan niet van toepassing is op een verschijningsvorm van een object in de registratie. |
| **Datum opname** | Februari 2006 |
| **Toelichting** | Voor enumeraties die deel uitmaken van een (basis-) registratie of informatiemodel betreft dit de daarin opgenomen toelichting. |
[Tabel 8.1.a: Beschrijving van het domein Indicatie]

| Waarden | Omschrijving |
| :---: | :---: |
| `J` | Ja |
| `N` | Nee |
[Tabel 8.1.b: De geldige waarden van het domein Indicatie]

## 8.2 Gebruiksdoel

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein Gebruiksdoel (zie tabellen 8.2.a en 8.2.b).

| Naam | Gebruiksdoel |
| :--- | :--- |
| **Definitie** | Een categorisering waarmee het gebruiksdoel van een object kan worden verbijzonderd. |
| **Datum opname** | Augustus 2004 |
| **Toelichting** | Het waardenbereik van de categorisering van het gebruiksdoel van een object stemt overeen met het bepaalde in artikel 1 van het Bouwbesluit 2012. Het waardenbereik van het gegeven gebruiksdoel kent een limitatief karakter en kan uitsluitend een of meer van de genoemde waarden aannemen. |
[Tabel 8.2.a: Beschrijving van het domein Gebruiksdoel]

| Waarden | Omschrijving |
| :---: | :--- |
| `woonfunctie` | Gebruiksfunctie voor het wonen |
| `bijeenkomstfunctie` | Gebruiksfunctie voor het samenkomen van personen voor kunst, cultuur, godsdienst, communicatie, kinderopvang, het verstrekken van consumpties voor het gebruik ter plaatse of het aanschouwen van sport |
| `celfunctie` | Gebruiksfunctie voor dwangverblijf van personen |
| `gezondheidszorgfunctie` | Gebruiksfunctie voor medisch onderzoek, verpleging, verzorging of behandeling |
| `industriefunctie` | Gebruiksfunctie voor het bedrijfsmatig bewerken of opslaan van materialen en goederen, of voor agrarische doeleinden |
| `kantoorfunctie` | Gebruiksfunctie voor administratie |
| `logiesfunctie` | Gebruiksfunctie voor het bieden van recreatief verblijf of tijdelijk onderdak aan personen |
| `onderwijsfunctie` | Gebruiksfunctie voor het geven van onderwijs |
| `sportfunctie` | Gebruiksfunctie voor het beoefenen van sport |
| `winkelfunctie` | Gebruiksfunctie voor het verhandelen van materialen, goederen of diensten |
| `overige gebruiksfunctie` | Niet in dit lid benoemde gebruiksfunctie voor activiteiten waarbij het verblijven van personen een ondergeschikte rol speelt. |
[Tabel 8.2.b: De geldige waarden van het domein Gebruiksdoel]

## 8.3 StatusWoonplaats

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein StatusWoonplaats (zie tabellen 8.3.a en 8.3.b).

| Naam | StatusWoonplaats |
| :--- | :--- |
| **Definitie** | Een aanduiding van alle waarden die de status van een woonplaats kan aannemen. |
| **Datum opname** | Februari 2006 |
| **Toelichting** | Een statusaanduiding kent een limitatief karakter en kan uitsluitend een van de genoemde waarden aannemen. |
[Tabel 8.3.a: Beschrijving van het domein StatusWoonplaats]

| Waarden | Omschrijving |
| :---: | :--- |
| `Woonplaats aangewezen` | Woonplaats is aangewezen door het bevoegd gezag of geconstateerd. |
| `Woonplaats ingetrokken` | Woonplaats is ingetrokken door het bevoegd gezag. |
[Tabel 8.3.b: De geldige waarden van het domein StatusWoonplaats]

## 8.4 StatusNaamgeving

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein StatusNaamgeving (zie tabellen 8.4.a en 8.4.b).

| Naam | StatusNaamgeving |
| :--- | :--- |
| **Definitie** | Een aanduiding van alle waarden die de status van een openbare ruimte of een nummeraanduiding kan aannemen. |
| **Datum opname** | Februari 2006 |
| **Toelichting** | Een statusaanduiding kent een limitatief karakter en kan uitsluitend een van de genoemde waarden aannemen. |
[Tabel 8.4.a: Beschrijving van het domein StatusNaamgeving]

| Waarden | Omschrijving |
| :---: | :--- |
| `Naamgeving uitgegeven` | Naam is uitgegeven door het bevoegd gezag of geconstateerd. |
| `Naamgeving ingetrokken` | Naam is ingetrokken door het bevoegd gezag. |
[Tabel 8.4.b: De geldige waarden van het domein StatusNaamgeving]

## 8.5 StatusPand

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein StatusPand (zie tabellen 8.5.a en 8.5.b).

| Naam | StatusPand |
| :--- | :--- |
| **Definitie** | Een codering van de verschillende waarden die de status van een pand kan aannemen. |
| **Datum opname** | Februari 2004 |
| **Toelichting** | Een statusaanduiding kent een limitatief karakter en kan uitsluitend een van de genoemde waarden aannemen. |
[Tabel 8.5.a: Beschrijving van het domein StatusPand]

| Waarden | Omschrijving |
| :---: | :--- |
| `Bouwvergunning verleend` | Een nieuw pand dat nog niet is gebouwd maar waarvoor wel een bouwvergunning is verleend. |
| `Niet gerealiseerd pand` | Een pand waarvoor een bouwvergunning was verleend, maar waarvan in een ambtelijke verklaring van een daartoe bevoegd ambtenaar is vastgesteld dat wordt afgezien van de bouw of waarvan de bouwvergunning is ingetrokken. |
| `Bouw gestart` | Een vergund pand waarvan de aanvrager van de bouwvergunning heeft gemeld dat de bouw is gestart of waarvan in een ambtelijke verklaring van een daartoe bevoegd ambtenaar is vastgesteld dat de feitelijke bouw is aangevangen door minimaal de aanleg van de fundering (waartoe niet het bouwrijp maken van een terrein wordt gerekend). |
| `Pand in gebruik (niet ingemeten)` | Een pand waarvan de aanvrager van de bouwvergunning heeft gemeld dat de bouw is voltooid of waarvan in een ambtelijke verklaring van een daartoe bevoegd ambtenaar is vastgesteld dat het pand feitelijk in gebruik is genomen of dat het weliswaar (nog) niet in gebruik is genomen maar naar het oordeel van de gemeente wel gebruiksgereed is, dan wel een pand waarvan de verbouw is voltooid, dan wel een pand dat door een calamiteit gedeeltelijk is verdwenen maar naar verwachting zal worden hersteld en in gebruik genomen. |
| `Pand in gebruik` | Een pand dat feitelijk de status "Pand in gebruik (niet ingemeten)" had en waarvan de definitieve geometrie is ingemeten. |
| `Sloopvergunning verleend` | Een pand waarvoor een sloopvergunning is verleend. |
| `Pand gesloopt` | Een pand waarvan de aanvrager van de sloopvergunning heeft gemeld dat de sloop is voltooid of in een ambtelijke verklaring van een daartoe bevoegd ambtenaar is vastgesteld dat het pand is gesloopt. |
| `Pand buiten gebruik` | Een pand dat in dusdanige bouwkundige staat is dat niet te verwachten is dat het pand zal worden hersteld en weer in gebruik zal worden genomen. |
| `Verbouwing pand` | Een pand waarvoor een vergunning tot verbouw is verleend en waarbij de verbouwing nog niet is voltooid. |
| `Pand ten onrechte opgevoerd` | Een pand dat niet had mogen worden opgenomen in de BAG-registratie en vervolgens is beëindigd. |
[Tabel 8.5.b: De geldige waarden van het domein StatusPand]

## 8.6 StatusPlaats

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein StatusPlaats (zie tabellen 8.6.a en 8.6.b).

| Naam | StatusPlaats |
| :--- | :--- |
| **Definitie** | Een aanduiding van alle waarden die de status van een ligplaats en een standplaats kan aannemen. |
| **Datum opname** | Februari 2006 |
| **Toelichting** | Een statusaanduiding kent een limitatief karakter en kan uitsluitend een van de genoemde waarden aannemen. |
[Tabel 8.6.a: Beschrijving van het domein StatusPlaats]

| Waarden | Omschrijving |
| :---: | :--- |
| `Plaats aangewezen` | Plaats is aangewezen door het bevoegd gezag of geconstateerd. |
| `Plaats ingetrokken` | Plaats is ingetrokken door het bevoegd gezag. |
[Tabel 8.6.b: De geldige waarden van het domein StatusPlaats]

## 8.7 StatusVerblijfsobject

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein StatusVerblijfsobject (zie tabellen 8.7.a en 8.7.b).

| Naam | StatusVerblijfsobject |
| :--- | :--- |
| **Definitie** | Een aanduiding van alle waarden die de status van een verblijfsobject kan aannemen. |
| **Datum opname** | Augustus 2006 |
| **Toelichting** | Een statusaanduiding kent een limitatief karakter en kan uitsluitend een van de genoemde waarden aannemen. |
[Tabel 8.7.a: Beschrijving van het domein StatusVerblijfsobject]

| Waarden | Omschrijving |
| :---: | :--- |
| `Verblijfsobject gevormd` | Een nieuw verblijfsobject dat deel gaat uitmaken van een nog niet gebouwd pand waarvoor een bouwvergunning is verleend of dat wordt gerealiseerd in een reeds bestaand pand. |
| `Niet gerealiseerd verblijfsobject` | Een verblijfsobject in een pand waarvoor een bouwvergunning was verleend of dat gerealiseerd zou worden in een reeds bestaand pand, maar waarvan in een ambtelijke verklaring van een daartoe bevoegd ambtenaar is vastgesteld dat wordt afgezien van de bouw of waarvan de bouwvergunning is ingetrokken. |
| `Verblijfsobject in gebruik (niet ingemeten)` | Een verblijfsobject waarvan de aanvrager van de bouwvergunning heeft gemeld dat de bouw is voltooid of waarvan in een ambtelijke verklaring van een daartoe bevoegd ambtenaar is vastgesteld dat het verblijfsobject feitelijk in gebruik is genomen of dat het weliswaar (nog) niet in gebruik is genomen maar naar het oordeel van de gemeente wel gebruiksgereed is, dan wel een verblijfsobject waarvan de verbouw is voltooid, dan wel een verblijfsobject dat door een calamiteit gedeeltelijk is verdwenen maar naar verwachting zal worden hersteld en in gebruik genomen. |
| `Verblijfsobject in gebruik` | Een verblijfsobject dat feitelijk de status "Verblijfsobject in gebruik (niet ingemeten)" had en waarvan de definitieve geometrie is ingemeten. |
| `Verblijfsobject ingetrokken` | Een verblijfsobject dat als zodanig opgehouden heeft te bestaan omdat de aanvrager van een sloopvergunning heeft gemeld dat de sloop is voltooid of in een ambtelijke verklaring van een daartoe bevoegd ambtenaar is vastgesteld dat het verblijfsobject als zodanig niet meer bestaat. |
| `Verblijfsobject buiten gebruik` | Een verblijfsobject dat onderdeel uitmaakt van een pand dat in dusdanige bouwkundige staat is dat niet te verwachten is dat het pand zal worden hersteld en weer in gebruik zal worden genomen. |
| `Verbouwing verblijfsobject` | Een verblijfsobject waarvoor een vergunning tot verbouw is verleend en waarbij de verbouwing nog niet is voltooid. |
| `Verblijfsobject ten onrechte opgevoerd` | Een verblijfsobject dat niet had mogen worden opgenomen in de BAG-registratie en vervolgens is beëindigd. |
[Tabel 8.7.b: De geldige waarden van het domein StatusVerblijfsobject]

## 8.8 TypeAdresseerbaarObject

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein TypeAdresseerbaarObject (zie tabellen 8.8.a en 8.8.b).

| Naam | TypeAdresseerbaarObject |
| :--- | :--- |
| **Definitie** | De aard van een als zodanig benoemde Nummeraanduiding. |
| **Datum opname** | Oktober 2002 |
| **Toelichting** | Een typering van de adresseerbare objecttypen kent een limitatief karakter en kan uitsluitend een van de genoemde waarden aannemen. |
[Tabel 8.8.a: Beschrijving van het domein TypeAdresseerbaarObject]

| Waarden | Omschrijving |
| :---: | :--- |
| `Verblijfsobject` | Nummeraanduiding is bedoeld voor Verblijfsobject. |
| `Standplaats` | Nummeraanduiding is bedoeld voor Standplaats. |
| `Ligplaats` | Nummeraanduiding is bedoeld voor Ligplaats. |
[Tabel 8.8.b: De geldige waarden van het domein TypeAdresseerbaarObject]

## 8.9 TypeOpenbareRuimte

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein TypeOpenbareRuimte (zie tabellen 8.9.a en 8.9.b).

| Naam | TypeOpenbareRuimte |
| :--- | :--- |
| **Definitie** | Een codering van de verschillende waarden die de typering van een openbare ruimte kan aannemen. |
| **Datum opname** | Oktober 2002 |
| **Toelichting** | Een typering van de openbare ruimten kent een limitatief karakter en kan uitsluitend een van de genoemde waarden aannemen. De oorsprong van deze waarden is gelegen in NEN 3610. |
[Tabel 8.9.a: Beschrijving van het domein TypeOpenbareRuimte]

| Waarden | Omschrijving |
| :---: | :--- |
| `Weg` | Gebaand gedeelte voor het wegverkeer en vliegverkeer te land _(bron: NEN 3610:2011/A1:2016 nl)_ |
| `Water` | Grondoppervlak in principe bedekt met water. _(bron: NEN 3610:2011/A1:2016 nl)_ |
| `Spoorbaan` | Gebaand gedeelte voor het verkeer over rails. _(bron: NEN 3610:2011/A1:2016 nl)_ |
| `Terrein` | Door een fysiek voorkomen gekarakteriseerd zichtbaar begrensd stuk grond _(bron: NEN 3610:2011/A1:2016 nl)_ |
| `Kunstwerk` | Civiel-technisch werk voor de infrastructuur van wegen, water, spoorbanen, waterkeringen en/of leidingen en niet bedoeld voor permanent menselijk verblijf. _(bron: NEN 3610:2011/A1:2016 nl)_ |
| `Landschappelijk gebied` | Te verdelen in (NEN 3610): 'Geografisch gebied': geografisch benoemd of aangeduid gebied. De grenzen zijn niet altijd exact vastgesteld (bijvoorbeeld Noordoostpolder, Midden-Nederland, rivierengebied, Veluwe, Zuid-Limburg, kustgebied) en 'Functioneel gebied': begrensd en benoemd gebied dat door een functionele eenheid wordt beschreven (bijvoorbeeld bedrijventerrein, bungalowpark, plantsoen, begraafplaats, jachthaven, windmolenpark en recreatiegebied) _(bron: NEN 3610:2011/A1:2016 nl)_ |
| `Administratief gebied` | Oftewel 'registratief gebied': op basis van wet- en regelgeving afgebakend gebied dat als eenheid geldt van politiek/bestuurlijke verantwoordelijkheid of voor bedrijfsvoering (bijvoorbeeld stadsdeel) _(bron: NEN 3610:2011/A1:2016 nl)_ |
[Tabel 8.9.b: De geldige waarden van het domein TypeOpenbareRuimte]

## 8.10 Objecttypecode

Deze paragraaf geeft een beschrijving en de geldige waarden van het domein Objecttypecode (zie tabellen 8.10.a en 8.10.b).

| Naam | Objecttypecode |
| :--- | :--- |
| **Definitie** | Een code waarmee het objecttype van een object wordt aangegeven. |
| **Datum opname** | Februari 2006 |
| **Toelichting** | Deze codering maakt onderdeel uit van de unieke objectaanduiding. Het is met name bedoeld om objecten van verschillende adresseerbare objecttypen uniek van elkaar te kunnen onderscheiden. |
[Tabel 8.10.a: Beschrijving van het domein Objecttypecode]

| Waarden | Omschrijving |
| :---: | :---: |
| `01` | Verblijfsobject |
| `02` | Ligplaats |
| `03` | Standplaats |
| `10` | Pand |
| `20` | Nummeraanduiding |
| `30` | Openbare ruimte |
[Tabel 8.10.b: De geldige waarden van het domein Objecttypecode]
