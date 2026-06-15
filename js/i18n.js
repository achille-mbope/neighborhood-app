const translations = {
    de: {
        "app_title": "Gartenzaun",
        "app_document_title": "Gartenzaun - Deine Nachbarschafts-App",
        "default_profile_name": "Max Mustermann",
        "reset_button_aria": "App zurücksetzen",
        "reset_button_title": "Zurücksetzen",
        "reset_confirm_message": "Alle gespeicherten Daten zurücksetzen?",
        "welcome_title": "Willkommen bei Gartenzaun",
        "welcome_subtitle": "Gemeinsam sind wir stärker. Unterstütze deine Nachbarn und lass dich unterstützen.",
        "feature_trust_title": "Vertrauen",
        "feature_trust_desc": "Verifizierte Nachbarn",
        "feature_share_title": "Teilen",
        "feature_share_desc": "Werkzeuge & Geräte ausleihen",
        "feature_support_title": "Unterstützen",
        "feature_support_desc": "Gegenseitige Unterstützung",
        "btn_lets_go": "Los geht's",
        
        "settings_title": "Einstellungen",
        "settings_high_contrast": "Hoher Kontrast",
        "settings_large_font": "Große Schrift",
        "settings_language": "Sprache",
        "lang_de": "🇩🇪 Deutsch",
        "lang_en": "🇺🇸 English",

        "tts_title": "Vorlesefunktion",

        "nav_home": "Home",
        "nav_support": "Unterstützung",
        "nav_share": "Teilen",
        "nav_events": "Events",
        "nav_profile": "Profil",

        "toast_large_font_on": "Große Schrift aktiviert",
        "toast_large_font_off": "Große Schrift deaktiviert",
        "toast_high_contrast_on": "Hoher Kontrast aktiviert",
        "toast_high_contrast_off": "Hoher Kontrast deaktiviert",
        
        "netiquette_title": "Unsere Netiquette",
        "netiquette_subtitle": "Regeln für ein gutes Miteinander.",
        "netiquette_short_html": `
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">🤝</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">Respektvoll sein</span>
                    <span class="netiquette-short-desc">Behandle andere so, wie du selbst behandelt werden möchtest.</span>
                </div>
            </div>
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">🛠️</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">Hilfsbereit & konstruktiv</span>
                    <span class="netiquette-short-desc">Teile dein Wissen und unterstütze deine Nachbar*innen.</span>
                </div>
            </div>
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">🔒</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">Privatsphäre achten</span>
                    <span class="netiquette-short-desc">Respektiere die Privatsphäre und die Daten anderer.</span>
                </div>
            </div>
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">🛡️</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">Kein Hass, kein Spam</span>
                    <span class="netiquette-short-desc">Diskriminierung, Beleidigungen und Spam haben hier keinen Platz.</span>
                </div>
            </div>
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">⚖️</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">Regeln einhalten</span>
                    <span class="netiquette-short-desc">Gemeinsam sorgen wir für eine sichere und positive Community.</span>
                </div>
            </div>
        `,
        "netiquette_long_html": `
            <p><strong>1) Respekt und Höflichkeit</strong><br>Behandle alle Mitglieder der Community mit Respekt. Beleidigungen, Diskriminierung oder Drohungen werden nicht toleriert.</p>
            <p><strong>2) Hilfsbereitschaft</strong><br>Diese Plattform lebt vom gegenseitigen Austausch. Sei offen dafür, anderen zu helfen, und bedanke dich, wenn dir geholfen wird.</p>
            <p><strong>3) Privatsphäre und Daten</strong><br>Teile keine privaten Informationen anderer ohne deren Zustimmung. Achte darauf, welche Daten du von dir preisgibst.</p>
            <p><strong>4) Konstruktiver Austausch</strong><br>Diskussionen sind willkommen, aber sie sollten sachlich bleiben. Vermeide Spam und Off-Topic-Beiträge.</p>
            <p><strong>5) Sicherheit zuerst</strong><br>Triff dich bei persönlichen Übergaben von geliehenen Gegenständen an sicheren, öffentlichen Orten oder vergewissere dich über die Identität der Person.</p>
            <p><strong>6) Melde problematische Inhalte</strong><br>Wenn du Verstöße gegen die Netiquette bemerkst, nutze bitte die Meldefunktion. So hilfst du dabei, die Community sicher zu halten.</p>
        `,
        "netiquette_accept": "Ich akzeptiere die Netiquette und halte mich an die Regeln.",
        "btn_all_clear": "Alles klar!",
        
        "address_title": "Wo bist du zuhause?",
        "address_subtitle": "Damit wir dir Nachbarn in deiner Nähe anzeigen können.",
        "address_placeholder": "Straße und Hausnummer...",
        "address_radius": "Suchradius",
        "personal_data_title": "Persönliche Daten",
        "personal_data_subtitle": "Bitte gib deinen echten Namen und deine Adresse an, damit wir deine Nachbarschaft bestimmen können.",
        "first_name_label": "Vorname *",
        "first_name_placeholder": "z.B. Maria",
        "last_name_label": "Nachname *",
        "last_name_placeholder": "z.B. Schmidt",
        "real_name_note": "Bitte gib hier deinen echten Namen an. Dieser wird für Vertrauen und Nachbarschaftshilfe innerhalb der App verwendet.",
        "street_label": "Straße & Hausnummer",
        "street_placeholder": "z.B. Tulpenweg 12",
        "zip_city_label": "Postleitzahl & Ort",
        "zip_city_placeholder": "z.B. 12345 Neustadt",
        "desired_radius_title": "Gewünschter Umkreis",
        "desired_radius_subtitle": "Wie weit soll deine Nachbarschaft reichen?",
        "radius_50m": "50 Meter",
        "radius_50m_desc": "Direkte Nachbarn (ca. 10 Häuser)",
        "radius_100m": "100 Meter",
        "radius_100m_desc": "Deine gesamte Straße (Empfohlen)",
        "radius_500m": "500 Meter",
        "radius_500m_desc": "Dein ganzes Viertel",
        "btn_verify_address": "Adresse verifizieren",
        "address_loading": "Adresse wird geprüft...",
        "address_osm_unreachable": "Validierungsserver konnte nicht erreicht werden.",
        "address_error_required_fields": "Bitte fülle Vorname, Nachname, Straße sowie Postleitzahl & Ort aus.",
        "address_error_missing_house_number": "Bitte gib Straße und Hausnummer an, damit die Adresse eindeutig geprüft werden kann.",
        "address_checking_osm": "Adresse wird geprüft...",
        "address_error_not_found": "Diese Adresse konnte nicht eindeutig gefunden werden. Bitte prüfe Straße, Hausnummer, Postleitzahl und Ort.",
        "address_success_confirmed": "Adresse bestätigt: {address}",
        "address_error_osm_failed": "Die Validierung ist fehlgeschlagen. Bitte prüfe deine Internetverbindung und versuche es erneut.",
        "toast_address_confirmed": "Adresse erfolgreich bestätigt",
        "btn_next": "Weiter",
        "btn_back": "Zurück",
        "btn_skip": "Überspringen",
        
        "verify_title": "Sicherheit & Vertrauen",
        "verify_subtitle": "Wähle einen Weg, um deine Adresse zu bestätigen und ein verifiziertes Mitglied zu werden.",
        "opt_postcard_title": "Postkarte mit QR-Code",
        "opt_postcard_desc": "Wir senden dir eine Postkarte nach Hause. Du scannst den Code zur Bestätigung.",
        "opt_video_title": "Video-Ident (Schnellverfahren)",
        "opt_video_desc": "Bestätige deine Identität in wenigen Schritten per Webcam oder Smartphone-Kamera.",
        "opt_neighbor_title": "Nachbar-Bestätigung",
        "opt_neighbor_desc": "Ein bereits verifizierter Nachbar aus deiner Straße bestätigt deine Identität.",
        "opt_eid_title": "eID",
        "opt_eid_desc": "Deutsche Online-Ausweisfunktion (eID) über die offizielle AusweisApp.",
        "btn_verify_start": "Verifizierung starten",
        
        "eid_intro_title": "eID-Verifizierung",
        "eid_intro_desc": "Zur Verifikation über die offizielle deutsche Online-Ausweisfunktion (eID) benötigst du die AusweisApp des Bundesamtes für Sicherheit in der Informationstechnik (BSI). Mit Klick auf den Button unten wirst du in den App Store weitergeleitet, bzw. die App wird auf deinem Gerät geöffnet.",
        "btn_to_eid": "Zur eID",
        
        "sim_title_running": "Verifizierung läuft",
        "sim_subtitle_running": "Folge den Anweisungen auf dem Bildschirm.",
        
        "profile_setup_title": "Profil vervollständigen",
        "profile_setup_subtitle": "Diese Angaben sind optional, helfen aber deinen Nachbarinnen und Nachbarn, dich besser kennenzulernen.",
        "label_interests": "Deine Interessen",
        "desc_interests": "Wofür interessierst du dich? (Mehrfachauswahl möglich)",
        "btn_add": "Hinzufügen",
        "label_skills": "Deine Talente & Fähigkeiten",
        "desc_skills": "Wobei kannst du unterstützen? (Mehrfachauswahl möglich)",
        "label_lend_items": "Gegenstände, die du verleihen würdest",
        "desc_lend_items": "Trage Gegenstände durch Kommata getrennt ein",
        "btn_next_profile_picture": "Weiter zum Profilbild",
        
        "profile_design_title": "Profil gestalten",
        "profile_design_subtitle": "Du kannst ein Profilbild hochladen, einen Avatar erstellen oder diesen Schritt überspringen.",
        "btn_create_avatar": "Avatar erstellen",
        "btn_upload_photo": "Foto hochladen",
        "btn_delete_photo": "Foto löschen",
        "btn_delete_avatar": "Avatar löschen",
        "btn_add_photo": "Foto hinzufügen",
        
        "badge_verified": "✓ Verifizierter Nachbar",
        "verified_neighbor_label": "Verifizierter Nachbar",
        "verified_member_title": "Verifiziertes Mitglied",
        "profile_picture_alt": "Profilbild",
        "profile_name_label": "Dein Name",
        "profile_address_radius_title": "Deine Adresse & Umkreis",
        "profile_neighbor_radius_label": "Nachbar-Umkreis",
        "profile_my_interests_title": "Meine Interessen",
        "profile_no_interests": "Keine Interessen ausgewählt",
        "profile_my_skills_title": "Meine Fähigkeiten (Ich kann unterstützen bei...)",
        "profile_skill_shopping": "🛒 Einkäufe mitbringen",
        "profile_skill_garden": "🌱 Garten & Pflanzen pflegen",
        "profile_skill_tech": "🔧 Technik & Handwerk erklären",
        "profile_skill_craft": "🔨 Handwerk",
        "profile_skill_animals": "🐾 Haustier-Betreuung",
        "profile_skill_chat": "💬 Gesellschaft leisten",
        "profile_lend_items_title": "Gegenstände zum Verleihen",
        "profile_lend_items_placeholder": "z.B. Teleskopleiter, Schlagbohrer",
        "profile_privacy_security_title": "Privatsphäre & Sicherheit",
        "profile_privacy_hide_house_number": "Hausnummer für Nicht-Nachbarn verbergen",
        "profile_privacy_hide_online_status": "Online-Status nicht anzeigen",
        "profile_logout": "Abmelden",
        "profile_skill_updated_toast": "{skill} aktualisiert",
        "profile_logged_out_toast": "Abgemeldet",
        "toast_id_confirmed": "Deine Identität wurde erfolgreich bestätigt 💚",
        "toast_welcome": "Willkommen in der Nachbarschaft! 🎉",
        "toast_lang_change": "Sprache geändert.",
        "toast_avatar_saved": "Avatar gespeichert!",
        "toast_photo_removed": "Foto entfernt.",
        "toast_avatar_removed": "Avatar entfernt.",

        "share_kicker": "Teilen & Ausleihen",
        "share_title": "Dinge leihen, ohne weit zu suchen.",
        "share_subtitle": "Finde Werkzeuge, Gartengeräte und Alltagshelfer in deiner Nähe. Anfragen, Übergabe und Rückgabe laufen geschützt innerhalb der Nachbarschaft.",
        "share_add_item": "Gegenstand einstellen",
        "share_available_today": "Heute verfügbar",
        "share_items_nearby": "4 Gegenstände in deiner Umgebung",
        "share_search_placeholder": "Was suchst du heute?",
        "share_search_aria": "Was möchtest du ausleihen?",
        "share_filter_aria": "Filter anzeigen",
        "share_filter_categories": "Kategorien",
        "share_filter_options": "Optionen",
        "share_cat_tools": "Werkzeug",
        "share_cat_garden": "Garten",
        "share_cat_household": "Haushalt",
        "share_cat_sports": "Freizeit & Sport",
        "share_only_available": "Nur verfügbare",
        "share_location": "Standortfreigabe",
        "share_sort": "Sortierung",
        "share_sort_distance": "Entfernung",
        "share_sort_condition": "Zustand",
        "share_sort_newest": "Neueste zuerst",
        "share_stat_listings": "Inserate",
        "share_stat_categories": "Kategorien",
        "share_stat_nearest": "nächstes Angebot",
        "share_back_aria": "Zurück zur Übersicht",
        "share_status_available": "Verfügbar",
        "share_status_borrowed": "Aktuell verliehen",
        "share_request_running": "Anfrage läuft",
        "share_view_details": "Details ansehen",
        "share_condition_label": "Zustand",
        "share_count_label": "Anzahl",
        "share_distance_away": "{distance} m entfernt",
        "share_available_label": "Verfügbar",
        "share_owner_label": "Anbieter",
        "share_item_image_aria": "Bild des Gegenstands",
        "modal_close_aria": "Schließen",
        "share_add_modal_title": "Gegenstand einstellen",
        "share_add_steps_aria": "Eingabeschritte",
        "share_add_item_title_label": "Titel des Gegenstands",
        "share_add_item_title_placeholder": "z.B. Vertikutierer, Bohrer",
        "share_add_category_label": "Kategorie",
        "share_add_description_label": "Beschreibung",
        "share_add_description_placeholder": "Kurz beschreiben, wofür der Gegenstand geeignet ist.",
        "share_add_photos_label": "Fotos hochladen",
        "share_add_photos_hint": "Mehrere Fotos sind möglich. Die Vorschau wird lokal simuliert.",
        "share_condition_new": "neu",
        "share_condition_very_good": "sehr gut",
        "share_condition_used": "gebraucht",
        "share_add_count_label": "Anzahl verfügbar",
        "share_add_manual_link_label": "Optional: Bedienungslink",
        "share_add_available_from_label": "Verfügbar von",
        "share_add_available_to_label": "Verfügbar bis",
        "share_add_options_label": "Ausleihoption",
        "share_add_free_option": "Kostenlos verleihen",
        "share_add_effort_option": "Gegen kleine Aufwandsentschädigung (nicht monetär)",
        "share_add_confirmed_only_option": "Nur für bestätigte Nachbarn sichtbar",
        "share_add_deposit_label": "Pfandsystem",
        "share_add_deposit_none": "Kein Pfand",
        "share_add_deposit_voluntary": "Freiwilliges Pfand",
        "share_add_deposit_digital": "Digitale Kaution (Simulation)",
        "share_add_deposit_amount_label": "Betrag",
        "share_add_deposit_amount_placeholder": "20 € Pfand",
        "share_add_deposit_method_label": "Methode",
        "share_add_payment_card": "Kreditkarte",
        "share_add_secure_handover_title": "Sichere Übergabe",
        "share_add_secure_handover_text": "Adressdaten sind nicht öffentlich sichtbar und werden erst nach Annahme der Anfrage zwischen Verleiher und Ausleiher angezeigt.",
        "share_add_floor_label": "Stockwerk",
        "share_add_floor_placeholder": "z.B. 2. OG",
        "share_add_pickup_times_label": "Bevorzugte Abholzeiten",
        "share_add_pickup_times_placeholder": "z.B. werktags ab 18 Uhr",
        "share_add_handover_label": "Klingel- und Übergabehinweise",
        "share_add_handover_placeholder": "z.B. Klingel Müller, Übergabe im Hof.",
        "share_add_submit": "Einstellen",
        "share_detail_address_protected_title": "Adressdaten geschützt",
        "share_detail_address_protected_text": "Straße, Hausnummer, Stockwerk, Klingel- und Übergabehinweise werden erst nach Annahme der Anfrage angezeigt.",
        "share_detail_deposit_title": "Pfand",
        "share_detail_deposit_none_required": "Kein Pfand erforderlich.",
        "share_detail_deposit_method": " über {method}",
        "share_detail_deposit_amount_open": "Betrag offen",
        "share_detail_deposit_visibility_accepted": "simuliert reserviert und nach Rückgabe freigegeben",
        "share_detail_deposit_visibility_pending": "erst nach Annahme simuliert reserviert",
        "share_detail_to_be_arranged": "wird abgestimmt",
        "share_detail_by_agreement": "nach Absprache",
        "share_detail_address_after_acceptance": "Adresse nach Annahme sichtbar",
        "share_detail_bell_after_acceptance": "Klingelhinweis nach Annahme",
        "share_detail_address_label": "Adresse",
        "share_detail_bell_label": "Klingel",
        "share_detail_notes_label": "Hinweise",
        "share_detail_pickup_times_label": "Abholzeiten",
        "share_detail_unavailable_title": "Nicht verfügbar",
        "share_detail_unavailable_text": "Dieser Gegenstand ist aktuell verliehen.",
        "share_detail_send_request_title": "Anfrage senden",
        "share_detail_start_date_label": "Startdatum",
        "share_detail_return_date_label": "Rückgabedatum",
        "share_detail_message_label": "Nachricht an den Verleiher",
        "share_detail_message_placeholder": "Kurz erklären, wofür du den Gegenstand brauchst.",
        "share_detail_send_request_button": "Anfrage senden",
        "share_detail_request_owner_title": "Anfrage beim Verleiher",
        "share_detail_request_sent_to_owner": "Simulierte Benachrichtigung wurde an {owner} gesendet.",
        "share_detail_start_open": "Start offen",
        "share_detail_until": "bis",
        "share_detail_return_open": "Rückgabe offen",
        "share_detail_no_message": "Keine Nachricht",
        "share_detail_accept_request": "Anfrage annehmen",
        "share_detail_ask_question": "Rückfrage stellen",
        "share_detail_decline_request": "Anfrage ablehnen",
        "share_detail_request_declined_title": "Anfrage abgelehnt",
        "share_detail_request_declined_text": "Du kannst eine neue Anfrage mit anderen Daten senden.",
        "share_detail_question_title": "Rückfrage gestellt",
        "share_detail_question_text": "Der Verleiher fragt nach Details. Nutze den Chat, um die Übergabe abzustimmen.",
        "share_detail_open_chat": "Chat öffnen",
        "share_detail_loan_active_title": "Leihvorgang aktiv",
        "share_detail_care_confirmation": "Ich bestätige, dass ich den Gegenstand sorgfältig behandle und im vereinbarten Zustand zurückgebe.",
        "share_detail_complete_handover": "Übergabe abschließen",
        "share_detail_status_title": "Status",
        "share_detail_status_request_sent": "Anfrage gesendet",
        "share_detail_status_owner_acceptance": "Annahme durch Verleiher",
        "share_detail_status_handover_confirmed": "Übergabe bestätigt",
        "share_detail_status_return_done": "Rückgabe abgeschlossen",
        "share_detail_deposit_release_text": "Pfandfreigabe wird nach beidseitiger Rückgabe simuliert ausgelöst.",
        "share_detail_return_process_title": "Rückgabeprozess",
        "share_detail_borrower_returned": "Ausleiher: Gegenstand zurückgegeben",
        "share_detail_owner_received": "Verleiher: Rückgabe erhalten",
        "share_detail_return_note_placeholder": "Optional: Zustand dokumentieren",
        "share_toast_request_sent": "Neue Anfrage gesendet",
        "share_notification_request_sent": "Neue Anfrage wurde simuliert an den Verleiher gesendet.",
        "share_toast_request_accepted": "Anfrage angenommen",
        "share_notification_request_accepted": "Anfrage angenommen: Leihvorgang wurde erstellt.",
        "share_toast_request_declined": "Anfrage abgelehnt",
        "share_notification_request_declined": "Anfrage wurde abgelehnt.",
        "share_toast_question_sent": "Rückfrage gestellt",
        "share_notification_question_sent": "Rückfrage wurde simuliert gesendet.",
        "share_toast_confirm_care_first": "Bitte bestätige zuerst die sorgfältige Behandlung.",
        "share_toast_handover_complete": "Übergabe abgeschlossen",
        "share_notification_handover_complete": "Übergabe bestätigt. Erinnerung zur Rückgabe ist aktiv.",
        "share_toast_return_complete": "Rückgabe abgeschlossen. Pfandfreigabe simuliert.",
        "share_notification_return_complete": "Erfolgreicher Abschluss: Rückgabe bestätigt und Pfand freigegeben.",
        "chat_report_title": "Inhalt melden",
        "chat_report_aria": "Beitrag melden",
        "chat_welcome_initial": "Hallo! Wie kann ich dich in der Nachbarschaft oder in der App unterstützen?",
        "chat_input_placeholder": "Schreibe eine Nachricht...",
        "chat_send_button": "Senden",
        "chat_welcome_default": "Schreib eine Nachricht, um den Kontakt zu starten.",
        "chat_welcome_with_topic": "{topic}: Schreib eine Nachricht, um den Kontakt zu starten.",
        "chat_type_ambassador": "Botschafter-Chat",
        "chat_type_group": "Gruppen-Chat",
        "chat_type_borrow": "Ausleihe: {item}",
        "chat_type_support": "Unterstützung: {topic}",
        "chat_type_event": "Event-Chat",
        "chat_report_sent": "Meldung gesendet: {reason}",
        "events_kicker": "Events & Begegnungen",
        "events_page_title": "Events in deiner Nachbarschaft",
        "events_page_subtitle": "Finde Treffen, Aktionen und gemeinsame Aktivitäten direkt in deiner Umgebung.",
        "events_next_label": "Als Nächstes",
        "events_next_summary": "6 kommende Events in deiner Umgebung",
        "event_menu_aria": "Menü öffnen",
        "event_notifications_aria": "Benachrichtigungen",
        "event_search_placeholder": "Events suchen...",
        "event_search_aria": "Events suchen",
        "event_filter_categories": "Kategorien",
        "event_cat_food": "Essen & Trinken",
        "event_cat_outdoor": "Outdoor",
        "event_cat_sport": "Sport & Bewegung",
        "event_cat_culture": "Kultur & Kreativ",
        "event_cat_community": "Community",
        "event_filter_reset": "Filter zurücksetzen",
        "event_tabs_aria": "Event Ansicht",
        "event_tab_upcoming": "Kommende Events",
        "event_tab_past": "Vergangene Events",
        "event_join_button": "Ich bin dabei!",
        "event_joined_button": "Du bist dabei",
        "event_joined_toast": "Teilnahme bestätigt: {event}",
        "event_left_toast": "Teilnahme entfernt",
        "event_status_open": "Offen",
        "event_status_closed": "Geschlossen",
        "events_empty_state": "Keine Events in dieser Ansicht.",
        "event_add_button": "Event hinzufügen",
        "event_create_aria": "Neues Event erstellen",
        "event_add_modal_title": "Event hinzufügen",
        "event_add_title_label": "Eventname",
        "event_add_title_placeholder": "z.B. Nachbarschaftsbrunch",
        "event_add_category_label": "Kategorie",
        "event_add_participants_label": "Max. Teilnehmer",
        "event_add_unlimited_label": "Unbegrenzt",
        "event_add_status_label": "Eventtyp",
        "event_add_time_label": "Uhrzeit",
        "event_add_location_placeholder": "z.B. Innenhof, Haus 4",
        "event_add_image_label": "Bild hochladen",
        "event_add_image_hint": "Wenn kein Bild gewählt wird, nutzt das Event ein passendes Kategoriebild.",
        "event_add_description_label": "Beschreibung",
        "event_add_description_placeholder": "Worum geht es bei diesem Event?",
        "event_add_cancel": "Abbrechen",
        "event_add_submit": "Event erstellen",
        "event_add_default_title": "Neues Nachbarschaftsevent",
        "event_participants_label": "Teilnehmer",
        "event_detail_you": "Du",
        "event_created_toast": "Event erstellt: {event}",
        "event_edit_button": "Event bearbeiten",
        "event_delete_button": "Event löschen",
        "event_edit_modal_title": "Event bearbeiten",
        "event_edit_submit": "Änderungen speichern",
        "event_updated_toast": "Event aktualisiert: {event}",
        "event_deleted_toast": "Event gelöscht: {event}",
        "event_delete_confirm": "Dieses Event wirklich löschen?",
        "event_detail_back": "Zurück zu Events",
        "event_detail_date_label": "Datum",
        "event_detail_location_label": "Ort",
        "event_detail_participants_label": "Teilnehmer",
        "event_detail_organizer_label": "Organisiert von",
        "event_detail_join_title": "Teilnehmen",
        "event_detail_join_text": "Melde dich an oder öffne den Event-Chat, um Fragen zu stellen und Details abzustimmen.",
        "event_detail_open_chat": "Event-Chat öffnen",
        "event_detail_meeting_title": "Treffpunkt & Ablauf",
        "event_detail_meeting_text": "Alle weiteren Details werden im Event-Chat abgestimmt. Änderungen werden dort direkt mitgeteilt.",
        "event_detail_next_step": "Nächster Schritt",
        "event_detail_next_step_text": "Bestätige deine Teilnahme und nutze den Chat für Rückfragen.",
        "event_detail_default_desc": "Weitere Informationen zu diesem Event werden in der Nachbarschaft abgestimmt.",
        "event_detail_location_nearby": "In deiner Nachbarschaft",
        "event_detail_grill_desc": "Gemeinsames Grillen im Innenhof mit Nachbarn. Bring gerne eine Beilage oder ein Getränk mit.",
        "event_detail_hike_desc": "Entspannte Runde am See mit kurzen Pausen. Geeignet für alle, die gemeinsam draußen unterwegs sein möchten.",
        "event_detail_game_desc": "Brettspiele, Karten und kleine Snacks im Gemeinschaftsraum. Eigene Lieblingsspiele sind willkommen.",
        "event_detail_breakfast_desc": "Lockerer Austausch bei Kaffee und Frühstück für Selbstständige, Berufstätige und Interessierte aus der Nachbarschaft.",
        "event_detail_yoga_desc": "Ruhige Yoga-Session im Park. Bitte Matte oder Handtuch mitbringen. Anfänger sind willkommen.",
        "event_detail_art_desc": "Gemeinsames Zeichnen und kreativer Austausch im Park. Material kann mitgebracht oder geteilt werden.",
        "event_detail_location_courtyard": "Innenhof, Haus 4",
        "event_detail_location_lake": "Treffpunkt Seeeingang",
        "event_detail_location_common_room": "Gemeinschaftsraum",
        "event_detail_location_cafe_corner": "Nachbarschaftscafe Ecke",
        "event_detail_location_park_meadow": "Parkwiese am Spielplatz",
        "event_detail_location_park_pavilion": "Pavillon im Park",
        "group_join_button": "Beitreten",
        "group_joined_button": "Beigetreten",
        "group_joined_toast": "Gruppe beigetreten: {group}",
        "group_default_name": "Neue Gruppe",
        "group_created_toast": "Gruppe gegründet: {group}",
        "group_leave_confirm_title": "Gruppe verlassen?",
        "group_leave_confirm_text": "Wenn du die Gruppe verlässt, wird der Gruppenchat ausgeblendet. Du kannst später jederzeit wieder beitreten.",
        "group_leave_cancel": "In der Gruppe bleiben",
        "group_leave_confirm_button": "Gruppe verlassen",
        "group_left_toast": "Gruppe verlassen: {group}"
    },
    en: {
        "app_title": "Gartenzaun",
        "app_document_title": "Gartenzaun - Your neighborhood app",
        "default_profile_name": "Max Mustermann",
        "reset_button_aria": "Reset app",
        "reset_button_title": "Reset",
        "reset_confirm_message": "Reset all saved data?",
        "welcome_title": "Welcome to Gartenzaun",
        "welcome_subtitle": "Together we are stronger. Support your neighbors and get supported.",
        "feature_trust_title": "Trust",
        "feature_trust_desc": "Verified neighbors",
        "feature_share_title": "Share",
        "feature_share_desc": "Borrow tools & equipment",
        "feature_support_title": "Support",
        "feature_support_desc": "Mutual assistance",
        "btn_lets_go": "Let's go",

        "settings_title": "Settings",
        "settings_high_contrast": "High Contrast",
        "settings_large_font": "Large Font",
        "settings_language": "Language",
        "lang_de": "🇩🇪 German",
        "lang_en": "🇺🇸 English",

        "tts_title": "Read Aloud",

        "nav_home": "Home",
        "nav_support": "Support",
        "nav_share": "Share",
        "nav_events": "Events",
        "nav_profile": "Profile",

        "toast_large_font_on": "Large font enabled",
        "toast_large_font_off": "Large font disabled",
        "toast_high_contrast_on": "High contrast enabled",
        "toast_high_contrast_off": "High contrast disabled",
        
        "netiquette_title": "Our Netiquette",
        "netiquette_subtitle": "Rules for a positive community.",
        "netiquette_short_html": `
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">🤝</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">Be respectful</span>
                    <span class="netiquette-short-desc">Treat others the way you want to be treated.</span>
                </div>
            </div>
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">🛠️</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">Helpful & constructive</span>
                    <span class="netiquette-short-desc">Share your knowledge and support your neighbors.</span>
                </div>
            </div>
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">🔒</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">Respect privacy</span>
                    <span class="netiquette-short-desc">Respect the privacy and data of others.</span>
                </div>
            </div>
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">🛡️</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">No hate, no spam</span>
                    <span class="netiquette-short-desc">Discrimination, insults, and spam have no place here.</span>
                </div>
            </div>
            <div class="netiquette-short-item">
                <div class="netiquette-short-icon-wrapper">⚖️</div>
                <div class="netiquette-short-content">
                    <span class="netiquette-short-title">Follow the rules</span>
                    <span class="netiquette-short-desc">Together we ensure a safe and positive community.</span>
                </div>
            </div>
        `,
        "netiquette_long_html": `
            <p><strong>1) Respect and Politeness</strong><br>Treat all community members with respect. Insults, discrimination, or threats will not be tolerated.</p>
            <p><strong>2) Helpfulness</strong><br>This platform thrives on mutual exchange. Be open to helping others and say thank you when you receive help.</p>
            <p><strong>3) Privacy and Data</strong><br>Do not share private information of others without their consent. Be mindful of the data you share about yourself.</p>
            <p><strong>4) Constructive Exchange</strong><br>Discussions are welcome, but they should remain objective. Avoid spam and off-topic posts.</p>
            <p><strong>5) Safety First</strong><br>When meeting in person to hand over borrowed items, meet in safe, public places or verify the identity of the person.</p>
            <p><strong>6) Report Problematic Content</strong><br>If you notice violations of the Netiquette, please use the report function. This helps keep the community safe.</p>
        `,
        "netiquette_accept": "I accept the Netiquette and will abide by the rules.",
        "btn_all_clear": "Got it!",
        
        "address_title": "Where do you live?",
        "address_subtitle": "So we can show you neighbors in your area.",
        "address_placeholder": "Street and house number...",
        "address_radius": "Search radius",
        "personal_data_title": "Personal data",
        "personal_data_subtitle": "Please enter your real name and address so we can identify your neighborhood.",
        "first_name_label": "First name *",
        "first_name_placeholder": "e.g. Maria",
        "last_name_label": "Last name *",
        "last_name_placeholder": "e.g. Smith",
        "real_name_note": "Please enter your real name here. It is used to build trust and support neighborhood help inside the app.",
        "street_label": "Street and house number",
        "street_placeholder": "e.g. Tulip Lane 12",
        "zip_city_label": "Postal code and city",
        "zip_city_placeholder": "e.g. 12345 Neustadt",
        "desired_radius_title": "Preferred radius",
        "desired_radius_subtitle": "How far should your neighborhood reach?",
        "radius_50m": "50 meters",
        "radius_50m_desc": "Direct neighbors (about 10 homes)",
        "radius_100m": "100 meters",
        "radius_100m_desc": "Your whole street (recommended)",
        "radius_500m": "500 Meters",
        "radius_500m_desc": "Your entire neighborhood",
        "btn_verify_address": "Verify Address",
        "address_loading": "Checking address...",
        "address_osm_unreachable": "Validation server could not be reached.",
        "address_error_required_fields": "Please fill in first name, last name, street, postal code and city.",
        "address_error_missing_house_number": "Please enter street and house number so the address can be checked clearly.",
        "address_checking_osm": "Checking address ...",
        "address_error_not_found": "This address could not be found clearly. Please check street, house number, postal code and city.",
        "address_success_confirmed": "Address confirmed: {address}",
        "address_error_osm_failed": "The validation check failed. Please check your internet connection and try again.",
        "toast_address_confirmed": "Address successfully confirmed",
        "btn_next": "Next",
        "btn_back": "Back",
        "btn_skip": "Skip",
        
        "verify_title": "Trust & Safety",
        "verify_subtitle": "Choose a method to confirm your address and become a verified member.",
        "opt_postcard_title": "Postcard with QR Code",
        "opt_postcard_desc": "We will send a postcard to your home. Scan the code to confirm.",
        "opt_video_title": "Video-Ident (Fast track)",
        "opt_video_desc": "Confirm your identity in a few steps via webcam or smartphone camera.",
        "opt_neighbor_title": "Neighbor Confirmation",
        "opt_neighbor_desc": "An already verified neighbor from your street confirms your identity.",
        "opt_eid_title": "eID",
        "opt_eid_desc": "German online ID function (eID) via the official AusweisApp.",
        "btn_verify_start": "Start verification",
        
        "eid_intro_title": "eID Verification",
        "eid_intro_desc": "To verify using the official German online ID function (eID), you need the AusweisApp from the Federal Office for Information Security (BSI). By clicking the button below, you will be redirected to the App Store, or the app will be opened on your device.",
        "btn_to_eid": "To eID",
        
        "sim_title_running": "Verification in progress",
        "sim_subtitle_running": "Follow the instructions on the screen.",
        
        "profile_setup_title": "Complete Profile",
        "profile_setup_subtitle": "These details are optional, but help your neighbors get to know you better.",
        "label_interests": "Your Interests",
        "desc_interests": "What are you interested in? (Multiple selection possible)",
        "btn_add": "Add",
        "label_skills": "Your Talents & Skills",
        "desc_skills": "How can you support others? (Multiple selection possible)",
        "label_lend_items": "Items you would lend",
        "desc_lend_items": "Enter items separated by commas",
        "btn_next_profile_picture": "Continue to Profile Picture",
        
        "profile_design_title": "Design Profile",
        "profile_design_subtitle": "You can upload a profile picture, create an avatar, or skip this step.",
        "btn_create_avatar": "Create Avatar",
        "btn_upload_photo": "Upload Photo",
        "btn_delete_photo": "Delete Photo",
        "btn_delete_avatar": "Delete Avatar",
        "btn_add_photo": "Add Photo",
        
        "badge_verified": "✓ Verified Neighbor",
        "verified_neighbor_label": "Verified neighbor",
        "verified_member_title": "Verified member",
        "profile_picture_alt": "Profile picture",
        "profile_name_label": "Your name",
        "profile_address_radius_title": "Your address & radius",
        "profile_neighbor_radius_label": "Neighbor radius",
        "profile_my_interests_title": "My interests",
        "profile_no_interests": "No interests selected",
        "profile_my_skills_title": "My skills (I can help with...)",
        "profile_skill_shopping": "🛒 Bring groceries",
        "profile_skill_garden": "🌱 Take care of gardens & plants",
        "profile_skill_tech": "🔧 Explain technology & repairs",
        "profile_skill_craft": "🔨 Handywork",
        "profile_skill_animals": "🐾 Pet care",
        "profile_skill_chat": "💬 Keep company",
        "profile_lend_items_title": "Items to lend",
        "profile_lend_items_placeholder": "e.g. telescopic ladder, hammer drill",
        "profile_privacy_security_title": "Privacy & security",
        "profile_privacy_hide_house_number": "Hide house number from non-neighbors",
        "profile_privacy_hide_online_status": "Do not show online status",
        "profile_logout": "Log out",
        "profile_skill_updated_toast": "{skill} updated",
        "profile_logged_out_toast": "Logged out",
        "toast_id_confirmed": "Your identity was successfully confirmed 💚",
        "toast_welcome": "Welcome to the neighborhood! 🎉",
        "toast_lang_change": "Language changed.",
        "toast_avatar_saved": "Avatar saved!",
        "toast_photo_removed": "Photo removed.",
        "toast_avatar_removed": "Avatar removed.",

        "share_kicker": "Share & Borrow",
        "share_title": "Borrow things without searching far.",
        "share_subtitle": "Find tools, garden equipment, and everyday helpers near you. Requests, handover, and return stay protected within the neighborhood.",
        "share_add_item": "Add an item",
        "share_available_today": "Available today",
        "share_items_nearby": "4 items near you",
        "share_search_placeholder": "What are you looking for today?",
        "share_search_aria": "What would you like to borrow?",
        "share_filter_aria": "Show filters",
        "share_filter_categories": "Categories",
        "share_filter_options": "Options",
        "share_cat_tools": "Tools",
        "share_cat_garden": "Garden",
        "share_cat_household": "Household",
        "share_cat_sports": "Leisure & sports",
        "share_only_available": "Only available",
        "share_location": "Share location",
        "share_sort": "Sort",
        "share_sort_distance": "Distance",
        "share_sort_condition": "Condition",
        "share_sort_newest": "Newest first",
        "share_stat_listings": "Listings",
        "share_stat_categories": "Categories",
        "share_stat_nearest": "nearest offer",
        "share_back_aria": "Back to overview",
        "share_status_available": "Available",
        "share_status_borrowed": "Currently borrowed",
        "share_request_running": "Request pending",
        "share_view_details": "View details",
        "share_condition_label": "Condition",
        "share_count_label": "Count",
        "share_distance_away": "{distance} m away",
        "share_available_label": "Available",
        "share_owner_label": "Provider",
        "share_item_image_aria": "Item image",
        "modal_close_aria": "Close",
        "share_add_modal_title": "Add an item",
        "share_add_steps_aria": "Input steps",
        "share_add_item_title_label": "Item title",
        "share_add_item_title_placeholder": "e.g. scarifier, drill",
        "share_add_category_label": "Category",
        "share_add_description_label": "Description",
        "share_add_description_placeholder": "Briefly describe what the item is useful for.",
        "share_add_photos_label": "Upload photos",
        "share_add_photos_hint": "Multiple photos are possible. The preview is simulated locally.",
        "share_condition_new": "new",
        "share_condition_very_good": "very good",
        "share_condition_used": "used",
        "share_add_count_label": "Available quantity",
        "share_add_manual_link_label": "Optional: manual link",
        "share_add_available_from_label": "Available from",
        "share_add_available_to_label": "Available until",
        "share_add_options_label": "Lending option",
        "share_add_free_option": "Lend for free",
        "share_add_effort_option": "For a small non-monetary favor",
        "share_add_confirmed_only_option": "Visible only to verified neighbors",
        "share_add_deposit_label": "Deposit system",
        "share_add_deposit_none": "No deposit",
        "share_add_deposit_voluntary": "Voluntary deposit",
        "share_add_deposit_digital": "Digital deposit (simulation)",
        "share_add_deposit_amount_label": "Amount",
        "share_add_deposit_amount_placeholder": "20 € deposit",
        "share_add_deposit_method_label": "Method",
        "share_add_payment_card": "Credit card",
        "share_add_secure_handover_title": "Secure handover",
        "share_add_secure_handover_text": "Address details are not publicly visible and are only shown between lender and borrower after the request is accepted.",
        "share_add_floor_label": "Floor",
        "share_add_floor_placeholder": "e.g. 2nd floor",
        "share_add_pickup_times_label": "Preferred pickup times",
        "share_add_pickup_times_placeholder": "e.g. weekdays after 6 PM",
        "share_add_handover_label": "Doorbell and handover notes",
        "share_add_handover_placeholder": "e.g. ring Müller, handover in the courtyard.",
        "share_add_submit": "Add item",
        "share_detail_address_protected_title": "Address details protected",
        "share_detail_address_protected_text": "Street, house number, floor, doorbell, and handover notes are only shown after the request is accepted.",
        "share_detail_deposit_title": "Deposit",
        "share_detail_deposit_none_required": "No deposit required.",
        "share_detail_deposit_method": " via {method}",
        "share_detail_deposit_amount_open": "Amount open",
        "share_detail_deposit_visibility_accepted": "simulated as reserved and released after return",
        "share_detail_deposit_visibility_pending": "simulated as reserved only after acceptance",
        "share_detail_to_be_arranged": "to be arranged",
        "share_detail_by_agreement": "by agreement",
        "share_detail_address_after_acceptance": "Address visible after acceptance",
        "share_detail_bell_after_acceptance": "Doorbell note after acceptance",
        "share_detail_address_label": "Address",
        "share_detail_bell_label": "Doorbell",
        "share_detail_notes_label": "Notes",
        "share_detail_pickup_times_label": "Pickup times",
        "share_detail_unavailable_title": "Not available",
        "share_detail_unavailable_text": "This item is currently borrowed.",
        "share_detail_send_request_title": "Send request",
        "share_detail_start_date_label": "Start date",
        "share_detail_return_date_label": "Return date",
        "share_detail_message_label": "Message to the lender",
        "share_detail_message_placeholder": "Briefly explain what you need the item for.",
        "share_detail_send_request_button": "Send request",
        "share_detail_request_owner_title": "Request to lender",
        "share_detail_request_sent_to_owner": "Simulated notification was sent to {owner}.",
        "share_detail_start_open": "Start open",
        "share_detail_until": "until",
        "share_detail_return_open": "Return open",
        "share_detail_no_message": "No message",
        "share_detail_accept_request": "Accept request",
        "share_detail_ask_question": "Ask a question",
        "share_detail_decline_request": "Decline request",
        "share_detail_request_declined_title": "Request declined",
        "share_detail_request_declined_text": "You can send a new request with different dates.",
        "share_detail_question_title": "Question asked",
        "share_detail_question_text": "The lender asked for details. Use the chat to coordinate the handover.",
        "share_detail_open_chat": "Open chat",
        "share_detail_loan_active_title": "Loan active",
        "share_detail_care_confirmation": "I confirm that I will handle the item carefully and return it in the agreed condition.",
        "share_detail_complete_handover": "Complete handover",
        "share_detail_status_title": "Status",
        "share_detail_status_request_sent": "Request sent",
        "share_detail_status_owner_acceptance": "Accepted by lender",
        "share_detail_status_handover_confirmed": "Handover confirmed",
        "share_detail_status_return_done": "Return completed",
        "share_detail_deposit_release_text": "Deposit release is simulated after both sides confirm the return.",
        "share_detail_return_process_title": "Return process",
        "share_detail_borrower_returned": "Borrower: item returned",
        "share_detail_owner_received": "Lender: return received",
        "share_detail_return_note_placeholder": "Optional: document condition",
        "share_toast_request_sent": "New request sent",
        "share_notification_request_sent": "New request was simulated and sent to the lender.",
        "share_toast_request_accepted": "Request accepted",
        "share_notification_request_accepted": "Request accepted: loan process was created.",
        "share_toast_request_declined": "Request declined",
        "share_notification_request_declined": "Request was declined.",
        "share_toast_question_sent": "Question asked",
        "share_notification_question_sent": "Question was simulated and sent.",
        "share_toast_confirm_care_first": "Please confirm careful handling first.",
        "share_toast_handover_complete": "Handover completed",
        "share_notification_handover_complete": "Handover confirmed. Return reminder is active.",
        "share_toast_return_complete": "Return completed. Deposit release simulated.",
        "share_notification_return_complete": "Successful completion: return confirmed and deposit released.",
        "chat_report_title": "Report content",
        "chat_report_aria": "Report post",
        "chat_welcome_initial": "Hi! How can I support you in the neighborhood or in the app?",
        "chat_input_placeholder": "Write a message...",
        "chat_send_button": "Send",
        "chat_welcome_default": "Write a message to start the conversation.",
        "chat_welcome_with_topic": "{topic}: Write a message to start the conversation.",
        "chat_type_ambassador": "Ambassador chat",
        "chat_type_group": "Group chat",
        "chat_type_borrow": "Borrowing: {item}",
        "chat_type_support": "Support: {topic}",
        "chat_type_event": "Event chat",
        "chat_report_sent": "Report sent: {reason}",
        "events_kicker": "Events & meetups",
        "events_page_title": "Events in your neighborhood",
        "events_page_subtitle": "Find meetups, activities, and shared events right around you.",
        "events_next_label": "Up next",
        "events_next_summary": "6 upcoming events near you",
        "event_menu_aria": "Open menu",
        "event_notifications_aria": "Notifications",
        "event_search_placeholder": "Search events...",
        "event_search_aria": "Search events",
        "event_filter_categories": "Categories",
        "event_cat_food": "Food & drinks",
        "event_cat_outdoor": "Outdoor",
        "event_cat_sport": "Sport & movement",
        "event_cat_culture": "Culture & creative",
        "event_cat_community": "Community",
        "event_filter_reset": "Reset filters",
        "event_tabs_aria": "Event view",
        "event_tab_upcoming": "Upcoming events",
        "event_tab_past": "Past events",
        "event_join_button": "I'm in!",
        "event_joined_button": "You're in",
        "event_joined_toast": "Participation confirmed: {event}",
        "event_left_toast": "Participation removed",
        "event_status_open": "Open",
        "event_status_closed": "Closed",
        "events_empty_state": "No events in this view.",
        "event_add_button": "Add event",
        "event_create_aria": "Create new event",
        "event_add_modal_title": "Add event",
        "event_add_title_label": "Event name",
        "event_add_title_placeholder": "e.g. neighborhood brunch",
        "event_add_category_label": "Category",
        "event_add_participants_label": "Max. participants",
        "event_add_unlimited_label": "Unlimited",
        "event_add_status_label": "Event type",
        "event_add_time_label": "Time",
        "event_add_location_placeholder": "e.g. courtyard, building 4",
        "event_add_image_label": "Upload image",
        "event_add_image_hint": "If no image is selected, the event uses a matching category image.",
        "event_add_description_label": "Description",
        "event_add_description_placeholder": "What is this event about?",
        "event_add_cancel": "Cancel",
        "event_add_submit": "Create event",
        "event_add_default_title": "New neighborhood event",
        "event_participants_label": "participants",
        "event_detail_you": "You",
        "event_created_toast": "Event created: {event}",
        "event_edit_button": "Edit event",
        "event_delete_button": "Delete event",
        "event_edit_modal_title": "Edit event",
        "event_edit_submit": "Save changes",
        "event_updated_toast": "Event updated: {event}",
        "event_deleted_toast": "Event deleted: {event}",
        "event_delete_confirm": "Delete this event?",
        "event_detail_back": "Back to events",
        "event_detail_date_label": "Date",
        "event_detail_location_label": "Location",
        "event_detail_participants_label": "Participants",
        "event_detail_organizer_label": "Organized by",
        "event_detail_join_title": "Join",
        "event_detail_join_text": "Sign up or open the event chat to ask questions and coordinate details.",
        "event_detail_open_chat": "Open event chat",
        "event_detail_meeting_title": "Meeting point & plan",
        "event_detail_meeting_text": "All further details are coordinated in the event chat. Changes are shared there directly.",
        "event_detail_next_step": "Next step",
        "event_detail_next_step_text": "Confirm your participation and use the chat for questions.",
        "event_detail_default_desc": "More details for this event will be coordinated in the neighborhood.",
        "event_detail_location_nearby": "In your neighborhood",
        "event_detail_grill_desc": "A shared barbecue in the courtyard with neighbors. Feel free to bring a side dish or drink.",
        "event_detail_hike_desc": "A relaxed walk by the lake with short breaks. Suitable for anyone who wants to spend time outside together.",
        "event_detail_game_desc": "Board games, cards, and small snacks in the community room. Favorite games are welcome.",
        "event_detail_breakfast_desc": "A casual exchange over coffee and breakfast for freelancers, professionals, and interested neighbors.",
        "event_detail_yoga_desc": "A calm yoga session in the park. Please bring a mat or towel. Beginners are welcome.",
        "event_detail_art_desc": "Drawing together and creative exchange in the park. Materials can be brought or shared.",
        "event_detail_location_courtyard": "Courtyard, building 4",
        "event_detail_location_lake": "Lake entrance meeting point",
        "event_detail_location_common_room": "Community room",
        "event_detail_location_cafe_corner": "Neighborhood cafe corner",
        "event_detail_location_park_meadow": "Park meadow by the playground",
        "event_detail_location_park_pavilion": "Park pavilion",
        "group_join_button": "Join",
        "group_joined_button": "Joined",
        "group_joined_toast": "Joined group: {group}",
        "group_default_name": "New group",
        "group_created_toast": "Group created: {group}",
        "group_leave_confirm_title": "Leave group?",
        "group_leave_confirm_text": "If you leave the group, the group chat will be hidden. You can join again at any time.",
        "group_leave_cancel": "Stay in group",
        "group_leave_confirm_button": "Leave group",
        "group_left_toast": "Left group: {group}"
    }
};

