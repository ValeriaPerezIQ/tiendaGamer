class Cliente {
   fullName;
    cartList;
   
    constructor(fullName, cartList) {
       this.fullName = fullName.toUpperCase();
        this.cartList = (cartList != null) ? cartList : [];
         }// constructor

    showData() {
        return `
    ${new Date()}
    =------------------------------------------=
    User fullname: ${this.fullName}.
    User type: ${this.cartList}. 
    =------------------------------------------= `

    } // show data

   
    addPaquete(paqueteUno) {
        return this.cartList.push(paqueteUno);
    }// addProduct

    addPaqueteD(paqueteDos) {
        return paqueteDos.forEach((paquete)=> this.addProduct(paquete));
    }// addPaqueteD

      addPaqueteT(paqueteTres) {
        return paqueteTres.forEach((paquete)=> this.addProduct(paquete));
    }// addPaqueteT
  
calculateTotal() {
        let total = 0;
        let finalPrice = 0;
        let shippingCost = 15;
        let array = ();



        this.cartList.forEach((product) => total += product.price);

        if (array.length > 3 && array.length <10 ) {
            finalPrice = total + shippingCost;
        } else  if ( array.length > 10)
            finalPrice = total ;
            else { console.log ("No se permiten envíos menores a 3 productos")
        } // else

        return finalPrice;

}// CalculateTotal

        const paqueteUno= [{
            name: "Libreta",
            price: 99.99
        },

          ];// paqueteUno


        const paqueteDos= [{
            name: "Libreta",
            price: 99.99
        },
        {
            name: "Calculadora",
            price: 340
        },
        {
            name: "Diccionario",
            price: 70.99
        }
        {
            name: "Regla",
            price: 5.99
        },
        {
            name: "Boligrafo",
            price: 15.10
        },
        {
            name: "Papel adhesivo",
            price: 16.99
        }
      {
            name: "Lapicera",
            price: 150.99
        }
        {
            name: "Archivero",
            price: 490.99
        },
        {
            name: "Pisapapeles",
            price: 45.10
        },
        {
            name: "Clips",
            price: 13.99
        }
         {
            name: "Clips",
            price: 35
        }

     
          ];// paqueteDos

          
        const paqueteTres= [{
            name: "Libreta",
            price: 99.99
        },
        {
            name: "Calculadora",
            price: 340
        },
        {
            name: "Diccionario",
            price: 70.99
        }
        {
            name: "Regla",
            price: 5.99
        },
        {
            name: "Boligrafo",
            price: 15.10
        },
        {
            name: "Papel adhesivo",
            price: 16.99
        }
      {
            name: "Lapicera",
            price: 150.99
        }
        {
            name: "Archivero",
            price: 490.99
        },
        {
            name: "Pisapapeles",
            price: 45.10
        },
        {
            name: "Clips",
            price: 13.99
        }
         {
            name: "ClipsPro",
            price: 35
        }

        {name: "Libreta Francesa",
            price: 99.99
        },
        {
            name: "Graficadora",
            price: 1000
        },
        {
            name: "DiccionarioOxford",
            price: 470.99
        }
        {
            name: "Escuadra",
            price: 15.99
        },
        {
            name: "BoligrafoFino",
            price: 25.10
        },
        {
            name: "Papel kraft",
            price: 30.99
        }
      {
            name: "Papel Bond",
            price: 6.99
        }
        {
            name: "Cartulina",
            price: 12.99
        },
        {
            name: "Mochila",
            price: 235.10
        },
        {
            name: "Chinchetas",
            price: 24.99
        }
         {
            name: "Sello",
            price: 54
        }
     
          ];// paqueteTres



