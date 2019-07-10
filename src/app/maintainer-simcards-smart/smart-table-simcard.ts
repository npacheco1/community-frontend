import { Options } from "selenium-webdriver/chrome";

  export let settings2 = {
    columns: {
      id: {
        title: 'ID',
        filter: false,
        show:false
      },
       sim_company: {
        title: 'Compañia',
        filter: true
      },
      sim_number: {
        title: 'Numero',
        filter: true
      },
      purchase_date: {
        title: 'Fecha de compra',
        filter: true
      },
      install_date: {
        title: 'Fecha de instalacion',
        filter: true
      },
     
      
     },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
      confirmSave:true
    },
    delete: {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>'
    },
    add : {confirmCreate : true ,
      type: 'list',
      config: {
        list: [{title: 'Lion King', value: '1'}, {title: 'The Matrix', value: '2'}]
      }}
  };

  

  export let data = [
    {
      id: 1,
      name: 'Nelson Pacheco',
      username: 'npacheco',
      email: 'nelso.pacheco@tecinco.cl',
      rut : '17707400-4'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca'
    },
    {
      id: 6,
      name: 'Sunil Joshi',
      username: 'suniljoshi',
      email: 'suniljoshi@melissa.tv'
    },
    {
      id: 7,
      name: 'Nirav joshi',
      username: 'niravjoshi',
      email: 'niravjoshi@yesenia.net'
    },
    {
      id: 8,
      name: 'Vishal bhatt',
      username: 'vbhatt',
      email: 'vbhatt.OConner@kory.org'
    },
    {
      id: 9,
      name: 'Bhavesh patel',
      username: 'bhavesh',
      email: 'bhavesh@annie.ca'
    },
    {
      id: 10,
      name: 'Darshan patel',
      username: 'Darshan',
      email: 'Darshan@annie.ca'
    },
    {
      id: 11,
      name: 'Hitesh patel',
      username: 'Hitesh',
      email: 'Hitesh@annie.ca'
    }
  ];
  