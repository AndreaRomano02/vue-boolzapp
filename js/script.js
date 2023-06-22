console.log('VUE OK', Vue);

//# Creo la pagina VEU
const { createApp } = Vue;

const myApp = createApp({
  name: 'Boolzap',
  data() {
    return {
      clicked: false,
      //* Text Filter
      filterText: '',

      //* Current ID
      currentId: 1,
      currentMessageId: 0,

      //* Message Text
      textMessage: '',

      //! DATA
      user: {
        name: 'Andrea',
        avatar: '_io',
      },
      contacts: [
        {
          id: 1,
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent',
            },
            {
              id: 3,
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received',
            },
          ],
        },
        {
          id: 2,
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
            {
              id: 1,
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent',
            },
            {
              id: 2,
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
            },
            {
              id: 3,
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
            },
          ],
        },
        {
          id: 3,
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
            {
              id: 1,
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received',
            },
            {
              id: 2,
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
            },
            {
              id: 3,
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received',
            },
          ],
        },
        {
          id: 4,
          name: 'Alessandro B.',
          avatar: '_4',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
            },
          ],
        },
        {
          id: 5,
          name: 'Alessandro L.',
          avatar: '_5',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received',
            },
          ],
        },
        {
          id: 6,
          name: 'Claudia',
          avatar: '_5',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received',
            },
            {
              id: 3,
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent',
            },
          ],
        },
        {
          id: 7,
          name: 'Federico',
          avatar: '_7',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
            },
          ],
        },
        {
          id: 8,
          name: 'Davide',
          avatar: '_8',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: 'sent',
            },
            {
              id: 3,
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
            },
          ],
        },
      ],
    };
  },
  computed: {
    //* Save a current Contact
    currentContact() {
      return this.contacts.find(({ id }) => id === this.currentId);
    },

    //* Render a picture of current object
    renderContactPicture() {
      return `img/avatar${this.currentContact.avatar}.jpg`;
    },

    //* Render a name of current object
    renderContactName() {
      return this.currentContact.name;
    },

    //* Render a messages of current object
    currentMessages() {
      return this.currentContact.messages;
    },

    //* Filtered Contacts
    filterContacts() {
      return this.contacts.filter(({ name }) => name.toLowerCase().includes(this.filterText));
    },
  },
  methods: {
    //* Render al picture of contacts
    renderPicture({ avatar }) {
      return `img/avatar${avatar}.jpg`;
    },

    //* Set the current ID
    setCurrentId({ id }) {
      this.currentId = id;
    },

    setCurrentMessageId(id) {
      this.currentMessageId = id;
    },

    //* Send a new message
    sendMessage() {
      this.currentMessages.push({
        id: new Date().getTime(),
        status: 'sent',
        message: this.textMessage,
        date: '10/10/2020 13:20:50',
      });
      this.textMessage = '';

      //* Answer in automatic after 2 seconds
      setTimeout(this.automaticAnswer, 2000);
    },

    //* Automatic answer
    automaticAnswer() {
      this.currentMessages.push({
        id: new Date().getTime(),
        status: 'received',
        message: 'Ok',
        date: '10/10/2020 13:20:50',
      });
    },

    //* Delete a message
    deleteMessage() {
      this.currentContact.messages = this.currentMessages.filter((message) => {
        console.log(this.currentMessageId, message.id);
        return message.id !== this.currentMessageId;
      });
    },
  },
});

//# La monto  in pagina
myApp.mount('#root');
