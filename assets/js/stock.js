const stockProductos = [
    {
        id: 1 ,
        nombre:'Sillon Asia',
        precio: 85000,
        categoria: 'sillones',
        descuento: false,
        cantidad : 1, 
        stock : 3,
        img: './assets/img/sillon_asia.png'  
    },
    {
        id: 2 ,
        nombre:'Sillon Egipto',
        precio: 80000,
        categoria: 'sillones',
        descuento: false,
        cantidad : 1,
        stock : 2,
        img: './assets/img/sillon_egipto.png'
    },
    {
        id: 3 ,
        nombre:'Sillon Austria',
        precio: 90000,
        categoria: 'sillones',
        descuento: false,
        cantidad : 1,
        stock : 1,
        img: './assets/img/sillon_austria.png'
    },
    {
        id: 4 ,
        nombre:'Sillon Suiza',
        precio: 65000,
        categoria: 'sillones',
        descuento: false,
        cantidad : 1,
        stock : 5,
        img: './assets/img/sillon_suiza.png'
    },
    {
        id: 5 ,
        nombre:'Sillon Nórdico',
        precio: 120000,
        categoria: 'sillones',
        descuento: false,
        cantidad : 1,
        stock : 1,
        img: './assets/img/sillon_nordico.png'
    },
    {
        id: 6 ,
        nombre:'Sillon Finlandia',
        precio: 220000,
        categoria: 'sillones',
        descuento: false,
        cantidad : 1,
        stock : 1,
        img: './assets/img/sillon_finlandia.png'
    },
    {
        id: 7 ,
        nombre:'J. mesa Amatista',
        precio: 280000,
        categoria: 'mesas',
        descuento: false,
        cantidad : 1,
        stock : 2,
        img: './assets/img/mesa_amatista.png'
    },
    {
        id: 8 ,
        nombre:'J. mesa Rodonita',
        precio: 280000,
        categoria: 'mesas',
        descuento: false,
        cantidad : 1,
        stock : 1,
        img: './assets/img/mesa_rodonita.png'
    },
    {
        id: 9 ,
        nombre:'J. mesa Morganita',
        precio: 420000,
        categoria: 'mesas',
        descuento: false,
        cantidad : 1,
        stock : 1,
        img: './assets/img/mesa_morganita.png'
    },
    {
        id: 10 ,
        nombre:'J. mesa Turmalina',
        precio: 400000,
        categoria: 'mesas',
        descuento: false,
        cantidad : 1,
        stock : 1,
        img: './assets/img/mesa_turmalina.png'
    },
    {
        id: 11 ,
        nombre:'J. mesa Ónix',
        precio: 530000,
        categoria: 'mesas',
        descuento: false,
        cantidad : 1,
        stock : 2,
        img: './assets/img/mesa_onix.png'
    },
    {
        id: 12 ,
        nombre:'J. mesa Rosanita',
        precio: 590000,
        categoria: 'mesas',
        descuento: false,
        cantidad : 1,
        stock : 1,
        img: './assets/img/mesa_rosanita.png'
    },
    {
        id: 13 ,
        nombre:'Condimenteros',
        precio: 990,
        categoria: 'bazar',
        descuento: false,
        cantidad : 1,
        stock : 15,
        img: './assets/img/condimenteros.png'
    },
    {   id: 14 ,
        nombre:'Jarrón Ceniza',
        precio: 1850,
        categoria: 'bazar',
        descuento: false,
        cantidad : 1,
        stock : 25,
        img: './assets/img/jarron_ceniza.png'
    },
    {
        id: 15 ,
        nombre:'Set Redondo',
        precio: 4400,
        categoria: 'bazar',
        descuento: false,
        cantidad : 1,
        stock : 10,
        img: './assets/img/set_redondo.png'
    },
    {
        id: 16 ,
        nombre:'Set Cuadrado',
        precio: 4800,
        categoria: 'bazar',
        descuento: false,
        cantidad : 1,
        stock : 12,
        img: './assets/img/set_cuadrado.png'
    },
    {
        id: 17 ,
        nombre:'Juego Utensilios',
        precio: 3000,
        categoria: 'bazar',
        descuento: false,
        cantidad : 1,
        stock : 5,
        img: './assets/img/juego_utensilios.png'
    },
    {
        id: 18 ,
        nombre:'Juego Cristal',
        precio: 6350,
        categoria: 'bazar',
        descuento: false,
        cantidad : 1,
        stock : 3,
        img: './assets/img/juego_cristal.png'
    },
    {
        id: 19 ,
        nombre:'Canasto XL',
        precio: 3500,
        categoria: 'deco',
        descuento: true,
        cantidad : 1,
        stock : 40,
        img: './assets/img/canasto_xl.png'
    },
    {
        id: 20 ,
        nombre:'Canasto Mixto',
        precio: 3300,
        categoria: 'deco',
        descuento: true,
        cantidad : 1,
        stock : 30,
        img: './assets/img/canasto_mixto.png'
    },
    {
        id: 21 ,
        nombre:'Cuadro YingYang',
        precio: 2000,
        categoria: 'deco',
        descuento: false,
        cantidad : 1,
        stock : 55,
        img: './assets/img/cuadro_yingyang.png'
    },
    {
        id: 22 ,
        nombre:'Set de Cuadros',
        precio: 4000,
        categoria: 'deco',
        descuento: false,
        cantidad : 1,
        stock : 24,
        img: './assets/img/set_de_cuadros.png'
    },
    {
        id: 23 ,
        nombre:'Almohadon Pompón',
        precio: 2000,
        categoria: 'deco',
        descuento: false,
        cantidad : 1,
        stock : 18,
        img: './assets/img/almohadon_pompon.png'
    },
    {
        id: 24 ,
        nombre:'Espejo Ojo',
        precio: 5000,
        categoria: 'deco',
        descuento: true,
        cantidad : 1,
        stock : 2,
        img: './assets/img/espejo_ojo.png'
    },
    {
        id: 25 ,
        nombre:'Palo de Amasar',
        precio: 1500,
        categoria: 'promociones',
        descuento: true,
        cantidad : 1,
        stock : 29,
        img: './assets/img/palo_amasar.png'
    },
    {
        id: 26 ,
        nombre:'Set 3 Espejos',
        precio: 3500,
        categoria: 'promociones',
        descuento: true,
        cantidad : 1,
        stock : 8,
        img: './assets/img/tres_espejos.png'
    },
    {
        id: 27 ,
        nombre:'Almohadon Tussor',
        precio: 2800,
        categoria: 'promociones',
        descuento: true,
        cantidad : 1,
        stock : 3,
        img: './assets/img/almohadon_tussor.png'
    },
    {
        id: 28 ,
        nombre:'Condimenteros PRO',
        precio: 3380,
        categoria: 'promociones',
        descuento: true,
        cantidad : 1,
        stock : 6,
        img: './assets/img/condimenteros_pro.png'
    },
    {
        id: 29  ,
        nombre:'Alfombra Redonda',
        precio: 2500,
        categoria: 'promociones',
        descuento: true,
        cantidad : 1,
        stock : 5,
        img: './assets/img/alfombra_redonda.png'
    },
    {
        id: 30 ,
        nombre:'Aceite Corporal',
        precio: 1900,
        categoria: 'promociones',
        descuento: true,
        cantidad : 1,
        stock : 60,
        img: './assets/img/aceite_corporal.png'
    }
]