let currentLang = 'de';

const autoTextTranslations = {
    en: {
        "Netiquette": "Netiquette",
        "Hilfe": "Help",
        "Über uns": "About us",
        "FAQs": "FAQs",
        "Zurück": "Back",
        "Schließen": "Close",
        "Verstanden": "Understood",
        "Persönliche Daten": "Personal data",
        "Bitte gib deinen echten Namen und deine Adresse an, damit wir deine Nachbarschaft bestimmen können.": "Please enter your real name and address so we can identify your neighborhood.",
        "Vorname *": "First name *",
        "Nachname *": "Last name *",
        "Bitte gib hier deinen echten Namen an. Dieser wird für Vertrauen und Nachbarschaftshilfe innerhalb der App verwendet.": "Please enter your real name here. It is used to build trust and support neighborhood help inside the app.",
        "Straße & Hausnummer": "Street and house number",
        "Postleitzahl & Ort": "Postal code and city",
        "Gewünschter Umkreis": "Preferred radius",
        "Wie weit soll deine Nachbarschaft reichen?": "How far should your neighborhood reach?",
        "50 Meter": "50 meters",
        "Direkte Nachbarn (ca. 10 Häuser)": "Direct neighbors (about 10 homes)",
        "100 Meter": "100 meters",
        "Deine gesamte Straße (Empfohlen)": "Your whole street (recommended)",
        "Eigenes Interesse hinzufügen…": "Add your own interest...",
        "Eigenes Talent hinzufügen…": "Add your own skill...",
        "Gärtnern": "Gardening",
        "Kochen & Essen": "Cooking & food",
        "Bewegung & Sport": "Exercise & sports",
        "Nachhaltigkeit": "Sustainability",
        "Kultur & Musik": "Culture & music",
        "Spiele & Gesellschaft": "Games & socializing",
        "Tiere & Natur": "Animals & nature",
        "Nachbarschaftsaktionen": "Neighborhood activities",
        "Technik & Medien": "Technology & media",
        "Gemeinschaft": "Community",
        "Gartenarbeit": "Gardening",
        "Handwerkliches": "Handywork",
        "Technikhilfe": "Tech help",
        "Kochen & Backen": "Cooking & baking",
        "Einkaufshilfe": "Shopping help",
        "Kinderbetreuung": "Childcare",
        "Tierbetreuung": "Pet care",
        "Organisation": "Organization",
        "Sprachkenntnisse": "Language skills",
        "Kreatives": "Creative work",
        "Fotografie": "Photography",
        "Reisen": "Travel",
        "Nachhilfe": "Tutoring",
        "Umzugshilfe": "Moving help",
        "Erste Hilfe": "First aid",
        "Sicherheit & Vertrauen": "Safety & trust",
        "Mehr Informationen": "More information",
        "QR-Code einscannen (Simulieren)": "Scan QR code (simulate)",
        "Video-Ident abschließen (Simulieren)": "Complete video ID (simulate)",
        "Abbrechen": "Cancel",
        "Home": "Home",
        "Unterstützung": "Support",
        "Teilen": "Share",
        "Events": "Events",
        "Profil": "Profile",
        "Deine Botschafter": "Your ambassadors",
        "Helga eine Frage stellen": "Ask Helga a question",
        "Nachbarschafts-Gruppen": "Neighborhood groups",
        "+ Neue Gruppe": "+ New group",
        "Beitreten": "Join",
        "Beigetreten": "Joined",
        "Deine Auszeichnungen": "Your badges",
        "Erst-Unterstützer": "First supporter",
        "Teil-Profi": "Sharing pro",
        "Naturfreund": "Nature friend",
        "Faire Unterstützung": "Fair support",
        "Unterstützung ist freiwillig und unentgeltlich.": "Support is voluntary and unpaid.",
        "Zuverlässigkeit: Absprachen bitte einhalten.": "Reliability: please keep agreements.",
        "Private Details gehören nur in den direkten Chat.": "Private details belong only in direct chat.",
        "Wertschätzender Umgang miteinander ist Pflicht.": "Respectful interaction is required.",
        "Ich kann unterstützen": "I can help",
        "Ich brauche Unterstützung": "I need help",
        "Bereich auswählen": "Choose a category",
        "Einkäufe": "Shopping",
        "Technik-Unterstützung": "Tech support",
        "Garten": "Garden",
        "Technik": "Technology",
        "Sonstiges": "Other",
        "Beschreibung deiner Anfrage": "Describe your request",
        "Unterstützungsanfrage absenden": "Send support request",
        "Unterstützung anbieten": "Offer support",
        "Faire Nutzung": "Fair use",
        "Gegenstände sorgfältig und sauber behandeln.": "Handle items carefully and keep them clean.",
        "Pünktlich zum vereinbarten Termin zurückgeben.": "Return items on time as agreed.",
        "Bei Schäden sofort den Besitzer informieren.": "Inform the owner immediately if something is damaged.",
        "Danke sagen nicht vergessen!": "Do not forget to say thank you.",
        "Verfügbare Gegenstände": "Available items",
        "+ Gegenstand teilen": "+ Share item",
        "Schlagbohrmaschine": "Hammer drill",
        "Kräftige Bohrmaschine für Beton, Stein und schwere Regalbretter.": "Powerful drill for concrete, stone, and heavy shelves.",
        "3m Teleskopleiter": "3 m telescopic ladder",
        "Stabile Leiter für Fenster, Garage und kleinere Reparaturen.": "Stable ladder for windows, garages, and smaller repairs.",
        "E-Lastenrad": "Electric cargo bike",
        "Elektrisches Lastenrad für Einkäufe, Kisten oder kurze Transporte.": "Electric cargo bike for groceries, crates, or short transports.",
        "Elektrische Heckenschere": "Electric hedge trimmer",
        "Für Hecken und Sträucher, inklusive Verlängerungskabel.": "For hedges and shrubs, including extension cable.",
        "sehr gut": "very good",
        "gebraucht": "used",
        "neu": "new",
        "20 € Pfand": "20 € deposit",
        "50 € Kaution": "50 € deposit",
        "Kellerabteil": "basement compartment",
        "Klingel Weber": "doorbell Weber",
        "Übergabe am Hoftor, bitte vorher kurz klingeln.": "Handover at the courtyard gate; please ring briefly beforehand.",
        "werktags ab 18 Uhr": "weekdays after 6 PM",
        "Leiter steht nach Annahme in der Garage bereit.": "The ladder will be ready in the garage after acceptance.",
        "Samstagvormittag oder abends": "Saturday morning or evenings",
        "Hof": "courtyard",
        "Akku und Schlüssel werden gemeinsam geprüft.": "Battery and key are checked together.",
        "Mo, Mi, Fr 17-20 Uhr": "Mon, Wed, Fri 5-8 PM",
        "Gartenhaus": "garden shed",
        "Ausleihen": "Borrow",
        "Sofort verfügbar": "Available now",
        "Derzeit ausgeliehen": "Currently borrowed",
        "Event-Kalender": "Event calendar",
        "Ich bin dabei!": "I'm in!",
        "Event-Chat": "Event chat",
        "Dein Name": "Your name",
        "Deine Adresse & Umkreis": "Your address & radius",
        "Nachbar-Umkreis": "Neighbor radius",
        "Meine Interessen": "My interests",
        "Keine Interessen ausgewählt": "No interests selected",
        "Meine Fähigkeiten (Ich kann unterstützen bei...)": "My skills (I can help with...)",
        "Einkäufe mitbringen": "Bring groceries",
        "Garten & Pflanzen pflegen": "Take care of gardens & plants",
        "Technik & Handwerk erklären": "Explain technology & repairs",
        "Handwerk": "Handywork",
        "Haustier-Betreuung": "Pet care",
        "Gesellschaft leisten": "Keep company",
        "Gegenstände zum Verleihen": "Items to lend",
        "Barrierefreiheit & Einstellungen": "Accessibility & settings",
        "Privatsphäre & Sicherheit": "Privacy & security",
        "Hausnummer für Nicht-Nachbarn verbergen": "Hide house number from non-neighbors",
        "Online-Status nicht anzeigen": "Do not show online status",
        "Abmelden": "Log out",
        "Gartenzaun-Netiquette": "Gartenzaun netiquette",
        "Unterstützung & Kontakt": "Support & contact",
        "Über Gartenzaun": "About Gartenzaun",
        "Häufige Fragen": "Frequently asked questions",
        "Chat mit Helga": "Chat with Helga",
        "Inhalt melden": "Report content",
        "Senden": "Send",
        "Warum Verifizierung?": "Why verification?",
        "Beitrag melden": "Report post",
        "Was möchtest du melden?": "What would you like to report?",
        "Unangemessener Inhalt": "Inappropriate content",
        "Beleidigungen, Hassrede, Gewalt": "Insults, hate speech, violence",
        "Spam / Werbung": "Spam / advertising",
        "Unerwünschte Werbung oder Spam": "Unwanted ads or spam",
        "Falsche Informationen": "False information",
        "Irreführende oder falsche Inhalte": "Misleading or false content",
        "Betrug / Scam": "Fraud / scam",
        "Verdächtige Aktivitäten oder Betrugsversuche": "Suspicious activity or fraud attempts",
        "Etwas anderes": "Something else",
        "Deine Meldung ist anonym und hilft, unsere Nachbarschaft sicher zu halten.": "Your report is anonymous and helps keep our neighborhood safe.",
        "Neue Gruppe gründen": "Create a new group",
        "Name der Gruppe": "Group name",
        "Beschreibung": "Description",
        "Gruppe gründen": "Create group",
        "Gegenstand zum Teilen hinzufügen": "Add an item to share",
        "Name des Gegenstands": "Item name",
        "Kategorie / Symbol": "Category / symbol",
        "Avatar erstellen": "Create avatar",
        "Kopfform": "Head shape",
        "Rund": "Round",
        "Oval": "Oval",
        "Eckig": "Square",
        "Hautfarbe": "Skin tone",
        "Frisur": "Hair style",
        "Kurz": "Short",
        "Emo": "Side fringe",
        "Lange Haare": "Long hair",
        "Lockig": "Curly",
        "Keine": "None",
        "Haarfarbe": "Hair color",
        "Kopf & Gesicht": "Head & face",
        "Ohne": "None",
        "Brille": "Glasses",
        "Sonnenbrille": "Sunglasses",
        "Mütze": "Cap",
        "Bart": "Beard",
        "Schnäuzer": "Mustache",
        "Vollbart": "Full beard",
        "Ohrringe": "Earrings",
        "Perlenstecker": "Pearl studs",
        "Creolen": "Hoops",
        "Avatar speichern": "Save avatar"
    }
};

