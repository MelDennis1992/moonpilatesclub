/**
 * Moon Pilates Club — Lausanne
 * Dictionnaire bilingue (Français / Anglais) & Gestionnaire de langue
 */

const translations = {
  fr: {
    // Announcement & Nav
    "announcement_text": "✨ Journée portes ouvertes / inauguration le samedi 17 octobre 2026 ! 🌙",
    "nav_concept": "À propos",
    "nav_cours": "Cours",
    "nav_coachs": "Coachs",
    "nav_forfaits": "Formules",
    "nav_sub_decouverte": "Séance découverte",
    "nav_sub_abonnements": "Abonnements",
    "nav_sub_prives": "Séances privées",
    "nav_prives": "Cours Privés",
    "nav_cadeaux": "Bons Cadeaux",
    "nav_cafe": "Moon Café",
    "nav_planning": "Planning",
    "nav_acces": "Accès au studio",
    "nav_contact": "Contact",
    "nav_reserver": "Réserver",

    // Hero
    "hero_title": "<em>Lagree</em><br/>& pilates",
    "hero_sub": "Lagree · Reformer · Pilates Mat · Sculpt · Barre · Yoga<br/>Petits groupes de 6 personnes maximum",
    "hero_btn_tarifs": "Découvrir les formules",
    "hero_btn_cours": "Nos cours →",
    "hero_scroll": "Défiler",

    // Ticker
    "ticker_item_1": "6 disciplines · Lagree — Reformer — Pilates Mat — Sculpt — Barre — Yoga",
    "ticker_item_2": "Petits groupes · Encadrement premium",
    "ticker_item_3": "Moon Café · Specialty Coffee & Matcha",
    "ticker_item_4": "Galeries Benjamin-Constant · Lausanne",

    // Concept / About
    "concept_label": "Notre concept",
    "concept_title": "Bienvenue chez<br/><em>Moon Club</em>",
    "concept_p1": "Notre centre est un <strong>lieu dédié au mouvement, au bien-être et à la performance</strong>, vous proposant une approche globale et équilibrée à travers <strong>6 disciplines complémentaires</strong> : Lagree, Pilates Reformer, Pilates Mat, Sculpt, Barre et Yoga.",
    "concept_p2": "Toutes nos disciplines sont <strong>à faible impact pour vos articulations</strong>. Elles allient renforcement profond, mobilité, posture et tonicité musculaire, pour sculpter et renforcer votre corps en toute sécurité.",
    "concept_p3": "Tous nos cours se déroulent en <strong>petits groupes de 6 personnes maximum</strong>, garantissant un encadrement d'exception et une attention sur-mesure.",
    "badge_groups": "Petits groupes",
    "badge_cafe": "Moon Café",
    "badge_coachs": "Coachs experts",
    "card_6disc_title": "6 disciplines<br/><em>complémentaires</em>",
    "card_6disc_desc": "Une offre complète et variée pour sculpter, tonifier et renforcer votre corps tout en préservant vos articulations.",
    "card_6disc_link": "Découvrir nos cours →",
    "stat_max": "max par cours",
    "stat_duration": "par séance",
    "stat_disciplines": "disciplines",

    // Cours / Disciplines
    "cours_label": "Nos disciplines",
    "cours_title": "Des cours pour<br/><em>chaque objectif</em>",
    "lagree_title": "Lagree",
    "lagree_desc": "Entraînement intense sur Microformer. Gainage, endurance et tonicité musculaire au rendez-vous.",
    "lagree_tag1": "Tous niveaux",
    "lagree_tag2": "50 min",
    "lagree_tag3": "6 pers. max",

    "reformer_title": "Pilates Reformer",
    "reformer_desc": "Posture, mobilité et renforcement profond sur le Reformer. Idéal pour sculpter le corps en douceur et sans choc.",
    "reformer_tag1": "Tous niveaux",
    "reformer_tag2": "50 min",
    "reformer_tag3": "6 pers. max",

    "mat_title": "Pilates Mat",
    "mat_desc": "Les fondamentaux du Pilates au sol revisités à travers une méthode contemporaine. Respiration, centrage et renforcement profond pour développer posture et mobilité.",
    "mat_tag1": "Fondamentaux & Contemporain",
    "mat_tag2": "50 min",
    "mat_tag3": "6 pers. max",

    "sculpt_title": "Sculpt",
    "sculpt_desc": "Un cours dynamique combinant les principes du Pilates et un travail de renforcement ciblé pour tonifier et sculpter le corps.",
    "sculpt_tag1": "Tous niveaux",
    "sculpt_tag2": "50 min",
    "sculpt_tag3": "6 pers. max",

    "barre_title": "Barre",
    "barre_desc": "Inspiré de la danse, ce cours sculpte et allonge la silhouette avec des mouvements précis et élégants, sans choc articulaire.",
    "barre_tag1": "Tous niveaux",
    "barre_tag2": "50 min",
    "barre_tag3": "6 pers. max",

    "yoga_title": "Yoga",
    "yoga_desc": "Retrouvez nos cours de Hatha et Power Yoga. Flexibilité, équilibre et dynamisme pour harmoniser le corps et l'esprit.",
    "yoga_tag1": "Hatha & Power Yoga",
    "yoga_tag2": "50 min",
    "yoga_tag3": "6 pers. max",

    "workshops_title": "Ateliers & Workshops",
    "workshops_desc": "Des workshops thématiques pour approfondir votre pratique et rencontrer la communauté Moon Club.",
    "workshops_tag1": "Programme à venir",
    "workshops_tag2": "Inclus Full Moon",
    "btn_view_planning": "Voir le planning complet",

    // Coachs
    "coachs_label": "L'équipe Moon",
    "coachs_title": "Nos <em>Coachs</em>",
    "coachs_subtitle": "Des enseignantes passionnées et certifiées, dédiées à votre progression, votre alignement et votre bien-être au studio.",
    "badge_coach_moon": "Coach Moon Club",
    "badge_coach_6disc": "Coach · 6 Disciplines",
    "coach_hover": "Voir le profil & bio →",
    "btn_discover_profile": "Découvrir son profil & bio →",
    "coach_callout_title": "Vous souhaitez un accompagnement sur-mesure ?",
    "coach_callout_desc": "Nos coachs sont également disponibles pour des séances individuelles privées ou en duo.",
    "btn_discover_private": "Découvrir le coaching privé",

    // Tarifs Découverte
    "dec_label": "Premiers pas",
    "dec_title": "Séances <em>Découverte</em>",
    "dec_sub": "Curieux·se de tester nos cours ? Venez découvrir le studio dans un cadre moderne et convivial, sans prérequis.",
    "dec_top_badge": "⭐ Le Plus Choisi",
    "dec_card1_title": "1 séance",
    "dec_card1_tagline": "Pour une première découverte",
    "dec_card1_unit": "CHF 35.- / cours",
    "dec_btn1": "Réserver ma séance",

    "dec_card2_title": "2 séances",
    "dec_card2_tagline": "Pour confirmer le coup de cœur",
    "dec_card2_unit": "CHF 30.- / cours",
    "dec_btn2": "Réserver mes 2 séances",

    "dec_card3_title": "3 séances",
    "dec_card3_tagline": "Pour vraiment ressentir les effets",
    "dec_card3_unit": "CHF 28,3 / cours",
    "dec_btn3": "Réserver mes 3 séances",

    "dec_f1": "✓ Présentation du studio & des machines",
    "dec_f2": "✓ Séance guidée (max. 6 personnes)",
    "dec_f3": "✓ Conseils personnalisés selon votre niveau",
    "dec_f4": "✓ Accès Moon Café après le cours",
    "dec_f5": "✓ Aucun prérequis nécessaire",

    // Formules / Forfaits
    "forfaits_label": "Nos forfaits",
    "forfaits_title": "Choisissez votre<br/><em>formule</em>",
    "forfaits_sub": "6 disciplines · Lausanne",
    "forfaits_gel_badge": "❄️ <strong>Avantage inclus :</strong> 1 mois de gel offert sans frais sur tous nos forfaits",
    "badge_popular": "Plus Populaire",
    "badge_best_price": "Meilleur Prix",
    "toggle_6m": "6 mois",
    "toggle_12m": "12 mois",
    "forfait_f_gel": "✓ 1 mois de gel offert sans frais",

    "newmoon_name": "New Moon",
    "newmoon_tagline": "Pour commencer en douceur",
    "newmoon_f1": "✓ 4 cours par mois",
    "newmoon_f2": "✓ 6 disciplines complémentaires",
    "newmoon_f3": "Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "newmoon_f4": "✓ Rabais sur ateliers",
    "newmoon_f5": "✓ -10% sur vos boissons Moon Café",
    "btn_choose_newmoon": "Choisir New Moon",

    "halfmoon_name": "Half Moon",
    "halfmoon_tagline": "Pour pratiquer régulièrement",
    "halfmoon_f1": "✓ 8 cours par mois",
    "halfmoon_f2": "✓ 6 disciplines complémentaires",
    "halfmoon_f3": "Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "halfmoon_f4": "✓ Rabais sur ateliers",
    "halfmoon_f5": "✓ -10% sur vos boissons Moon Café",
    "btn_choose_halfmoon": "Choisir Half Moon",

    "fullmoon_name": "Full Moon",
    "fullmoon_tagline": "Pour les plus passionnées",
    "fullmoon_per": "Séances illimitées · <strong>~14 CHF / séance*</strong>",
    "fullmoon_f1": "✓ 1 cours par jour max",
    "fullmoon_f2": "✓ 6 disciplines complémentaires",
    "fullmoon_f3": "Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "fullmoon_f4": "✓ Rabais exclusif sur ateliers",
    "fullmoon_f5": "✓ -10% sur vos boissons Moon Café",
    "fullmoon_eng": "Engagement 3 mois minimum<br/><span style=\"font-size:0.75rem; opacity:0.75; font-style:italic;\">*Sur une base de 24 séances par mois</span>",
    "btn_choose_fullmoon": "Choisir Full Moon",

    "annual_name": "Annuel",
    "annual_tagline": "Flexibilité maximale",
    "annual_valid": "Valide 1 an · Paiement unique",
    "btn_choose_annual": "Choisir Annuel",

    // Cours Privés
    "prives_label": "🤍 Sessions Privées ✨",
    "prives_title": "Coaching <em>Privé</em>",
    "prives_desc": "Un accompagnement 100 % sur mesure pour atteindre vos objectifs. Nos sessions privées de 50 minutes vous offrent un encadrement exclusif, adapté à votre niveau, votre condition physique et vos envies du moment. 🧘‍♀️",
    "prives_disc": "<strong>Discipline au choix :</strong> Lagree · Reformer · Mat Pilates · Sculpt · Barre · Hatha Yoga · Power Yoga 🌿",
    "badge_priv_custom": "Sur-mesure & Posture ciblée",
    "badge_priv_flex": "Créneaux Flexibles (Heures creuses)",
    "badge_priv_cafe": "Espace Moon Café pour débriefer",
    "tab_solo": "👤 Moon Solo",
    "tab_duo": "👥 Moon Duo",
    
    // Solo
    "solo_1_name": "1 séance Solo",
    "solo_1_tag": "50 min d'attention exclusive & personnalisée",
    "solo_1_f1": "✓ 50 minutes en tête-à-tête avec votre coach",
    "solo_1_f2": "✓ 1 discipline au choix parmi les 6",
    "solo_1_f3": "✓ Correction posturale & intensité 100% adaptée",
    "solo_1_f4": "✓ Idéal pour débuter ou cibler un objectif précis",
    "solo_1_f5": "✓ Espace Moon Café accessible après votre cours",
    "btn_solo_1": "Réserver 1 cours Solo",

    "solo_5_name": "Pack 5 séances",
    "solo_5_tag": "Pour un suivi régulier et des progrès rapides",
    "solo_5_f1": "✓ 5 séances privées de 50 minutes",
    "solo_5_f2": "✓ Programme évolutif selon vos objectifs",
    "solo_5_f3": "✓ Combinez vos disciplines préférées",
    "solo_5_f4": "✓ Créneaux réservés selon vos disponibilités",
    "solo_5_f5": "✓ Débriefing & détente au Moon Café",
    "btn_solo_5": "Choisir le pack 5 Solo",

    "solo_10_name": "Pack 10 séances",
    "solo_10_tag": "L'immersion complète pour des résultats durables",
    "solo_10_f1": "✓ 10 séances privées de 50 minutes",
    "solo_10_f2": "✓ Accompagnement sur mesure continu",
    "solo_10_f3": "✓ Accès libre à l'ensemble des 6 disciplines",
    "solo_10_f4": "✓ Flexibilité maximale de réservation",
    "solo_10_f5": "✓ Espace lounge & Moon Café après vos cours",
    "btn_solo_10": "Choisir le pack 10 Solo",

    // Duo
    "duo_1_name": "1 séance Duo",
    "duo_1_tag": "Partagez l'expérience à deux avec votre coach",
    "duo_1_f1": "✓ 50 minutes en binôme avec votre coach",
    "duo_1_f2": "✓ Avec un ami, un proche ou votre partenaire",
    "duo_1_f3": "✓ Séance adaptée aux niveaux des 2 personnes",
    "duo_1_f4": "✓ 1 discipline au choix parmi les 6",
    "duo_1_f5": "✓ Moment convivial au Moon Café après la séance",
    "btn_duo_1": "Réserver 1 cours Duo",

    "duo_5_name": "Pack 5 séances Duo",
    "duo_5_tag": "Motivation et régularité partagées en duo",
    "duo_5_f1": "✓ 5 séances privées en duo (50 min)",
    "duo_5_f2": "✓ Progression en binôme motivante & sur mesure",
    "duo_5_f3": "✓ Toutes les disciplines disponibles",
    "duo_5_f4": "✓ Créneaux réservés selon vos disponibilités",
    "duo_5_f5": "✓ Espace Moon Café accessible après l'effort",
    "btn_duo_5": "Choisir le pack 5 Duo",

    "duo_10_name": "Pack 10 séances Duo",
    "duo_10_tag": "Le tarif le plus avantageux pour pratiquer à deux",
    "duo_10_f1": "✓ 10 séances privées en duo (50 min)",
    "duo_10_f2": "✓ Le tarif le plus bas par séance et par personne",
    "duo_10_f3": "✓ Encadrement sur mesure complet et régulier",
    "duo_10_f4": "✓ Flexibilité de réservation sur l'année",
    "duo_10_f5": "✓ Espace détente & Moon Café après vos cours",
    "btn_duo_10": "Choisir le pack 10 Duo",

    // Bons Cadeaux
    "cadeaux_label": "Offrir",
    "cadeaux_title": "Bons <em>Cadeaux</em>",
    "cadeaux_desc": "Envie d'offrir un vrai moment pour soi ? Avec nos cartes cadeaux, faites découvrir l'univers Moon Club : 3 séances découverte, coaching privé ou déductible sur un abonnement annuel pour renforcer le corps, améliorer la posture et se sentir bien. Accessible à tous les niveaux, dans un studio moderne et inspirant.",
    "cadeaux_sub": "💐 Pour un anniversaire, un Noël, une occasion spéciale... ou juste pour faire plaisir.",
    "badge_lausanne": "À Lausanne",
    "badge_validity": "Valable 1 an",
    "badge_format": "Version papier ou digitale",
    "btn_gift_card": "Offrir cette carte",
    "cad_name_85": "Carte Cadeau 3 Séances Découverte",
    "cad_tag_85": "L'expérience complète à offrir",
    "cad_per_85": "Utilisable sur les 3 séances découvertes",
    "cad_f1_85": "✓ Utilisable sur les 3 séances découvertes",
    "cad_name_150": "Carte Cadeau CHF 150.-",
    "cad_tag_150": "Liberté de choisir",
    "cad_badge_150": "Idéal pour débuter",
    "cad_name_250": "Carte Cadeau CHF 250.-",
    "cad_tag_250": "Un vrai moment de bien-être",
    "cad_name_350": "Carte Cadeau CHF 350.-",
    "cad_tag_350": "Le cadeau premium",
    "cad_per_private": "Utilisable sur les séances privées & abonnements annuels",
    "cad_f1_private": "✓ Utilisable sur les séances privées & abonnements annuels",
    "cad_f2_all": "✓ 6 disciplines complémentaires",
    "cad_f3_all": "Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "cad_f4_all": "✓ Accès Moon Café inclus",
    "cad_f5_all": "✓ Valable 1 an",

    // Moon Café
    "cafe_label": "🍵 & ☕ Bar à Café & Matcha",
    "cafe_title": "Moon <em>Café</em>",
    "cafe_sub": "Un espace chaleureux au cœur de Lausanne pour savourer des matchas de grade cérémonial et cafés de spécialité. Avant ou après votre cours, ou simplement pour une pause bienfaisante dans votre journée.",
    "cafe_feat1_title": "Matcha Cérémonial",
    "cafe_feat1_desc": "Matcha d'exception préparé minute (Pure, Vanilla, Caramel, Coconut, Mango), chaud ou glacé.",
    "cafe_feat2_title": "Specialty Coffee",
    "cafe_feat2_desc": "Grains de café sélectionnés et extractions soignées : Espresso, Cortado, Flat White, Freddo et Iced Latte.",
    "cafe_feat3_title": "Lait au Choix",
    "cafe_feat3_desc": "Lait de vache suisse ou alternatives végétales de qualité (avoine barista bio, etc.).",
    "cafe_feat4_title": "10% de Rabais Membres",
    "cafe_feat4_desc": "Avantage exclusif inclus pour tous les membres de Moon Pilates Club sur l'ensemble de la carte.",
    "cafe_menu_tagline": "Bar à Café & Matcha",
    "cafe_menu_title": "Menu Moon Café",
    "cafe_menu_discount": "10% de rabais pour nos membres",
    "cafe_cat_coffee": "Coffee",
    "cafe_cat_matcha": "Matcha",
    "cafe_opt_supp": "Supplément : 0,50 CHF",
    "cafe_opt_milk": "Au choix : Lait de vache ou végétal",
    "cafe_menu_note": "☕ & 🍵 Préparé avec passion · Sur place ou à emporter · Galeries Benjamin-Constant 1, Lausanne",
    "cafe_badge_bar": "🍵 Bar à Matcha & Café",
    "cafe_badge_ambiance": "🤍 Espace Détente & Convivialité",
    "cafe_banner_title": "Ouvert à tous · Avec ou sans séance",
    "cafe_banner_desc": "Galeries Benjamin-Constant 1, Lausanne · Espace lounge chaleureux.",
    "cafe_view_flyer": "🔍 Agrandir le flyer",
    "cafe_banner_btn": "Voir les horaires & accès →",
    "cafe_block_menu_title": "Menu & Tarifs",
    "cafe_block_gallery_title": "Galerie & Ambiance",
    "cafe_slide_matcha": "🍵 Matcha Cérémonial · Préparation minute au chasen",
    "cafe_slide_espresso": "☕ Specialty Coffee · Extraction d'espresso pure origine",
    "cafe_slide_latte": "🥛 Latte Art & Laits Végétaux · Avoine barista bio ou lait entier",
    "cafe_slide_lounge": "🌿 Espace Lounge · Vue panoramique sur Lausanne & le lac",

    // Planning
    "planning_label": "Horaires des cours",
    "planning_title": "Notre <em>Planning</em>",
    "planning_sub": "Réservez vos cours en ligne parmi nos 6 disciplines. Sélectionnez votre créneau ci-dessous.",

    // App Mobile
    "app_label": "Application officielle",
    "app_title": "TÉLÉCHARGEZ<br/>L'APPLICATION MOBILE",
    "app_desc": "L'application mobile <strong>Moon Pilates Club</strong> vous permet de gérer votre planning de cours en toute simplicité. Une organisation optimisée pour une expérience encore plus fluide.",
    "store_dl_app": "Télécharger dans",
    "store_app_store": "l’App Store",
    "store_dl_google": "DISPONIBLE SUR",
    "store_google_play": "Google Play",

    // FAQ
    "faq_label": "Questions fréquentes",
    "faq_title": "Tout ce que vous<br/><em>devez savoir</em>",

    // Contact
    "contact_label": "Nous trouver",
    "contact_title": "Venez nous<br/><em>rendre visite</em>",
    "lbl_address": "Adresse",
    "lbl_phone": "Téléphone",
    "lbl_contact": "Contact",
    "lbl_cafe_hours": "Horaires d'ouverture",
    "lbl_social": "Réseaux sociaux",
    "form_title": "Envoyez-nous un message",
    "form_lbl_name": "Votre prénom",
    "form_lbl_email": "Email",
    "form_lbl_msg": "Message",
    "form_ph_name": "Luna",
    "form_ph_email": "luna@email.com",
    "form_ph_msg": "Votre message...",
    "btn_send_msg": "Envoyer le message",
    "msg_sent_success": "Message envoyé ! Nous vous répondrons très vite.",

    // Access
    "access_title": "Accès au studio",
    "access_sub": "Galeries Benjamin-Constant 1, 6ème étage · 1003 Lausanne",
    "acc_m2_title": "Métro M2",
    "acc_m2_desc": "Arrêt <em>Bessières</em> (à 2 min à pied)",
    "acc_bus_title": "Lignes de Bus",
    "acc_bus_desc": "Arrêts <em>Benjamin-Constant</em> (13 & 16) ou <em>St-François</em>",
    "acc_park_title": "Parking",
    "acc_park_desc": "Hôtel de la Paix (ext./souterrain) ou rue (3 CHF/h)",
    "acc_mark_title": "Repère",
    "acc_mark_desc": "Juste en face du restaurant <strong>Luigia&nbsp;!</strong>",

    // Footer
    "footer_tagline": "Studio lausannois · 6 disciplines<br/>Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "footer_rights": "© 2026 Moon Pilates Club · Lausanne · Tous droits réservés ·",
    "footer_cgv": "CGV"
  },

  en: {
    // Announcement & Nav
    "announcement_text": "✨ Open House / Inauguration on Saturday, October 17, 2026! 🌙",
    "nav_concept": "About",
    "nav_cours": "Classes",
    "nav_coachs": "Coaches",
    "nav_forfaits": "Pricing",
    "nav_sub_decouverte": "Discovery Session",
    "nav_sub_abonnements": "Memberships",
    "nav_sub_prives": "Private Sessions",
    "nav_prives": "Private Sessions",
    "nav_cadeaux": "Gift Cards",
    "nav_cafe": "Moon Café",
    "nav_planning": "Schedule",
    "nav_acces": "Studio Access",
    "nav_contact": "Contact",
    "nav_reserver": "Book Now",

    // Hero
    "hero_title": "<em>Lagree</em><br/>& pilates",
    "hero_sub": "Lagree · Reformer · Pilates Mat · Sculpt · Barre · Yoga<br/>Small groups of 6 people maximum",
    "hero_btn_tarifs": "Discover Pricing & Plans",
    "hero_btn_cours": "Our Classes →",
    "hero_scroll": "Scroll",

    // Ticker
    "ticker_item_1": "6 disciplines · Lagree — Reformer — Pilates Mat — Sculpt — Barre — Yoga",
    "ticker_item_2": "Small groups · Premium coaching",
    "ticker_item_3": "Moon Café · Specialty Coffee & Matcha",
    "ticker_item_4": "Galeries Benjamin-Constant · Lausanne",

    // Concept / About
    "concept_label": "Our Concept",
    "concept_title": "Welcome to<br/><em>Moon Club</em>",
    "concept_p1": "Our studio is a <strong>sanctuary dedicated to movement, wellness, and athletic performance</strong>, offering a comprehensive, balanced approach through <strong>6 complementary disciplines</strong>: Lagree, Pilates Reformer, Pilates Mat, Sculpt, Barre, and Yoga.",
    "concept_p2": "All our disciplines are <strong>low-impact on joints</strong>. They combine deep core strengthening, mobility, posture refinement, and muscle toning to sculpt and strengthen your body safely.",
    "concept_p3": "All classes are held in <strong>small groups of up to 6 people</strong>, ensuring exceptional personal guidance and bespoke attention.",
    "badge_groups": "Small Groups (6 max)",
    "badge_cafe": "Moon Café",
    "badge_coachs": "Expert Coaches",
    "card_6disc_title": "6 complementary<br/><em>disciplines</em>",
    "card_6disc_desc": "A complete and varied offering to sculpt, tone, and strengthen your body while preserving joint health.",
    "card_6disc_link": "Discover our classes →",
    "stat_max": "max per class",
    "stat_duration": "per session",
    "stat_disciplines": "disciplines",

    // Cours / Disciplines
    "cours_label": "Our Disciplines",
    "cours_title": "Classes for<br/><em>every goal</em>",
    "lagree_title": "Lagree",
    "lagree_desc": "High-intensity, low-impact core and endurance workout on the Microformer. Tighten, tone, and sculpt.",
    "lagree_tag1": "All levels",
    "lagree_tag2": "50 min",
    "lagree_tag3": "6 people max",

    "reformer_title": "Pilates Reformer",
    "reformer_desc": "Posture, mobility, and deep core conditioning on the spring-loaded Reformer. Fluid, joint-friendly sculpting.",
    "reformer_tag1": "All levels",
    "reformer_tag2": "50 min",
    "reformer_tag3": "6 people max",

    "mat_title": "Pilates Mat",
    "mat_desc": "Mat Pilates fundamentals revisited through contemporary biomechanics. Breathwork, core stability, and spinal mobility.",
    "mat_tag1": "Fundamentals & Contemporary",
    "mat_tag2": "50 min",
    "mat_tag3": "6 people max",

    "sculpt_title": "Sculpt",
    "sculpt_desc": "A dynamic full-body class fusing Pilates principles and targeted resistance work to define and tone muscle groups.",
    "sculpt_tag1": "All levels",
    "sculpt_tag2": "50 min",
    "sculpt_tag3": "6 people max",

    "barre_title": "Barre",
    "barre_desc": "Dance-inspired workout that elongates and sculpts the silhouette with precise, high-repetition micro-movements.",
    "barre_tag1": "All levels",
    "barre_tag2": "50 min",
    "barre_tag3": "6 people max",

    "yoga_title": "Yoga",
    "yoga_desc": "Experience our Hatha and Power Yoga sessions. Flexibility, balance, and mindful energy to align body and mind.",
    "yoga_tag1": "Hatha & Power Yoga",
    "yoga_tag2": "50 min",
    "yoga_tag3": "6 people max",

    "workshops_title": "Workshops & Events",
    "workshops_desc": "Thematic masterclasses and community workshops to deepen your practice and connect with Moon Club members.",
    "workshops_tag1": "Upcoming program",
    "workshops_tag2": "Included in Full Moon",
    "btn_view_planning": "View Full Schedule",

    // Coachs
    "coachs_label": "The Moon Team",
    "coachs_title": "Our <em>Coaches</em>",
    "coachs_subtitle": "Passionate, certified instructors dedicated to your personal growth, postural alignment, and wellbeing at the studio.",
    "badge_coach_moon": "Moon Club Coach",
    "badge_coach_6disc": "Coach · 6 Disciplines",
    "coach_hover": "View profile & bio →",
    "btn_discover_profile": "Discover profile & bio →",
    "coach_callout_title": "Looking for personalized guidance?",
    "coach_callout_desc": "Our coaches are also available for 1-on-1 private coaching or customized duo sessions.",
    "btn_discover_private": "Discover Private Coaching",

    // Tarifs Découverte
    "dec_label": "First Steps",
    "dec_title": "Discovery <em>Sessions</em>",
    "dec_sub": "Curious to experience our studio? Come discover our boutique classes in a modern, welcoming setting. No prerequisites required.",
    "dec_top_badge": "⭐ Most Popular",
    "dec_card1_title": "1 session",
    "dec_card1_tagline": "For a first discovery",
    "dec_card1_unit": "CHF 35.- / class",
    "dec_btn1": "Book My Session",

    "dec_card2_title": "2 sessions",
    "dec_card2_tagline": "To confirm your love for the method",
    "dec_card2_unit": "CHF 30.- / class",
    "dec_btn2": "Book My 2 Sessions",

    "dec_card3_title": "3 sessions",
    "dec_card3_tagline": "To truly feel the transformative results",
    "dec_card3_unit": "CHF 28.3 / class",
    "dec_btn3": "Book My 3 Sessions",

    "dec_f1": "✓ Studio & equipment onboarding",
    "dec_f2": "✓ Guided class (max. 6 people)",
    "dec_f3": "✓ Tailored postural advice for your level",
    "dec_f4": "✓ Moon Café access after class",
    "dec_f5": "✓ No prerequisites required",

    // Formules / Forfaits
    "forfaits_label": "Our Memberships",
    "forfaits_title": "Choose your<br/><em>membership</em>",
    "forfaits_sub": "6 disciplines · Lausanne",
    "forfaits_gel_badge": "❄️ <strong>Included benefit:</strong> 1 month free membership freeze (no fees) on all plans",
    "badge_popular": "Most Popular",
    "badge_best_price": "Best Value",
    "toggle_6m": "6 months",
    "toggle_12m": "12 months",
    "forfait_f_gel": "✓ 1 month free freeze without fees",

    "newmoon_name": "New Moon",
    "newmoon_tagline": "To begin gently and build momentum",
    "newmoon_f1": "✓ 4 classes per month",
    "newmoon_f2": "✓ 6 complementary disciplines",
    "newmoon_f3": "Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "newmoon_f4": "✓ Discount on workshops",
    "newmoon_f5": "✓ -10% discount on Moon Café drinks",
    "btn_choose_newmoon": "Choose New Moon",

    "halfmoon_name": "Half Moon",
    "halfmoon_tagline": "For a consistent, weekly rhythm",
    "halfmoon_f1": "✓ 8 classes per month",
    "halfmoon_f2": "✓ 6 complementary disciplines",
    "halfmoon_f3": "Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "halfmoon_f4": "✓ Discount on workshops",
    "halfmoon_f5": "✓ -10% discount on Moon Café drinks",
    "btn_choose_halfmoon": "Choose Half Moon",

    "fullmoon_name": "Full Moon",
    "fullmoon_tagline": "For the most dedicated practitioners",
    "fullmoon_per": "Unlimited classes · <strong>~14 CHF / class*</strong>",
    "fullmoon_f1": "✓ 1 class per day max",
    "fullmoon_f2": "✓ 6 complementary disciplines",
    "fullmoon_f3": "Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "fullmoon_f4": "✓ Exclusive discount on workshops",
    "fullmoon_f5": "✓ -10% discount on Moon Café drinks",
    "fullmoon_eng": "3-month minimum commitment<br/><span style=\"font-size:0.75rem; opacity:0.75; font-style:italic;\">*Based on 24 classes per month</span>",
    "btn_choose_fullmoon": "Choose Full Moon",

    "annual_name": "Annual Pass",
    "annual_tagline": "Maximum flexibility and freedom",
    "annual_valid": "Valid 1 year · Single payment",
    "btn_choose_annual": "Choose Annual Pass",

    // Cours Privés
    "prives_label": "🤍 Private Sessions ✨",
    "prives_title": "Private <em>Coaching</em>",
    "prives_desc": "100% tailor-made guidance to reach your athletic and postural goals. Our 50-minute private sessions provide exclusive attention adapted to your exact level and physical condition. 🧘‍♀️",
    "prives_disc": "<strong>Discipline of your choice:</strong> Lagree · Reformer · Mat Pilates · Sculpt · Barre · Hatha Yoga · Power Yoga 🌿",
    "badge_priv_custom": "Tailor-Made & Targeted Alignment",
    "badge_priv_flex": "Flexible Off-Peak Scheduling",
    "badge_priv_cafe": "Moon Café Space to Relax After",
    "tab_solo": "👤 Moon Solo",
    "tab_duo": "👥 Moon Duo",
    
    // Solo
    "solo_1_name": "1 Solo Session",
    "solo_1_tag": "50 mins of exclusive 1-on-1 attention",
    "solo_1_f1": "✓ 50 minutes one-on-one with your coach",
    "solo_1_f2": "✓ 1 discipline of your choice among the 6",
    "solo_1_f3": "✓ Postural correction & 100% custom intensity",
    "solo_1_f4": "✓ Ideal for beginners or specific goals",
    "solo_1_f5": "✓ Moon Café lounge access after your workout",
    "btn_solo_1": "Book 1 Solo Session",

    "solo_5_name": "5-Session Pack",
    "solo_5_tag": "For steady progress and fast results",
    "solo_5_f1": "✓ 5 private sessions of 50 minutes",
    "solo_5_f2": "✓ Progressive program tailored to your goals",
    "solo_5_f3": "✓ Mix and match your favorite disciplines",
    "solo_5_f4": "✓ Reserved slots tailored to your availability",
    "solo_5_f5": "✓ Debrief & refreshment at Moon Café",
    "btn_solo_5": "Choose 5 Solo Pack",

    "solo_10_name": "10-Session Pack",
    "solo_10_tag": "Complete immersion for lasting transformation",
    "solo_10_f1": "✓ 10 private sessions of 50 minutes",
    "solo_10_f2": "✓ Ongoing bespoke mentoring & tracking",
    "solo_10_f3": "✓ Full access across all 6 disciplines",
    "solo_10_f4": "✓ Maximum booking flexibility across the year",
    "solo_10_f5": "✓ Lounge & Moon Café relaxation after class",
    "btn_solo_10": "Choose 10 Solo Pack",

    // Duo
    "duo_1_name": "1 Duo Session",
    "duo_1_tag": "Share the workout experience with a friend or partner",
    "duo_1_f1": "✓ 50-minute semi-private duo session with your coach",
    "duo_1_f2": "✓ Train alongside a friend, family member, or partner",
    "duo_1_f3": "✓ Customized adjustments tailored to both fitness levels",
    "duo_1_f4": "✓ 1 discipline of your choice among the 6",
    "duo_1_f5": "✓ Social time at Moon Café after your class",
    "btn_duo_1": "Book 1 Duo Session",

    "duo_5_name": "5-Session Duo Pack",
    "duo_5_tag": "Shared motivation and steady consistency in duo",
    "duo_5_f1": "✓ 5 private duo sessions (50 min each)",
    "duo_5_f2": "✓ Engaging, motivational partner progression",
    "duo_5_f3": "✓ All 6 disciplines available",
    "duo_5_f4": "✓ Flexible scheduling based on your calendar",
    "duo_5_f5": "✓ Moon Café access included after workout",
    "btn_duo_5": "Choose 5 Duo Pack",

    "duo_10_name": "10-Session Duo Pack",
    "duo_10_tag": "Best value rate to train consistently as a duo",
    "duo_10_f1": "✓ 10 private duo sessions (50 min each)",
    "duo_10_f2": "✓ Lowest price per session and per person",
    "duo_10_f3": "✓ Comprehensive, continuous bespoke coaching",
    "duo_10_f4": "✓ Year-round scheduling flexibility",
    "duo_10_f5": "✓ Lounge relaxation & Moon Café drinks",
    "btn_duo_10": "Choose 10 Duo Pack",

    // Bons Cadeaux
    "cadeaux_label": "Gifting",
    "cadeaux_title": "Gift <em>Cards</em>",
    "cadeaux_desc": "Looking to gift an authentic moment of self-care? With our Moon Club gift cards, share the studio experience: 3 discovery classes, tailored private coaching, or redeemable on annual memberships to strengthen the body, elevate posture, and feel energized. Suitable for all fitness levels in a chic, inspiring boutique studio.",
    "cadeaux_sub": "💐 For birthdays, holidays, special occasions... or simply to treat someone special.",
    "badge_lausanne": "In Lausanne",
    "badge_validity": "Valid 1 Year",
    "badge_format": "Physical or Digital Card",
    "btn_gift_card": "Gift This Card",
    "cad_name_85": "Gift Card 3 Discovery Sessions",
    "cad_tag_85": "The complete experience to gift",
    "cad_per_85": "Valid on the 3 discovery sessions",
    "cad_f1_85": "✓ Valid on the 3 discovery sessions",
    "cad_name_150": "Gift Card CHF 150.-",
    "cad_tag_150": "Freedom to choose",
    "cad_badge_150": "Ideal to start",
    "cad_name_250": "Gift Card CHF 250.-",
    "cad_tag_250": "A true wellness moment",
    "cad_name_350": "Gift Card CHF 350.-",
    "cad_tag_350": "The premium gift",
    "cad_per_private": "Valid on private sessions & annual memberships",
    "cad_f1_private": "✓ Valid on private sessions & annual memberships",
    "cad_f2_all": "✓ 6 complementary disciplines",
    "cad_f3_all": "Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "cad_f4_all": "✓ Moon Café access included",
    "cad_f5_all": "✓ Valid 1 year",

    // Moon Café
    "cafe_label": "🍵 & ☕ Coffee & Matcha Bar",
    "cafe_title": "Moon <em>Café</em>",
    "cafe_sub": "A warm space in the heart of Lausanne to enjoy ceremonial grade matcha and specialty coffee. Before or after your workout, or simply for a revitalizing break during your day.",
    "cafe_feat1_title": "Ceremonial Matcha",
    "cafe_feat1_desc": "Exceptional matcha freshly crafted (Pure, Vanilla, Caramel, Coconut, Mango), hot or iced.",
    "cafe_feat2_title": "Specialty Coffee",
    "cafe_feat2_desc": "Carefully selected beans and precise brews: Espresso, Cortado, Flat White, Freddo and Iced Latte.",
    "cafe_feat3_title": "Milk of Your Choice",
    "cafe_feat3_desc": "Swiss dairy milk or quality plant-based alternatives (barista oat, coconut, etc.).",
    "cafe_feat4_title": "10% Member Discount",
    "cafe_feat4_desc": "Exclusive discount included for all Moon Pilates Club members on the entire menu.",
    "cafe_menu_tagline": "Coffee & Matcha Bar",
    "cafe_menu_title": "Moon Café Menu",
    "cafe_menu_discount": "10% discount for our members",
    "cafe_cat_coffee": "Coffee",
    "cafe_cat_matcha": "Matcha",
    "cafe_opt_supp": "Extra: 0.50 CHF",
    "cafe_opt_milk": "Choice of: Cow's milk or plant-based milk",
    "cafe_menu_note": "☕ & 🍵 Freshly crafted · Dine-in or takeaway · Galeries Benjamin-Constant 1, Lausanne",
    "cafe_badge_bar": "🍵 Matcha Bar & Coffee",
    "cafe_badge_ambiance": "🤍 Relaxing & Cozy Lounge",
    "cafe_banner_title": "Open to everyone · With or without a workout",
    "cafe_banner_desc": "Galeries Benjamin-Constant 1, Lausanne · Cozy lounge space.",
    "cafe_view_flyer": "🔍 View full flyer",
    "cafe_banner_btn": "Opening hours & access →",
    "cafe_block_menu_title": "Menu & Prices",
    "cafe_block_gallery_title": "Gallery & Ambiance",
    "cafe_slide_matcha": "🍵 Ceremonial Matcha · Freshly whisked with chasen",
    "cafe_slide_espresso": "☕ Specialty Coffee · Single origin espresso extraction",
    "cafe_slide_latte": "🥛 Latte Art & Plant Milk · Organic barista oat, almond or dairy",
    "cafe_slide_lounge": "🌿 Lounge Area · Panoramic view over Lausanne & the lake",

    // Planning
    "planning_label": "Class Schedule",
    "planning_title": "Our <em>Schedule</em>",
    "planning_sub": "Book your classes online across our 6 disciplines. Select your slot below.",

    // App Mobile
    "app_label": "Official Mobile App",
    "app_title": "DOWNLOAD THE<br/>MOBILE APPLICATION",
    "app_desc": "The official <strong>Moon Pilates Club</strong> mobile app lets you book and manage your class schedule with seamless ease. Optimize your routine for an effortless experience.",
    "store_dl_app": "Download on the",
    "store_app_store": "App Store",
    "store_dl_google": "GET IT ON",
    "store_google_play": "Google Play",

    // FAQ
    "faq_label": "Frequently Asked Questions",
    "faq_title": "Everything you<br/><em>need to know</em>",

    // Contact
    "contact_label": "Find Us",
    "contact_title": "Come and<br/><em>visit our studio</em>",
    "lbl_address": "Address",
    "lbl_phone": "Phone",
    "lbl_contact": "Contact",
    "lbl_cafe_hours": "Opening Hours",
    "lbl_social": "Social Media",
    "form_title": "Send Us a Message",
    "form_lbl_name": "First Name",
    "form_lbl_email": "Email",
    "form_lbl_msg": "Message",
    "form_ph_name": "Luna",
    "form_ph_email": "luna@email.com",
    "form_ph_msg": "Your message...",
    "btn_send_msg": "Send Message",
    "msg_sent_success": "Message sent! We will reply very shortly.",

    // Access
    "access_title": "Studio Access",
    "access_sub": "Galeries Benjamin-Constant 1, 6th Floor · 1003 Lausanne",
    "acc_m2_title": "M2 Metro",
    "acc_m2_desc": "Stop <em>Bessières</em> (2 min walk)",
    "acc_bus_title": "Bus Lines",
    "acc_bus_desc": "Stops <em>Benjamin-Constant</em> (13 & 16) or <em>St-François</em>",
    "acc_park_title": "Parking",
    "acc_park_desc": "Hôtel de la Paix (garage/outdoor) or street (3 CHF/h)",
    "acc_mark_title": "Landmark",
    "acc_mark_desc": "Right opposite <strong>Luigia Restaurant!</strong>",

    // Footer
    "footer_tagline": "Lausanne boutique studio · 6 disciplines<br/>Lagree · Reformer · Mat · Sculpt · Barre · Yoga",
    "footer_rights": "© 2026 Moon Pilates Club · Lausanne · All rights reserved ·",
    "footer_cgv": "Terms & Conditions"
  }
};

/**
 * Change la langue active du site ('fr' ou 'en')
 */
function setLanguage(lang) {
  if (!translations[lang]) lang = 'fr';

  // 1. Mise à jour de l'attribut lang
  document.documentElement.lang = lang;

  // 2. Mise à jour des boutons du switch
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const t = translations[lang];

  // 3. Traduction des éléments avec data-i18n (texte simple)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // 4. Traduction des éléments avec data-i18n-html (avec balises HTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // 5. Traduction des attributs placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // 6. Mémorisation du choix utilisateur
  try {
    localStorage.setItem('moon_lang', lang);
  } catch (e) {}
}

/**
 * Initialisation au chargement de la page
 */
document.addEventListener('DOMContentLoaded', () => {
  // Langue par défaut : 'fr' (sauf si l'utilisateur a explicitement choisi 'en' auparavant)
  let savedLang = 'fr';
  try {
    savedLang = localStorage.getItem('moon_lang') || 'fr';
  } catch (e) {
    savedLang = 'fr';
  }

  // Écouteurs de clics sur les boutons de switch de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  // Appliquer la langue initiale
  if (savedLang === 'en') {
    setLanguage('en');
  } else {
    setLanguage('fr');
  }
});
