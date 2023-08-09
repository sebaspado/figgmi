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
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});