# Inleiding

Deze catalogus van de Basisregistratie Adressen en Gebouwen (BAG) beschrijft hoe objectgerichte informatie over adressen en gebouwen moet worden vastgelegd, zodat landelijke uitwisseling van deze informatie mogelijk is.

Deze catalogus heeft onder meer als doelstelling om de uniformiteit in de afbakening en bijhouding van objecten te bevorderen. De generieke, objectgerichte voorschriften leiden echter niet voor iedere concrete situatie altijd tot een bij voorbaat eenduidige uitkomst. Het is de verantwoordelijkheid van de bronhouder om in dergelijke situaties tot een resultaat te komen dat aansluit bij de doelen en principes van de BAG. Daarbij kan de wens om tot een eenduidige situatie in verschillende processen en registraties te komen een punt van overweging zijn, gezien het belang daarvan voor de klanten en voor de bedrijfsvoering.

In 2018 is deze catalogus ontstaan na samenvoeging en harmonisatie van de Catalogus BAG 2009 met andere gerelateerde documenten. Hierbij zijn ook de wijzigingen meegenomen als gevolg van de aangepaste Wet basisregistratie adressen en gebouwen die op 1 juli 2018 in werking treedt.

In deze catalogus zijn de uitgangspunten en voorschriften opgenomen die ervoor zorgen dat objecten in de BAG overal op dezelfde manier worden vastgelegd. De catalogus beschrijft de ontwerpprincipes (zie hoofdstuk [[[#ontwerpprincipes]]]) en algemene principes (zie  hoofdstuk [[[#algemene-principes]]]) die de basis vormen voor de vastlegging van objecten in de Basisregistratie Adressen en Gebouwen en de kwaliteit waaraan gegevens in de BAG moeten voldoen (zie  hoofdstuk [[[#gegevenskwaliteit]]]). De catalogus specificeert per object welke gegevens krachtens de Wet basisregistratie adressen en gebouwen in de registratie moeten worden opgenomen (zie hoofdstuk [[[#conceptueel-model]]]) en hoofdstuk [[[#objecttypen-0]]]) en definieert deze gegevens (zie hoofdstuk [[[#attributen-relaties]]]). Onderdeel van de gegevensdefinities vormen de domeinen, die een omschrijving geven van de waarden die een gegeven kan aannemen. De catalogus bevat ook een nadere omschrijving van deze domeinen (zie hoofdstuk [[[#domeinwaarden]]]). Hoofdstuk [[[#implementatie]]] richt zich op interoperabiliteit in de keten van bronhouder tot gebruiker en legt op waaraan logische modellen moeten voldoen bij het implementeren van het conceptuele model uit de hoofdstukken 5 tot en met 8. Hoofdstuk [[[#objectafbakening]]] gaat over het kijken naar de werkelijkheid door de bril van de BAG, met de bedoeling om de objecten te herkennen waarover de BAG gegevens bijhoudt.

Dit eerste hoofdstuk geeft een samenvatting van de Basisregistratie Adressen en Gebouwen (zie paragraaf [[[#de-basisregistratie-adressen-en-gebouwen]]]) en beschrijft het doel (zie paragraaf [[[#doel]]]) en het gebruik ervan (zie paragraaf [[[#gebruik]]]).

## De Basisregistratie Adressen en Gebouwen

Sinds 2009 hebben gemeenten de wettelijke taak om basisgegevens over adressen en gebouwen bij te houden in de Basisregistratie Adressen en Gebouwen (BAG). Van oorsprong bestond de BAG uit twee basisregistraties: de Basisregistratie Adressen en de Basisregistratie Gebouwen. Deze twee basisregistraties waren onderling sterk gerelateerd en vormden daarom in de praktijk een geheel.

De Basisregistratie Adressen kan worden beschouwd als een overzichtstabel van alle officiële adressen die binnen de Nederlandse overheid (mogen) worden gebruikt. Op deze wijze kunnen ook knelpunten bij het koppelen van registraties worden voorkomen die het gevolg zijn van de schrijfwijze. In de Basisregistratie Adressen worden drie objecten geregistreerd die gezamenlijk een adres vormen: Woonplaats, Nummeraanduiding, Openbare ruimte.

Adressen worden daarbij aangemerkt als een vereenvoudigde officiële naamgeving van een beperkt aantal objecten.

Officiële adressen kunnen alleen worden toegekend aan de drie adresseerbare objecttypen: Verblijfsobject, Ligplaats en Standplaats.

In de Basisregistratie Gebouwen worden alle met "gebouwen" samenhangende objecten geregistreerd. De registratie is dus een objectenregistratie. Dit betekent dat in de registratie bepaalde objecten concreet worden afgebakend en van een unieke aanduiding voorzien. Het zijn deze objecten waaraan vervolgens de te registreren gegevens worden gekoppeld. In de Basisregistratie Gebouwen worden daarbij vier objecten onderscheiden: Pand, Verblijfsobject, Ligplaats en Standplaats.

Gemeenten die meer willen registreren dan de Basisregistratie Adressen en Gebouwen voorschrijft, worden daarin nadrukkelijk vrij gelaten mits de minimaal voorgeschreven verzameling van gegevens wordt bijgehouden.

In 2013-2014 heeft de Auditdienst Rijk de doeltreffendheid en de effecten van de Wet basisregistraties adressen en gebouwen geëvalueerd en aanbevelingen gedaan om de uitvoering van de Wet basisregistraties adressen en gebouwen te verbeteren. Naar aanleiding hiervan zijn verbeteringen uitgewerkt in onder meer een nieuwe Wet basisregistratie adressen en gebouwen en deze catalogus en werden de twee basisregistraties samengevoegd tot één basisregistratie: de Basisregistratie Adressen en Gebouwen (BAG).

<aside class="note">De Wet basisregistraties adressen en gebouwen is conform artikel 46 van deze wet in 2013 geëvalueerd door de Auditdienst Rijk in opdracht van het ministerie van Infrastructuur en Milieu. Het evaluatierapport is begin 2014 opgeleverd en op 25 april 2014 aan de Tweede Kamer verzonden. <a href="https://www.geobasisregistraties.nl/basisregistraties/adressen-en-gebouwen/evaluatie-bag/evaluatie-onderzoek-bag-door-auditdienst-rijk">https://www.geobasisregistraties.nl/basisregistraties/adressen-en-gebouwen/evaluatie-bag/evaluatie-onderzoek-bag-door-auditdienst-rijk</a></aside>

## Doel

De Basisregistratie Adressen en Gebouwen (BAG) is een van de basisregistraties die deel uitmaakt van het landelijk stelsel van basisregistraties. Deze basisregistraties zijn erop gericht de informatievoorziening in Nederland beter te ordenen. Het eenduidig benoemen van te registreren objecten is dan ook de belangrijkste functie van een basisregistratie.

Het belangrijkste doel van de BAG is het uniek identificeren en aanduiden van adresseerbare objecten en panden. Op deze wijze ontstaat een duidelijke relatie tussen de adressering en het object waarop het adres betrekking heeft en wordt een aanzet gegeven tot het leggen van meer eenduidige relaties tussen verschillende registraties.

Registratie in de BAG heeft overigens uitdrukkelijk uitsluitend een administratieve achtergrond en houdt geen legalisering of ander (rechts)gevolg in.

<aside class="note">Memorie van toelichting bij de wijziging van de Wet basisregistraties adressen en gebouwen en de Kadasterwet, kamerstukken II, 2008/09, 31 726, nr. 3, 7 oktober 2008: "Uitgangspunt blijft uiteraard dat registratie plaatsvindt op basis van de originele brondocumenten. Het gebruik van een formaliseringsbeslissing als brondocument dient beperkt te zijn tot die gevallen waarin er geen origineel brondocument bestaat of zo’n document slechts met onevenredige inspanning kan worden achterhaald. Het ontbreken van een brondocument kan zich bijvoorbeeld voordoen indien voor een pand geen bouwvergunning bestaat. Dit kan zeer oude, vergunningsvrije of illegale bouw betreffen. In dit verband dient uitdrukkelijk te worden opgemerkt dat een formaliseringsbeslissing in het kader van de registratie uitsluitend een administratieve achtergrond heeft en geen legalisering of ander (rechts)gevolg inhoudt. Overigens is denkbaar dat in sommige gevallen wel een brondocument heeft bestaan, dat echter door een calamiteit of anderszins teniet is gegaan." <a href="https://zoek.officielebekendmakingen.nl/kst-31726-3.html">https://zoek.officielebekendmakingen.nl/kst-31726-3.html</a></aside>

## Gebruik

De BAG is een van de basisregistraties die de kern vormt van de gegevenshuishouding van de overheid. Binnen een dergelijke (verplicht te gebruiken) basisregistratie wordt het fundament gelegd voor de eenduidige benoeming van een aantal binnen veel overheidsprocessen gebruikte objecten. Hierdoor worden de binnen deze verschillende processen gebruikte objecten onderling consistent en kunnen gegevens uit verschillende processen zo nodig met elkaar gekoppeld en gecombineerd worden.

Naast een brede gebruiksplicht bestaat de verplichting voor bestuursorganen en de bevoegdheid voor andere belanghebbenden om bij gerede twijfel een terugmelding te doen (zie paragraaf [[[#aanwijzingen-van-mogelijke-onjuistheden-in-de-registratie]]]). Deze combinatie van verplicht gebruik en terugmelding zijn belangrijke instrumenten om de kwaliteit van basisregistraties te vergroten.