# Objecttypen

## Woonplaats

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
| **Toelichting** | Zie paragraaf [[[#indeling-in-woonplaatsen]]] voor de interpretatie van de definitie van het objecttype Woonplaats. |
| **Indicatie abstract object** | Nee |
[Tabel 6.1.a: Beschrijving van het objecttype Woonplaats]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie paragraaf [[[#identificatie-0]]] |
| naam | \[1\] | Zie paragraaf [[[#naam]]] |
| geometrie | \[1\] | Zie paragraaf [[[#geometrie-0]]]] |
| status | \[1\] | Zie paragraaf [[[#status]]] |
| geconstateerd | \[1\] | Zie paragraaf [[[#geconstateerd]]] |
| documentdatum | \[1\] | Zie paragraaf [[[#documentdatum]]] |
| documentnummer | \[1\] | Zie paragraaf [[[#documentnummer]]] |
[Tabel 6.1.b: Overzicht attributen]

## Openbare ruimte

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
| **Toelichting** | Als openbare ruimte worden onder meer aangemerkt wegen, water, spoorbanen en landschappelijke gebieden. Zie paragraaf [[[#vaststelling-van-openbare-ruimten]]] voor de interpretatie van de definitie van het objecttype Openbare ruimte. |
| **Indicatie abstract object** | Nee |
[Tabel 6.2.a: Beschrijving van het objecttype Openbare ruimte]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie paragraaf [[[#identificatie-1]]] |
| naam | \[1\] | Zie paragraaf [[[#naam-0]]] |
| type | \[1\] | Zie paragraaf [[[#type]]] |
| status | \[1\] | Zie paragraaf [[[#status-0]]] |
| geconstateerd | \[1\] | Zie paragraaf [[[#geconstateerd-0]]] |
| documentdatum | \[1\] | Zie paragraaf [[[#documentdatum-0]]] |
| documentnummer | \[1\] | Zie paragraaf [[[#documentnummer-0]]] |
[Tabel 6.2.b: Overzicht attributen]

| Relatiesoort | Relatierol | Kardinaliteit | Beschrijving |
| :---: | :---: | :---: | :--- |
| ligt in | gerelateerde woonplaats | \[1\] | Zie paragraaf [[[#relatie-ligt-in-gerelateerde-woonplaats]]] |
[Tabel 6.2.c: Overzicht relaties]

## Nummeraanduiding

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
| **Toelichting** | Nummeraanduidingen kunnen alleen worden toegekend aan als zodanig aangewezen adresseerbare objecttypen. De thans aangewezen adresseerbare objecttypen zijn verblijfsobjecten, standplaatsen en ligplaatsen. Zie paragraaf [[[#toekenning-van-nummeraanduidingen]]] voor de interpretatie van de definitie van het objecttype Nummeraanduiding. |
| **Indicatie abstract object** | Nee |
[Tabel 6.3.a: Beschrijving van het objecttype Nummeraanduiding]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie paragraaf [[[#identificatie-2]]] |
| huisnummer | \[1\] | Zie paragraaf [[[#huisnummer]]] |
| huisletter | \[0..1\] | Zie paragraaf [[[#huisletter]]] |
| huisnummertoevoeging | \[0..1\] | Zie paragraaf [[[#huisnummertoevoeging]]] |
| postcode | \[0..1\] | Zie paragraaf [[[#postcode]]] |
| type adresseerbaar object | \[1\] | Zie paragraaf [[[#type-adresseerbaar-object]]] |
| status | \[1\] | Zie paragraaf [[[#status-1]]] |
| geconstateerd | \[1\] | Zie paragraaf [[[#geconstateerd-1]]] |
| documentdatum | \[1\] | Zie paragraaf [[[#documentdatum-1]]] |
| documentnummer | \[1\] | Zie paragraaf [[[#documentnummer-1]]] |
[Tabel 6.3.b: Overzicht attributen]

| Relatiesoort | Relatierol | Kardinaliteit | Beschrijving |
| :---: | :---: | :---: | :--- |
| ligt in | gerelateerde woonplaats | \[0..1\] | Zie paragraaf [[[#relatie-ligt-in-gerelateerde-woonplaats]]] |
| ligt aan | gerelateerde openbare ruimte | \[1\] | Zie paragraaf [[[#relatie-ligt-aan-gerelateerde-openbare-ruimte]]] |
[Tabel 6.3.c: Overzicht relaties]

## Pand

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
| **Toelichting** | Zie paragraaf [[[#afbakening-van-panden]]] voor de interpretatie van de definitie van het objecttype Pand. |
| **Indicatie abstract object** | Nee |
[Tabel 6.4.a: Beschrijving van het objecttype Pand]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie paragraaf [[[#identificatie-3]]] |
| geometrie | \[1\] | Zie paragraaf [[[#geometrie-1]]] |
| oorspronkelijk bouwjaar | \[1\] | Zie paragraaf [[[#oorspronkelijk-bouwjaar]]] |
| status | \[1\] | Zie paragraaf [[[#status-2]]] |
| geconstateerd | \[1\] | Zie paragraaf [[[#geconstateerd-2]]] |
| documentdatum | \[1\] | Zie paragraaf [[[#documentdatum-2]]] |
| documentnummer | \[1\] | Zie paragraaf [[[#documentnummer-2]]] |
[Tabel 6.4.b: Overzicht attributen]

## Adresseerbaar object

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
| heeft als hoofdadres | hoofdadres | \[1\] | Zie paragraaf [[[#relatie-heeft-als-hoofdadres-hoofdadres]]] |
| heeft als nevenadres | nevenadres | \[0..\*\] | Zie paragraaf [[[#relatie-heeft-als-nevenadres-nevenadres]]] |
[Tabel 6.5.b: Overzicht relaties]

## Ligplaats

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
| **Toelichting** | Zie paragraaf [[[#afbakening-van-ligplaatsen]]] voor de interpretatie van de definitie van het objecttype Ligplaats. |
| **Indicatie abstract object** | Nee |
[Tabel 6.6.a: Beschrijving van het objecttype Ligplaats]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie paragraaf [[[#identificatie-4]]] |
| status | \[1\] | Zie paragraaf [[[#status-3]]] |
| geometrie | \[1\] | Zie paragraaf [[[#geometrie-2]]] |
| geconstateerd | \[1\] | Zie paragraaf [[[#geconstateerd-3]]] |
| documentdatum | \[1\] | Zie paragraaf [[[#documentdatum-3]]] |
| documentnummer | \[1\] | Zie paragraaf [[[#documentnummer-3]]] |
[Tabel 6.6.b: Overzicht attributen]

## Standplaats

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
| **Toelichting** | Zie paragraaf [[[#afbakening-van-standplaatsen]]] voor de interpretatie van de definitie van het objecttype Standplaats. |
| **Indicatie abstract object** | Nee |
[Tabel 6.7.a: Beschrijving van het objecttype Standplaats]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie paragraaf [[[#identificatie-5]]] |
| status | \[1\] | Zie paragraaf [[[#status-4]]] |
| geometrie | \[1\] | Zie paragraaf [[[#geometrie-3]]] |
| geconstateerd | \[1\] | Zie paragraaf [[[#geconstateerd-4]]] |
| documentdatum | \[1\] | Zie paragraaf [[[#documentdatum-4]]] |
| documentnummer | \[1\] | Zie paragraaf [[[#documentnummer-4]]] |
[Tabel 6.7.b: Overzicht attributen]

## Verblijfsobject

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
| **Toelichting** | Zie paragraaf [[[#afbakening-van-verblijfsobjecten]]] voor de interpretatie van de definitie van het objecttype Verblijfsobject. |
| **Indicatie abstract object** | Nee |
[Tabel 6.8.a: Beschrijving van het objecttype Verblijfsobject]

| Attribuut | Kardinaliteit | Beschrijving |
| :---: | :---: | :--- |
| identificatie | \[1\] | Zie paragraaf [[[#identificatie-6]]] |
| geometrie | \[1\] | Zie paragraaf [[[#geometrie-4]]] |
| gebruiksdoel | \[1..\*\] | Zie paragraaf [[[#gebruiksdoel-0]]] |
| oppervlakte | \[1\] | Zie paragraaf [[[#oppervlakte]]] |
| status | \[1\] | Zie paragraaf [[[#status-5]]] |
| geconstateerd | \[1\] | Zie paragraaf [[[#geconstateerd-5]]] |
| documentdatum | \[1\] | Zie paragraaf [[[#documentdatum-5]]] |
| documentnummer | \[1\] | Zie paragraaf [[[#documentnummer-5]]] |
[Tabel 6.8.b: Overzicht attributen]

| Relatiesoort | Relatierol | Kardinaliteit | Beschrijving |
| :---: | :---: | :---: | :--- |
| maakt deel uit van | gerelateerd pand | \[1..\*\] | Zie paragraaf [[[#relatie-maakt-deel-uit-van-gerelateerd-pand]]] |
[Tabel 6.8.c: Overzicht relaties]
