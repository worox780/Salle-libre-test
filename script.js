
//-----CREATION DE LA MEGA LISTE DE SALLES-----

class Sallemodel {
    constructor (name, description, reference, image, planning, temps, duree, disponibilite, note) {
        this.name = name, //Nom de la salle
        this.description = description, //Description de la salle
        this.reference = reference, //Description de la salle
        this.image = image, //Image de référence pour décorer le fond en fonction de salle
        this.planning = planning, //Le planning des horaires de la salle
        this.temps = temps, //A développer
        this.duree = duree, //A développer
        this.disponibilite = disponibilite, //A développer
        this.note = note //Note de la salle sur 20
    }
}

let SalleList = []

function resetSalleList (){
    SalleList.push(
        new Sallemodel(
            "GF11",
            "Une salle spatieuse, sympa, où il y fait bon de passer du temps, mais toujours remplie de premières, terminale passe ton chemin.",
            "Une salle pour les Goat où ont étudié le fondateur et le co-fondateur.",
            "GF11",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      1,      0,      1,      1,      1,      1,      0,      0], //Lundi
                [1,      1,      1,      4,      6,      0,      1,      1,      1,      1,      0], //Mardi
                [1,      1,      1,      1,      0,      1,      1,      1,      1,      0,      0], //Mercredi
                [1,      1,      1,      1,      0,      0,      1,      1,      6,      1,      0], //Jeudi
                [1,      1,      1,      1,      0,      0,      6,      6,      0,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "19/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF15",
            "Une salle spatieuse, sympa. Des personnes y travaillent souvent sur le tableau. Toujours remplie de terminales, première passe ton chemin.",
            "La meilleure salle de mathématique, la ZGAM perdurera toujours !",
            "GF15",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      1,      0,      1,      1,      6,      6,      1,      0], //Lundi
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      1,      0], //Mardi
                [1,      0,      1,      1,      1,      0,      1,      4,      1,      0,      0], //Mercredi
                [0,      0,      1,      1,      0,      1,      1,      1,      1,      1,      0], //Jeudi
                [1,      1,      1,      1,      0,      6,      1,      4,      6,      1,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "17,5/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF23",
            "Souvent dispo. Souvent pleine de monde, trés spatieuse. Beaucoup trop bruyante, je déconseille fortement.",
            "'Un tyran n'est pas innocent'. 'Député'. Pourquoi il y a de la politique dans cette classe ? On est pas censé être ami ???",
            "GF23",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      1,      0,      0,      1,      1,      4,      0,      0], //Lundi
                [1,      1,      1,      0,      0,      0,      1,      1,      6,      4,      0], //Mardi
                [1,      1,      1,      0,      1,      1,      1,      6,      1,      0,      0], //Mercredi
                [0,      0,      1,      1,      0,      1,      1,      1,      0,      1,      0], //Jeudi
                [1,      1,      1,      1,      1,      0,      1,      1,      1,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "8"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF24",
            "Petite salle, souvent remplie de monde. Les gens sont sympas, donc vient manger avec eux.",
            "J'ai pas de commentaire, si ce n'est que le co-créateur a beaucoup de cours ici. Si tu le cherche, c'est l'endroit parfait.",
            "GF24",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      4,      1,      1,      1,      1,      1,      1,      0,      0], //Lundi
                [6,      6,      1,      1,      0,      0,      1,      1,      1,      0,      0], //Mardi
                [1,      0,      0,      1,      1,      0,      1,      0,      0,      0,      0], //Mercredi
                [0,      0,      1,      1,      0,      1,      1,      1,      0,      0,      0], //Jeudi
                [1,      1,      1,      1,      1,      1,      1,      1,      6,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "16/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF25",
            "Inconnue au bataillon, à côté de la GF23, petite. Il y a souvent du monde puisque les gens fuient la GF23.",
            "Tu veux que je raconte quoi si ce n'est qu'il y a du monde ???",
            "GF25",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      1,      4,      1,      1,      1,      1,      1,      0], //Lundi
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      1,      0], //Mardi
                [1,      1,      1,      1,      1,      1,      1,      0,      4,      0,      0], //Mercredi
                [0,      0,      1,      1,      0,      0,      1,      1,      0,      0,      0], //Jeudi
                [1,      1,      1,      1,      1,      0,      4,      1,      6,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "10/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF30",
            "Identique à la GF40, sauf qu'il y a moins de personnes et qu'il manque un tableau au fond de la classe.",
            "Pourquoi il y a une table random en plein milieu de la salle ? Le zero est justifé par du plagiat.",
            "GF30",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      1,      1,      1,      1,      1,      6,      1,      0], //Lundi
                [1,      1,      1,      1,      4,      0,      1,      1,      1,      1,      0], //Mardi
                [1,      0,      6,      1,      0,      0,      1,      0,      0,      0,      0], //Mercredi
                [0,      0,      1,      1,      0,      1,      1,      1,      0,      1,      0], //Jeudi
                [1,      1,      1,      1,      6,      0,      1,      1,      1,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "0/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF32",
            "Salle avec une mauvaise accoustique. Ne pas oublier le doliprane.",
            "Pendant l'année 2023/2024, c'était là où c'est déroulé le cours le plus goatesque de tous les temps avec M.Masselin, M.Lacroix et la théorie du tout.",
            "GF32",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      1,      0,      0,      0,      1,      0,      1,      0], //Lundi
                [1,      1,      1,      1,      0,      0,      0,      0,      1,      1,      0], //Mardi
                [1,      1,      1,      1,      0,      1,      1,      0,      0,      1,      0], //Mercredi
                [0,      0,      1,      1,      0,      1,      1,      1,      1,      4,      0], //Jeudi
                [1,      1,      1,      1,      1,      1,      1,      1,      6,      1,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "13/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF34",
            "Salle, avec peu de monde. Toujours remplie le mercredi midi.",
            "La salle par excellence pour résoudre des équations différentielles d'ordre 4 avec le Goat M.Masselin.",
            "GF34",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      1,      4,      1,      1,      1,      1,      0,      0], //Lundi
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      4,      0], //Mardi
                [1,      1,      1,      1,      1,      0,      0,      0,      0,      0,      0], //Mercredi
                [0,      0,      4,      1,      0,      1,      1,      1,      1,      0,      0], //Jeudi
                [1,      1,      0,      1,      1,      1,      1,      1,      0,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "18/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF40",
            "Souvent occupée le jeudi par des terminales. Il y fait bon de passer du temps. Calme sauf le jeudi, attention aux oreilles. A côté du bureau de Monsieur Depondt.",
            "Nouvelle Update, la ZLAN s'installe, Minecraft, Fortnite, Subway Surfer, Geometry Dash se sont invités sur le tableau.",
            "GF40",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      0,      6,      0,      1,      1,      1,      1,      0], //Lundi
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      1,      0], //Mardi
                [1,      0,      1,      6,      0,      1,      1,      1,      1,      0,      0], //Mercredi
                [1,      1,      1,      1,      1,      0,      1,      4,      4,      0,      0], //Jeudi
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "18/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF41",
            "Salle calme, spatieuse, sauf quand des terminales se mettent à crier. Souvent réquisitionnée par des commissions.",
            "Salle préférée de M.Diao. On sait pas pourquoi, mais il aime passer de la GF40 à la GF41. Attention aux téléphones qui volent.",
            "GF41",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      1,      0], //Lundi
                [1,      1,      1,      0,      0,      0,      1,      1,      1,      1,      0], //Mardi
                [1,      1,      1,      4,      6,      1,      1,      0,      6,      0,      0], //Mercredi
                [1,      1,      1,      1,      0,      1,      1,      0,      1,      0,      0], //Jeudi
                [1,      1,      1,      1,      0,      4,      4,      1,      4,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "17/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF42",
            "Salle très calme, où il peut faire froid. Ne pas oublier son pull. Idéal pour faire la sieste.",
            "Qu'est ce que tu veux raconter sur cette salle où personne ne va. 42 c'est la réponse à tout, donc 20/20.",
            "GF42",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      1,      4,      0,      4,      1,      1,      4,      0], //Lundi
                [1,      1,      1,      1,      0,      0,      1,      1,      6,      1,      0], //Mardi
                [0,      1,      1,      1,      1,      1,      1,      6,      6,      0,      0], //Mercredi
                [0,      0,      4,      1,      0,      0,      1,      1,      4,      0,      0], //Jeudi
                [0,      0,      0,      0,      0,      1,      1,      1,      4,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "20/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF43",
            "Salle centrale, domaine des terminales. Beaucoup de bruit, et de click de souris.",
            "Parfaite pour les joueurs de LOL, ou pour les personnes qui aiment voir du bon gameplay.",
            "GF43",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      0,      0,      0,      6,      1,      1,      1,      0], //Lundi
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      4,      0], //Mardi
                [1,      0,      1,      1,      1,      0,      1,      0,      6,      0,      0], //Mercredi
                [1,      1,      1,      1,      0,      1,      1,      0,      1,      1,      0], //Jeudi
                [1,      1,      1,      1,      1,      0,      4,      1,      4,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "18/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF44",
            "Super discrète, souvent vide ou avec quelques littéraires... A voir...",
            "Je n'ai rien à dire mais quand je suis venu il y avait marqué : 'Die Wohngemeinschaft'. Vous avez 4 heures.",
            "GF44",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      0,      0,      1,      1,      0,      0,      1,      0], //Lundi
                [1,      1,      0,      0,      0,      0,      1,      1,      6,      0,      0], //Mardi
                [0,      1,      1,      0,      0,      0,      0,      0,      4,      1,      0], //Mercredi
                [0,      0,      6,      1,      0,      0,      1,      1,      1,      0,      0], //Jeudi
                [0,      0,      1,      1,      1,      1,      1,      1,      6,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "12/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF45",
            "Petite salle calme où les gens y font la sieste. Viens te joindre à eux !",
            "Qu'est ce que tu veux raconter sur cette salle où tout le monde dort. On oubli tous nos soucis.",
            "GF45",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      0,      1,      4,      0,      1,      1,      0,      0,      0], //Lundi
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      0,      0], //Mardi
                [1,      0,      0,      1,      1,      0,      0,      6,      0,      6,      0], //Mercredi
                [1,      1,      1,      1,      0,      1,      1,      1,      1,      0,      0], //Jeudi
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "12/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF50",
            "Que dire, personne n'y va. Elle est toujours vide, sauf pour les cours.",
            "Il existe un Goat des maths appartenant aux terminales, qui travaille ici.",
            "GF50",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      1,      0,      0,      1,      1,      1,      1,      1,      0], //Lundi
                [1,      4,      1,      1,      0,      1,      1,      1,      6,      6,      0], //Mardi
                [1,      0,      1,      1,      1,      0,      0,      1,      1,      0,      0], //Mercredi
                [1,      1,      1,      1,      0,      1,      1,      1,      1,      0,      0], //Jeudi
                [1,      1,      1,      1,      1,      0,      1,      1,      1,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "10/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF51",
            "Salle la plus excentrée de tout le lycée. Toujours dispo, sauf si une personne a eu la même idée que toi.",
            "Que dire, des fantômes y reignent. PAS DE SORTIE AVANT 11H20.",
            "GF51",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      6,      1,      0,      0,      1,      1,      1,      1,      0,      0], //Lundi
                [1,      1,      1,      1,      0,      0,      1,      1,      1,      6,      0], //Mardi
                [1,      0,      4,      1,      1,      0,      0,      0,      0,      0,      0], //Mercredi
                [1,      1,      1,      1,      0,      0,      1,      0,      6,      1,      0], //Jeudi
                [1,      1,      1,      1,      1,      0,      1,      1,      0,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "6/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF52",
            "Salle spatieuse, mais un peu vide d'esprit. Toujours prise d'assaut par un groupe d'ami de terminale.",
            "Détruis ton cardio si tu veux, ce n'est pas mon problème, il y a toujours beaucoup d'agitation.",
            "GF52",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [1,      1,      0,      0,      4,      1,      1,      1,      1,      6,      0], //Lundi
                [4,      1,      1,      1,      0,      0,      1,      1,      4,      4,      0], //Mardi
                [0,      0,      1,      1,      1,      1,      1,      4,      0,      1,      0], //Mercredi
                [1,      1,      1,      1,      0,      1,      1,      1,      1,      0,      0], //Jeudi
                [1,      1,      1,      1,      4,      6,      1,      1,      4,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "15/20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF53",
            "Salle d'examen, la plus grande de toutes les salles, interdit de manger.",
            "T'as vraiement envie de revivre le traumatisme de tes examens. La philo pendant 2 heures, ça peut te tuer.",
            "GF53",
            [  //08h20 - 09h15 - 10h30 - 11h25 - 12h20 - 13h15 - 14h10 - 15h50 - 16h15 - 17h10 - 18h05 | Mise à jour
                [0,      0,      0,      1,      0,      0,      0,      1,      1,      0,      0], //Lundi
                [0,      0,      0,      0,      0,      1,      1,      1,      1,      1,      0], //Mardi
                [0,      0,      1,      1,      1,      0,      0,      0,      0,      0,      0], //Mercredi
                [1,      1,      1,      1,      1,      1,      1,      0,      1,      6,      0], //Jeudi
                [1,      1,      1,      1,      0,      0,      0,      4,      0,      0,      0], //Vendredi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //Samedi
                [1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1]  //Dimanche
            ],
            "0h00m",
            0,
            false,
            "14/20"
        )
    )
    
}


