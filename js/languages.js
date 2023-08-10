$(function () {

  "use strict";

  var dictionary, set_lang;

  dictionary = {
      "english": {
        "menu_home": "Home",
        "menu_locations": "Locations",
        "menu_contact": "Contact us",

        "call_me_now": "Call me now",
        "report_profile": "Report this profile",
        "disclaimer": "Important notice - Please be careful if an escort asks you to pay in advance.Figgmi.ch does NOT take responsibility for fraud or scams.",

        "contact_name": "Name *",
        "contact_email": "Email *",
        "contact_phone": "Phone *",
        "contact_message": "Message *",
        "required_field_span": "This field is required",
        "required_field": "* Required field",
        "contact_submit": "Send",
        "contact_subject": "Select subject",
        "contact_h1": "Contact us",
        "contact_p": "Any question or remarks? Just write us a message!",

        "sign_h1": "Sign up",
        "sign_p": "The website is not finished yet. If you want to advertise with us, leave your contact details and we'll contact you once it is finished.",


        "welcome_popup": "This website is an adult website. If you want to visit the site, please confirm that you are at least 18 years old.",

        

          "footer_report": "Make a report",
          "_january": "January"
      },
      "deutsche": {
        "menu_home": "Home",
        "menu_locations": "Kantons",
        "menu_contact": "Contact us",
        "disclaimer": "Wichtiger Hinweis - Bitte seien Sie vorsichtig, wenn ein Escort Sie bittet, im Voraus zu bezahlen. Figgmi.ch übernimmt KEINE Verantwortung für Betrug oder Scams.",

        "call_me_now": "Anrufen",
        "report_profile": "Dieses Profil melden",
        "contact_name": "Name *",
        "contact_email": "E-mail *",
        "contact_phone": "Telefon *",
        "contact_message": "Nachricht *",
        "required_field": "* Pflichtfeld",
        "contact_submit": "Absenden",
        "required_field_span": " Dieses Feld ist erforderlich",
        "contact_subject": "Betreff auswählen",
        "contact_support": "Unterstützung",
        "contact_advertising": "Werbung",
        "contact_general": "Allgemein",
        "contact_h1": "kontaktiere uns",
        "contact_p": "Haben Sie Fragen oder Anmerkungen? Schreiben Sie uns einfach eine Nachricht!",
       
        "sign_h1": "Registrieren",
        "sign_p": "Die Website ist noch nicht fertig. Wenn Sie bei uns Werbung schalten möchten, hinterlassen Sie bitte Ihre Kontaktdaten und wir melden uns bei Ihnen, sobald es fertig ist.",



        //home seo texts
        "h1_home":"Sex und Erotik Inserate in der Schweiz",
        "p1_home":"Willkommen bei figgmi.ch, deiner Adresse für prickelnde Momente. Du suchst Spaß und Abenteuer? Du bist am richtigen Ort!",
      
        "h2_home1":"Das TOP Sex & Erotik Inserate Plattform in der Schweiz",
        "p2_home":"Ob in Zürich, Genf, Basel oder anderswo – bei uns findest du, was dein Herz begehrt. Auf figgmi.ch sind heiße Sextreffen nur einen Klick entfernt.",
        
        "h2_home2":"Sextreffen in der Schweiz leicht gemacht",
        "p3_home":"Schnell, einfach, unkompliziert. Echte Kontakte in deiner Nähe. Die besten Sexinserate der Schweiz findest du bei uns. Registriere dich jetzt und entdecke ein neues Level der Erotik.",
        
        "h2_home3":"Für jeden etwas dabei",
        "p4_home":"Von sinnlichen Massagen bis hin zu aufregenden Treffen mit Privatpersonen – bei figgmi.ch ist für jeden Geschmack etwas dabei. Unsere Plattform ist sicher und diskret. Probier es gleich aus!",
        
        "h2_home4":"Dein Vertrauen ist uns wichtig",
        "p5_home":"Bei figgmi.ch legen wir großen Wert auf Privatsphäre und Diskretion. Deine Daten sind bei uns sicher. Denn dein Vertrauen ist unser oberstes Gebot.",
        
        "h2_home5":"Leicht zu nutzen, schwer zu vergessen",
        "p6_home":"Suchen, finden, genießen. Mit unserer benutzerfreundlichen Oberfläche ist es kinderleicht, das zu finden, wonach du suchst. Einmal figgmi.ch – immer figgmi.ch.",
        
        "h2_home6":"Komm, sei dabei!",
        "p7_home":"Worauf wartest du? Entdecke die besten Sexinserate und Kontakte auf figgmi.ch. Die sinnlichste Begegnung deines Lebens könnte nur wenige Klicks entfernt sein.",
        
        "welcome_popup":"Diese Website ist für ein erwachsenes Publikum bestimmt. Wenn du die Seite besuchen möchtest, bestätige bitte, dass du mindestens 18 Jahre alt bist.",
        
          "footer_report": "Make a report",
          "_january": "Janeiro"
      },
      "français": {
        "menu_home": "Accueil",
        "menu_locations": "Cantons",
        "menu_contact": "Contactez-nous",

        "contact_name": "Nom *",
        "contact_email": "E-mail *",
        "contact_phone": "Téléphone *",
        "contact_message": "Message *",
        "required_field": "* Champs obligatoire",
        "contact_subject": "Envoyer",
        "contact_submit": "Envoyer",
        "required_field_span": "Ce champ est obligatoire",
        "contact_subject": "Sélectionnez le sujet",
        "contact_support": "Soutien",
        "contact_advertising": "Publicité",
        "contact_general": "Général",
        "contact_h1": "Contactez-nous",
        "contact_p": "Une question ou une remarque ? Écrivez-nous simplement un message!",
        
        "sign_h1": "S'inscrire",
        "sign_p": "Le site n'est pas encore terminé. Si vous souhaitez faire de la publicité avec nous, laissez vos coordonnées et nous vous contacterons une fois terminé.",


        //home seo texts
        "h1_home":"Annuaire d'escortes en Suisse",
        "p1_home":"Bienvenue sur figgmi.ch, ton repère pour les plaisirs érotiques. À la recherche d'une aventure sensuelle et inoubliable ? Tu es au bon endroit !",

        "h2_home1":"La TOP plateforme d'annonces d'escorte en Suisse",
        "p2_home":"Que tu sois à Genève, Zurich, Lausanne ou ailleurs en Suisse, figgmi.ch te propose une sélection exclusive d'escortes et de services érotiques.",

        "h2_home2":"Figgmi.ch : Le choix des connaisseurs",
        "p3_home":"Facile, rapide, fiable. Trouve des contacts authentiques près de chez toi. Les meilleures annonces d'escortes en Suisse sont sur figgmi.ch. Inscris-toi dès maintenant et entre dans un monde de plaisir.",

        "h2_home3":"Pour tous les goûts",
        "p4_home":"Massages sensuels, rencontres exaltantes avec des professionnels, figgmi.ch offre une variété d'options pour satisfaire tes désirs. Notre plateforme est sûre et discrète. Viens essayer!",

        "h2_home4":"Ta confiance, notre priorité",
        "p4_home":"Chez figgmi.ch, nous accordons une grande importance à ta vie privée. Tes données sont en sécurité avec nous. Ta confiance est notre priorité absolue.",

        "h2_home5":"Simple d'utilisation, difficile à oublier",
        "p5_home":"Cherche, trouve, savoure. Grâce à notre interface conviviale, trouver ce que tu cherches est un jeu d'enfant. Une fois figgmi.ch, toujours figgmi.ch.",

        "h2_home6":"Viens, rejoins-nous !",
        "p6_home":"Qu'attends-tu ? Découvre les meilleures annonces d'escortes et services érotiques sur figgmi.ch. L'expérience la plus sensuelle de ta vie pourrait être à quelques clics.",

        "welcome_popup":"Ce site est destiné à un public adulte. Si tu souhaites visiter le site, confirme que tu as au moins 18 ans.",

        "call_me_now": "Appelle-moi",
        "report_profile": "Signaler le profil",
        "disclaimer": "Avis important - Soyez prudent si une escorte vous demande de payer à l'avance. Figgmi.ch n'est pas responsable des fraudes ou des escroqueries.",

          "footer_report": "french",
          "_january": "январь"
      },
      "italiano": {
        "menu_home": "Inizio",
        "menu_locations": "Cantoni",
        "menu_contact": "Contact us",


        //home seo texts
        "h1_home":"Annunci di escort della Svizzera",
        "p1_home":"Benvenuto su figgmi.ch, il tuo punto di riferimento per i piaceri erotici. Sei alla ricerca di un'avventura sensuale e indimenticabile? Sei nel posto giusto!",

        "h2_home1":"La piattaforma di annunci di escort TOP della Svizzera",
        "p2_home":"Che tu sia a Zurigo, Ginevra, Lugano o altrove in Svizzera, figgmi.ch offre una selezione esclusiva di escort e servizi erotici.",

        "h2_home2":"Figgmi.ch: La scelta per chi ne capisce",
        "p3_home":"Facile, veloce, affidabile. Trova contatti autentici vicino a te. I migliori annunci di escort in Svizzera sono su figgmi.ch. Registrati subito ed entra in un mondo di piacere.",

        "h2_home3":"C'è qualcosa per tutti",
        "p4_home":"Massaggi sensuali, incontri emozionanti con professionisti, figgmi.ch offre una varietà di opzioni per soddisfare i tuoi desideri. La nostra piattaforma è sicura e discreta. Vieni a provare!",

        "h2_home4":"La tua fiducia è la nostra priorità",
        "p4_home":"Su figgmi.ch, la tua privacy è di estrema importanza per noi. Tutti i tuoi dati sono al sicuro, poiché tua fiducia è la nostra priorità assoluta.",

        "h2_home5":"Facile da usare, difficile da dimenticare",
        "p5_home":"Cerca, trova, godi. Grazie alla nostra interfaccia user-friendly, trovare ciò che cerchi è un gioco da ragazzi. Una volta su figgmi.ch, non potrai più farne a meno.",

        "h2_home6":"Vieni, unisciti a noi!",
        "p6_home":"Cosa stai aspettando? Scopri i migliori annunci di escort e servizi erotici su figgmi.ch. L'esperienza più sensuale della tua vita potrebbe essere a pochi clic di distanza.",

        "contact_name": "Nome *",
        "contact_email": "E-mail *",
        "contact_phone": "Telefono *",
        "contact_message": "Messaggio *",
        "required_field": "* Campo obbligatorio",
        "contact_submit": "Invia",
        "required_field_span": "Questo campo è obbligatorio",
        "contact_subject": "Seleziona oggetto",
        "contact_support": "Supporto",
        "contact_advertising": "Pubblicità",
        "contact_general": "Generale",
        "contact_h1": "Contattaci",
        "contact_p": "Qualche domanda o commento? Scrivici un messaggio!",
        
        "sign_h1": "Iscrizione",
        "sign_p": "Il sito web non è ancora finito. Se vuoi fare pubblicità con noi, lascia i tuoi dati di contatto e ti contatteremo una volta terminato.",


        "welcome_popup":"Questo sito web è destinato ad un pubblico adulto. Se desiderate visitare il sito, confermate di avere almeno 18 anni.",

        "call_me_now": "Chiamami ",
        "report_profile": "Segnala questo profilo",
        "disclaimer": "Avviso importante - Vi preghiamo di fare attenzione se una escort vi chiede di pagare in anticipo. Figgmi.ch NON si assume la responsabilità di frodi o truffe.",

        "footer_report": "ital",
        "_january": "январь"
    }
  };

  set_lang = function (dictionary) {
      $("[data-translate]").text(function () {
          var key = $(this).data("translate");
          if (dictionary.hasOwnProperty(key)) {
              return dictionary[key];
          }
      });
  };

  var set_lang = function (dictionary) {
    $("[data-translate]").each(function(){
       if($(this).is( "input" )){
          $(this).attr('placeholder',dictionary[$(this).data("translate")] )
       } else{
           $(this).text(dictionary[$(this).data("translate")])
       }
    })
};


  $(".select-options > li").on("click", function () { 
      var language = $(this).attr("rel").toLowerCase();
      if (dictionary.hasOwnProperty(language)) {
          set_lang(dictionary[language]);
      }
  });

  // Set inicial que arranque in aleman
  set_lang(dictionary.deutsche);
});



/* transforma el option en li */ 
$('.select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div id="lang" class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
      if ($this.children('option').eq(i).is(':selected')){
        $('li [rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
      }
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
    $list.find('li.is-selected').removeClass('is-selected');
    $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
      $list.hide();
      console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});