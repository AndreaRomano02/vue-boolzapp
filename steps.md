# MILESTONE 1

- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
  dall’interlocutore (bianco) assegnando due classi CSS diverse.

- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
  nome e immagine di ogni contatto

# MILESTONE 2

- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
  messaggi relativi al contatto attivo all’interno del pannello della conversazione.

- Click sul contatto mostra la conversazione del contatto cliccato

## STEPS

- Metto in ascolto tutti i contatti.
  - recupero l'id del contatto che ho appena cliccato e mi salvo l'oggetto.
  - E stampo l'immagine e i messaggi di quel contatto.

# MILESTONE 3

- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
  “enter” il testo viene aggiunto al thread sopra, come messaggio verde.

- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
  un “ok” come risposta, che apparirà dopo 1 secondo.

## STEPS

- Collego l'input text ad un data e mi salvo il messaggio che viene scritto.
- Una volta che l'utente preme enter aggiungo il messaggio con status inviato nel data principale.
- Controllo la lunghezza dei messaggi all'inizio e me la salvo.
- **Se** la lunghezza dei messaggi è maggiore rispetto a quella originale allora attendi qualche secondo e aggiungo un messaggio ricevuto nel data.