//----------------------------------------------------------VARIABLES DE TEMPS------------------------------------------------



//-----Récupérer l'heure actuelle sous la forme d'une liste-----
function Heure(){
    const dateactuelle = new Date();
    heure = [dateactuelle.getHours(), dateactuelle.getMinutes()];
    return (heure)
};

//-----Récupérer la date d'aujourd'hui sous la forme d'une liste-----
function FonctionDate(){
    const dateactuelle = new Date();
    date = [dateactuelle.getDate(), dateactuelle.getMonth(), dateactuelle.getFullYear()]
    return(date)
}

//-----Obtenir le numero de la semaine-----
function numerosemaine(date){
    const dateactuelle = new Date(date[2], date[1]-1, date[0]); //Récupération de la date actuelle
    const oneJan = new Date(dateactuelle.getFullYear(),0,1); //Récupération de la date du 1 janvier
    let numberOfDays = Math.floor((dateactuelle - oneJan) / (24 * 60 * 60 * 1000));
    let numerosemaine = Math.ceil(( dateactuelle.getDay() + 1 + numberOfDays) / 7);
    return(numerosemaine)
}

//savoir si une date est dans une semaine paire ou impaire
//probaabilité importante qu'il y ait un truc qui merde ici lol
function paireimpaire(date){
    let paireimpaire = numerosemaine(date)%2
    if (paireimpaire == 0){
        return ("A")
    } else if (paireimpaire == 1){
        return ("B")
    }
}

