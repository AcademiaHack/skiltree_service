//Custom closure
(function($, ko, data){

	//IE checks
	function getInternetExplorerVersion() {
	    var rv = -1; // Return value assumes failure.
	    if (navigator.appName == 'Microsoft Internet Explorer') {
	        var ua = navigator.userAgent;
	        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	        if (re.exec(ua) != null)
	            rv = parseFloat(RegExp.$1);
	    }
	    return rv;
	}
	function isInvalidIEVersion() {
		var ver = getInternetExplorerVersion();
		if (ver > -1 && ver < 9) {
			$('html').addClass("ltIE9");
			return true;
		}
		return false;
	}
    function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
}

	//On page load
	$(function(){

		//Quit if using an IE we don't like
		if (isInvalidIEVersion()) return;

        var username = GetURLParameter("username");
        var skilltree = "_";

        //Create and bind the viewmodel
        var vm = new tft.skilltree.Calculator(data);
        ko.applyBindings(vm);
        // console.log('http://localhost:8080/skiltree_service/index.php?/welcome/skilltree?user='+username);
        var parametros = {
            "user" : username,
        };

        $.ajax({
            data: parametros,
            url: '/skilltree/get?',
            type: 'get',
            success:  function (response) {
                console.log(response);
                if(response.error == ""){
                    skilltree = response.user_skilltree;
                    // console.log(skilltree);
                    $(".talent-tree").attr("id", skilltree);
                    $("#username").html(response.display_name);
                    $("#attendance_number").html(response.attendance);
                    //Init skilltree with database values
                    vm.useHash(skilltree);
                    
                }else{
                    window.location = response.error_url;
                }
            }
        });
	});


})(window.jQuery, window.ko, {
	learnTemplate: 'Apender primero {n} para desbloquear.',
	skills: [
		{
			id: 1
			, title: 'HTML'
			, maxPoints: 2
			, description: 'El lenguaje principal para crear páginas web. Está escrito en base a etiquetas o "tags" rodeadas por corchetes angulares (ej: <html>).'
			, rankDescriptions: [
				'Maquetar SIN BOOTSTRAP un clon EXACTO de youtube.'
				, 'Próximamente!'
			]
            , links: [
                {
                    label: 'Tutoriales HTML.net'
                    , url: 'http://www.html.net/tutorials/html/'
                }
                , {
                    label: 'Sublime Text 3, un editor de codigo genial'
	                , url: 'http://www.sublimetext.com/'
                }
                , {
                    label: 'Awesome Screenshot'
                    , url: 'http://awesomescreenshot.com/'
                }
                , {
                    label: 'Screencastify'
                    , url: 'https://chrome.google.com/webstore/detail/screencastify-screen-vide/mmeijimgabbpbgpdklnllpncmdofkcpn'
                }
            ]
		},

		{
			id: 2
			, title: 'CSS'
			, maxPoints: 2 
            , dependsOn: [1]
            , description: 'Cascading Style Sheets (CSS) es un lenguaje para darle estilo a páginas web. Las "reglas" CSS afectan elementos en el documento HTML para especificar su presentación y visualización. Algunas de ellas son fuente, el color, el espaciado y tamaño.'
			, rankDescriptions: [
                'Maquetar SIN BOOTSTRAP NI POSITION ABSOLUTE, solo usando el tag <div> el logo de NPM'
                , 'Próximamente!'
            ]
            , links: [
                {
                    label: 'Tutoriales de CSS'
	                , url: 'http://www.htmldog.com/guides/css/'
                }
                , {
                    label: 'Can I use... (browser support)'
                    , url: 'http://caniuse.com/#cats=CSS'
                }
            ]
		},
		{
			id: 3
			, title: 'Herramientas de CSS'
			, maxPoints: 2
            , dependsOn: [2]
            , description: 'Preprocesadores como LESS y SASS te ayudan a escribir CSS más estructurada y eficientemente, mediante herramientas como las variables, funciones, y anidación.'
            , rankDescriptions: [
                'Próximamente!'
                , 'Próximamente!'
            ]
            , links: [
                {
                    label: 'Sass vs. LESS'
	                , url: 'http://css-tricks.com/sass-vs-less/'
                }
                , {
                    label: 'LESS'
                    , url: 'http://lesscss.org/'
                }
                , {
                    label: 'Sass'
                    , url: 'http://sass-lang.com/'
                }
                , {
                    label: 'Stylus'
                    , url: 'http://learnboost.github.io/stylus/'
                }
            ]
		},
		{
			id: 4
			, title: 'Experto en Diseño Web'
			, dependsOn: [2]
            , description: 'Puedes traer ideas de diseño a la vida, plasmándolas en el documento HTML estilizado con CSS.'
            , rankDescriptions: [
                'Próximamente!'
            ]
		},
		{
			id: 5
			, title: 'jQuery Effects'
			, dependsOn: [4]
			, maxPoints: 3
            , description: 'jQuery ofrece técnicas y métodos para la manipulación del lado del cliente de los elementos de la página web.'
            , rankDescriptions: [
                'Próximamente!'
                , 'Próximamente!'
                , 'Próximamente!'
            ]
		    , links: [
                {
                    label: 'Codecademy jQuery'
	                , url: 'http://www.codecademy.com/tracks/jquery'
                }
                , {
                    label: 'jQuery Category: Manipulation'
                    , url: 'http://api.jquery.com/category/manipulation/'
                }
                , {
                    label: 'jQuery Category: Effects'
                    , url: 'http://api.jquery.com/category/effects/'
                }
            ]
        },
		{
			id: 6
			, title: 'Bootstrap'
			, dependsOn: [1]
            , description: 'Es un conjunto de herramientas de diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como, extensiones de JavaScript opcionales adicionales.'
            , rankDescriptions: [
                'Próximamente!'
            ]
            , links: [
                {
                    label: 'Página oficial'
	                , url: 'http://getbootstrap.com/getting-started/'
                }
            ]
		},
		{
			id: 7
			, title: 'Bootstrap Avanzado'
			, dependsOn: [6]
            , description: 'Estas en la capacidad de utilizar las herramientas proporcionadas por bootstrap a su perfección y extenderlas para mejorar su funcionalidad. '
		    , rankDescriptions: [
                'Próximamente!'
            ]
        },

		{
			id: 8
			, title: 'Javascript'
			, dependsOn: [1]
            , description: 'JavaScript es el lenguaje mas importante para la programación web del lado del cliente. Se ejecuta en el navegador del usuario para manipular el documento HTML después de haberse cargado. Puede hacer desde cosas tan simples como mostrar elementos ocultos, o más avanzadas como contactar con el servidor para cargar más datos.'
            , rankDescriptions: [
                'Próximamente!'
            ]
            , links: [
                {
                    label: 'Tutorial de JavaScript'
	                , url: 'http://www.htmldog.com/guides/javascript/'
                }
                , {
                    label: 'Codecademy JavaScript'
                    , url: 'http://www.codecademy.com/tracks/javascript'
                }
                , {
                    label: 'Lista de videos para principiantes en JavaScript'
                    , url: 'http://thenewboston.org/list.php?cat=10'
                }
                , {
                	label: 'Douglas Crockford on Javascript'
                	, url: 'http://javascript.crockford.com/'
                }
            ]
		},
		{
			id: 9
			, title: 'JS Librerías & Frameworks'
			, maxPoints: 2
            , dependsOn: [8]
            , description: 'Una vez que te sientas cómodo con el lenguaje JavaScript, hay una multitud de liberías y frameworks para optimizar tareas comunes y mejorar tu desarrollo.'
            , rankDescriptions: [
                'Próximamente!'
                , 'Próximamente!'
            ]
		},
		{
			id: 10
			, title: 'Experto en desarrollo Front-end'
			, dependsOn: [9]  
            , description: 'Puedes construir y desarrollar la interfaz gráfica de una aplicación o página web, ayudandote con JS y sus frameworks y diversas funcionalidades.'
            , rankDescriptions: [
                'Próximamente!'
            ]
		},
		{
			id: 11
			, title: 'Programación del lado del servidor'
			, dependsOn: [1]
            , description: 'Desarrollar scripts (funciones, código) que se ejecuta en el servidor (Server-side) en lugar de la máquina del usuario (client-side).'
            , rankDescriptions: [
                'Próximamente!'
            ]
            , links: [
                {
                    label: 'Server-side scripting Wiki'
                    , url: 'http://en.wikipedia.org/wiki/Server-side_scripting'
                }
            ]
		},
		{
			id: 12
			, title: 'Frameworks del lado del servidor'
			, dependsOn: [11]
            , description: 'Es una colección de paquetes o módulos y frameworks, que permiten a los desarrolladores escribir aplicaciones o servicios, sin tener que manejar la sobrecarga de actividades comunes y los detalles de bajo nivel, tales como el manejo de sesiones, el acceso a las base de datos, entre otras cosas.'
            , rankDescriptions: [
                'Próximamente!'
            ]
            , links: [
                {
                    label: 'Comparación de frameworks para web applications'
                    , url: 'http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks'
                }
                , {
		            label: 'Desarrollo web - desarrollo del lado del servidor'
                    , url: 'http://en.wikipedia.org/wiki/Web_development#Server_side_coding'
                }
            ]
		},

		{
			id: 13
			, title: 'Creación de bases de datos'
			, maxPoints: 2
            , description: 'Las bases de datos son motores poderosos para almacenar, organizar y recuperar datos. Existe una amplia variedad de plataformas de base de datos para elegir. El lenguaje de base de datos más utilizado es el Structured Query Language (SQL). Crear la arquitectura de sus datos eficientemente facilita mucho la programación del lado del servidor.'
            , rankDescriptions: [
                'Próximamente!'
                , 'Próximamente!'
            ]
            , links: [
                {
                    label: 'Tutorial SQL w3schools.com'
	                , url: 'http://www.w3schools.com/sql/'
                }                    
                ,{
		            label: 'SQLZOO: Tutorial Interactivo de SQL'
                    , url: 'http://sqlzoo.net/wiki/'
                }                    
                ,{
                    label: 'Database Normalization Wiki'
                    , url: 'https://en.wikipedia.org/wiki/Database_normalization'
                }
            ]
		},
		{
			id: 14
			, title: 'Gestión Avanzada de Bases de Datos'
			, maxPoints: 2
            , dependsOn: [13]
            , description: 'Además de crear tablas básicas y relacionar los datos entre si, las bases de datos permiten la creación de "procedimientos almacenados" (stored procedures), los cuales no son más que conjuntos de instrucciones SQL que se almacenan en la base de datos, y "funciones definidas por el usuario" (User-defined functions, UDF), que son funciones que se pueden utilizar en sentencias SQL. Hacer una buena arquitectura de base de datos no es suficiente. La base de datos también debe ser optimizadas y refinadas para aumentar su rendimiento.'
            , rankDescriptions: [
                'Próximamente!'
                , 'Próximamente!'
            ]
            , links: [
                {
                    label: 'Stored Procedure - Wiki'
                    , url: 'http://en.wikipedia.org/wiki/Stored_procedure'
                }
                , {
                    label: 'User-defined function Wiki'
	                , url: 'http://en.wikipedia.org/wiki/User_defined_function'
                }
                , {
                    label: 'Afinación de la Base de datos Wiki'
                    , url: 'http://en.wikipedia.org/wiki/Database_tuning'
                }
                , {
                    label: 'Monitoreo de Rendimiento y topicos de como afinar (SQL Server)'
                    , url: 'http://technet.microsoft.com/en-us/library/ms187830(v=sql.105).aspx'
                }
                , {
                    label: 'Sql Server Tips de afinación del rendimiento'
                    , url: 'http://www.mssqltips.com/sql-server-tip-category/9/performance-tuning/'
                }
                , {
                    label: 'Oracle database FAQ de Afinación del rendimiento'
                    , url: 'http://www.orafaq.com/wiki/Oracle_database_Performance_Tuning_FAQ'
                }
            ]
		},

		{
			id: 15
			, title: 'Experto en desarrollo Back-end'
			, dependsOn: [12, 14]
            , description: 'Eres capaz de imaginar y plasmar la arquitectura del Back-end de una aplicación de para almacenar y recuperar datos de manera eficiente.'
		    , rankDescriptions: [
                'Próximamente!'
            ]
        },
		{
			id: 16
			, title: 'Autenticación y autorización de usuarios'
			, dependsOn: [15]
            , description: 'La autenticación es el proceso de determinar si alguien o algo es quién o qué dice ser. La autorización es el proceso de determinar si se permite a un usuario realizar una acción o tiene acceso a un recurso.'
            , rankDescriptions: [
                'Próximamente!'
            ]
            , links: [
                {
                    label: 'ASP.NET authentication and authorization - CodeProject'
                    , url: 'http://www.codeproject.com/Articles/98950/ASP-NET-authentication-and-authorization'
                }
                ,{
                    label: 'OpenID Wiki (authentication)'
	                , url: 'http://en.wikipedia.org/wiki/OpenID'
                }
                , {
                    label: 'OAuth Community'
                    , url: 'http://oauth.net/'
                }
                , {
                    label: 'ASP.NET Authorization'
                    , url: 'http://msdn.microsoft.com/en-us/library/wce3kxhd(v=vs.100).aspx'
                }
            ]
		},
		{
			id: 17
			, title: 'AJAX & APIs'
			, dependsOn: [10, 15]
            , description: 'La tecnología existe para permitir que sistemas separados se comuniquen entre sí de diversas maneras, permitiendo a las interfaces ser más interactivas. Estas incluyen el uso de "Asynchronous JavaScript And XML" (AJAX), generalmente en el lado del cliente, para comunicarse con un sistema externo. Otras tecnologías, como los "Servicios Web", se utilizan para configurar "end-points" para permitir la comunicación con un sistema externo.'
            , rankDescriptions: [
                'Próximamente!'
            ]
            , links: [
                {
                    label: 'AJAX (programming) Wiki'
                    , url: 'http://en.wikipedia.org/wiki/Ajax_(programming)'
                }
                ,{
                    label: 'List of Videos for AJAX'
	                , url: 'http://thenewboston.org/list.php?cat=61'
                }
                ,{
                    label: 'Ajax: The Official Microsoft ASP.NET Site'
	                , url: 'http://www.asp.net/ajax'
                }
                , {
                    label: 'Web Service Wiki'
                    , url: 'http://en.wikipedia.org/wiki/Web_service'
                }
                , {
                    label: 'Representational state transfer (REST) Wiki'
                    , url: 'http://en.wikipedia.org/wiki/Representational_state_transfer'
                }
            ]
		},
		{
			id: 18
			, title: 'Descubriendo al usuario'
            , maxPoints: 2
            , description: 'Uno de los primeros pasos antes de que algo sea diseñado es determinar que es lo que el cliente (tanto el solicitante del sitio como el usuario del sitio) quiere y/o necesita. Las técnicas aca referidas incluyen dibujos simples, maquetación en papel y mapeo de la experiencia del usuario.'
			, rankDescriptions: [
				'Próximamente!'
				, 'Próximamente!'
			]
            , links: [
             	{ 
             		label: 'La anatomía de un mapa de experiencia'
             		, url: 'http://www.adaptivepath.com/ideas/the-anatomy-of-an-experience-map'
             	}
            ]
		},
		{
			id: 19
			, title: 'Diseño Gráfico'
            , maxPoints: 2
			, dependsOn: [18]
            , description: 'El diseño gráfico trata sobre la estética y la facilidad de uso. Los buenos diseños son atractivos y fáciles de entender, por el uso sólido de color, la tipografía, el equilibrio, la jerarquía y los espacios en blanco.'
			, rankDescriptions: [
				'Próximamente!'
				, 'Próximamente!'
			]
            , links: [
                {
                    label: 'Diseño Gráfico Wiki'
                    , url: 'http://en.wikipedia.org/wiki/Graphic_design'
                }
                ,{
                    label: 'Behance'
	                , url: 'http://www.behance.net/'
                }
                ,{
                    label: 'Awwwards'
	                , url: 'http://www.awwwards.com/'
                }
                , {
                    label: 'User experience design Wiki'
                    , url: 'http://en.wikipedia.org/wiki/User_experience_design'
                }
            ]
		},
		{
			id: 20
            , title: 'Herramientas de Diseño Gráfico'
			, maxPoints: 2
            , dependsOn: [19]
            , description: 'Programas como Photoshop y dispositivos como tabletas de dibujo se utilizan para crear diseños, trabajar con tipografía, retoque de fotos, y otras actividades para agregar un toque profesional a sus diseños.'
            , rankDescriptions: [
                'Próximamente!'
                , 'Próximamente!'
            ]
            , links: [
                {
                    label: 'Las 100 mejores herramientas para Diseñadores Gráficos | Graphic Design Classes'
                    , url: 'http://graphicdesignclasses.net/design-tools/'
                }
            ]
		},
		{
			id: 21
			, title: 'Prototipos'
			, dependsOn: [18]
            , description: 'Modelar un nuevo diseño sin construir toda la funcionalidad subyacente es una manera rápida y eficaz para transmitir ideas, probar un nuevo concepto, e identificar los problemas anticipadamente.'
            , rankDescriptions: [
                'Próximamente!'
            ]
            , links: [
                {
                    label: 'Diseña mejor y más rápido con Prototipaje Rápido'
	                , url: 'http://www.smashingmagazine.com/2010/06/16/design-better-faster-with-rapid-prototyping/'
                }
                , {
                    label: '16 Herramientas de Diseño para Prototipaje y Maquetado'
                    , url: 'http://www.sitepoint.com/tools-prototyping-wireframing/'
                }
            ]
		},
		{
			id: 22
			, title: 'Experto en Diseño de la Experiencia del Usuario (UX)'
			, dependsOn: [19, 21]
            , description: 'Eres capaz de convertir los requisitos del proyecto a un diseño atractivo que promueve una experiencia de usuario agradable.'
		    , rankDescriptions: [
                'Próximamente!'
            ]
        },
		{
			id: 23
			, title: 'Pruebas de Usabilidad'
			, dependsOn: [22]
            , description: 'Es una técnica que se utiliza para evaluar un sitio web probándolo en los usuarios. Es de gran importancia para la experiencia del usuario. '
            , rankDescriptions: [
                'Próximamente!'
            ]
            , links: [
                {
                    label: '24 Herramientas para pruebas de usabilidad en páginas web'
	                , url: 'http://www.usefulusability.com/24-usability-testing-tools/'
                }
                , {
                    label: 'Pruebas de Usabilidad Wiki'
                    , url: 'http://en.wikipedia.org/wiki/Usability_testing'
                }
            ]
        },
		{
			id: 24
			, title: 'Administración de Servidores'
			, maxPoints: 2
            , description: 'Incluso las aplicaciones web más simples requieren un servidor para ejecutarlas. Hay varios servidores web populares full equipados para elegir, aunque el lenguaje de programación del lado del servidor de la aplicación puede limitar tus opciones. Aprender a gestionar y configurar el servidor web te ayudará a mantener tu sitio funcionando sin problemas.'
            , rankDescriptions: [
                'Próximamente!'
                , 'Próximamente!'
            ]
        	, links: [
                {
                    label: 'Comparación de software de lado del servidor Wiki'
	                , url: 'http://en.wikipedia.org/wiki/Comparison_of_web_server_software'
                }
                , {
                    label: 'Apache mod_rewrite - Apache HTTP Server'
                    , url: 'http://httpd.apache.org/docs/2.4/rewrite/'
                }
            ]
        },
		{
			id: 25
			, title: 'Implementación y Deployment'
			, maxPoints: 2
			, dependsOn: [24]
            , description: 'Antes de compartir tu aplicación con el mundo, sigue las mejores prácticas para la seguridad y el rendimiento de su apliación en el servidor.'
            , rankDescriptions: [
                'Próximamente!'
                , 'Próximamente!'
            ]
            , links: [
                {
                    label: 'Instalación del certificado SSL'
	                , url: 'http://www.sslshopper.com/ssl-certificate-installation.html'
                }
                , {
                    label: 'Minimizar el tamaño de la carga - Google Developers'
                    , url: 'https://developers.google.com/speed/docs/best-practices/payload'
                }
                , {
                    label: 'Paralelizar las descargas a través de nombres de host - Google Developers'
                    , url: 'https://developers.google.com/speed/docs/best-practices/rtt#ParallelizeDownloads'
                }
            ]
        },

		{
			id: 26
			, title: 'Hacker: Experto en Desarrollo Web'
			, dependsOn: [4, 7, 10, 15, 22, 25]
            , description: 'Un Hacker solo es aquel que tiene los conocimientos de diseño, creación y mantenimiento necesarios para la gestion de un sitio web o sistema web. Un verdadero Hacker es capaz de cambiar el mundo, una linea de código a la vez.'
            , rankDescriptions: [
                'Próximamente!'
            ]
            , links: [
                {
                    label: 'Desarrollo Web Wiki'
	                , url: 'http://en.wikipedia.org/wiki/Web_development'
                }
            ]
		}
	]
});