Object.assign(autoTextTranslations.en, {
    "Gartenzaun - Deine Nachbarschafts-App": "Gartenzaun - Your neighborhood app",
    "Deutsch": "German",
    "English": "English",
    "Lese QR-Code von Postkarte ein...": "Reading postcard QR code...",
    "Warte auf Bestätigung...": "Waiting for confirmation...",
    "Tulpenweg 12 (Verifiziert)": "Tulip Lane 12 (verified)",
    "Tulpenweg 8 (Verifiziert)": "Tulip Lane 8 (verified)",
    "Tulpenweg 15 (Verifiziert)": "Tulip Lane 15 (verified)",
    "Anfragen": "Request",
    "Nachbarschafts-Barometer": "Neighborhood barometer",
    "Gemeinschaftsziel": "Community goal",
    "Ehrenamtliche Botschafterin": "Volunteer ambassador",
    "14 Nachbarn aktiv": "14 neighbors active",
    "8 Nachbarn aktiv": "8 neighbors active",
    "19 Nachbarn aktiv": "19 neighbors active",
    "Chat": "Chat",
    "Chat mit Klaus": "Chat with Klaus",
    "Chat mit Krauses": "Chat with the Krause family",
    "Gartenfreunde Tulpenweg": "Tulip Lane garden friends",
    "Lastenrad-Gemeinschaft": "Cargo-bike community",
    "Kaffeeklatsch am Sonntag": "Sunday coffee meetup",
    "Inge Müller (Hausnr. 14)": "Inge Müller (house no. 14)",
    "Karl Becker (Hausnr. 9)": "Karl Becker (house no. 9)",
    "Sabine & Paul (Hausnr. 22)": "Sabine & Paul (house no. 22)",
    "Entsorgung": "Disposal",
    "Schlagbohrmaschine": "Hammer drill",
    "3m Teleskopleiter": "3m telescopic ladder",
    "E-Lastenrad": "Electric cargo bike",
    "Elektr. Heckenschere": "Electric hedge trimmer",
    "von Klaus Weber (Hausnr. 12)": "from Klaus Weber (house no. 12)",
    "von Dieter Müller (Hausnr. 8)": "from Dieter Müller (house no. 8)",
    "von Familie Krause (Hausnr. 15)": "from the Krause family (house no. 15)",
    "von Sabine & Paul (Hausnr. 22)": "from Sabine & Paul (house no. 22)",
    "Aktuell verliehen": "Currently borrowed",
    "Ausgeliehen": "Borrowed",
    "Gemeinsame Aktionen": "Community activities",
    "Zusagen sind verbindlich – bitte rechtzeitig absagen.": "Commitments are binding - please cancel in time.",
    "Gemeinsam anpacken: Jede helfende Hand zählt.": "Pitch in together: every helping hand counts.",
    "Müll vermeiden und den Treffpunkt sauber hinterlassen.": "Avoid waste and leave the meeting point clean.",
    "Respektvoller Austausch bei allen Begegnungen.": "Respectful exchange in every interaction.",
    "Sauberes Viertel: Müllsammel-Aktion": "Clean neighborhood: litter cleanup",
    "Plätzchentausch & Sommerkaffee": "Cookie swap & summer coffee",
    "Garten-Mit-Mach-Tag": "Garden participation day",
    "Samstag, 13. Juni um 10:00 Uhr": "Saturday, June 13 at 10:00",
    "Sonntag, 21. Juni um 15:00 Uhr": "Sunday, June 21 at 15:00",
    "Samstag, 27. Juni um 11:00 Uhr": "Saturday, June 27 at 11:00",
    "Treffpunkt: Am Spielplatz Tulpenweg": "Meeting point: Tulip Lane playground",
    "Treffpunkt: Helgas Vorgarten (Hausnr. 12)": "Meeting point: Helga's front garden (house no. 12)",
    "Treffpunkt: Gemeinschaftsgarten Ecke Tulpenweg/Hauptstr.": "Meeting point: community garden at Tulip Lane/Main St.",
    "8 Nachbarn nehmen teil": "8 neighbors are joining",
    "12 Nachbarn nehmen teil": "12 neighbors are joining",
    "5 Nachbarn nehmen teil": "5 neighbors are joining",
    "Verifiziertes Mitglied": "Verified member",
    "Erfolgreich durchgeführt!": "Successfully completed!",
    "Wie funktioniert das Ausleihen?": "How does borrowing work?",
    "Kostet Gartenzaun Geld?": "Does Gartenzaun cost money?",
    "Wer betreibt die App?": "Who runs the app?",
    "Entwickelt mit Herz, Engagement und viel Liebe für unsere Nachbarschaft. ❤️": "Built with heart, commitment, and a lot of love for our neighborhood.",
    "Ist mein Profil öffentlich?": "Is my profile public?",
    "Wer sind die Botschafter?": "Who are the ambassadors?",
    "Kann ich Gegenstände wieder löschen?": "Can I delete shared items again?",
    "Gartenzaun bringt echte Nachbarinnen und Nachbarn zusammen.": "Gartenzaun brings real neighbors together.",
    "Damit sich alle sicher fühlen können, ist es wichtig, dass jede Person ihre Identität bestätigt.": "So everyone can feel safe, it is important that each person confirms their identity.",
    "Die Verifizierung schützt die Gemeinschaft vor Fake-Profilen und sorgt dafür, dass Vertrauen entstehen kann.": "Verification protects the community from fake profiles and helps trust grow.",
    "Deine Daten sind bei uns sicher. Wir halten uns an die DSGVO und speichern deine Daten auf einem deutschen Server.": "Your data is safe with us. We comply with GDPR and store your data on a German server.",
    "Goatee": "Goatee"
});