//savoir à quelle heure on est (entre 0 et 10)
function numeroheuredecours(heuredonnee){

    let heure = heuredonnee[0]
    let minute = heuredonnee[1]
    
    if(heure == 8){
        return (0)
    } else if (heure == 9){
        if (minute < 15){
            return (1)
        } else {
            return (0)
        }
    } else if (heure == 10){
        if (minute <10){
            return (1)
        } else {
            return (2)
        }
    } else if (heure == 11){
        if (minute < 25){
            return (2)
        } else {
            return (3)
        }
    } else if (heure == 12){
        if (minute < 20){
            return (3)
        } else {
            return (4)
        }
    } else if (heure == 13){
        if (minute < 15){
            return (4)
        } else {
            return (5)
        }
    } else if (heure == 14){
        if (minute < 10){
            return (5)
        } else {
            return (6)
        }
    } else if (heure == 15){
        if (minute < 5){
            return (6)
        } else {
            return (7)
        }
    } else if (heure == 16){
        return (8)
    } else if (heure == 17){
        if(minute< 10){
            return (8)
        } else {
            return (9)
        }
    } else if (heure == 18){
        if (minute < 5){
            return (9)
        } else {
            return (10)
        }
    } else {
        return (30)
    }
}


//-----Connaitre un jour de la semaine pour une date donnée | Les jours de la semaines sont : Dimanche = 0; Lundi = 1; Mardi = 2; Mercredi = 3; Jeudi = 4; Vendredi = 5; Samedi = 6-----
function joursemaine(date){
    let date_find = new Date(date[2],date[1],date[0]) //Initialisation de la date à la date choisi par l'utilisateur
    let joursemaine = date_find.getDay() - 1
    
    if (joursemaine < 0){
        joursemaine = 6
    }
    
    return (joursemaine)
}

//-----Obtenir la prochaine heure de début de cours-----
function heureapres(heure){
    let temps = heure[0]*60 + heure[1] + 55; //Convertion du temps en minute en rajoutant 55 minutes
    let minutes = temps%60 //Récupération des heures pour la prochaine heure
    let Heureapres = (temps-minutes)/60 //Récupération des minutes pour la prochaine heure
    return([Heureapres, minutes])
}
//-----Récupérer le nom du mois en fonction de sa position dans l'année-----
function moisenfonctionnom(mois){
    let _mois = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return _mois.indexOf(mois)
}

//-----Récupération de l'heure de la salle-----
function heuredecoursfonctionstring(heuredecours){
    return ListeHeures.indexOf(heuredecours.split(" ")[1])
}
//-----------------------------------------------GERER LES DIFFERENTES SALLES DISPONIBLES---------------------------------------------------

