//Number 1

console.log("Abia 	Umuahia"
+
    "Adamawa 	Yola"
    +
    'Akwa Ibom 	Uyo'
    +
    'Anambra 	Awka'
    +
    'Bauchi 	Bauchi'
    +
    'Bayelsa 	Yenagoa'
    +
    'Benue 	Makurdi'
    +
    'Borno 	Maiduguri'
    +
    'Cross River 	Calabar'
    +
    'Delta 	Asaba'
    +
    'Ebonyi 	Abakaliki'
    +
    'Edo 	Benin City'
    +
    'Ekiti 	Ado Ekiti'
    +
    'Enugu 	Enugu'
    +
    'Gombe 	Gombe'
    +
    'Imo 	Owerri'
    +
    'Jigawa 	Dutse'
    +
    'Kaduna 	Kaduna'
    +
    'Kano 	Kano'
    +
    'Katsina 	Katsina'
    +
    'Kebbi 	Birnin Kebbi'
   )

   //Number 2


   const state ="kano"

   if(state === 'abuja'){

    console.log("This is abuja the FCT")

   }else if(state === "ado ekiti"){

    console.log("ado ekiti")

   }else if(state ==="enugu"){

    console.log("This is ")

   }else if(state === 'kano'){
     console.log('this is Kano super')



   }else if(state === 'bauchi'){
     console.log('This is bauchi')


   }else if(state === 'akwa ibom'){
     console.log('Uyo')


   }else if(state === 'bayesla'){
     console.log('Yongeaua');
   }


switch(state) {
  case 'abuja':
    console.log("This is abuja the FCT")
    break;
    case 'Ekiti':
    console.log("ado ekiti")
    break;
  case 'Ado ekiti'  :
    console.log("ekiti")
    break;
  case 'adawnma':
    console.log("yola")
    break;
  case 'bauchi':
    console.log("This is bauchi")
    break;
    case 'akwa':
    console.log("capital of ibon")
    break;
    case 'Akwa ibom':
    console.log("uyo")

    case 'lagos':
    console.log("Ikeja")
    break;
    case 'abia':
    console.log("umahai")
    break;
    case 'kaduna':
    console.log("kaduna")
    break;
   
    
  default:
    console.log("Incorrect")
}