Object.assign(autoTextTranslations.en, {
    "FÃ¼r ein gutes und respektvolles Miteinander am Gartenzaun.": "For respectful and positive interaction at the garden fence.",
    "Respektvoll sein": "Be respectful",
    "Hilfsbereit & konstruktiv": "Helpful & constructive",
    "PrivatsphÃ¤re achten": "Respect privacy",
    "Kein Hass, kein Spam": "No hate, no spam",
    "Regeln einhalten": "Follow the rules",
    "ZurÃ¼ck": "Back",
    "Bitte richte dein Gesicht im Kreis aus": "Please align your face inside the circle",
    "Halte den QR-Code auf der RÃ¼ckseite deiner Gartenzaun-Postkarte vor die Kamera.": "Hold the QR code on the back of your Gartenzaun postcard in front of the camera.",
    "Halte deinen Personalausweis neben dein Gesicht und blicke in die Kamera.": "Hold your ID card next to your face and look into the camera.",
    "WÃ¤hle einen Nachbarn aus deiner direkten Umgebung aus, der deine IdentitÃ¤t kennt:": "Choose a neighbor nearby who knows your identity:",
    "Wir haben eine Anfrage an den Nachbarn gesendet. Dies dauert normalerweise einen Moment.": "We sent a request to the neighbor. This usually takes a moment.",
    "Helga Schmidt": "Helga Schmidt",
    "Dieter MÃ¼ller": "Dieter Müller",
    "Familie Krause": "Krause family",
    "ðŸŒ³ Nachbarschafts-Barometer": "Neighborhood barometer",
    "Unsere Nachbarschaft blÃ¼ht! Diese Woche gab es bereits 8 geteilte GegenstÃ¤nde oder gegenseitige UnterstÃ¼tzungen.": "Our neighborhood is thriving! This week there have already been 8 shared items or mutual support actions.",
    "ðŸ† Gemeinschaftsziel": "Community goal",
    "Ziel: 10 gute Taten diese Woche. Noch 2 bis zum goldenen Kleeblatt-Abzeichen fÃ¼r alle!": "Goal: 10 good deeds this week. Only 2 more until everyone earns the golden clover badge!",
    "â€žIch unterstÃ¼tze dich sehr gerne bei den ersten Schritten in der App oder erklÃ¤re dir, wie das Teilen funktioniert. Sprich mich einfach an!â€œ": "\"I am happy to help you with your first steps in the app or explain how sharing works. Just ask me!\"",
    "ðŸ‘¥ Nachbarschafts-Gruppen": "Neighborhood groups",
    "ðŸŒ± Gartenfreunde Tulpenweg": "Tulip Lane garden friends",
    "ðŸš² Lastenrad-Gemeinschaft": "Cargo-bike community",
    "â˜• Kaffeeklatsch am Sonntag": "Sunday coffee meetup",
    "ðŸ’¬ Chat": "Chat",
    "ðŸ’š Faire UnterstÃ¼tzung": "Fair support",
    "Hier siehst du, wer in deiner NÃ¤he UnterstÃ¼tzung sucht. Klicke auf eine Karte, um UnterstÃ¼tzung anzubieten.": "Here you can see who nearby is looking for support. Click a card to offer help.",
    "ðŸ›’ EinkÃ¤ufe": "Shopping",
    "ðŸ”§ Technik-UnterstÃ¼tzung": "Tech support",
    "ðŸ—‘ï¸ Entsorgung": "Disposal",
    "â€žIch schaffe es diese Woche leider nicht zum Supermarkt. KÃ¶nnte mir jemand Ã„pfel, Brot und Milch mitbringen?â€œ": "\"I cannot make it to the supermarket this week. Could someone bring me apples, bread, and milk?\"",
    "â€žMein Drucker druckt leider nicht mehr rot. Kennt sich jemand mit Canon-Druckern aus?â€œ": "\"My printer unfortunately no longer prints red. Does anyone know Canon printers?\"",
    "â€žWir haben Holzschnitt im Garten und kein groÃŸes Auto. FÃ¤hrt demnÃ¤chst jemand zum Wertstoffhof?â€œ": "\"We have wood cuttings in the garden and no large car. Is anyone going to the recycling center soon?\"",
    "WÃ¤hle einen Bereich aus und beschreibe kurz, wobei du UnterstÃ¼tzung benÃ¶tigst.": "Choose a category and briefly describe what you need help with.",
    "ðŸ¤ Faire Nutzung": "Fair use",
    "GegenstÃ¤nde sorgfÃ¤ltig und sauber behandeln.": "Handle items carefully and keep them clean.",
    "PÃ¼nktlich zum vereinbarten Termin zurÃ¼ckgeben.": "Return items on time as agreed.",
    "Bei SchÃ¤den sofort den Besitzer informieren.": "Inform the owner immediately if something is damaged.",
    "ðŸŒ± Gemeinsame Aktionen": "Community activities",
    "Zusagen sind verbindlich â€“ bitte rechtzeitig absagen.": "Commitments are binding - please cancel in time.",
    "Gemeinsam anpacken: Jede helfende Hand zÃ¤hlt.": "Pitch in together: every helping hand counts.",
    "MÃ¼ll vermeiden und den Treffpunkt sauber hinterlassen.": "Avoid waste and leave the meeting point clean.",
    "Gemeinsam aktiv: Hier findest du Aktionen und Treffen in deiner Nachbarschaft.": "Active together: here you can find activities and meetups in your neighborhood.",
    "ðŸ—‘ï¸ Sauberes Viertel: MÃ¼llsammel-Aktion": "Clean neighborhood: litter cleanup",
    "ðŸª PlÃ¤tzchentausch & Sommerkaffee": "Cookie swap & summer coffee",
    "ðŸŒ± Garten-Mit-Mach-Tag": "Garden participation day",
    "Wir machen unsere Nachbarschaft schick! Greifzangen und MÃ¼llsÃ¤cke werden gestellt. Im Anschluss gibt es kÃ¼hle GetrÃ¤nke am Gartenzaun.": "We are making our neighborhood look good! Grabbers and trash bags are provided. Afterwards there will be cold drinks at the garden fence.",
    "Jeder bringt eine Kleinigkeit zu knabbern oder zu trinken mit. Wir quatschen, tauschen Rezepte und lernen uns besser kennen.": "Everyone brings a small snack or drink. We chat, swap recipes, and get to know each other better.",
    "Wir pflanzen neue Stauden und jÃ¤ten Unkraut. Bringt gerne eigene PflanzensprÃ¶sslinge oder Ableger zum Tauschen mit!": "We will plant new perennials and weed the garden. Feel free to bring sprouts or cuttings to swap!",
    "ðŸ’¬ Event-Chat": "Event chat",
    "Foto lÃ¶schen": "Delete photo",
    "StraÃŸe & Hausnummer": "Street and house number",
    "Meine FÃ¤higkeiten (Ich kann unterstÃ¼tzen bei...)": "My skills (I can help with...)",
    "ðŸ›’ EinkÃ¤ufe mitbringen": "Bring groceries",
    "ðŸŒ± Garten & Pflanzen pflegen": "Take care of gardens & plants",
    "ðŸ”§ Technik & Handwerk erklÃ¤ren": "Explain technology & repairs",
    "ðŸ”¨ Handwerk": "Handywork",
    "ðŸ¾ Haustier-Betreuung": "Pet care",
    "ðŸ’¬ Gesellschaft leisten": "Keep company",
    "HÃ¤ufige Fragen (FAQs)": "Frequently asked questions",
    "Wie funktioniert das Ausleihen? Klicke im Bereich â€žTeilenâ€œ auf einen freien Gegenstand und bestÃ¤tige die Ausleihe. Stimmt euch Ã¼ber den Chat ab.": "How does borrowing work? In the Share section, click an available item and confirm the loan. Coordinate through chat.",
    "Kostet Gartenzaun Geld? Nein, die Nutzung der App und das Teilen von GegenstÃ¤nden sind komplett kostenlos und basieren auf Gemeinschaftshilfe.": "Does Gartenzaun cost money? No, using the app and sharing items are completely free and based on community help.",
    "Wer betreibt die App? Die App wird von einem ehrenamtlichen Nachbarschaftsverein betrieben, um den Zusammenhalt im Tulpenweg zu stÃ¤rken.": "Who runs the app? The app is run by a volunteer neighborhood association to strengthen community on Tulip Lane.",
    "Gartenzaun entstand aus der Idee, den Austausch zwischen den Generationen in unserer Nachbarschaft zu vereinfachen.": "Gartenzaun was created from the idea of making exchange between generations in our neighborhood easier.",
    "Ob Werkzeuge teilen, beim Einkauf unterstÃ¼tzen oder sich einfach bei einer Tasse Kaffee austauschen: Gartenzaun bringt Menschen von 25 bis 80 Jahren zusammen.": "Whether sharing tools, helping with shopping, or simply chatting over coffee: Gartenzaun brings people from 25 to 80 together.",
    "Entwickelt mit Herz, Engagement und viel Liebe fÃ¼r unsere Nachbarschaft. â¤ï¸": "Built with heart, commitment, and a lot of love for our neighborhood.",
    "Ist mein Profil Ã¶ffentlich? Nur deine verifizierten Nachbarn kÃ¶nnen deinen Namen und deine FÃ¤higkeiten sehen. Deine Hausnummer wird standardmÃ¤ÃŸig geschÃ¼tzt.": "Is my profile public? Only your verified neighbors can see your name and skills. Your house number is protected by default.",
    "Wer sind die Botschafter? Botschafter sind hilfsbereite Nachbarn, die sich bereit erklÃ¤rt haben, neuen Mitgliedern die App zu erklÃ¤ren.": "Who are the ambassadors? Ambassadors are helpful neighbors who have agreed to explain the app to new members.",
    "Kann ich GegenstÃ¤nde wieder lÃ¶schen? Ja, unter deinem Profil oder direkt im Teilen-Bereich kannst du deine eigenen eingestellten GegenstÃ¤nde bearbeiten.": "Can I delete shared items again? Yes, you can edit your own shared items in your profile or directly in the Share section.",
    "Warum verifizieren?": "Why verify?",
    "Die Verifizierung schÃ¼tzt die Gemeinschaft vor Fakeâ€‘Profilen und sorgt dafÃ¼r, dass Vertrauen entstehen kann.": "Verification protects the community from fake profiles and helps trust grow.",
    "ðŸ”’ Deine Daten sind bei uns sicher. Wir halten uns an die DSGVO und speichern deine Daten auf einem deutschen Server.": "Your data is safe with us. We comply with GDPR and store your data on a German server."
});