//-----Savoir les salles disponibles à une certaine heure-----
function sallesdispo(date, heure){
    jour = joursemaine(date) //Récupérer le jour de la semaine
    paire = paireimpaire(date) //Savoir le type de la semaine
    //-----Si il n'y a pas d'heure de défini-----
    if (heure == undefined){
        heure = 0
    }
    if (heure[1] !== undefined){
        heure = numeroheuredecours(heure)
    }
    console.log("heure : ", heure)
    let sallesdisponibles = []
    if (heure == 30){
        return(sallesdisponibles)
    }
    console.log("paire : ", paire)
    if (paire == "A"){
        console.log("ok")
        for (let i = 0; i < SalleList.length; i++) {
            console.log(SalleList[i].planning, jour, heure);

            if (SalleList[i].planning[jour][heure] == 0 || SalleList[i].planning[jour][heure] == 6){
                console.log("lol");
                sallesdisponibles.push(SalleList[i]);
            }
        }
    } else if (paire == "B"){
        for (let i = 0; i < SalleList.length; i++){
            if (SalleList[i].planning[jour][heure] == 0 || SalleList[i].planning[jour][heure] == 4){
                sallesdisponibles.push(SalleList[i])
            }
        }
    }
    return (sallesdisponibles)
}


//-----------------trouver une salle et en renvoyer le sallemodel-------------------

function findsalle(sallename){
    for (let i = 0; i<SalleList.length; i++){
        if (SalleList[i].name == sallename){
            return(SalleList[i])
        }
    }
    return
}

//-------------------------------------FONCTIONS DE CREATION D'ELEMENTS AVEC LES SALLES MODELS------------------------

//mega fonction pour juste créer une div avec un élément parent précis, et une classname logique
function creatediv(elementparent, classname){
    const div = document.createElement("div") //Création d'un élément | type -> div
    elementparent.appendChild(div) //Attaché l'élement crée div à un parent qui est argument
    if (classname != "") {
        div.classList.add(classname) //Ajouter une class à l'élément div crée
    }
    return(div)
}



function creerlayoutsallemodel(salle, parentelement){

    let div_contenu = creatediv(parentelement, "SalleModel") //Création de la div pour le contenu et le conteneur de l'image


    //-----Création du conteneur de l'image-----
    let divimagecontainer = creatediv(div_contenu, "SalleModel_image_container") //Création de la div pour l'image
    divimagecontainer.style.height = `${div_contenu.offsetHeight-20}px` //Définir la taille de l'image en fonction de la taille de la div de contenu
    divimagecontainer.style.left  = div_contenu.style.paddingLeft //Décaler l'image de quelque pixel vers la droite par rapport à la gauche de la div
    divimagecontainer.style.top = div_contenu.style.paddingTop //Décaler l'image de quelque pixel vers le bas par rapport au haut de la div
    divimagecontainer.style.width = divimagecontainer.style.height //Faire en sorte que l'image soit carré

    //-----Insertion du titre-----
    let divtitre = creatediv(div_contenu, "SalleModel_titre") //Création de la div pour le titre
    divtitre.innerText = salle.name //Définir le du titre 
    divtitre.style.top = div_contenu.style.paddingTop; //Décaler le titre de quelque pixel vers le bas par rapport au haut de la div
    divtitre.style.left = `${divimagecontainer.offsetWidth+20}px` //Décaler le titre de quelque pixel vers la droite par rapport à la gauche de l'image

    //-----Insertion de l'image-----
    let divimage = document.createElement("img") //Création de la div pour l'image
    let get_more_information_image = document.createElement("button") //Création d'un lien qui est clickable dans l'image
    //-----Apparance du button pour l'image-----
    get_more_information_image.style.appearance = "none";
    get_more_information_image.style.border = "none";
    get_more_information_image.style.cursor = "pointer";
    get_more_information_image.style.BackgroundColor = "inherit"
    get_more_information_image.setAttribute("class", salle.name);
    get_more_information_image.onclick = function(){More_Information_Salle(get_more_information_image.classList)}

    divimagecontainer.appendChild(get_more_information_image)
    get_more_information_image.appendChild(divimage) //Mettre l'image en enfant du conteneur de l'image
    divimage.classList.add("SalleModel_image") //Ajout d'une class à la div de l'image
    divimage.src = `images/${salle.image}.jpg` //Récupération de l'image du côté serveur

    //-----Insertion de la description-----
    let divdescription = creatediv(div_contenu, "SalleModel_description") //Création de la div pour la description de la salle
    divdescription.style.height = `${parseInt(divimagecontainer.style.height) - 20}px` //Initialisation de la hauteur de la description
    divdescription.style.overflowY = "scroll" //Ajout d'une barre de défilement pour l'overflox sur la hauteur
    divdescription.style.backgroundColor = "rgba(199, 199, 199, 0.3)" //Changement de la texture d'arrière plan pour la description
    divdescription.innerHTML = salle.description //Initialisation de la description de salle
    divdescription.style.left = divtitre.style.left //Décaler l'image de quelque pixel vers la droite par rapport à la gauche de l'image
    divdescription.style.top = `${divtitre.offsetHeight +10}px` //Décaler le titre de quelque pixel vers le bas par rapport au haut de la div
    divdescription.style.width = `${div_contenu.offsetWidth - divimagecontainer.offsetWidth -30}px` //Initialisation de la largeur de la description
    
}

//----------------------------------------------CODE DE LA PAGE ET DES LAYOUT-----------------------------------------------
resetSalleList()



const carousselmaintenant = document.getElementById("contenu_maintenant")
const carousselheureapres = document.getElementById("contenu_prochaineheure")

//-----Remplir le caroussel des horraires des salles disponibles maintenant-----
const dateajd = FonctionDate()
const heureactuelle = Heure()
const sallesdisponibles = sallesdispo(dateajd, heureactuelle)
console.log(sallesdisponibles)

for (let i = 0; i<sallesdisponibles.length; i++){
    creerlayoutsallemodel(sallesdisponibles[i], carousselmaintenant)
}
//remplir le caroussel heuresuivante
const Heureapres = heureapres(heureactuelle)
const sallesdispoheureapres = sallesdispo(dateajd, Heureapres)

for (let i = 0; i<sallesdispoheureapres.length; i++){
    creerlayoutsallemodel(sallesdispoheureapres[i], carousselheureapres)
}
//------------------------------------------CODE DU LAYOUT DE RECHERCHE---------------------------------------------------------


//fonction pour créer une div sur la page, l'assigner à un élément parent, et lui mettre une classname






