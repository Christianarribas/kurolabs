"use strict";
/* Diccionario común para toda la web. El texto español es la clave para que
   puedas localizar una frase sin aprender códigos ni tocar su presentación.
   WeakMap conserva los originales sin añadir datos personales al almacenamiento. */
window.idiomasKuro = (() => {
  const traducciones = {
  /* Figuras 9 a 18: textos nuevos en castellano, inglés y euskera. */
  "Kitsune con katana": {
    "es": "Kitsune con katana",
    "en": "Kitsune with katana",
    "eu": "Katana duen kitsunea"
  },
  "Kitsune con katana ↗": {
    "es": "Kitsune con katana ↗",
    "en": "Kitsune with katana ↗",
    "eu": "Katana duen kitsunea ↗"
  },
  "Kuro Labs - Kitsune con katana": {
    "es": "Kuro Labs - Kitsune con katana",
    "en": "Kuro Labs - Kitsune with katana",
    "eu": "Kuro Labs - Katana duen kitsunea"
  },
  "Un espíritu zorro de pie, con armadura ligera, katana y nueve colas esculpidas en abanico. La máscara de zorro y la peana de piedra completan una silueta ceremonial.": {
    "es": "Un espíritu zorro de pie, con armadura ligera, katana y nueve colas esculpidas en abanico. La máscara de zorro y la peana de piedra completan una silueta ceremonial.",
    "en": "A standing fox spirit in light armor with a katana and nine tails sculpted in a fan. The fox mask and stone base complete a ceremonial silhouette.",
    "eu": "Zutik dagoen azeri-espiritua, armadura arinarekin, katanarekin eta haizemaile moduan landutako bederatzi buztanekin. Azeri-maskarak eta harrizko oinarriak erritu-itxurako silueta osatzen dute."
  },
  "Diseño conceptual con katana y nueve colas.": {
    "es": "Diseño conceptual con katana y nueve colas.",
    "en": "Concept design with a katana and nine tails.",
    "eu": "Katana eta bederatzi buztan dituen diseinu kontzeptuala."
  },
  "Katana y nueve colas": {
    "es": "Katana y nueve colas",
    "en": "Katana and nine tails",
    "eu": "Katana eta bederatzi buztan"
  },
  "Zorro espiritual": {
    "es": "Zorro espiritual",
    "en": "Spirit fox",
    "eu": "Espiritu-azeria"
  },
  "Ver ficha de Kitsune con katana": {
    "es": "Ver ficha de Kitsune con katana",
    "en": "View Kitsune with katana details",
    "eu": "Katana duen kitsunea: ikusi fitxa"
  },
  "Añadir Kitsune con katana al carrito": {
    "es": "Añadir Kitsune con katana al carrito",
    "en": "Add Kitsune with katana to basket",
    "eu": "Katana duen kitsunea: gehitu saskira"
  },
  "Ampliar vistas de Kitsune con katana": {
    "es": "Ampliar vistas de Kitsune con katana",
    "en": "Enlarge Kitsune with katana views",
    "eu": "Katana duen kitsunea: handitu bistak"
  },
  "Diseño conceptual de Kitsune con katana en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Kitsune con katana en resina gris, visto desde cuatro ángulos",
    "en": "Kitsune with katana: grey-resin concept design, seen from four angles",
    "eu": "Katana duen kitsunea: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Kitsune con katana: vistas conceptuales en resina gris": {
    "es": "Kitsune con katana: vistas conceptuales en resina gris",
    "en": "Kitsune with katana: grey-resin concept views",
    "eu": "Katana duen kitsunea: erretxina griseko bista kontzeptualak"
  },
  "Kitsune con katana: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Kitsune con katana: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Kitsune with katana: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Katana duen kitsunea: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Monje yokai": {
    "es": "Monje yokai",
    "en": "Yokai monk",
    "eu": "Yokai monjea"
  },
  "Monje yokai ↗": {
    "es": "Monje yokai ↗",
    "en": "Yokai monk ↗",
    "eu": "Yokai monjea ↗"
  },
  "Kuro Labs - Monje yokai": {
    "es": "Kuro Labs - Monje yokai",
    "en": "Kuro Labs - Yokai monk",
    "eu": "Kuro Labs - Yokai monjea"
  },
  "Un monje errante con sombrero de paja, hábito desgarrado y un bastón de anillos. Debajo del sombrero asoma un rostro de yokai.": {
    "es": "Un monje errante con sombrero de paja, hábito desgarrado y un bastón de anillos. Debajo del sombrero asoma un rostro de yokai.",
    "en": "A wandering monk with a straw hat, a tattered habit and a ringed staff. A yokai face peeks out from under the hat.",
    "eu": "Lastozko kapela, jantzi urratua eta eraztunekin makila dituen monje ibiltaria. Kapelaren azpitik yokai baten aurpegia agertzen da."
  },
  "Diseño conceptual con bastón de anillos y sombrero de paja.": {
    "es": "Diseño conceptual con bastón de anillos y sombrero de paja.",
    "en": "Concept design with a ringed staff and a straw hat.",
    "eu": "Eraztunekin makila eta lastozko kapela dituen diseinu kontzeptuala."
  },
  "Bastón y sombrero de paja": {
    "es": "Bastón y sombrero de paja",
    "en": "Staff and straw hat",
    "eu": "Makila eta lastozko kapela"
  },
  "Monje espectral": {
    "es": "Monje espectral",
    "en": "Spectral monk",
    "eu": "Monje mamu"
  },
  "Ver ficha de Monje yokai": {
    "es": "Ver ficha de Monje yokai",
    "en": "View Yokai monk details",
    "eu": "Yokai monjea: ikusi fitxa"
  },
  "Añadir Monje yokai al carrito": {
    "es": "Añadir Monje yokai al carrito",
    "en": "Add Yokai monk to basket",
    "eu": "Yokai monjea: gehitu saskira"
  },
  "Ampliar vistas de Monje yokai": {
    "es": "Ampliar vistas de Monje yokai",
    "en": "Enlarge Yokai monk views",
    "eu": "Yokai monjea: handitu bistak"
  },
  "Diseño conceptual de Monje yokai en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Monje yokai en resina gris, visto desde cuatro ángulos",
    "en": "Yokai monk: grey-resin concept design, seen from four angles",
    "eu": "Yokai monjea: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Monje yokai: vistas conceptuales en resina gris": {
    "es": "Monje yokai: vistas conceptuales en resina gris",
    "en": "Yokai monk: grey-resin concept views",
    "eu": "Yokai monjea: erretxina griseko bista kontzeptualak"
  },
  "Monje yokai: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Monje yokai: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Yokai monk: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Yokai monjea: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Tengu arquero": {
    "es": "Tengu arquero",
    "en": "Tengu archer",
    "eu": "Tengu arkularia"
  },
  "Tengu arquero ↗": {
    "es": "Tengu arquero ↗",
    "en": "Tengu archer ↗",
    "eu": "Tengu arkularia ↗"
  },
  "Kuro Labs - Tengu arquero": {
    "es": "Kuro Labs - Tengu arquero",
    "en": "Kuro Labs - Tengu archer",
    "eu": "Kuro Labs - Tengu arkularia"
  },
  "Un guerrero tengu con alas de plumas esculpidas y un arco largo tensado. La armadura lleva plumas y placas, y el carcaj cuelga a la espalda.": {
    "es": "Un guerrero tengu con alas de plumas esculpidas y un arco largo tensado. La armadura lleva plumas y placas, y el carcaj cuelga a la espalda.",
    "en": "A tengu warrior with sculpted feathered wings and a drawn longbow. The armor mixes feathers and plates, and the quiver hangs on the back.",
    "eu": "Lumazko hegoak eta arku luze tenkatua dituen tengu gerlaria. Armadurak lumak eta plakak ditu, eta ziborioa bizkarrean zintzilik dago."
  },
  "Diseño conceptual con arco largo y alas de plumas.": {
    "es": "Diseño conceptual con arco largo y alas de plumas.",
    "en": "Concept design with a longbow and feathered wings.",
    "eu": "Arku luzea eta lumazko hegoak dituen diseinu kontzeptuala."
  },
  "Arco largo y alas": {
    "es": "Arco largo y alas",
    "en": "Longbow and wings",
    "eu": "Arku luzea eta hegoak"
  },
  "Guerrero alado": {
    "es": "Guerrero alado",
    "en": "Winged warrior",
    "eu": "Gerlari hegodun"
  },
  "Ver ficha de Tengu arquero": {
    "es": "Ver ficha de Tengu arquero",
    "en": "View Tengu archer details",
    "eu": "Tengu arkularia: ikusi fitxa"
  },
  "Añadir Tengu arquero al carrito": {
    "es": "Añadir Tengu arquero al carrito",
    "en": "Add Tengu archer to basket",
    "eu": "Tengu arkularia: gehitu saskira"
  },
  "Ampliar vistas de Tengu arquero": {
    "es": "Ampliar vistas de Tengu arquero",
    "en": "Enlarge Tengu archer views",
    "eu": "Tengu arkularia: handitu bistak"
  },
  "Diseño conceptual de Tengu arquero en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Tengu arquero en resina gris, visto desde cuatro ángulos",
    "en": "Tengu archer: grey-resin concept design, seen from four angles",
    "eu": "Tengu arkularia: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Tengu arquero: vistas conceptuales en resina gris": {
    "es": "Tengu arquero: vistas conceptuales en resina gris",
    "en": "Tengu archer: grey-resin concept views",
    "eu": "Tengu arkularia: erretxina griseko bista kontzeptualak"
  },
  "Tengu arquero: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Tengu arquero: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Tengu archer: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Tengu arkularia: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Oni del tambor": {
    "es": "Oni del tambor",
    "en": "Drummer oni",
    "eu": "Danbor-onia"
  },
  "Oni del tambor ↗": {
    "es": "Oni del tambor ↗",
    "en": "Drummer oni ↗",
    "eu": "Danbor-onia ↗"
  },
  "Kuro Labs - Oni del tambor": {
    "es": "Kuro Labs - Oni del tambor",
    "en": "Kuro Labs - Drummer oni",
    "eu": "Kuro Labs - Danbor-onia"
  },
  "Un oni corpulento con cuernos, dos mazos enormes y un gran tambor taiko atado a la espalda. La armadura en capas refuerza su aire de guerrero ceremonial.": {
    "es": "Un oni corpulento con cuernos, dos mazos enormes y un gran tambor taiko atado a la espalda. La armadura en capas refuerza su aire de guerrero ceremonial.",
    "en": "A burly horned oni with two huge mallets and a large taiko drum strapped to its back. The layered armor adds to its ceremonial warrior look.",
    "eu": "Adarrak dituen oni sendoa, bi mailu erraldoirekin eta bizkarrean lotutako taiko danbor handi batekin. Geruzazko armadurak erritu-gerlariaren itxura indartzen du."
  },
  "Diseño conceptual con tambor taiko y dos mazos.": {
    "es": "Diseño conceptual con tambor taiko y dos mazos.",
    "en": "Concept design with a taiko drum and two mallets.",
    "eu": "Taiko danborra eta bi mailu dituen diseinu kontzeptuala."
  },
  "Taiko y dos mazos": {
    "es": "Taiko y dos mazos",
    "en": "Taiko and two mallets",
    "eu": "Taiko eta bi mailu"
  },
  "Oni musical": {
    "es": "Oni musical",
    "en": "Musical oni",
    "eu": "Oni musikala"
  },
  "Ver ficha de Oni del tambor": {
    "es": "Ver ficha de Oni del tambor",
    "en": "View Drummer oni details",
    "eu": "Danbor-onia: ikusi fitxa"
  },
  "Añadir Oni del tambor al carrito": {
    "es": "Añadir Oni del tambor al carrito",
    "en": "Add Drummer oni to basket",
    "eu": "Danbor-onia: gehitu saskira"
  },
  "Ampliar vistas de Oni del tambor": {
    "es": "Ampliar vistas de Oni del tambor",
    "en": "Enlarge Drummer oni views",
    "eu": "Danbor-onia: handitu bistak"
  },
  "Diseño conceptual de Oni del tambor en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Oni del tambor en resina gris, visto desde cuatro ángulos",
    "en": "Drummer oni: grey-resin concept design, seen from four angles",
    "eu": "Danbor-onia: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Oni del tambor: vistas conceptuales en resina gris": {
    "es": "Oni del tambor: vistas conceptuales en resina gris",
    "en": "Drummer oni: grey-resin concept views",
    "eu": "Danbor-onia: erretxina griseko bista kontzeptualak"
  },
  "Oni del tambor: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Oni del tambor: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Drummer oni: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Danbor-onia: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Geisha de acero": {
    "es": "Geisha de acero",
    "en": "Steel geisha",
    "eu": "Altzairuzko geisha"
  },
  "Geisha de acero ↗": {
    "es": "Geisha de acero ↗",
    "en": "Steel geisha ↗",
    "eu": "Altzairuzko geisha ↗"
  },
  "Kuro Labs - Geisha de acero": {
    "es": "Kuro Labs - Geisha de acero",
    "en": "Kuro Labs - Steel geisha",
    "eu": "Kuro Labs - Altzairuzko geisha"
  },
  "Una figura elegante de kimono blindado, con dos abanicos de acero y adornos colgantes en el peinado. Las articulaciones mecánicas asoman bajo la tela.": {
    "es": "Una figura elegante de kimono blindado, con dos abanicos de acero y adornos colgantes en el peinado. Las articulaciones mecánicas asoman bajo la tela.",
    "en": "An elegant figure in an armored kimono, with two steel fans and hanging ornaments in the hairstyle. Mechanical joints show beneath the fabric.",
    "eu": "Kimono blindatuko figura dotorea, altzairuzko bi haizemaile eta orrazkian zintzilik dauden apaingarriekin. Giltza mekanikoak ehunaren azpian ikusten dira."
  },
  "Diseño conceptual con abanicos de acero y kimono blindado.": {
    "es": "Diseño conceptual con abanicos de acero y kimono blindado.",
    "en": "Concept design with steel fans and an armored kimono.",
    "eu": "Altzairuzko haizemaileak eta kimono blindatua dituen diseinu kontzeptuala."
  },
  "Dos abanicos de acero": {
    "es": "Dos abanicos de acero",
    "en": "Two steel fans",
    "eu": "Altzairuzko bi haizemaile"
  },
  "Oni elegante": {
    "es": "Oni elegante",
    "en": "Elegant oni",
    "eu": "Oni dotorea"
  },
  "Ver ficha de Geisha de acero": {
    "es": "Ver ficha de Geisha de acero",
    "en": "View Steel geisha details",
    "eu": "Altzairuzko geisha: ikusi fitxa"
  },
  "Añadir Geisha de acero al carrito": {
    "es": "Añadir Geisha de acero al carrito",
    "en": "Add Steel geisha to basket",
    "eu": "Altzairuzko geisha: gehitu saskira"
  },
  "Ampliar vistas de Geisha de acero": {
    "es": "Ampliar vistas de Geisha de acero",
    "en": "Enlarge Steel geisha views",
    "eu": "Altzairuzko geisha: handitu bistak"
  },
  "Diseño conceptual de Geisha de acero en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Geisha de acero en resina gris, visto desde cuatro ángulos",
    "en": "Steel geisha: grey-resin concept design, seen from four angles",
    "eu": "Altzairuzko geisha: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Geisha de acero: vistas conceptuales en resina gris": {
    "es": "Geisha de acero: vistas conceptuales en resina gris",
    "en": "Steel geisha: grey-resin concept views",
    "eu": "Altzairuzko geisha: erretxina griseko bista kontzeptualak"
  },
  "Geisha de acero: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Geisha de acero: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Steel geisha: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Altzairuzko geisha: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Guardián dragón": {
    "es": "Guardián dragón",
    "en": "Dragon guardian",
    "eu": "Herensuge zaindaria"
  },
  "Guardián dragón ↗": {
    "es": "Guardián dragón ↗",
    "en": "Dragon guardian ↗",
    "eu": "Herensuge zaindaria ↗"
  },
  "Kuro Labs - Guardián dragón": {
    "es": "Kuro Labs - Guardián dragón",
    "en": "Kuro Labs - Dragon guardian",
    "eu": "Kuro Labs - Herensuge zaindaria"
  },
  "Un guardián con armadura de escamas y casco con cuernos, que sostiene una lanza larga mientras un dragón serpentino se enrosca en su brazo.": {
    "es": "Un guardián con armadura de escamas y casco con cuernos, que sostiene una lanza larga mientras un dragón serpentino se enrosca en su brazo.",
    "en": "A guardian in scale armor and a horned helmet, holding a long spear while a serpentine dragon coils around his arm.",
    "eu": "Ezkatazko armadura eta adarrekin kaskoa dituen zaindaria, lantza luzea eskuan duela, herensuge sugetsu bat besoan kiribilduta duelarik."
  },
  "Diseño conceptual con lanza larga y dragón enroscado.": {
    "es": "Diseño conceptual con lanza larga y dragón enroscado.",
    "en": "Concept design with a long spear and a coiled dragon.",
    "eu": "Lantza luzea eta kiribildutako herensugea dituen diseinu kontzeptuala."
  },
  "Lanza y dragón enroscado": {
    "es": "Lanza y dragón enroscado",
    "en": "Spear and coiled dragon",
    "eu": "Lantza eta kiribildutako herensugea"
  },
  "Guardián legendario": {
    "es": "Guardián legendario",
    "en": "Legendary guardian",
    "eu": "Zaindari legendarioa"
  },
  "Ver ficha de Guardián dragón": {
    "es": "Ver ficha de Guardián dragón",
    "en": "View Dragon guardian details",
    "eu": "Herensuge zaindaria: ikusi fitxa"
  },
  "Añadir Guardián dragón al carrito": {
    "es": "Añadir Guardián dragón al carrito",
    "en": "Add Dragon guardian to basket",
    "eu": "Herensuge zaindaria: gehitu saskira"
  },
  "Ampliar vistas de Guardián dragón": {
    "es": "Ampliar vistas de Guardián dragón",
    "en": "Enlarge Dragon guardian views",
    "eu": "Herensuge zaindaria: handitu bistak"
  },
  "Diseño conceptual de Guardián dragón en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Guardián dragón en resina gris, visto desde cuatro ángulos",
    "en": "Dragon guardian: grey-resin concept design, seen from four angles",
    "eu": "Herensuge zaindaria: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Guardián dragón: vistas conceptuales en resina gris": {
    "es": "Guardián dragón: vistas conceptuales en resina gris",
    "en": "Dragon guardian: grey-resin concept views",
    "eu": "Herensuge zaindaria: erretxina griseko bista kontzeptualak"
  },
  "Guardián dragón: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Guardián dragón: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Dragon guardian: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Herensuge zaindaria: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Kappa mecánico": {
    "es": "Kappa mecánico",
    "en": "Mechanical kappa",
    "eu": "Kappa mekanikoa"
  },
  "Kappa mecánico ↗": {
    "es": "Kappa mecánico ↗",
    "en": "Mechanical kappa ↗",
    "eu": "Kappa mekanikoa ↗"
  },
  "Kuro Labs - Kappa mecánico": {
    "es": "Kuro Labs - Kappa mecánico",
    "en": "Kuro Labs - Mechanical kappa",
    "eu": "Kuro Labs - Kappa mekanikoa"
  },
  "Una criatura de río con caparazón blindado, plato en la cabeza y un tridente. Las placas y los pistones la convierten en una máquina anfibia.": {
    "es": "Una criatura de río con caparazón blindado, plato en la cabeza y un tridente. Las placas y los pistones la convierten en una máquina anfibia.",
    "en": "A river creature with an armored shell, a dish on its head and a trident. Plates and pistons make it an amphibious machine.",
    "eu": "Maskor blindatua, buruan plater bat eta hiruhortza dituen ibaiko izakia. Plakek eta pistoiek makina anfibio bihurtzen dute."
  },
  "Diseño conceptual con caparazón blindado y tridente.": {
    "es": "Diseño conceptual con caparazón blindado y tridente.",
    "en": "Concept design with an armored shell and a trident.",
    "eu": "Maskor blindatua eta hiruhortza dituen diseinu kontzeptuala."
  },
  "Caparazón y tridente": {
    "es": "Caparazón y tridente",
    "en": "Shell and trident",
    "eu": "Maskor eta hiruhortza"
  },
  "Criatura de río mecánica": {
    "es": "Criatura de río mecánica",
    "en": "Mechanical river creature",
    "eu": "Ibaiko izaki mekanikoa"
  },
  "Ver ficha de Kappa mecánico": {
    "es": "Ver ficha de Kappa mecánico",
    "en": "View Mechanical kappa details",
    "eu": "Kappa mekanikoa: ikusi fitxa"
  },
  "Añadir Kappa mecánico al carrito": {
    "es": "Añadir Kappa mecánico al carrito",
    "en": "Add Mechanical kappa to basket",
    "eu": "Kappa mekanikoa: gehitu saskira"
  },
  "Ampliar vistas de Kappa mecánico": {
    "es": "Ampliar vistas de Kappa mecánico",
    "en": "Enlarge Mechanical kappa views",
    "eu": "Kappa mekanikoa: handitu bistak"
  },
  "Diseño conceptual de Kappa mecánico en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Kappa mecánico en resina gris, visto desde cuatro ángulos",
    "en": "Mechanical kappa: grey-resin concept design, seen from four angles",
    "eu": "Kappa mekanikoa: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Kappa mecánico: vistas conceptuales en resina gris": {
    "es": "Kappa mecánico: vistas conceptuales en resina gris",
    "en": "Mechanical kappa: grey-resin concept views",
    "eu": "Kappa mekanikoa: erretxina griseko bista kontzeptualak"
  },
  "Kappa mecánico: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Kappa mecánico: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Mechanical kappa: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Kappa mekanikoa: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Cazador de kusarigama": {
    "es": "Cazador de kusarigama",
    "en": "Kusarigama hunter",
    "eu": "Kusarigama ehiztaria"
  },
  "Cazador de kusarigama ↗": {
    "es": "Cazador de kusarigama ↗",
    "en": "Kusarigama hunter ↗",
    "eu": "Kusarigama ehiztaria ↗"
  },
  "Kuro Labs - Cazador de kusarigama": {
    "es": "Kuro Labs - Cazador de kusarigama",
    "en": "Kuro Labs - Kusarigama hunter",
    "eu": "Kuro Labs - Kusarigama ehiztaria"
  },
  "Un cazador encapuchado con una hoz de cadena y un peso de hierro. La capa rasgada y el equipo ligero le dan una silueta rápida y silenciosa.": {
    "es": "Un cazador encapuchado con una hoz de cadena y un peso de hierro. La capa rasgada y el equipo ligero le dan una silueta rápida y silenciosa.",
    "en": "A hooded hunter with a chain sickle and an iron weight. The torn cloak and light gear give it a fast, silent silhouette.",
    "eu": "Kapuxa, kate-igitaia eta burdinazko pisua dituen ehiztaria. Kapa urratuak eta ekipo arinak silueta azkar eta isila ematen diote."
  },
  "Diseño conceptual con kusarigama y capa rasgada.": {
    "es": "Diseño conceptual con kusarigama y capa rasgada.",
    "en": "Concept design with a kusarigama and a torn cloak.",
    "eu": "Kusarigama eta kapa urratua dituen diseinu kontzeptuala."
  },
  "Hoz con cadena y peso": {
    "es": "Hoz con cadena y peso",
    "en": "Sickle with chain and weight",
    "eu": "Kate eta pisua duen igitaia"
  },
  "Cazador encapuchado": {
    "es": "Cazador encapuchado",
    "en": "Hooded hunter",
    "eu": "Kapuxadun ehiztaria"
  },
  "Ver ficha de Cazador de kusarigama": {
    "es": "Ver ficha de Cazador de kusarigama",
    "en": "View Kusarigama hunter details",
    "eu": "Kusarigama ehiztaria: ikusi fitxa"
  },
  "Añadir Cazador de kusarigama al carrito": {
    "es": "Añadir Cazador de kusarigama al carrito",
    "en": "Add Kusarigama hunter to basket",
    "eu": "Kusarigama ehiztaria: gehitu saskira"
  },
  "Ampliar vistas de Cazador de kusarigama": {
    "es": "Ampliar vistas de Cazador de kusarigama",
    "en": "Enlarge Kusarigama hunter views",
    "eu": "Kusarigama ehiztaria: handitu bistak"
  },
  "Diseño conceptual de Cazador de kusarigama en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Cazador de kusarigama en resina gris, visto desde cuatro ángulos",
    "en": "Kusarigama hunter: grey-resin concept design, seen from four angles",
    "eu": "Kusarigama ehiztaria: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Cazador de kusarigama: vistas conceptuales en resina gris": {
    "es": "Cazador de kusarigama: vistas conceptuales en resina gris",
    "en": "Kusarigama hunter: grey-resin concept views",
    "eu": "Kusarigama ehiztaria: erretxina griseko bista kontzeptualak"
  },
  "Cazador de kusarigama: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Cazador de kusarigama: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Kusarigama hunter: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Kusarigama ehiztaria: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Shinobi de humo": {
    "es": "Shinobi de humo",
    "en": "Smoke shinobi",
    "eu": "Keazko shinobia"
  },
  "Shinobi de humo ↗": {
    "es": "Shinobi de humo ↗",
    "en": "Smoke shinobi ↗",
    "eu": "Keazko shinobia ↗"
  },
  "Kuro Labs - Shinobi de humo": {
    "es": "Kuro Labs - Shinobi de humo",
    "en": "Kuro Labs - Smoke shinobi",
    "eu": "Kuro Labs - Keazko shinobia"
  },
  "Un shinobi agachado, con bufanda al viento, dos hojas cortas y estelas de humo esculpidas alrededor de las piernas. Lleva una máscara oni en la cadera.": {
    "es": "Un shinobi agachado, con bufanda al viento, dos hojas cortas y estelas de humo esculpidas alrededor de las piernas. Lleva una máscara oni en la cadera.",
    "en": "A crouching shinobi with a flowing scarf, two short blades and sculpted smoke trails around the legs. An oni mask hangs at the hip.",
    "eu": "Makurtuta dagoen shinobia, mahuka haizean, bi xafla labur eta hanketan inguruan landutako kea dituela. Oni maskara bat gerrian zintzilik dauka."
  },
  "Diseño conceptual con dos hojas cortas y humo esculpido.": {
    "es": "Diseño conceptual con dos hojas cortas y humo esculpido.",
    "en": "Concept design with two short blades and sculpted smoke.",
    "eu": "Bi xafla labur eta landutako kea dituen diseinu kontzeptuala."
  },
  "Dos hojas y humo esculpido": {
    "es": "Dos hojas y humo esculpido",
    "en": "Two blades and sculpted smoke",
    "eu": "Bi xafla eta landutako kea"
  },
  "Ninja ágil": {
    "es": "Ninja ágil",
    "en": "Agile ninja",
    "eu": "Ninja arina"
  },
  "Ver ficha de Shinobi de humo": {
    "es": "Ver ficha de Shinobi de humo",
    "en": "View Smoke shinobi details",
    "eu": "Keazko shinobia: ikusi fitxa"
  },
  "Añadir Shinobi de humo al carrito": {
    "es": "Añadir Shinobi de humo al carrito",
    "en": "Add Smoke shinobi to basket",
    "eu": "Keazko shinobia: gehitu saskira"
  },
  "Ampliar vistas de Shinobi de humo": {
    "es": "Ampliar vistas de Shinobi de humo",
    "en": "Enlarge Smoke shinobi views",
    "eu": "Keazko shinobia: handitu bistak"
  },
  "Diseño conceptual de Shinobi de humo en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Shinobi de humo en resina gris, visto desde cuatro ángulos",
    "en": "Smoke shinobi: grey-resin concept design, seen from four angles",
    "eu": "Keazko shinobia: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Shinobi de humo: vistas conceptuales en resina gris": {
    "es": "Shinobi de humo: vistas conceptuales en resina gris",
    "en": "Smoke shinobi: grey-resin concept views",
    "eu": "Keazko shinobia: erretxina griseko bista kontzeptualak"
  },
  "Shinobi de humo: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Shinobi de humo: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Smoke shinobi: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Keazko shinobia: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Emperador oni": {
    "es": "Emperador oni",
    "en": "Oni emperor",
    "eu": "Oni enperadorea"
  },
  "Emperador oni ↗": {
    "es": "Emperador oni ↗",
    "en": "Oni emperor ↗",
    "eu": "Oni enperadorea ↗"
  },
  "Kuro Labs - Emperador oni": {
    "es": "Kuro Labs - Emperador oni",
    "en": "Kuro Labs - Oni emperor",
    "eu": "Kuro Labs - Oni enperadorea"
  },
  "Un oni de rango imperial con corona de cuernos, armadura de placas y una gran capa. Apoya las manos sobre un espadón clavado en la peana.": {
    "es": "Un oni de rango imperial con corona de cuernos, armadura de placas y una gran capa. Apoya las manos sobre un espadón clavado en la peana.",
    "en": "An imperial-rank oni with a crown of horns, plate armor and a great cloak. Both hands rest on a greatsword planted in the base.",
    "eu": "Maila inperialeko onia, adar-koroa, plakazko armadura eta kapa handi batekin. Eskuak oinarrian sartutako ezpata handi baten gainean ditu."
  },
  "Diseño conceptual con espadón y capa imperial.": {
    "es": "Diseño conceptual con espadón y capa imperial.",
    "en": "Concept design with a greatsword and an imperial cloak.",
    "eu": "Ezpata handia eta kapa inperiala dituen diseinu kontzeptuala."
  },
  "Espadón y capa imperial": {
    "es": "Espadón y capa imperial",
    "en": "Greatsword and imperial cloak",
    "eu": "Ezpata handia eta kapa inperiala"
  },
  "Oni imperial": {
    "es": "Oni imperial",
    "en": "Imperial oni",
    "eu": "Oni inperiala"
  },
  "Ver ficha de Emperador oni": {
    "es": "Ver ficha de Emperador oni",
    "en": "View Oni emperor details",
    "eu": "Oni enperadorea: ikusi fitxa"
  },
  "Añadir Emperador oni al carrito": {
    "es": "Añadir Emperador oni al carrito",
    "en": "Add Oni emperor to basket",
    "eu": "Oni enperadorea: gehitu saskira"
  },
  "Ampliar vistas de Emperador oni": {
    "es": "Ampliar vistas de Emperador oni",
    "en": "Enlarge Oni emperor views",
    "eu": "Oni enperadorea: handitu bistak"
  },
  "Diseño conceptual de Emperador oni en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Emperador oni en resina gris, visto desde cuatro ángulos",
    "en": "Oni emperor: grey-resin concept design, seen from four angles",
    "eu": "Oni enperadorea: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Emperador oni: vistas conceptuales en resina gris": {
    "es": "Emperador oni: vistas conceptuales en resina gris",
    "en": "Oni emperor: grey-resin concept views",
    "eu": "Oni enperadorea: erretxina griseko bista kontzeptualak"
  },
  "Emperador oni: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Emperador oni: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Oni emperor: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Oni enperadorea: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "18 DISEÑOS": {
    "es": "18 DISEÑOS",
    "en": "18 DESIGNS",
    "eu": "18 DISEINU"
  },
  "18 DISEÑOS / SIN COLOR": {
    "es": "18 DISEÑOS / SIN COLOR",
    "en": "18 DESIGNS / UNPAINTED",
    "eu": "18 DISEINU / MARGOTU GABE"
  },
  "18 diseños de ejemplo": {
    "es": "18 diseños de ejemplo",
    "en": "18 example designs",
    "eu": "18 adibideko diseinu"
  },
  "Inicio": {
    "es": "Inicio",
    "en": "Home",
    "eu": "Hasiera"
  },
  "Catálogo": {
    "es": "Catálogo",
    "en": "Catalogue",
    "eu": "Katalogoa"
  },
  "Colecciones": {
    "es": "Colecciones",
    "en": "Collections",
    "eu": "Bildumak"
  },
  "Noticias": {
    "es": "Noticias",
    "en": "News",
    "eu": "Berriak"
  },
  "Contacto": {
    "es": "Contacto",
    "en": "Contact",
    "eu": "Kontaktua"
  },
  "Idioma": {
    "es": "Idioma",
    "en": "Language",
    "eu": "Hizkuntza"
  },
  "Abrir menú": {
    "es": "Abrir menú",
    "en": "Open menu",
    "eu": "Ireki menua"
  },
  "Cerrar menú": {
    "es": "Cerrar menú",
    "en": "Close menu",
    "eu": "Itxi menua"
  },
  "Navegación principal": {
    "es": "Navegación principal",
    "en": "Main navigation",
    "eu": "Nabigazio nagusia"
  },
  "Kuro Labs, inicio": {
    "es": "Kuro Labs, inicio",
    "en": "Kuro Labs, home",
    "eu": "Kuro Labs, hasiera"
  },
  "Activar modo claro": {
    "es": "Activar modo claro",
    "en": "Switch to light mode",
    "eu": "Aktibatu modu argia"
  },
  "Activar modo oscuro": {
    "es": "Activar modo oscuro",
    "en": "Switch to dark mode",
    "eu": "Aktibatu modu iluna"
  },
  "Claro ◐": {
    "es": "Claro ◐",
    "en": "Light ◐",
    "eu": "Argia ◐"
  },
  "Oscuro ◑": {
    "es": "Oscuro ◑",
    "en": "Dark ◑",
    "eu": "Iluna ◑"
  },
  "Cesta": {
    "es": "Cesta",
    "en": "Basket",
    "eu": "Saskia"
  },
  "Abrir carrito": {
    "es": "Abrir carrito",
    "en": "Open basket",
    "eu": "Ireki saskia"
  },
  "Cerrar carrito": {
    "es": "Cerrar carrito",
    "en": "Close basket",
    "eu": "Itxi saskia"
  },
  "Cerrar": {
    "es": "Cerrar",
    "en": "Close",
    "eu": "Itxi"
  },
  "Tu carrito": {
    "es": "Tu carrito",
    "en": "Your basket",
    "eu": "Zure saskia"
  },
  "CESTA / DEMO": {
    "es": "CESTA / DEMO",
    "en": "BASKET / DEMO",
    "eu": "SASKIA / DEMO"
  },
  "Simulación de portfolio. Precios ficticios, sin venta ni pago.": {
    "es": "Simulación de portfolio. Precios ficticios, sin venta ni pago.",
    "en": "Portfolio demo. Fictional prices, no sales or payments.",
    "eu": "Portfolioaren demoa. Fikziozko prezioak, salmentarik eta ordainketarik gabe."
  },
  "Total de ejemplo": {
    "es": "Total de ejemplo",
    "en": "Example total",
    "eu": "Adibideko guztizkoa"
  },
  "Vaciar carrito": {
    "es": "Vaciar carrito",
    "en": "Empty basket",
    "eu": "Hustu saskia"
  },
  "Añadir +": {
    "es": "Añadir +",
    "en": "Add +",
    "eu": "Gehitu +"
  },
  "Añadir a la cesta +": {
    "es": "Añadir a la cesta +",
    "en": "Add to basket +",
    "eu": "Gehitu saskira +"
  },
  "Añadido a tu cesta": {
    "es": "Añadido a tu cesta",
    "en": "Added to your basket",
    "eu": "Zure saskira gehituta"
  },
  "artículos": {
    "es": "artículos",
    "en": "items",
    "eu": "artikulu"
  },
  "ud.": {
    "es": "ud.",
    "en": "unit",
    "eu": "unitatea"
  },
  "Restar una unidad": {
    "es": "Restar una unidad",
    "en": "Remove one unit",
    "eu": "Kendu unitate bat"
  },
  "Añadir una unidad": {
    "es": "Añadir una unidad",
    "en": "Add one unit",
    "eu": "Gehitu unitate bat"
  },
  "Cantidad": {
    "es": "Cantidad",
    "en": "Quantity",
    "eu": "Kopurua"
  },
  "Quitar": {
    "es": "Quitar",
    "en": "Remove",
    "eu": "Kendu"
  },
  "Tu cesta está vacía. Añade un diseño desde el catálogo.": {
    "es": "Tu cesta está vacía. Añade un diseño desde el catálogo.",
    "en": "Your basket is empty. Add a design from the catalogue.",
    "eu": "Zure saskia hutsik dago. Gehitu diseinu bat katalogotik."
  },
  "Máximo de 99 unidades por diseño.": {
    "es": "Máximo de 99 unidades por diseño.",
    "en": "Maximum of 99 units per design.",
    "eu": "Gehienez 99 unitate diseinu bakoitzeko."
  },
  "Precio ficticio": {
    "es": "Precio ficticio",
    "en": "Fictional price",
    "eu": "Fikziozko prezioa"
  },
  "Colección de ejemplo": {
    "es": "Colección de ejemplo",
    "en": "Example collection",
    "eu": "Adibideko bilduma"
  },
  "Todas": {
    "es": "Todas",
    "en": "All",
    "eu": "Guztiak"
  },
  "Armadura": {
    "es": "Armadura",
    "en": "Armour",
    "eu": "Armadura"
  },
  "Sigilo": {
    "es": "Sigilo",
    "en": "Stealth",
    "eu": "Isiltasuna"
  },
  "Todos los precios": {
    "es": "Todos los precios",
    "en": "All prices",
    "eu": "Prezio guztiak"
  },
  "Hasta 50 €": {
    "es": "Hasta 50 €",
    "en": "Up to €50",
    "eu": "50 € arte"
  },
  "Hasta 80 €": {
    "es": "Hasta 80 €",
    "en": "Up to €80",
    "eu": "80 € arte"
  },
  "Hasta 100 €": {
    "es": "Hasta 100 €",
    "en": "Up to €100",
    "eu": "100 € arte"
  },
  "Restablecer": {
    "es": "Restablecer",
    "en": "Reset",
    "eu": "Berrezarri"
  },
  "Buscar diseño": {
    "es": "Buscar diseño",
    "en": "Search designs",
    "eu": "Bilatu diseinua"
  },
  "Nombre, arma o colección…": {
    "es": "Nombre, arma o colección…",
    "en": "Name, weapon or collection…",
    "eu": "Izena, arma edo bilduma…"
  },
  "diseños de ejemplo": {
    "es": "diseños de ejemplo",
    "en": "example designs",
    "eu": "adibideko diseinu"
  },
  "4 diseños de ejemplo": {
    "es": "4 diseños de ejemplo",
    "en": "4 example designs",
    "eu": "4 adibideko diseinu"
  },
  "No hay diseños con estos filtros. Prueba otra combinación.": {
    "es": "No hay diseños con estos filtros. Prueba otra combinación.",
    "en": "No designs match these filters. Try another combination.",
    "eu": "Ez dago iragazki hauekin bat datorren diseinurik. Saiatu beste konbinazio batekin."
  },
  "CATÁLOGO": {
    "es": "CATÁLOGO",
    "en": "CATALOGUE",
    "eu": "KATALOGOA"
  },
  "CATÁLOGO / DEMOSTRACIÓN": {
    "es": "CATÁLOGO / DEMOSTRACIÓN",
    "en": "CATALOGUE / DEMO",
    "eu": "KATALOGOA / DEMOA"
  },
  "COLECCIONES": {
    "es": "COLECCIONES",
    "en": "COLLECTIONS",
    "eu": "BILDUMAK"
  },
  "COLLECTION": {
    "es": "COLLECTION",
    "en": "COLLECTION",
    "eu": "BILDUMA"
  },
  "COLLECTIONS": {
    "es": "COLLECTIONS",
    "en": "COLLECTIONS",
    "eu": "BILDUMAK"
  },
  "NOTICIAS": {
    "es": "NOTICIAS",
    "en": "NEWS",
    "eu": "BERRIAK"
  },
  "UPDATES": {
    "es": "UPDATES",
    "en": "UPDATES",
    "eu": "BERRIAK"
  },
  "04 DISEÑOS": {
    "es": "04 DISEÑOS",
    "en": "04 DESIGNS",
    "eu": "04 DISEINU"
  },
  "04 DISEÑOS / SIN COLOR": {
    "es": "04 DISEÑOS / SIN COLOR",
    "en": "04 DESIGNS / UNPAINTED",
    "eu": "04 DISEINU / MARGOTU GABE"
  },
  "ARMADURA / DEMO": {
    "es": "ARMADURA / DEMO",
    "en": "ARMOUR / DEMO",
    "eu": "ARMADURA / DEMO"
  },
  "SIGILO / DEMO": {
    "es": "SIGILO / DEMO",
    "en": "STEALTH / DEMO",
    "eu": "ISILTASUNA / DEMO"
  },
  "Samurái": {
    "es": "Samurái",
    "en": "Samurai",
    "eu": "Samuraia"
  },
  "Oni con maza": {
    "es": "Oni con maza",
    "en": "Oni with mace",
    "eu": "Mazodun onia"
  },
  "Ninja": {
    "es": "Ninja",
    "en": "Ninja",
    "eu": "Ninja"
  },
  "Señor de guerra": {
    "es": "Señor de guerra",
    "en": "Warlord",
    "eu": "Gerra-jauna"
  },
  "Dos espadas": {
    "es": "Dos espadas",
    "en": "Two swords",
    "eu": "Bi ezpata"
  },
  "Armadura pesada": {
    "es": "Armadura pesada",
    "en": "Heavy armour",
    "eu": "Armadura astuna"
  },
  "Katana y capa": {
    "es": "Katana y capa",
    "en": "Katana and cloak",
    "eu": "Katana eta kapa"
  },
  "Arma de asta": {
    "es": "Arma de asta",
    "en": "Polearm",
    "eu": "Arma luzea"
  },
  "Diseño conceptual con dos espadas.": {
    "es": "Diseño conceptual con dos espadas.",
    "en": "Concept design with two swords.",
    "eu": "Bi ezpata dituen diseinu kontzeptuala."
  },
  "Diseño conceptual con armadura pesada y maza.": {
    "es": "Diseño conceptual con armadura pesada y maza.",
    "en": "Concept design with heavy armour and a mace.",
    "eu": "Armadura astuna eta mazoa dituen diseinu kontzeptuala."
  },
  "Diseño conceptual con katana y capa.": {
    "es": "Diseño conceptual con katana y capa.",
    "en": "Concept design with a katana and cloak.",
    "eu": "Katana eta kapa dituen diseinu kontzeptuala."
  },
  "Diseño conceptual con arma de asta.": {
    "es": "Diseño conceptual con arma de asta.",
    "en": "Concept design with a polearm.",
    "eu": "Arma luzea duen diseinu kontzeptuala."
  },
  "Explora los diseños oni. Prueba los filtros y crea tu cesta de ejemplo.": {
    "es": "Explora los diseños oni. Prueba los filtros y crea tu cesta de ejemplo.",
    "en": "Explore the oni designs. Try the filters and build your example basket.",
    "eu": "Arakatu oni diseinuak. Probatu iragazkiak eta sortu zure adibideko saskia."
  },
  "Dieciocho diseños oni para probar tu cesta. Una tienda de ejemplo, sin compras reales.": {
    "es": "Dieciocho diseños oni para probar tu cesta. Una tienda de ejemplo, sin compras reales.",
    "en": "Eighteen oni designs to try your basket. A demo shop, no real purchases.",
    "eu": "Hemezortzi oni diseinu zure saskia probatzeko. Adibideko denda, benetako erosketarik gabe."
  },
  "Diseños conceptuales generados con IA. Precios y colecciones de ejemplo, sin disponibilidad comercial.": {
    "es": "Diseños conceptuales generados con IA. Precios y colecciones de ejemplo, sin disponibilidad comercial.",
    "en": "AI-generated concept designs. Example prices and collections, not commercially available.",
    "eu": "AA bidez sortutako diseinu kontzeptualak. Adibideko prezioak eta bildumak, merkaturatu gabe."
  },
  "Diseño conceptual. Precio ficticio, sin venta real.": {
    "es": "Diseño conceptual. Precio ficticio, sin venta real.",
    "en": "Concept design. Fictional price, no real sales.",
    "eu": "Diseinu kontzeptuala. Fikziozko prezioa, benetako salmentarik gabe."
  },
  "DISEÑO CONCEPTUAL / DEMO": {
    "es": "DISEÑO CONCEPTUAL / DEMO",
    "en": "CONCEPT DESIGN / DEMO",
    "eu": "DISEINU KONTZEPTUALA / DEMO"
  },
  "Diseño conceptual / demo": {
    "es": "Diseño conceptual / demo",
    "en": "Concept design / demo",
    "eu": "Diseinu kontzeptuala / demo"
  },
  "Nombre pendiente": {
    "es": "Nombre pendiente",
    "en": "Name pending",
    "eu": "Izena zehaztu gabe"
  },
  "Noticia pendiente": {
    "es": "Noticia pendiente",
    "en": "News pending",
    "eu": "Berria zehaztu gabe"
  },
  "IMAGEN PENDIENTE": {
    "es": "IMAGEN PENDIENTE",
    "en": "IMAGE PENDING",
    "eu": "IRUDIA ZEHAZTU GABE"
  },
  "Este espacio queda preparado para presentar las futuras colecciones de Kuro Labs.": {
    "es": "Este espacio queda preparado para presentar las futuras colecciones de Kuro Labs.",
    "en": "This space is ready for future Kuro Labs collections.",
    "eu": "Gune hau Kuro Labs-en etorkizuneko bildumak aurkezteko prestatuta dago."
  },
  "Espacio preparado para futuras noticias y novedades de Kuro Labs.": {
    "es": "Espacio preparado para futuras noticias y novedades de Kuro Labs.",
    "en": "Space ready for future Kuro Labs news and updates.",
    "eu": "Kuro Labs-en etorkizuneko berri eta nobedadeetarako prestatutako gunea."
  },
  "FUTURE": {
    "es": "FUTURE",
    "en": "FUTURE",
    "eu": "ETORKIZUNEKO"
  },
  "DEMONS": {
    "es": "DEMONS",
    "en": "DEMONS",
    "eu": "DEABRUAK"
  },
  "Figuras 3D inspiradas en la estética oni japonesa, reinterpretada desde una visión futurista y tecnológica.": {
    "es": "Figuras 3D inspiradas en la estética oni japonesa, reinterpretada desde una visión futurista y tecnológica.",
    "en": "3D figures inspired by Japanese oni aesthetics, reimagined through a futuristic, technological vision.",
    "eu": "Japoniako oni estetikan inspiratutako 3D figurak, ikuspegi futurista eta teknologikotik berrinterpretatuak."
  },
  "Ver catálogo": {
    "es": "Ver catálogo",
    "en": "View catalogue",
    "eu": "Ikusi katalogoa"
  },
  "Ver catálogo ↗": {
    "es": "Ver catálogo ↗",
    "en": "View catalogue ↗",
    "eu": "Ikusi katalogoa ↗"
  },
  "VER CATÁLOGO ↗": {
    "es": "VER CATÁLOGO ↗",
    "en": "VIEW CATALOGUE ↗",
    "eu": "IKUSI KATALOGOA ↗"
  },
  "Ver galería oni": {
    "es": "Ver galería oni",
    "en": "View oni gallery",
    "eu": "Ikusi oni galeria"
  },
  "Espacio reservado para imagen principal": {
    "es": "Espacio reservado para imagen principal",
    "en": "Space reserved for the main image",
    "eu": "Irudi nagusirako gordetako gunea"
  },
  "IMAGEN PRINCIPAL": {
    "es": "IMAGEN PRINCIPAL",
    "en": "MAIN IMAGE",
    "eu": "IRUDI NAGUSIA"
  },
  "ESPACIO RESERVADO": {
    "es": "ESPACIO RESERVADO",
    "en": "RESERVED SPACE",
    "eu": "GORDETAKO GUNEA"
  },
  "UNDEFINED": {
    "es": "UNDEFINED",
    "en": "UNDEFINED",
    "eu": "ZEHAZTU GABE"
  },
  "SCROLL": {
    "es": "SCROLL",
    "en": "SCROLL",
    "eu": "JARRAITU BEHERA"
  },
  "CONCEPT SERIES / 001": {
    "es": "CONCEPT SERIES / 001",
    "en": "CONCEPT SERIES / 001",
    "eu": "SERIE KONTZEPTUALA / 001"
  },
  "ONI / RESINA": {
    "es": "ONI / RESINA",
    "en": "ONI / RESIN",
    "eu": "ONI / ERRETXINA"
  },
  "Cuatro diseños. Cuatro miradas. Una misma esencia oni.": {
    "es": "Cuatro diseños. Cuatro miradas. Una misma esencia oni.",
    "en": "Four designs. Four perspectives. One oni spirit.",
    "eu": "Lau diseinu. Lau begirada. Oni esentzia bera."
  },
  "GALERÍA CONCEPTUAL": {
    "es": "GALERÍA CONCEPTUAL",
    "en": "CONCEPT GALLERY",
    "eu": "GALERIA KONTZEPTUALA"
  },
  "Imágenes conceptuales generadas con IA. No son modelos 3D ni archivos STL imprimibles; las vistas son orientativas, no planos ortográficos. Sin precio ni disponibilidad comercial.": {
    "es": "Imágenes conceptuales generadas con IA. No son modelos 3D ni archivos STL imprimibles; las vistas son orientativas, no planos ortográficos. Sin precio ni disponibilidad comercial.",
    "en": "AI-generated concept images. Not 3D models or printable STL files; views are illustrative, not orthographic plans. No commercial pricing or availability.",
    "eu": "AA bidez sortutako irudi kontzeptualak. Ez dira 3D ereduak, ezta inprimatzeko STL fitxategiak ere; bistak orientagarriak dira, ez plano ortografikoak. Prezio eta eskuragarritasun komertzialik gabe."
  },
  "THE LAB": {
    "es": "THE LAB",
    "en": "THE LAB",
    "eu": "LABORATEGIA"
  },
  "ENTRE LA": {
    "es": "ENTRE LA",
    "en": "BETWEEN",
    "eu": "ARTEAN:"
  },
  "LEYENDA": {
    "es": "LEYENDA",
    "en": "LEGEND",
    "eu": "KONDAIRA"
  },
  "Y EL FUTURO.": {
    "es": "Y EL FUTURO.",
    "en": "AND THE FUTURE.",
    "eu": "ETA ETORKIZUNA."
  },
  "Kuro Labs nace como un espacio visual preparado para explorar la figura, la tecnología y la estética oni desde una perspectiva contemporánea.": {
    "es": "Kuro Labs nace como un espacio visual preparado para explorar la figura, la tecnología y la estética oni desde una perspectiva contemporánea.",
    "en": "Kuro Labs is a visual space for exploring figures, technology and oni aesthetics from a contemporary perspective.",
    "eu": "Kuro Labs figurak, teknologia eta oni estetika ikuspegi garaikidetik aztertzeko gune bisuala da."
  },
  "Este espacio queda preparado para incorporar posteriormente la historia y el manifiesto oficial de la marca.": {
    "es": "Este espacio queda preparado para incorporar posteriormente la historia y el manifiesto oficial de la marca.",
    "en": "This space is ready for the brand's future official story and manifesto.",
    "eu": "Gune hau markaren historia eta manifestu ofiziala aurrerago gehitzeko prestatuta dago."
  },
  "Descubrir Kuro Labs": {
    "es": "Descubrir Kuro Labs",
    "en": "Discover Kuro Labs",
    "eu": "Ezagutu Kuro Labs"
  },
  "OBJECT DATA": {
    "es": "OBJECT DATA",
    "en": "OBJECT DATA",
    "eu": "OBJEKTUAREN DATUAK"
  },
  "CONCEPTO": {
    "es": "CONCEPTO",
    "en": "CONCEPT",
    "eu": "KONTZEPTUA"
  },
  "HISTORIA / FILOSOFÍA": {
    "es": "HISTORIA / FILOSOFÍA",
    "en": "STORY / PHILOSOPHY",
    "eu": "HISTORIA / FILOSOFIA"
  },
  "Espacio reservado para incorporar la información oficial sobre Kuro Labs, su concepto, proceso y filosofía.": {
    "es": "Espacio reservado para incorporar la información oficial sobre Kuro Labs, su concepto, proceso y filosofía.",
    "en": "Space reserved for official information about Kuro Labs, its concept, process and philosophy.",
    "eu": "Kuro Labs-en informazio ofiziala, kontzeptua, prozesua eta filosofia gehitzeko gordetako gunea."
  },
  "HABLEMOS / CONTACTO": {
    "es": "HABLEMOS / CONTACTO",
    "en": "LET'S TALK / CONTACT",
    "eu": "HITZ EGIN DEZAGUN / KONTAKTUA"
  },
  "ENTRA EN": {
    "es": "ENTRA EN",
    "en": "ENTER",
    "eu": "SARTU"
  },
  "EL LAB.": {
    "es": "EL LAB.",
    "en": "THE LAB.",
    "eu": "LABORATEGIAN."
  },
  "Formulario de demostración. Comprueba los campos, pero no envía ni guarda tus datos.": {
    "es": "Formulario de demostración. Comprueba los campos, pero no envía ni guarda tus datos.",
    "en": "Demo form. Checks the fields but does not send or save your data.",
    "eu": "Demo inprimakia. Eremuak egiaztatzen ditu, baina ez ditu zure datuak bidaltzen edo gordetzen."
  },
  "Todos los campos son obligatorios.": {
    "es": "Todos los campos son obligatorios.",
    "en": "All fields are required.",
    "eu": "Eremu guztiak nahitaezkoak dira."
  },
  "Nombre": {
    "es": "Nombre",
    "en": "Name",
    "eu": "Izena"
  },
  "Email": {
    "es": "Email",
    "en": "Email",
    "eu": "Posta elektronikoa"
  },
  "Mensaje": {
    "es": "Mensaje",
    "en": "Message",
    "eu": "Mezua"
  },
  "Entre 10 y 2000 caracteres.": {
    "es": "Entre 10 y 2000 caracteres.",
    "en": "Between 10 and 2000 characters.",
    "eu": "10 eta 2000 karaktere artean."
  },
  "Validar mensaje ↗": {
    "es": "Validar mensaje ↗",
    "en": "Validate message ↗",
    "eu": "Egiaztatu mezua ↗"
  },
  "Este campo es obligatorio.": {
    "es": "Este campo es obligatorio.",
    "en": "This field is required.",
    "eu": "Eremu hau nahitaezkoa da."
  },
  "Escribe al menos 2 caracteres.": {
    "es": "Escribe al menos 2 caracteres.",
    "en": "Enter at least 2 characters.",
    "eu": "Idatzi gutxienez 2 karaktere."
  },
  "Escribe un email válido, por ejemplo nombre@dominio.com.": {
    "es": "Escribe un email válido, por ejemplo nombre@dominio.com.",
    "en": "Enter a valid email, for example name@domain.com.",
    "eu": "Idatzi baliozko posta elektroniko bat, adibidez izena@domeinua.com."
  },
  "Escribe un mensaje de al menos 10 caracteres.": {
    "es": "Escribe un mensaje de al menos 10 caracteres.",
    "en": "Enter a message of at least 10 characters.",
    "eu": "Idatzi gutxienez 10 karaktereko mezua."
  },
  "Revisa los campos marcados antes de continuar.": {
    "es": "Revisa los campos marcados antes de continuar.",
    "en": "Check the marked fields before continuing.",
    "eu": "Egiaztatu markatutako eremuak jarraitu aurretik."
  },
  "Campos correctos. Esta demo no envía el mensaje: falta conectar un servicio de envío.": {
    "es": "Campos correctos. Esta demo no envía el mensaje: falta conectar un servicio de envío.",
    "en": "Fields are valid. This demo does not send the message: a sending service is not connected.",
    "eu": "Eremuak zuzenak dira. Demo honek ez du mezua bidaltzen: bidalketa-zerbitzua konektatu behar da."
  },
  "FUTURE OBJECTS / ONI AESTHETICS": {
    "es": "FUTURE OBJECTS / ONI AESTHETICS",
    "en": "FUTURE OBJECTS / ONI AESTHETICS",
    "eu": "ETORKIZUNEKO OBJEKTUAK / ONI ESTETIKA"
  },
  "ALL RIGHTS RESERVED": {
    "es": "ALL RIGHTS RESERVED",
    "en": "ALL RIGHTS RESERVED",
    "eu": "ESKUBIDE GUZTIAK ERRESERBATUTA"
  },
  "← Volver al catálogo": {
    "es": "← Volver al catálogo",
    "en": "← Back to catalogue",
    "eu": "← Itzuli katalogora"
  },
  "Ampliar imagen": {
    "es": "Ampliar imagen",
    "en": "Enlarge image",
    "eu": "Handitu irudia"
  },
  "Pulsa la imagen para ampliar las cuatro vistas.": {
    "es": "Pulsa la imagen para ampliar las cuatro vistas.",
    "en": "Click the image to enlarge the four views.",
    "eu": "Sakatu irudia lau bistak handitzeko."
  },
  "Concepto": {
    "es": "Concepto",
    "en": "Concept",
    "eu": "Kontzeptua"
  },
  "Oni futurista": {
    "es": "Oni futurista",
    "en": "Futuristic oni",
    "eu": "Oni futurista"
  },
  "Acabado visual": {
    "es": "Acabado visual",
    "en": "Visual finish",
    "eu": "Ikusizko akabera"
  },
  "Resina gris sin pintar": {
    "es": "Resina gris sin pintar",
    "en": "Unpainted grey resin",
    "eu": "Margotu gabeko erretxina grisa"
  },
  "Rasgo principal": {
    "es": "Rasgo principal",
    "en": "Main feature",
    "eu": "Ezaugarri nagusia"
  },
  "Estado": {
    "es": "Estado",
    "en": "Status",
    "eu": "Egoera"
  },
  "Más diseños oni": {
    "es": "Más diseños oni",
    "en": "More oni designs",
    "eu": "Oni diseinu gehiago"
  },
  "Una reinterpretación futurista del samurái oni. Sus dos espadas y su armadura definen una silueta preparada para una colección conceptual.": {
    "es": "Una reinterpretación futurista del samurái oni. Sus dos espadas y su armadura definen una silueta preparada para una colección conceptual.",
    "en": "A futuristic take on the oni samurai. Two swords and armour define a silhouette for a concept collection.",
    "eu": "Oni samuraiaren berrinterpretazio futurista. Bi ezpatek eta armadurak bilduma kontzeptual baterako silueta definitzen dute."
  },
  "Un oni de armadura pesada y maza. El volumen de la armadura y la fuerza de su postura exploran el lado más contundente de esta serie conceptual.": {
    "es": "Un oni de armadura pesada y maza. El volumen de la armadura y la fuerza de su postura exploran el lado más contundente de esta serie conceptual.",
    "en": "An oni with heavy armour and a mace. The armour's volume and strong stance explore the powerful side of this concept series.",
    "eu": "Armadura astuna eta mazoa dituen onia. Armaduraren bolumenak eta jarrera sendoak serie kontzeptual honen alderdi indartsua aztertzen dute."
  },
  "Un ninja oni con katana y capa. Una postura baja y una silueta contenida exploran el sigilo dentro de esta serie conceptual.": {
    "es": "Un ninja oni con katana y capa. Una postura baja y una silueta contenida exploran el sigilo dentro de esta serie conceptual.",
    "en": "An oni ninja with a katana and cloak. A low stance and compact silhouette explore stealth in this concept series.",
    "eu": "Katana eta kapa dituen oni ninja. Jarrera baxuak eta silueta trinkoak isiltasuna aztertzen dute serie kontzeptual honetan."
  },
  "Un señor de guerra oni con arma de asta. Su presencia y su armadura exploran una figura de mando dentro de esta serie conceptual.": {
    "es": "Un señor de guerra oni con arma de asta. Su presencia y su armadura exploran una figura de mando dentro de esta serie conceptual.",
    "en": "An oni warlord with a polearm. Its presence and armour explore a commanding figure in this concept series.",
    "eu": "Arma luzea duen oni gerra-jauna. Haren presentziak eta armadurak aginte-figura bat aztertzen dute serie kontzeptual honetan."
  },
  "Te has salido del lab.": {
    "es": "Te has salido del lab.",
    "en": "You've left the lab.",
    "eu": "Laborategitik atera zara."
  },
  "Esta página no existe o ha cambiado de lugar. Los onis siguen en el catálogo.": {
    "es": "Esta página no existe o ha cambiado de lugar. Los onis siguen en el catálogo.",
    "en": "This page does not exist or has moved. The onis are still in the catalogue.",
    "eu": "Orri hau ez dago edo lekuz aldatu da. Oniek katalogoan jarraitzen dute."
  },
  "Volver al inicio": {
    "es": "Volver al inicio",
    "en": "Back to home",
    "eu": "Itzuli hasierara"
  },
  "Portfolio de demostración. Sin venta real.": {
    "es": "Portfolio de demostración. Sin venta real.",
    "en": "Demo portfolio. No real sales.",
    "eu": "Demo portfolioa. Benetako salmentarik gabe."
  },
  "Vista ampliada": {
    "es": "Vista ampliada",
    "en": "Enlarged view",
    "eu": "Bista handitua"
  },
  "Cerrar imagen": {
    "es": "Cerrar imagen",
    "en": "Close image",
    "eu": "Itxi irudia"
  },
  "Imagen conceptual generada con IA. Vistas orientativas, no planos para impresión 3D.": {
    "es": "Imagen conceptual generada con IA. Vistas orientativas, no planos para impresión 3D.",
    "en": "AI-generated concept image. Illustrative views, not plans for 3D printing.",
    "eu": "AA bidez sortutako irudi kontzeptuala. Bista orientagarriak, ez 3D inprimaketarako planoak."
  },
  "COLLECTION / 01": {
    "es": "COLLECTION / 01",
    "en": "COLLECTION / 01",
    "eu": "BILDUMA / 01"
  },
  "NEWS / 01": {
    "es": "NEWS / 01",
    "en": "NEWS / 01",
    "eu": "BERRIA / 01"
  },
  "COLLECTION / 02": {
    "es": "COLLECTION / 02",
    "en": "COLLECTION / 02",
    "eu": "BILDUMA / 02"
  },
  "NEWS / 02": {
    "es": "NEWS / 02",
    "en": "NEWS / 02",
    "eu": "BERRIA / 02"
  },
  "COLLECTION / 03": {
    "es": "COLLECTION / 03",
    "en": "COLLECTION / 03",
    "eu": "BILDUMA / 03"
  },
  "NEWS / 03": {
    "es": "NEWS / 03",
    "en": "NEWS / 03",
    "eu": "BERRIA / 03"
  },
  "Ver ficha de Samurái": {
    "es": "Ver ficha de Samurái",
    "en": "View Samurai details",
    "eu": "Samuraia: ikusi fitxa"
  },
  "Añadir Samurái al carrito": {
    "es": "Añadir Samurái al carrito",
    "en": "Add Samurai to basket",
    "eu": "Samuraia: gehitu saskira"
  },
  "Ampliar vistas de Samurái": {
    "es": "Ampliar vistas de Samurái",
    "en": "Enlarge Samurai views",
    "eu": "Samuraia: handitu bistak"
  },
  "Diseño conceptual de Samurái en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Samurái en resina gris, visto desde cuatro ángulos",
    "en": "Samurai: grey-resin concept design, seen from four angles",
    "eu": "Samuraia: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Samurái: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Samurái: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Samurai: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Samuraia: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Samurái: vistas conceptuales en resina gris": {
    "es": "Samurái: vistas conceptuales en resina gris",
    "en": "Samurai: grey-resin concept views",
    "eu": "Samuraia: erretxina griseko bista kontzeptualak"
  },
  "Samurái ↗": {
    "es": "Samurái ↗",
    "en": "Samurai ↗",
    "eu": "Samuraia ↗"
  },
  "Ver ficha de Oni con maza": {
    "es": "Ver ficha de Oni con maza",
    "en": "View Oni with mace details",
    "eu": "Mazodun onia: ikusi fitxa"
  },
  "Añadir Oni con maza al carrito": {
    "es": "Añadir Oni con maza al carrito",
    "en": "Add Oni with mace to basket",
    "eu": "Mazodun onia: gehitu saskira"
  },
  "Ampliar vistas de Oni con maza": {
    "es": "Ampliar vistas de Oni con maza",
    "en": "Enlarge Oni with mace views",
    "eu": "Mazodun onia: handitu bistak"
  },
  "Diseño conceptual de Oni con maza en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Oni con maza en resina gris, visto desde cuatro ángulos",
    "en": "Oni with mace: grey-resin concept design, seen from four angles",
    "eu": "Mazodun onia: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Oni con maza: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Oni con maza: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Oni with mace: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Mazodun onia: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Oni con maza: vistas conceptuales en resina gris": {
    "es": "Oni con maza: vistas conceptuales en resina gris",
    "en": "Oni with mace: grey-resin concept views",
    "eu": "Mazodun onia: erretxina griseko bista kontzeptualak"
  },
  "Oni con maza ↗": {
    "es": "Oni con maza ↗",
    "en": "Oni with mace ↗",
    "eu": "Mazodun onia ↗"
  },
  "Ver ficha de Ninja": {
    "es": "Ver ficha de Ninja",
    "en": "View Ninja details",
    "eu": "Ninja: ikusi fitxa"
  },
  "Añadir Ninja al carrito": {
    "es": "Añadir Ninja al carrito",
    "en": "Add Ninja to basket",
    "eu": "Ninja: gehitu saskira"
  },
  "Ampliar vistas de Ninja": {
    "es": "Ampliar vistas de Ninja",
    "en": "Enlarge Ninja views",
    "eu": "Ninja: handitu bistak"
  },
  "Diseño conceptual de Ninja en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Ninja en resina gris, visto desde cuatro ángulos",
    "en": "Ninja: grey-resin concept design, seen from four angles",
    "eu": "Ninja: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Ninja: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Ninja: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Ninja: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Ninja: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Ninja: vistas conceptuales en resina gris": {
    "es": "Ninja: vistas conceptuales en resina gris",
    "en": "Ninja: grey-resin concept views",
    "eu": "Ninja: erretxina griseko bista kontzeptualak"
  },
  "Ninja ↗": {
    "es": "Ninja ↗",
    "en": "Ninja ↗",
    "eu": "Ninja ↗"
  },
  "Ver ficha de Señor de guerra": {
    "es": "Ver ficha de Señor de guerra",
    "en": "View Warlord details",
    "eu": "Gerra-jauna: ikusi fitxa"
  },
  "Añadir Señor de guerra al carrito": {
    "es": "Añadir Señor de guerra al carrito",
    "en": "Add Warlord to basket",
    "eu": "Gerra-jauna: gehitu saskira"
  },
  "Ampliar vistas de Señor de guerra": {
    "es": "Ampliar vistas de Señor de guerra",
    "en": "Enlarge Warlord views",
    "eu": "Gerra-jauna: handitu bistak"
  },
  "Diseño conceptual de Señor de guerra en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Señor de guerra en resina gris, visto desde cuatro ángulos",
    "en": "Warlord: grey-resin concept design, seen from four angles",
    "eu": "Gerra-jauna: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Señor de guerra: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Señor de guerra: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Warlord: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Gerra-jauna: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Señor de guerra: vistas conceptuales en resina gris": {
    "es": "Señor de guerra: vistas conceptuales en resina gris",
    "en": "Warlord: grey-resin concept views",
    "eu": "Gerra-jauna: erretxina griseko bista kontzeptualak"
  },
  "Señor de guerra ↗": {
    "es": "Señor de guerra ↗",
    "en": "Warlord ↗",
    "eu": "Gerra-jauna ↗"
  },
  "Kuro Labs — Catálogo": {
    "es": "Kuro Labs — Catálogo",
    "en": "Kuro Labs - Catalogue",
    "eu": "Kuro Labs - Katalogoa"
  },
  "Kuro Labs — Colecciones": {
    "es": "Kuro Labs — Colecciones",
    "en": "Kuro Labs - Collections",
    "eu": "Kuro Labs - Bildumak"
  },
  "Kuro Labs — La marca": {
    "es": "Kuro Labs — La marca",
    "en": "Kuro Labs - The brand",
    "eu": "Kuro Labs - Marka"
  },
  "Kuro Labs — Noticias": {
    "es": "Kuro Labs — Noticias",
    "en": "Kuro Labs - News",
    "eu": "Kuro Labs - Berriak"
  },
  "Kuro Labs — Oni Future Objects": {
    "es": "Kuro Labs — Oni Future Objects",
    "en": "Kuro Labs - Oni Future Objects",
    "eu": "Kuro Labs - Oni etorkizuneko objektuak"
  },
  "Kuro Labs - Samurái": {
    "es": "Kuro Labs - Samurái",
    "en": "Kuro Labs - Samurai",
    "eu": "Kuro Labs - Samuraia"
  },
  "Kuro Labs - Oni con maza": {
    "es": "Kuro Labs - Oni con maza",
    "en": "Kuro Labs - Oni with mace",
    "eu": "Kuro Labs - Mazodun onia"
  },
  "Kuro Labs - Ninja": {
    "es": "Kuro Labs - Ninja",
    "en": "Kuro Labs - Ninja",
    "eu": "Kuro Labs - Ninja"
  },
  "Kuro Labs - Señor de guerra": {
    "es": "Kuro Labs - Señor de guerra",
    "en": "Kuro Labs - Warlord",
    "eu": "Kuro Labs - Gerra-jauna"
  },
  "Abrir carrito, 0 artículos": {
    "es": "Abrir carrito, 0 artículos",
    "en": "Open basket, 0 items",
    "eu": "Ireki saskia, 0 artikulu"
  },
  "Kuro Labs — Figuras 3D de estética oni futurista.": {
    "es": "Kuro Labs - Figuras 3D de estética oni futurista.",
    "en": "Kuro Labs - 3D figures with futuristic oni aesthetics.",
    "eu": "Kuro Labs - Oni estetika futuristako 3D figurak."
  },
  "Cibernética": {
    "es": "Cibernética",
    "en": "Cybernetics",
    "eu": "Zibernetika"
  },
  "CIBERNÉTICA / DEMO": {
    "es": "CIBERNÉTICA / DEMO",
    "en": "CYBERNETICS / DEMO",
    "eu": "ZIBERNETIKA / DEMO"
  },
  "06 DISEÑOS": {
    "es": "06 DISEÑOS",
    "en": "06 DESIGNS",
    "eu": "06 DISEINU"
  },
  "06 DISEÑOS / SIN COLOR": {
    "es": "06 DISEÑOS / SIN COLOR",
    "en": "06 DESIGNS / UNPAINTED",
    "eu": "06 DISEINU / MARGOTU GABE"
  },
  "6 diseños de ejemplo": {
    "es": "6 diseños de ejemplo",
    "en": "6 example designs",
    "eu": "6 adibideko diseinu"
  },
  "Ronin del templo": {
    "es": "Ronin del templo",
    "en": "Temple ronin",
    "eu": "Tenpluko ronina"
  },
  "Ronin del templo ↗": {
    "es": "Ronin del templo ↗",
    "en": "Temple ronin ↗",
    "eu": "Tenpluko ronina ↗"
  },
  "Kuro Labs - Ronin del templo": {
    "es": "Kuro Labs - Ronin del templo",
    "en": "Kuro Labs - Temple ronin",
    "eu": "Kuro Labs - Tenpluko ronina"
  },
  "Un ronin oni con katana, capa de paneles blindados y articulaciones mecánicas. El módulo del pecho y los cables de la espalda refuerzan su estética futurista.": {
    "es": "Un ronin oni con katana, capa de paneles blindados y articulaciones mecánicas. El módulo del pecho y los cables de la espalda refuerzan su estética futurista.",
    "en": "An oni ronin with a katana, an armored panel cape and mechanical joints. The chest module and back cables give it a futuristic look.",
    "eu": "Katana, panel blindatuzko kapa eta artikulazio mekanikoak dituen oni ronina. Bularreko moduluak eta bizkarreko kableek itxura futurista ematen diote."
  },
  "Diseño conceptual con katana, capa blindada y articulaciones mecánicas.": {
    "es": "Diseño conceptual con katana, capa blindada y articulaciones mecánicas.",
    "en": "Concept design with a katana, armored cape and mechanical joints.",
    "eu": "Katana, kapa blindatua eta artikulazio mekanikoak dituen diseinu kontzeptuala."
  },
  "Katana y capa blindada": {
    "es": "Katana y capa blindada",
    "en": "Katana and armored cape",
    "eu": "Katana eta kapa blindatua"
  },
  "Ver ficha de Ronin del templo": {
    "es": "Ver ficha de Ronin del templo",
    "en": "View Temple ronin details",
    "eu": "Tenpluko ronina: ikusi fitxa"
  },
  "Añadir Ronin del templo al carrito": {
    "es": "Añadir Ronin del templo al carrito",
    "en": "Add Temple ronin to basket",
    "eu": "Tenpluko ronina: gehitu saskira"
  },
  "Ampliar vistas de Ronin del templo": {
    "es": "Ampliar vistas de Ronin del templo",
    "en": "Enlarge Temple ronin views",
    "eu": "Tenpluko ronina: handitu bistak"
  },
  "Diseño conceptual de Ronin del templo en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Ronin del templo en resina gris, visto desde cuatro ángulos",
    "en": "Temple ronin: grey-resin concept design, seen from four angles",
    "eu": "Tenpluko ronina: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Ronin del templo: vistas conceptuales en resina gris": {
    "es": "Ronin del templo: vistas conceptuales en resina gris",
    "en": "Temple ronin: grey-resin concept views",
    "eu": "Tenpluko ronina: erretxina griseko bista kontzeptualak"
  },
  "Ronin del templo: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Ronin del templo: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Temple ronin: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Tenpluko ronina: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Oni salvaje": {
    "es": "Oni salvaje",
    "en": "Savage oni",
    "eu": "Oni basatia"
  },
  "Oni salvaje ↗": {
    "es": "Oni salvaje ↗",
    "en": "Savage oni ↗",
    "eu": "Oni basatia ↗"
  },
  "Kuro Labs - Oni salvaje": {
    "es": "Kuro Labs - Oni salvaje",
    "en": "Kuro Labs - Savage oni",
    "eu": "Kuro Labs - Oni basatia"
  },
  "Un oni bestial sin arma, con melena, garras y torso musculoso. Su exoesqueleto dorsal, los guanteletes mecánicos y los paneles de las piernas combinan fuerza orgánica y tecnología.": {
    "es": "Un oni bestial sin arma, con melena, garras y torso musculoso. Su exoesqueleto dorsal, los guanteletes mecánicos y los paneles de las piernas combinan fuerza orgánica y tecnología.",
    "en": "A weaponless bestial oni with a mane, claws and a muscular torso. Its back exoskeleton, mechanical gauntlets and leg panels combine organic strength with technology.",
    "eu": "Armarik gabeko oni basatia, ile luzea, atzaparrak eta enbor gihartsua dituena. Bizkarreko exoeskeletoak, eskularru mekanikoek eta hanken panelek indar organikoa eta teknologia uztartzen dituzte."
  },
  "Diseño conceptual con garras, exoesqueleto y guanteletes mecánicos.": {
    "es": "Diseño conceptual con garras, exoesqueleto y guanteletes mecánicos.",
    "en": "Concept design with claws, an exoskeleton and mechanical gauntlets.",
    "eu": "Atzaparrak, exoeskeletoa eta eskularru mekanikoak dituen diseinu kontzeptuala."
  },
  "Garras y exoesqueleto": {
    "es": "Garras y exoesqueleto",
    "en": "Claws and exoskeleton",
    "eu": "Atzaparrak eta exoeskeletoa"
  },
  "Ver ficha de Oni salvaje": {
    "es": "Ver ficha de Oni salvaje",
    "en": "View Savage oni details",
    "eu": "Oni basatia: ikusi fitxa"
  },
  "Añadir Oni salvaje al carrito": {
    "es": "Añadir Oni salvaje al carrito",
    "en": "Add Savage oni to basket",
    "eu": "Oni basatia: gehitu saskira"
  },
  "Ampliar vistas de Oni salvaje": {
    "es": "Ampliar vistas de Oni salvaje",
    "en": "Enlarge Savage oni views",
    "eu": "Oni basatia: handitu bistak"
  },
  "Diseño conceptual de Oni salvaje en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Oni salvaje en resina gris, visto desde cuatro ángulos",
    "en": "Savage oni: grey-resin concept design, seen from four angles",
    "eu": "Oni basatia: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Oni salvaje: vistas conceptuales en resina gris": {
    "es": "Oni salvaje: vistas conceptuales en resina gris",
    "en": "Savage oni: grey-resin concept views",
    "eu": "Oni basatia: erretxina griseko bista kontzeptualak"
  },
  "Oni salvaje: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Oni salvaje: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Savage oni: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Oni basatia: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "Sombra del torii": {
    "es": "Sombra del torii",
    "en": "Torii shadow",
    "eu": "Toriiaren itzala"
  },
  "Sombra del torii ↗": {
    "es": "Sombra del torii ↗",
    "en": "Torii shadow ↗",
    "eu": "Toriiaren itzala ↗"
  },
  "Kuro Labs - Sombra del torii": {
    "es": "Kuro Labs - Sombra del torii",
    "en": "Kuro Labs - Torii shadow",
    "eu": "Kuro Labs - Toriiaren itzala"
  },
  "Un oni sigiloso de pie, con capucha, capa y dos cuchillos cortos. Las placas ligeras y la base de ruinas completan su silueta conceptual.": {
    "es": "Un oni sigiloso de pie, con capucha, capa y dos cuchillos cortos. Las placas ligeras y la base de ruinas completan su silueta conceptual.",
    "en": "A standing stealth oni with a hood, cape and two short blades. Light armor plates and a ruined stone base complete its concept silhouette.",
    "eu": "Zutik dagoen oni isila, kaputxa, kapa eta bi aizto labur dituena. Armadura arineko plakek eta hondakinezko oinarriak haren silueta kontzeptuala osatzen dute."
  },
  "Diseño conceptual con capucha y dos cuchillos cortos.": {
    "es": "Diseño conceptual con capucha y dos cuchillos cortos.",
    "en": "Concept design with a hood and two short blades.",
    "eu": "Kaputxa eta bi aizto labur dituen diseinu kontzeptuala."
  },
  "Capucha y dos cuchillos": {
    "es": "Capucha y dos cuchillos",
    "en": "Hood and two blades",
    "eu": "Kaputxa eta bi aizto"
  },
  "Ver ficha de Sombra del torii": {
    "es": "Ver ficha de Sombra del torii",
    "en": "View Torii shadow details",
    "eu": "Toriiaren itzala: ikusi fitxa"
  },
  "Añadir Sombra del torii al carrito": {
    "es": "Añadir Sombra del torii al carrito",
    "en": "Add Torii shadow to basket",
    "eu": "Toriiaren itzala: gehitu saskira"
  },
  "Ampliar vistas de Sombra del torii": {
    "es": "Ampliar vistas de Sombra del torii",
    "en": "Enlarge Torii shadow views",
    "eu": "Toriiaren itzala: handitu bistak"
  },
  "Diseño conceptual de Sombra del torii en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Sombra del torii en resina gris, visto desde cuatro ángulos",
    "en": "Torii shadow: grey-resin concept design, seen from four angles",
    "eu": "Toriiaren itzala: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Sombra del torii: vistas conceptuales en resina gris": {
    "es": "Sombra del torii: vistas conceptuales en resina gris",
    "en": "Torii shadow: grey-resin concept views",
    "eu": "Toriiaren itzala: erretxina griseko bista kontzeptualak"
  },
  "Sombra del torii: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Sombra del torii: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Torii shadow: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Toriiaren itzala: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "07 DISEÑOS": {
    "es": "07 DISEÑOS",
    "en": "07 DESIGNS",
    "eu": "07 DISEINU"
  },
  "07 DISEÑOS / SIN COLOR": {
    "es": "07 DISEÑOS / SIN COLOR",
    "en": "07 DESIGNS / UNPAINTED",
    "eu": "07 DISEINU / MARGOTU GABE"
  },
  "7 diseños de ejemplo": {
    "es": "7 diseños de ejemplo",
    "en": "7 example designs",
    "eu": "7 adibideko diseinu"
  },
  "Titán de hierro": {
    "es": "Titán de hierro",
    "en": "Iron titan",
    "eu": "Burdinazko titana"
  },
  "Titán de hierro ↗": {
    "es": "Titán de hierro ↗",
    "en": "Iron titan ↗",
    "eu": "Burdinazko titana ↗"
  },
  "Kuro Labs - Titán de hierro": {
    "es": "Kuro Labs - Titán de hierro",
    "en": "Kuro Labs - Iron titan",
    "eu": "Kuro Labs - Burdinazko titana"
  },
  "Un oni de armadura mecánica pesada, con martillo y escudo. Los pistones y las placas blindadas definen una silueta de máquina de guerra sobre una peana de piedra.": {
    "es": "Un oni de armadura mecánica pesada, con martillo y escudo. Los pistones y las placas blindadas definen una silueta de máquina de guerra sobre una peana de piedra.",
    "en": "A heavily armored mechanical oni with a hammer and shield. Pistons and armored plates define its war-machine silhouette on a stone base.",
    "eu": "Armadura mekaniko astuna duen onia, mailu eta ezkutuarekin. Pistoiek eta plaka blindatuek gerra-makinaren silueta osatzen dute harrizko oinarri baten gainean."
  },
  "Diseño conceptual con martillo, escudo y armadura mecánica pesada.": {
    "es": "Diseño conceptual con martillo, escudo y armadura mecánica pesada.",
    "en": "Concept design with a hammer, shield and heavy mechanical armor.",
    "eu": "Mailua, ezkutua eta armadura mekaniko astuna dituen diseinu kontzeptuala."
  },
  "Martillo y escudo": {
    "es": "Martillo y escudo",
    "en": "Hammer and shield",
    "eu": "Mailua eta ezkutua"
  },
  "Ver ficha de Titán de hierro": {
    "es": "Ver ficha de Titán de hierro",
    "en": "View Iron titan details",
    "eu": "Burdinazko titana: ikusi fitxa"
  },
  "Añadir Titán de hierro al carrito": {
    "es": "Añadir Titán de hierro al carrito",
    "en": "Add Iron titan to basket",
    "eu": "Burdinazko titana: gehitu saskira"
  },
  "Ampliar vistas de Titán de hierro": {
    "es": "Ampliar vistas de Titán de hierro",
    "en": "Enlarge Iron titan views",
    "eu": "Burdinazko titana: handitu bistak"
  },
  "Diseño conceptual de Titán de hierro en resina gris, visto desde cuatro ángulos": {
    "es": "Diseño conceptual de Titán de hierro en resina gris, visto desde cuatro ángulos",
    "en": "Iron titan: grey-resin concept design, seen from four angles",
    "eu": "Burdinazko titana: erretxina griseko diseinu kontzeptuala, lau angelutatik ikusita"
  },
  "Titán de hierro: vistas conceptuales en resina gris": {
    "es": "Titán de hierro: vistas conceptuales en resina gris",
    "en": "Iron titan: grey-resin concept views",
    "eu": "Burdinazko titana: erretxina griseko bista kontzeptualak"
  },
  "Titán de hierro: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos": {
    "es": "Titán de hierro: diseño oni en resina gris sin pintar, mostrado desde cuatro ángulos",
    "en": "Iron titan: unpainted grey-resin oni concept, shown from four angles",
    "eu": "Burdinazko titana: margotu gabeko erretxina griseko oni diseinua, lau angelutatik ikusita"
  },
  "08 DISEÑOS": {
    "es": "08 DISEÑOS",
    "en": "08 DESIGNS",
    "eu": "08 DISEINU"
  },
  "08 DISEÑOS / SIN COLOR": {
    "es": "08 DISEÑOS / SIN COLOR",
    "en": "08 DESIGNS / UNPAINTED",
    "eu": "08 DISEINU / MARGOTU GABE"
  },
  "8 diseños de ejemplo": {
    "es": "8 diseños de ejemplo",
    "en": "8 example designs",
    "eu": "8 adibideko diseinu"
  },
  /* Favoritos, valoraciones, galería de la ficha, cortina y próximo drop. */
  "Favoritos": {
    "es": "Favoritos",
    "en": "Favourites",
    "eu": "Gogokoak"
  },
  "Ver favoritos": {
    "es": "Ver favoritos",
    "en": "View favourites",
    "eu": "Ikusi gogokoak"
  },
  "Ver favoritos: 0": {
    "es": "Ver favoritos: 0",
    "en": "View favourites: 0",
    "eu": "Ikusi gogokoak: 0"
  },
  "Guardar en favoritos": {
    "es": "Guardar en favoritos",
    "en": "Save to favourites",
    "eu": "Gorde gogokoetan"
  },
  "Quitar de favoritos": {
    "es": "Quitar de favoritos",
    "en": "Remove from favourites",
    "eu": "Kendu gogokoetatik"
  },
  "Guardado en favoritos": {
    "es": "Guardado en favoritos",
    "en": "Saved to favourites",
    "eu": "Gogokoetan gorde da"
  },
  "Quitado de favoritos": {
    "es": "Quitado de favoritos",
    "en": "Removed from favourites",
    "eu": "Gogokoetatik kendu da"
  },
  "Kuro Labs — Mis favoritos": {
    "es": "Kuro Labs — Mis favoritos",
    "en": "Kuro Labs — My favourites",
    "eu": "Kuro Labs — Nire gogokoak"
  },
  "MIS FAVORITOS": {
    "es": "MIS FAVORITOS",
    "en": "MY FAVOURITES",
    "eu": "NIRE GOGOKOAK"
  },
  "FAVORITOS / DEMO": {
    "es": "FAVORITOS / DEMO",
    "en": "FAVOURITES / DEMO",
    "eu": "GOGOKOAK / DEMO"
  },
  "FAVORITOS / DEMOSTRACIÓN": {
    "es": "FAVORITOS / DEMOSTRACIÓN",
    "en": "FAVOURITES / DEMO",
    "eu": "GOGOKOAK / DEMOA"
  },
  "Tus diseños oni guardados con el corazón. Solo se guardan en este navegador.": {
    "es": "Tus diseños oni guardados con el corazón. Solo se guardan en este navegador.",
    "en": "Your oni designs saved with the heart. They are only stored in this browser.",
    "eu": "Bihotzarekin gordetako zure oni diseinuak. Nabigatzaile honetan bakarrik gordetzen dira."
  },
  "diseños guardados": {
    "es": "diseños guardados",
    "en": "saved designs",
    "eu": "diseinu gordeta"
  },
  "0 diseños guardados": {
    "es": "0 diseños guardados",
    "en": "0 saved designs",
    "eu": "0 diseinu gordeta"
  },
  "Aún no has guardado ningún diseño.": {
    "es": "Aún no has guardado ningún diseño.",
    "en": "You have not saved any designs yet.",
    "eu": "Oraindik ez duzu diseinurik gorde."
  },
  "Marca el corazón de cualquier figura del catálogo y aparecerá aquí.": {
    "es": "Marca el corazón de cualquier figura del catálogo y aparecerá aquí.",
    "en": "Tap the heart on any figure in the catalogue and it will appear here.",
    "eu": "Markatu katalogoko edozein figuratako bihotza eta hemen agertuko da."
  },
  "Explorar catálogo": {
    "es": "Explorar catálogo",
    "en": "Browse the catalogue",
    "eu": "Arakatu katalogoa"
  },
  "Los favoritos son una demo: se guardan en tu navegador con localStorage, sin cuenta ni servidor.": {
    "es": "Los favoritos son una demo: se guardan en tu navegador con localStorage, sin cuenta ni servidor.",
    "en": "Favourites are a demo: they are stored in your browser with localStorage, no account or server.",
    "eu": "Gogokoak demo bat dira: zure nabigatzailean gordetzen dira localStorage erabiliz, konturik eta zerbitzaririk gabe."
  },
  "Tu valoración": {
    "es": "Tu valoración",
    "en": "Your rating",
    "eu": "Zure balorazioa"
  },
  "Sin valorar": {
    "es": "Sin valorar",
    "en": "Not rated yet",
    "eu": "Baloratu gabe"
  },
  "1 estrella de 5": {
    "es": "1 estrella de 5",
    "en": "1 star out of 5",
    "eu": "5etik 1 izar"
  },
  "2 estrellas de 5": {
    "es": "2 estrellas de 5",
    "en": "2 stars out of 5",
    "eu": "5etik 2 izar"
  },
  "3 estrellas de 5": {
    "es": "3 estrellas de 5",
    "en": "3 stars out of 5",
    "eu": "5etik 3 izar"
  },
  "4 estrellas de 5": {
    "es": "4 estrellas de 5",
    "en": "4 stars out of 5",
    "eu": "5etik 4 izar"
  },
  "5 estrellas de 5": {
    "es": "5 estrellas de 5",
    "en": "5 stars out of 5",
    "eu": "5etik 5 izar"
  },
  "Demo: tu puntuación solo se guarda en este navegador.": {
    "es": "Demo: tu puntuación solo se guarda en este navegador.",
    "en": "Demo: your rating is only stored in this browser.",
    "eu": "Demo: zure puntuazioa nabigatzaile honetan bakarrik gordetzen da."
  },
  "Ampliar la vista actual": {
    "es": "Ampliar la vista actual",
    "en": "Enlarge the current view",
    "eu": "Handitu uneko ikuspegia"
  },
  "Vistas de la figura": {
    "es": "Vistas de la figura",
    "en": "Views of the figure",
    "eu": "Figuraren ikuspegiak"
  },
  "Ver de frente": {
    "es": "Ver de frente",
    "en": "Front view",
    "eu": "Aurrealdea ikusi"
  },
  "Ver de perfil": {
    "es": "Ver de perfil",
    "en": "Side view",
    "eu": "Profila ikusi"
  },
  "Ver de espaldas": {
    "es": "Ver de espaldas",
    "en": "Back view",
    "eu": "Bizkarraldea ikusi"
  },
  "Ver en perspectiva": {
    "es": "Ver en perspectiva",
    "en": "Three-quarter view",
    "eu": "Perspektiban ikusi"
  },
  "Ver las cuatro vistas juntas": {
    "es": "Ver las cuatro vistas juntas",
    "en": "See all four views together",
    "eu": "Ikusi lau ikuspegiak batera"
  },
  "Elige una vista y pulsa la foto para ampliarla.": {
    "es": "Elige una vista y pulsa la foto para ampliarla.",
    "en": "Choose a view and tap the photo to enlarge it.",
    "eu": "Aukeratu ikuspegi bat eta sakatu argazkia handitzeko."
  },
  "de frente": {
    "es": "de frente",
    "en": "from the front",
    "eu": "aurrealdetik"
  },
  "de perfil": {
    "es": "de perfil",
    "en": "from the side",
    "eu": "profildetik"
  },
  "de espaldas": {
    "es": "de espaldas",
    "en": "from the back",
    "eu": "bizkarraldetik"
  },
  "en perspectiva": {
    "es": "en perspectiva",
    "en": "in three-quarter view",
    "eu": "perspektiban"
  },
  "en sus cuatro ángulos": {
    "es": "en sus cuatro ángulos",
    "en": "in its four angles",
    "eu": "bere lau angeluetan"
  },
  "en resina gris sin pintar": {
    "es": "en resina gris sin pintar",
    "en": "in unpainted grey resin",
    "eu": "erretxina grisez, pintatu gabe"
  },
  "PRÓXIMO DROP": {
    "es": "PRÓXIMO DROP",
    "en": "NEXT DROP",
    "eu": "HURRENGO DROPA"
  },
  "La siguiente figura oni está en camino. Esta cuenta atrás es una demostración en JavaScript.": {
    "es": "La siguiente figura oni está en camino. Esta cuenta atrás es una demostración en JavaScript.",
    "en": "The next oni figure is on its way. This countdown is a JavaScript demo.",
    "eu": "Hurrengo oni figura bidean dago. Atzerako kontaketa hau JavaScript demostrazio bat da."
  },
  "días": {
    "es": "días",
    "en": "days",
    "eu": "egun"
  },
  "horas": {
    "es": "horas",
    "en": "hours",
    "eu": "ordu"
  },
  "minutos": {
    "es": "minutos",
    "en": "minutes",
    "eu": "minutu"
  },
  "segundos": {
    "es": "segundos",
    "en": "seconds",
    "eu": "segundo"
  },
  "Cuenta atrás hasta el próximo drop": {
    "es": "Cuenta atrás hasta el próximo drop",
    "en": "Countdown to the next drop",
    "eu": "Hurrengo droparako atzerako kontaketa"
  },
  "Fecha ficticia de demostración. Sin lanzamiento comercial real.": {
    "es": "Fecha ficticia de demostración. Sin lanzamiento comercial real.",
    "en": "Fictional demo date. No real commercial launch.",
    "eu": "Fikziozko demostrazio-data. Ez dago benetako kaleratze komertzialik."
  },
  "¡El drop ya está aquí!": {
    "es": "¡El drop ya está aquí!",
    "en": "The drop is here!",
    "eu": "Dropa hemen da!"
  }
};
  const textosOriginales = new WeakMap();
  const atributosOriginales = new WeakMap();
  let idioma = "es";
  try { const guardado = localStorage.getItem("kurolabs-idioma"); if (["es", "en", "eu"].includes(guardado)) idioma = guardado; } catch (error) { /* La selección funciona aun sin almacenamiento. */ }
  const traducir = (texto) => traducciones[texto]?.[idioma] || texto;
  const aplicar = (raiz = document.body) => {
    const recorrido = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
    let nodo;
    while ((nodo = recorrido.nextNode())) {
      if (nodo.parentElement.closest("script, style, [data-no-traducir]")) continue;
      if (!textosOriginales.has(nodo)) textosOriginales.set(nodo, nodo.textContent);
      const original = textosOriginales.get(nodo);
      const clave = original.trim().replace(/\s+/g, " ");
      if (traducciones[clave]) nodo.textContent = original.replace(original.trim(), traducir(clave));
    }
    [raiz, ...raiz.querySelectorAll("*")].forEach((elemento) => {
      if (!elemento.getAttribute) return;
      if (!atributosOriginales.has(elemento)) {
        const atributos = {};
        ["aria-label", "alt", "placeholder"].forEach((atributo) => {
          if (elemento.hasAttribute(atributo)) atributos[atributo] = elemento.getAttribute(atributo);
        });
        atributosOriginales.set(elemento, atributos);
      }
      Object.entries(atributosOriginales.get(elemento)).forEach(([atributo, texto]) => elemento.setAttribute(atributo, traducir(texto)));
    });
  };
  const tituloOriginal = document.title;
  const descripcion = document.querySelector('meta[name="description"]');
  const descripcionOriginal = descripcion?.content;
  const cambiar = (seleccion) => {
    idioma = seleccion;
    document.documentElement.lang = idioma;
    document.title = traducir(tituloOriginal);
    if (descripcion) descripcion.content = traducir(descripcionOriginal);
    aplicar();
    document.querySelector("#selector-idioma").value = idioma;
    try { localStorage.setItem("kurolabs-idioma", idioma); } catch (error) { /* No bloqueamos la interfaz. */ }
  };
  document.addEventListener("DOMContentLoaded", () => {
    cambiar(idioma);
    document.querySelector("#selector-idioma").addEventListener("change", (evento) => {
      cambiar(evento.target.value);
      document.dispatchEvent(new Event("idioma-cambiado"));
    });
    window.addEventListener("storage", (evento) => {
      if (evento.key === "kurolabs-idioma" && ["es", "en", "eu"].includes(evento.newValue)) {
        cambiar(evento.newValue);
        document.dispatchEvent(new Event("idioma-cambiado"));
      }
    });
  });
  return { traducir, aplicar, actual: () => idioma };
})();