const pendingAutoAttributeTranslations = {
    "Menü öffnen": "Open menu",
    "Vorlesen": "Read aloud",
    "Pause": "Pause",
    "Stopp": "Stop",
    "Verifiziertes Mitglied": "Verified member",
    "Inhalt melden": "Report content"
};

const autoAttributeTranslations = {
    en: {
        "z.B. Maria": "e.g. Maria",
        "z.B. Schmidt": "e.g. Smith",
        "z.B. Tulpenweg 12": "e.g. Tulip Lane 12",
        "z.B. 12345 Neustadt": "e.g. 12345 Neustadt",
        "Eigenes Interesse hinzufügen…": "Add your own interest...",
        "Eigenes Talent hinzufügen…": "Add your own skill...",
        "z.B. Teleskopleiter, Schlagbohrer": "e.g. telescopic ladder, drill",
        "Suche nach Geräten (z.B. Leiter, Bohrer)...": "Search for items (e.g. ladder, drill)...",
        "Beispiel: Hallo Nachbarn, ich bräuchte Hilfe beim Rasenmähen am Samstag...": "Example: Hello neighbors, I could use help mowing the lawn on Saturday...",
        "Schreibe eine Nachricht...": "Write a message...",
        "z.B. Spieleabend Tulpenweg": "e.g. Game night on Tulip Lane",
        "Worum geht es in dieser Gruppe? Wer kann mitmachen?": "What is this group about? Who can join?",
        "z.B. Vertikutierer, Bohrer": "e.g. scarifier, drill",
        "Mehr Informationen": "More information",
        "Beitrag melden": "Report post"
    }
};