//initialisation du titre fait de manière propre et clean pour laisser des possibilités de modification dans le futur
const listtitrespossibles = ["Planning d'une salle", "Salle à un temps précis", "Salles par étages"]
let numerotexttitreactuel = 0
let textetitreactuel = listtitrespossibles[numerotexttitreactuel]
document.getElementById("researchtitle").innerText = textetitreactuel


//réparer les pots cassés pour les transitions
let potcasses = false


function createoption(parentelement, nomoption){
    const option = document.createElement("option")
    parentelement.appendChild(option)
    option.innerText = nomoption
    option.classList.add("option_heure_cours")
}

function createnomdelasalle(parentelement){

    const container = creatediv(parentelement, "container_nom_salle")
    const titre = creatediv(container, "titre_nom_de_la_salle")
    titre.innerText = "Nom de la salle"

    const selecteurnomdelasalle = document.createElement("select")
    container.appendChild(selecteurnomdelasalle)
    selecteurnomdelasalle.classList.add("selecteur")
    selecteurnomdelasalle.classList.add("inputnomdelasalle")
    
    for (i = 0; i < SalleList.length; i++){
        createoption(selecteurnomdelasalle, SalleList[i].name)
    }

    return(container)
}

function createdateinput(parentelement){

    const container = creatediv(parentelement, "container_date_salle")
    const titre = creatediv(container, "titre_date_recherche")
    titre.innerText = "Choisir la date"

    const inputdate = document.createElement("input")
    container.appendChild(inputdate)
    inputdate.setAttribute("type", "datetime-local")

    //ce unique truc sert à créer le calendrier mdr
    flatpickr("input[type=datetime-local]", {
        "altInput": true,
        "altFormat": "j F Y",
        "dateFormat": "d.m.Y",
        "defaultDate" :"today",
        "maxDate": "15.6.2025",
        "minDate": "2.9.2022",
        "locale": {
        "firstDayOfWeek": 1 // start week on Monday Probleme ici, les jours sont décallés de 1 vers la fin de la semaine. Le lundi est le mardi etc...
        }
    });
    const pbpotentiel = document.getElementsByClassName("flatpickr-calendar")
    if (pbpotentiel.length > 1){
        pbpotentiel[0].remove()
    }
}

//-----Fonction essentiel car elle gère la création du bouton sur la page et lui permet de fonctionner-----
function createrecherchebutton(parentelement){
    const container = creatediv(parentelement, "container_button")
    const button = document.createElement("button") //Création d'un élément | type --> button
    container.appendChild(button) //Attaché l'élement crée button à un parent qui est le container crée juste au-dessus
    button.classList.add("button_research") //Ajouter une class à l'élément div crée
    button.textContent = "RECHERCHER" //Mettre un texte au bouton crée

    //-----Ajout d'une fonction de lecture au button qui s'active à chaque fois qu'il est clické-----
    button.addEventListener('click', () => {
        recherchelayout(parentelement)
      });
}

function create_input_heure_de_cours(parentelement){
    const container = creatediv(parentelement, "container_input_heure") //Création du conteneur pour les heures
    //-----Création de la div pour le titre de la partie-----
    const titre = creatediv(container, "titre_heure_de_cours")
    titre.innerText = "Heure de cours"

    const selecteurheuredecours = document.createElement("select") //Création du menu déroulant pour le choix des heures de cours
    container.appendChild(selecteurheuredecours) //L'ajouter au conteneur
    //-----Ajout de deux noms de class au selecteur-----
    selecteurheuredecours.classList.add("selecteur")
    selecteurheuredecours.classList.add("inputheuredecours")
    //-----Ajout des boutons pour la séléction des étages-----
    for  (i = 0; i < 11; i++){
        createoption(selecteurheuredecours, "de " + ListeHeures[i] + " à " + ListeHeures[i+1])
    }
    //suivre le deuxième tuto, pour faire pas mal de trucs
}

function create_etage_input(parentelement){
    const container = creatediv(parentelement, "container_etage_salle_input") //Création du conteneur pour les étages
    //-----Création de la div pour le titre de la partie-----
    const titre = creatediv(container, "etages_titre")
    titre.innerText = "Etage"

    const selecteur_etage_cours = document.createElement("select") //Création du menu déroulant pour le choix des étages de cours
    container.appendChild(selecteur_etage_cours) //L'ajouter au conteneur
    //-----Ajout de deux noms de class au selecteur-----
    selecteur_etage_cours.classList.add("selecteur")
    selecteur_etage_cours.classList.add("input_etage")
    //-----Ajout des boutons pour la séléction des étages-----
    for (i = 1; i <= 5; i++){
        createoption(selecteur_etage_cours, String(i))
    }

}


function creerlayoutrecherche(parentelement){
    if (textetitreactuel == "Planning d'une salle"){
        
        const nomdelasalle = createnomdelasalle(parentelement)
        const dateinput = createdateinput(parentelement)
        const recherchebutton = createrecherchebutton(parentelement)
        //ici, on peut gérer le style plus simplement

    } else if (textetitreactuel == "Salle à un temps précis"){

       const heuredecours = create_input_heure_de_cours(parentelement)
       const dateinput = createdateinput(parentelement)
       const recherchebutton = createrecherchebutton(parentelement)
       //ici, on peut gérer le style plus simplement

    } else if (textetitreactuel == "Salles par étages"){

        const heuredecours = create_input_heure_de_cours(parentelement)
        const dateinput = createdateinput(parentelement)
        const etageinput = create_etage_input(parentelement)
        const recherchebutton = createrecherchebutton(parentelement)
        //ici, on peut gérer le style beaucoup plus simplement

    }

}


//---------------------------------------ANIMATIONS, PRINCIPALEMENT POUR SLIDER SUR L'AXE Y--------------------------------------------




//fonction pour upadater le titre actuel du menu rechercher

