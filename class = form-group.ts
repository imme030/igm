class = form-group
prefix = tx_form
confirmation = 0
postProcessor {
	1 = mail
	1 {
		recipientEmail = mail@gothein-design.de
		senderEmailField = email
		senderNameField = nachname
		subject = Anfrage über Kontaktformular
		messages {
			success = TEXT
			success {
				value (
                <p>Danke für Ihre Nachricht</p>
                <p>Wir werden sobald wie möglich mit Ihnen in Kontakt treten.</p>
				)
			}
		}
	}
}
10 = SELECT
10 {
	name = Anrede
	label {
		value = Anrede
	}
	10 = OPTION
	10 {
		data = Frau
	}
	20 = OPTION
	20 {
		data = Herr
	}
}
20 = FIELDSET
20 {
	10 = TEXTLINE
	10 {
		class = form-control
		name = vorname		
		label {
			value = Vorname*
		}
	}
	20 = TEXTLINE
	20 {
		class = form-control
		name = nachname
		label {
			value = Nachname*
		}
	}
}
30 = TEXTLINE
30 {
	class = form-control
	name = email
	label {
		value = Email-Adresse*
	}
}
40 = TEXTAREA
40 {
	cols = 40
	rows = 5
	class = form-control
	name = mitteilung
	label {
		value = Mitteilung*
	}
}
50 = SUBMIT
50 {
	name = absenden
	value = Absenden
}
rules {
	1 = required
	1 {
		breakOnError = 0
		showMessage = 
		message = Bitte tragen Sie Ihren Vornamen ein
		error = Dies ist ein Pflichtfeld
		element = vorname
	}
	2 = required
	2 {
		breakOnError = 0
		showMessage = 
		message = Bitte tragen Sie Ihren Namen ein
		error = Dies ist ein Pflichtfeld
		element = nachname
	}
	3 = required
	3 {
		breakOnError = 0
		showMessage = 
		message = Pflichtfeld
		error = Bitte geben Sie eine Email Adresse ein
		element = email
	}
	4 = required
	4 {
		breakOnError = 0
		showMessage = 
		message = Was wollen Sie uns mitteilen?
		error = Dies ist ein Pflichtfeld
		element = mitteilung
	}
}