Object.assign(autoAttributeTranslations.en, pendingAutoAttributeTranslations);

Object.assign(autoTextTranslations.en, {
    "Hinzufügen": "Add",
    "👥 Nachbarschafts-Gruppen": "Neighborhood groups",
    "🌱 Gartenfreunde Tulpenweg": "Tulip Lane garden friends",
    "🚲 Lastenrad-Gemeinschaft": "Cargo-bike community",
    "☕ Kaffeeklatsch am Sonntag": "Sunday coffee meetup",
    "💬 Chat": "Chat",
    "💚 Faire Unterstützung": "Fair support",
    "🛒 Einkäufe": "Shopping",
    "🔧 Technik-Unterstützung": "Tech support",
    "🗑️ Entsorgung": "Disposal",
    "🤝 Faire Nutzung": "Fair use",
    "🌱 Gemeinsame Aktionen": "Community activities",
    "🗑️ Sauberes Viertel: Müllsammel-Aktion": "Clean neighborhood: litter cleanup",
    "🍪 Plätzchentausch & Sommerkaffee": "Cookie swap & summer coffee",
    "🌱 Garten-Mit-Mach-Tag": "Garden participation day",
    "💬 Event-Chat": "Event chat",
    "🌳 Nachbarschafts-Barometer": "Neighborhood barometer",
    "🏆 Gemeinschaftsziel": "Community goal",
    "🛒 Einkäufe mitbringen": "Bring groceries",
    "🌱 Garten & Pflanzen pflegen": "Take care of gardens & plants",
    "🔧 Technik & Handwerk erklären": "Explain technology & repairs",
    "🔨 Handwerk": "Handywork",
    "🐾 Haustier-Betreuung": "Pet care",
    "💬 Gesellschaft leisten": "Keep company",
    "💬 Chat mit Klaus": "Chat with Klaus",
    "💬 Chat mit Dieter": "Chat with Dieter",
    "💬 Chat mit Krauses": "Chat with the Krauses",
    "💬 Chat mit Sabine": "Chat with Sabine"
});