function nouveautitretexte(direction){
    if (direction == "droite"){
        if (numerotexttitreactuel == listtitrespossibles.length-1){
            numerotexttitreactuel = 0
        } else {
            numerotexttitreactuel = numerotexttitreactuel+1
        }
    } else if (direction  == "gauche"){
        if(numerotexttitreactuel == 0){
            numerotexttitreactuel = listtitrespossibles.length-1
        } else {
            numerotexttitreactuel = numerotexttitreactuel -1
        }
    }
    textetitreactuel = listtitrespossibles[numerotexttitreactuel]
    return(textetitreactuel)
}
//function quand on glisse sur la droite


function glissersurladroite(slider, elementactuel, elementsuivant, position){

    potcasses = true
    slider.style.width = "100%"
    elementactuel.style.position = position
    elementsuivant.style.position = "absolute"
    elementsuivant.style.left = `${elementactuel.offsetWidth}px`
    slider.style.transition = "all 1s ease"
    slider.style.transform = `translate(-${elementactuel.offsetWidth}px)`

    setTimeout(() => {retournerpointdedépartapresslide(slider, elementactuel, elementsuivant);}, 1000)
}

//fonction pour qu'un élément glisse sur la gauche
function glissersurlagauche(slider, elementactuel, elementsuivant, position){

    slider.style.width = "100%"
    elementsuivant.style.position = "absolute"
    elementactuel.style.position = position
    elementsuivant.style.left = `-${elementactuel.offsetWidth}px`
    slider.style.transition = "all 1s ease"
    slider.style.transform = `translate(${elementactuel.offsetWidth}px)`
    setTimeout(() => {retournerpointdedépartapresslide(slider, elementactuel, elementsuivant);}, 1000)
}

//fonction pour terminer le glissement, et pouvoir en effectuer un directement après
function retournerpointdedépartapresslide(slider, elementactuel, elementsuivant){
        elementactuel.remove()    
        elementsuivant.style.position = "relative"
        elementsuivant.style.left = "0px"
        elementsuivant.style.top = `0px`
        slider.style.transition = "all 0s ease"
        slider.style.left = "0px"
        slider.style.top = "0px"
        slider.style.transform = `translate(0px)`
  
        potcasses = false
}


function glissersurlagaucherecherche(){
    if (potcasses == true){
        return
    }

    potcasses = true

    //content de tout ce qui sert
    const slider = document.getElementById("user_research")
    const titreactuel = document.getElementById("researchtitle")
    const nouveautitre = creatediv(slider, "researchtitle")

    nouveautitre.innerText = nouveautitretexte("gauche")
    glissersurlagauche(slider, titreactuel, nouveautitre, "relative")
    nouveautitre.setAttribute("id","researchtitle");

    //layout du contenu de la recherche
    const contenudelarecherche = document.getElementById("contenudelarecherche")
    const sliderducontenu = document.getElementById("content_research")
    const new_contenudelarecherche = creatediv(sliderducontenu, "contenudelarecherche")

    creerlayoutrecherche(new_contenudelarecherche)
    glissersurlagauche(sliderducontenu, contenudelarecherche, new_contenudelarecherche, "absolute")
    new_contenudelarecherche.setAttribute("id", "contenudelarecherche")
}


function glissersurladroiterecherche(){

    if (potcasses == true){
        return
    }

    potcasses = true

    const slider = document.getElementById("user_research")
    const titreactuel = document.getElementById("researchtitle")
    const nouveautitre = creatediv(slider, "researchtitle")
    // const nouveautitre = document.createElement("div")

    // slider.appendChild(nouveautitre)
    // nouveautitre.classList.add("researchtitle")
    nouveautitre.innerText = nouveautitretexte("droite")
    glissersurladroite(slider, titreactuel, nouveautitre, "relative")
    nouveautitre.setAttribute("id","researchtitle");


    const contenudelarecherche = document.getElementById("contenudelarecherche")
    const sliderducontenu = document.getElementById("content_research")
    const new_contenudelarecherche = creatediv(sliderducontenu, "contenudelarecherche")
    // const new_contenudelarecherche = document.createElement("div")

    // sliderducontenu.appendChild(new_contenudelarecherche)
    // new_contenudelarecherche.classList.add("contenudelarecherche")
    creerlayoutrecherche(new_contenudelarecherche)
    glissersurladroite(sliderducontenu, contenudelarecherche, new_contenudelarecherche, "absolute")
    new_contenudelarecherche.setAttribute("id", "contenudelarecherche")
}

//--------------------------------LA REPONSE FOIREUSE CÔTE SERVEUR DE LA RECHERCHE-----------------------------------------


//-----Affichage du planing d'une salle-----
function creerlayoutplanningsalle(parentelement){
    //-----Supprimer les anciens container-----
    const possiblecontainer = document.getElementsByClassName("container_planning_salle") //Récupérer l'élément qui se nomme --> container_planning_salle
    //-----Suppression de l'élément si il est présent-----
    if (possiblecontainer.length > 0){
        possiblecontainer[0].remove()
    }

    //-----Création du nouveau layout avec toutes les informations-----
    const container = creatediv(parentelement, "container_planning_salle") //Création du conteneur qui contiendra le calendrier de la journée de la salle
    const nom_salle = document.getElementsByClassName("inputnomdelasalle")[0].value //Récupération du nom de la salle avec le selecteur
    const datedegueu = document.getElementsByClassName("form-control")[0].value.split(" ") //Récupération de la date
    
    const date = [parseInt(datedegueu[0]), moisenfonctionnom(datedegueu[1]), parseInt(datedegueu[2])]
    console.log(date)
    
    const paireimpaires = paireimpaire(date) //Récupérer la semaine en question (A ou B)
    const jour = joursemaine(date) //Récupérer le jour de la semaine

    const salle = findsalle(nom_salle) //Récupération de toutes les informations de la salle concerné
    const arrayatrier = salle.planning[jour] //Récupération de toutes les informations du calendrier de la journée

    let newarray = []
    //-----Ecrire correctement en fonction des semaines l'emploi du temps dans la liste --> newarray-----
    if (paireimpaires == "A"){ //Si on est en semaine A
        for (let i =0; i<arrayatrier.length; i++){
            if (arrayatrier[i] == 0 || arrayatrier[i] == 6){
                newarray.push(0)
            } else {
                newarray.push(1)
            }
        }
    } else if (paireimpaires == "B"){
        for (let i =0; i<arrayatrier.length; i++){
            if (arrayatrier[i] == 0 || arrayatrier[i] == 4){
                newarray.push(0)
            } else {
                newarray.push(1)
            }
        }
    }
    
    //-----Ajout des éléments à la page-----
    for (let i = 0; i<newarray.length; i++){
        if (newarray[i] == 0){ //Si la salle est libre
            const container_heure = creatediv(container, "container_planning")
            const horaire = creatediv(container_heure, "horaire")
            horaire.innerText = ListeHeures[i]
            horaire.style.fontSize = "25px"
            const parent_text = creatediv(container_heure, "vert")
            parent_text.style.width = "100%"
            parent_text.style.left = "20px"
            parent_text.style.position = "relative"
        } else if (newarray[i] == 1){ //Si la salle est prise
            const container_heure = creatediv(container, "container_planning")
            const horaire = creatediv(container_heure, "horaire")
            horaire.innerText = ListeHeures[i]
            horaire.style.fontSize = "25px"
            const parent_text = creatediv(container_heure, "rouge")
            parent_text.style.width = "100%"
            parent_text.style.left = "20px"
            parent_text.style.position = "relative"
        }
    }

}

