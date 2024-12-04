let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Catalogus Basisregistratie Adressen en Gebouwen",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  pubDomain: "bag",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //license: "cc0",                 // Public Domain Dedication
  license: "cc-by-nd",                 // Attribution, met bronvermelding
  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "imbag",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-03-28",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",
  //-- TODO: de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Linda van den Brink",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
       name: "Frank Kooij",
        company: "Kadaster",
        companyURL: "https://www.kadaster.nl",
      },
      {
       name: "Arnoud de Boer",
       company: "Geonovum",
       companyURL: "https://www.geonovum.nl",
      },
      {
       name: "Lodewijk Jessen †",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      }
    ],
  // TODO: Vul de github URL in.
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/imbag/catalogus-1punt1-concept",
  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
  localBiblio: {
    "GML-SF":{
      href:"https://portal.opengeospatial.org/files/?artifact_id=42729",
      title:"Geography Markup Language (GML) simple features profile (with Corrigendum), OGC® 10-100r3",
    authors: ["Linda van den Brink", "Clemens Portele", "Panagiotis (Peter) A. Vretanos"],
      date: "5 April 2012",
      publisher:"Open Geospatial Consortium",
    },
    "ISO-IEC-10646":{
      href:"http://unicode.org/L2/L2010/10038-fcd10646-main.pdf",
      title:"ISO/IEC (2010) _International Standard ISO/IEC 10646, Second edition",
      status:"Final Committee Draft",
      publisher:"ISO/IEC"
    },
    "HTW-1996":{
      title:"Handleiding voor de Technische werkzaamheden van het Kadaster",
      date: "1996",
      isbn:"90-803078-1-5"
    },
    "archiefwet-1995":{
      title: "Archiefwet 1995",
      href:"http://wetten.overheid.nl/jci1.3:c:BWBR0007376",
    },
    "MIM":{
      href:"https://docs.geostandaarden.nl/mim/def-st-mim10-20170614/",
      title:"MIM - Metamodel Informatie Modellering versie 1.0",
      date:"14-06-2017",
    }
  }
};