function initI18n() {
    try {
        const savedLang = localStorage.getItem('gartenzaun_language');
        if (savedLang && translations[savedLang]) {
            currentLang = savedLang;
        }
    } catch (e) {
        console.warn('LocalStorage not available for i18n:', e);
    }
    applyTranslations();
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        try {
            localStorage.setItem('gartenzaun_language', lang);
        } catch (e) {
            console.warn('LocalStorage not available for i18n:', e);
        }
        applyTranslations();
        updateLanguageSelectors();
        if (typeof renderShareItems === 'function') {
            renderShareItems();
        }
        if (typeof state !== 'undefined' && state.selectedShareItemId && typeof openShareItemDetail === 'function') {
            openShareItemDetail(state.selectedShareItemId);
        }
        if (typeof hydrateProfileView === 'function') {
            hydrateProfileView();
        }
        if (typeof syncGroupJoinButtons === 'function') {
            syncGroupJoinButtons();
        }
        if (typeof syncEventJoinButtons === 'function') {
            syncEventJoinButtons();
        }
    }
}

function applyTranslations() {
    if (translations[currentLang].app_document_title) {
        document.title = translations[currentLang].app_document_title;
    } else {
        document.title = currentLang === 'en'
            ? 'Gartenzaun - Your neighborhood app'
            : 'Gartenzaun - Deine Nachbarschafts-App';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            // Check if it's an input with placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', translations[currentLang][key]);
                } else {
                    el.value = translations[currentLang][key];
                }
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    translateAttributeKey('data-i18n-placeholder', 'placeholder');
    translateAttributeKey('data-i18n-title', 'title');
    translateAttributeKey('data-i18n-aria-label', 'aria-label');
    translateAttributeKey('data-i18n-alt', 'alt');

    applyAutomaticTextTranslations();
    applyAutomaticAttributeTranslations();
}