//-----Affichage de toutes les salles disponibles à une heure précise-----
function creerlayoutsallestempsprecis(parentelement){
    const possiblecontainer = document.getElementsByClassName("container_salles_temps_precis")
    if (possiblecontainer.length >0){
        possiblecontainer[0].remove()
    }
    const container = creatediv(parentelement, "container_salles_temps_precis")
    const heuredecours = heuredecoursfonctionstring(document.getElementsByClassName("inputheuredecours")[0].value)

    const datedegueu = document.getElementsByClassName("form-control")[0].value.split(" ")
    const date = [parseInt(datedegueu[0]), moisenfonctionnom(datedegueu[1]), parseInt(datedegueu[2])]

    const sallesdisponibles = sallesdispo(date, heuredecours)

    for (let i = 0; i<sallesdisponibles.length; i++){
        creerlayoutsallemodel(sallesdisponibles[i], container)
    }
}

//-----Affichage de toutes les salles disponibles à une heure précise à un étage précis-----
function creerlayoutsallesfonctionetage(parentelement){
    const possiblecontainer = document.getElementsByClassName("container_salles_fonction_etage") //Récupération des informations sur la div pour les étages
    //-----Suppression de la div pour les salles par étages s'il y en avait déjà-----
    if (possiblecontainer.length >0){
        possiblecontainer[0].remove()
    }

    const container = creatediv(parentelement, "container_salles_fonction_etage") //Création de la div pour ajouter les informations
    
    const heuredecours = heuredecoursfonctionstring(document.getElementsByClassName("inputheuredecours")[0].value) //Récupération de l'heure de cours
    const datedegueu = document.getElementsByClassName("form-control")[0].value.split(" ")
    const date = [parseInt(datedegueu[0]), moisenfonctionnom(datedegueu[1]), parseInt(datedegueu[2])]
    const etage = document.getElementsByClassName("input_etage")[0].value

    const sallesdisponibles = sallesdispo(date, heuredecours)
    let sallestriees = []

    for (let i = 0; i<sallesdisponibles.length; i++){ 
        if (sallesdisponibles[i].name.split("")[2] == etage){
            sallestriees.push(sallesdisponibles[i])        
        }
    }
    
    for (let i = 0; i<sallestriees.length; i++){
        creerlayoutsallemodel(sallestriees[i], container)
    }
}


//-----Fonction qui met à jour les informations quand le bouton de recherche est pressé | Voir fonction createrecherchebutton-----
function recherchelayout(parentelement){
    //-----Afficher le planing d'une salle-----
    if (textetitreactuel == "Planning d'une salle"){
        creerlayoutplanningsalle(parentelement)
    //-----Afficher le planing d'une salle à un temps précis-----
    } else if (textetitreactuel == "Salle à un temps précis"){
        creerlayoutsallestempsprecis(parentelement)
    //-----Afficher le planing de toutes les salles libres à un étage-----
    } else if (textetitreactuel == "Salles par étages"){
        creerlayoutsallesfonctionetage(parentelement)
    }
}

//-------------------------------------------------EVENT LISTENER-----------------------------------------------------------

//initialisation des heures proprement
const ListeHeures = ["08h20", "09h15", "10h30", "11h25", "12h20", "13h15", "14h10", "15h05", "16h15", "17h10", "18h05", "19h00"]

//ajout des event listener, pour que ce soit dynamique quand on clique

creerlayoutrecherche(document.getElementById("contenudelarecherche"))

const flechedroite = document.getElementById("flechedroite")
const flechegauche = document.getElementById("flechegauche")

flechedroite.addEventListener('click', glissersurladroiterecherche, false);
flechegauche.addEventListener('click', glissersurlagaucherecherche, false);


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#close_information_compost').addEventListener('click', function() {
        document.querySelector('#information_supplemantaire').style.display = "none";
    });
    document.querySelector('#information_supplemantaire').style.display = "none";
});

function More_Information_Salle(item) {
    document.querySelector('#information_supplemantaire').style.display = "block";
    let div_image_container = document.getElementById("img_salle")
    div_image_container.innerHTML = ""
    
    let div_image = document.createElement("img") //Création de la div pour l'image
    div_image_container.appendChild(div_image)
    div_image.classList.add("image-left") //Ajout d'une class à la div de l'image
    
    div_image.src = `images/grosses_images/${String(item).toLowerCase()}.jpg`

    let div_info_container = document.getElementById("information_salle_gauche")
    div_info_container.innerHTML = ""
    
    let get_element_salle = findsalle(item)
    
    Information_Note(div_info_container, get_element_salle)
    //-----En travail-----
    //Information_Disponibilite(div_info_container, get_element_salle)
    //Information_Duree(div_info_container, get_element_salle)

    div_info_container = document.getElementById("description_salle")
    div_info_container.innerHTML = ""

    Description_Objective(div_info_container, get_element_salle)
    Description_Subjective(div_info_container, get_element_salle)
    
    div_info_container = document.getElementById("emploi-temps-salle-more")
    div_info_container.innerHTML = ""

    Emploi_Du_Temps_More(div_info_container, get_element_salle, )
}

