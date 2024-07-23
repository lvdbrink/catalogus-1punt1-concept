# 9 Implementatie

De Wet basisregistratie adressen en gebouwen stelt dat een afnemer BAG-gegevens kan afnemen bij zowel bronhouder als Landelijke Voorziening. Belangrijk uitgangspunt is daarbij dat de afnemer bij bronhouder en landelijke voorziening dezelfde gegevens krijgt.

Om die reden is het van belang om eisen vast te leggen aan de implementatie van bepaalde aspecten die worden toegevoegd bij de implementatie van het conceptuele model in een logisch model. Het logisch model is de basis voor het maken van berichtschema's (StUF) en applicatieschema's (NEN 3610) voor de uitwisseling van BAG-gegevens tussen bronhouders en landelijke voorziening en tussen landelijke voorziening en afnemers. Het betreft eisen aan de implementatie van historie (zie [paragraaf 9.1](#91-historie)), in onderzoek (zie [paragraaf 9.2](#92-in-onderzoek)), en formele patronen om de consistentie van deze gegevens in de hele BAG-keten te borgen (zie [paragraaf 9.3](#93-formele-patronen)).

## 9.1 Historie

In het conceptuele model wordt in de meta-gegevens opgenomen of een attribuut formele en materiële historie opbouwt, bijvoorbeeld het meta-gegeven 'indicatie formele historie' met waarde `Ja`.

De specificatie van formele en materiële historie uit het conceptuele model wordt vertaald naar een implementatie, bestaande uit bijbehorende attributen (tijdstippen). Deze implementatie vormt de basis voor de uitwisseling van BAG-gegevens (in bijvoorbeeld StUF of NEN 3610). Deze paragraaf beschrijft met welke attributen (tijdstippen) de BAG de formele en materiële historie implementeert en uitwisselt met de landelijke voorziening en welke aanvullende attributen (tijdstippen) worden bijgehouden in de landelijke voorziening voor de uitwisseling met afnemers.

Ook worden de regels vastgelegd voor het omgaan met object- en versiehistorie.

### 9.1.1 Materiële en formele historie

De materiële en formele historie worden met de volgende tijdstippen geïmplementeerd in de BAG:

#### Materiële historie

beginGeldigheid
: De datum waarop een versie van een BAG-object geldig is in de werkelijkheid conform de ingangsdatum in het brondocument. Dit tijdstip wordt vastgelegd in de _beginGeldigheid_. Als er geen expliciete ingangsdatum van geldigheid is opgenomen, wordt de datum van het brondocument overgenomen.

eindGeldigheid
: De datum waarop de periode van geldigheid van een versie van een BAG-object eindigt. Bijvoorbeeld als gevolg van de vaststelling van een nieuw brondocument. Wanneer er geen tijdstip is ingevuld, dan is de versie nog geldig. Dit tijdstip wordt vastgelegd in de _eindGeldigheid_.

De BAG legt materiële historie (_beginGeldigheid_ en _eindGeldigheid_) en de datum van het brondocument (_documentDatum_) vast met de nauwkeurigheid van datum.

#### Formele historie

tijdstipRegistratie
: Het tijdstip waarop een versie van een BAG-object is geregistreerd in de registratie van bronhouder en daarmee authentiek wordt gemaakt. Dit tijdstip wordt vastgelegd in de _tijdstipRegistratie_.

eindRegistratie
: Het tijdstip waarop een versie van een BAG-object is beëindigd in de registratie van bronhouder. Dit tijdstip wordt vastgelegd in de _eindRegistratie_.

tijdstipRegistratieLV
: Dit is het tijdstip waarop een versie van een BAG-object is opgenomen in de registratie van de landelijke voorziening. De gegevens komen daarmee beschikbaar voor afnemers. Dit tijdstip wordt vastgelegd in de _tijdstipRegistratieLV_.

De BAG legt formele historie (_tijdstipRegistratie_ en _eindRegistratie_) en _tijdstipRegistratieLV_ vast met de nauwkeurigheid van datum en tijd in uren, minuten, seconden en milliseconden.

### 9.1.2 Object- en versiehistorie

In de BAG ontstaan nieuwe BAG-objecten en worden gegevens van BAG-objecten in de tijd gewijzigd. Deze paragraaf beschrijft de te hanteren regels voor object- en versiehistorie.

Om historie goed bij te kunnen houden, moet elk object uniek aan te wijzen zijn, moet elke versie van elk object uniek aan te wijzen zijn en moet eenduidig vast te stellen zijn tot welk object een versie behoort. De unieke identificatie van een versie is daarom samengesteld uit de unieke 'objectidentificatie', in combinatie met een kenmerk 'versie-identificatie', die elke versie binnen de context van het object, uniek identificeert. Bijvoorbeeld: objectidentificatie 0100100000001234 en versie 1. De versie-identificatie is een integer, begint bij 1 en wordt steeds met 1 opgehoogd.

De volgende regels worden gehanteerd bij het ontstaan en wijzigen van een BAG-object:

1. Als een nieuw BAG-object ontstaat, wordt een nieuw object met een objectidentificatie gecreëerd en ontstaat een versiehistorie. Deze eerste versie van het object krijgt een _versie-identificatie_ 1, een _beginGeldigheid_ en een _tijdstipRegistratie_.

2. Wanneer het object wordt geregistreerd in de landelijke voorziening krijgt het object ook een _tijdstipRegistratieLV_.

3. Als een attribuut van een object wijzigt, ontstaat er een nieuwe versie: de huidige versie krijgt van de bronhouder een _eindGeldigheid_ en een _eindRegistratie_. Als een attribuut van een object wijzigt, ontstaat er een nieuwe versie: de vorige versie krijgt van de bronhouder een eindGeldigheid, die aansluit op de beginGeldigheid van de nieuwe versie, en een eindRegistratie.

De bronhouder maakt een nieuwe versie van het object met de nieuwe gegevens aan conform het besluit (brondocument). De nieuwe versie van het object krijgt een unieke versie-identificatie, een _beginGeldigheid_ en een _tijdstipRegistratie_, waarbij _beginGeldigheid_ gelijk is aan _eindGeldigheid_ van de vorige versie en _tijdstipRegistratie_ gelijk is aan de _eindRegistratie_ van de vorige versie. Na registratie van deze versie van het object in de landelijke voorziening krijgt deze versie van het object een eigen _tijdstipRegistratieLV_.

De versie-identificatie is een nummer. Voor een nieuw toe te kennen identificatie wordt altijd het eerstvolgende beschikbare nummer gekozen. Als het eerstvolgende nummer al in gebruik is bij een niet-authentieke versie van een object, dan is deze niet als uniek gegeven beschikbaar en wordt het eerstvolgende wel beschikbare nummer gekozen.

De _identificatie_ en _versie-identificatie_ samen bepalen een unieke versie van een object. De bronhouder levert altijd de actuele versie van een object aan de landelijke voorziening. Het is niet toegestaan om gegevens te wijzigen die op het moment van wijzigen niet meer geldig zijn.

### 9.1.3 Levenscyclus

De levenscyclus van een object in de BAG bestaat uit alle versies van een object. Dit zijn alle actieve en alle inactieve versies. Een actieve versie is een versie waarvan tijdstipInactief niet ingevuld is. Een inactieve versie is een versie waarvan tijdstipInactief wel ingevuld is.

Alleen de gegevens van de actieve versies tellen mee bij de beantwoording van vragen ten aanzien van welke gegevens er geldig zijn. Gegevens in versies die aangemerkt zijn als inactief tellen niet meer mee (maar deden dat eerder wel, toen ze nog actief waren).

#### Actieve levenscyclus

De actieve levenscyclus van een object in de BAG bestaat uit alle actieve versies van een object. De volgende regels gelden voor de actieve levenscyclus:

1. De beginGeldigheid van een versie kan in het verleden of in de toekomst liggen. Wanneer de beginGeldigheid in de toekomst ligt, dan zijn deze gegevens wel geldig, maar nog niet in werking getreden.

2. Objecten worden in de registratie beëindigd door een eindstatus, zoals 'pand gesloopt' toe te kennen. Er zal dus altijd een geldige versie blijven bestaan, met een open einddatum.

3. Op elk moment in de tijd is er één geldige versie in de levenscyclus van een object. Dat wil zeggen:

    1. De geldigheidsperiode loopt vanaf de beginGeldigheid tot de eindGeldigheid. Beide zijn een datum, omdat besluiten ingaan op een bepaalde dag, niet op een bepaald tijdstip.

    2. De eindGeldigheid van een versie sluit naadloos aan op de beginGeldigheid van de volgende versie, door hiervoor altijd dezelfde datum te gebruiken. Bijvoorbeeld: versie 1 met eindGeldigheid 1-1-2018 zal aansluiten op een versie 2 met beginGeldigheid 1-1-2018.

    3. De eindGeldigheid moet geïnterpreteerd worden als geldig tot datum (niet tot en met), oftewel tot het moment dat de volgende versie (met een versie-identificatie dat met 1 wordt opgehoogd) ingaat. Bijvoorbeeld: versie 1 met eindGeldigheid 1-1-2018 heeft een versie 2 met beginGeldigheid 1-1-2018.

    4. Er mogen geen gaten zitten in de tijdslijn. Bijvoorbeeld: een versie met eindGeldigheid 31-12-2017 en een volgende versie met begindatum 2-1-2018. Er is dan een gat op 1-1-2018.

    5. Er mag geen overlap zitten in de tijdslijn. Bijvoorbeeld: een versie met eindGeldigheid 2-1-2018 en een volgende versie met beginGeldigheid 1-1-2018. Op 1-1-2018 zijn dan twee versies tegelijk geldig. _(Let op het volgende punt!)_

4. Er kunnen meerdere geldige versies geldig zijn op één dag. Meerdere versies hebben dan dezelfde beginGeldigheid en er is dan een versie met dezelfde beginGeldigheid als de eindGeldigheid. De laatste versie van de dag is dan leidend, herkenbaar aan het hoogste versie-identificatie. Bijvoorbeeld: versie 3 heeft een beginGeldigheid 31-1-2018 en eindGeldigheid 31-1-2018. Versie 4 heeft een begindatum 31-1-2018 en een open (geen) einddatum. Op 31-1-2018 zijn er twee versies geldig, met elk beginGeldigheid 31-1-2018. Versie 4 heeft het hoogste versie-identificatie en is dus leidend. Versie 3 is en blijft wel geldig. Aan de formele historie, oftewel tijdstipRegistratie en eindRegistratie van versie 3, is te zien wanneer en hoe lang de materiële gegevens van deze versie 3 formeel geldig zijn geweest.

#### Gegevens buiten de actieve levenscyclus plaatsen

Er zijn situaties waarin een bronhouder een besluit (brondocument) intrekt of herziet. Bijvoorbeeld omdat een besluit beschrijft dat bepaalde gegevens in de toekomst ingaan en er een nieuw besluit wordt genomen die beschrijft dat deze gegevens toch niet in zullen gaan, bijvoorbeeld er wordt besloten om toch een andere straatnaam te hanteren alvorens de eerder besloten straatnaam in werking treedt.

Zowel het eerste besluit als het laatste besluit zijn brondocument voor de BAG en worden opgevoerd in de BAG-registratie van de bronhouder en aangeleverd aan de landelijke voorziening. Echter, alleen de gegevens van het laatste besluit zullen op enig moment in werking treden, omdat de eerdere gegevens zijn ingetrokken voor de inwerkingtreding.

Op deze manier kunnen gegevens waarvan de datum beginGeldigheid in de toekomst ligt, buiten de actieve levenscyclus worden geplaatst door de bronhouder, wat wordt aangeduid met de term 'inactief maken'. De bronhouder dient daarbij ook de voorgaande (actieve) versie inactief te maken om een geldige materiële tijdslijn te waarborgen.

Op het moment dat een bronhouder een versie van een object uit de actieve levenscyclus wil halen, kent de bronhouder een tijdstip (datum en tijd) toe aan het optionele attribuut tijdstipInactief met het moment waarop de bronhouder besluit om deze versie inactief te maken.

Naast het opgeven van een tijdstipInactief voor de gegevens waarvan de beginGeldigheid in de toekomst ligt, geeft de bronhouder ook voor de voorgaande versie van het object aan dat deze inactief wordt door een datum en tijd te specificeren voor tijdstipInactief. Doordat de versie van het object daar weer voor een eindGeldigheid datum heeft, die niet in de toekomst maar in het verleden ligt, kan er een nieuwe versie worden opgevoerd met een lege eindGeldigheid (de nieuwe actieve en geldige versie).

Met het opnemen van het attribuut Inactief met een datum-tijd wordt kenbaar gemaakt dat deze versie van het object inactief is. Na het inactief maken van een versie ontstaat er een nieuwe levenscyclus, waar de versie die inactief is gemaakt nog steeds wel deel van uitmaakt. De inactieve versie maakt echter geen deel meer uit van de actieve levenscyclus. Als het attribuut Inactief niet voorkomt bij een versie van een object, dan behoren deze gegevens tot de actieve levenscyclus van het object.

### 9.1.4 Samenvatting

Deze paragraaf geeft een samenvatting van de beschrijvingen in paragrafen [9.1.1](#911-materiële-en-formele-historie), [9.1.2](#912-object--en-versiehistorie) en [9.1.3](#913-levenscyclus) van de implementatie van historie in de BAG (zie tabel 9.1.4.a).

| Attribuut | Kardinaliteit | Type | Opmaak |
| :---: | :---: | :---: | :---: |
| versie-identificatie | \[1\] | Integer | |
| beginGeldigheid | \[1\] | Date | `jjjj-dd-mm` |
| eindGeldigheid | \[0..1\] | Date | `jjjj-dd-mm` |
| tijdstipRegistratie | \[1\] | DateTime | `jjjj-dd-mmTuu:mm:ss.sss` |
| eindRegistratie | \[0..1\] | DateTime | `jjjj-dd-mmTuu:mm:ss.sss` |
| tijdstipRegistratieLV | \[0..1\] | DateTime | `jjjj-dd-mmTuu:mm:ss.sss` |
| tijdstipInactief | \[0..1\] | DateTime | `jjjj-dd-mmTuu:mm:ss.sss` |
[Tabel 9.1.4.a: Overzicht implementatie historie BAG]

## 9.2 In onderzoek

In [paragraaf 4.8](inleiding-principes-kwaliteit.md#48-aanwijzingen-van-mogelijke-onjuistheden-in-de-registratie-van-objecten) wordt beschreven welke attributen en relaties van objecten in onderzoek geplaatst kunnen worden. In deze paragraaf wordt gespecificeerd op welke wijze in onderzoek moet worden geïmplementeerd in een logisch model IMBAG.

In onderzoek wordt geïmplementeerd middels een object Onderzoek. In dit objecttype worden de volgende gegevens van een inonderzoekplaatsing vastgelegd:

1. De identificatie van het object dat in onderzoek is geplaatst.

2. De naam van het kenmerk of de attribuutsoort of de relatiesoort van het object dat in onderzoek is geplaatst. Per object kunnen bepaalde attributen en relaties in onderzoek worden geplaatst conform [paragraaf 4.8](inleiding-principes-kwaliteit.md#48-aanwijzingen-van-mogelijke-onjuistheden-in-de-registratie-van-objecten) van deze catalogus.

3. Het nummer van het document waarin de grondslag van het onderzoek wordt vastgelegd. Dit wordt vastgelegd in het attribuut documentnummer.

4. De datum van het document waarin de grondslag van het onderzoek wordt vastgelegd. Dit wordt vastgelegd in het attribuut documentnummer.

5. De datum waarop het attribuut van een object bij bronhouder in onderzoek is geplaatst. Dit behoort tot de materiële historie van het object Onderzoek en wordt vastgelegd in het attribuut beginGeldigheid (datum).

6. De datum waarop het onderzoek naar het attribuut door bronhouder is afgerond. Dit behoort tot de materiële historie en wordt vastgelegd in het attribuut eindGeldigheid (datum).

7. Het tijdstip waarop het onderzoek is geregistreerd bij de bronhouder. Dit behoort tot de formele historie van het object Onderzoek en wordt vastgelegd in het attribuut tijdstipRegistratie (datum/tijd).

8. Het tijdstip waarop de registratie van het onderzoek is beëindigd bij de bronhouder. Dit behoort tot de formele historie van het object Onderzoek en wordt vastgelegd in het attribuut eindRegistratie (datum/tijd).

9. Het tijdstip waarop het onderzoek is geregistreerd in de landelijke voorziening. Dit wordt vastgelegd in het attribuut tijdstipRegistratieLV (datum/tijd).

## 9.3 Formele patronen

In [hoofdstuk 5](conceptueelmodel.md#5-conceptueel-model) en [hoofdstuk 8](modelbeschrijving.md#8-domeinwaarden) worden de patronen van attributen in mensleesbare taal beschreven. Om interpretatieverschillen en inconsistentie in de BAG-keten te voorkomen specificeert tabel 9.3.a deze patronen als formele patronen met behulp van reguliere expressies.

| Objecttype | Attribuut | Mensleesbare taal | Formeel patroon |
| :---: | :---: | :--- | :---: |
| Woonplaats | identificatie | Een natuurlijk getal tussen 0001 en 9999 | `^[0-9]{3}[1-9]\|[0-9]{2}[1-9][0-9]\|[0-9][1-9][0-9]{2}\|[1-9][0-9]{3}$` |
| Openbare ruimte | identificatie | Combinatie van het (viercijferig) subdomein 'gemeentecode' (volgens Tabel 33 Gemeententabel van de Landelijke Tabellen GBA), het (tweecijferig) subdomein 'objecttypecode' en een voor het betreffende objecttype binnen een gemeente uniek (tiencijferig) subdomein 'objectvolgnummer' | `^[0-9]{4}[0-9]{2}[0-9]{10}$` |
| Nummeraanduiding | identificatie | Combinatie van het (viercijferig) subdomein 'gemeentecode' (volgens Tabel 33 Gemeententabel van de Landelijke Tabellen GBA), het (tweecijferig) subdomein 'objecttypecode' en een voor het betreffende objecttype binnen een gemeente uniek (tiencijferig) subdomein 'objectvolgnummer' | `^[0-9]{4}[0-9]{2}[0-9]{10}$` |
| Nummeraanduiding | huisnummer | Een natuurlijk getal tussen 1 en 99999 | `^[1-9][0-9]{0,4}$` |
| Nummeraanduiding | huisletter | Een hoofdletter (A – Z) of kleine letter (a – z) | `^[a-zA-Z]{1}$` |
| Nummeraanduiding | huisnummertoevoeging | Maximaal vier alfanumerieke tekens bestaande uit een combinatie van hoofdletters (A – Z), kleine letters (a – z) en/of cijfers (0 – 9) | `^[0-9a-zA-Z]{1,4}$` |
| Nummeraanduiding | postcode | Combinatie van vier cijfers (0 – 9) en twee hoofdletters (A – Z) | `^[1-9][0-9]{3}[A-Z]{2}$` |
| Pand | identificatie | Combinatie van het (viercijferig) subdomein 'gemeentecode' (volgens Tabel 33 Gemeententabel van de Landelijke Tabellen GBA), het (tweecijferig) subdomein 'objecttypecode' en een voor het betreffende objecttype binnen een gemeente uniek (tiencijferig) subdomein 'objectvolgnummer' | `^[0-9]{4}[0-9]{2}[0-9]{10}$` |
| Ligplaats | identificatie | Combinatie van het (viercijferig) subdomein 'gemeentecode' (volgens Tabel 33 Gemeententabel van de Landelijke Tabellen GBA), het (tweecijferig) subdomein 'objecttypecode' en een voor het betreffende objecttype binnen een gemeente uniek (tiencijferig) subdomein 'objectvolgnummer' | `^[0-9]{4}[0-9]{2}[0-9]{10}$` |
| Standplaats | identificatie | Combinatie van het (viercijferig) subdomein 'gemeentecode' (volgens Tabel 33 Gemeententabel van de Landelijke Tabellen GBA), het (tweecijferig) subdomein 'objecttypecode' en een voor het betreffende objecttype binnen een gemeente uniek (tiencijferig) subdomein 'objectvolgnummer' | `^[0-9]{4}[0-9]{2}[0-9]{10}$` |
| Verblijfsobject | identificatie | Combinatie van het (viercijferig) subdomein 'gemeentecode' (volgens Tabel 33 Gemeententabel van de Landelijke Tabellen GBA), het (tweecijferig) subdomein 'objecttypecode' en een voor het betreffende objecttype binnen een gemeente uniek (tiencijferig) subdomein 'objectvolgnummer' | `^[0-9]{4}[0-9]{2}[0-9]{10}$` |
| Verblijfsobject | oppervlakte | Een natuurlijk getal tussen 1 en 999999 | `^[1-9][0-9]{0,5}$` |
[Tabel 9.3.a: Formele patronen]