function translateAttributeKey(dataAttr, targetAttr) {
    document.querySelectorAll(`[${dataAttr}]`).forEach(el => {
        const key = el.getAttribute(dataAttr);
        if (translations[currentLang][key]) {
            el.setAttribute(targetAttr, translations[currentLang][key]);
        }
    });
}

function getAutoTranslation(lang, text) {
    if (lang === 'de') return null;
    const normalized = normalizeI18nText(text);
    const dictionary = autoTextTranslations[lang];
    if (!dictionary) return null;
    return dictionary[text] || dictionary[normalized] || findCanonicalTranslation(dictionary, text);
}

function normalizeI18nText(text) {
    return (text || '').replace(/\s+/g, ' ').trim();
}

function findCanonicalTranslation(dictionary, text) {
    const canonical = canonicalI18nText(text);
    if (!canonical) return null;
    for (const [key, value] of Object.entries(dictionary)) {
        if (canonicalI18nText(key) === canonical) {
            return value;
        }
    }
    return null;
}

function canonicalI18nText(text) {
    let current = normalizeI18nText(text);
    for (let i = 0; i < 3; i++) {
        const repaired = repairMojibakeText(current);
        if (repaired === current) break;
        current = normalizeI18nText(repaired);
    }
    return current;
}

function repairMojibakeText(text) {
    if (!/[ÃÂâð]/.test(text) || typeof TextDecoder === 'undefined') {
        return text;
    }
    try {
        const bytes = new Uint8Array(Array.from(text, char => char.charCodeAt(0) & 0xff));
        const repaired = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
        return repaired.includes('\uFFFD') ? text : repaired;
    } catch (e) {
        return text;
    }
}

function getAutoAttributeTranslation(lang, text) {
    if (lang === 'de') return null;
    const dictionary = autoAttributeTranslations[lang];
    if (!dictionary) return null;
    const normalized = normalizeI18nText(text);
    return dictionary[text] || dictionary[normalized] || findCanonicalTranslation(dictionary, text);
}

function applyAutomaticTextTranslations() {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;
                if (parent.closest('script, style, svg, textarea, [data-i18n], [data-i18n-html]')) {
                    return NodeFilter.FILTER_REJECT;
                }
                const text = node.textContent.trim();
                return text ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        }
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
        if (!node.__i18nOriginalText) {
            node.__i18nOriginalText = normalizeI18nText(node.textContent);
        }
        const original = node.__i18nOriginalText;
        const translated = getAutoTranslation(currentLang, original);
        const leading = node.textContent.match(/^\s*/)[0];
        const trailing = node.textContent.match(/\s*$/)[0];
        node.textContent = leading + (translated || original) + trailing;
    });
}

function applyAutomaticAttributeTranslations() {
    document.querySelectorAll('[placeholder], [title], [aria-label]').forEach(el => {
        if (el.hasAttribute('data-i18n')) return;
        ['placeholder', 'title', 'aria-label'].forEach(attr => {
            if (!el.hasAttribute(attr)) return;
            const originalAttr = 'i18nOriginal' + attr.replace(/(^|-)([a-z])/g, (_, _dash, char) => char.toUpperCase());
            if (!el.dataset[originalAttr]) {
                el.dataset[originalAttr] = el.getAttribute(attr);
            }
            const original = normalizeI18nText(el.dataset[originalAttr]);
            const translated = getAutoAttributeTranslation(currentLang, original)
                || getAutoAttributeTranslation(currentLang, el.dataset[originalAttr]);
            el.setAttribute(attr, translated || original);
        });
    });
}

function updateLanguageSelectors() {
    document.querySelectorAll('.lang-selector').forEach(sel => {
        sel.value = currentLang;
    });
}

function t(key) {
    return translations[currentLang][key] || key;
}

function translateStaticText(text) {
    return getAutoTranslation(currentLang, text) || text;
}

// Ensure it runs after DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