//-----A factoriser pour plus de simplicité-----
function Information_Note(div_info_container, _salle) {
    fr_div = creatediv(div_info_container, "")
    let element = document.createElement("h2") //Création de la div pour l'image
    fr_div.appendChild(element)
    element.innerHTML  = "Note" //Ajout d'une class à la div de l'image
    element = document.createElement("br") //Création de la div pour l'image
    fr_div.appendChild(element)
    element = document.createElement("p") //Création de la div pour l'image
    fr_div.appendChild(element)
    element.innerHTML  = _salle.note //Ajout d'une class à la div de l'image
}

function Information_Disponibilite(div_info_container, _salle) {
    fr_div = creatediv(div_info_container, "")
    element = document.createElement("h2") //Création de la div pour l'image
    fr_div.appendChild(element)
    element.innerHTML  = "Disponibilité" //Ajout d'une class à la div de l'image
    element = document.createElement("br") //Création de la div pour l'image
    fr_div.appendChild(element)
    element = document.createElement("p") //Création de la div pour l'image
    fr_div.appendChild(element)
    if (_salle.disponibilite == false) {
        element.innerHTML  = "Salle occupée" //Ajout d'une class à la div de l'image
    }
    else {
        element.innerHTML  = "Salle Libre" //Ajout d'une class à la div de l'image
    }
}

function Information_Duree(div_info_container, _salle) {
    fr_div = creatediv(div_info_container, "")
    element = document.createElement("h2") //Création de la div pour l'image
    fr_div.appendChild(element)
    element.innerHTML  = "Durée restante" //Ajout d'une class à la div de l'image
    element = document.createElement("br") //Création de la div pour l'image
    fr_div.appendChild(element)
    element = document.createElement("p") //Création de la div pour l'image
    fr_div.appendChild(element)
    element.innerHTML  = _salle.temps //Ajout d'une class à la div de l'image
}

function Description_Objective(div_info_container, _salle) {
    fr_div = creatediv(div_info_container, "")
    fr_div.classList.add("text1")
    element = document.createElement("h2") //Création de la div pour l'image
    fr_div.appendChild(element)
    element.innerHTML  = "Déscription de la salle" //Ajout d'une class à la div de l'image
    element = document.createElement("br") //Création de la div pour l'image
    fr_div.appendChild(element)
    element = document.createElement("p") //Création de la div pour l'image
    fr_div.appendChild(element)
    element.innerHTML  = _salle.description //Ajout d'une class à la div de l'image
}

function Description_Subjective(div_info_container, _salle) {
    fr_div = creatediv(div_info_container, "")
    fr_div.classList.add("text2")
    element = document.createElement("h2") //Création de la div pour l'image
    fr_div.appendChild(element)
    element.innerHTML  = "Déscription de l'ambiance" //Ajout d'une class à la div de l'image
    element = document.createElement("br") //Création de la div pour l'image
    fr_div.appendChild(element)
    element = document.createElement("p") //Création de la div pour l'image
    fr_div.appendChild(element)
    element.innerHTML  = _salle.reference //Ajout d'une class à la div de l'image
}

function Emploi_Du_Temps_More(parentelement, salle) {

    //-----Création du nouveau layout avec toutes les informations-----
    const container = creatediv(parentelement, "container_planning_salle") //Création du conteneur qui contiendra le calendrier de la journée de la salle
    const datedegueu = new Date()
    const date = [parseInt(datedegueu.getDate()), parseInt(datedegueu.getMonth()), parseInt(datedegueu.getFullYear())]
    console.log(datedegueu.getMonth())
    
    const paireimpaires = paireimpaire(date) //Récupérer la semaine en question (A ou B)
    const jour = joursemaine(date) //Récupérer le jour de la semaine

    const arrayatrier = salle.planning[jour] //Récupération de toutes les informations du calendrier de la journée
    console.log(date, paireimpaires, jour, salle, arrayatrier)
    
    let newarray = []
    //-----Ecrire correctement en fonction des semaines l'emploi du temps dans la liste --> newarray-----
    if (paireimpaires == "A"){ //Si on est en semaine A
        for (let i =0; i<arrayatrier.length; i++){
            if (arrayatrier[i] == 0 || arrayatrier[i] == 6){
                newarray.push(0)
            } else {
                newarray.push(1)
            }
        }
    } else if (paireimpaires == "B"){
        for (let i =0; i<arrayatrier.length; i++){
            if (arrayatrier[i] == 0 || arrayatrier[i] == 4){
                newarray.push(0)
            } else {
                newarray.push(1)
            }
        }
    }
    
    //-----Ajout des éléments à la page-----
    for (let i = 0; i<newarray.length; i++){
        if (newarray[i] == 0){ //Si la salle est libre
            const container_heure = creatediv(container, "container_planning")
            const horaire = creatediv(container_heure, "horaire")
            horaire.innerText = ListeHeures[i]
            horaire.style.fontSize = "25px"
            const parent_text = creatediv(container_heure, "vert")
            parent_text.style.width = "100%"
            parent_text.style.left = "20px"
            parent_text.style.position = "relative"
        } else if (newarray[i] == 1){ //Si la salle est prise
            const container_heure = creatediv(container, "container_planning")
            const horaire = creatediv(container_heure, "horaire")
            horaire.innerText = ListeHeures[i]
            horaire.style.fontSize = "25px"
            const parent_text = creatediv(container_heure, "rouge")
            parent_text.style.width = "100%"
            parent_text.style.left = "20px"
            parent_text.style.position = "relative"
        }
    }

}

function Calcul_Temps_Restant(_salle) {
    let temps_restant = ""
    const datedegueu = new Date()
    

    if (_salle.disponibilite == false) {
        return "Plus de templs, salle indisponible"
    }


}